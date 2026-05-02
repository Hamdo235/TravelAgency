import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MessageCircle, CheckCircle, X } from 'lucide-react'
import { services } from '@/data/kodbe'
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { Plane, Building2, FileText, Star, HeartPulse, Car } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Nos Services',
  description:
    'Billetterie aérienne, réservation d\'hôtels, visas, Hadj & Omra, évacuation sanitaire et location de véhicules. KODBE Travel & Tours, N\'Djaména.',
}

const iconMap: Record<string, React.ElementType> = {
  Plane, Building2, FileText, Star, HeartPulse, Car,
}

const gradients: Record<string, string> = {
  billetterie: 'linear-gradient(135deg, #1a4bba, #0891b2)',
  hotels:      'linear-gradient(135deg, #0891b2, #06b6d4)',
  visas:       'linear-gradient(135deg, #d97706, #f59e0b)',
  'hadj-omra': 'linear-gradient(135deg, #059669, #0891b2)',
  evacuation:  'linear-gradient(135deg, #dc2626, #f87171)',
  location:    'linear-gradient(135deg, #7c3aed, #2563eb)',
}

export default function OffresPage() {
  return (
    <div className="page-in">
      {/* Header */}
      <div className="relative pt-32 pb-24 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #08193f 0%, #0f2d6b 60%, #0a3060 100%)' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <span className="section-tag mb-5" style={{ background: 'rgba(6,182,212,0.12)', color: '#06b6d4', borderColor: 'rgba(6,182,212,0.25)' }}>
              Nos Prestations
            </span>
            <h1 className="font-display font-900 text-white mt-5 mb-5"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Tous nos services<br />
              <span style={{ color: '#f59e0b' }}>voyage & tourisme</span>
            </h1>
            <p className="font-body text-white/65 text-lg max-w-xl">
              De la billetterie à l'évacuation d'urgence — KODBE couvre tous vos besoins de voyage depuis N'Djaména.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-sky to-transparent z-10" />
      </div>

      {/* Services */}
      <section className="py-20" style={{ background: '#f0f7ff' }}>
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon] || Plane
            return (
              <AnimatedSection key={svc.id} delay={i * 0.08} id={svc.id}>
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                  <div className={`grid grid-cols-1 lg:grid-cols-5 ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Color band */}
                    <div
                      className={`lg:col-span-1 flex flex-col items-center justify-center p-10 text-white ${i % 2 === 1 ? 'lg:col-start-5' : ''}`}
                      style={{ background: gradients[svc.id] }}
                    >
                      <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-4">
                        <Icon size={28} color="white" />
                      </div>
                      <p className="font-display font-800 text-lg text-center leading-tight">{svc.title}</p>
                    </div>

                    {/* Content */}
                    <div className={`lg:col-span-4 p-8 md:p-10 ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <p className="font-body text-slate-600 text-base leading-relaxed mb-7 max-w-2xl">
                        {svc.description}
                      </p>

                      {/* Details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {svc.details.map((d) => (
                          <div key={d} className="flex items-start gap-2.5 font-body text-slate-700 text-sm">
                            <CheckCircle size={14} className="text-teal mt-0.5 flex-shrink-0" />
                            {d}
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex flex-wrap gap-3">
                        <Link href="/contact"
                          className="btn-brand text-sm">
                          Demander un devis
                        </Link>
                        {svc.id === 'evacuation' && (
                          <a href="tel:+23566214822"
                            className="flex items-center gap-2 px-6 py-3 rounded-full font-display font-700 text-sm bg-red-600 text-white hover:bg-red-700 hover:scale-105 transition-all">
                            <Phone size={14} /> Urgence : Appeler maintenant
                          </a>
                        )}
                        <a href="https://wa.me/0023566214822"
                          target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 rounded-full font-display font-700 text-sm bg-green-600 text-white hover:bg-green-700 hover:scale-105 transition-all">
                          <MessageCircle size={14} /> WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </section>

      {/* Process section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <span className="section-tag mb-4">Comment ça marche</span>
            <h2 className="font-display font-800 text-brand mt-4"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
              Votre voyage en 4 étapes simples
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Contactez-nous', desc: 'Par téléphone, WhatsApp ou formulaire. Dites-nous votre destination et vos besoins.', icon: '📞' },
              { step: '02', title: 'Recevez votre devis', desc: 'Dans les 2 heures, vous recevez une proposition complète et personnalisée.', icon: '📋' },
              { step: '03', title: 'Confirmez & payez', desc: 'Après confirmation, nous prenons en charge toutes les démarches pour vous.', icon: '✅' },
              { step: '04', title: 'Bon voyage !', desc: 'Billets en main, visa obtenu, hôtel réservé — vous partez l\'esprit léger.', icon: '✈️' },
            ].map(({ step, title, desc, icon }) => (
              <div key={step} className="relative">
                <div className="card p-7 text-center h-full">
                  <span className="text-4xl block mb-3">{icon}</span>
                  <div className="inline-block px-3 py-1 rounded-full font-display font-900 text-xs mb-4"
                    style={{ background: 'rgba(8,145,178,0.1)', color: '#0891b2' }}>
                    Étape {step}
                  </div>
                  <h3 className="font-display font-700 text-brand text-lg mb-2">{title}</h3>
                  <p className="font-body text-muted text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
