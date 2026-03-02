import { services } from '@/lib/services'

export default function sitemap() {
  const base = 'https://hscasemanagement.com'

  const staticPages = [
    { url: base, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/faq`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const servicePages = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  return [...staticPages, ...servicePages].map((p) => ({
    ...p,
    lastModified: new Date(),
  }))
}
