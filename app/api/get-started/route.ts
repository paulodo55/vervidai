import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      company, 
      position, 
      services, 
      message, 
      budget, 
      timeline 
    } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message || !budget || !timeline || !services?.length) {
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

    const fullName = `${firstName} ${lastName}`
    const subject = `New Project Inquiry from ${fullName} - Vervid AI`
    
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">🚀 New Project Inquiry</h1>
        </div>
        
        <div style="background-color: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #4F46E5; margin-top: 0;">Contact Information</h2>
          <table style="width: 100%; margin-bottom: 30px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td>
              <td style="padding: 8px 0; color: #6b7280;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px 0; color: #6b7280;"><a href="mailto:${email}" style="color: #4F46E5;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
              <td style="padding: 8px 0; color: #6b7280;"><a href="tel:${phone}" style="color: #4F46E5;">${phone}</a></td>
            </tr>
            ` : ''}
            ${company ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td>
              <td style="padding: 8px 0; color: #6b7280;">${company}</td>
            </tr>
            ` : ''}
            ${position ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Position:</td>
              <td style="padding: 8px 0; color: #6b7280;">${position}</td>
            </tr>
            ` : ''}
          </table>

          <h2 style="color: #4F46E5;">Project Details</h2>
          <table style="width: 100%; margin-bottom: 30px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Services Interested In:</td>
              <td style="padding: 8px 0; color: #6b7280;">
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  ${services.map((service: string) => 
                    `<span style="background-color: #4F46E5; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px;">${service}</span>`
                  ).join('')}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Budget Range:</td>
              <td style="padding: 8px 0; color: #6b7280;">${budget}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Timeline:</td>
              <td style="padding: 8px 0; color: #6b7280;">${timeline}</td>
            </tr>
          </table>

          <h2 style="color: #4F46E5;">Project Description</h2>
          <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #4F46E5; margin-bottom: 30px;">
            ${message.replace(/\n/g, '<br>')}
          </div>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          
          <p style="color: #6b7280; font-size: 14px; margin: 0;">
            <strong>Received:</strong> ${new Date().toLocaleString()}<br>
            <strong>Priority:</strong> ${timeline === 'ASAP' ? '🔥 High Priority' : 'Standard'}<br>
            <strong>Next Steps:</strong> Reply within 24 hours with consultation scheduling options
          </p>
        </div>
      </div>
    `

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Vervid Project Inquiries <projects@vervidai.com>',
      to: ['hello@vervid.com'], // Your business email
      subject: subject,
      html: htmlContent,
      replyTo: email,
    })

    return NextResponse.json(
      { 
        message: 'Project inquiry sent successfully',
        id: data.id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Project inquiry email error:', error)
    return NextResponse.json(
      { error: 'Failed to send project inquiry' },
      { status: 500 }
    )
  }
}
