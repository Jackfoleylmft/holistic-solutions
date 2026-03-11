import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'Psychosis Case Management | Holistic Solutions',
  description: "Case management for psychosis led by a licensed clinician with deep psychiatric expertise. Nationwide coordination for families and individuals. Confidential.",
  keywords: 'psychosis case management, schizophrenia case manager, first episode psychosis help, psychotic disorder case management, mental health case management psychosis',
  alternates: { canonical: `${SITE_URL}/psychosis-case-management` },
  openGraph: {
    title: 'Psychosis Case Management | Holistic Solutions',
    description: "Case management for psychosis led by a licensed clinician with deep psychiatric expertise. Nationwide coordination for families and individuals. Confidential.",
    url: `${SITE_URL}/psychosis-case-management`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is psychosis case management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Psychosis case management is clinical coordination for individuals experiencing psychotic symptoms or diagnosed with a psychotic disorder. A licensed case manager connects the person and their family with the right psychiatrists, treatment programs, and support services — and stays involved across every transition.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is psychosis case management different from therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Therapy addresses the condition through clinical sessions. Case management coordinates the system around the person — identifying the right providers, managing medication logistics, navigating insurance, arranging housing, and advocating during hospitalizations or program transitions. Both are needed. They serve different functions.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a case manager do for someone experiencing psychosis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A case manager conducts a clinical assessment, builds a coordinated care plan, identifies appropriate psychiatrists and treatment programs, manages transitions between levels of care, communicates with the treatment team and family, and provides ongoing advocacy and navigation throughout the process.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can psychosis be managed without hospitalization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In many cases, yes — depending on the severity and the support structure available. Partial hospitalization programs (PHP), intensive outpatient programs (IOP), and coordinated outpatient care with a strong case management team can provide the structure needed. A clinical assessment determines the appropriate level of care.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is substance-induced psychosis different from a psychotic disorder?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Substance-induced psychosis is triggered by drug or alcohol use and may resolve once the substance clears. A primary psychotic disorder like schizophrenia is a chronic condition requiring ongoing management. The distinction matters clinically because the treatment approach differs. In practice, the two often overlap — which is why clinical expertise in both areas is essential.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get help for a family member experiencing psychosis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your family member is in immediate danger, call 911 or the 988 Suicide and Crisis Lifeline. If the situation is not an emergency but you need guidance, contact our team at (702) 494-7641. We assess the situation, explain your options, and coordinate the appropriate level of care. All inquiries are confidential.',
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
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://hscasemanagement.com/psychosis-case-management',
  name: 'Psychosis Case Management',
  description: 'Case management for psychosis led by a licensed clinician with deep psychiatric expertise. Nationwide coordination for families and individuals. Confidential.',
  provider: {
    '@type': 'MedicalBusiness',
    '@id': 'https://hscasemanagement.com',
    name: 'Holistic Solutions Case Management',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  serviceType: 'Psychosis Case Management',
}

const faqs = [
  {
    q: 'What is psychosis case management?',
    a: 'Psychosis case management is clinical coordination for individuals experiencing psychotic symptoms or diagnosed with a psychotic disorder. A licensed case manager connects the person and their family with the right psychiatrists, treatment programs, and support services — and stays involved across every transition.',
  },
  {
    q: 'How is psychosis case management different from therapy?',
    a: 'Therapy addresses the condition through clinical sessions. Case management coordinates the system around the person — identifying the right providers, managing medication logistics, navigating insurance, arranging housing, and advocating during hospitalizations or program transitions. Both are needed. They serve different functions.',
  },
  {
    q: 'What does a case manager do for someone experiencing psychosis?',
    a: 'A case manager conducts a clinical assessment, builds a coordinated care plan, identifies appropriate psychiatrists and treatment programs, manages transitions between levels of care, communicates with the treatment team and family, and provides ongoing advocacy and navigation throughout the process.',
  },
  {
    q: 'Can psychosis be managed without hospitalization?',
    a: 'In many cases, yes — depending on the severity and the support structure available. Partial hospitalization programs (PHP), intensive outpatient programs (IOP), and coordinated outpatient care with a strong case management team can provide the structure needed. A clinical assessment determines the appropriate level of care.',
  },
  {
    q: 'Is substance-induced psychosis different from a psychotic disorder?',
    a: 'Yes. Substance-induced psychosis is triggered by drug or alcohol use and may resolve once the substance clears. A primary psychotic disorder like schizophrenia is a chronic condition requiring ongoing management. The distinction matters clinically because the treatment approach differs. In practice, the two often overlap — which is why clinical expertise in both areas is essential.',
  },
  {
    q: 'How do I get help for a family member experiencing psychosis?',
    a: 'If your family member is in immediate danger, call 911 or the 988 Suicide and Crisis Lifeline. If the situation is not an emergency but you need guidance, contact our team at (702) 494-7641. We assess the situation, explain your options, and coordinate the appropriate level of care. All inquiries are confidential.',
  },
]

export default function PsychosisCaseManagement() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Page header */}
      <section className="page-header">
        <p className="section-label">Psychosis</p>
        <h1>Psychosis Case Management — Clinical Expertise, Nationwide</h1>
        <p className="page-sub">
          Psychosis is one of the most under-supported conditions in behavioral health. Most providers lack the training to navigate it. We built our practice around it.
        </p>
      </section>

      {/* Main content + sidebar */}
      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <p className="section-label">Overview</p>
            <h2>Why psychosis requires specialized case management</h2>
            <p className="service-page-body">
              When someone experiences a psychotic episode — whether it is a first break, a recurrence, or part of a chronic condition like schizophrenia — the clinical picture is complex. Families are often terrified. The systems meant to help are fragmented. And the stakes are high.
            </p>
            <p className="service-page-body">
              Most case management companies do not take psychosis cases because they lack the clinical training to manage them safely. At Holistic Solutions, psychosis is where our practice was built. It is where Jack Foley, LMFT, has the deepest clinical expertise — and it is where the distinction between a certified coordinator and a licensed clinician matters most.
            </p>
            <p className="service-page-body">
              We coordinate care for individuals experiencing psychotic symptoms across every level — crisis stabilization, inpatient psychiatric care, partial hospitalization, intensive outpatient, and long-term community-based support. We stay involved through every transition. We communicate with the treatment team, the family, and the client. And we do it with the clinical understanding that psychosis demands.
            </p>

            {/* Inline CTA */}
            <p className="service-page-body" style={{ marginTop: '1.5rem' }}>
              If you are navigating a psychotic episode for yourself or someone you love, call us. <strong><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></strong>. All inquiries are confidential.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">How It Works</p>
              <h2>What a psychosis case manager does</h2>
              <div className="process-steps" style={{ marginTop: '2rem' }}>
                <div className="step">
                  <span className="step-num">01</span>
                  <div className="step-content">
                    <h4>Clinical Assessment</h4>
                    <p>We evaluate the full psychiatric picture — symptom presentation, history, medication, co-occurring conditions, substance use, family dynamics, and prior treatment. This is not a checklist. It is a clinical assessment conducted by a licensed professional.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">02</span>
                  <div className="step-content">
                    <h4>Provider Matching and Placement</h4>
                    <p>We identify psychiatrists, treatment programs, and support services specifically qualified for psychotic disorders. Not generalists. Specialists who understand the clinical nuances. Our network spans the country.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <div className="step-content">
                    <h4>Crisis Coordination</h4>
                    <p>Psychosis often involves urgent situations — hospitalizations, medication changes, safety concerns. We coordinate with emergency departments, inpatient teams, and outpatient providers to ensure continuity of care during the most critical moments.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">04</span>
                  <div className="step-content">
                    <h4>Ongoing Navigation</h4>
                    <p>After stabilization, the work continues. We manage transitions between levels of care, coordinate medication management with the psychiatrist, support the family, and adjust the care plan as the situation evolves. Psychosis is not a one-time event. Case management is not a one-time service.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>&ldquo;Substance use disorders and psychosis are where our clinical roots run deepest. These are the cases that shaped my clinical instincts, and the cases I am most equipped to navigate — including when they show up together, which they often do.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions</cite>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">The Intersection</p>
              <h2>When psychosis and substance use co-occur</h2>
              <p className="service-page-body">
                Psychosis and substance use frequently co-occur. Cannabis, methamphetamine, and alcohol can all trigger or worsen psychotic symptoms. Substance-induced psychosis may resolve once the substance clears — or it may unmask an underlying psychotic disorder that requires ongoing management.
              </p>
              <p className="service-page-body">
                This intersection is where most providers struggle. It requires expertise in both areas simultaneously. Holistic Solutions was built for exactly this scenario — our clinical foundation spans both <Link href="/substance-use-case-management">substance use case management</Link> and psychosis. For clients navigating both, see our <Link href="/services/co-occurring-disorders">co-occurring disorders case management</Link> page.
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Who We Work With</p>
              <h2>Families, individuals, and providers</h2>
              <p className="service-page-body">
                <strong>Families.</strong> If someone you love is experiencing psychosis, the confusion and fear you are feeling right now is valid. You do not need to navigate this alone. We help families understand what is happening, what the options are, and what to do next — clearly and without rushing you.
              </p>
              <p className="service-page-body">
                <strong>Individuals.</strong> If you are experiencing symptoms yourself and are looking for help making sense of the system, we are here. We coordinate your care and advocate for you at every level.
              </p>
              <p className="service-page-body">
                <strong>Providers.</strong> Psychiatrists, emergency departments, therapists, and hospitals refer complex psychosis cases to us when they need a clinical partner who can handle the coordination and stay involved long-term.
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Nationwide</p>
              <h2>Psychosis case management across the US</h2>
              <p className="service-page-body">
                We are headquartered in Los Angeles but work with clients and families in all 50 states. Psychosis case management is conducted remotely — assessments, provider coordination, family communication, and care plan management do not require proximity. Our national network includes psychiatrists, inpatient programs, PHP and IOP programs, and community mental health resources across the country.
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Crisis Safety</p>
              <h2>If someone is in immediate danger</h2>
              <p className="service-page-body">
                If you or someone you know is experiencing a psychiatric emergency — including active psychosis with safety concerns — call <strong>911</strong> or the <strong>988 Suicide and Crisis Lifeline</strong> (call or text 988). These services are available 24/7.
              </p>
              <p className="service-page-body">
                For non-emergency clinical guidance and care coordination, contact our team at <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>. We respond within one business day.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="service-page-sidebar">
            <div className="sidebar-box">
              <p className="section-label">Who This Helps</p>
              <ul className="sidebar-list">
                <li>Families of someone experiencing a first psychotic episode</li>
                <li>Individuals diagnosed with schizophrenia or a psychotic disorder</li>
                <li>People experiencing substance-induced psychosis</li>
                <li>Families navigating psychiatric hospitalization or discharge</li>
                <li>Providers seeking a clinical partner for complex psychiatric cases</li>
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
