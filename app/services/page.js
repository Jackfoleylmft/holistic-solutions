import Link from 'next/link'
import { services } from '@/lib/services'
import PageHeader from '@/components/PageHeader'
import WhoWeServe from '@/components/WhoWeServe'
import { SITE_URL } from '@/lib/constants'

export const metadata = {
  title: 'Services | Holistic Solutions Case Management',
  description: 'Comprehensive clinical case management services including substance use, mental health, co-occurring disorders, intervention, treatment placement, recovery coaching, and more. Nationwide.',
  alternates: { canonical: `${SITE_URL}/services` },
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="What We Do"
        subtitle="We work alongside individuals, families, and providers across the country to build coordinated care plans that address the full picture: clinical, social, and personal."
      >
        Comprehensive care for <em>complex needs.</em>
      </PageHeader>
      <section style={{ borderTop: 'none', paddingTop: '0' }}>
        <div className="services-grid">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="service-card" style={{ height: '100%', cursor: 'pointer' }}>
                <div className="service-num">{s.num}</div>
                <h3>{s.shortTitle}</h3>
                <p>{s.tagline}</p>
                <p style={{ marginTop: '1rem', fontSize: '0.78rem', color: 'var(--adobe)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>
                  Learn more →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <WhoWeServe />
    </>
  )
}
