import Link from 'next/link'
import { services } from '@/lib/services'

export default function ServicesPreview() {
  return (
    <section id="services">
      <div className="section-head">
        <div>
          <p className="section-label">What We Do</p>
          <h2>Comprehensive care for complex needs.</h2>
        </div>
        <p className="section-intro">
          We work alongside individuals, families, and providers across the country to build
          coordinated care plans that address the full picture — clinical, social, and personal.
        </p>
      </div>
      <div className="services-grid">
        {services.slice(0, 4).map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="service-link">
            <div className="service-card">
              <div className="service-num">{s.num}</div>
              <h3>{s.shortTitle}</h3>
              <p>{s.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="services-preview-more">
        <Link href="/services" className="btn btn-secondary">
          See All Services →
        </Link>
      </div>
    </section>
  )
}
