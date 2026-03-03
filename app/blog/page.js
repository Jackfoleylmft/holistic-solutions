import Link from 'next/link'
import { posts } from '@/lib/posts'

export const metadata = {
  title: 'Blog | Holistic Solutions Case Management',
  description: 'Clinical insights, recovery resources, and expert guidance from the team at Holistic Solutions Case Management. Topics include substance use, mental health, co-occurring disorders, intervention, and navigating the behavioral health system.',
  alternates: { canonical: 'https://hscasemanagement.com/blog' },
}

export default function BlogPage() {
  return (
    <>
      <section className="page-header">
        <p className="section-label">Resources</p>
        <h1>Clinical insights & <em>recovery resources.</em></h1>
        <p className="page-sub">
          Guidance from our clinical team on navigating substance use, mental health, and the
          behavioral health system — written for individuals, families, and providers.
        </p>
      </section>

      <section style={{ background: 'var(--white)' }}>
        {posts.length === 0 ? (
          <div className="blog-empty">
            <p className="section-label">Coming Soon</p>
            <h2>Articles are on the way.</h2>
            <p className="section-intro" style={{ marginTop: '1rem' }}>
              We&apos;re preparing in-depth guides on case management, intervention, treatment
              placement, and recovery. Check back soon — or reach out directly if you have a
              question we can help with now.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <Link href="/contact" className="btn btn-primary">Talk to Our Team</Link>
            </div>
          </div>
        ) : (
          <div className="blog-grid">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <p className="blog-card-category">{post.category}</p>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
