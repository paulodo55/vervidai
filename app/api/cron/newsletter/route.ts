import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getActiveSubscribers, migrateFromEnvToKV } from '@/lib/database'
import { generateNewsletterHTML } from '@/lib/email-templates'
import { generateWeeklyAIRecap } from '@/lib/gemini-client'
import { format } from 'date-fns'

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET(request: NextRequest) {
  const startTime = Date.now()
  console.log('🚀 Starting weekly newsletter generation...')
  
  try {
    // Verify this is coming from Vercel Cron
    const authHeader = request.headers.get('authorization')
    const expectedAuth = `Bearer ${process.env.CRON_SECRET}`
    
    if (!process.env.CRON_SECRET) {
      console.error('❌ CRON_SECRET not configured')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }
    
    if (authHeader !== expectedAuth) {
      console.error('❌ Unauthorized cron attempt:', authHeader?.substring(0, 20) + '...')
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    console.log('✅ Cron authentication verified')

    // Migrate data from env to Redis if needed (one-time migration)
    await migrateFromEnvToKV()

    // Get active subscribers from database
    console.log('📊 Fetching active subscribers...')
    const subscribers = await getActiveSubscribers()
    
    if (subscribers.length === 0) {
      console.log('📭 No active subscribers found')
      
      // Send notification to admin about empty subscriber list
      try {
        await resend.emails.send({
          from: 'Vervid Newsletter System <newsletter@vervidai.com>',
          to: ['hello@vervidai.com'],
          subject: '⚠️ Newsletter Skipped - No Subscribers',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #f59e0b;">⚠️ Weekly Newsletter Skipped</h2>
              <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
              <p><strong>Reason:</strong> No active subscribers found</p>
              
              <p style="color: #6b7280; font-size: 14px;">
                Check your subscriber data and ensure the Redis migration completed successfully.
              </p>
            </div>
          `,
        })
      } catch (notificationError) {
        console.error('❌ Failed to send empty subscriber notification:', notificationError)
      }
      
      return NextResponse.json({
        success: true,
        message: 'No active subscribers found - newsletter skipped',
        count: 0,
        timestamp: new Date().toISOString()
      })
    }

    console.log(`✅ Found ${subscribers.length} active subscribers`)

    // Generate AI content for this week
    console.log('🤖 Generating AI content...')
    const weekOf = format(new Date(), 'MMMM dd, yyyy')
    const aiContent = await generateWeeklyAIRecap(weekOf)
    
    const newsletterContent = {
      title: aiContent.title,
      content: aiContent.content,
      excerpt: aiContent.excerpt,
      date: format(new Date(), 'MMMM dd, yyyy')
    }

    console.log(`📝 Generated newsletter: "${newsletterContent.title}"`)

    // Send to all subscribers with improved error handling
    console.log('📧 Sending emails to subscribers...')
    const emailPromises = subscribers.map(async (subscriber, index) => {
      try {
        const htmlContent = generateNewsletterHTML(newsletterContent, subscriber.unsubscribeToken)
        
        const result = await resend.emails.send({
          from: 'Vervid AI Weekly <newsletter@vervidai.com>',
          to: [subscriber.email],
          subject: newsletterContent.title,
          html: htmlContent,
        })
        
        console.log(`✅ Email sent to ${subscriber.email} (${index + 1}/${subscribers.length})`)
        return { success: true, email: subscriber.email, result }
      } catch (error) {
        console.error(`❌ Failed to send email to ${subscriber.email}:`, error)
        return { success: false, email: subscriber.email, error }
      }
    })

    // Send all emails with timeout
    console.log('⏳ Waiting for all emails to send...')
    const results = await Promise.allSettled(emailPromises)
    
    // Analyze results
    const successful = results.filter(result => 
      result.status === 'fulfilled' && result.value.success
    ).length
    const failed = results.filter(result => 
      result.status === 'rejected' || (result.status === 'fulfilled' && !result.value.success)
    ).length

    console.log(`📊 Email results: ${successful} successful, ${failed} failed`)

    // Send admin notification
    await resend.emails.send({
      from: 'Vervid Newsletter System <newsletter@vervidai.com>',
      to: ['hello@vervidai.com'],
      subject: `✅ Weekly Newsletter Sent - ${successful} delivered`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">📧 Weekly Newsletter Successfully Sent</h2>
          <p><strong>Date:</strong> ${newsletterContent.date}</p>
          <p><strong>Subject:</strong> ${newsletterContent.title}</p>
          <p><strong>Total Subscribers:</strong> ${subscribers.length}</p>
          <p><strong>✅ Successfully Sent:</strong> ${successful}</p>
          <p><strong>❌ Failed:</strong> ${failed}</p>
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <h3>📝 Content Preview:</h3>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; font-style: italic;">
            ${newsletterContent.excerpt}
          </div>
          
          <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">
            🤖 This newsletter was automatically generated and sent by your Vervid newsletter system.
          </p>
        </div>
      `,
    })

    const executionTime = Date.now() - startTime
    console.log(`✅ Admin notification sent`)
    console.log(`🎉 Newsletter generation completed in ${executionTime}ms`)

    return NextResponse.json({
      success: true,
      message: 'Weekly newsletter sent successfully',
      stats: {
        totalSubscribers: subscribers.length,
        successful,
        failed,
        executionTimeMs: executionTime
      },
      newsletter: {
        subject: newsletterContent.title,
        date: newsletterContent.date
      },
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Weekly newsletter cron error:', error)
    
    // Send error notification to admin
    try {
      await resend.emails.send({
        from: 'Vervid Newsletter System <newsletter@vervidai.com>',
        to: ['hello@vervidai.com'],
        subject: '❌ Weekly Newsletter Failed',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #dc2626;">❌ Weekly Newsletter Sending Failed</h2>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Error:</strong> ${error instanceof Error ? error.message : 'Unknown error'}</p>
            
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
            
            <p style="color: #6b7280; font-size: 14px;">
              The automated weekly newsletter failed to send. Please check the system logs and try again manually if needed.
            </p>
            
            <p style="color: #6b7280; font-size: 14px;">
              <strong>Manual send URL:</strong><br>
              <code>https://vervidai.com/api/newsletter/send?key=YOUR_ADMIN_KEY</code>
            </p>
          </div>
        `,
      })
    } catch (notificationError) {
      console.error('Failed to send error notification:', notificationError)
    }

    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to send weekly newsletter',
        message: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}
