import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'Psychosis Case Management Los Angeles | Holistic Solutions',
  description: 'Psychosis case management in Los Angeles. Licensed clinicians specializing in psychotic disorders, first-episode psychosis, and substance-induced psychosis.',
  keywords: 'psychosis case management los angeles, psychosis case manager LA, first episode psychosis los angeles, schizophrenia case management LA, substance induced psychosis los angeles',
  alternates: { canonical: `${SITE_URL}/psychosis-case-management-los-angeles` },
  openGraph: {
    title: 'Psychosis Case Management Los Angeles | Holistic Solutions',
    description: 'Psychosis case management in Los Angeles. Licensed clinicians specializing in psychotic disorders, first-episode psychosis, and substance-induced psychosis.',
    url: `${SITE_URL}/psychosis-case-management-los-angeles`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a psychosis case manager do in Los Angeles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A psychosis case manager in Los Angeles coordinates psychiatric stabilization, treatment placement, medication management oversight, provider coordination, and long-term recovery planning for individuals experiencing psychotic disorders, first-episode psychosis, or substance-induced psychosis. At Holistic Solutions, this work is led by licensed clinicians with deep expertise in psychosis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with first-episode psychosis in Los Angeles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. First-episode psychosis requires a specialized response — early intervention, proper psychiatric evaluation, and a coordinated care plan that addresses the full clinical picture. We work closely with families navigating a first episode, providing clinical assessment, treatment placement, and ongoing case management in the LA area.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help with substance-induced psychosis in LA?',
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
      name: 'What programs in Los Angeles treat psychosis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We maintain a vetted network of psychiatric facilities, residential treatment programs, and outpatient providers in Los Angeles that specialize in psychotic disorders. Not all treatment programs are equipped to handle psychosis — we know which ones are, and we place clients accordingly.',
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
    { '@type': 'ListItem', position: 3, name: 'Los Angeles', item: `${SITE_URL}/psychosis-case-management-los-angeles` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://hscasemanagement.com/psychosis-case-management-los-angeles',
  name: 'Psychosis Case Management Los Angeles',
  description: 'Psychosis case management in Los Angeles. Licensed clinicians specializing in psychotic disorders, first-episode psychosis, and substance-induced psychosis.',
  provider: {
    '@type': 'MedicalBusiness',
    '@id': 'https://hscasemanagement.com',
    name: 'Holistic Solutions Case Management',
  },
  areaServed: { '@type': 'City', name: 'Los Angeles' },
  serviceType: 'Psychosis Case Management',
}

const faqs = [
  { q: 'What does a psychosis case manager do in Los Angeles?', a: 'A psychosis case manager in Los Angeles coordinates psychiatric stabilization, treatment placement, medication management oversight, provider coordination, and long-term recovery planning for individuals experiencing psychotic disorders, first-episode psychosis, or substance-induced psychosis. At Holistic Solutions, this work is led by licensed clinicians with deep expertise in psychosis.' },
  { q: 'Do you work with first-episode psychosis in Los Angeles?', a: 'Yes. First-episode psychosis requires a specialized response — early intervention, proper psychiatric evaluation, and a coordinated care plan that addresses the full clinical picture. We work closely with families navigating a first episode, providing clinical assessment, treatment placement, and ongoing case management in the LA area.' },
  { q: 'Can you help with substance-induced psychosis in LA?', a: 'Yes. Substance-induced psychosis sits at the intersection of our two deepest areas of expertise — substance use and psychosis. We provide integrated case management that addresses both the substance use and the psychiatric symptoms, coordinating with providers who understand this complex presentation.' },
  { q: 'What if my loved one is in psychiatric crisis right now?', a: 'If someone is in immediate danger, call 911. For a mental health crisis, contact the 988 Suicide and Crisis Lifeline by calling or texting 988. If the situation is serious but not immediately life-threatening, call us to discuss clinical intervention and stabilization options.' },
  { q: 'What programs in Los Angeles treat psychosis?', a: 'We maintain a vetted network of psychiatric facilities, residential treatment programs, and outpatient providers in Los Angeles that specialize in psychotic disorders. Not all treatment programs are equipped to handle psychosis — we know which ones are, and we place clients accordingly.' },
]

export default function PsychosisCaseManagementLosAngeles() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="page-header">
        <p className="section-label">Los Angeles · Psychosis</p>
        <h1>Psychosis Case Management in Los Angeles</h1>
        <p className="page-sub">
          Licensed clinicians with deep expertise in psychotic disorders, first-episode psychosis, and substance-induced psychosis — headquartered in LA.
        </p>
      </section>

      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <p className="section-label">Overview</p>
            <h2>Specialized psychosis support in Los Angeles</h2>
            <p className="service-page-body">
              Psychosis is one of the most complex and frightening clinical presentations a family can face. It demands a response that goes beyond standard case management — someone who understands the psychiatric landscape, can navigate the system under pressure, and knows which providers in Los Angeles are actually equipped to treat psychotic disorders.
            </p>
            <p className="service-page-body">
              This is where Holistic Solutions is most differentiated. Our founder, Jack Foley, LMFT, has deep clinical expertise in psychosis — including first-episode psychosis, chronic psychotic disorders, and substance-induced psychosis. This is not a service we added to a menu. It is the foundation of our clinical identity.
            </p>
            <p className="service-page-body">
              In Los Angeles, that means access to a case management team that has personally evaluated psychiatric programs, maintains standing relationships with local psychiatrists who specialize in psychotic disorders, and can provide in-person support when the situation demands it.
            </p>

            <p className="service-page-body" style={{ marginTop: '1.5rem' }}>
              Call us. <strong><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></strong>. All inquiries are confidential. If someone is in immediate crisis, call 911 or contact the <strong>988 Suicide and Crisis Lifeline</strong>.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">What We Manage</p>
              <h2>Psychosis case management in LA</h2>
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
                    <p>Coordination of acute psychiatric care when needed — crisis intervention, psychiatric hospitalization, or stabilization at programs equipped for psychotic presentations. We manage the logistics so the family can focus on their loved one.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <div className="step-content">
                    <h4>Treatment Placement</h4>
                    <p>Placement at programs that are genuinely equipped to treat psychosis — not every program is. We know which LA-area facilities have the psychiatric staff, medication management capability, and clinical expertise for this population.</p>
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
              <blockquote>&ldquo;Psychosis is where our clinical depth runs deepest. Most case management companies are not built for this population. We are. That is why families across Los Angeles come to us when the psychiatric picture is complex.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions · Los Angeles, CA</cite>
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
                For a full overview of our Los Angeles services, visit our <Link href="/case-management-los-angeles">LA case management hub</Link>. For national information, see <Link href="/psychosis-case-management">psychosis case management</Link>.
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
