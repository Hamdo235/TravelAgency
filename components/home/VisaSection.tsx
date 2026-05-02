import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { destinations } from '@/data/kodbe'
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'

export default function VisaSection() {
  const popular = destinations.filter((d) => d.popular)

  return (
    <section className="py-24" style={{ background: '#f0f7ff' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="section-tag mb-4">Visas & Destinations</span>
            <h2 className="font-display font-800 text-brand mt-4"
              style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)' }}>
              Voyagez l'esprit léger :<br />
              <span className="gradient-text">votre visa en toute simplicité</span>
            </h2>
          </div>
          <Link href="/destinations"
            className="inline-flex items-center gap-2 text-brand-mid font-body font-600 text-sm hover:gap-3 transition-all group">
            Tous les pays
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>

        {/* Country cards */}
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {popular.map((dest) => (
            <StaggerItem key={dest.slug}>
              <Link
                href={`/destinations/${dest.slug}`}
                className="group block relative rounded-2xl overflow-hidden h-44 card"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-600 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/30 to-transparent" />

                {/* Flag badge */}
                <div className="absolute top-3 right-3 text-2xl">{dest.flag}</div>

                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-display font-700 text-white text-base leading-tight">{dest.name}</p>
                  <p className="font-body text-white/55 text-xs mt-0.5">{dest.visaType}</p>
                  <span className="inline-block mt-2 px-2.5 py-1 rounded-full text-[10px] font-display font-700 uppercase tracking-wide"
                    style={{ background: 'rgba(245,158,11,0.9)', color: '#08193f' }}>
                    Visa disponible
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}

          {/* CTA card */}
          <StaggerItem>
            <Link href="/destinations"
              className="group flex flex-col items-center justify-center h-44 rounded-2xl border-2 border-dashed border-brand-light/30 hover:border-teal text-center p-4 transition-all duration-300 hover:bg-white">
              <span className="text-4xl mb-3">🌍</span>
              <p className="font-display font-700 text-brand text-sm">+ 7 pays</p>
              <p className="font-body text-muted text-xs mt-1">Voir tous les visas</p>
              <ArrowRight size={15} className="text-teal mt-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </StaggerItem>
        </StaggerContainer>

        {/* Info note */}
        <AnimatedSection delay={0.3} className="mt-8">
          <div className="flex flex-wrap items-center gap-3 p-5 bg-white rounded-2xl border border-blue-100">
            <span className="text-2xl">ℹ️</span>
            <p className="font-body text-muted text-sm flex-1">
              <strong className="text-brand">Constitution du dossier incluse.</strong> KODBE vous accompagne de A à Z dans vos démarches de visa :
              formulaires, pièces justificatives, suivi de la demande et conseils personnalisés.
            </p>
            <Link href="/contact" className="btn-brand text-xs px-5 py-2.5 whitespace-nowrap">
              Commencer ma demande
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
