import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'Case Management New York City | Holistic Solutions',
  description: 'Clinical case management in New York City for substance use, psychosis, and co-occurring disorders. Licensed clinicians, in-person and remote. Confidential.',
  keywords: 'case management new york city, substance use case manager NYC, psychosis case management new york, dual diagnosis case manager NYC, behavioral health case management new york city',
  alternates: { canonical: `${SITE_URL}/case-management-new-york-city` },
  openGraph: {
    title: 'Case Management New York City | Holistic Solutions',
    description: 'Clinical case management in New York City for substance use, psychosis, and co-occurring disorders. Licensed clinicians, in-person and remote. Confidential.',
    url: `${SITE_URL}/case-management-new-york-city`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What case management services are available in New York City?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Holistic Solutions provides clinical case management in New York City for substance use disorders, psychosis, co-occurring disorders, clinical intervention, treatment placement, recovery coaching, companionship services, and clinical transport. All services are led by licensed clinicians.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer in-person case management in NYC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide in-person clinical services in New York City including assessments, interventions, companionship services, and direct coordination with our NYC-area professional network of treatment centers, psychiatrists, and therapists.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas of New York City do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve all five boroughs — Manhattan, Brooklyn, Queens, the Bronx, and Staten Island — as well as Long Island, Westchester, and the greater New York metro area. We also serve clients throughout the Northeast and nationwide.',
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
      name: 'Is Holistic Solutions based in New York?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Holistic Solutions is headquartered in Los Angeles with a strong presence in New York City. We travel to NYC regularly for in-person assessments, interventions, and companionship services, and we maintain an extensive network of treatment providers in the New York metro area.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Holistic Solutions different from other NYC case management companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every case manager is a licensed clinician. Every intervention is led by a master\'s-level licensed clinician — not a certified interventionist. Our founder, Jack Foley, LMFT, has deep clinical expertise in substance use and psychosis, and over a decade of personal recovery experience. This combination of clinical credentials and lived experience is rare in the New York market.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Case Management New York City', item: `${SITE_URL}/case-management-new-york-city` },
  ],
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
    addressLocality: 'New York',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'New York' },
    { '@type': 'Country', name: 'United States' },
  ],
  openingHours: 'Mo-Fr 08:00-18:00',
}

const faqs = [
  { q: 'What case management services are available in New York City?', a: 'Holistic Solutions provides clinical case management in New York City for substance use disorders, psychosis, co-occurring disorders, clinical intervention, treatment placement, recovery coaching, companionship services, and clinical transport. All services are led by licensed clinicians.' },
  { q: 'Do you offer in-person case management in NYC?', a: 'Yes. We provide in-person clinical services in New York City including assessments, interventions, companionship services, and direct coordination with our NYC-area professional network of treatment centers, psychiatrists, and therapists.' },
  { q: 'What areas of New York City do you serve?', a: 'We serve all five boroughs — Manhattan, Brooklyn, Queens, the Bronx, and Staten Island — as well as Long Island, Westchester, and the greater New York metro area. We also serve clients throughout the Northeast and nationwide.' },
  { q: 'How do I start the process?', a: 'Call (702) 494-7641 or submit a contact form. After your initial call, we conduct a full intake assessment to understand your situation and walk you through your options. All inquiries are confidential. We respond within one business day.' },
  { q: 'Is Holistic Solutions based in New York?', a: 'Holistic Solutions is headquartered in Los Angeles with a strong presence in New York City. We travel to NYC regularly for in-person assessments, interventions, and companionship services, and we maintain an extensive network of treatment providers in the New York metro area.' },
  { q: 'What makes Holistic Solutions different from other NYC case management companies?', a: "Every case manager is a licensed clinician. Every intervention is led by a master's-level licensed clinician — not a certified interventionist. Our founder, Jack Foley, LMFT, has deep clinical expertise in substance use and psychosis, and over a decade of personal recovery experience. This combination is rare in the New York market." },
]

export default function CaseManagementNewYorkCity() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      <section className="page-header">
        <p className="section-label">New York City</p>
        <h1>Case Management in New York City — Licensed Clinicians, Nationwide Reach</h1>
        <p className="page-sub">
          In-person assessments, clinical interventions, and coordination with our NYC-area professional network — backed by a team of licensed clinicians.
        </p>
      </section>

      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <p className="section-label">Overview</p>
            <h2>Clinical case management in New York City</h2>
            <p className="service-page-body">
              New York City is one of Holistic Solutions&apos; most active markets outside of our Los Angeles headquarters. We work with individuals and families across all five boroughs and the greater metro area, providing the same level of clinical depth and hands-on coordination that defines our practice.
            </p>
            <p className="service-page-body">
              For NYC-area clients, that means in-person clinical assessments, face-to-face family preparation for interventions, local companionship and transport services, and direct coordination with the treatment centers, psychiatrists, and therapists we have vetted in this market.
            </p>
            <p className="service-page-body">
              New York&apos;s behavioral health landscape is massive and fragmented. The number of treatment programs, providers, and sober living options can be overwhelming — and the quality gap between them is significant. A licensed case manager who knows this market helps families avoid costly missteps and find the right placement the first time.
            </p>

            <p className="service-page-body" style={{ marginTop: '1.5rem' }}>
              Call us. <strong><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></strong>. All inquiries are confidential.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Services in NYC</p>
              <h2>What we offer in New York City</h2>
              <div className="process-steps" style={{ marginTop: '2rem' }}>
                <div className="step">
                  <span className="step-num">01</span>
                  <div className="step-content">
                    <h4>Substance Use Case Management</h4>
                    <p>Coordinated care for alcohol and drug use disorders across every level of care — detox, residential, PHP, IOP, and outpatient — with access to our vetted NYC-area network. <Link href="/substance-use-case-management">Learn more</Link>.</p>
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
                We also provide <Link href="/services/treatment-placement">treatment placement</Link>, <Link href="/services/recovery-coaching">recovery coaching</Link>, <Link href="/services/companionship-support">companionship services</Link>, and <Link href="/services/safe-transport">clinical transport</Link> in the New York City area and nationwide.
              </p>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>&ldquo;New York is one of the most complex behavioral health markets in the country. The families we work with here need someone who has done the work of evaluating programs, building relationships with local providers, and understanding what actually works in this city. That is what we bring.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions</cite>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">The NYC Advantage</p>
              <h2>Why local knowledge matters in New York</h2>
              <p className="service-page-body">
                Case management can be done remotely — and we do it remotely for clients across the country. But in New York City, our clients get something additional: a team that has personally evaluated programs in this market, has standing relationships with local psychiatrists and therapists, and can show up in person when the situation calls for it.
              </p>
              <p className="service-page-body">
                In-person assessments. In-person interventions. In-person companionship during transitions. Local coordination with providers who know us. That is the advantage of working with a case management team that knows New York.
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Beyond NYC</p>
              <h2>We also serve clients nationwide</h2>
              <p className="service-page-body">
                While New York City is one of our primary markets, Holistic Solutions works with clients and families in all 50 states. If you are outside of NYC, we provide remote assessments, nationwide treatment placement, and ongoing case management regardless of where you are located. Our headquarters is in <Link href="/case-management-los-angeles">Los Angeles</Link>.
              </p>
            </div>
          </div>

          <div className="service-page-sidebar">
            <div className="sidebar-box">
              <p className="section-label">NYC Services</p>
              <ul className="sidebar-list">
                <li>In-person clinical assessments</li>
                <li>Local intervention facilitation</li>
                <li>NYC-area treatment placement</li>
                <li>Local companionship and transport</li>
                <li>Coordination with NYC providers</li>
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
