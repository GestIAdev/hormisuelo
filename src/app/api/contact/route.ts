import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  const { name, email, phone, message } = await request.json()

  // Configurar transportador SMTP usando variables de entorno.
  // Debes crear .env.local con las siguientes variables:
  // SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_TO

  const SMTP_HOST = process.env.SMTP_HOST
  const SMTP_PORT = Number(process.env.SMTP_PORT || 587)
  const SMTP_USER = process.env.SMTP_USER
  const SMTP_PASS = process.env.SMTP_PASS
  const EMAIL_TO = process.env.EMAIL_TO || 'hormisuelo@hotmail.com'

  console.log('Enviando email de contacto a:', EMAIL_TO)

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.error('SMTP no configurado correctamente en variables de entorno')
    return NextResponse.json({ success: false, error: 'SMTP not configured' }, { status: 500 })
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465, // true for 465, false for other ports
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })

  const mailOptions = {
    from: `${name} <${email}>`,
    to: EMAIL_TO,
    subject: `Contacto desde sitio - ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || 'N/A'}\n\nMensaje:\n${message}`,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('Email enviado:', info.messageId)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error enviando email:', err)
    return NextResponse.json({ success: false, error: 'Error sending email' }, { status: 500 })
  }
}