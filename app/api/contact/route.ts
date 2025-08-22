import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, type } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    let subject: string
    let htmlContent: string

    if (type === 'newsletter') {
      // Newsletter signup
      subject = 'New Newsletter Subscription - Vervid AI'
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">New Newsletter Subscription</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subscription Date:</strong> ${new Date().toLocaleDateString()}</p>
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="color: #6b7280; font-size: 14px;">
            This person has subscribed to your weekly AI updates newsletter.
            You may want to add them to your mailing list.
          </p>
        </div>
      `
    } else {
      // General question/inquiry
      subject = 'New Contact Form Inquiry - Vervid AI'
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">New Contact Form Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 10px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          <p><strong>Received:</strong> ${new Date().toLocaleString()}</p>
          
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="color: #6b7280; font-size: 14px;">
            Reply to this person at: <a href="mailto:${email}" style="color: #4F46E5;">${email}</a>
          </p>
        </div>
      `
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Vervid Website <noreply@vervidai.com>',
      to: ['hello@vervidai.com'], // Your business email
      subject: subject,
      html: htmlContent,
      replyTo: email, // Allow direct reply to the person who contacted you
    })

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        id: data.data?.id || 'unknown'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
