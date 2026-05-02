import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, service, destination, departure, travelers, message } = body

    if (!name || !phone || !service) {
      return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'KODBE Contact <onboarding@resend.dev>',
      to: ['Kodbetravel@gmail.com'],
      subject: `Nouvelle demande : ${service} — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;background:#f0f7ff;border-radius:12px;">
          <h2 style="color:#0f2d6b;margin-bottom:16px;">📋 Nouvelle demande via kodbe-travel.vercel.app</h2>

          <table style="width:100%;border-collapse:collapse;background:white;border-radius:8px;overflow:hidden;">
            <tr style="background:#0f2d6b;color:white;">
              <th style="padding:12px 16px;text-align:left;">Champ</th>
              <th style="padding:12px 16px;text-align:left;">Valeur</th>
            </tr>
            <tr><td style="padding:10px 16px;border-bottom:1px solid #eee;font-weight:600;">Nom</td><td style="padding:10px 16px;border-bottom:1px solid #eee;">${name}</td></tr>
            <tr><td style="padding:10px 16px;border-bottom:1px solid #eee;font-weight:600;">Téléphone</td><td style="padding:10px 16px;border-bottom:1px solid #eee;">${phone}</td></tr>
            <tr><td style="padding:10px 16px;border-bottom:1px solid #eee;font-weight:600;">Email</td><td style="padding:10px 16px;border-bottom:1px solid #eee;">${email || '—'}</td></tr>
            <tr><td style="padding:10px 16px;border-bottom:1px solid #eee;font-weight:600;">Service</td><td style="padding:10px 16px;border-bottom:1px solid #eee;">${service}</td></tr>
            <tr><td style="padding:10px 16px;border-bottom:1px solid #eee;font-weight:600;">Destination</td><td style="padding:10px 16px;border-bottom:1px solid #eee;">${destination || '—'}</td></tr>
            <tr><td style="padding:10px 16px;border-bottom:1px solid #eee;font-weight:600;">Date départ</td><td style="padding:10px 16px;border-bottom:1px solid #eee;">${departure || '—'}</td></tr>
            <tr><td style="padding:10px 16px;border-bottom:1px solid #eee;font-weight:600;">Voyageurs</td><td style="padding:10px 16px;border-bottom:1px solid #eee;">${travelers || '—'}</td></tr>
            <tr><td style="padding:10px 16px;font-weight:600;vertical-align:top;">Message</td><td style="padding:10px 16px;">${message || '—'}</td></tr>
          </table>

          <p style="color:#64748b;font-size:12px;margin-top:16px;text-align:center;">
            Envoyé depuis le formulaire de contact KODBE Travel & Tours
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Erreur serveur. Veuillez réessayer.' }, { status: 500 })
  }
}
