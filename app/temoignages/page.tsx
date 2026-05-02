import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, CheckCircle, ArrowRight } from 'lucide-react'
import { testimonials } from '@/data/kodbe'
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Témoignages Clients',
  description:
    'Découvrez les avis de nos clients : évacuations médicales, Omra, visas, voyages touristiques. KODBE Travel & Tours, agence de confiance à N\'Djaména.',
}

const gradients = [
  'linear-gradient(135deg, #1a4bba, #0891b2)',
  'linear-gradient(135deg, #0891b2, #06b6d4)',
  'linear-gradient(135deg, #d97706, #f59e0b)',
  'linear-gradient(135deg, #059669, #0891b2)',
  'linear-gradient(135deg, #7c3aed, #2563eb)',
  'linear-gradient(135deg, #dc2626, #f87171)',
]

export default function TemoignagesPage() {
  return (
    <div className="page-in">
      {/* Header */}
      <div className="pt-32 pb-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #08193f 0%, #0f2d6b 70%, #0891b2 100%)' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <span className="section-tag mb-5" style={{ background: 'rgba(6,182,212,0.12)', color: '#06b6d4', borderColor: 'rgba(6,182,212,0.25)' }}>
              Avis clients
            </span>
            <h1 className="font-display font-900 text-white mt-5 mb-5"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Ils nous font confiance
            </h1>
            <p className="font-body text-white/65 text-lg max-w-xl">
              Des clients réels, des expériences authentiques. Découvrez ce que disent ceux qui ont voyagé avec KODBE.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-sky to-transparent z-10" />
      </div>

      {/* Stats */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '100%', label: 'Clients satisfaits' },
              { value: '6+',   label: 'Types de services' },
              { value: '24h',  label: 'Urgences gérées' },
              { value: '7',    label: 'Pays de destinations' },
            ].map(({ value, label }) => (
              <StaggerItem key={label}>
                <div className="text-center">
                  <p className="font-display font-900 text-4xl text-brand mb-1">{value}</p>
                  <p className="font-body text-muted text-sm">{label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: '#f0f7ff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <StaggerItem key={t.id}>
                <div className="card h-full flex flex-col overflow-hidden">
                  {/* Top colored strip */}
                  <div className="h-1.5" style={{ background: gradients[i % gradients.length] }} />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={14} fill="#f59e0b" className="text-amber-light" />
                      ))}
                    </div>

                    {/* Trip badge */}
                    <span className="inline-block px-3 py-1.5 rounded-full text-xs font-display font-700 mb-4"
                      style={{ background: 'rgba(8,145,178,0.10)', color: '#0891b2' }}>
                      ✈ {t.trip}
                    </span>

                    {/* Text */}
                    <p className="font-body text-slate-600 text-sm leading-loose flex-1 mb-6">
                      « {t.text} »
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center font-display font-800 text-white text-sm flex-shrink-0"
                        style={{ background: gradients[i % gradients.length] }}>
                        {t.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="font-body text-slate-800 text-sm font-600">{t.name}</p>
                        <p className="font-body text-muted text-xs">{t.city} · {t.date}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-body font-600"
                        style={{ color: '#059669' }}>
                        <CheckCircle size={12} />
                        Vérifié
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTA */}
          <AnimatedSection delay={0.3} className="mt-14">
            <div className="rounded-2xl p-10 text-center text-white relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0f2d6b, #1a4bba 60%, #0891b2)' }}>
              <h2 className="font-display font-900 text-3xl mb-3">À vous de jouer !</h2>
              <p className="font-body text-white/65 text-base mb-7 max-w-md mx-auto">
                Rejoignez nos clients satisfaits. Contactez KODBE et planifiez votre prochain voyage dès aujourd'hui.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="btn-primary px-10">
                  Demander un devis gratuit <ArrowRight size={14} />
                </Link>
                <Link href="/offres" className="btn-outline px-10">
                  Nos services
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
