import nodemailer from 'nodemailer'
import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'

export const Route = createFileRoute('/api/send-email' as any)({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json() as { 
            name: string
            email: string
            message: string 
          }
          
          const { name, email, message } = body

          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          })

          await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `Hey Dominion, You've a message from ${name}`,
            text: `From: ${name} (${email})\n\n${message}`,
            html: `<p><strong>From:</strong> ${name} (${email})</p>
                   <p>${message}</p>`,
          })

          return json(
            { success: true, message: 'Email sent successfully' },
            { status: 200 }
          )
        } catch (error) {
          console.error('Error sending email:', error)
          return json(
            { success: false, message: 'Failed to send email' },
            { status: 500 }
          )
        }
      },
    },
  },
})