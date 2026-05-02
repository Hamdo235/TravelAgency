import { partners } from '@/data/kodbe'
import AnimatedSection, { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection'

export default function PartnersSection() {
  return (
    <section className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #08193f 0%, #0f2d6b 70%, #0a3060 100%)' }}>
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-40 rounded-full blur-[100px] pointer-events-none opacity-15"
        style={{ background: '#06b6d4' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-display font-700 tracking-widest uppercase mb-5"
            style={{ background: 'rgba(6,182,212,0.12)', color: '#06b6d4', border: '1px solid rgba(6,182,212,0.25)' }}>
            Notre Réseau
          </span>
          <h2 className="font-display font-800 text-white mt-3 mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
            Un réseau mondial de partenaires de confiance
          </h2>
          <p className="font-body text-white/55 text-base max-w-xl mx-auto">
            KODBE Travel & Tours s'appuie sur un réseau solide couvrant l'Afrique, le Moyen-Orient et l'Europe pour vous offrir les meilleures conditions de voyage.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((p) => (
            <StaggerItem key={p.name}>
              <div className="partner-badge">
                <span className="text-3xl mb-1">{p.icon}</span>
                <p className="font-display font-700 text-white text-sm text-center leading-tight">
                  {p.name}
                </p>
                <p className="font-body text-white/45 text-xs">{p.region}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Airlines */}
        <AnimatedSection delay={0.2} className="mt-12">
          <p className="text-center font-body text-white/35 text-xs uppercase tracking-widest mb-5">
            Compagnies aériennes partenaires
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {['✈ Air France', '✈ Turkish Airlines', '✈ Emirates', '✈ Qatar Airways', '✈ Ethiopian Airlines', '✈ Kenya Airways', '✈ Royal Air Maroc'].map((a) => (
              <span key={a} className="font-display font-700 text-white/40 text-sm hover:text-amber-light transition-colors cursor-default">
                {a}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
