import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'Co-Occurring Disorders Case Management | Holistic Solutions',
  description: 'Integrated case management for co-occurring disorders and dual diagnosis. Substance use and mental health addressed together. Nationwide. Confidential.',
  keywords: 'co-occurring disorders case management, dual diagnosis case manager, integrated treatment planning, substance use and mental health, dual diagnosis support nationwide',
  alternates: { canonical: `${SITE_URL}/co-occurring-disorders-case-management` },
  openGraph: {
    title: 'Co-Occurring Disorders Case Management | Holistic Solutions',
    description: 'Integrated case management for co-occurring disorders and dual diagnosis. Substance use and mental health addressed together. Nationwide. Confidential.',
    url: `${SITE_URL}/co-occurring-disorders-case-management`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are co-occurring disorders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Co-occurring disorders — also called dual diagnosis — refers to the presence of both a substance use disorder and a mental health condition at the same time. Common combinations include addiction with depression, anxiety, PTSD, bipolar disorder, or psychosis. The conditions influence each other and must be addressed together for treatment to be effective.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does co-occurring disorder treatment fail so often?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most treatment failures happen because the conditions are treated separately — a substance use program that ignores the mental health component, or a mental health provider who minimizes the addiction. Integrated treatment addresses both simultaneously. A case manager ensures that happens by coordinating between providers and keeping the full picture in view.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is co-occurring disorders case management different from standard case management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard case management may focus on one condition. Co-occurring case management requires a clinician who understands both substance use and mental health simultaneously — how they interact, which symptoms belong to which condition, and how to build a unified care plan. It requires clinical depth in both areas, not just coordination skills.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a dual diagnosis case manager do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A dual diagnosis case manager conducts an integrated assessment, builds a unified care plan addressing both conditions, identifies treatment programs equipped for co-occurring disorders, coordinates between mental health and substance use providers, manages transitions between levels of care, and provides ongoing advocacy throughout the process.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can co-occurring disorders be managed remotely?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Holistic Solutions provides co-occurring disorder case management nationwide. Assessments, care planning, provider coordination, and family communication are conducted remotely. Our network of treatment programs and providers spans all 50 states.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if someone has co-occurring disorders?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If someone is struggling with substance use and also experiencing persistent mental health symptoms — depression, anxiety, mood instability, paranoia, psychosis, or trauma responses — co-occurring disorders are likely. A clinical assessment is the only way to confirm. Contact us at (702) 494-7641 for a confidential consultation.',
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
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://hscasemanagement.com/co-occurring-disorders-case-management',
  name: 'Co-Occurring Disorders Case Management',
  description: 'Integrated case management for co-occurring disorders and dual diagnosis. Substance use and mental health addressed together. Nationwide. Confidential.',
  provider: {
    '@type': 'MedicalBusiness',
    '@id': 'https://hscasemanagement.com',
    name: 'Holistic Solutions Case Management',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'Co-Occurring Disorders Case Management',
}

const faqs = [
  {
    q: 'What are co-occurring disorders?',
    a: 'Co-occurring disorders — also called dual diagnosis — refers to the presence of both a substance use disorder and a mental health condition at the same time. Common combinations include addiction with depression, anxiety, PTSD, bipolar disorder, or psychosis. The conditions influence each other and must be addressed together for treatment to be effective.',
  },
  {
    q: 'Why does co-occurring disorder treatment fail so often?',
    a: 'Most treatment failures happen because the conditions are treated separately — a substance use program that ignores the mental health component, or a mental health provider who minimizes the addiction. Integrated treatment addresses both simultaneously. A case manager ensures that happens by coordinating between providers and keeping the full picture in view.',
  },
  {
    q: 'How is co-occurring disorders case management different from standard case management?',
    a: 'Standard case management may focus on one condition. Co-occurring case management requires a clinician who understands both substance use and mental health simultaneously — how they interact, which symptoms belong to which condition, and how to build a unified care plan. It requires clinical depth in both areas, not just coordination skills.',
  },
  {
    q: 'What does a dual diagnosis case manager do?',
    a: 'A dual diagnosis case manager conducts an integrated assessment, builds a unified care plan addressing both conditions, identifies treatment programs equipped for co-occurring disorders, coordinates between mental health and substance use providers, manages transitions between levels of care, and provides ongoing advocacy throughout the process.',
  },
  {
    q: 'Can co-occurring disorders be managed remotely?',
    a: 'Yes. Holistic Solutions provides co-occurring disorder case management nationwide. Assessments, care planning, provider coordination, and family communication are conducted remotely. Our network of treatment programs and providers spans all 50 states.',
  },
  {
    q: 'How do I know if someone has co-occurring disorders?',
    a: 'If someone is struggling with substance use and also experiencing persistent mental health symptoms — depression, anxiety, mood instability, paranoia, psychosis, or trauma responses — co-occurring disorders are likely. A clinical assessment is the only way to confirm. Contact us at (702) 494-7641 for a confidential consultation.',
  },
]

export default function CoOccurringDisordersCaseManagement() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Page header */}
      <section className="page-header">
        <p className="section-label">Co-Occurring Disorders</p>
        <h1>Co-Occurring Disorders Case Management — Addressed Together, Not Separately</h1>
        <p className="page-sub">
          When substance use and mental health conditions exist together, treating one without the other is the most common reason treatment fails. We hold both.
        </p>
      </section>

      {/* Main content + sidebar */}
      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <p className="section-label">Overview</p>
            <h2>Why integrated case management matters</h2>
            <p className="service-page-body">
              The majority of people with a substance use disorder also live with a mental health condition. Depression, anxiety, PTSD, bipolar disorder, and psychosis frequently co-occur with addiction. When these conditions are treated in isolation — an addiction program that sidelines mental health, or a psychiatrist who ignores the substance use — the treatment plan has a structural flaw. That flaw is why relapse and re-hospitalization rates stay high.
            </p>
            <p className="service-page-body">
              Co-occurring disorders case management exists to close that gap. A case manager with expertise in both substance use and mental health builds a single, unified care plan that addresses both conditions as interconnected — because they are. At Holistic Solutions, this is not a specialty add-on. It is the norm in the cases we see.
            </p>
            <p className="service-page-body">
              Our clinical foundation spans <Link href="/substance-use-case-management">substance use</Link> and <Link href="/psychosis-case-management">psychosis</Link> — the two areas where co-occurrence is most complex and most dangerous. Jack Foley, LMFT, built this practice around the intersection. Every case manager on our team is a licensed clinician with training in both domains.
            </p>

            {/* Inline CTA */}
            <p className="service-page-body" style={{ marginTop: '1.5rem' }}>
              If you or someone you love is navigating both addiction and mental health, call us. <strong><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></strong>. All inquiries are confidential.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">How It Works</p>
              <h2>What integrated case management looks like</h2>
              <div className="process-steps" style={{ marginTop: '2rem' }}>
                <div className="step">
                  <span className="step-num">01</span>
                  <div className="step-content">
                    <h4>Integrated Assessment</h4>
                    <p>A comprehensive evaluation that examines substance use and mental health simultaneously — not as two separate problems. We identify how each condition influences the other and what has failed in prior treatment.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">02</span>
                  <div className="step-content">
                    <h4>Unified Care Plan</h4>
                    <p>One coordinated plan that addresses both conditions. Not two plans that don&apos;t communicate. Treatment goals, provider selection, and medication management are aligned from the start.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <div className="step-content">
                    <h4>Dual-Track Provider Coordination</h4>
                    <p>We manage relationships across both specialties — psychiatrists, addiction medicine physicians, therapists, treatment programs — ensuring they are aligned and sharing information. We are the thread that connects the system.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">04</span>
                  <div className="step-content">
                    <h4>Ongoing Monitoring</h4>
                    <p>Co-occurring conditions shift. Substance use destabilizes mental health. Psychiatric symptoms trigger relapse. We track progress across both dimensions and adjust the plan in real time as your situation evolves.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>&ldquo;Co-occurring presentations are not a specialty add-on for us. They are the norm in the cases we see. Our clinical team is trained to hold both the substance use and the psychiatric complexity in view at all times.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions</cite>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Common Presentations</p>
              <h2>What co-occurring disorders look like in practice</h2>
              <p className="service-page-body">
                Co-occurring disorders is a broad term. In practice, the most common — and most complex — combinations we manage include:
              </p>
              <ul className="sidebar-list" style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
                <li>Substance use disorder with depression or anxiety</li>
                <li>Addiction with PTSD or complex trauma</li>
                <li>Substance use with bipolar disorder</li>
                <li>Substance-induced psychosis alongside a primary psychotic disorder</li>
                <li>Alcohol use disorder with treatment-resistant depression</li>
                <li>Methamphetamine use with psychotic symptoms</li>
              </ul>
              <p className="service-page-body">
                Each of these requires a different clinical approach. A case manager who understands both the substance use and the psychiatric side can identify the right combination of programs and providers — and prevent the pattern of fragmented care that leads to repeated failure.
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Who We Work With</p>
              <h2>Families, individuals, and referral sources</h2>
              <p className="service-page-body">
                <strong>Families.</strong> If your loved one has been through treatment before and it hasn&apos;t held, co-occurring conditions are often the reason. We help families understand what went wrong, build a plan that addresses the full clinical picture, and coordinate every step.
              </p>
              <p className="service-page-body">
                <strong>Individuals.</strong> If you are managing both addiction and a mental health condition, the system was not built to make this easy. We are. One case manager, one plan, both conditions addressed from day one.
              </p>
              <p className="service-page-body">
                <strong>Providers.</strong> Psychiatrists, therapists, hospitals, and EAPs refer dual diagnosis cases to us when they need a clinical partner who can hold both sides of the picture and keep the care plan aligned across providers.
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Nationwide</p>
              <h2>Co-occurring disorders case management across the US</h2>
              <p className="service-page-body">
                We are headquartered in Los Angeles and work with clients and families in all 50 states. Co-occurring disorder case management is conducted remotely — integrated assessments, provider coordination, family communication, and care plan management do not require proximity. Our national network includes dual-diagnosis treatment programs, psychiatrists, and therapists across the country.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="service-page-sidebar">
            <div className="sidebar-box">
              <p className="section-label">Who This Helps</p>
              <ul className="sidebar-list">
                <li>Individuals struggling with both addiction and mental health</li>
                <li>People whose prior treatment addressed one condition but not both</li>
                <li>Families navigating a loved one&apos;s dual diagnosis</li>
                <li>Those experiencing substance-induced psychiatric symptoms</li>
                <li>Providers seeking coordinated dual-diagnosis case management</li>
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

      {/* FAQ */}
      <section style={{ background: 'var(--white)' }}>
        <p className="section-label">Frequently Asked Questions</p>
        <h2>Common questions, honest answers.</h2>
        <div className="faq-grid" style={{ marginTop: '2.5rem' }}>
          <div>
            {faqs.slice(0, 3).map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <span className="faq-icon" aria-hidden="true">+</span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <div>
            {faqs.slice(3).map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <span className="faq-icon" aria-hidden="true">+</span>
                </summary>
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
