import Link from 'next/link'
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from 'lucide-react'
import KodbeLogo from '@/components/ui/KodbeLogo'
import { agencyInfo, airlines } from '@/data/kodbe'

const footerLinks = {
  services: [
    { href: '/offres#billetterie', label: 'Billetterie Aérienne' },
    { href: '/offres#hotels',     label: 'Réservation d\'Hôtels' },
    { href: '/offres#visas',      label: 'Assistance Visas' },
    { href: '/offres#hadj-omra',  label: 'Hadj & Omra' },
    { href: '/offres#evacuation', label: 'Évacuation Sanitaire' },
    { href: '/offres#location',   label: 'Location Véhicules' },
  ],
  destinations: [
    { href: '/destinations/tunisie',       label: '🇹🇳 Tunisie' },
    { href: '/destinations/turquie',       label: '🇹🇷 Turquie' },
    { href: '/destinations/arabie-saoudite', label: '🇸🇦 Arabie Saoudite' },
    { href: '/destinations/dubai',         label: '🇦🇪 Dubaï' },
    { href: '/destinations/maroc',         label: '🇲🇦 Maroc' },
    { href: '/destinations/inde',          label: '🇮🇳 Inde' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #08193f 0%, #0f2d6b 70%, #0a3060 100%)' }}
    >
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Airlines strip */}
      <div className="airline-strip py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            <span className="font-body text-white/40 text-xs uppercase tracking-widest">Compagnies partenaires :</span>
            {airlines.map((a) => (
              <span key={a} className="font-display font-700 text-white/50 text-xs tracking-wide hover:text-amber-light transition-colors">
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <KodbeLogo variant="light" size="lg" />
            </Link>
            <p className="font-body text-white/55 text-sm leading-relaxed mb-6">
              {agencyInfo.tagline}. Billetterie, visas, hôtels, Hadj & Omra — votre voyage commence ici.
            </p>
            {/* Contact */}
            <ul className="space-y-3">
              <li>
                <a href={`tel:${agencyInfo.phoneTchad}`}
                  className="flex items-center gap-3 text-white/60 text-sm font-body hover:text-amber-light transition-colors">
                  <Phone size={13} className="text-teal-light flex-shrink-0" />
                  {agencyInfo.phoneTchad} <span className="text-white/30 text-xs">(Tchad)</span>
                </a>
              </li>
              <li>
                <a href={`tel:${agencyInfo.phoneTunisie}`}
                  className="flex items-center gap-3 text-white/60 text-sm font-body hover:text-amber-light transition-colors">
                  <Phone size={13} className="text-teal-light flex-shrink-0" />
                  {agencyInfo.phoneTunisie} <span className="text-white/30 text-xs">(Tunisie)</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${agencyInfo.whatsappTchad}`}
                  className="flex items-center gap-3 text-white/60 text-sm font-body hover:text-green-400 transition-colors">
                  <MessageCircle size={13} className="text-green-400 flex-shrink-0" />
                  WhatsApp disponible
                </a>
              </li>
              <li>
                <a href={`mailto:${agencyInfo.email}`}
                  className="flex items-center gap-3 text-white/60 text-sm font-body hover:text-amber-light transition-colors">
                  <Mail size={13} className="text-teal-light flex-shrink-0" />
                  {agencyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm font-body">
                <MapPin size={13} className="text-teal-light mt-0.5 flex-shrink-0" />
                {agencyInfo.address}
              </li>
            </ul>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[{ Icon: Facebook, href: '#' }, { Icon: Instagram, href: '#' }].map(({ Icon, href }, i) => (
                <a key={i} href={href}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-teal-light hover:text-teal-light transition-all">
                  <Icon size={15} />
                </a>
              ))}
              <a
                href={`https://wa.me/${agencyInfo.whatsappTchad}`}
                target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-green-400 hover:text-green-400 transition-all"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-700 text-white text-sm tracking-widest uppercase mb-6">
              Nos Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="font-body text-sm text-white/50 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-display font-700 text-white text-sm tracking-widest uppercase mb-6">
              Destinations & Visas
            </h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="font-body text-sm text-white/50 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div>
            <h4 className="font-display font-700 text-white text-sm tracking-widest uppercase mb-6">
              Contact Rapide
            </h4>
            <p className="font-body text-white/55 text-sm leading-relaxed mb-6">
              Besoin d'un devis immédiat ? Contactez-nous directement sur WhatsApp — réponse en moins d'une heure.
            </p>
            <a
              href={`https://wa.me/${agencyInfo.whatsappTchad}?text=Bonjour KODBE, je souhaite un devis pour `}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-full font-display font-700 text-white text-xs tracking-wide uppercase bg-green-600 hover:bg-green-500 hover:scale-105 transition-all w-full justify-center mb-3"
            >
              <MessageCircle size={14} />
              WhatsApp Tchad
            </a>
            <a
              href={`https://wa.me/${agencyInfo.whatsappTunisie}?text=Bonjour KODBE, je souhaite un devis pour `}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-full font-display font-700 text-white text-xs tracking-wide uppercase border border-green-600/50 hover:border-green-500 hover:bg-green-600/20 transition-all w-full justify-center"
            >
              <MessageCircle size={14} />
              WhatsApp Tunisie
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30 text-xs">
            © {new Date().getFullYear()} KODBE Travel & Tours. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <p className="font-body text-white/20 text-xs">
              Quartier Goudji, N'Djaména — République du Tchad
            </p>
            <Link href="/mentions-legales"
              className="font-body text-white/25 text-xs hover:text-white/60 transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
