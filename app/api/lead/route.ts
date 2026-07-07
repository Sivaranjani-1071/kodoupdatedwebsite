import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone, program, consent } = await request.json()

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'Lead Form <onboarding@resend.dev>', // see note below
      to: 'sivaranjaniexpertspro@gmail.com',
      subject: `New lead: ${name}`,
      html: `
        <h2>New Career Conversation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> +91 ${phone}</p>
        <p><strong>Program:</strong> ${program}</p>
        <p><strong>Consent given:</strong> ${consent ? 'Yes' : 'No'}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email send failed:', err)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}