import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'First Episode Psychosis Case Management | Holistic Solutions',
  description: 'Case management for first-episode psychosis. Licensed clinicians coordinating early intervention, psychiatric care, and family support. Nationwide. Confidential.',
  keywords: 'first episode psychosis case management, FEP case manager, first psychotic episode help, early psychosis intervention, first episode psychosis treatment',
  alternates: { canonical: `${SITE_URL}/first-episode-psychosis-case-management` },
  openGraph: {
    title: 'First Episode Psychosis Case Management | Holistic Solutions',
    description: 'Case management for first-episode psychosis. Licensed clinicians coordinating early intervention, psychiatric care, and family support. Nationwide. Confidential.',
    url: `${SITE_URL}/first-episode-psychosis-case-management`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is first-episode psychosis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First-episode psychosis (FEP) refers to the first time a person experiences psychotic symptoms — such as hallucinations, delusions, or disordered thinking — to a degree that significantly impairs their functioning. It most commonly occurs in late adolescence or early adulthood and can be caused by a primary psychotic disorder, substance use, or other medical conditions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is early intervention important for first-episode psychosis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Research consistently shows that early intervention in psychosis leads to better long-term outcomes. The duration of untreated psychosis (DUP) — the time between symptom onset and treatment — is one of the strongest predictors of recovery. Getting the right care quickly matters enormously.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you know if someone is experiencing first-episode psychosis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Warning signs can include hearing or seeing things others do not, expressing beliefs that seem disconnected from reality, significant changes in behavior or personality, withdrawal from relationships, decline in functioning at work or school, and disorganized speech or thinking. If you are concerned, a clinical assessment can help determine what is happening.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a first-episode psychosis case manager do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A first-episode psychosis case manager coordinates psychiatric evaluation, treatment placement, medication management oversight, family education, and ongoing recovery support. They ensure the person receives evidence-based early intervention and that the family understands what is happening and what to expect.',
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
    { '@type': 'ListItem', position: 3, name: 'First Episode Psychosis', item: `${SITE_URL}/first-episode-psychosis-case-management` },
  ],
}

const faqs = [
  { q: 'What is first-episode psychosis?', a: 'First-episode psychosis (FEP) refers to the first time a person experiences psychotic symptoms — such as hallucinations, delusions, or disordered thinking — to a degree that significantly impairs their functioning. It most commonly occurs in late adolescence or early adulthood and can be caused by a primary psychotic disorder, substance use, or other medical conditions.' },
  { q: 'Why is early intervention important for first-episode psychosis?', a: 'Research consistently shows that early intervention in psychosis leads to better long-term outcomes. The duration of untreated psychosis (DUP) — the time between symptom onset and treatment — is one of the strongest predictors of recovery. Getting the right care quickly matters enormously.' },
  { q: 'How do you know if someone is experiencing first-episode psychosis?', a: 'Warning signs can include hearing or seeing things others do not, expressing beliefs that seem disconnected from reality, significant changes in behavior or personality, withdrawal from relationships, decline in functioning at work or school, and disorganized speech or thinking. If you are concerned, a clinical assessment can help determine what is happening.' },
  { q: 'What does a first-episode psychosis case manager do?', a: 'A first-episode psychosis case manager coordinates psychiatric evaluation, treatment placement, medication management oversight, family education, and ongoing recovery support. They ensure the person receives evidence-based early intervention and that the family understands what is happening and what to expect.' },
  { q: 'What if my loved one is in psychiatric crisis right now?', a: 'If someone is in immediate danger, call 911. For a mental health crisis, contact the 988 Suicide and Crisis Lifeline by calling or texting 988. If the situation is serious but not immediately life-threatening, call us to discuss clinical intervention and stabilization options.' },
]

export default function FirstEpisodePsychosisCaseManagement() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="page-header">
        <p className="section-label">Psychosis · First Episode</p>
        <h1>First Episode Psychosis Case Management</h1>
        <p className="page-sub">
          Licensed clinicians coordinating early intervention, psychiatric evaluation, and family support for first-episode psychosis. Nationwide. Confidential.
        </p>
      </section>

      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <p className="section-label">Overview</p>
            <h2>When psychosis happens for the first time</h2>
            <p className="service-page-body">
              A first episode of psychosis is one of the most frightening experiences a family can face. A young person — often in their late teens or early twenties — begins behaving in ways that do not make sense. They may hear things, believe things that are not real, withdraw from relationships, or experience a dramatic change in personality and functioning.
            </p>
            <p className="service-page-body">
              For most families, this is completely unfamiliar territory. The questions are overwhelming: Is this a psychotic disorder? Is it substance-induced? Will it happen again? What kind of treatment is needed? Where do we go? What do we do right now?
            </p>
            <p className="service-page-body">
              A first-episode psychosis case manager brings clinical expertise and calm coordination to a moment of crisis. We assess the situation, coordinate psychiatric evaluation, connect the family with the right providers, and guide them through a process they have never navigated before.
            </p>
            <p className="service-page-body">
              Research is clear: <strong>early intervention in psychosis leads to significantly better long-term outcomes</strong>. The duration of untreated psychosis — the gap between when symptoms start and when treatment begins — is one of the strongest predictors of recovery. Getting the right help quickly is not just important. It is urgent.
            </p>

            <p className="service-page-body" style={{ marginTop: '1.5rem' }}>
              Call us. <strong><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></strong>. All inquiries are confidential. If someone is in immediate crisis, call 911 or contact the <strong>988 Suicide and Crisis Lifeline</strong>.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">What We Do</p>
              <h2>Early intervention coordination</h2>
              <div className="process-steps" style={{ marginTop: '2rem' }}>
                <div className="step">
                  <span className="step-num">01</span>
                  <div className="step-content">
                    <h4>Clinical Assessment</h4>
                    <p>We assess the full picture — symptom presentation, onset timeline, substance use history, family history, and current level of functioning. This assessment determines whether we are looking at a primary psychotic disorder, substance-induced psychosis, or another condition.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">02</span>
                  <div className="step-content">
                    <h4>Psychiatric Evaluation Coordination</h4>
                    <p>We connect the individual with a psychiatrist experienced in first-episode psychosis for proper diagnostic evaluation and medication assessment. Getting the right psychiatric evaluation early is critical.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <div className="step-content">
                    <h4>Treatment Placement</h4>
                    <p>If a higher level of care is needed — whether a specialized early psychosis program, psychiatric stabilization, or residential treatment — we identify and place at programs equipped for first-episode presentations.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">04</span>
                  <div className="step-content">
                    <h4>Family Education &amp; Ongoing Support</h4>
                    <p>First-episode psychosis is terrifying for families. We provide clinical education about what is happening, what to expect, and how to support their loved one. We stay involved through treatment and coordinate long-term follow-up care.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>&ldquo;The first episode is the most critical window. How quickly and how well a family responds to a first psychotic episode can shape the trajectory of their loved one&apos;s life. That is why we treat early intervention as urgent — because it is.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions</cite>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Warning Signs</p>
              <h2>Recognizing a first episode of psychosis</h2>
              <p className="service-page-body">
                First-episode psychosis often develops gradually before becoming acute. Warning signs may include:
              </p>
              <ul className="service-page-body" style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', lineHeight: 1.8 }}>
                <li>Hearing or seeing things others do not</li>
                <li>Expressing beliefs that seem disconnected from reality</li>
                <li>Significant personality or behavioral changes</li>
                <li>Withdrawal from family, friends, or activities</li>
                <li>Decline in school or work performance</li>
                <li>Disorganized speech or difficulty communicating</li>
                <li>Suspiciousness or paranoia</li>
                <li>Neglecting personal hygiene</li>
              </ul>
              <p className="service-page-body" style={{ marginTop: '1rem' }}>
                If you are seeing these signs in a loved one, a clinical assessment can help determine what is happening and what steps to take. You do not need a diagnosis before calling us.
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Related Services</p>
              <h2>Connected support</h2>
              <p className="service-page-body">
                For ongoing psychosis case management beyond the first episode, see our <Link href="/psychosis-case-management">psychosis case management</Link> page. For schizophrenia-specific coordination, see <Link href="/schizophrenia-case-management">schizophrenia case management</Link>. When substance use is involved, our <Link href="/co-occurring-disorders-case-management">co-occurring disorders case management</Link> ensures integrated treatment.
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
                <li>First-episode psychosis assessment</li>
                <li>Psychiatric evaluation coordination</li>
                <li>Early psychosis program placement</li>
                <li>Medication management oversight</li>
                <li>Substance-induced psychosis evaluation</li>
                <li>Family education and support</li>
                <li>Long-term follow-up planning</li>
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
