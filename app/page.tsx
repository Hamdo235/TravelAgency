import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import VisaSection from '@/components/home/VisaSection'
import PartnersSection from '@/components/home/PartnersSection'
import TestimonialsPreview from '@/components/home/TestimonialsPreview'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { agencyInfo } from '@/data/kodbe'

export const metadata: Metadata = {
  title: 'KODBE Travel & Tours — Agence de Voyage N\'Djaména, Tchad',
  description:
    'Billetterie aérienne, visas, hôtels, Hadj & Omra, évacuation sanitaire. KODBE Travel & Tours, votre partenaire voyage à N\'Djaména. Devis gratuit.',
}

export default function HomePage() {
  return (
    <div className="page-in">
      {/* 1 — Hero */}
      <Hero />

      {/* 2 — Services */}
      <Services />

      {/* 3 — Visa destinations */}
      <VisaSection />

      {/* 4 — Why KODBE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="section-tag mb-4">Pourquoi nous choisir</span>
            <h2 className="font-display font-800 text-brand mt-4 mb-4"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}>
              KODBE, c'est la différence
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                emoji: '⚡',
                title: 'Réactivité',
                desc: 'Devis en moins de 2h. Pour les urgences médicales, nous agissons dans les heures qui suivent votre appel.',
              },
              {
                emoji: '🤝',
                title: 'Accompagnement complet',
                desc: 'De la réservation au retour, un conseiller dédié répond à toutes vos questions. Aucun client n\'est laissé sans réponse.',
              },
              {
                emoji: '🌐',
                title: 'Réseau international',
                desc: 'Partenaires en Afrique, Moyen-Orient et Europe. Nous vous ouvrons des portes inaccessibles en solo.',
              },
              {
                emoji: '💰',
                title: 'Prix compétitifs',
                desc: 'Grâce à nos accords avec les compagnies aériennes, nous vous proposons les meilleurs tarifs du marché.',
              },
            ].map(({ emoji, title, desc }) => (
              <div key={title} className="card p-7 text-center group">
                <span className="text-4xl block mb-4">{emoji}</span>
                <h3 className="font-display font-700 text-brand text-lg mb-2">{title}</h3>
                <p className="font-body text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Partners & Airlines */}
      <PartnersSection />

      {/* 6 — Testimonials */}
      <TestimonialsPreview />

      {/* 7 — Hadj & Omra spotlight */}
      <section className="py-20"
        style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #ecfeff 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <span className="section-tag mb-5" style={{ background: 'rgba(5,150,105,0.1)', color: '#059669', borderColor: 'rgba(5,150,105,0.25)' }}>
                Service spécialisé
              </span>
              <h2 className="font-display font-800 text-brand mt-4 mb-5"
                style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}>
                🕌 Hadj & Omra :<br />
                <span style={{ color: '#059669' }}>organisez votre voyage spirituel</span>
              </h2>
              <p className="font-body text-muted text-base leading-relaxed mb-6">
                KODBE Travel & Tours est votre partenaire de confiance pour les voyages spirituels en Arabie Saoudite. Visa Omra, billets, hébergement à proximité des lieux saints — nous gérons tout avec sérieux et respect.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Packages Omra disponibles toute l\'année',
                  'Hadj officiel avec quota gouvernemental',
                  'Hébergement à 200m–500m de la Kaaba',
                  'Guide & accompagnateur islamique inclus',
                  'Visa Omra & Hadj facilité par KODBE',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 font-body text-slate-700 text-sm">
                    <span className="text-emerald-600 font-700 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-brand">
                Réserver mon Omra / Hadj
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '12+', label: 'Années d\'expérience Omra' },
                  { value: '500+', label: 'Pèlerins accompagnés' },
                  { value: '4★', label: 'Hôtels proches Haram' },
                  { value: '100%', label: 'Visas obtenus' },
                ].map(({ value, label }) => (
                  <div key={label} className="card p-6 text-center">
                    <p className="font-display font-900 text-4xl mb-1"
                      style={{ color: '#059669' }}>{value}</p>
                    <p className="font-body text-muted text-sm">{label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 8 — Emergency CTA */}
      <section className="py-16 bg-red-50 border-y border-red-100">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🚨</span>
              <div>
                <h3 className="font-display font-800 text-red-700 text-xl">Urgence médicale ?</h3>
                <p className="font-body text-red-600/80 text-sm mt-0.5">
                  Notre équipe organise votre évacuation sanitaire en quelques heures — disponible 24h/24, 7j/7.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+23566214822"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full font-display font-700 text-white text-sm bg-red-600 hover:bg-red-700 hover:scale-105 transition-all">
                <Phone size={15} /> Appeler maintenant
              </a>
              <a href="https://wa.me/0023566214822?text=URGENCE: J'ai besoin d'une évacuation sanitaire"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full font-display font-700 text-red-700 text-sm bg-white border border-red-200 hover:border-red-400 hover:scale-105 transition-all">
                <MessageCircle size={15} /> WhatsApp urgent
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 9 — Contact CTA */}
      <section className="py-20"
        style={{ background: 'linear-gradient(160deg, #0f2d6b, #1a4bba 60%, #0891b2)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-body text-teal-light text-xs tracking-widest uppercase font-700 mb-4">
              Contactez-nous
            </p>
            <h2 className="font-display font-900 text-white text-3xl md:text-4xl mb-6">
              Votre prochain voyage commence ici
            </h2>
            <p className="font-body text-white/65 text-base mb-10 max-w-xl mx-auto">
              Billet d'avion, visa, hôtel ou voyage spirituel — dites-nous votre besoin, nous vous proposons une solution sous 2 heures.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-primary px-10 py-4">
                Obtenir un devis gratuit
              </Link>
              <a href="tel:+23566214822" className="btn-outline px-10 py-4">
                <Phone size={15} /> +235 66 21 48 22
              </a>
            </div>

            {/* Contact info pills */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {[
                { icon: MessageCircle, text: 'WhatsApp Tchad: +235 66 21 48 22',    href: 'https://wa.me/0023566214822' },
                { icon: MessageCircle, text: 'WhatsApp Tunisie: +216 53 63 48 15',  href: 'https://wa.me/0021653634815' },
                { icon: Mail,          text: agencyInfo.email,                       href: `mailto:${agencyInfo.email}` },
                { icon: MapPin,        text: 'Quartier Goudji, N\'Djaména',          href: '#' },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full font-body text-xs text-white/65 hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <Icon size={12} className="text-teal-light" />
                  {text}
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
