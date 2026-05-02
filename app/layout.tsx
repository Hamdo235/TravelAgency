import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'KODBE Travel & Tours — Votre Agence de Voyage à N\'Djaména',
    template: '%s | KODBE Travel & Tours',
  },
  description:
    'KODBE Travel & Tours : billetterie aérienne, visas, réservation d\'hôtels, Hadj & Omra, évacuation sanitaire et location de véhicules. Basé à N\'Djaména, Tchad.',
  keywords: [
    'agence de voyage Tchad',
    'KODBE Travel',
    'billet d\'avion N\'Djaména',
    'visa Tchad',
    'Hadj Omra Tchad',
    'agence voyage N\'Djaména',
    'billetterie aérienne Tchad',
    'réservation hôtel Tchad',
  ],
  authors: [{ name: 'KODBE Travel & Tours' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'KODBE Travel & Tours',
    title: 'KODBE Travel & Tours — Explore. Discover. Journey.',
    description: 'Votre partenaire voyage de confiance à N\'Djaména. Billets, visas, hôtels, Hadj & Omra.',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#0f2d6b',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-slate-800 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
