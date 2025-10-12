import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()

  // Aquí integrar envío de email
  // Por ejemplo, usando SendGrid o similar

  console.log('Mensaje de contacto:', { name, email, message })

  return NextResponse.json({ success: true })
}