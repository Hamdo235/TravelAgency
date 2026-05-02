import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'
import { agencyInfo, airlines, partners } from '@/data/kodbe'

export const metadata: Metadata = {
  title: 'À Propos de KODBE Travel & Tours',
  description:
    'KODBE Travel & Tours, agence de voyage basée à N\'Djaména depuis plus de 5 ans. Notre mission : vous offrir un service de voyage complet, fiable et accessible.',
}

export default function AProposPage() {
  return (
    <div className="page-in">
      {/* Header */}
      <div className="relative pt-32 pb-24 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #08193f 0%, #0f2d6b 70%, #0891b2 100%)' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <span className="section-tag mb-5" style={{ background: 'rgba(6,182,212,0.12)', color: '#06b6d4', borderColor: 'rgba(6,182,212,0.25)' }}>
              Notre histoire
            </span>
            <h1 className="font-display font-900 text-white mt-5 mb-5"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              KODBE Travel & Tours :<br />
              <span style={{ color: '#f59e0b' }}>Explore. Discover. Journey.</span>
            </h1>
            <p className="font-body text-white/65 text-lg max-w-xl">
              Née à N'Djaména avec une mission claire — rendre le voyage accessible, simple et sécurisé pour chaque Tchadien.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
      </div>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <AnimatedSection direction="right">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
                  alt="KODBE Travel & Tours — Agence de voyage"
                  fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                <div className="absolute bottom-5 left-5 px-4 py-2.5 rounded-xl"
                  style={{ background: 'rgba(245,158,11,0.9)' }}>
                  <p className="font-display font-900 text-brand-dark text-sm">N'Djaména · Tchad</p>
                  <p className="font-body text-brand-dark text-xs opacity-75">Quartier Goudji</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <span className="section-tag mb-5">Notre mission</span>
              <h2 className="font-display font-800 text-brand mt-4 mb-5"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
                Votre partenaire voyage
                <br /><span className="gradient-text">de A à Z</span>
              </h2>
              <div className="space-y-4 font-body text-slate-600 text-base leading-relaxed mb-7">
                <p>
                  KODBE Travel & Tours est une agence de voyage tchadienne fondée avec une vision : simplifier le voyage pour les résidents du Tchad en proposant un service complet, fiable et humain.
                </p>
                <p>
                  Depuis N'Djaména, nous gérons billets d'avion, visas, hôtels, voyages spirituels et même les évacuations médicales d'urgence. Notre réseau couvre l'Afrique du Nord, l'Afrique de l'Est, le Moyen-Orient et l'Europe.
                </p>
                <p>
                  Notre bureau à Quartier Goudji vous accueille du lundi au samedi. En dehors des heures de bureau, notre équipe reste joignable sur WhatsApp pour toute urgence.
                </p>
              </div>
              <ul className="space-y-2 mb-7">
                {[
                  'Agence locale basée à N\'Djaména',
                  'Réseau international de partenaires',
                  'Service d\'urgence 24h/24 (évacuation)',
                  'Devis gratuit en moins de 2 heures',
                  'Accompagnement complet de A à Z',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle size={15} className="text-teal mt-0.5 flex-shrink-0" />
                    <span className="font-body text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-brand">
                Nous contacter
                <ArrowRight size={14} />
              </Link>
            </AnimatedSection>
          </div>

          {/* Stats */}
          <AnimatedSection>
            <div className="rounded-2xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0f2d6b 0%, #1a4bba 60%, #0891b2 100%)' }}>
              {[
                { value: '6+',    label: 'Services proposés' },
                { value: '7',     label: 'Pays pour visas' },
                { value: '8',     label: 'Partenaires réseau' },
                { value: '24h',   label: 'Urgences médicales' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-display font-900 text-amber-light text-4xl mb-1">{value}</p>
                  <p className="font-body text-white/55 text-sm">{label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: '#f0f7ff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <span className="section-tag mb-4">Nos engagements</span>
            <h2 className="font-display font-800 text-brand mt-4 text-3xl">Ce qui nous distingue</h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '🤝', title: 'Confiance & Transparence', desc: 'Pas de frais cachés, pas de surprise. Vous savez exactement ce que vous payez et ce que vous obtenez.' },
              { emoji: '⚡', title: 'Réactivité', desc: 'Devis en 2h, urgences médicales traitées immédiatement. Nous savons que le temps est précieux.' },
              { emoji: '🌍', title: 'Réseau mondial', desc: 'Partenaires en Afrique, Moyen-Orient et Europe pour vous ouvrir toutes les portes.' },
              { emoji: '❤️', title: 'Service humain', desc: 'Un conseiller dédié pour chaque client. Pas de chatbot, pas d\'attente — une vraie personne disponible.' },
              { emoji: '🏥', title: 'Spécialiste médical', desc: 'Évacuation sanitaire, voyages médicaux en Tunisie, Maroc, Inde — une expertise reconnue.' },
              { emoji: '🕌', title: 'Expertise Hadj & Omra', desc: 'Des années d\'expérience dans l\'organisation de voyages spirituels sécurisés et encadrés.' },
            ].map(({ emoji, title, desc }) => (
              <StaggerItem key={title}>
                <div className="card p-7 h-full">
                  <span className="text-3xl block mb-4">{emoji}</span>
                  <h3 className="font-display font-700 text-brand text-lg mb-2">{title}</h3>
                  <p className="font-body text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Airlines & Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display font-800 text-brand text-3xl">Nos partenaires & compagnies</h2>
          </AnimatedSection>

          {/* Airlines */}
          <div className="mb-12 p-8 rounded-2xl border border-slate-100">
            <p className="font-display font-700 text-brand text-sm uppercase tracking-widest mb-6">
              Compagnies aériennes partenaires
            </p>
            <div className="flex flex-wrap gap-4">
              {airlines.map((a) => (
                <span key={a} className="px-5 py-2.5 rounded-full font-display font-700 text-sm"
                  style={{ background: '#f0f7ff', color: '#0f2d6b', border: '1px solid #dbeafe' }}>
                  ✈ {a}
                </span>
              ))}
            </div>
          </div>

          {/* Partners */}
          <div className="p-8 rounded-2xl border border-slate-100">
            <p className="font-display font-700 text-brand text-sm uppercase tracking-widest mb-6">
              Réseau de partenaires
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {partners.map((p) => (
                <div key={p.name} className="card p-5 text-center">
                  <span className="text-3xl block mb-2">{p.icon}</span>
                  <p className="font-display font-700 text-brand text-sm">{p.name}</p>
                  <p className="font-body text-muted text-xs mt-0.5">{p.region}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
