import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'Opioid Addiction Case Management | Holistic Solutions',
  description: 'Case management for opioid addiction. Licensed clinicians coordinating detox, MAT, residential treatment, and long-term recovery. Nationwide. Confidential.',
  keywords: 'opioid addiction case management, opioid case manager, fentanyl addiction case management, heroin case management, opioid use disorder case manager, MAT case management',
  alternates: { canonical: `${SITE_URL}/opioid-addiction-case-management` },
  openGraph: {
    title: 'Opioid Addiction Case Management | Holistic Solutions',
    description: 'Case management for opioid addiction. Licensed clinicians coordinating detox, MAT, residential treatment, and long-term recovery. Nationwide. Confidential.',
    url: `${SITE_URL}/opioid-addiction-case-management`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does an opioid addiction case manager do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An opioid addiction case manager coordinates the full continuum of care — from clinical assessment and medically assisted detox through residential treatment, medication-assisted treatment (MAT), step-down programs, and long-term recovery support. They manage treatment placement, provider coordination, care transitions, and family communication.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you coordinate medication-assisted treatment (MAT)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Medication-assisted treatment — including buprenorphine (Suboxone), methadone, and naltrexone (Vivitrol) — is an evidence-based approach for opioid use disorder. We coordinate MAT as part of a comprehensive treatment plan, connecting clients with prescribing providers and monitoring the overall care trajectory.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help with fentanyl addiction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Fentanyl use disorder presents unique clinical challenges — higher tolerance thresholds, more complex detox protocols, and elevated overdose risk. We work with detox facilities and treatment programs that have specific experience managing fentanyl withdrawal and treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if my loved one has overdosed before?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A history of overdose signals elevated risk and urgency. Our clinical assessment accounts for overdose history, and we prioritize placement at programs with appropriate medical oversight. If your loved one is currently in medical crisis, call 911 immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is opioid addiction case management covered by insurance?',
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
    { '@type': 'ListItem', position: 3, name: 'Opioid Addiction', item: `${SITE_URL}/opioid-addiction-case-management` },
  ],
}

const faqs = [
  { q: 'What does an opioid addiction case manager do?', a: 'An opioid addiction case manager coordinates the full continuum of care — from clinical assessment and medically assisted detox through residential treatment, medication-assisted treatment (MAT), step-down programs, and long-term recovery support. They manage treatment placement, provider coordination, care transitions, and family communication.' },
  { q: 'Do you coordinate medication-assisted treatment (MAT)?', a: 'Yes. Medication-assisted treatment — including buprenorphine (Suboxone), methadone, and naltrexone (Vivitrol) — is an evidence-based approach for opioid use disorder. We coordinate MAT as part of a comprehensive treatment plan, connecting clients with prescribing providers and monitoring the overall care trajectory.' },
  { q: 'Can you help with fentanyl addiction?', a: 'Yes. Fentanyl use disorder presents unique clinical challenges — higher tolerance thresholds, more complex detox protocols, and elevated overdose risk. We work with detox facilities and treatment programs that have specific experience managing fentanyl withdrawal and treatment.' },
  { q: 'What if my loved one has overdosed before?', a: 'A history of overdose signals elevated risk and urgency. Our clinical assessment accounts for overdose history, and we prioritize placement at programs with appropriate medical oversight. If your loved one is currently in medical crisis, call 911 immediately.' },
  { q: 'Is opioid addiction case management covered by insurance?', a: 'Holistic Solutions operates on a private-pay basis. This allows us to remain fully independent — we are not beholden to any treatment center or insurance company. Our recommendations are based solely on what is clinically appropriate for your situation.' },
]

export default function OpioidAddictionCaseManagement() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="page-header">
        <p className="section-label">Substance Use · Opioids</p>
        <h1>Opioid Addiction Case Management</h1>
        <p className="page-sub">
          Licensed clinicians coordinating detox, medication-assisted treatment, residential care, and long-term recovery for opioid use disorder. Nationwide.
        </p>
      </section>

      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <p className="section-label">Overview</p>
            <h2>Clinical case management for opioid use disorder</h2>
            <p className="service-page-body">
              Opioid use disorder — whether involving prescription painkillers, heroin, or fentanyl — carries some of the highest medical risk of any substance use condition. Overdose is an ever-present danger. Detox requires careful medical management. And the treatment landscape includes options that many families have never navigated before, including medication-assisted treatment (MAT).
            </p>
            <p className="service-page-body">
              A licensed case manager brings clinical expertise to every decision point. We assess the full picture — substance use severity, medical history, co-occurring conditions, prior treatment — and build a care plan that addresses the complexity. We coordinate medically supervised detox, evaluate MAT options when appropriate, place clients at programs equipped for opioid use disorder, and manage every transition through long-term recovery.
            </p>
            <p className="service-page-body">
              The opioid crisis has reshaped the treatment landscape. Fentanyl has changed the clinical calculus around detox. MAT has become a critical evidence-based option that not all providers understand or support equally. Navigating these realities requires a case manager with clinical depth — not just a referral service.
            </p>

            <p className="service-page-body" style={{ marginTop: '1.5rem' }}>
              Call us. <strong><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></strong>. All inquiries are confidential. If someone is in immediate medical danger, call 911.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">The Process</p>
              <h2>How we manage opioid addiction cases</h2>
              <div className="process-steps" style={{ marginTop: '2rem' }}>
                <div className="step">
                  <span className="step-num">01</span>
                  <div className="step-content">
                    <h4>Clinical Assessment</h4>
                    <p>A comprehensive evaluation of opioid use history, substance type (prescription, heroin, fentanyl), medical status, overdose history, co-occurring conditions, and prior treatment. This drives the entire care plan.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">02</span>
                  <div className="step-content">
                    <h4>Medical Detox Coordination</h4>
                    <p>Opioid withdrawal requires medical supervision — especially with fentanyl. We coordinate placement at detox facilities experienced with opioid protocols and plan the transition to the next level of care.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <div className="step-content">
                    <h4>Treatment &amp; MAT Coordination</h4>
                    <p>Placement at residential or outpatient programs equipped for opioid use disorder. When medication-assisted treatment is clinically appropriate, we coordinate with prescribing providers and integrate MAT into the overall care plan.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">04</span>
                  <div className="step-content">
                    <h4>Recovery Coordination</h4>
                    <p>Ongoing case management through step-downs, sober living, outpatient support, and long-term recovery. Opioid recovery often involves a longer stabilization timeline — we stay involved throughout.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>&ldquo;The opioid landscape has changed dramatically. Fentanyl has raised the stakes on every clinical decision. Families need a case manager who understands the current reality — not one working from an outdated playbook.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions</cite>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Related Services</p>
              <h2>When opioid use is part of a larger picture</h2>
              <p className="service-page-body">
                Opioid use disorder frequently co-occurs with depression, anxiety, PTSD, and chronic pain conditions. Our <Link href="/co-occurring-disorders-case-management">co-occurring disorders case management</Link> ensures both conditions are treated together. For polysubstance use, see our broader <Link href="/substance-use-case-management">substance use case management</Link> page.
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
                <li>Medical detox (including fentanyl protocols)</li>
                <li>Medication-assisted treatment (MAT)</li>
                <li>Residential treatment placement</li>
                <li>PHP / IOP / outpatient</li>
                <li>Sober living placement</li>
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
