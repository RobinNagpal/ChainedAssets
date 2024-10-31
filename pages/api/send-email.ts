// pages/api/send-email.ts
import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Configure your email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Replace with your email service
      auth: {
        user: 'alikhan9k9@gmail.com', // Email account
        pass: 'aliali9k9', // Password
      },
    })

    // Email options
    const mailOptions = {
      from: email,
      to: 'alikhan9k9@gmail.com',
      subject: `Contact Form Submission from ${name}`,
      text: `Message from ${name} (${email}):\n\n${message}`,
    }

    try {
      // Send email
      await transporter.sendMail(mailOptions)
      return res.status(200).json({ message: 'Email sent successfully' })
    } catch (error) {
      console.error('Error sending email:', error)
      return res.status(500).json({ error: 'Failed to send email' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
