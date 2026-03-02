import Link from 'next/link'

export default function HomeCTA() {
  return (
    <section id="contact" style={{ background: 'var(--dusk)', color: 'var(--sand)' }}>
      <p className="section-label" style={{ color: 'var(--clay)' }}>Get Started</p>
      <h2 style={{ color: 'var(--white)' }}>Reach out. We&apos;ll take it from here.</h2>
      <p className="section-intro" style={{ color: '#C8BEB4', marginBottom: '2.5rem' }}>
        All inquiries are confidential. A member of our team will respond within one business day —
        wherever you are in the US.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <Link href="/contact" className="btn btn-primary">
          Send Us a Message
        </Link>
        <a href="tel:+17024947641" className="btn btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--sand)' }}>
          (702) 494-7641
        </a>
      </div>
    </section>
  )
}
