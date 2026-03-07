import Link from 'next/link'
import { services } from '@/lib/services'
import PageHeader from '@/components/PageHeader'
import WhoWeServe from '@/components/WhoWeServe'
import HomeCTA from '@/components/HomeCTA'
import { SITE_URL } from '@/lib/constants'

export const metadata = {
  title: 'Services | Holistic Solutions Case Management',
  description: 'Clinical case management for substance use, psychosis, co-occurring disorders, and intervention. Specialties include alcohol, opioids, schizophrenia, and more.',
  alternates: { canonical: `${SITE_URL}/services` },
}

const coreServices = [
  { href: '/substance-use-case-management', title: 'Substance Use Case Management', desc: 'Coordinated care for alcohol and drug use disorders across every level of care — detox, residential, PHP, IOP, and outpatient.' },
  { href: '/psychosis-case-management', title: 'Psychosis Case Management', desc: 'Specialized coordination for psychotic disorders, first-episode psychosis, and substance-induced psychosis.' },
  { href: '/co-occurring-disorders-case-management', title: 'Co-Occurring Disorders Case Management', desc: 'Integrated case management for clients navigating both substance use and mental health conditions.' },
  { href: '/clinical-intervention-services', title: 'Clinical Intervention Services', desc: 'In-person interventions led by licensed clinicians. Pre-intervention planning, family preparation, and immediate placement.' },
]

const specialties = [
  { href: '/alcohol-use-disorder-case-management', title: 'Alcohol Use Disorder' },
  { href: '/opioid-addiction-case-management', title: 'Opioid Addiction' },
  { href: '/schizophrenia-case-management', title: 'Schizophrenia' },
  { href: '/first-episode-psychosis-case-management', title: 'First Episode Psychosis' },
]

const locations = [
  {
    city: 'Los Angeles',
    hub: '/case-management-los-angeles',
    spokes: [
      { href: '/substance-use-case-management-los-angeles', label: 'Substance Use' },
      { href: '/psychosis-case-management-los-angeles', label: 'Psychosis' },
      { href: '/dual-diagnosis-case-management-los-angeles', label: 'Dual Diagnosis' },
    ],
  },
  {
    city: 'New York City',
    hub: '/case-management-new-york-city',
    spokes: [
      { href: '/substance-use-case-management-new-york-city', label: 'Substance Use' },
      { href: '/psychosis-case-management-new-york-city', label: 'Psychosis' },
      { href: '/dual-diagnosis-case-management-new-york-city', label: 'Dual Diagnosis' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="What We Do"
        subtitle="We work alongside individuals, families, and providers across the country to build coordinated care plans that address the full picture: clinical, social, and personal."
      >
        Comprehensive care for <em>complex needs.</em>
      </PageHeader>

      {/* Core Services */}
      <section style={{ borderTop: 'none', paddingTop: '0' }}>
        <p className="section-label">Core Services</p>
        <h2>Clinical case management, led by licensed clinicians</h2>
        <div className="services-grid" style={{ marginTop: '2.5rem' }}>
          {coreServices.map((s) => (
            <Link key={s.href} href={s.href} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="service-card" style={{ height: '100%', cursor: 'pointer' }}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <p style={{ marginTop: '1rem', fontSize: '0.78rem', color: 'var(--adobe)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>
                  Learn more →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Specialties */}
      <section style={{ background: 'var(--white)' }}>
        <p className="section-label">Specialties</p>
        <h2>Condition-specific case management</h2>
        <div className="services-grid" style={{ marginTop: '2.5rem' }}>
          {specialties.map((s) => (
            <Link key={s.href} href={s.href} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="service-card" style={{ height: '100%', cursor: 'pointer' }}>
                <h3>{s.title}</h3>
                <p style={{ marginTop: '1rem', fontSize: '0.78rem', color: 'var(--adobe)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>
                  Learn more →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Locations */}
      <section>
        <p className="section-label">Locations</p>
        <h2>Local case management</h2>
        <p className="service-page-body" style={{ maxWidth: '680px' }}>
          We serve clients nationwide. In Los Angeles and New York City, we provide the most hands-on local support — in-person assessments, interventions, companionship, and coordination with our local provider networks.
        </p>
        <div className="services-grid" style={{ marginTop: '2.5rem' }}>
          {locations.map((loc) => (
            <div key={loc.city} className="service-card" style={{ height: '100%' }}>
              <h3><Link href={loc.hub} style={{ color: 'inherit', textDecoration: 'none' }}>{loc.city}</Link></h3>
              <p style={{ marginBottom: '1rem' }}>
                <Link href={loc.hub} style={{ fontSize: '0.78rem', color: 'var(--adobe)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500, textDecoration: 'none' }}>
                  All {loc.city} services →
                </Link>
              </p>
              {loc.spokes.map((spoke) => (
                <p key={spoke.href} style={{ marginBottom: '0.35rem' }}>
                  <Link href={spoke.href} style={{ fontSize: '0.85rem', color: 'var(--smoke)', textDecoration: 'none' }}>
                    {spoke.label} →
                  </Link>
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section style={{ background: 'var(--white)' }}>
        <p className="section-label">Additional Services</p>
        <h2>Supporting the full recovery journey</h2>
        <div className="services-grid" style={{ marginTop: '2.5rem' }}>
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
      <HomeCTA />
    </>
  )
}
