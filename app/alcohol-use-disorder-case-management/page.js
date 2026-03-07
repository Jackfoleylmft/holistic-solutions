import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'Alcohol Use Disorder Case Management | Holistic Solutions',
  description: 'Case management for alcohol use disorder. Licensed clinicians coordinating detox, treatment, and recovery across every level of care. Nationwide. Confidential.',
  keywords: 'alcohol use disorder case management, alcoholism case manager, alcohol addiction case management, AUD case management, alcohol detox case manager',
  alternates: { canonical: `${SITE_URL}/alcohol-use-disorder-case-management` },
  openGraph: {
    title: 'Alcohol Use Disorder Case Management | Holistic Solutions',
    description: 'Case management for alcohol use disorder. Licensed clinicians coordinating detox, treatment, and recovery across every level of care. Nationwide. Confidential.',
    url: `${SITE_URL}/alcohol-use-disorder-case-management`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does an alcohol use disorder case manager do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An alcohol use disorder case manager coordinates the full continuum of care — from clinical assessment and medical detox through residential treatment, step-down programs, and long-term recovery support. They manage treatment placement, provider coordination, care transitions, and family communication throughout the process.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does alcohol detox require medical supervision?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Alcohol withdrawal can be medically dangerous and potentially life-threatening. Medical detox provides 24/7 monitoring, medication management, and clinical oversight to ensure safety during withdrawal. We coordinate placement at medically supervised detox facilities and manage the transition to the next level of care.',
      },
    },
    {
      '@type': 'Question',
      name: 'What levels of care are available for alcohol use disorder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The continuum includes medical detox, residential treatment, partial hospitalization (PHP), intensive outpatient (IOP), outpatient therapy, sober living, and ongoing recovery support. The appropriate level depends on the severity of the disorder, medical history, co-occurring conditions, and prior treatment history. We assess and coordinate across all levels.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my loved one also has a mental health condition?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alcohol use disorder frequently co-occurs with depression, anxiety, PTSD, and other mental health conditions. We specialize in co-occurring disorders and ensure both conditions are treated together. Learn more about our co-occurring disorders case management.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is alcohol use disorder case management covered by insurance?',
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
    { '@type': 'ListItem', position: 3, name: 'Alcohol Use Disorder', item: `${SITE_URL}/alcohol-use-disorder-case-management` },
  ],
}

const faqs = [
  { q: 'What does an alcohol use disorder case manager do?', a: 'An alcohol use disorder case manager coordinates the full continuum of care — from clinical assessment and medical detox through residential treatment, step-down programs, and long-term recovery support. They manage treatment placement, provider coordination, care transitions, and family communication throughout the process.' },
  { q: 'Does alcohol detox require medical supervision?', a: 'Yes. Alcohol withdrawal can be medically dangerous and potentially life-threatening. Medical detox provides 24/7 monitoring, medication management, and clinical oversight to ensure safety during withdrawal. We coordinate placement at medically supervised detox facilities and manage the transition to the next level of care.' },
  { q: 'What levels of care are available for alcohol use disorder?', a: 'The continuum includes medical detox, residential treatment, partial hospitalization (PHP), intensive outpatient (IOP), outpatient therapy, sober living, and ongoing recovery support. The appropriate level depends on the severity of the disorder, medical history, co-occurring conditions, and prior treatment history. We assess and coordinate across all levels.' },
  { q: 'What if my loved one also has a mental health condition?', a: 'Alcohol use disorder frequently co-occurs with depression, anxiety, PTSD, and other mental health conditions. We specialize in co-occurring disorders and ensure both conditions are treated together. Learn more about our co-occurring disorders case management.' },
  { q: 'Is alcohol use disorder case management covered by insurance?', a: 'Holistic Solutions operates on a private-pay basis. This allows us to remain fully independent — we are not beholden to any treatment center or insurance company. Our recommendations are based solely on what is clinically appropriate for your situation.' },
]

export default function AlcoholUseDisorderCaseManagement() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="page-header">
        <p className="section-label">Substance Use · Alcohol</p>
        <h1>Alcohol Use Disorder Case Management</h1>
        <p className="page-sub">
          Licensed clinicians coordinating medical detox, treatment placement, and long-term recovery for alcohol use disorder. Nationwide. Confidential.
        </p>
      </section>

      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <p className="section-label">Overview</p>
            <h2>Clinical case management for alcohol use disorder</h2>
            <p className="service-page-body">
              Alcohol use disorder is one of the most common and most dangerous substance use conditions. Withdrawal can be life-threatening. Co-occurring depression and anxiety are the norm, not the exception. And the treatment landscape — from detox through long-term recovery — involves multiple levels of care, multiple providers, and critical transitions where things can fall apart.
            </p>
            <p className="service-page-body">
              A licensed case manager ensures none of those transitions are left to chance. We assess the full clinical picture, coordinate medically supervised detox, place clients at treatment programs we have vetted, manage every step-down from residential through outpatient, and stay involved through long-term recovery.
            </p>
            <p className="service-page-body">
              At Holistic Solutions, every case manager is a licensed clinician. We do not hand off coordination to unlicensed staff. The person managing your loved one&apos;s care is the same person who assessed them, chose their treatment program, and will be there when decisions need to be made.
            </p>

            <p className="service-page-body" style={{ marginTop: '1.5rem' }}>
              Call us. <strong><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></strong>. All inquiries are confidential.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">The Process</p>
              <h2>How we manage alcohol use disorder cases</h2>
              <div className="process-steps" style={{ marginTop: '2rem' }}>
                <div className="step">
                  <span className="step-num">01</span>
                  <div className="step-content">
                    <h4>Clinical Assessment</h4>
                    <p>A comprehensive evaluation of drinking history, medical status, prior treatment, co-occurring mental health conditions, and family dynamics. This assessment determines the appropriate level of care and drives the entire treatment plan.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">02</span>
                  <div className="step-content">
                    <h4>Medical Detox Coordination</h4>
                    <p>Alcohol withdrawal requires medical supervision. We coordinate placement at trusted detox facilities, communicate with medical staff throughout, and plan the transition to the next level of care before detox is complete.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <div className="step-content">
                    <h4>Treatment Placement</h4>
                    <p>Placement at a residential, PHP, or IOP program matched to the client&apos;s clinical needs — not to whoever has a bed available. We have personally evaluated our network of programs and know what each one does well.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">04</span>
                  <div className="step-content">
                    <h4>Recovery Coordination</h4>
                    <p>Ongoing case management through step-downs, sober living placement, outpatient coordination, and long-term recovery support. We stay involved as long as the family needs us.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>&ldquo;Alcohol is the substance where the medical risk during withdrawal is highest and the co-occurring mental health picture is most common. Both of those realities demand clinical case management — not just someone making phone calls.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions</cite>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Related Services</p>
              <h2>When alcohol is not the only issue</h2>
              <p className="service-page-body">
                Alcohol use disorder frequently co-occurs with depression, anxiety, PTSD, and other mental health conditions. Our <Link href="/co-occurring-disorders-case-management">co-occurring disorders case management</Link> ensures both conditions are treated together. For polysubstance use, see our broader <Link href="/substance-use-case-management">substance use case management</Link> page.
              </p>
              <p className="service-page-body">
                When a loved one is refusing help, our <Link href="/clinical-intervention-services">clinical intervention services</Link> can help. We also provide local support in <Link href="/case-management-los-angeles">Los Angeles</Link> and <Link href="/case-management-new-york-city">New York City</Link>.
              </p>
            </div>
          </div>

          <div className="service-page-sidebar">
            <div className="sidebar-box">
              <p className="section-label">What We Coordinate</p>
              <ul className="sidebar-list">
                <li>Clinical assessment</li>
                <li>Medical detox placement</li>
                <li>Residential treatment</li>
                <li>PHP / IOP / outpatient</li>
                <li>Sober living placement</li>
                <li>Medication management oversight</li>
                <li>Family support and education</li>
                <li>Long-term recovery planning</li>
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
