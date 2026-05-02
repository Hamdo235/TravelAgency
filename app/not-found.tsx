import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6"
      style={{ background: 'linear-gradient(160deg, #08193f 0%, #0f2d6b 70%, #0891b2 100%)' }}>
      <div className="text-center max-w-md">
        <span className="text-7xl block mb-6">✈️</span>
        <h1 className="font-display font-900 text-white text-6xl mb-4">404</h1>
        <p className="font-display font-700 text-white/70 text-2xl mb-4">Page introuvable</p>
        <p className="font-body text-white/45 mb-10">Cette page s'est perdue quelque part entre deux continents.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn-primary">Retour à l'accueil</Link>
          <Link href="/contact" className="btn-outline">Nous contacter</Link>
        </div>
      </div>
    </div>
  )
}
