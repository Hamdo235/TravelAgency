import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, CheckCircle, ArrowLeft, Phone, MessageCircle } from 'lucide-react'
import { destinations } from '@/data/kodbe'
import AnimatedSection from '@/components/ui/AnimatedSection'

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const d = destinations.find((x) => x.slug === params.slug)
  if (!d) return {}
  return {
    title: `Visa ${d.name} ${d.flag}`,
    description: d.description,
  }
}

export default function DestinationDetail({ params }: { params: { slug: string } }) {
  const dest = destinations.find((d) => d.slug === params.slug)
  if (!dest) notFound()

  const others = destinations.filter((d) => d.slug !== dest.slug).slice(0, 4)

  return (
    <div className="page-in">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <Image src={dest.image} alt={dest.name} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(8,25,63,0.95) 0%, rgba(8,25,63,0.50) 50%, transparent 100%)' }} />

        <div className="absolute top-28 left-6 z-10">
          <Link href="/destinations"
            className="inline-flex items-center gap-2 text-white/65 hover:text-white font-body text-sm group transition-colors">
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
            Toutes les destinations
          </Link>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-10">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div>
              <span className="text-5xl block mb-3">{dest.flag}</span>
              <h1 className="font-display font-900 text-white text-5xl mb-2">{dest.name}</h1>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 rounded-full text-xs font-display font-700"
                  style={{ background: 'rgba(245,158,11,0.85)', color: '#08193f' }}>
                  {dest.visaType}
                </span>
                <span className="flex items-center gap-1.5 text-white/65 text-sm font-body">
                  <Clock size={13} /> Délai : {dest.visaDelay}
                </span>
              </div>
            </div>
            <div className="glass rounded-2xl p-5 min-w-[200px]">
              <p className="font-body text-white/55 text-xs uppercase tracking-widest mb-2">Tarif visa</p>
              <p className="font-display font-800 text-amber-light text-2xl mb-3">{dest.price}</p>
              <Link href="/contact"
                className="block text-center px-5 py-2.5 rounded-full font-display font-700 text-sm"
                style={{ background: '#f59e0b', color: '#08193f' }}>
                Demander mon visa
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="font-display font-800 text-brand text-3xl mb-5">
                  Pourquoi {dest.name} ?
                </h2>
                <p className="font-body text-slate-600 text-base leading-relaxed mb-8">
                  {dest.description}
                </p>

                {/* Services KODBE pour cette destination */}
                <div className="p-7 rounded-2xl mb-8"
                  style={{ background: 'linear-gradient(135deg, #f0f7ff, #ecfeff)' }}>
                  <h3 className="font-display font-700 text-brand text-xl mb-5">
                    Ce que KODBE gère pour vous
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Constitution complète du dossier visa',
                      'Suivi de la demande auprès du consulat',
                      'Réservation des billets d\'avion',
                      'Réservation d\'hôtels',
                      'Assurance voyage (option)',
                      'Accueil à l\'aéroport de destination',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5 font-body text-slate-700 text-sm">
                        <CheckCircle size={14} className="text-teal mt-0.5 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <AnimatedSection direction="left" className="space-y-5">
              {/* Requirements */}
              <div className="card p-6">
                <h3 className="font-display font-700 text-brand text-lg mb-4">
                  Documents requis
                </h3>
                <ul className="space-y-3">
                  {dest.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2.5">
                      <CheckCircle size={14} className="text-teal mt-0.5 flex-shrink-0" />
                      <span className="font-body text-slate-600 text-sm">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="rounded-2xl p-6 text-white relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0f2d6b, #0891b2)' }}>
                <h3 className="font-display font-700 text-xl mb-2">Prêt à partir ?</h3>
                <p className="font-body text-white/65 text-sm mb-5">
                  Confiez-nous votre dossier et partez sereinement.
                </p>
                <Link href="/contact"
                  className="block text-center py-3 rounded-full font-display font-700 text-sm mb-3 hover:brightness-110 transition-all"
                  style={{ background: '#f59e0b', color: '#08193f' }}>
                  Démarrer ma demande
                </Link>
                <a href="https://wa.me/0023566214822"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-full font-display font-700 text-sm border border-white/20 hover:border-white/40 transition-all">
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Other destinations */}
          <AnimatedSection delay={0.2} className="mt-16">
            <h3 className="font-display font-700 text-brand text-2xl mb-7">Autres destinations</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {others.map((d) => (
                <Link key={d.slug} href={`/destinations/${d.slug}`}
                  className="group relative h-36 rounded-2xl overflow-hidden card">
                  <Image src={d.image} alt={d.name} fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xl block">{d.flag}</span>
                    <p className="font-display font-700 text-white text-sm">{d.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
