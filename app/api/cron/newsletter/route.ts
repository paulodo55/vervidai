import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getActiveSubscribers } from '@/lib/subscribers'
import { generateNewsletterHTML } from '@/lib/email-templates'
import { generateWeeklyAIRecap } from '@/lib/gemini-client'
import { format } from 'date-fns'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET(request: NextRequest) {
  try {
    // Verify this is coming from Vercel Cron
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    console.log('Starting weekly newsletter generation...')

    // Get active subscribers
    const subscribers = getActiveSubscribers()
    
    if (subscribers.length === 0) {
      console.log('No active subscribers found')
      return NextResponse.json({
        message: 'No active subscribers found',
        count: 0
      })
    }

    console.log(`Found ${subscribers.length} active subscribers`)

    // Generate AI content for this week
    console.log('Generating AI content...')
    const weekOf = format(new Date(), 'MMMM dd, yyyy')
    const aiContent = await generateWeeklyAIRecap(weekOf)
    
    const newsletterContent = {
      title: aiContent.title,
      content: aiContent.content,
      excerpt: aiContent.excerpt,
      date: format(new Date(), 'MMMM dd, yyyy')
    }

    console.log(`Generated newsletter: "${newsletterContent.title}"`)

    // Send to all subscribers
    console.log('Sending emails to subscribers...')
    const emailPromises = subscribers.map(async (subscriber) => {
      const htmlContent = generateNewsletterHTML(newsletterContent, subscriber.unsubscribeToken)
      
      return resend.emails.send({
        from: 'Vervid AI Weekly <newsletter@vervidai.com>',
        to: [subscriber.email],
        subject: newsletterContent.title,
        html: htmlContent,
      })
    })

    // Send all emails
    const results = await Promise.allSettled(emailPromises)
    
    // Count successes and failures
    const successful = results.filter(result => result.status === 'fulfilled').length
    const failed = results.filter(result => result.status === 'rejected').length

    console.log(`Email results: ${successful} successful, ${failed} failed`)

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

    console.log('Admin notification sent')

    return NextResponse.json({
      success: true,
      message: 'Weekly newsletter sent successfully',
      totalSubscribers: subscribers.length,
      successful,
      failed,
      subject: newsletterContent.title,
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
