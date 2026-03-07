import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'Substance Use Case Management | Holistic Solutions',
  description: "Substance use case management by a master's-level LMFT. Coordinated care across every level, nationwide. Call (702) 494-7641. Confidential.",
  keywords: 'substance use case management, substance abuse case management, addiction case management, licensed case manager addiction, behavioral health case management nationwide',
  alternates: { canonical: `${SITE_URL}/substance-use-case-management` },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is substance use case management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Substance use case management is a clinical coordination service for individuals facing alcohol or drug use disorders. A licensed case manager assesses your situation, identifies appropriate treatment options, coordinates placement, and provides ongoing support and advocacy throughout the recovery process.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a case manager different from a therapist or treatment center?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A therapist provides therapy. A treatment center provides a structured program. A case manager moves across systems on your behalf — coordinating between providers, handling logistics, advocating at each level of care, and filling the gaps that treatment alone does not address. These roles work best together.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a substance use case manager actually do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A substance use case manager conducts a clinical assessment, builds an individualized care plan, identifies and vets treatment options, coordinates placement, and stays involved across transitions — from detox to residential to outpatient to aftercare.',
      },
    },
    {
      '@type': 'Question',
      name: "Can I get support if I'm not in Los Angeles?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Holistic Solutions provides case management services nationwide. We work remotely with clients and families in all 50 states and have a professional network of treatment programs and providers across the country. Location is not a barrier.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does insurance cover substance use case management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Holistic Solutions operates on a private-pay basis. After your initial call or contact form submission, we conduct a full intake assessment so we can understand your situation and walk you through your options.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my family member needs case management vs. just treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your family member has already been through treatment and struggled to maintain progress, or if the clinical picture is complex — co-occurring mental health conditions, multiple failed placements, significant medical or legal involvement — case management is likely appropriate. A single conversation with our team can help clarify which level of support makes sense.',
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
  ],
}

const faqs = [
  {
    q: 'What is substance use case management?',
    a: 'Substance use case management is a clinical coordination service for individuals facing alcohol or drug use disorders. A licensed case manager assesses your situation, identifies appropriate treatment options, coordinates placement, and provides ongoing support and advocacy throughout the recovery process.',
  },
  {
    q: 'How is a case manager different from a therapist or treatment center?',
    a: 'A therapist provides therapy. A treatment center provides a structured program. A case manager moves across systems on your behalf — coordinating between providers, handling logistics, advocating at each level of care, and filling the gaps that treatment alone does not address. These roles work best together.',
  },
  {
    q: 'What does a substance use case manager actually do?',
    a: 'Conduct a clinical assessment. Build an individualized care plan. Identify and vet treatment options. Coordinate placement. Stay involved across transitions — from detox to residential to outpatient to aftercare. Communicate with the treatment team, family members, and other providers as appropriate.',
  },
  {
    q: "Can I get support if I'm not in Los Angeles?",
    a: 'Yes. Holistic Solutions provides case management services nationwide. We work remotely with clients and families in all 50 states and have a professional network of treatment programs and providers across the country. Location is not a barrier.',
  },
  {
    q: 'Does insurance cover substance use case management?',
    a: 'Holistic Solutions operates on a private-pay basis. After your initial call or contact form submission, we conduct a full intake assessment so we can understand your situation and walk you through your options.',
  },
  {
    q: 'How do I know if my family member needs case management vs. just treatment?',
    a: 'If your family member has already been through treatment and struggled to maintain progress, or if the clinical picture is complex — co-occurring mental health conditions, multiple failed placements, significant medical or legal involvement — case management is likely appropriate. A single conversation with our team can help clarify which level of support makes sense.',
  },
]

export default function SubstanceUseCaseManagement() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Page header */}
      <section className="page-header">
        <p className="section-label">Substance Use</p>
        <h1>Substance Use Case Management — Clinically Led, Nationwide</h1>
        <p className="page-sub">
          The treatment system for substance use disorders is not designed to be navigated alone. We coordinate your care from the first call through long-term recovery planning.
        </p>
      </section>

      {/* Intro + inline CTA */}
      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <p className="section-label">Overview</p>
            <h2>What is substance use case management?</h2>
            <p className="service-page-body">
              Substance use case management is a professional service that helps individuals and families navigate the behavioral health system when facing alcohol or drug use disorders. A licensed case manager assesses the clinical picture, identifies the most appropriate level of care, coordinates placement, and provides ongoing support across every transition — from detox and residential treatment to outpatient and long-term recovery planning.
            </p>
            <p className="service-page-body">
              It is not therapy. It is not treatment. It is the infrastructure that holds everything together while treatment does its work.
            </p>
            <p className="service-page-body">
              At Holistic Solutions, every case is managed by a licensed clinician — in social work, counseling, or a clinical field. Our founder, Jack Foley, LMFT, holds a master&apos;s in clinical psychology and brings over a decade of personal recovery experience to the practice. This is not a referral service. It is coordinated clinical advocacy, nationwide.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">How It Works</p>
              <h2>What a case manager does for you</h2>
              <div className="process-steps" style={{ marginTop: '2rem' }}>
                <div className="step">
                  <span className="step-num">01</span>
                  <div className="step-content">
                    <h4>Assessment and Care Planning</h4>
                    <p>Every engagement begins with a biopsychosocial assessment — a structured clinical evaluation of the physical, psychological, social, and environmental factors shaping your situation. From that, we build a care plan that actually fits.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">02</span>
                  <div className="step-content">
                    <h4>Treatment Placement and Coordination</h4>
                    <p>We identify, vet, and place clients in the programs most appropriate for their clinical profile — nationwide. Our network spans every state. You will not receive a list of phone numbers to call on your own.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <div className="step-content">
                    <h4>Ongoing Advocacy and Navigation</h4>
                    <p>After placement, the work continues. We stay in contact with the treatment team, track progress, prepare for step-downs, and coordinate aftercare. Recovery has transitions. Most people struggle at transitions. That is where a case manager earns the most.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>&ldquo;Substance use disorders and psychosis are where our clinical roots run deepest. This is not a service we offer alongside other things. It&apos;s the foundation our practice was built on.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions</cite>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Who We Work With</p>
              <h2>Individuals, families, and referral sources</h2>
              <p className="service-page-body">
                <strong>Individuals.</strong> If you are ready to make a change — or even just ready to talk about it — we meet you exactly where you are. No judgment, no pressure. A clear look at your options and someone to help you move toward the right one.
              </p>
              <p className="service-page-body">
                <strong>Families.</strong> When someone you love is struggling with alcohol or drug use, the weight of figuring out what to do next can be paralyzing. We step in and carry that weight alongside you — from the first call to aftercare planning and everything in between.
              </p>
              <p className="service-page-body">
                <strong>Healthcare providers and referral sources.</strong> Physicians, hospital social workers, emergency departments, therapists, and EAP professionals refer clients to us when they need a reliable clinical partner for complex cases — prompt assessment, placement, and documentation.
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Why Holistic Solutions</p>
              <h2>The clinical difference</h2>
              <p className="service-page-body">
                Most case management and intervention services are staffed by certified interventionists or coordinators without clinical licensure. At Holistic Solutions, every case manager is a licensed clinician. Every intervention is led by a master&apos;s-level licensed clinician. When psychiatric complexity is part of the picture — and it often is — clinical training is not optional.
              </p>
              <p className="service-page-body">
                We also carry deep clinical expertise in two areas where most providers are generalists: substance use disorders and psychosis. These conditions frequently co-occur, and the intersection is where navigation gets most complex. For clients navigating both, see our <Link href="/co-occurring-disorders-case-management">co-occurring disorders case management</Link> page. For cases where psychosis is part of the picture, see <Link href="/psychosis-case-management">psychosis case management</Link>.
              </p>
              <p className="service-page-body">
                All services are HIPAA compliant. All inquiries are confidential.
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Nationwide Services</p>
              <h2>Substance use case management across the US</h2>
              <p className="service-page-body">
                Holistic Solutions is headquartered in Los Angeles, but case management does not require proximity. We work with clients and families in all 50 states — remote assessments, coordination with programs in your area or nationwide, and ongoing case management regardless of where you are.
              </p>
              <p className="service-page-body">
                Our network of trusted treatment centers, psychiatrists, therapists, and community resources spans the country. These are relationships built over years of clinical practice — not a directory. When we place a client, we know the program.
              </p>
              <p className="service-page-body">
                We also offer specialized services for specific presentations: <Link href="/services/substance-use">alcohol and drug use disorder case management</Link>, and dedicated support for <Link href="/services/co-occurring-disorders">co-occurring disorders</Link>.
              </p>
              <p style={{ fontSize: '0.82rem', color: 'var(--adobe)', marginTop: '1.5rem', fontStyle: 'italic' }}>
                A note on terminology: &ldquo;Substance use disorder&rdquo; is the current clinical standard. You may be more familiar with &ldquo;substance abuse&rdquo; — an older term still commonly searched. Whether you are looking for substance use case management or substance abuse case management, you have reached the right place.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="service-page-sidebar">
            <div className="sidebar-box">
              <p className="section-label">Who This Helps</p>
              <ul className="sidebar-list">
                <li>Individuals in active addiction seeking a clear path forward</li>
                <li>Families who don&apos;t know where to start or have tried before</li>
                <li>People who have been through treatment and need stronger coordination</li>
                <li>Executives and professionals seeking discreet, private support</li>
                <li>Individuals navigating co-occurring mental health and substance use</li>
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
