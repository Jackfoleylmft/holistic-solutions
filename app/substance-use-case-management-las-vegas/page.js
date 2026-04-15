import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import AuthorByline from '@/components/AuthorByline'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'Substance Use Case Management Las Vegas | Holistic Solutions',
  description: 'Substance use case management in Las Vegas and Nevada. Licensed clinicians coordinating detox, residential, and outpatient care. Local knowledge, national reach. Confidential.',
  keywords: 'substance use case management las vegas, addiction case manager las vegas, drug and alcohol case management nevada, substance abuse case manager las vegas, SUD case management nevada',
  authors: [{ name: 'Jack Foley, LMFT', url: `${SITE_URL}/about` }],
  alternates: { canonical: `${SITE_URL}/substance-use-case-management-las-vegas` },
  openGraph: {
    title: 'Substance Use Case Management Las Vegas | Holistic Solutions',
    description: 'Substance use case management in Las Vegas and Nevada. Licensed clinicians coordinating detox, residential, and outpatient care. Local knowledge, national reach.',
    url: `${SITE_URL}/substance-use-case-management-las-vegas`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a substance use case manager do in Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A substance use case manager in Las Vegas conducts a clinical assessment, determines the appropriate level of care, and coordinates placement at a vetted treatment program — locally in Nevada or nationally when local options are not the right clinical fit. The case manager manages transitions between levels of care, communicates with providers, navigates insurance when applicable, and maintains continuity throughout the recovery process. At Holistic Solutions, every case manager is a licensed clinician.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does Las Vegas have such high rates of substance use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Several factors converge: Las Vegas\'s hospitality and gaming industry employs hundreds of thousands of people in high-stress, high-alcohol-access environments. The city operates 24/7 with no last call. A large transient and transplant population often lacks the social support networks that provide early intervention elsewhere. Nevada consistently ranks among the highest states for substance use disorder rates nationally.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there good substance use treatment programs in Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but options are limited relative to population size and the complexity of presentations in this market. Las Vegas has some solid outpatient and IOP options, as well as a small number of residential programs. For complex presentations — co-occurring disorders, multiple treatment episodes, medically complex detox — the right program often exists outside Nevada. A case manager who knows both the local landscape and the national market can make that determination accurately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you help with treatment placement from Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We identify, vet, and place clients in treatment programs both locally in Nevada and across the country. We do not make referrals to programs we have not evaluated. For Las Vegas clients, this means an honest assessment of what is available locally and a clear recommendation when out-of-state placement is the stronger clinical decision.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started with substance use case management in Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call (702) 494-7641 or submit a contact form. We conduct a full clinical intake to understand the situation — history, prior treatment, co-occurring conditions, family context — before making any recommendations. All inquiries are confidential. We respond within one business day.',
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
    { '@type': 'ListItem', position: 3, name: 'Las Vegas', item: `${SITE_URL}/substance-use-case-management-las-vegas` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE_URL}/substance-use-case-management-las-vegas`,
  name: 'Substance Use Case Management Las Vegas',
  description: 'Substance use case management in Las Vegas and Nevada. Licensed clinicians coordinating the full continuum of care — local and nationwide placement.',
  provider: {
    '@type': 'MedicalBusiness',
    '@id': SITE_URL,
    name: 'Holistic Solutions Case Management',
  },
  areaServed: [{ '@type': 'City', name: 'Las Vegas' }, { '@type': 'State', name: 'Nevada' }],
  serviceType: 'Substance Use Case Management',
}

const faqs = [
  { q: 'What does a substance use case manager do in Las Vegas?', a: "A substance use case manager in Las Vegas conducts a clinical assessment, determines the appropriate level of care, and coordinates placement at a vetted treatment program — locally in Nevada or nationally when local options are not the right clinical fit. The case manager manages transitions between levels of care, communicates with providers, and maintains continuity throughout the recovery process. At Holistic Solutions, every case manager is a licensed clinician." },
  { q: 'Why does Las Vegas have such high rates of substance use?', a: "Several factors converge: Las Vegas's hospitality and gaming industry employs hundreds of thousands in high-stress, high-alcohol-access environments. The city operates 24/7 with no last call. A large transient population often lacks social support networks that provide early intervention elsewhere. Nevada consistently ranks among the highest states for substance use disorder rates nationally." },
  { q: 'Are there good substance use treatment programs in Las Vegas?', a: 'Yes, but options are limited relative to population size. Las Vegas has some solid outpatient and IOP options and a small number of residential programs. For complex presentations — co-occurring disorders, multiple treatment episodes, medically complex detox — the right program often exists outside Nevada. A case manager who knows both the local landscape and the national market can make that call accurately.' },
  { q: 'Do you help with treatment placement from Las Vegas?', a: 'Yes. We identify, vet, and place clients in treatment programs locally in Nevada and across the country. We do not refer to programs we have not evaluated. For Las Vegas clients, this means an honest assessment of local options and a clear recommendation when out-of-state placement is the stronger clinical decision.' },
  { q: 'How do I get started with substance use case management in Las Vegas?', a: 'Call (702) 494-7641 or submit a contact form. We conduct a full clinical intake to understand the situation before making any recommendations. All inquiries are confidential. We respond within one business day.' },
]

export default function SubstanceUseCaseManagementLasVegas() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <section className="page-header">
        <p className="section-label">Las Vegas · Substance Use</p>
        <h1>Substance Use Case Management in Las Vegas</h1>
        <p className="page-sub">
          Licensed clinicians coordinating substance use care in Nevada — local knowledge, honest assessments, and national reach when Las Vegas options aren&apos;t the right fit.
        </p>
      </section>

      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <AuthorByline />

            <p className="section-label">Overview</p>
            <h2>Substance use care in a city built around it</h2>
            <p className="service-page-body">
              Las Vegas is one of the most challenging environments in the country for someone navigating a substance use disorder. The 24/7 availability of alcohol, the culture of the gaming and hospitality industry, and a transient population with limited community roots all compound what is already a difficult clinical picture. Nevada consistently ranks among the highest states for substance use disorder rates — and among the lowest for access to clinical care.
            </p>
            <p className="service-page-body">
              Our founder, Jack Foley, LMFT, grew up in Las Vegas. The 702 on our number is not a marketing choice. He has worked with Las Vegas families long enough to know exactly what the local treatment landscape looks like — what is available, what is genuinely good, and where the gaps are significant enough that out-of-state placement is the right clinical call.
            </p>
            <p className="service-page-body">
              Holistic Solutions is actively building its Las Vegas clinical network. For Las Vegas clients, that means a case manager who knows the local providers and has the national reach to place clients anywhere in the country when the clinical picture requires it.
            </p>

            <p className="service-page-body" style={{ marginTop: '1.5rem' }}>
              Call us. <strong><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></strong>. All inquiries are confidential.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">What We Coordinate</p>
              <h2>Levels of care we manage for Las Vegas clients</h2>
              <div className="process-steps" style={{ marginTop: '2rem' }}>
                <div className="step">
                  <span className="step-num">01</span>
                  <div className="step-content">
                    <h4>Clinical Assessment</h4>
                    <p>A biopsychosocial evaluation by a licensed clinician before any recommendation is made. This determines what level of care is actually indicated — not what is most convenient or most available.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">02</span>
                  <div className="step-content">
                    <h4>Detox Coordination</h4>
                    <p>Medically supervised withdrawal management at facilities we have vetted. We coordinate admission, communicate with medical staff, and plan the next level of care before detox ends.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <div className="step-content">
                    <h4>Residential &amp; PHP / IOP Placement</h4>
                    <p>Placement at clinically appropriate programs — locally in Nevada when the right option exists, or nationally when the clinical picture calls for specialized care. We match needs to programs, not programs to availability.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">04</span>
                  <div className="step-content">
                    <h4>Step-Down &amp; Aftercare</h4>
                    <p>Coordination through the full continuum — IOP, outpatient, sober living, and ongoing recovery support. The transition out of higher-level care is the highest-risk window. We stay involved through it.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>&ldquo;Las Vegas has some solid treatment resources. It also has a lot of programs that are not equipped for the complexity of what people in this city are dealing with. Knowing the difference is the job.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions</cite>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Related Services</p>
              <h2>Additional support in Las Vegas</h2>
              <p className="service-page-body">
                Substance use in Las Vegas frequently co-occurs with mental health conditions. We also provide <Link href="/psychosis-case-management-las-vegas">psychosis case management in Las Vegas</Link> and <Link href="/dual-diagnosis-case-management-las-vegas">dual diagnosis case management in Las Vegas</Link> for clients navigating both. When resistance to treatment is the barrier, our <Link href="/clinical-intervention-services">clinical intervention services</Link> can help families move forward.
              </p>
              <p className="service-page-body">
                For a full overview of our Las Vegas services, see our <Link href="/case-management-las-vegas">Las Vegas case management hub</Link>. For national information, see <Link href="/substance-use-case-management">substance use case management</Link>.
              </p>
            </div>
          </div>

          <div className="service-page-sidebar">
            <div className="sidebar-box">
              <p className="section-label">What We Handle</p>
              <ul className="sidebar-list">
                <li>Clinical assessment and level-of-care determination</li>
                <li>Detox coordination — local and national</li>
                <li>Residential and PHP / IOP placement</li>
                <li>Step-down and aftercare planning</li>
                <li>Sober living placement</li>
                <li>Provider communication and care transitions</li>
                <li>Family support and education</li>
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
