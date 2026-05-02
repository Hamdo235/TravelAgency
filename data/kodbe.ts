// ─── KODBE AGENCY INFO ──────────────────────────────────
export const agencyInfo = {
  name: 'KODBE Travel & Tours',
  slogan: 'Explore. Discover. Journey.',
  tagline: 'Votre partenaire voyage de confiance',
  address: 'Quartier Goudji, N\'Djaména - Tchad',
  phoneTchad: '+235 66 21 48 22',
  phoneTunisie: '+216 53 63 48 15',
  whatsappTchad: '0023566214822',
  whatsappTunisie: '0021653634815',
  email: 'travelkodbe@gmail.com',
  foundedYear: 2018,
  description:
    'KODBE Travel & Tours est une agence de voyage tchadienne basée à N\'Djaména, spécialisée dans la billetterie aérienne, les visas, la réservation d\'hôtels, le Hadj & l\'Omra, l\'évacuation sanitaire et la location de véhicules. Avec un réseau couvrant l\'Afrique, le Moyen-Orient et l\'Europe, nous vous offrons un service complet et sur-mesure.',
}

// ─── SERVICES ───────────────────────────────────────────
export interface Service {
  id: string
  icon: string
  title: string
  description: string
  details: string[]
  color: string
  featured: boolean
}

export const services: Service[] = [
  {
    id: 'billetterie',
    icon: 'Plane',
    title: 'Billetterie Aérienne',
    description:
      'Billets d\'avion au meilleur prix sur toutes les destinations. Air France, Turkish Airlines, Emirates, Qatar Airways et plus encore.',
    details: [
      'Réservation sur tous les vols internationaux',
      'Tarifs négociés avec les grandes compagnies',
      'Émission de billets en 24h',
      'Modification et annulation facilitées',
      'Vols depuis N\'Djaména et Ndjamena–Paris via Addis, Nairobi, Istanbul...',
    ],
    color: 'from-brand-mid to-teal',
    featured: true,
  },
  {
    id: 'hotels',
    icon: 'Building2',
    title: 'Réservation d\'Hôtels',
    description:
      'Hôtels, appartements et résidences dans plus de 50 pays. Du budget au luxe, nous trouvons le meilleur rapport qualité-prix.',
    details: [
      'Hôtels 2★ à 5★ et résidences',
      'Confirmation instantanée',
      'Meilleur tarif garanti',
      'Annulation flexible disponible',
      'Couverture Afrique, Moyen-Orient, Europe, Asie',
    ],
    color: 'from-teal to-teal-light',
    featured: true,
  },
  {
    id: 'visas',
    icon: 'FileText',
    title: 'Assistance Visas & Accueil',
    description:
      'Accompagnement complet pour vos demandes de visa. Tunisie, Turquie, Inde, Maroc, Arabie Saoudite, Dubaï, Égypte et plus.',
    details: [
      'Constitution du dossier de visa',
      'Suivi de la demande étape par étape',
      'Tunisie, Turquie, Inde, Égypte, Maroc',
      'Arabie Saoudite, Dubaï (EAU)',
      'Service d\'accueil à l\'aéroport',
      'Assistance consulaire en cas de refus',
    ],
    color: 'from-amber to-amber-light',
    featured: true,
  },
  {
    id: 'hadj-omra',
    icon: 'Star',
    title: 'Hadj & Omra',
    description:
      'Voyages spirituels organisés vers La Mecque et Médine. Packages complets incluant vols, hébergement et encadrement religieux.',
    details: [
      'Packages Omra toute l\'année',
      'Hadj officiel avec quota',
      'Vols directs ou en correspondance',
      'Hôtels proches des lieux saints',
      'Accompagnateur/guide islamique',
      'Visa Omra et Hadj facilité',
    ],
    color: 'from-emerald-600 to-teal',
    featured: true,
  },
  {
    id: 'evacuation',
    icon: 'HeartPulse',
    title: 'Évacuation Sanitaire',
    description:
      'Service d\'évacuation médicale d\'urgence vers Tunis, Casablanca, Paris ou d\'autres destinations de soins de qualité.',
    details: [
      'Organisation urgente 24h/24 7j/7',
      'Coordination avec établissements médicaux',
      'Vols médicaux ou vols commerciaux adaptés',
      'Accompagnement d\'un proche',
      'Prise en charge administrative complète',
      'Destinations : Tunisie, Maroc, France, Inde',
    ],
    color: 'from-red-500 to-rose-400',
    featured: true,
  },
  {
    id: 'location',
    icon: 'Car',
    title: 'Location de Véhicules',
    description:
      'Location de voitures, 4x4 et minibus pour vos déplacements à N\'Djaména et à l\'intérieur du Tchad.',
    details: [
      'Véhicules climatisés et récents',
      '4x4 pour les pistes et l\'intérieur',
      'Minibus pour groupes',
      'Avec ou sans chauffeur',
      'Prise en charge aéroport',
      'Tarifs journaliers ou hebdomadaires',
    ],
    color: 'from-violet-600 to-brand-light',
    featured: false,
  },
]

// ─── DESTINATIONS / VISA COUNTRIES ──────────────────────
export interface Destination {
  slug: string
  name: string
  flag: string
  continent: string
  visaType: string
  visaDelay: string
  price: string
  image: string
  description: string
  requirements: string[]
  popular: boolean
}

export const destinations: Destination[] = [
  {
    slug: 'tunisie',
    name: 'Tunisie',
    flag: '🇹🇳',
    continent: 'Afrique du Nord',
    visaType: 'Visa touristique',
    visaDelay: '5–7 jours ouvrés',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=800&q=80',
    description:
      'La Tunisie est une destination privilégiée pour les Tchadiens — médecine, tourisme, études. Hammamet, Sousse, Tunis et Carthage vous attendent.',
    requirements: [
      'Passeport valide 6 mois minimum',
      'Formulaire de demande rempli',
      'Photos d\'identité récentes',
      'Justificatif de logement',
      'Billets aller-retour',
      'Justificatif financier',
    ],
    popular: true,
  },
  {
    slug: 'turquie',
    name: 'Turquie',
    flag: '🇹🇷',
    continent: 'Europe / Asie',
    visaType: 'e-Visa',
    visaDelay: '3–5 jours',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80',
    description:
      'Istanbul, Cappadoce, Antalya — la Turquie offre culture, shopping et gastronomie. Hub aérien majeur pour les Tchadiens via Turkish Airlines.',
    requirements: [
      'Passeport valide 6 mois',
      'e-Visa en ligne (assistance KODBE)',
      'Réservation hôtel',
      'Billet aller-retour',
      'Justificatif financier',
    ],
    popular: true,
  },
  {
    slug: 'arabie-saoudite',
    name: 'Arabie Saoudite',
    flag: '🇸🇦',
    continent: 'Moyen-Orient',
    visaType: 'Visa Hadj / Omra / Tourisme',
    visaDelay: '7–15 jours',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80',
    description:
      'Destination spirituelle par excellence pour les musulmans. Omra toute l\'année, Hadj officiel. KODBE gère l\'intégralité de votre dossier.',
    requirements: [
      'Passeport valide 6 mois',
      'Certificat de vaccination méningite ACYW',
      'Photo d\'identité',
      'Pour l\'Omra : mahram pour les femmes',
      'Dossier complet fourni par KODBE',
    ],
    popular: true,
  },
  {
    slug: 'dubai',
    name: 'Dubaï (EAU)',
    flag: '🇦🇪',
    continent: 'Moyen-Orient',
    visaType: 'Visa touriste',
    visaDelay: '5–10 jours',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    description:
      'Dubaï, ville du futur — shopping, gratte-ciels et luxe. Visa touriste 30 ou 90 jours, business et transit disponibles.',
    requirements: [
      'Passeport valide 6 mois',
      'Formulaire de demande',
      'Photo récente fond blanc',
      'Relevé bancaire 3 mois',
      'Réservation d\'hôtel confirmée',
    ],
    popular: true,
  },
  {
    slug: 'maroc',
    name: 'Maroc',
    flag: '🇲🇦',
    continent: 'Afrique du Nord',
    visaType: 'Visa touristique',
    visaDelay: '7–10 jours',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    description:
      'Marrakech, Casablanca, Fès — le Maroc fascine par sa culture, ses souks et sa gastronomie. Destination médicale et touristique prisée.',
    requirements: [
      'Passeport valide 6 mois',
      'Lettre de motivation',
      'Justificatif d\'hébergement',
      'Billet aller-retour',
      'Justificatifs financiers',
    ],
    popular: true,
  },
  {
    slug: 'inde',
    name: 'Inde',
    flag: '🇮🇳',
    continent: 'Asie',
    visaType: 'e-Visa / Visa ambassade',
    visaDelay: '5–10 jours',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
    description:
      'Delhi, Mumbai, Chennai — l\'Inde est une destination médicale de premier plan. Soins cardiaques, orthopédiques, oncologiques à moindre coût.',
    requirements: [
      'Passeport valide 6 mois',
      'e-Visa disponible en ligne',
      'Photo numérique récente',
      'Lettre d\'invitation hôpital (médical)',
      'Preuve de fonds suffisants',
    ],
    popular: false,
  },
  {
    slug: 'egypte',
    name: 'Égypte',
    flag: '🇪🇬',
    continent: 'Afrique du Nord',
    visaType: 'Visa à l\'arrivée / ambassade',
    visaDelay: '3–5 jours',
    price: 'Sur devis',
    image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&q=80',
    description:
      'Le Caire, Alexandrie, Louxor — l\'Égypte entre histoire millénaire et mer Rouge cristalline. Visa accessible et séjours abordables.',
    requirements: [
      'Passeport valide 6 mois',
      'Visa à l\'arrivée possible',
      'Ou visa électronique en ligne',
      'Photo d\'identité',
      'Billet retour',
    ],
    popular: false,
  },
]

// ─── PARTNERS / NETWORK ──────────────────────────────────
export const partners = [
  { name: 'North Africa Partner',  icon: '🦅', region: 'Afrique du Nord' },
  { name: 'East Africa Partner',   icon: '🦁', region: 'Afrique de l\'Est' },
  { name: 'Middle East Partner',   icon: '🌙', region: 'Moyen-Orient' },
  { name: 'European Connection',   icon: '✈️', region: 'Europe' },
  { name: 'Royal Alliance',        icon: '⭐', region: 'Premium' },
  { name: 'Global Network',        icon: '🌐', region: 'Monde entier' },
  { name: 'Regional Link',         icon: '🔗', region: 'Afrique centrale' },
  { name: 'Kenyan Connection',     icon: '🐆', region: 'Afrique de l\'Est' },
]

// ─── AIRLINES ────────────────────────────────────────────
export const airlines = [
  'Air France',
  'Turkish Airlines',
  'Emirates',
  'Qatar Airways',
  'Ethiopian Airlines',
  'Kenya Airways',
  'Air Algérie',
  'Royal Air Maroc',
]

// ─── TESTIMONIALS ────────────────────────────────────────
export const testimonials = [
  {
    id: '1',
    name: 'Mahamat Ali Idriss',
    city: 'N\'Djaména',
    trip: 'Omra — Arabie Saoudite',
    rating: 5,
    text:
      'KODBE a géré l\'intégralité de notre voyage pour l\'Omra : billets, visa, hébergement à 200m de la Kaaba. Tout était parfaitement organisé. Je recommande vivement pour les voyages spirituels.',
    avatar: 'MA',
    date: 'Mars 2024',
  },
  {
    id: '2',
    name: 'Fatima Hassane',
    city: 'N\'Djaména',
    trip: 'Évacuation médicale — Tunisie',
    rating: 5,
    text:
      'Mon mari avait besoin d\'une intervention urgente. L\'équipe KODBE a organisé le vol et l\'admission à la clinique de Tunis en moins de 48h. Leur réactivité nous a vraiment aidés dans un moment difficile.',
    avatar: 'FH',
    date: 'Janvier 2024',
  },
  {
    id: '3',
    name: 'Oumar Deby',
    city: 'N\'Djaména',
    trip: 'Istanbul — Turquie',
    rating: 5,
    text:
      'Visa turc obtenu en 4 jours, billet au meilleur prix, hôtel proche du Grand Bazar. KODBE s\'occupe de tout avec professionnalisme. C\'est la 3ème fois que je passe par eux.',
    avatar: 'OD',
    date: 'Novembre 2023',
  },
  {
    id: '4',
    name: 'Amina Tahir',
    city: 'N\'Djaména',
    trip: 'Dubaï — Tourisme',
    rating: 5,
    text:
      'Dubaï en famille, 7 nuits. KODBE a tout géré : visas pour 4 personnes, billets Emirates, hôtel à Deira. Personnel très disponible et à l\'écoute. Voyage parfait !',
    avatar: 'AT',
    date: 'Décembre 2023',
  },
  {
    id: '5',
    name: 'Ibrahim Saleh',
    city: 'N\'Djaména',
    trip: 'Maroc — Casablanca',
    rating: 5,
    text:
      'Traitement médical à Casablanca. KODBE a coordonné le visa, le billet et même la prise de RDV à la clinique. Suivi impeccable du début à la fin.',
    avatar: 'IS',
    date: 'Septembre 2023',
  },
  {
    id: '6',
    name: 'Khadidja Nour',
    city: 'N\'Djaména',
    trip: 'Inde — Chennai (Médical)',
    rating: 5,
    text:
      'Voyage médical en Inde pour une chirurgie cardiaque. KODBE nous a accompagnés dans toutes les démarches : e-visa, billets, contact avec l\'hôpital Apollo. Service irréprochable.',
    avatar: 'KN',
    date: 'Février 2024',
  },
]
