import Link from 'next/link'
import {
  Plane, Building2, FileText, Star, HeartPulse, Car, ArrowRight
} from 'lucide-react'
import { services } from '@/data/kodbe'
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'

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

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span className="section-tag mb-4">Nos Prestations</span>
          <h2 className="font-display font-800 text-brand mt-4 mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
            Tout ce dont vous avez besoin<br />
            <span className="gradient-text">pour voyager sereinement</span>
          </h2>
          <p className="font-body text-muted text-base max-w-xl mx-auto">
            De la billetterie à l'évacuation médicale — KODBE Travel & Tours vous accompagne à chaque étape de votre voyage.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => {
            const Icon = iconMap[svc.icon] || Plane
            return (
              <StaggerItem key={svc.id}>
                <div className="card p-7 group h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: gradients[svc.id] }}
                  >
                    <Icon size={24} color="white" strokeWidth={2} />
                  </div>

                  <h3 className="font-display font-700 text-brand text-xl mb-2">{svc.title}</h3>
                  <p className="font-body text-muted text-sm leading-relaxed mb-5 flex-1">{svc.description}</p>

                  {/* Feature list */}
                  <ul className="space-y-2 mb-6">
                    {svc.details.slice(0, 4).map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs font-body text-slate-600">
                        <span className="text-teal mt-0.5 flex-shrink-0">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/offres#${svc.id}`}
                    className="inline-flex items-center gap-1.5 text-brand-mid font-body font-600 text-sm group/link hover:gap-2.5 transition-all duration-300"
                  >
                    En savoir plus
                    <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* CTA band */}
        <AnimatedSection delay={0.3} className="mt-14">
          <div className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
            style={{ background: 'linear-gradient(135deg, #0f2d6b 0%, #1a4bba 60%, #0891b2 100%)' }}>
            <div>
              <h3 className="font-display font-800 text-white text-2xl mb-2">Vous ne savez pas par où commencer ?</h3>
              <p className="font-body text-white/65 text-sm">Notre équipe est disponible pour vous conseiller et préparer votre voyage.</p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link href="/contact" className="btn-primary whitespace-nowrap">
                Devis gratuit
              </Link>
              <a
                href="https://wa.me/0023566214822"
                target="_blank" rel="noopener noreferrer"
                className="btn-white whitespace-nowrap text-brand"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
