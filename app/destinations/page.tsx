import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, CheckCircle, ArrowRight } from 'lucide-react'
import { destinations } from '@/data/kodbe'
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Destinations & Assistance Visa',
  description:
    'KODBE vous aide à obtenir votre visa pour la Tunisie, la Turquie, Dubaï, le Maroc, l\'Inde, l\'Arabie Saoudite et l\'Égypte. Dossier complet pris en charge.',
}

export default function DestinationsPage() {
  return (
    <div className="page-in">
      {/* Header */}
      <div className="relative pt-32 pb-24 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #08193f 0%, #0f2d6b 60%, #0891b2 100%)' }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80"
            alt="Passeports et destinations"
            fill className="object-cover opacity-10" sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <span className="section-tag mb-5" style={{ background: 'rgba(6,182,212,0.12)', color: '#06b6d4', borderColor: 'rgba(6,182,212,0.25)' }}>
              Assistance Visas
            </span>
            <h1 className="font-display font-900 text-white mt-5 mb-5"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Voyagez l'esprit léger :<br />
              <span style={{ color: '#f59e0b' }}>votre visa en toute simplicité</span>
            </h1>
            <p className="font-body text-white/65 text-lg max-w-xl leading-relaxed">
              KODBE prend en charge la constitution et le suivi de vos dossiers de visa pour 7 destinations. Rapide, fiable, professionnel.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
      </div>

      {/* Destinations grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="mb-10">
            <p className="font-body text-muted text-base">
              <strong className="text-brand">{destinations.length} destinations</strong> disponibles. Sélectionnez un pays pour voir les détails visa et nous contacter.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {destinations.map((dest) => (
              <StaggerItem key={dest.slug}>
                <Link href={`/destinations/${dest.slug}`}
                  className="card group block overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={dest.image} alt={dest.name}
                      fill className="object-cover transition-transform duration-600 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/75 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 text-4xl">{dest.flag}</div>
                    {dest.popular && (
                      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-[10px] font-display font-700 uppercase"
                        style={{ background: 'rgba(245,158,11,0.9)', color: '#08193f' }}>
                        Populaire
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4">
                      <p className="font-display font-800 text-white text-xl">{dest.name}</p>
                      <p className="font-body text-white/65 text-xs">{dest.continent}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1.5 rounded-full text-xs font-display font-700"
                        style={{ background: 'rgba(8,145,178,0.10)', color: '#0891b2' }}>
                        {dest.visaType}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-body text-muted">
                        <Clock size={11} /> {dest.visaDelay}
                      </span>
                    </div>

                    <p className="font-body text-slate-600 text-sm leading-relaxed mb-5 line-clamp-3">
                      {dest.description}
                    </p>

                    {/* Requirements preview */}
                    <ul className="space-y-1.5 mb-5">
                      {dest.requirements.slice(0, 3).map((r) => (
                        <li key={r} className="flex items-start gap-2 text-xs font-body text-slate-500">
                          <CheckCircle size={11} className="text-teal mt-0.5 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>

                    <span className="inline-flex items-center gap-1.5 text-brand-mid font-600 font-body text-sm group-hover:gap-2.5 transition-all">
                      Voir les détails
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Bottom CTA */}
          <AnimatedSection delay={0.3} className="mt-16 text-center">
            <p className="font-body text-muted mb-5">Votre destination n'est pas dans la liste ?</p>
            <Link href="/contact" className="btn-brand">
              Contactez-nous pour votre visa
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
