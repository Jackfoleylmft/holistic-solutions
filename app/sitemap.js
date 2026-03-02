import { services } from '@/lib/services'
import { posts } from '@/lib/posts'

export default function sitemap() {
  const base = 'https://hscasemanagement.com'

  const staticPages = [
    { url: base, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/faq`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/hipaa`, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const servicePages = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const blogPages = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    changeFrequency: 'monthly',
    priority: 0.65,
  }))

  return [...staticPages, ...servicePages, ...blogPages].map((p) => ({
    ...p,
    lastModified: new Date(),
  }))
}
