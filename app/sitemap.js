import { services } from '@/lib/services'
import { posts } from '@/lib/posts'
import { SITE_URL } from '@/lib/constants'

export default function sitemap() {
  const base = SITE_URL
  const siteLastUpdated = '2026-03-11'

  const staticPages = [
    { url: base, changeFrequency: 'monthly', priority: 1, lastModified: siteLastUpdated },
    { url: `${base}/services`, changeFrequency: 'monthly', priority: 0.9, lastModified: siteLastUpdated },
    { url: `${base}/about`, changeFrequency: 'monthly', priority: 0.8, lastModified: siteLastUpdated },
    { url: `${base}/faq`, changeFrequency: 'monthly', priority: 0.7, lastModified: siteLastUpdated },
    { url: `${base}/contact`, changeFrequency: 'monthly', priority: 0.8, lastModified: siteLastUpdated },
    { url: `${base}/blog`, changeFrequency: 'weekly', priority: 0.7, lastModified: siteLastUpdated },
    { url: `${base}/privacy`, changeFrequency: 'yearly', priority: 0.3, lastModified: '2026-03-01' },
    { url: `${base}/terms`, changeFrequency: 'yearly', priority: 0.3, lastModified: '2026-03-01' },
    { url: `${base}/hipaa`, changeFrequency: 'yearly', priority: 0.3, lastModified: '2026-03-01' },
    { url: `${base}/substance-use-case-management`, changeFrequency: 'monthly', priority: 0.9, lastModified: '2026-03-06' },
    { url: `${base}/psychosis-case-management`, changeFrequency: 'monthly', priority: 0.9, lastModified: '2026-03-06' },
    { url: `${base}/co-occurring-disorders-case-management`, changeFrequency: 'monthly', priority: 0.9, lastModified: '2026-03-06' },
    { url: `${base}/clinical-intervention-services`, changeFrequency: 'monthly', priority: 0.9, lastModified: '2026-03-06' },
    { url: `${base}/case-management-los-angeles`, changeFrequency: 'monthly', priority: 0.9, lastModified: '2026-03-07' },
    { url: `${base}/case-management-new-york-city`, changeFrequency: 'monthly', priority: 0.9, lastModified: '2026-03-07' },
    { url: `${base}/substance-use-case-management-los-angeles`, changeFrequency: 'monthly', priority: 0.85, lastModified: '2026-03-07' },
    { url: `${base}/substance-use-case-management-new-york-city`, changeFrequency: 'monthly', priority: 0.85, lastModified: '2026-03-07' },
    { url: `${base}/psychosis-case-management-los-angeles`, changeFrequency: 'monthly', priority: 0.85, lastModified: '2026-03-07' },
    { url: `${base}/psychosis-case-management-new-york-city`, changeFrequency: 'monthly', priority: 0.85, lastModified: '2026-03-07' },
    { url: `${base}/dual-diagnosis-case-management-los-angeles`, changeFrequency: 'monthly', priority: 0.85, lastModified: '2026-03-07' },
    { url: `${base}/dual-diagnosis-case-management-new-york-city`, changeFrequency: 'monthly', priority: 0.85, lastModified: '2026-03-07' },
    { url: `${base}/alcohol-use-disorder-case-management`, changeFrequency: 'monthly', priority: 0.85, lastModified: '2026-03-07' },
    { url: `${base}/opioid-addiction-case-management`, changeFrequency: 'monthly', priority: 0.85, lastModified: '2026-03-07' },
    { url: `${base}/schizophrenia-case-management`, changeFrequency: 'monthly', priority: 0.85, lastModified: '2026-03-07' },
    { url: `${base}/first-episode-psychosis-case-management`, changeFrequency: 'monthly', priority: 0.85, lastModified: '2026-03-07' },
  ]

  const servicePages = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    changeFrequency: 'monthly',
    priority: 0.85,
    lastModified: siteLastUpdated,
  }))

  const blogPages = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    changeFrequency: 'monthly',
    priority: 0.65,
    lastModified: p.date,
  }))

  return [...staticPages, ...servicePages, ...blogPages]
}
