import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { posts, getPostBySlug } from '@/lib/posts'
import { services } from '@/lib/services'
import { SITE_URL, BUSINESS_NAME } from '@/lib/constants'
import HomeCTA from '@/components/HomeCTA'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Holistic Solutions Case Management`,
    description: post.metaDescription || post.excerpt.substring(0, 155),
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      publishedTime: post.date,
      authors: ['Jack Foley, LMFT'],
      ...(post.image && {
        images: [{ url: post.image, width: 1200, height: 500, alt: post.imageAlt || post.title }],
      }),
    },
  }
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const relatedServiceData = post.relatedServices
    ? services.filter((s) => post.relatedServices.includes(s.slug))
    : []

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription || post.excerpt.substring(0, 155),
    datePublished: post.date,
    dateModified: post.date,
    ...(post.image && { image: `${SITE_URL}${post.image}` }),
    author: {
      '@type': 'Person',
      name: 'Jack Foley',
      jobTitle: 'Licensed Marriage and Family Therapist',
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="page-header">
        <Link href="/blog" className="back-link">← All Articles</Link>
        <p className="section-label" style={{ marginTop: '1.5rem' }}>{post.category}</p>
        <h1>{post.title}</h1>
        <div className="article-byline">
          {post.author && <span className="article-author">{post.author}</span>}
        </div>
      </section>

      {post.image && (
        <div className="article-hero">
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            width={1200}
            height={500}
            sizes="100vw"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            priority
          />
        </div>
      )}

      <section className="legal-page">
        <div className="legal-content">
          {post.body.map((block, i) => {
            if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>
            if (block.type === 'h3') return <h3 key={i}>{block.text}</h3>
            if (block.type === 'p') return <p key={i}>{block.text}</p>
            if (block.type === 'ul') return (
              <ul key={i}>
                {block.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            )
            if (block.type === 'bio') return (
              <div key={i} className="article-bio">
                <p>{block.text}</p>
              </div>
            )
            if (block.type === 'cta-link') return (
              <p key={i} className="article-cta-line">
                {block.text}
                <Link href={block.href}>{block.linkText}</Link>
                {block.suffix || ''}
              </p>
            )
            return null
          })}

          {post.references && post.references.length > 0 && (
            <div className="article-references">
              <h2>References</h2>
              <ol>
                {post.references.map((ref, i) => (
                  <li key={i}>{ref}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </section>

      {relatedServiceData.length > 0 && (
        <section style={{ background: 'var(--white)' }}>
          <p className="section-label">Related Services</p>
          <h2>How we can help</h2>
          <div className="services-grid" style={{ marginTop: '2.5rem' }}>
            {relatedServiceData.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="service-card" style={{ height: '100%' }}>
                  <div className="service-num">{s.num}</div>
                  <h3>{s.shortTitle}</h3>
                  <p>{s.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <HomeCTA />
    </>
  )
}
