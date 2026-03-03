import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found | Holistic Solutions Case Management',
  robots: 'noindex, follow',
}

export default function NotFound() {
  return (
    <>
      <section className="page-header">
        <p className="section-label">404</p>
        <h1>Page not found.</h1>
        <p className="page-sub">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
      </section>
      <section style={{ background: 'var(--white)', textAlign: 'center' }}>
        <p className="section-intro" style={{ marginBottom: '2rem' }}>
          You can find everything you need from the links below, or reach out directly. We&apos;re
          easy to get a hold of.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary">Go Home</Link>
          <Link href="/services" className="btn btn-secondary">Our Services</Link>
          <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
