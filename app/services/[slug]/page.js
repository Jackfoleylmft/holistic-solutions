import { notFound } from 'next/navigation'
import Link from 'next/link'
import { services, getServiceBySlug } from '@/lib/services'
import HomeCTA from '@/components/HomeCTA'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  return {
    title: `${service.title} | Holistic Solutions`,
    description: service.metaDescription,
    keywords: service.keywords,
  }
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  return (
    <>
      {/* Page header */}
      <section className="page-header">
        <Link href="/services" className="back-link">← All Services</Link>
        <p className="section-label" style={{ marginTop: '1.5rem' }}>Service {service.num}</p>
        <h1>{service.title}</h1>
        <p className="page-sub">{service.tagline}</p>
      </section>

      {/* Overview */}
      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <p className="section-label">Overview</p>
            <h2>About this service</h2>
            {service.overview.map((p, i) => (
              <p key={i} className="service-page-body">{p}</p>
            ))}

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">What to Expect</p>
              <h2>Our approach</h2>
              <div className="process-steps" style={{ marginTop: '2rem' }}>
                {service.whatToExpect.map((step, i) => (
                  <div key={i} className="step">
                    <span className="step-num">0{i + 1}</span>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>"{service.differentiator}"</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions</cite>
            </div>
          </div>

          <div className="service-page-sidebar">
            <div className="sidebar-box">
              <p className="section-label">Who This Helps</p>
              <ul className="sidebar-list">
                {service.whoItHelps.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="sidebar-box sidebar-cta">
              <p style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--clay)', marginBottom: '0.75rem' }}>Ready to talk?</p>
              <p style={{ fontSize: '0.9rem', color: '#C8BEB4', marginBottom: '1.5rem', lineHeight: 1.65 }}>
                All consultations are confidential. We respond within one business day.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', marginBottom: '0.75rem' }}>
                Get Started
              </Link>
              <a href="tel:+17024947641" style={{ display: 'block', textAlign: 'center', fontSize: '0.82rem', color: 'var(--clay)', textDecoration: 'none', letterSpacing: '0.04em' }}>
                (702) 494-7641
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section style={{ background: 'var(--white)' }}>
        <p className="section-label">Explore More</p>
        <h2>Related services</h2>
        <div className="services-grid" style={{ marginTop: '2.5rem' }}>
          {services
            .filter((s) => s.slug !== service.slug)
            .slice(0, 3)
            .map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} style={{ textDecoration: 'none' }}>
                <div className="service-card" style={{ height: '100%' }}>
                  <div className="service-num">{s.num}</div>
                  <h3>{s.shortTitle}</h3>
                  <p>{s.tagline}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <HomeCTA />
    </>
  )
}
