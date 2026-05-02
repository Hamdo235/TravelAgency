import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales et politique de confidentialité de KODBE Travel & Tours.',
  robots: { index: false, follow: false },
}

export default function MentionsLegalesPage() {
  return (
    <div className="page-in">
      <div className="pt-32 pb-16 relative"
        style={{ background: 'linear-gradient(160deg, #08193f 0%, #0f2d6b 100%)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-display font-900 text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Mentions Légales
          </h1>
          <p className="font-body text-white/55 mt-3">Dernière mise à jour : mai 2025</p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-12 font-body text-slate-700 leading-relaxed">

          <div>
            <h2 className="font-display font-800 text-brand text-2xl mb-4">1. Éditeur du site</h2>
            <p>Le présent site web est édité par :</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li><strong>Raison sociale :</strong> KODBE Travel & Tours</li>
              <li><strong>Forme juridique :</strong> Agence de voyage</li>
              <li><strong>Adresse :</strong> Quartier Goudji, N'Djaména — République du Tchad</li>
              <li><strong>Téléphone (Tchad) :</strong> +235 66 21 48 22</li>
              <li><strong>Téléphone (Tunisie) :</strong> +216 53 63 48 15</li>
              <li><strong>Email :</strong>{' '}
                <a href="mailto:Kodbetravel@gmail.com"
                  className="text-teal hover:underline">Kodbetravel@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-800 text-brand text-2xl mb-4">2. Directeur de publication</h2>
            <p>Le directeur de publication du site est le représentant légal de KODBE Travel & Tours.</p>
          </div>

          <div>
            <h2 className="font-display font-800 text-brand text-2xl mb-4">3. Hébergement</h2>
            <p>Ce site est hébergé par :</p>
            <ul className="mt-3 space-y-1.5 text-slate-600">
              <li><strong>Société :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104 — États-Unis</li>
              <li><strong>Site web :</strong>{' '}
                <a href="https://vercel.com" target="_blank" rel="noopener noreferrer"
                  className="text-teal hover:underline">vercel.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-800 text-brand text-2xl mb-4">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, graphismes, structure) est la propriété
              exclusive de KODBE Travel & Tours. Toute reproduction, représentation, modification ou exploitation,
              totale ou partielle, sans autorisation écrite préalable est strictement interdite.
            </p>
          </div>

          <div>
            <h2 className="font-display font-800 text-brand text-2xl mb-4">5. Protection des données personnelles</h2>
            <p className="mb-3">
              KODBE Travel & Tours collecte des données personnelles uniquement dans le cadre de son formulaire
              de contact (nom, téléphone, email, demande de voyage). Ces données sont utilisées exclusivement
              pour répondre à vos demandes et ne sont jamais cédées à des tiers.
            </p>
            <p className="mb-3">
              Conformément aux lois en vigueur sur la protection des données, vous disposez d'un droit d'accès,
              de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à :{' '}
              <a href="mailto:Kodbetravel@gmail.com" className="text-teal hover:underline">
                Kodbetravel@gmail.com
              </a>
            </p>
            <p>
              Ce site utilise Google Analytics afin de mesurer l'audience de façon anonyme.
              Aucune donnée personnellement identifiable n'est transmise à Google.
            </p>
          </div>

          <div>
            <h2 className="font-display font-800 text-brand text-2xl mb-4">6. Cookies</h2>
            <p>
              Ce site utilise des cookies techniques nécessaires à son bon fonctionnement, ainsi que des
              cookies analytiques anonymes (Google Analytics) pour améliorer l'expérience utilisateur.
              En continuant à naviguer sur ce site, vous acceptez l'utilisation de ces cookies.
            </p>
          </div>

          <div>
            <h2 className="font-display font-800 text-brand text-2xl mb-4">7. Limitation de responsabilité</h2>
            <p>
              KODBE Travel & Tours s'efforce de maintenir les informations de ce site à jour et exactes.
              Toutefois, l'agence ne saurait être tenue responsable des erreurs ou omissions éventuelles,
              ni des dommages résultant de l'utilisation des informations contenues sur ce site.
              Les prix et conditions indiqués sont donnés à titre indicatif et peuvent varier.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <Link href="/" className="btn-brand inline-flex text-sm px-6 py-3">
              ← Retour à l'accueil
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}
