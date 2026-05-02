import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'
import { testimonials } from '@/data/kodbe'
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'

export default function TestimonialsPreview() {
  const preview = testimonials.slice(0, 3)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-tag mb-4">Avis clients</span>
            <h2 className="font-display font-800 text-brand mt-4"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}>
              Ils nous font confiance
            </h2>
          </div>
          <Link href="/temoignages"
            className="inline-flex items-center gap-2 text-brand-mid font-body font-600 text-sm hover:gap-3 transition-all group">
            Tous les témoignages
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preview.map((t) => (
            <StaggerItem key={t.id}>
              <div className="card p-7 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" className="text-amber-light" />
                  ))}
                </div>

                {/* Trip badge */}
                <span className="inline-block px-3 py-1.5 rounded-full text-xs font-display font-700 mb-4"
                  style={{ background: 'rgba(8,145,178,0.10)', color: '#0891b2' }}>
                  ✈ {t.trip}
                </span>

                <p className="font-body text-slate-600 text-sm leading-loose flex-1 mb-6">
                  « {t.text.slice(0, 160)}... »
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  {/* Avatar initials */}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-700 text-white text-sm flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #1a4bba, #0891b2)' }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-body text-slate-800 text-sm font-600">{t.name}</p>
                    <p className="font-body text-muted text-xs">{t.city} · {t.date}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust line */}
        <AnimatedSection delay={0.3} className="mt-10 text-center">
          <p className="font-body text-muted text-sm">
            <strong className="text-brand">100% de clients satisfaits</strong> — Tous nos avis sont authentiques et vérifiables.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
