import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { getActiveSubscribers, migrateFromEnvToKV } from '@/lib/database'
import { generateNewsletterHTML } from '@/lib/email-templates'
import { generateWeeklyAIRecap } from '@/lib/gemini-client'
import { format } from 'date-fns'

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const startTime = Date.now()
  console.log('🚀 Manual newsletter send initiated...')
  
  try {
    // Verify admin API key
    const { searchParams } = new URL(request.url)
    const apiKey = searchParams.get('key')
    
    if (!process.env.ADMIN_API_KEY) {
      console.error('❌ ADMIN_API_KEY not configured')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }
    
    if (apiKey !== process.env.ADMIN_API_KEY) {
      console.error('❌ Unauthorized manual send attempt')
      return NextResponse.json(
        { error: 'Unauthorized - Invalid API key' },
        { status: 401 }
      )
    }

    console.log('✅ Admin API key verified')

    // Migrate data from env to Redis if needed (one-time migration)
    await migrateFromEnvToKV()

    // Get active subscribers from database
    console.log('📊 Fetching active subscribers...')
    const subscribers = await getActiveSubscribers()
    
    if (subscribers.length === 0) {
      return NextResponse.json(
        { message: 'No active subscribers found', count: 0 },
        { status: 200 }
      )
    }

    // Generate AI content for this week
    const weekOf = format(new Date(), 'MMMM dd, yyyy')
    const aiContent = await generateWeeklyAIRecap(weekOf)
    
    const newsletterContent = {
      title: aiContent.title,
      content: aiContent.content,
      excerpt: aiContent.excerpt,
      date: format(new Date(), 'MMMM dd, yyyy')
    }

    // Send to all subscribers
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

    // Send admin notification
    await resend.emails.send({
      from: 'Vervid Newsletter System <newsletter@vervidai.com>',
      to: ['hello@vervidai.com'],
      subject: `Newsletter Sent - ${successful} delivered, ${failed} failed`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">Weekly Newsletter Sent</h2>
          <p><strong>Date:</strong> ${newsletterContent.date}</p>
          <p><strong>Subject:</strong> ${newsletterContent.title}</p>
          <p><strong>Total Subscribers:</strong> ${subscribers.length}</p>
          <p><strong>Successfully Sent:</strong> ${successful}</p>
          <p><strong>Failed:</strong> ${failed}</p>
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <h3>Content Preview:</h3>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px;">
            ${newsletterContent.excerpt}
          </div>
        </div>
      `,
    })

    return NextResponse.json({
      message: 'Newsletter sent successfully',
      totalSubscribers: subscribers.length,
      successful,
      failed,
      subject: newsletterContent.title
    })

  } catch (error) {
    console.error('Newsletter sending error:', error)
    
    // Send error notification to admin
    try {
      await resend.emails.send({
        from: 'Vervid Newsletter System <newsletter@vervidai.com>',
        to: ['hello@vervidai.com'],
        subject: 'Newsletter Sending Failed',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #dc2626;">Newsletter Sending Error</h2>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Error:</strong> ${error instanceof Error ? error.message : 'Unknown error'}</p>
            
            <p style="color: #6b7280; font-size: 14px;">
              The automated newsletter failed to send. Please check the system and try again.
            </p>
          </div>
        `,
      })
    } catch (notificationError) {
      console.error('Failed to send error notification:', notificationError)
    }

    return NextResponse.json(
      { error: 'Failed to send newsletter' },
      { status: 500 }
    )
  }
}
