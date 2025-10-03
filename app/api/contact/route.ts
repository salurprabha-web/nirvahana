import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, eventType, message } = await request.json()

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter (configure with your email service)
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email to company
    const companyMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.COMPANY_EMAIL || 'info@nirvahanautsav.com',
      subject: `New Contact Form Submission - ${eventType || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1E3A8A, #D4AF37); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #1E3A8A; margin-bottom: 20px;">Contact Details</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Event Type:</strong> ${eventType || 'Not specified'}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #1E3A8A; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #333;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: #1E3A8A; border-radius: 8px; text-align: center;">
              <p style="color: white; margin: 0;">
                <strong>Follow up required within 24 hours</strong>
              </p>
            </div>
          </div>
        </div>
      `,
    }

    // Auto-reply email to customer
    const customerMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting Nirvahana Utsav',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #1E3A8A, #D4AF37); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${name}!</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #1E3A8A; margin-bottom: 20px;">We've received your message</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="line-height: 1.6; color: #333;">
                Thank you for reaching out to Nirvahana Utsav. We're excited to learn about your event requirements and help you create a memorable celebration.
              </p>
              
              <p style="line-height: 1.6; color: #333;">
                Our team will review your inquiry and get back to you within 24 hours with a personalized response and next steps.
              </p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #1E3A8A; margin-top: 0;">Your Message Summary:</h3>
              <p><strong>Event Type:</strong> ${eventType || 'Not specified'}</p>
              <p><strong>Message:</strong> ${message}</p>
            </div>
            
            <div style="background: #1E3A8A; padding: 20px; border-radius: 8px; text-align: center;">
              <h3 style="color: white; margin-top: 0;">Contact Information</h3>
              <p style="color: white; margin: 5px 0;">📞 +91 98765 43210</p>
              <p style="color: white; margin: 5px 0;">✉️ info@nirvahanautsav.com</p>
              <p style="color: white; margin: 5px 0;">📍 123 Event Plaza, MG Road, Mumbai</p>
            </div>
            
            <div style="margin-top: 20px; text-align: center;">
              <p style="color: #666; font-size: 14px;">
                Follow us on social media for event inspiration and updates!
              </p>
            </div>
          </div>
        </div>
      `,
    }

    // Send emails
    await transporter.sendMail(companyMailOptions)
    await transporter.sendMail(customerMailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}