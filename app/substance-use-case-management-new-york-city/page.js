import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'Substance Use Case Management NYC | Holistic Solutions',
  description: 'Substance use case management in New York City. Licensed clinicians coordinating detox, residential, PHP, IOP, and outpatient care across NYC. Confidential.',
  keywords: 'substance use case management new york city, addiction case manager NYC, drug and alcohol case management NYC, substance abuse case manager new york, SUD case management NYC',
  alternates: { canonical: `${SITE_URL}/substance-use-case-management-new-york-city` },
  openGraph: {
    title: 'Substance Use Case Management NYC | Holistic Solutions',
    description: 'Substance use case management in New York City. Licensed clinicians coordinating detox, residential, PHP, IOP, and outpatient care across NYC. Confidential.',
    url: `${SITE_URL}/substance-use-case-management-new-york-city`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a substance use case manager do in New York City?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A substance use case manager in New York City coordinates every aspect of care for someone struggling with alcohol or drug use disorders. This includes clinical assessment, treatment placement at vetted NYC-area programs, transitions between levels of care (detox, residential, PHP, IOP, outpatient), provider coordination, and ongoing recovery support. At Holistic Solutions, every case manager is a licensed clinician.',
      },
    },
    {
      '@type': 'Question',
      name: 'What treatment programs do you work with in New York City?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We maintain a vetted network of treatment programs across the New York metro area. This includes detox facilities, residential treatment centers, PHP and IOP programs, sober living homes, and outpatient providers. We have evaluated these programs and maintain ongoing relationships with their clinical teams.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide in-person substance use case management in NYC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We travel to New York City regularly for in-person assessments, interventions, companionship services, and direct coordination with local providers. NYC is one of our most active markets outside of our Los Angeles headquarters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you place someone in treatment outside of New York?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. While we coordinate with NYC-area programs, we also place clients at treatment centers nationwide. Sometimes the best clinical match is outside of New York. We evaluate programs across the country and recommend placement based on clinical fit, not geography.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is substance use case management covered by insurance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Holistic Solutions operates on a private-pay basis. This allows us to remain fully independent — we are not beholden to any treatment center or insurance company. Our recommendations are based solely on what is clinically appropriate for your situation.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Substance Use Case Management', item: `${SITE_URL}/substance-use-case-management` },
    { '@type': 'ListItem', position: 3, name: 'New York City', item: `${SITE_URL}/substance-use-case-management-new-york-city` },
  ],
}

const faqs = [
  { q: 'What does a substance use case manager do in New York City?', a: 'A substance use case manager in New York City coordinates every aspect of care for someone struggling with alcohol or drug use disorders. This includes clinical assessment, treatment placement at vetted NYC-area programs, transitions between levels of care (detox, residential, PHP, IOP, outpatient), provider coordination, and ongoing recovery support. At Holistic Solutions, every case manager is a licensed clinician.' },
  { q: 'What treatment programs do you work with in New York City?', a: 'We maintain a vetted network of treatment programs across the New York metro area. This includes detox facilities, residential treatment centers, PHP and IOP programs, sober living homes, and outpatient providers. We have evaluated these programs and maintain ongoing relationships with their clinical teams.' },
  { q: 'Do you provide in-person substance use case management in NYC?', a: 'Yes. We travel to New York City regularly for in-person assessments, interventions, companionship services, and direct coordination with local providers. NYC is one of our most active markets outside of our Los Angeles headquarters.' },
  { q: 'Can you place someone in treatment outside of New York?', a: 'Yes. While we coordinate with NYC-area programs, we also place clients at treatment centers nationwide. Sometimes the best clinical match is outside of New York. We evaluate programs across the country and recommend placement based on clinical fit, not geography.' },
  { q: 'Is substance use case management covered by insurance?', a: 'Holistic Solutions operates on a private-pay basis. This allows us to remain fully independent — we are not beholden to any treatment center or insurance company. Our recommendations are based solely on what is clinically appropriate for your situation.' },
]

export default function SubstanceUseCaseManagementNewYorkCity() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="page-header">
        <p className="section-label">New York City · Substance Use</p>
        <h1>Substance Use Case Management in New York City</h1>
        <p className="page-sub">
          Licensed clinicians coordinating the full continuum of substance use care across New York City — from assessment through long-term recovery.
        </p>
      </section>

      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <p className="section-label">Overview</p>
            <h2>Navigating substance use treatment in NYC</h2>
            <p className="service-page-body">
              New York City&apos;s treatment landscape is vast and difficult to navigate. Hundreds of programs across five boroughs, Long Island, Westchester, and the tristate area — with enormous variation in quality, approach, and clinical capability. For families in crisis, choosing the wrong program can mean lost time, lost money, and lost trust.
            </p>
            <p className="service-page-body">
              A licensed substance use case manager cuts through that complexity. We assess the clinical situation, determine the appropriate level of care, and place clients at programs we have personally vetted — in New York and nationwide. We manage every transition, coordinate with every provider, and stay involved through the entire recovery process.
            </p>
            <p className="service-page-body">
              New York City is one of Holistic Solutions&apos; most active markets. We travel to NYC regularly for in-person assessments, interventions, and companionship services, and we maintain an extensive network of treatment providers across the metro area.
            </p>

            <p className="service-page-body" style={{ marginTop: '1.5rem' }}>
              Call us. <strong><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></strong>. All inquiries are confidential.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">What We Coordinate</p>
              <h2>Levels of care we manage</h2>
              <div className="process-steps" style={{ marginTop: '2rem' }}>
                <div className="step">
                  <span className="step-num">01</span>
                  <div className="step-content">
                    <h4>Medical Detox</h4>
                    <p>Medically supervised withdrawal management at facilities we trust. We coordinate admission, communicate with medical staff, and plan the next step before detox is complete.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">02</span>
                  <div className="step-content">
                    <h4>Residential Treatment</h4>
                    <p>Placement at vetted residential programs in the New York area and nationwide. We match clinical needs to the right program and monitor progress throughout the stay.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <div className="step-content">
                    <h4>PHP / IOP / Outpatient</h4>
                    <p>Step-down coordination as clients transition to less intensive levels of care. We ensure continuity — the same clinical thread running from detox through outpatient and beyond.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">04</span>
                  <div className="step-content">
                    <h4>Sober Living &amp; Ongoing Recovery</h4>
                    <p>Placement in quality sober living environments and coordination of outpatient support — therapists, psychiatrists, recovery coaching, and community resources in the NYC area.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>&ldquo;New York has an enormous number of treatment options. That sounds like a good thing until you are the family trying to figure out which one is right. A case manager who has done the work of evaluating these programs takes that burden off your shoulders.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions</cite>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Related Services</p>
              <h2>Additional support in New York City</h2>
              <p className="service-page-body">
                Substance use rarely exists in isolation. We also provide <Link href="/psychosis-case-management">psychosis case management</Link> and <Link href="/co-occurring-disorders-case-management">co-occurring disorders case management</Link> for clients navigating both substance use and mental health conditions. When resistance to treatment is the barrier, our <Link href="/clinical-intervention-services">clinical intervention services</Link> can help.
              </p>
              <p className="service-page-body">
                For a full overview of our New York City services, visit our <Link href="/case-management-new-york-city">NYC case management hub</Link>. For national information, see <Link href="/substance-use-case-management">substance use case management</Link>.
              </p>
            </div>
          </div>

          <div className="service-page-sidebar">
            <div className="sidebar-box">
              <p className="section-label">What We Handle</p>
              <ul className="sidebar-list">
                <li>Clinical assessment and level-of-care determination</li>
                <li>Treatment placement at vetted NYC programs</li>
                <li>Detox, residential, PHP, IOP coordination</li>
                <li>Sober living placement</li>
                <li>Provider communication and care transitions</li>
                <li>In-person companionship and transport</li>
                <li>Family support and education</li>
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
