import { notFound } from 'next/navigation'
import Link from 'next/link'
import { posts, getPostBySlug } from '@/lib/posts'
import HomeCTA from '@/components/HomeCTA'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Holistic Solutions Case Management`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <>
      <section className="page-header">
        <Link href="/blog" className="back-link">← All Articles</Link>
        <p className="section-label" style={{ marginTop: '1.5rem' }}>{post.category}</p>
        <h1>{post.title}</h1>
        <div className="article-byline">
          {post.author && <span className="article-author">{post.author}</span>}
          <span className="article-date">
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
      </section>

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

      <HomeCTA />
    </>
  )
}
