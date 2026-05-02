import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kodbe-travel.vercel.app'

  return [
    { url: base,                          lastModified: new Date(), changeFrequency: 'weekly',  priority: 1 },
    { url: `${base}/destinations`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/offres`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/temoignages`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/a-propos`,            lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${base}/contact`,             lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.8 },
    { url: `${base}/destinations/tunisie`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/destinations/turquie`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/destinations/arabie-saoudite`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/destinations/dubai`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/destinations/maroc`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/destinations/inde`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/destinations/egypte`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]
}
