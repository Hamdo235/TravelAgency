'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import KodbeLogo from '@/components/ui/KodbeLogo'
import { cn } from '@/lib/utils'

const nav = [
  { href: '/',             label: 'Accueil' },
  { href: '/destinations', label: 'Destinations & Visas' },
  { href: '/offres',       label: 'Nos Services' },
  { href: '/temoignages',  label: 'Témoignages' },
  { href: '/a-propos',     label: 'À Propos' },
  { href: '/contact',      label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  const transparent = isHome && !scrolled

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          transparent
            ? 'bg-transparent py-5'
            : 'bg-brand/97 backdrop-blur-md py-3.5 shadow-[0_2px_30px_rgba(15,45,107,0.35)]'
        )}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <KodbeLogo variant="light" size="md" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-2 font-body text-sm rounded-full transition-all duration-200',
                  pathname === link.href
                    ? 'bg-white/15 text-white font-500'
                    : 'text-white/75 hover:text-white hover:bg-white/10'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/0023566214822"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-green-400 transition-colors font-body text-sm"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="btn-primary text-xs px-5 py-2.5"
              style={{ letterSpacing: '0.06em' }}
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white p-2 -mr-1"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40"
            style={{ background: 'linear-gradient(160deg, #08193f 0%, #0f2d6b 60%, #0891b2 100%)' }}
          >
            <div className="flex flex-col h-full justify-center items-center gap-7 pt-20 pb-10">
              {nav.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      'font-display text-2xl font-700 transition-colors',
                      pathname === link.href ? 'text-amber-light' : 'text-white/80'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 flex flex-col items-center gap-4"
              >
                <Link href="/contact" onClick={() => setMenuOpen(false)} className="btn-primary px-10 py-3.5">
                  Demander un devis
                </Link>
                <div className="flex gap-6">
                  <a href="tel:+23566214822" className="flex items-center gap-2 text-white/55 text-sm font-body">
                    <Phone size={13} /> +235 66 21 48 22
                  </a>
                  <a href="tel:+21653634815" className="flex items-center gap-2 text-white/55 text-sm font-body">
                    <Phone size={13} /> +216 53 63 48 15
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
