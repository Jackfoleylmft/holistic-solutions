import { notFound } from 'next/navigation'
import Link from 'next/link'
import { cities, getCityBySlug } from '@/lib/cities'
import { services } from '@/lib/services'
import HomeCTA from '@/components/HomeCTA'

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

export function generateMetadata({ params }) {
  const city = getCityBySlug(params.city)
  if (!city) return {}
  return {
    title: `Clinical Case Management in ${city.name}, ${city.state} | Holistic Solutions Case Management`,
    description: `Holistic Solutions Case Management provides clinical case management, intervention services, and treatment placement for individuals and families in ${city.name}, ${city.stateFullName}. Masters-level clinicians. Nationwide network.`,
    keywords: `clinical case management ${city.name}, substance use case manager ${city.name}, mental health case management ${city.name}, intervention services ${city.name}, treatment placement ${city.name}`,
  }
}

export default function CityPage({ params }) {
  const city = getCityBySlug(params.city)
  if (!city) notFound()

  return (
    <>
      <section className="page-header">
        <p className="section-label">Serving {city.name}, {city.state}</p>
        <h1>{city.headline}</h1>
        <p className="page-sub">{city.intro}</p>
      </section>

      <section>
        <p className="section-label">Our Services</p>
        <h2>What we offer in {city.name}</h2>
        <p className="section-intro" style={{ marginBottom: '3rem' }}>
          We provide the full range of clinical case management services to individuals and
          families in {city.name}. Every engagement is led by a masters-level clinician.
        </p>
        <div className="services-grid">
          {services.map((s) => (
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

      <section style={{ background: 'var(--white)' }}>
        <div className="city-local">
          <p className="section-label">Local Coverage</p>
          <h2>Serving the greater {city.name} area</h2>
          <p className="section-intro" style={{ marginTop: '1rem' }}>{city.localNote}</p>
          <p className="section-intro" style={{ marginTop: '1rem' }}>
            While we are headquartered in Los Angeles, CA, our services are available to clients
            across the United States — including in-person coordination, telehealth case management,
            and on-site intervention services nationwide.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/contact" className="btn btn-primary">Request a Consultation</Link>
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  )
}
