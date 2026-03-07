import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'Dual Diagnosis Case Management NYC | Holistic Solutions',
  description: 'Dual diagnosis case management in New York City for co-occurring substance use and mental health disorders. Licensed clinicians. Integrated care. Confidential.',
  keywords: 'dual diagnosis case management new york city, co-occurring disorders case manager NYC, dual diagnosis treatment NYC, substance use mental health case management new york',
  alternates: { canonical: `${SITE_URL}/dual-diagnosis-case-management-new-york-city` },
  openGraph: {
    title: 'Dual Diagnosis Case Management NYC | Holistic Solutions',
    description: 'Dual diagnosis case management in New York City for co-occurring substance use and mental health disorders. Licensed clinicians. Integrated care. Confidential.',
    url: `${SITE_URL}/dual-diagnosis-case-management-new-york-city`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is dual diagnosis case management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dual diagnosis case management is clinical coordination for individuals who have both a substance use disorder and a mental health condition. A dual diagnosis case manager ensures both conditions are treated together through integrated care planning, proper treatment placement, and ongoing provider coordination.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide dual diagnosis case management in New York City?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We travel to New York City regularly for in-person assessments, clinical interventions, and companionship services. We maintain a vetted network of dual diagnosis treatment programs across the NYC metro area and coordinate care with local providers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What co-occurring conditions do you work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with a wide range of co-occurring presentations including substance use with depression, addiction with PTSD, alcoholism with anxiety disorders, substance use with bipolar disorder, and substance-induced psychosis. Our clinical expertise is deepest at the intersection of substance use and psychotic disorders.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why can\'t I just find a dual diagnosis treatment center on my own?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many treatment programs advertise dual diagnosis capability, but far fewer are genuinely equipped for it. A licensed case manager who has personally evaluated programs knows the difference between marketing claims and clinical reality. We place clients at programs that can actually manage both conditions — not ones that simply claim they can.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is dual diagnosis case management covered by insurance?',
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
    { '@type': 'ListItem', position: 2, name: 'Co-Occurring Disorders Case Management', item: `${SITE_URL}/co-occurring-disorders-case-management` },
    { '@type': 'ListItem', position: 3, name: 'New York City', item: `${SITE_URL}/dual-diagnosis-case-management-new-york-city` },
  ],
}

const faqs = [
  { q: 'What is dual diagnosis case management?', a: 'Dual diagnosis case management is clinical coordination for individuals who have both a substance use disorder and a mental health condition. A dual diagnosis case manager ensures both conditions are treated together through integrated care planning, proper treatment placement, and ongoing provider coordination.' },
  { q: 'Do you provide dual diagnosis case management in New York City?', a: 'Yes. We travel to New York City regularly for in-person assessments, clinical interventions, and companionship services. We maintain a vetted network of dual diagnosis treatment programs across the NYC metro area and coordinate care with local providers.' },
  { q: 'What co-occurring conditions do you work with?', a: 'We work with a wide range of co-occurring presentations including substance use with depression, addiction with PTSD, alcoholism with anxiety disorders, substance use with bipolar disorder, and substance-induced psychosis. Our clinical expertise is deepest at the intersection of substance use and psychotic disorders.' },
  { q: "Why can't I just find a dual diagnosis treatment center on my own?", a: 'Many treatment programs advertise dual diagnosis capability, but far fewer are genuinely equipped for it. A licensed case manager who has personally evaluated programs knows the difference between marketing claims and clinical reality. We place clients at programs that can actually manage both conditions — not ones that simply claim they can.' },
  { q: 'Is dual diagnosis case management covered by insurance?', a: 'Holistic Solutions operates on a private-pay basis. This allows us to remain fully independent — we are not beholden to any treatment center or insurance company. Our recommendations are based solely on what is clinically appropriate for your situation.' },
]

export default function DualDiagnosisCaseManagementNewYorkCity() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="page-header">
        <p className="section-label">New York City · Dual Diagnosis</p>
        <h1>Dual Diagnosis Case Management in New York City</h1>
        <p className="page-sub">
          Licensed clinicians coordinating integrated care for co-occurring substance use and mental health disorders across New York City.
        </p>
      </section>

      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <p className="section-label">Overview</p>
            <h2>Integrated care for co-occurring disorders in NYC</h2>
            <p className="service-page-body">
              When substance use and mental health conditions exist together, treating one without the other leads to poor outcomes. Depression fuels relapse. Untreated addiction undermines psychiatric stability. Psychosis complicates every aspect of substance use treatment. These conditions must be addressed together — and that requires a case manager who understands both.
            </p>
            <p className="service-page-body">
              In New York City&apos;s sprawling healthcare system, finding a treatment program that genuinely handles co-occurring disorders — rather than just claiming to — is harder than it should be. Many programs advertise &ldquo;dual diagnosis&rdquo; capability without the psychiatric staff, integrated protocols, or clinical depth to back it up.
            </p>
            <p className="service-page-body">
              Holistic Solutions brings deep clinical expertise in co-occurring disorders to the New York market. We have evaluated programs across the metro area, maintain relationships with providers who specialize in dual diagnosis, and travel to NYC for in-person assessments, interventions, and companionship services.
            </p>

            <p className="service-page-body" style={{ marginTop: '1.5rem' }}>
              Call us. <strong><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></strong>. All inquiries are confidential.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Common Presentations</p>
              <h2>Co-occurring conditions we manage</h2>
              <div className="process-steps" style={{ marginTop: '2rem' }}>
                <div className="step">
                  <span className="step-num">01</span>
                  <div className="step-content">
                    <h4>Substance Use + Depression / Anxiety</h4>
                    <p>The most common co-occurring presentation. We coordinate treatment that addresses the mood or anxiety disorder alongside the substance use — not after it.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">02</span>
                  <div className="step-content">
                    <h4>Addiction + PTSD / Trauma</h4>
                    <p>Trauma and addiction are deeply intertwined. We place clients at programs with trauma-informed care and coordinate with therapists trained in evidence-based trauma treatment.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <div className="step-content">
                    <h4>Substance Use + Bipolar Disorder</h4>
                    <p>Bipolar disorder with co-occurring substance use requires careful psychiatric management and medication oversight. We coordinate between psychiatrists and treatment providers to ensure both conditions are stabilized.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">04</span>
                  <div className="step-content">
                    <h4>Substance Use + Psychosis</h4>
                    <p>Our deepest area of expertise. Substance-induced psychosis and co-occurring psychotic disorders require clinical sophistication that most case management companies cannot provide. <Link href="/psychosis-case-management-new-york-city">Learn more</Link>.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>&ldquo;Dual diagnosis is not a checkbox. It is a clinical reality that demands integrated treatment. Our job is to cut through the marketing and find programs that actually deliver on that promise — in New York and nationwide.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions</cite>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Related Services</p>
              <h2>Connected support in New York City</h2>
              <p className="service-page-body">
                For clients whose primary challenge is substance use, see our <Link href="/substance-use-case-management-new-york-city">substance use case management in NYC</Link>. For psychosis-specific coordination, see <Link href="/psychosis-case-management-new-york-city">psychosis case management in NYC</Link>. When a loved one is refusing help, our <Link href="/clinical-intervention-services">clinical intervention services</Link> are designed for complex psychiatric presentations.
              </p>
              <p className="service-page-body">
                For a full overview of our NYC services, visit our <Link href="/case-management-new-york-city">NYC case management hub</Link>. For national information, see <Link href="/co-occurring-disorders-case-management">co-occurring disorders case management</Link>.
              </p>
            </div>
          </div>

          <div className="service-page-sidebar">
            <div className="sidebar-box">
              <p className="section-label">What We Handle</p>
              <ul className="sidebar-list">
                <li>Substance use + depression or anxiety</li>
                <li>Addiction + PTSD or trauma</li>
                <li>Substance use + bipolar disorder</li>
                <li>Substance use + psychosis</li>
                <li>Integrated treatment placement</li>
                <li>Provider coordination across disciplines</li>
                <li>Medication management oversight</li>
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
