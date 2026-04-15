import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'Psychosis Case Management Las Vegas | Holistic Solutions',
  description: 'Psychosis case management in Las Vegas and Nevada. Licensed clinicians specializing in first-episode psychosis, schizophrenia, and substance-induced psychosis. Confidential.',
  keywords: 'psychosis case management las vegas, mental health case management nevada, first episode psychosis las vegas, schizophrenia case management nevada, psychosis treatment las vegas',
  alternates: { canonical: `${SITE_URL}/psychosis-case-management-las-vegas` },
  openGraph: {
    title: 'Psychosis Case Management Las Vegas | Holistic Solutions',
    description: 'Psychosis case management in Las Vegas and Nevada. Licensed clinicians specializing in first-episode psychosis, schizophrenia, and substance-induced psychosis.',
    url: `${SITE_URL}/psychosis-case-management-las-vegas`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does psychosis case management involve in Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Psychosis case management in Las Vegas involves a clinical assessment to understand the nature and severity of the psychotic presentation, coordination with psychiatrists and specialized programs, treatment placement at programs equipped to handle psychosis (locally or nationally), family education, crisis planning, and ongoing care coordination. At Holistic Solutions, all case managers are licensed clinicians with specific expertise in psychotic disorders.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there psychosis treatment programs in Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Psychosis-specific clinical resources in Las Vegas are limited. The city has psychiatric emergency services and some outpatient psychiatric providers, but programs with deep specialization in first-episode psychosis or complex psychotic presentations are scarce. For Las Vegas clients with serious psychotic disorders, the right program often requires national placement. A case manager with national reach can identify and coordinate that care.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the connection between Las Vegas and cannabis-induced psychosis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nevada legalized recreational cannabis in 2017. Las Vegas has a high concentration of dispensaries and a culture where cannabis use is common and normalized. High-potency cannabis products — concentrates, dabs, high-THC flower — are consistently linked to psychosis risk. In a city where these products are widely accessible, clinicians are seeing more presentations of cannabis-induced psychosis and cannabis-accelerated psychotic disorders. This requires careful clinical assessment to distinguish from primary psychotic disorders.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if a family member in Las Vegas is showing signs of psychosis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If someone is in acute crisis — unable to care for themselves, at risk of harm, or experiencing severe disorganization — call 988 (Suicide and Crisis Lifeline) or 911, or bring them to the nearest emergency department. For non-acute but urgent presentations, a clinical assessment by a licensed clinician is the right first step. Early intervention in psychosis significantly improves long-term outcomes. Do not wait for symptoms to worsen.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I start psychosis case management in Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call (702) 494-7641 or submit a contact form. We begin with a clinical intake to understand the full picture — onset, history, substance use involvement, prior treatment, family context — before making any recommendations. All inquiries are confidential. We respond within one business day.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Psychosis Case Management', item: `${SITE_URL}/psychosis-case-management` },
    { '@type': 'ListItem', position: 3, name: 'Las Vegas', item: `${SITE_URL}/psychosis-case-management-las-vegas` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/psychosis-case-management-las-vegas`,
  name: 'Psychosis Case Management Las Vegas',
  description: 'Psychosis case management in Las Vegas and Nevada. Licensed clinicians specializing in first-episode psychosis, schizophrenia, and substance-induced psychosis.',
  provider: {
    '@type': 'MedicalBusiness',
    '@id': SITE_URL,
    name: 'Holistic Solutions Case Management',
  },
  areaServed: [{ '@type': 'City', name: 'Las Vegas' }, { '@type': 'State', name: 'Nevada' }],
  serviceType: 'Psychosis Case Management',
}

const faqs = [
  { q: 'What does psychosis case management involve in Las Vegas?', a: 'Psychosis case management in Las Vegas involves a clinical assessment to understand the nature and severity of the psychotic presentation, coordination with psychiatrists and specialized programs, treatment placement at programs equipped to handle psychosis locally or nationally, family education, crisis planning, and ongoing care coordination. All case managers at Holistic Solutions are licensed clinicians with specific expertise in psychotic disorders.' },
  { q: 'Are there psychosis treatment programs in Las Vegas?', a: 'Psychosis-specific clinical resources in Las Vegas are limited. The city has psychiatric emergency services and some outpatient psychiatric providers, but programs with deep specialization in first-episode psychosis or complex psychotic presentations are scarce. For serious psychotic disorders, the right program often requires national placement. A case manager with national reach can identify and coordinate that care.' },
  { q: 'What is the connection between Las Vegas and cannabis-induced psychosis?', a: 'Nevada legalized recreational cannabis in 2017. Las Vegas has a high concentration of dispensaries and a culture where use is normalized. High-potency cannabis products are consistently linked to psychosis risk. In a city where these products are widely accessible, clinicians are seeing more presentations of cannabis-induced psychosis and cannabis-accelerated psychotic disorders. This requires careful assessment to distinguish from primary psychotic disorders.' },
  { q: 'What should I do if a family member in Las Vegas is showing signs of psychosis?', a: 'If someone is in acute crisis — unable to care for themselves, at risk of harm, or experiencing severe disorganization — call 988 (Suicide and Crisis Lifeline) or 911, or bring them to the nearest emergency department. For non-acute but urgent presentations, a clinical assessment by a licensed clinician is the right first step. Early intervention in psychosis significantly improves long-term outcomes.' },
  { q: 'How do I start psychosis case management in Las Vegas?', a: 'Call (702) 494-7641 or submit a contact form. We begin with a clinical intake to understand the full picture — onset, history, substance use involvement, prior treatment, family context — before making any recommendations. All inquiries are confidential. We respond within one business day.' },
]

export default function PsychosisCaseManagementLasVegas() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="page-header">
        <p className="section-label">Las Vegas · Psychosis</p>
        <h1>Psychosis Case Management in Las Vegas</h1>
        <p className="page-sub">
          Specialized clinical coordination for psychotic disorders in Nevada — where resources are limited and the clinical complexity is high. Local knowledge. National reach.
        </p>
      </section>

      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <p className="section-label">Overview</p>
            <h2>Psychosis in Las Vegas: a clinically underserved problem</h2>
            <p className="service-page-body">
              Psychosis-specific clinical resources in Las Vegas are limited relative to need. The city has psychiatric emergency services and outpatient psychiatry, but programs with genuine depth in first-episode psychosis, treatment-resistant psychotic disorders, or psychosis alongside substance use are scarce. Families navigating this often hit dead ends that would not exist in larger clinical markets.
            </p>
            <p className="service-page-body">
              There is also a Las Vegas-specific clinical dynamic that matters: Nevada legalized recreational cannabis in 2017, and high-potency cannabis products are widely available and culturally normalized. The link between heavy cannabis use and psychosis is well established in the research literature. Clinicians serving Las Vegas are seeing more presentations of cannabis-induced psychosis and cannabis-accelerated psychotic disorders — presentations that require careful clinical differentiation from primary psychotic disorders.
            </p>
            <p className="service-page-body">
              Holistic Solutions brings specialized expertise in psychosis to Las Vegas clients. Our founder, Jack Foley, LMFT, grew up here and has worked with Las Vegas families navigating these presentations for years. We assess the clinical picture, identify programs equipped to treat it, and coordinate care — locally when appropriate, nationally when the clinical complexity requires it.
            </p>

            <p className="service-page-body" style={{ marginTop: '1.5rem' }}>
              If you are concerned about a family member, call us. <strong><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></strong>. All inquiries are confidential. If someone is in immediate crisis, call 988 or go to the nearest emergency department.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">What We Coordinate</p>
              <h2>Clinical services for psychosis in Las Vegas</h2>
              <div className="process-steps" style={{ marginTop: '2rem' }}>
                <div className="step">
                  <span className="step-num">01</span>
                  <div className="step-content">
                    <h4>Clinical Assessment</h4>
                    <p>A thorough evaluation of the psychotic presentation — onset, history, substance involvement, family psychiatric history, prior treatment — before any placement recommendation is made. This is how the right program gets identified.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">02</span>
                  <div className="step-content">
                    <h4>Psychiatric Coordination</h4>
                    <p>Coordination with psychiatrists and psychiatric programs equipped to manage psychotic disorders with the clinical depth they require. Medication management, stabilization planning, and long-term psychiatric follow-up.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <div className="step-content">
                    <h4>Specialized Program Placement</h4>
                    <p>Placement at programs with genuine expertise in psychotic disorders — locally in Nevada when appropriate, nationally when the clinical presentation requires a higher level of specialization. We know which programs are equipped and which are not.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">04</span>
                  <div className="step-content">
                    <h4>Family Support &amp; Education</h4>
                    <p>Psychosis is frequently misunderstood by families. We provide clinical education on what is happening, what to expect, how to respond, and what role the family plays in long-term stability — including guidance on anosognosia when a loved one lacks insight into their own illness.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>&ldquo;First-episode psychosis is one of the most treatable conditions in psychiatry when caught early and placed in the right program. The window matters. And in Las Vegas, knowing where that right program actually is — locally or nationally — is the difference.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions</cite>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Related Services</p>
              <h2>Additional support in Las Vegas</h2>
              <p className="service-page-body">
                Psychosis frequently co-occurs with substance use — a combination that requires specialized integrated care. We also provide <Link href="/substance-use-case-management-las-vegas">substance use case management in Las Vegas</Link> and <Link href="/dual-diagnosis-case-management-las-vegas">dual diagnosis case management in Las Vegas</Link> for clients with both presentations.
              </p>
              <p className="service-page-body">
                For a full overview of our Las Vegas services, see our <Link href="/case-management-las-vegas">Las Vegas case management hub</Link>. For national psychosis services, see <Link href="/psychosis-case-management">psychosis case management</Link>.
              </p>
            </div>
          </div>

          <div className="service-page-sidebar">
            <div className="sidebar-box">
              <p className="section-label">Presentations We Work With</p>
              <ul className="sidebar-list">
                <li>First-episode psychosis</li>
                <li>Schizophrenia and schizoaffective disorder</li>
                <li>Cannabis-induced psychosis</li>
                <li>Substance-induced psychotic disorder</li>
                <li>Bipolar disorder with psychotic features</li>
                <li>Psychosis with co-occurring substance use</li>
                <li>Treatment-resistant psychosis</li>
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
