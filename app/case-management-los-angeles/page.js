import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import AuthorByline from '@/components/AuthorByline'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'Case Management Los Angeles | Holistic Solutions',
  description: 'Clinical case management in Los Angeles for substance use, psychosis, and co-occurring disorders. Licensed clinicians, in-person and remote. Confidential.',
  keywords: 'case management los angeles, substance use case manager LA, psychosis case management los angeles, dual diagnosis case manager los angeles, behavioral health case management LA',
  authors: [{ name: 'Jack Foley, LMFT', url: `${SITE_URL}/about` }],
  alternates: { canonical: `${SITE_URL}/case-management-los-angeles` },
  openGraph: {
    title: 'Case Management Los Angeles | Holistic Solutions',
    description: 'Clinical case management in Los Angeles for substance use, psychosis, and co-occurring disorders. Licensed clinicians, in-person and remote. Confidential.',
    url: `${SITE_URL}/case-management-los-angeles`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What case management services are available in Los Angeles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Holistic Solutions provides clinical case management in Los Angeles for substance use disorders, psychosis, co-occurring disorders, clinical intervention, treatment placement, recovery coaching, companionship services, and clinical transport. All services are led by licensed clinicians.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer in-person case management in LA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. As our headquarters, Los Angeles is where we offer the most comprehensive local support — in-person assessments, local coordination, clinical interventions, companionship services, and direct access to our LA-area professional network of treatment centers, psychiatrists, and therapists.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas of Los Angeles do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve all of Los Angeles County and the greater LA area, including West LA, the Valley, South Bay, Downtown, Pasadena, and surrounding communities. We also serve clients throughout California and nationwide.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I start the process?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call (702) 494-7641 or submit a contact form. After your initial call, we conduct a full intake assessment to understand your situation and walk you through your options. All inquiries are confidential. We respond within one business day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Holistic Solutions only for people in Los Angeles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. While we are headquartered in Los Angeles and offer the most hands-on support locally, we provide case management services nationwide. Remote assessments, care coordination, and treatment placement are available for clients in all 50 states.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Holistic Solutions different from other LA case management companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every case manager is a licensed clinician. Every intervention is led by a master\'s-level licensed clinician — not a certified interventionist. Our founder, Jack Foley, LMFT, has deep clinical expertise in substance use and psychosis, and over a decade of personal recovery experience. This combination of clinical credentials and lived experience is rare in the Los Angeles market.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Case Management Los Angeles', item: `${SITE_URL}/case-management-los-angeles` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://hscasemanagement.com/case-management-los-angeles',
  name: 'Clinical Case Management Los Angeles',
  description: 'Clinical case management in Los Angeles for substance use, psychosis, and co-occurring disorders. Licensed clinicians, in-person and remote. Confidential.',
  provider: {
    '@type': 'MedicalBusiness',
    '@id': 'https://hscasemanagement.com',
    name: 'Holistic Solutions Case Management',
  },
  areaServed: { '@type': 'City', name: 'Los Angeles' },
  serviceType: 'Clinical Case Management',
}

const localSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Holistic Solutions Case Management',
  url: SITE_URL,
  telephone: '+17024947641',
  email: 'info@hscasemanagement.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Los Angeles' },
    { '@type': 'Country', name: 'United States' },
  ],
  openingHours: 'Mo-Fr 08:00-18:00',
}

const faqs = [
  { q: 'What case management services are available in Los Angeles?', a: 'Holistic Solutions provides clinical case management in Los Angeles for substance use disorders, psychosis, co-occurring disorders, clinical intervention, treatment placement, recovery coaching, companionship services, and clinical transport. All services are led by licensed clinicians.' },
  { q: 'Do you offer in-person case management in LA?', a: 'Yes. As our headquarters, Los Angeles is where we offer the most comprehensive local support — in-person assessments, local coordination, clinical interventions, companionship services, and direct access to our LA-area professional network of treatment centers, psychiatrists, and therapists.' },
  { q: 'What areas of Los Angeles do you serve?', a: 'We serve all of Los Angeles County and the greater LA area, including West LA, the Valley, South Bay, Downtown, Pasadena, and surrounding communities. We also serve clients throughout California and nationwide.' },
  { q: 'How do I start the process?', a: 'Call (702) 494-7641 or submit a contact form. After your initial call, we conduct a full intake assessment to understand your situation and walk you through your options. All inquiries are confidential. We respond within one business day.' },
  { q: 'Is Holistic Solutions only for people in Los Angeles?', a: 'No. While we are headquartered in Los Angeles and offer the most hands-on support locally, we provide case management services nationwide. Remote assessments, care coordination, and treatment placement are available for clients in all 50 states.' },
  { q: 'What makes Holistic Solutions different from other LA case management companies?', a: "Every case manager is a licensed clinician. Every intervention is led by a master's-level licensed clinician — not a certified interventionist. Our founder, Jack Foley, LMFT, has deep clinical expertise in substance use and psychosis, and over a decade of personal recovery experience. This combination is rare in the Los Angeles market." },
]

export default function CaseManagementLosAngeles() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      <section className="page-header">
        <p className="section-label">Los Angeles</p>
        <h1>Case Management in Los Angeles — Licensed Clinicians, Local Expertise</h1>
        <p className="page-sub">
          Headquartered in LA. In-person assessments, clinical interventions, and access to the strongest professional network in the city — backed by a team of licensed clinicians.
        </p>
      </section>

      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <AuthorByline />

            <p className="section-label">Overview</p>
            <h2>Clinical case management, rooted in Los Angeles</h2>
            <p className="service-page-body">
              Holistic Solutions is headquartered in Los Angeles. This is where the practice was built, where the deepest professional relationships exist, and where clients receive the most comprehensive local support.
            </p>
            <p className="service-page-body">
              For LA-area clients, that means in-person clinical assessments, face-to-face family preparation for interventions, local companionship and transport services, and direct coordination with the treatment centers, psychiatrists, and therapists we know and trust in this city.
            </p>
            <p className="service-page-body">
              Los Angeles has one of the most complex and fragmented behavioral health systems in the country. The number of treatment programs, sober living homes, and providers can be overwhelming — and the quality gap between them is wide. A licensed case manager who knows this market is the difference between a purposeful placement and a costly mistake.
            </p>

            <p className="service-page-body" style={{ marginTop: '1.5rem' }}>
              Call us. <strong><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></strong>. All inquiries are confidential.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Services in LA</p>
              <h2>What we offer in Los Angeles</h2>
              <div className="process-steps" style={{ marginTop: '2rem' }}>
                <div className="step">
                  <span className="step-num">01</span>
                  <div className="step-content">
                    <h4>Substance Use Case Management</h4>
                    <p>Coordinated care for alcohol and drug use disorders across every level of care — detox, residential, PHP, IOP, and outpatient — with access to our vetted LA-area network. <Link href="/substance-use-case-management">Learn more</Link>.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">02</span>
                  <div className="step-content">
                    <h4>Psychosis Case Management</h4>
                    <p>Specialized coordination for psychotic disorders, first-episode psychosis, and substance-induced psychosis. This is where our clinical depth runs deepest. <Link href="/psychosis-case-management">Learn more</Link>.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <div className="step-content">
                    <h4>Co-Occurring Disorders</h4>
                    <p>Integrated case management for clients navigating both substance use and mental health conditions — addressed together, not separately. <Link href="/co-occurring-disorders-case-management">Learn more</Link>.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">04</span>
                  <div className="step-content">
                    <h4>Clinical Interventions</h4>
                    <p>In-person interventions led by master&apos;s-level licensed clinicians. Pre-intervention planning, family preparation, clinical facilitation, and immediate treatment placement. <Link href="/clinical-intervention-services">Learn more</Link>.</p>
                  </div>
                </div>
              </div>
              <p className="service-page-body" style={{ marginTop: '2rem' }}>
                We also provide <Link href="/services/treatment-placement">treatment placement</Link>, <Link href="/services/recovery-coaching">recovery coaching</Link>, <Link href="/services/companionship-support">companionship services</Link>, and <Link href="/services/safe-transport">clinical transport</Link> in the Los Angeles area and nationwide.
              </p>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>&ldquo;Los Angeles is where I built this practice. It is where I know the providers, the programs, and the system better than anywhere else. That knowledge translates into better, faster outcomes for the people we serve here.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions · Los Angeles, CA</cite>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">The LA Advantage</p>
              <h2>Why local matters in case management</h2>
              <p className="service-page-body">
                Case management can be done remotely — and we do it remotely for clients across the country. But in Los Angeles, our clients get something additional: a team that has personally evaluated programs in this market, has standing relationships with local psychiatrists and therapists, and can show up in person when the situation calls for it.
              </p>
              <p className="service-page-body">
                In-person assessments. In-person interventions. In-person companionship during transitions. Local coordination with providers who know us by name. That is the advantage of working with a case management team headquartered where you are.
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Beyond LA</p>
              <h2>We also serve clients nationwide</h2>
              <p className="service-page-body">
                While Los Angeles is our home base, Holistic Solutions works with clients and families in all 50 states. If you are outside of LA, we provide remote assessments, nationwide treatment placement, and ongoing case management regardless of where you are located.
              </p>
            </div>
          </div>

          <div className="service-page-sidebar">
            <div className="sidebar-box">
              <p className="section-label">LA Services</p>
              <ul className="sidebar-list">
                <li>In-person clinical assessments</li>
                <li>Local intervention facilitation</li>
                <li>LA-area treatment placement</li>
                <li>Local companionship and transport</li>
                <li>Coordination with LA providers</li>
                <li>Remote services also available</li>
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
              <a href={PHONE_HREF} style={{ display: 'block', textAlign: 'center', fontSize: '0.82rem', color: 'var(--clay)', textDecoration: 'none', letterSpacing: '0.04em' }}>
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--white)' }}>
        <p className="section-label">Frequently Asked Questions</p>
        <h2>Common questions, honest answers.</h2>
        <div className="faq-grid" style={{ marginTop: '2.5rem' }}>
          <div>
            {faqs.slice(0, 3).map((item) => (
              <details key={item.q}>
                <summary>{item.q}<span className="faq-icon" aria-hidden="true">+</span></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <div>
            {faqs.slice(3).map((item) => (
              <details key={item.q}>
                <summary>{item.q}<span className="faq-icon" aria-hidden="true">+</span></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  )
}
