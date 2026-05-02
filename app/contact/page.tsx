'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle, Send } from 'lucide-react'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { agencyInfo } from '@/data/kodbe'

const serviceOptions = [
  'Billetterie Aérienne',
  'Réservation d\'Hôtel',
  'Visa',
  'Hadj & Omra',
  'Évacuation Sanitaire',
  'Location de Véhicule',
  'Autre',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', destination: '',
    departure: '', travelers: '', message: '',
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setSent(true)
    } catch {
      setError('Une erreur est survenue. Contactez-nous directement par WhatsApp ou téléphone.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page-in">
      {/* Header */}
      <div className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #08193f 0%, #0f2d6b 70%, #0891b2 100%)' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <span className="section-tag mb-5" style={{ background: 'rgba(6,182,212,0.12)', color: '#06b6d4', borderColor: 'rgba(6,182,212,0.25)' }}>
              Devis gratuit · Réponse en 2h
            </span>
            <h1 className="font-display font-900 text-white mt-5 mb-5"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
              Parlons de votre
              <br /><span style={{ color: '#f59e0b' }}>prochain voyage</span>
            </h1>
            <p className="font-body text-white/65 text-lg max-w-xl">
              Remplissez ce formulaire ou contactez-nous directement. Un conseiller vous répond rapidement.
            </p>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-sky to-transparent z-10" />
      </div>

      <section className="py-20" style={{ background: '#f0f7ff' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Sidebar */}
            <AnimatedSection direction="right" className="space-y-5">
              {/* Direct contacts */}
              <div className="rounded-2xl text-white p-7"
                style={{ background: 'linear-gradient(135deg, #0f2d6b, #1a4bba)' }}>
                <h2 className="font-display font-800 text-xl mb-7">Contactez-nous</h2>

                <div className="space-y-5">
                  <div>
                    <p className="font-body text-white/45 text-xs uppercase tracking-widest mb-2">Tchad (WhatsApp & Appel)</p>
                    <a href={`tel:${agencyInfo.phoneTchad}`}
                      className="flex items-center gap-3 text-white font-500 font-body text-sm hover:text-amber-light transition-colors">
                      <Phone size={14} className="text-teal-light" />
                      {agencyInfo.phoneTchad}
                    </a>
                  </div>

                  <div>
                    <p className="font-body text-white/45 text-xs uppercase tracking-widest mb-2">Tunisie (WhatsApp & Appel)</p>
                    <a href={`tel:${agencyInfo.phoneTunisie}`}
                      className="flex items-center gap-3 text-white font-500 font-body text-sm hover:text-amber-light transition-colors">
                      <Phone size={14} className="text-teal-light" />
                      {agencyInfo.phoneTunisie}
                    </a>
                  </div>

                  <div>
                    <p className="font-body text-white/45 text-xs uppercase tracking-widest mb-2">Email</p>
                    <a href={`mailto:${agencyInfo.email}`}
                      className="flex items-center gap-3 text-white font-500 font-body text-sm hover:text-amber-light transition-colors break-all">
                      <Mail size={14} className="text-teal-light flex-shrink-0" />
                      {agencyInfo.email}
                    </a>
                  </div>

                  <div>
                    <p className="font-body text-white/45 text-xs uppercase tracking-widest mb-2">Adresse</p>
                    <div className="flex items-start gap-3 text-white/75 font-body text-sm">
                      <MapPin size={14} className="text-teal-light mt-0.5 flex-shrink-0" />
                      {agencyInfo.address}
                    </div>
                  </div>

                  <div>
                    <p className="font-body text-white/45 text-xs uppercase tracking-widest mb-2">Horaires</p>
                    <div className="flex items-start gap-3 text-white/75 font-body text-sm">
                      <Clock size={14} className="text-teal-light mt-0.5 flex-shrink-0" />
                      <span>Lun–Sam : 8h–19h<br />Urgences : 24h/24</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp buttons */}
                <div className="mt-7 space-y-3">
                  <a
                    href={`https://wa.me/${agencyInfo.whatsappTchad}?text=Bonjour KODBE, je souhaite un renseignement.`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full py-3 rounded-full font-display font-700 text-sm bg-green-600 hover:bg-green-500 transition-all hover:scale-105">
                    <MessageCircle size={14} /> WhatsApp Tchad
                  </a>
                  <a
                    href={`https://wa.me/${agencyInfo.whatsappTunisie}?text=Bonjour KODBE, je souhaite un renseignement.`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full py-3 rounded-full font-display font-700 text-sm border border-green-500/50 text-green-400 hover:bg-green-600/20 transition-all">
                    <MessageCircle size={14} /> WhatsApp Tunisie
                  </a>
                </div>
              </div>

              {/* Emergency */}
              <div className="rounded-2xl p-5 bg-red-50 border border-red-100">
                <h3 className="font-display font-700 text-red-700 text-base mb-2">🚨 Urgence médicale ?</h3>
                <p className="font-body text-red-600/80 text-sm mb-3">
                  Notre service d'évacuation sanitaire est disponible 24h/24. Appelez immédiatement.
                </p>
                <a href={`tel:${agencyInfo.phoneTchad}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-display font-700 text-sm bg-red-600 text-white hover:bg-red-700 transition-all">
                  <Phone size={14} /> Appel d'urgence
                </a>
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="left" className="lg:col-span-2">
              {sent ? (
                <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center min-h-[500px] flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
                    style={{ background: 'rgba(8,145,178,0.1)' }}>
                    <CheckCircle size={36} className="text-teal" />
                  </div>
                  <h2 className="font-display font-800 text-brand text-3xl mb-3">Message envoyé !</h2>
                  <p className="font-body text-muted text-base max-w-sm leading-relaxed">
                    Merci pour votre message. Un conseiller KODBE vous contactera dans les <strong>2 heures</strong> avec une proposition personnalisée.
                  </p>
                  <p className="font-body text-muted text-sm mt-4">
                    En attendant : <a href={`tel:${agencyInfo.phoneTchad}`} className="text-teal font-600">{agencyInfo.phoneTchad}</a>
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-2xl border border-slate-100 p-8 md:p-10">
                  <h2 className="font-display font-800 text-brand text-2xl mb-7">Votre demande</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="form-label">Prénom & Nom *</label>
                      <input name="name" required value={form.name} onChange={onChange}
                        placeholder="Votre nom complet" className="form-field" />
                    </div>
                    <div>
                      <label className="form-label">Téléphone *</label>
                      <input name="phone" required value={form.phone} onChange={onChange}
                        placeholder="+235 XX XX XX XX" type="tel" className="form-field" />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="form-label">Email</label>
                    <input name="email" value={form.email} onChange={onChange}
                      placeholder="votre@email.com" type="email" className="form-field" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="form-label">Type de service *</label>
                      <select name="service" required value={form.service} onChange={onChange} className="form-field">
                        <option value="">Choisir un service...</option>
                        {serviceOptions.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Destination souhaitée</label>
                      <input name="destination" value={form.destination} onChange={onChange}
                        placeholder="Ex: Dubaï, Tunisie, Istanbul..." className="form-field" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="form-label">Date de départ souhaitée</label>
                      <input name="departure" type="date" value={form.departure} onChange={onChange} className="form-field" />
                    </div>
                    <div>
                      <label className="form-label">Nombre de voyageurs</label>
                      <select name="travelers" value={form.travelers} onChange={onChange} className="form-field">
                        <option value="">Combien ?</option>
                        <option>1 personne</option>
                        <option>2 personnes</option>
                        <option>3–4 personnes</option>
                        <option>5+ personnes</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="form-label">Message / Détails supplémentaires</label>
                    <textarea name="message" rows={5} value={form.message} onChange={onChange}
                      placeholder="Décrivez votre besoin, vos contraintes, questions particulières..."
                      className="form-field resize-none" />
                  </div>

                  <button type="submit" disabled={loading}
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-full font-display font-800 text-sm tracking-wide uppercase text-white transition-all hover:scale-[1.02] disabled:opacity-60"
                    style={{ background: 'linear-gradient(135deg, #1a4bba, #0891b2)' }}>
                    {loading ? (
                      <><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>Envoi en cours...</>
                    ) : (
                      <><Send size={15} />Envoyer ma demande</>
                    )}
                  </button>
                  {error && (
                    <p className="font-body text-red-600 text-sm text-center mt-3 bg-red-50 rounded-xl py-2.5 px-4">
                      {error}
                    </p>
                  )}
                  <p className="font-body text-muted text-xs text-center mt-4">
                    Réponse garantie sous 2 heures · Devis gratuit et sans engagement
                  </p>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}
