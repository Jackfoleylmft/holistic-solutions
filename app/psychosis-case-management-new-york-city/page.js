import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import AuthorByline from '@/components/AuthorByline'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'Psychosis Case Management NYC | Holistic Solutions',
  description: 'Psychosis case management in New York City. Licensed clinicians specializing in psychotic disorders, first-episode psychosis, and substance-induced psychosis.',
  keywords: 'psychosis case management new york city, psychosis case manager NYC, first episode psychosis new york, schizophrenia case management NYC, substance induced psychosis new york city',
  authors: [{ name: 'Jack Foley, LMFT', url: `${SITE_URL}/about` }],
  alternates: { canonical: `${SITE_URL}/psychosis-case-management-new-york-city` },
  openGraph: {
    title: 'Psychosis Case Management NYC | Holistic Solutions',
    description: 'Psychosis case management in New York City. Licensed clinicians specializing in psychotic disorders, first-episode psychosis, and substance-induced psychosis.',
    url: `${SITE_URL}/psychosis-case-management-new-york-city`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a psychosis case manager do in New York City?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A psychosis case manager in New York City coordinates psychiatric stabilization, treatment placement, medication management oversight, provider coordination, and long-term recovery planning for individuals experiencing psychotic disorders, first-episode psychosis, or substance-induced psychosis. At Holistic Solutions, this work is led by licensed clinicians with deep expertise in psychosis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with first-episode psychosis in New York City?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. First-episode psychosis requires a specialized response — early intervention, proper psychiatric evaluation, and a coordinated care plan. We work closely with families navigating a first episode in the NYC area, providing clinical assessment, treatment placement, and ongoing case management.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help with substance-induced psychosis in NYC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Substance-induced psychosis sits at the intersection of our two deepest areas of expertise — substance use and psychosis. We provide integrated case management that addresses both the substance use and the psychiatric symptoms, coordinating with providers who understand this complex presentation.',
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
    {
      '@type': 'Question',
      name: 'Do you provide in-person psychosis case management in NYC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We travel to New York City for in-person assessments, clinical interventions, and companionship services. Psychosis cases often require hands-on coordination, and we are available to be on the ground in NYC when the situation calls for it.',
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
    { '@type': 'ListItem', position: 3, name: 'New York City', item: `${SITE_URL}/psychosis-case-management-new-york-city` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://hscasemanagement.com/psychosis-case-management-new-york-city',
  name: 'Psychosis Case Management New York City',
  description: 'Psychosis case management in New York City. Licensed clinicians specializing in psychotic disorders, first-episode psychosis, and substance-induced psychosis.',
  provider: {
    '@type': 'MedicalBusiness',
    '@id': 'https://hscasemanagement.com',
    name: 'Holistic Solutions Case Management',
  },
  areaServed: { '@type': 'City', name: 'New York City' },
  serviceType: 'Psychosis Case Management',
}

const faqs = [
  { q: 'What does a psychosis case manager do in New York City?', a: 'A psychosis case manager in New York City coordinates psychiatric stabilization, treatment placement, medication management oversight, provider coordination, and long-term recovery planning for individuals experiencing psychotic disorders, first-episode psychosis, or substance-induced psychosis. At Holistic Solutions, this work is led by licensed clinicians with deep expertise in psychosis.' },
  { q: 'Do you work with first-episode psychosis in New York City?', a: 'Yes. First-episode psychosis requires a specialized response — early intervention, proper psychiatric evaluation, and a coordinated care plan. We work closely with families navigating a first episode in the NYC area, providing clinical assessment, treatment placement, and ongoing case management.' },
  { q: 'Can you help with substance-induced psychosis in NYC?', a: 'Yes. Substance-induced psychosis sits at the intersection of our two deepest areas of expertise — substance use and psychosis. We provide integrated case management that addresses both the substance use and the psychiatric symptoms, coordinating with providers who understand this complex presentation.' },
  { q: 'What if my loved one is in psychiatric crisis right now?', a: 'If someone is in immediate danger, call 911. For a mental health crisis, contact the 988 Suicide and Crisis Lifeline by calling or texting 988. If the situation is serious but not immediately life-threatening, call us to discuss clinical intervention and stabilization options.' },
  { q: 'Do you provide in-person psychosis case management in NYC?', a: 'Yes. We travel to New York City for in-person assessments, clinical interventions, and companionship services. Psychosis cases often require hands-on coordination, and we are available to be on the ground in NYC when the situation calls for it.' },
]

export default function PsychosisCaseManagementNewYorkCity() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="page-header">
        <p className="section-label">New York City · Psychosis</p>
        <h1>Psychosis Case Management in New York City</h1>
        <p className="page-sub">
          Licensed clinicians with deep expertise in psychotic disorders, first-episode psychosis, and substance-induced psychosis — serving NYC families.
        </p>
      </section>

      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <AuthorByline />

            <p className="section-label">Overview</p>
            <h2>Specialized psychosis support in New York City</h2>
            <p className="service-page-body">
              When a family member is experiencing psychosis, finding the right help in New York City&apos;s massive healthcare system can feel impossible. Emergency rooms, psychiatric hospitals, outpatient clinics — the options are overwhelming, and most are not designed for the kind of coordinated, long-term care that psychosis demands.
            </p>
            <p className="service-page-body">
              Holistic Solutions brings deep clinical expertise in psychosis to the New York market. Our founder, Jack Foley, LMFT, has built his practice around the most complex psychiatric presentations — first-episode psychosis, chronic psychotic disorders, and substance-induced psychosis. This is not a general case management service. It is specialized clinical coordination for a population that most providers are not equipped to serve.
            </p>
            <p className="service-page-body">
              We travel to New York City for in-person assessments, clinical interventions, and hands-on coordination with local providers. We maintain a vetted network of psychiatric programs, psychiatrists, and therapists across the NYC metro area who specialize in treating psychotic disorders.
            </p>

            <p className="service-page-body" style={{ marginTop: '1.5rem' }}>
              Call us. <strong><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></strong>. All inquiries are confidential. If someone is in immediate crisis, call 911 or contact the <strong>988 Suicide and Crisis Lifeline</strong>.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">What We Manage</p>
              <h2>Psychosis case management in NYC</h2>
              <div className="process-steps" style={{ marginTop: '2rem' }}>
                <div className="step">
                  <span className="step-num">01</span>
                  <div className="step-content">
                    <h4>Clinical Assessment</h4>
                    <p>In-person or remote clinical assessment to understand the full picture — psychiatric symptoms, substance use history, prior treatment, medication status, and family dynamics. This assessment drives every decision that follows.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">02</span>
                  <div className="step-content">
                    <h4>Psychiatric Stabilization</h4>
                    <p>Coordination of acute psychiatric care when needed — crisis intervention, psychiatric hospitalization, or stabilization at programs equipped for psychotic presentations in the NYC area and nationwide.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <div className="step-content">
                    <h4>Treatment Placement</h4>
                    <p>Placement at programs that are genuinely equipped to treat psychosis. We know which facilities in New York and across the country have the psychiatric expertise for this population — and which do not.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">04</span>
                  <div className="step-content">
                    <h4>Long-Term Recovery Coordination</h4>
                    <p>Ongoing case management through treatment and beyond — medication management oversight, outpatient coordination, psychiatrist and therapist referrals, and support for the family throughout the process.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>&ldquo;Psychosis is where our clinical depth runs deepest. Families in New York come to us because they need someone who understands this population — not a generalist case manager learning on the job.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions</cite>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Related Services</p>
              <h2>When psychosis overlaps with substance use</h2>
              <p className="service-page-body">
                Psychosis and substance use frequently co-occur. Substance-induced psychosis, in particular, requires integrated care that addresses both the psychiatric symptoms and the substance use disorder simultaneously. Our <Link href="/co-occurring-disorders-case-management">co-occurring disorders case management</Link> is built for exactly this.
              </p>
              <p className="service-page-body">
                When a loved one is refusing help, our <Link href="/clinical-intervention-services">clinical intervention services</Link> are led by clinicians who understand psychiatric complexity — not just the motivational component of intervention.
              </p>
              <p className="service-page-body">
                For a full overview of our NYC services, visit our <Link href="/case-management-new-york-city">NYC case management hub</Link>. For national information, see <Link href="/psychosis-case-management">psychosis case management</Link>.
              </p>
            </div>
          </div>

          <div className="service-page-sidebar">
            <div className="sidebar-box">
              <p className="section-label">What We Handle</p>
              <ul className="sidebar-list">
                <li>First-episode psychosis</li>
                <li>Chronic psychotic disorders</li>
                <li>Substance-induced psychosis</li>
                <li>Psychiatric stabilization coordination</li>
                <li>Medication management oversight</li>
                <li>Treatment placement at specialized programs</li>
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
