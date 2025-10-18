import nodemailer from 'nodemailer'

export const sendEmailNotification = async (lead) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  })

  await transporter.sendMail({
    from: '"InsureInvest" <no-reply@insureinvest.com>',
    to: 'admin@insureinvest.com',
    subject: 'New Lead Submitted',
    html: `<p>New lead:</p>
           <ul>
             <li>Name: ${lead.name}</li>
             <li>Email: ${lead.email}</li>
             <li>Phone: ${lead.phone}</li>
           </ul>`
  })
}
