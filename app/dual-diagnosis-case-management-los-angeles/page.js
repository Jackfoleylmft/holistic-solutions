import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'Dual Diagnosis Case Management Los Angeles | Holistic Solutions',
  description: 'Dual diagnosis case management in Los Angeles for co-occurring substance use and mental health disorders. Licensed clinicians. Integrated care. Confidential.',
  keywords: 'dual diagnosis case management los angeles, co-occurring disorders case manager LA, dual diagnosis treatment los angeles, substance use mental health case management LA',
  alternates: { canonical: `${SITE_URL}/dual-diagnosis-case-management-los-angeles` },
  openGraph: {
    title: 'Dual Diagnosis Case Management Los Angeles | Holistic Solutions',
    description: 'Dual diagnosis case management in Los Angeles for co-occurring substance use and mental health disorders. Licensed clinicians. Integrated care. Confidential.',
    url: `${SITE_URL}/dual-diagnosis-case-management-los-angeles`,
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
        text: 'Dual diagnosis case management is clinical coordination for individuals who have both a substance use disorder and a mental health condition — such as addiction and depression, alcoholism and anxiety, or substance use and psychosis. A dual diagnosis case manager ensures both conditions are treated together, not separately, through integrated care planning and provider coordination.',
      },
    },
    {
      '@type': 'Question',
      name: 'What dual diagnosis presentations do you work with in Los Angeles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with a wide range of co-occurring presentations including substance use with depression, addiction with PTSD, alcoholism with anxiety disorders, substance use with bipolar disorder, and substance-induced psychosis. Our clinical expertise is deepest at the intersection of substance use and psychotic disorders.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does dual diagnosis require specialized case management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When substance use and mental health conditions co-occur, treating one without the other leads to poor outcomes. Many treatment programs focus primarily on one condition. A dual diagnosis case manager ensures both are addressed simultaneously, places clients at programs equipped for co-occurring disorders, and coordinates between psychiatric and substance use providers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide in-person dual diagnosis case management in LA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Los Angeles is our headquarters. LA-area clients receive in-person assessments, local coordination with dual diagnosis treatment programs, in-person companionship during transitions, and direct access to our vetted network of providers who specialize in co-occurring disorders.',
      },
    },
    {
      '@type': 'Question',
      name: 'What treatment programs in LA handle dual diagnosis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not all programs that claim to treat dual diagnosis are genuinely equipped for it. We maintain a vetted network of treatment programs in Los Angeles that have the clinical staff, psychiatric capability, and integrated treatment approach necessary for co-occurring disorders. We place clients based on clinical fit, not marketing claims.',
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
    { '@type': 'ListItem', position: 3, name: 'Los Angeles', item: `${SITE_URL}/dual-diagnosis-case-management-los-angeles` },
  ],
}

const faqs = [
  { q: 'What is dual diagnosis case management?', a: 'Dual diagnosis case management is clinical coordination for individuals who have both a substance use disorder and a mental health condition — such as addiction and depression, alcoholism and anxiety, or substance use and psychosis. A dual diagnosis case manager ensures both conditions are treated together, not separately, through integrated care planning and provider coordination.' },
  { q: 'What dual diagnosis presentations do you work with in Los Angeles?', a: 'We work with a wide range of co-occurring presentations including substance use with depression, addiction with PTSD, alcoholism with anxiety disorders, substance use with bipolar disorder, and substance-induced psychosis. Our clinical expertise is deepest at the intersection of substance use and psychotic disorders.' },
  { q: 'Why does dual diagnosis require specialized case management?', a: 'When substance use and mental health conditions co-occur, treating one without the other leads to poor outcomes. Many treatment programs focus primarily on one condition. A dual diagnosis case manager ensures both are addressed simultaneously, places clients at programs equipped for co-occurring disorders, and coordinates between psychiatric and substance use providers.' },
  { q: 'Do you provide in-person dual diagnosis case management in LA?', a: 'Yes. Los Angeles is our headquarters. LA-area clients receive in-person assessments, local coordination with dual diagnosis treatment programs, in-person companionship during transitions, and direct access to our vetted network of providers who specialize in co-occurring disorders.' },
  { q: 'What treatment programs in LA handle dual diagnosis?', a: 'Not all programs that claim to treat dual diagnosis are genuinely equipped for it. We maintain a vetted network of treatment programs in Los Angeles that have the clinical staff, psychiatric capability, and integrated treatment approach necessary for co-occurring disorders. We place clients based on clinical fit, not marketing claims.' },
]

export default function DualDiagnosisCaseManagementLosAngeles() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="page-header">
        <p className="section-label">Los Angeles · Dual Diagnosis</p>
        <h1>Dual Diagnosis Case Management in Los Angeles</h1>
        <p className="page-sub">
          Licensed clinicians coordinating integrated care for co-occurring substance use and mental health disorders across Los Angeles.
        </p>
      </section>

      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <p className="section-label">Overview</p>
            <h2>Integrated care for co-occurring disorders in LA</h2>
            <p className="service-page-body">
              When substance use and mental health conditions exist together — which they often do — treating one without the other leads to poor outcomes. Depression fuels relapse. Untreated addiction undermines psychiatric stability. Psychosis complicates every aspect of substance use treatment. These conditions must be addressed together.
            </p>
            <p className="service-page-body">
              That is what dual diagnosis case management provides: clinical coordination that ensures both conditions are treated simultaneously, at programs genuinely equipped for co-occurring disorders, with providers who communicate and collaborate rather than working in silos.
            </p>
            <p className="service-page-body">
              In Los Angeles, many treatment programs advertise &ldquo;dual diagnosis&rdquo; capability. Far fewer are genuinely equipped for it. A case manager who has personally evaluated these programs — and knows the difference between marketing and clinical reality — protects families from costly misplacements.
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
                    <p>Our deepest area of expertise. Substance-induced psychosis and co-occurring psychotic disorders require a level of clinical sophistication that most case management companies cannot provide. <Link href="/psychosis-case-management-los-angeles">Learn more</Link>.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>&ldquo;The term dual diagnosis gets used loosely. What matters is whether the treatment team can actually manage both conditions at the same time. Our job is to make sure the client lands at a program where that happens — not one that just claims it does.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions · Los Angeles, CA</cite>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Related Services</p>
              <h2>Connected support in Los Angeles</h2>
              <p className="service-page-body">
                For clients whose primary challenge is substance use, see our <Link href="/substance-use-case-management-los-angeles">substance use case management in LA</Link>. For psychosis-specific coordination, see <Link href="/psychosis-case-management-los-angeles">psychosis case management in LA</Link>. When a loved one is refusing help, our <Link href="/clinical-intervention-services">clinical intervention services</Link> are designed for complex psychiatric presentations.
              </p>
              <p className="service-page-body">
                For a full overview of our Los Angeles services, visit our <Link href="/case-management-los-angeles">LA case management hub</Link>. For national information, see <Link href="/co-occurring-disorders-case-management">co-occurring disorders case management</Link>.
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
