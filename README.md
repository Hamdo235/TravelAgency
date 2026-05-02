# ✈️ KODBE Travel & Tours — Site Web Officiel

Site web professionnel pour **KODBE Travel & Tours**, agence de voyage basée à **N'Djaména, Tchad**.

## 🏢 Informations agence

- **Nom** : KODBE Travel & Tours
- **Slogan** : Explore. Discover. Journey.
- **Adresse** : Quartier Goudji, N'Djaména - Tchad
- **Téléphone Tchad** : +235 66 21 48 22
- **Téléphone Tunisie** : +216 53 63 48 15
- **Email** : Kodbetravel@gmail.com

---

## 🚀 Installation & Démarrage

### Prérequis
- Node.js 18+
- npm

### 1. Installer les dépendances
```bash
cd kodbe-travel
npm install
```

### 2. Lancer en développement
```bash
npm run dev
```
Ouvrir **[http://localhost:3000](http://localhost:3000)**

### 3. Build production
```bash
npm run build
npm start
```

---

## 📁 Structure du projet

```
kodbe-travel/
├── app/
│   ├── layout.tsx              # Layout racine (Navbar + Footer)
│   ├── page.tsx                # 🏠 Accueil
│   ├── globals.css             # Design system complet
│   ├── not-found.tsx           # Page 404
│   ├── destinations/
│   │   ├── page.tsx            # 🗺 Liste visas & destinations
│   │   └── [slug]/page.tsx     # 📍 Détail par pays
│   ├── offres/
│   │   └── page.tsx            # 🛎 Tous les services
│   ├── a-propos/
│   │   └── page.tsx            # ℹ️ Histoire & valeurs
│   ├── contact/
│   │   └── page.tsx            # 📧 Formulaire + contacts directs
│   └── temoignages/
│       └── page.tsx            # ⭐ Avis clients
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navigation responsive
│   │   └── Footer.tsx          # Pied de page + contacts
│   ├── home/
│   │   ├── Hero.tsx            # Section héro principale
│   │   ├── Services.tsx        # Les 6 services KODBE
│   │   ├── VisaSection.tsx     # Pays & assistance visa
│   │   ├── PartnersSection.tsx # Réseau partenaires
│   │   └── TestimonialsPreview.tsx
│   └── ui/
│       ├── AnimatedSection.tsx # Animations scroll
│       └── KodbeLogo.tsx       # Logo SVG KODBE
│
├── data/
│   └── kodbe.ts               # ← TOUTES LES DONNÉES RÉELLES
│                              #   (services, destinations, témoignages, infos agence)
│
└── lib/
    └── utils.ts
```

---

## 🎨 Design System KODBE

### Palette officielle
| Token | Valeur | Usage |
|-------|--------|-------|
| `brand` | `#0f2d6b` | Bleu marine principal |
| `brand-mid` | `#1a4bba` | Bleu royal actif |
| `teal` | `#0891b2` | Accent cyan/teal |
| `amber-light` | `#f59e0b` | Or/ambre — CTA |
| `sky` | `#f0f7ff` | Fond clair |

### Typographie
- **Display** : Montserrat (titres, boutons)
- **Body** : Inter (texte courant)

---

## 📝 Personnalisation du contenu

Tout le contenu réel est dans **`data/kodbe.ts`** :

### Modifier les infos de l'agence
```typescript
export const agencyInfo = {
  name: 'KODBE Travel & Tours',
  address: 'Quartier Goudji, N\'Djaména - Tchad',
  phoneTchad: '+235 66 21 48 22',
  phoneTunisie: '+216 53 63 48 15',
  email: 'Kodbetravel@gmail.com',
  // ...
}
```

### Ajouter une destination visa
Ajouter un objet dans le tableau `destinations[]` dans `data/kodbe.ts`.

### Ajouter un témoignage
Ajouter dans le tableau `testimonials[]`.

---

## 📱 Pages WhatsApp intégrées

Le site intègre des liens WhatsApp directs partout :
- **Tchad** : `https://wa.me/0023566214822`
- **Tunisie** : `https://wa.me/0021653634815`

Ces liens ouvrent WhatsApp directement avec un message pré-rempli.

---

## ⚠️ Formulaire de contact

Actuellement simulé (pas d'envoi réel). Pour activer l'envoi d'email en production :

**Option 1 — EmailJS (gratuit, facile)**
```bash
npm install @emailjs/browser
```

**Option 2 — Resend (recommandé)**
```bash
npm install resend
```
→ Créer `app/api/contact/route.ts` avec Resend API.

---

## 🚀 Déploiement recommandé

### Vercel (gratuit, recommandé)
```bash
npm install -g vercel
vercel
```
→ Site en ligne en 2 minutes.

### Variables d'environnement (`.env.local`)
```env
# Pour Resend (formulaire de contact)
RESEND_API_KEY=re_xxxxxxxxxxxx

# Pour Google Analytics (optionnel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## ✅ Fonctionnalités incluses

- ✈️ Page d'accueil avec hero, services, visas, partenaires, témoignages
- 🗺 7 destinations avec pages détaillées (Tunisie, Turquie, Dubaï, Maroc, Arabie Saoudite, Inde, Égypte)
- 🛎 Page services complète (6 services avec détails)
- 📧 Formulaire de contact avec validation
- 💬 Boutons WhatsApp intégrés partout
- 🚨 Module urgence médicale visible en homepage
- 📱 100% responsive (mobile-first)
- ⚡ Animations légères (Framer Motion)
- 🔍 SEO complet (metadata, balises, structure sémantique)

---

**KODBE Travel & Tours** — Explore. Discover. Journey.  
*N'Djaména, République du Tchad*
