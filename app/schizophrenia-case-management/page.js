import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import AuthorByline from '@/components/AuthorByline'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'Schizophrenia Case Management | Holistic Solutions',
  description: 'Case management for schizophrenia and schizoaffective disorder. Licensed clinicians coordinating psychiatric care, treatment, and recovery. Nationwide.',
  keywords: 'schizophrenia case management, schizophrenia case manager, schizoaffective disorder case management, schizophrenia treatment coordination, psychotic disorder case manager',
  authors: [{ name: 'Jack Foley, LMFT', url: `${SITE_URL}/about` }],
  alternates: { canonical: `${SITE_URL}/schizophrenia-case-management` },
  openGraph: {
    title: 'Schizophrenia Case Management | Holistic Solutions',
    description: 'Case management for schizophrenia and schizoaffective disorder. Licensed clinicians coordinating psychiatric care, treatment, and recovery. Nationwide.',
    url: `${SITE_URL}/schizophrenia-case-management`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a schizophrenia case manager do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A schizophrenia case manager coordinates the full spectrum of care — psychiatric stabilization, medication management oversight, treatment placement, provider coordination, housing support, and long-term recovery planning. At Holistic Solutions, this work is led by licensed clinicians with deep expertise in psychotic disorders.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help if my loved one has been diagnosed with schizoaffective disorder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Schizoaffective disorder combines features of schizophrenia with mood disorder symptoms. We provide case management for the full spectrum of psychotic disorders, including schizoaffective disorder, with coordinated psychiatric and therapeutic support.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my loved one with schizophrenia is refusing treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Treatment refusal is common with schizophrenia, often related to anosognosia — lack of awareness of the illness. Our clinical intervention services are designed for exactly this situation, led by clinicians who understand the psychiatric complexity of intervening with someone experiencing psychosis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you help with medication management for schizophrenia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We do not prescribe medication, but we coordinate medication management as part of the overall care plan. This includes connecting clients with psychiatrists experienced in treating schizophrenia, monitoring medication adherence, and communicating with prescribing providers about treatment response.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my loved one is in psychiatric crisis right now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If someone is in immediate danger, call 911. For a mental health crisis, contact the 988 Suicide and Crisis Lifeline by calling or texting 988. If the situation is serious but not immediately life-threatening, call us to discuss clinical intervention and stabilization options.',
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
    { '@type': 'ListItem', position: 3, name: 'Schizophrenia', item: `${SITE_URL}/schizophrenia-case-management` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://hscasemanagement.com/schizophrenia-case-management',
  name: 'Schizophrenia Case Management',
  description: 'Case management for schizophrenia and schizoaffective disorder. Licensed clinicians coordinating psychiatric care, treatment, and recovery. Nationwide.',
  provider: {
    '@type': 'MedicalBusiness',
    '@id': 'https://hscasemanagement.com',
    name: 'Holistic Solutions Case Management',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'Schizophrenia Case Management',
}

const faqs = [
  { q: 'What does a schizophrenia case manager do?', a: 'A schizophrenia case manager coordinates the full spectrum of care — psychiatric stabilization, medication management oversight, treatment placement, provider coordination, housing support, and long-term recovery planning. At Holistic Solutions, this work is led by licensed clinicians with deep expertise in psychotic disorders.' },
  { q: 'Can you help if my loved one has been diagnosed with schizoaffective disorder?', a: 'Yes. Schizoaffective disorder combines features of schizophrenia with mood disorder symptoms. We provide case management for the full spectrum of psychotic disorders, including schizoaffective disorder, with coordinated psychiatric and therapeutic support.' },
  { q: 'What if my loved one with schizophrenia is refusing treatment?', a: 'Treatment refusal is common with schizophrenia, often related to anosognosia — lack of awareness of the illness. Our clinical intervention services are designed for exactly this situation, led by clinicians who understand the psychiatric complexity of intervening with someone experiencing psychosis.' },
  { q: 'Do you help with medication management for schizophrenia?', a: 'We do not prescribe medication, but we coordinate medication management as part of the overall care plan. This includes connecting clients with psychiatrists experienced in treating schizophrenia, monitoring medication adherence, and communicating with prescribing providers about treatment response.' },
  { q: 'What if my loved one is in psychiatric crisis right now?', a: 'If someone is in immediate danger, call 911. For a mental health crisis, contact the 988 Suicide and Crisis Lifeline by calling or texting 988. If the situation is serious but not immediately life-threatening, call us to discuss clinical intervention and stabilization options.' },
]

export default function SchizophreniaCaseManagement() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="page-header">
        <p className="section-label">Psychosis · Schizophrenia</p>
        <h1>Schizophrenia Case Management</h1>
        <p className="page-sub">
          Licensed clinicians coordinating psychiatric care, treatment placement, and long-term recovery for schizophrenia and schizoaffective disorder. Nationwide.
        </p>
      </section>

      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <AuthorByline />

            <p className="section-label">Overview</p>
            <h2>Clinical case management for schizophrenia</h2>
            <p className="service-page-body">
              Schizophrenia is one of the most complex and misunderstood psychiatric conditions. It affects every dimension of a person&apos;s life — cognition, perception, relationships, daily functioning — and it demands a level of care coordination that most families cannot manage alone.
            </p>
            <p className="service-page-body">
              A licensed case manager who specializes in psychotic disorders brings clinical expertise to every decision point: psychiatric stabilization during acute episodes, placement at programs equipped for schizophrenia, medication management coordination, and the long-term planning that this condition requires.
            </p>
            <p className="service-page-body">
              At Holistic Solutions, psychosis is our deepest area of clinical expertise. Our founder, Jack Foley, LMFT, has built this practice around the most complex psychiatric presentations. We understand anosognosia — the lack of illness awareness that makes schizophrenia uniquely challenging. We understand why treatment refusal is the norm, not the exception. And we know how to navigate these realities clinically.
            </p>

            <p className="service-page-body" style={{ marginTop: '1.5rem' }}>
              Call us. <strong><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></strong>. All inquiries are confidential. If someone is in immediate crisis, call 911 or contact the <strong>988 Suicide and Crisis Lifeline</strong>.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">What We Manage</p>
              <h2>Coordinating care for schizophrenia</h2>
              <div className="process-steps" style={{ marginTop: '2rem' }}>
                <div className="step">
                  <span className="step-num">01</span>
                  <div className="step-content">
                    <h4>Clinical Assessment</h4>
                    <p>A thorough evaluation of psychiatric history, symptom presentation, medication status, prior treatment, substance use, and family dynamics. This assessment shapes every clinical decision that follows.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">02</span>
                  <div className="step-content">
                    <h4>Psychiatric Stabilization</h4>
                    <p>When acute symptoms require immediate attention — whether through crisis intervention, psychiatric hospitalization, or stabilization programs — we coordinate the process and manage logistics so the family can focus on their loved one.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <div className="step-content">
                    <h4>Treatment Placement</h4>
                    <p>Not every treatment program is equipped for schizophrenia. We place clients at facilities with the psychiatric staff, medication management capability, and clinical expertise this population requires — locally or nationwide.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">04</span>
                  <div className="step-content">
                    <h4>Long-Term Recovery Coordination</h4>
                    <p>Schizophrenia is a long-term condition that requires sustained support. We coordinate ongoing psychiatric care, medication management, outpatient therapy, housing, and community integration — staying involved as long as the family needs us.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>&ldquo;Schizophrenia is not a condition that resolves after one treatment episode. It requires sustained, coordinated care from someone who understands the illness. That is what we provide — not a one-time placement, but ongoing clinical case management.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions</cite>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Anosognosia &amp; Treatment Refusal</p>
              <h2>When your loved one does not believe they are ill</h2>
              <p className="service-page-body">
                One of the most painful aspects of schizophrenia is anosognosia — a neurological condition where the person genuinely cannot recognize that they are ill. This is not denial. It is a symptom of the disease itself, and it is present in a significant percentage of people with schizophrenia.
              </p>
              <p className="service-page-body">
                Anosognosia is why so many people with schizophrenia refuse treatment. Our <Link href="/clinical-intervention-services">clinical intervention services</Link> are specifically designed for situations involving psychiatric complexity — led by clinicians who understand the difference between motivational resistance and neurological lack of insight.
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Related Services</p>
              <h2>Connected support</h2>
              <p className="service-page-body">
                For broader psychosis case management including first-episode psychosis and substance-induced psychosis, see our <Link href="/psychosis-case-management">psychosis case management</Link> page. When substance use is also present, our <Link href="/co-occurring-disorders-case-management">co-occurring disorders case management</Link> ensures integrated treatment.
              </p>
              <p className="service-page-body">
                We provide local support in <Link href="/case-management-los-angeles">Los Angeles</Link> and <Link href="/case-management-new-york-city">New York City</Link>, and serve clients nationwide.
              </p>
            </div>
          </div>

          <div className="service-page-sidebar">
            <div className="sidebar-box">
              <p className="section-label">What We Coordinate</p>
              <ul className="sidebar-list">
                <li>Schizophrenia (all subtypes)</li>
                <li>Schizoaffective disorder</li>
                <li>Psychiatric stabilization</li>
                <li>Medication management oversight</li>
                <li>Treatment placement</li>
                <li>Crisis intervention for psychosis</li>
                <li>Long-term recovery planning</li>
                <li>Family education and support</li>
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
