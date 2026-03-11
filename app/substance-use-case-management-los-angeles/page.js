import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'Substance Use Case Management Los Angeles | Holistic Solutions',
  description: 'Substance use case management in Los Angeles. Licensed clinicians coordinating detox, residential, PHP, IOP, and outpatient care across LA. Confidential.',
  keywords: 'substance use case management los angeles, addiction case manager LA, drug and alcohol case management los angeles, substance abuse case manager LA, SUD case management los angeles',
  alternates: { canonical: `${SITE_URL}/substance-use-case-management-los-angeles` },
  openGraph: {
    title: 'Substance Use Case Management Los Angeles | Holistic Solutions',
    description: 'Substance use case management in Los Angeles. Licensed clinicians coordinating detox, residential, PHP, IOP, and outpatient care across LA. Confidential.',
    url: `${SITE_URL}/substance-use-case-management-los-angeles`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a substance use case manager do in Los Angeles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A substance use case manager in Los Angeles coordinates every aspect of care for someone struggling with alcohol or drug use disorders. This includes clinical assessment, treatment placement at vetted LA-area programs, transitions between levels of care (detox, residential, PHP, IOP, outpatient), provider coordination, and ongoing recovery support. At Holistic Solutions, every case manager is a licensed clinician.',
      },
    },
    {
      '@type': 'Question',
      name: 'What treatment programs do you work with in Los Angeles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We maintain an extensively vetted network of treatment programs across Los Angeles County. This includes detox facilities, residential treatment centers, PHP and IOP programs, sober living homes, and outpatient providers. We have personally evaluated these programs and maintain ongoing relationships with their clinical teams.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide in-person substance use case management in LA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Los Angeles is our headquarters, so LA-area clients receive the most comprehensive in-person support — including face-to-face assessments, local companionship during transitions, in-person interventions, and direct coordination with local providers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is substance use case management different from going directly to a treatment center?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A treatment center provides one level of care. A case manager coordinates the full continuum — assessing which level of care is appropriate, placing the client at the right program, managing transitions, and staying involved through the entire recovery process. Without a case manager, families often navigate a fragmented system alone and risk costly misplacements.',
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
    { '@type': 'ListItem', position: 3, name: 'Los Angeles', item: `${SITE_URL}/substance-use-case-management-los-angeles` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://hscasemanagement.com/substance-use-case-management-los-angeles',
  name: 'Substance Use Case Management Los Angeles',
  description: 'Substance use case management in Los Angeles. Licensed clinicians coordinating detox, residential, PHP, IOP, and outpatient care across LA. Confidential.',
  provider: {
    '@type': 'MedicalBusiness',
    '@id': 'https://hscasemanagement.com',
    name: 'Holistic Solutions Case Management',
  },
  areaServed: { '@type': 'City', name: 'Los Angeles' },
  serviceType: 'Substance Use Case Management',
}

const faqs = [
  { q: 'What does a substance use case manager do in Los Angeles?', a: 'A substance use case manager in Los Angeles coordinates every aspect of care for someone struggling with alcohol or drug use disorders. This includes clinical assessment, treatment placement at vetted LA-area programs, transitions between levels of care (detox, residential, PHP, IOP, outpatient), provider coordination, and ongoing recovery support. At Holistic Solutions, every case manager is a licensed clinician.' },
  { q: 'What treatment programs do you work with in Los Angeles?', a: 'We maintain an extensively vetted network of treatment programs across Los Angeles County. This includes detox facilities, residential treatment centers, PHP and IOP programs, sober living homes, and outpatient providers. We have personally evaluated these programs and maintain ongoing relationships with their clinical teams.' },
  { q: 'Do you provide in-person substance use case management in LA?', a: 'Yes. Los Angeles is our headquarters, so LA-area clients receive the most comprehensive in-person support — including face-to-face assessments, local companionship during transitions, in-person interventions, and direct coordination with local providers.' },
  { q: 'How is substance use case management different from going directly to a treatment center?', a: 'A treatment center provides one level of care. A case manager coordinates the full continuum — assessing which level of care is appropriate, placing the client at the right program, managing transitions, and staying involved through the entire recovery process. Without a case manager, families often navigate a fragmented system alone and risk costly misplacements.' },
  { q: 'Is substance use case management covered by insurance?', a: 'Holistic Solutions operates on a private-pay basis. This allows us to remain fully independent — we are not beholden to any treatment center or insurance company. Our recommendations are based solely on what is clinically appropriate for your situation.' },
]

export default function SubstanceUseCaseManagementLosAngeles() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="page-header">
        <p className="section-label">Los Angeles · Substance Use</p>
        <h1>Substance Use Case Management in Los Angeles</h1>
        <p className="page-sub">
          Licensed clinicians coordinating the full continuum of substance use care across Los Angeles — from assessment through long-term recovery.
        </p>
      </section>

      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <p className="section-label">Overview</p>
            <h2>Navigating substance use treatment in LA</h2>
            <p className="service-page-body">
              Los Angeles has one of the largest and most complex treatment markets in the country. Hundreds of detox facilities, residential programs, sober living homes, and outpatient providers — with a wide gap in quality between them. For families trying to find the right placement, the landscape can be overwhelming and the stakes are high.
            </p>
            <p className="service-page-body">
              That is where a licensed substance use case manager makes the difference. We assess the clinical situation, identify the appropriate level of care, and place clients at programs we have personally vetted. We coordinate transitions between levels of care, manage provider communication, and stay involved through the entire recovery process.
            </p>
            <p className="service-page-body">
              As our headquarters, Los Angeles is where Holistic Solutions has the deepest professional network. We know the programs, the providers, and the system here better than anywhere else. For LA-area clients, that translates into faster, more informed placements and hands-on local support.
            </p>

            <p className="service-page-body" style={{ marginTop: '1.5rem' }}>
              Call us. <strong><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></strong>. All inquiries are confidential.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">What We Coordinate</p>
              <h2>Levels of care we manage in LA</h2>
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
                    <p>Placement at vetted residential programs in Los Angeles and nationwide. We match clinical needs — not marketing materials — to the right program and monitor progress throughout the stay.</p>
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
                    <p>Placement in quality sober living environments and coordination of outpatient support — therapists, psychiatrists, recovery coaching, and community resources in the LA area.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>&ldquo;The number of treatment programs in Los Angeles is enormous. The quality gap between them is wide. A case manager who has done the work of evaluating these programs saves families from costly mistakes and gets their loved one into the right place the first time.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions · Los Angeles, CA</cite>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Related Services</p>
              <h2>Additional support in Los Angeles</h2>
              <p className="service-page-body">
                Substance use rarely exists in isolation. We also provide <Link href="/psychosis-case-management">psychosis case management</Link> and <Link href="/co-occurring-disorders-case-management">co-occurring disorders case management</Link> for clients navigating both substance use and mental health conditions. When resistance to treatment is the barrier, our <Link href="/clinical-intervention-services">clinical intervention services</Link> can help.
              </p>
              <p className="service-page-body">
                For a full overview of our Los Angeles services, visit our <Link href="/case-management-los-angeles">LA case management hub</Link>. For national information, see <Link href="/substance-use-case-management">substance use case management</Link>.
              </p>
            </div>
          </div>

          <div className="service-page-sidebar">
            <div className="sidebar-box">
              <p className="section-label">What We Handle</p>
              <ul className="sidebar-list">
                <li>Clinical assessment and level-of-care determination</li>
                <li>Treatment placement at vetted LA programs</li>
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
