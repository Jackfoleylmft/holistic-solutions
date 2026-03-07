import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'Clinical Intervention Services | Holistic Solutions',
  description: "Interventions led by master's-level licensed clinicians — not just certified interventionists. For substance use and psychiatric crises. Nationwide. Confidential.",
  keywords: 'clinical intervention services, masters level interventionist, licensed clinician intervention, addiction intervention, family intervention services, psychiatric intervention',
  alternates: { canonical: `${SITE_URL}/clinical-intervention-services` },
  openGraph: {
    title: 'Clinical Intervention Services | Holistic Solutions',
    description: "Interventions led by master's-level licensed clinicians — not just certified interventionists. For substance use and psychiatric crises. Nationwide. Confidential.",
    url: `${SITE_URL}/clinical-intervention-services`,
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a clinical intervention?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A clinical intervention is a structured, professionally facilitated conversation designed to help someone who is resistant to treatment accept help. Unlike popular portrayals, it is not a surprise ambush. It is a carefully planned process led by a licensed clinician who assesses the situation, prepares the family, facilitates the conversation, and coordinates immediate placement when the person agrees.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a clinical intervention different from a standard intervention?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most intervention services are led by certified interventionists — professionals trained in the intervention process. A clinical intervention is led by a master\'s-level licensed clinician who can assess psychiatric complexity in real time, recognize emerging crisis, respond to trauma responses, and manage situations that go beyond what a scripted process can anticipate. When mental health is part of the picture, this distinction matters.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is an intervention appropriate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An intervention is appropriate when someone is unable or unwilling to recognize the severity of their condition and accept help on their own, and when the consequences of inaction are significant. It is not appropriate for every situation. A clinical assessment with our team can help determine whether intervention is the right step or whether another approach would be more effective.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after the intervention?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When the person agrees to accept help, we move immediately. Treatment placement is coordinated in advance so there is no gap between agreement and admission. We handle logistics, transportation, and facility coordination. After placement, our case management team stays involved through treatment and beyond.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you do an intervention if there are psychiatric issues involved?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — this is where Holistic Solutions is most differentiated. Many intervention services are not equipped to handle psychiatric complexity. Our interventions are led by licensed clinicians with deep expertise in both substance use and psychosis. When the clinical picture includes psychiatric symptoms, trauma, or co-occurring conditions, clinical training is not optional.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide interventions outside of Los Angeles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Holistic Solutions provides clinical intervention services nationwide. We travel to the family and coordinate placement at programs anywhere in the country. Pre-intervention planning is conducted remotely, and the intervention itself is facilitated in person.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Clinical Intervention Services', item: `${SITE_URL}/clinical-intervention-services` },
  ],
}

const faqs = [
  {
    q: 'What is a clinical intervention?',
    a: 'A clinical intervention is a structured, professionally facilitated conversation designed to help someone who is resistant to treatment accept help. Unlike popular portrayals, it is not a surprise ambush. It is a carefully planned process led by a licensed clinician who assesses the situation, prepares the family, facilitates the conversation, and coordinates immediate placement when the person agrees.',
  },
  {
    q: 'How is a clinical intervention different from a standard intervention?',
    a: "Most intervention services are led by certified interventionists — professionals trained in the intervention process. A clinical intervention is led by a master's-level licensed clinician who can assess psychiatric complexity in real time, recognize emerging crisis, respond to trauma responses, and manage situations that go beyond what a scripted process can anticipate. When mental health is part of the picture, this distinction matters.",
  },
  {
    q: 'When is an intervention appropriate?',
    a: 'An intervention is appropriate when someone is unable or unwilling to recognize the severity of their condition and accept help on their own, and when the consequences of inaction are significant. It is not appropriate for every situation. A clinical assessment with our team can help determine whether intervention is the right step or whether another approach would be more effective.',
  },
  {
    q: 'What happens after the intervention?',
    a: 'When the person agrees to accept help, we move immediately. Treatment placement is coordinated in advance so there is no gap between agreement and admission. We handle logistics, transportation, and facility coordination. After placement, our case management team stays involved through treatment and beyond.',
  },
  {
    q: 'Can you do an intervention if there are psychiatric issues involved?',
    a: 'Yes — this is where Holistic Solutions is most differentiated. Many intervention services are not equipped to handle psychiatric complexity. Our interventions are led by licensed clinicians with deep expertise in both substance use and psychosis. When the clinical picture includes psychiatric symptoms, trauma, or co-occurring conditions, clinical training is not optional.',
  },
  {
    q: 'Do you provide interventions outside of Los Angeles?',
    a: 'Yes. Holistic Solutions provides clinical intervention services nationwide. We travel to the family and coordinate placement at programs anywhere in the country. Pre-intervention planning is conducted remotely, and the intervention itself is facilitated in person.',
  },
]

export default function ClinicalInterventionServices() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Page header */}
      <section className="page-header">
        <p className="section-label">Intervention</p>
        <h1>Clinical Intervention Services — Licensed Clinicians, Not Just Interventionists</h1>
        <p className="page-sub">
          When psychiatric complexity is part of the picture, clinical training is not optional. Our interventions are led by master&apos;s-level licensed clinicians.
        </p>
      </section>

      {/* Main content + sidebar */}
      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <p className="section-label">Overview</p>
            <h2>Why clinical interventions are different</h2>
            <p className="service-page-body">
              Most intervention services are led by certified interventionists — people trained in the process and structure of intervention. That training is valuable. But it has limits.
            </p>
            <p className="service-page-body">
              When a loved one&apos;s mental health, trauma history, or psychiatric state is part of the picture — and it often is — you need someone who can read the room clinically. Someone who can recognize an emerging psychiatric crisis, respond to a trauma response in real time, and navigate complexity that a scripted process cannot anticipate.
            </p>
            <p className="service-page-body">
              At Holistic Solutions, every intervention is led by a licensed, master&apos;s-level clinician. Jack Foley, LMFT, has deep clinical expertise in substance use disorders and psychosis — the two areas where interventions are most complex and where the gap between a certified interventionist and a licensed clinician is widest.
            </p>
            <p className="service-page-body">
              The difference is not just a credential. It is the ability to assess what is actually happening in the room, adapt in real time, and manage the full clinical complexity of what unfolds — including immediate placement coordination when your loved one says yes.
            </p>

            {/* Inline CTA */}
            <p className="service-page-body" style={{ marginTop: '1.5rem' }}>
              If you are considering an intervention for someone you love, start with a conversation. <strong><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></strong>. All inquiries are confidential.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">How It Works</p>
              <h2>The clinical intervention process</h2>
              <div className="process-steps" style={{ marginTop: '2rem' }}>
                <div className="step">
                  <span className="step-num">01</span>
                  <div className="step-content">
                    <h4>Pre-Intervention Assessment</h4>
                    <p>We work closely with the family to understand the full clinical picture — substance use history, mental health status, prior treatment, family dynamics, and risk factors. We assess whether intervention is the right approach and build a detailed plan.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">02</span>
                  <div className="step-content">
                    <h4>Family Preparation</h4>
                    <p>Every participant is prepared individually. We guide the family through what to expect, how to communicate, and how to handle the range of responses that may come. The family enters the room grounded and ready — not panicked.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <div className="step-content">
                    <h4>Clinical Facilitation</h4>
                    <p>A licensed clinician leads the intervention in person. We assess what is happening in real time — emotional escalation, psychiatric decompensation, trauma responses — and guide the process through whatever arises. This is where clinical training separates us.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">04</span>
                  <div className="step-content">
                    <h4>Immediate Placement</h4>
                    <p>When your loved one agrees to accept help, we move immediately. Treatment programs are identified and vetted in advance. Logistics — admissions, transportation, insurance — are handled before the intervention begins. There is no gap between yes and arrival.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">05</span>
                  <div className="step-content">
                    <h4>Ongoing Case Management</h4>
                    <p>The intervention is the beginning, not the end. Our case management team stays involved through treatment, monitors progress, coordinates transitions between levels of care, and supports the family throughout. Learn more about our <Link href="/substance-use-case-management">substance use case management</Link> and <Link href="/psychosis-case-management">psychosis case management</Link>.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>&ldquo;The difference between a certified interventionist and a licensed clinician is the difference between knowing the process and being clinically trained. When things go sideways — and in complex cases they often do — clinical training is what allows us to keep everyone safe.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions</cite>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">When Psychiatric Complexity Is Present</p>
              <h2>Interventions involving psychosis, trauma, or co-occurring conditions</h2>
              <p className="service-page-body">
                Many intervention services are not equipped for cases that involve psychiatric symptoms. If the person being intervened upon is experiencing psychosis, has a significant trauma history, or is managing a co-occurring mental health condition alongside substance use, the intervention dynamics change completely.
              </p>
              <p className="service-page-body">
                These are the cases we are most experienced with. Our clinical foundation in <Link href="/psychosis-case-management">psychosis</Link> and <Link href="/co-occurring-disorders-case-management">co-occurring disorders</Link> means we can manage the psychiatric complexity during the intervention itself — not just the motivational component.
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Who We Work With</p>
              <h2>Families who need clinical support</h2>
              <p className="service-page-body">
                <strong>Families of someone who has refused help.</strong> If your loved one will not accept treatment on their own and the situation is getting worse, a clinical intervention may be the right step. We help you determine that.
              </p>
              <p className="service-page-body">
                <strong>Families who have tried before.</strong> If a previous intervention did not work, or if prior treatment failed and your loved one is back in crisis, we bring a different level of clinical depth to the process.
              </p>
              <p className="service-page-body">
                <strong>Cases involving psychiatric complexity.</strong> If mental health is part of the picture — psychosis, bipolar disorder, severe trauma, suicidal ideation — a standard intervention approach may not be safe. A clinical intervention is designed for exactly this.
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Nationwide</p>
              <h2>Clinical interventions across the US</h2>
              <p className="service-page-body">
                We are headquartered in Los Angeles and provide clinical intervention services nationwide. Pre-intervention planning is conducted remotely. The intervention itself is facilitated in person — we travel to the family. Treatment placement is coordinated at programs anywhere in the country.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="service-page-sidebar">
            <div className="sidebar-box">
              <p className="section-label">Who This Helps</p>
              <ul className="sidebar-list">
                <li>Families whose loved one has refused treatment</li>
                <li>Situations involving co-occurring substance use and mental health</li>
                <li>Cases with psychiatric complexity — psychosis, trauma, bipolar</li>
                <li>Families who have attempted an intervention before without success</li>
                <li>Situations requiring immediate treatment placement after the intervention</li>
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
