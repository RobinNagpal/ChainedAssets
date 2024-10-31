import { SES } from '@aws-sdk/client-ses'
import { NextApiRequest, NextApiResponse } from 'next'

const ses = new SES({
  region: process.env.AWS_REGION,
})

const sendContactEmail = async (
  name: string,
  email: string,
  message: string,
) => {
  const from = 'support@tidbitshub.org'
  const subject = 'Contact Form from Chained Assets'
  const bodyHtml = `
    <html>
      <body>
        <h1>New Message from Chained Assets Contact Form</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </body>
    </html>
  `

  return ses.sendEmail({
    Source: from,
    Destination: { ToAddresses: ['robin@example.com'] },
    Message: {
      Subject: { Data: subject },
      Body: {
        Html: { Data: bodyHtml },
      },
    },
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    try {
      await sendContactEmail(name, email, message)
      res.status(200).json({ message: 'Email sent successfully!' })
    } catch (error) {
      console.error('Error sending email:', error)
      res.status(500).json({ error: 'Failed to send email' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
