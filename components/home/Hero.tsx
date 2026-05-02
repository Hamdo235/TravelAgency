'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Plane, ChevronDown, MessageCircle, Phone } from 'lucide-react'
import { agencyInfo } from '@/data/kodbe'

const quickLinks = [
  { label: 'Billet d\'avion',      href: '/offres#billetterie', icon: '✈️' },
  { label: 'Visa',                 href: '/destinations',       icon: '📋' },
  { label: 'Hadj & Omra',          href: '/offres#hadj-omra',   icon: '🕌' },
  { label: 'Évacuation médicale',  href: '/offres#evacuation',  icon: '🏥' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=85"
          alt="Avion en vol — KODBE Travel & Tours"
          fill priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Layered gradients for depth */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, rgba(8,25,63,0.92) 0%, rgba(15,45,107,0.80) 50%, rgba(8,145,178,0.35) 100%)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
      </div>

      {/* Floating circles deco */}
      <div className="absolute top-1/4 right-12 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />
      <div className="absolute bottom-1/3 left-8 w-56 h-56 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }} />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="w-8 h-px bg-teal-light opacity-70" />
            <span className="font-display text-teal-light text-xs font-700 tracking-[0.25em] uppercase">
              N'Djaména · Tchad — Explore. Discover. Journey.
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-900 text-white leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(2.6rem, 7vw, 5.2rem)' }}
          >
            Votre voyage,
            <br />
            <span style={{ color: '#f59e0b' }}>notre expertise.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.65 }}
            className="font-body text-white/70 text-lg leading-relaxed max-w-xl mb-10"
          >
            Billetterie aérienne, visas, hôtels, Hadj & Omra, évacuation sanitaire — KODBE Travel & Tours gère tout pour que vous voyagiez l'esprit léger.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <Link href="/contact" className="btn-primary gap-2.5 px-8 py-4 text-sm">
              <Plane size={16} />
              Demander un devis
            </Link>
            <a
              href={`https://wa.me/0023566214822?text=Bonjour KODBE, je souhaite un renseignement.`}
              target="_blank" rel="noopener noreferrer"
              className="btn-outline gap-2.5 px-8 py-4 text-sm"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
          </motion.div>

          {/* Quick service links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {quickLinks.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="group flex items-center gap-2.5 px-4 py-3 rounded-xl font-body text-sm text-white/75 hover:text-white transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <span className="text-lg">{q.icon}</span>
                <span className="font-500 group-hover:text-amber-light transition-colors text-xs sm:text-sm">
                  {q.label}
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Stats band */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative z-10 border-t border-white/10 backdrop-blur-md"
        style={{ background: 'rgba(8,25,63,0.70)' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '6+',      label: 'Services disponibles' },
            { value: '7',       label: 'Pays pour visa' },
            { value: '24h/24',  label: 'Urgences médicales' },
            { value: '100%',    label: 'Satisfaction clients' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display font-900 text-amber-light text-2xl">{value}</p>
              <p className="font-body text-white/50 text-xs mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-20 right-8 hidden md:flex flex-col items-center gap-1.5 z-10"
      >
        <span className="font-body text-white/30 text-[10px] tracking-widest uppercase" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown size={16} className="text-teal-light" />
        </motion.div>
      </motion.div>
    </section>
  )
}
