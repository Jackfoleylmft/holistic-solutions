import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import AuthorByline from '@/components/AuthorByline'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'Dual Diagnosis Case Management Las Vegas | Holistic Solutions',
  description: 'Dual diagnosis case management in Las Vegas and Nevada. Licensed clinicians specializing in co-occurring substance use and mental health disorders. Confidential.',
  keywords: 'dual diagnosis case management las vegas, co-occurring disorders las vegas, dual diagnosis treatment nevada, mental health substance use las vegas, co-occurring disorders case manager nevada',
  authors: [{ name: 'Jack Foley, LMFT', url: `${SITE_URL}/about` }],
  alternates: { canonical: `${SITE_URL}/dual-diagnosis-case-management-las-vegas` },
  openGraph: {
    title: 'Dual Diagnosis Case Management Las Vegas | Holistic Solutions',
    description: 'Dual diagnosis case management in Las Vegas and Nevada. Licensed clinicians specializing in co-occurring substance use and mental health disorders.',
    url: `${SITE_URL}/dual-diagnosis-case-management-las-vegas`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is dual diagnosis case management in Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dual diagnosis case management in Las Vegas is clinical coordination for individuals with co-occurring substance use and mental health disorders — conditions that must be treated together to achieve meaningful recovery. A dual diagnosis case manager assesses both presentations, identifies programs equipped to treat them simultaneously, coordinates placement, manages transitions between levels of care, and supports the family throughout the process. At Holistic Solutions, every case manager is a licensed clinician.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is dual diagnosis so common in Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las Vegas concentrates several risk factors that drive co-occurring disorders: a 24/7 hospitality economy with high-stress, high-alcohol-access workplaces; widespread availability of cannabis, stimulants, and alcohol; a large population without strong local support networks; and limited access to mental health care. The result is a city with elevated rates of both substance use disorder and untreated mental health conditions — and frequent intersection of the two.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there dual diagnosis treatment programs in Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las Vegas has some programs that describe themselves as dual diagnosis capable, but true integrated care — treating both the substance use and the psychiatric condition with the same clinical team, in the same program — is limited. Many programs treat one condition primarily and address the other secondarily, if at all. For complex dual diagnosis presentations, the right program frequently requires national placement. A case manager with national reach can accurately assess which local programs are genuinely equipped and when to look outside Nevada.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my family member has a dual diagnosis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dual diagnosis is identified through clinical assessment, not self-reporting. Common patterns include: substance use that appears to be managing anxiety, depression, or trauma symptoms; mental health symptoms that persist or worsen during periods of sobriety; a history of failed treatment where only one condition was addressed; or significant mood, perceptual, or behavioral changes that do not track clearly with substance use patterns alone. A biopsychosocial assessment by a licensed clinician is the right starting point.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I start dual diagnosis case management in Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call (702) 494-7641 or submit a contact form. We begin with a clinical intake to understand the full picture — substance use history, psychiatric history, prior treatment, current functioning, family context — before making any recommendations. All inquiries are confidential. We respond within one business day.',
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
    { '@type': 'ListItem', position: 3, name: 'Las Vegas', item: `${SITE_URL}/dual-diagnosis-case-management-las-vegas` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/dual-diagnosis-case-management-las-vegas`,
  name: 'Dual Diagnosis Case Management Las Vegas',
  description: 'Dual diagnosis case management in Las Vegas and Nevada. Licensed clinicians specializing in co-occurring substance use and mental health disorders.',
  provider: {
    '@type': 'MedicalBusiness',
    '@id': SITE_URL,
    name: 'Holistic Solutions Case Management',
  },
  areaServed: [{ '@type': 'City', name: 'Las Vegas' }, { '@type': 'State', name: 'Nevada' }],
  serviceType: 'Dual Diagnosis Case Management',
}

const faqs = [
  { q: 'What is dual diagnosis case management in Las Vegas?', a: 'Dual diagnosis case management in Las Vegas is clinical coordination for individuals with co-occurring substance use and mental health disorders — conditions that must be treated together to achieve meaningful recovery. A dual diagnosis case manager assesses both presentations, identifies programs equipped to treat them simultaneously, coordinates placement, manages transitions between levels of care, and supports the family throughout the process. At Holistic Solutions, every case manager is a licensed clinician.' },
  { q: 'Why is dual diagnosis so common in Las Vegas?', a: 'Las Vegas concentrates several risk factors that drive co-occurring disorders: a 24/7 hospitality economy with high-stress, high-alcohol-access workplaces; widespread availability of cannabis, stimulants, and alcohol; a large population without strong local support networks; and limited access to mental health care. The result is a city with elevated rates of both substance use disorder and untreated mental health conditions — and frequent intersection of the two.' },
  { q: 'Are there dual diagnosis treatment programs in Las Vegas?', a: 'Las Vegas has some programs that describe themselves as dual diagnosis capable, but true integrated care is limited. Many programs treat one condition primarily and address the other secondarily. For complex dual diagnosis presentations, the right program frequently requires national placement. A case manager with national reach can accurately assess which local programs are genuinely equipped and when to look outside Nevada.' },
  { q: 'How do I know if my family member has a dual diagnosis?', a: 'Dual diagnosis is identified through clinical assessment, not self-reporting. Common patterns include: substance use that appears to be managing anxiety, depression, or trauma symptoms; mental health symptoms that persist or worsen during periods of sobriety; a history of failed treatment where only one condition was addressed; or significant mood, perceptual, or behavioral changes that do not track clearly with substance use patterns alone. A biopsychosocial assessment by a licensed clinician is the right starting point.' },
  { q: 'How do I start dual diagnosis case management in Las Vegas?', a: 'Call (702) 494-7641 or submit a contact form. We begin with a clinical intake to understand the full picture — substance use history, psychiatric history, prior treatment, current functioning, family context — before making any recommendations. All inquiries are confidential. We respond within one business day.' },
]

export default function DualDiagnosisCaseManagementLasVegas() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="page-header">
        <p className="section-label">Las Vegas · Dual Diagnosis</p>
        <h1>Dual Diagnosis Case Management in Las Vegas</h1>
        <p className="page-sub">
          Integrated clinical coordination for co-occurring substance use and mental health disorders in Nevada — where both conditions are common and programs that treat both well are rare.
        </p>
      </section>

      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <AuthorByline />

            <p className="section-label">Overview</p>
            <h2>Co-occurring disorders in a city that compounds them</h2>
            <p className="service-page-body">
              Las Vegas creates conditions where co-occurring disorders thrive. The 24/7 economy places hundreds of thousands of people in high-stress environments with constant access to alcohol and a culture that normalizes heavy use. Legal cannabis has been layered on top of that since 2017. Mental health care access is severely limited — Nevada ranks in the bottom five states nationally for behavioral health infrastructure. The result is a city with elevated rates of both substance use disorder and untreated mental health conditions, and a high frequency of presentations where both are present simultaneously.
            </p>
            <p className="service-page-body">
              Treating only one condition when both are present is one of the most reliable predictors of treatment failure. Depression that drives drinking does not resolve in detox. Anxiety that fuels stimulant use does not disappear with sobriety. Trauma that underlies both does not get addressed by a substance-only program. True dual diagnosis care requires programs that treat both conditions in an integrated way — and those programs are not easy to find in Las Vegas.
            </p>
            <p className="service-page-body">
              Our founder, Jack Foley, LMFT, grew up in Las Vegas and has worked with Nevada families navigating co-occurring disorders for years. We know which local programs are genuinely equipped for dual diagnosis and which treat it in name only. When the right program does not exist locally — and for complex presentations, it often does not — we have the national reach to find it.
            </p>

            <p className="service-page-body" style={{ marginTop: '1.5rem' }}>
              If you are concerned about a family member, call us. <strong><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></strong>. All inquiries are confidential.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">What We Coordinate</p>
              <h2>Clinical services for dual diagnosis in Las Vegas</h2>
              <div className="process-steps" style={{ marginTop: '2rem' }}>
                <div className="step">
                  <span className="step-num">01</span>
                  <div className="step-content">
                    <h4>Integrated Clinical Assessment</h4>
                    <p>A biopsychosocial evaluation that assesses both the substance use and psychiatric presentation — history, onset, prior treatment, functional impact, family context — before any placement recommendation is made. Both conditions are evaluated together because they do not exist in isolation.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">02</span>
                  <div className="step-content">
                    <h4>Dual Diagnosis Program Placement</h4>
                    <p>Placement at programs equipped to treat both conditions simultaneously — not sequentially, not separately. Locally in Nevada when the right program exists, nationally when the clinical complexity requires specialized integrated care. We know the difference between dual diagnosis capable and dual diagnosis competent.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <div className="step-content">
                    <h4>Psychiatric Coordination</h4>
                    <p>Coordination with psychiatrists and prescribers who can manage psychiatric medication alongside substance use treatment — not after. Medication management in dual diagnosis requires clinical judgment about what is treating a disorder and what is being influenced by active substance use.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">04</span>
                  <div className="step-content">
                    <h4>Continuum &amp; Aftercare Planning</h4>
                    <p>Coordination through the full continuum of care — from higher levels back to outpatient, community support, and psychiatric follow-up. For dual diagnosis clients, the aftercare plan must account for both conditions. We stay involved through transitions to reduce the risk of relapse and psychiatric destabilization.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>&ldquo;Most treatment failures in dual diagnosis come down to one thing: treating only half the problem. A program that is excellent at substance use treatment but does not actually address the underlying psychiatric condition will get someone sober and send them home — and then watch them relapse. Las Vegas has too many of those programs.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions</cite>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Related Services</p>
              <h2>Additional support in Las Vegas</h2>
              <p className="service-page-body">
                We also provide <Link href="/substance-use-case-management-las-vegas">substance use case management in Las Vegas</Link> for clients whose primary presentation is addiction, and <Link href="/psychosis-case-management-las-vegas">psychosis case management in Las Vegas</Link> for clients with psychotic disorders — including those with co-occurring substance use. When resistance to treatment is the primary barrier, our <Link href="/clinical-intervention-services">clinical intervention services</Link> can help families take the first step.
              </p>
              <p className="service-page-body">
                For a full overview of our Las Vegas services, see our <Link href="/case-management-las-vegas">Las Vegas case management hub</Link>. For national co-occurring disorders services, see <Link href="/co-occurring-disorders-case-management">co-occurring disorders case management</Link>.
              </p>
            </div>
          </div>

          <div className="service-page-sidebar">
            <div className="sidebar-box">
              <p className="section-label">Common Combinations We See</p>
              <ul className="sidebar-list">
                <li>Alcohol use disorder + depression or anxiety</li>
                <li>Stimulant use + bipolar disorder</li>
                <li>Cannabis use + psychosis or anxiety</li>
                <li>Opioid use disorder + trauma / PTSD</li>
                <li>Polysubstance use + personality disorders</li>
                <li>Substance use + treatment-resistant depression</li>
                <li>Substance-induced psychiatric presentations</li>
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
