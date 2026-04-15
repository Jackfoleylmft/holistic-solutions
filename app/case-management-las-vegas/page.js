import Link from 'next/link'
import HomeCTA from '@/components/HomeCTA'
import { SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export const metadata = {
  title: 'Case Management Las Vegas | Holistic Solutions',
  description: 'Clinical case management in Las Vegas for substance use, mental health, and co-occurring disorders. Jack Foley, LMFT — Las Vegas native, building the clinical network this community needs.',
  keywords: 'case management las vegas, substance use case manager las vegas, mental health case management nevada, behavioral health las vegas, clinical case management nevada, addiction case manager las vegas',
  alternates: { canonical: `${SITE_URL}/case-management-las-vegas` },
  openGraph: {
    title: 'Case Management Las Vegas | Holistic Solutions',
    description: 'Clinical case management in Las Vegas for substance use, mental health, and co-occurring disorders. Jack Foley, LMFT — Las Vegas native, building the clinical network this community needs.',
    url: `${SITE_URL}/case-management-las-vegas`,
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What case management services are available in Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Holistic Solutions provides clinical case management in Las Vegas and throughout Nevada for substance use disorders, mental health conditions, co-occurring disorders, clinical intervention services, treatment placement, recovery coaching, companionship and support, and clinical transport. All services are led by licensed clinicians.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Holistic Solutions have a local presence in Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our founder, Jack Foley, LMFT, grew up in Las Vegas and has deep personal roots in this community. We are actively building our Las Vegas clinical team and professional network — including relationships with local treatment programs, psychiatrists, therapists, and sober living providers. Las Vegas is a priority market for us, not an afterthought.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is behavioral health care often hard to access in Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nevada consistently ranks among the states with the highest rates of substance use and mental illness, and among the lowest in access to behavioral health care. Las Vegas has fewer mental health providers per capita than most major U.S. cities. The city\'s 24/7 culture, tourism industry, and social isolation for residents create unique risk factors — while clinical resources have not kept pace with population growth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help with treatment placement from Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We identify, vet, and place clients in appropriate treatment programs both locally in Nevada and nationwide. For Las Vegas residents, we know which local programs are clinically sound and which are not — and we have access to a nationwide network of vetted treatment centers for clients who need to travel for care.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I start the process in Las Vegas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call (702) 494-7641 or submit a contact form. After your initial call, we conduct a full intake assessment to understand your situation and walk you through your options. All inquiries are confidential. We respond within one business day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer remote services for Las Vegas clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Remote assessments, care coordination, care plan management, and treatment placement are all available by phone and video. For clients who need in-person support, we coordinate local services through our growing Las Vegas network.',
      },
    },
    {
      '@type': 'Question',
      name: 'What makes Holistic Solutions different from other behavioral health providers in Nevada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every case manager holds current clinical licensure. Every intervention is led by a master\'s-level licensed clinician — not a certified interventionist. Our founder grew up in Las Vegas and has both clinical expertise and personal recovery experience. That combination of credentials, lived experience, and local roots is rare in the Nevada behavioral health market.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Case Management Las Vegas', item: `${SITE_URL}/case-management-las-vegas` },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://hscasemanagement.com/case-management-las-vegas',
  name: 'Clinical Case Management Las Vegas',
  description: 'Clinical case management in Las Vegas and Nevada for substance use, mental health, and co-occurring disorders. Licensed clinicians. In-person and remote.',
  provider: {
    '@type': 'MedicalBusiness',
    '@id': 'https://hscasemanagement.com',
    name: 'Holistic Solutions Case Management',
  },
  areaServed: [
    { '@type': 'City', name: 'Las Vegas' },
    { '@type': 'State', name: 'Nevada' },
  ],
  serviceType: 'Clinical Case Management',
}

const localSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Holistic Solutions Case Management',
  url: SITE_URL,
  telephone: '+17024947641',
  email: 'info@hscasemanagement.com',
  areaServed: [
    { '@type': 'City', name: 'Las Vegas' },
    { '@type': 'State', name: 'Nevada' },
    { '@type': 'Country', name: 'United States' },
  ],
  openingHours: 'Mo-Fr 08:00-18:00',
}

const faqs = [
  { q: 'What case management services are available in Las Vegas?', a: 'Holistic Solutions provides clinical case management in Las Vegas and throughout Nevada for substance use disorders, mental health conditions, co-occurring disorders, clinical intervention services, treatment placement, recovery coaching, companionship and support, and clinical transport. All services are led by licensed clinicians.' },
  { q: 'Does Holistic Solutions have a local presence in Las Vegas?', a: 'Yes. Our founder, Jack Foley, LMFT, grew up in Las Vegas and has deep personal roots in this community. We are actively building our Las Vegas clinical team and professional network — including relationships with local treatment programs, psychiatrists, therapists, and sober living providers. Las Vegas is a priority market for us, not an afterthought.' },
  { q: 'Why is behavioral health care often hard to access in Las Vegas?', a: "Nevada consistently ranks among the states with the highest rates of substance use and mental illness, and among the lowest in access to behavioral health care. Las Vegas has fewer mental health providers per capita than most major U.S. cities. The city's 24/7 culture, tourism industry, and social isolation for residents create unique risk factors — while clinical resources have not kept pace with population growth." },
  { q: 'Can you help with treatment placement from Las Vegas?', a: 'Yes. We identify, vet, and place clients in appropriate treatment programs both locally in Nevada and nationwide. For Las Vegas residents, we know which local programs are clinically sound and which are not — and we have access to a nationwide network of vetted treatment centers for clients who need to travel for care.' },
  { q: 'How do I start the process in Las Vegas?', a: 'Call (702) 494-7641 or submit a contact form. After your initial call, we conduct a full intake assessment to understand your situation and walk you through your options. All inquiries are confidential. We respond within one business day.' },
  { q: 'Do you offer remote services for Las Vegas clients?', a: 'Yes. Remote assessments, care coordination, care plan management, and treatment placement are all available by phone and video. For clients who need in-person support, we coordinate local services through our growing Las Vegas network.' },
  { q: 'What makes Holistic Solutions different from other behavioral health providers in Nevada?', a: "Every case manager holds current clinical licensure. Every intervention is led by a master's-level licensed clinician — not a certified interventionist. Our founder grew up in Las Vegas and has both clinical expertise and personal recovery experience. That combination of credentials, lived experience, and local roots is rare in the Nevada behavioral health market." },
]

export default function CaseManagementLasVegas() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      <section className="page-header">
        <p className="section-label">Las Vegas</p>
        <h1>Case Management in Las Vegas — Clinical Support for an Underserved Community</h1>
        <p className="page-sub">
          Our founder grew up here. Las Vegas is one of the most underserved behavioral health markets in the country — and we are building the team and network this community deserves.
        </p>
      </section>

      <section>
        <div className="service-page-layout">
          <div className="service-page-main">
            <p className="section-label">Overview</p>
            <h2>Rooted in Las Vegas. Committed to closing the gap.</h2>
            <p className="service-page-body">
              Jack Foley, LMFT — the founder of Holistic Solutions — grew up in Las Vegas. That 702 area code on our number is not a coincidence. This is home, and the lack of quality clinical case management available to Las Vegas families is something he has seen up close, long before building this practice.
            </p>
            <p className="service-page-body">
              Nevada consistently ranks among the highest states for substance use and mental illness, and among the lowest for access to care. Las Vegas has fewer licensed mental health providers per capita than most comparable U.S. cities. The city&apos;s round-the-clock culture, transient population, and the unique pressures of the hospitality and gaming industries create a set of risk factors that are real — and that the existing clinical infrastructure has not kept pace with.
            </p>
            <p className="service-page-body">
              Holistic Solutions is actively building its Las Vegas presence: establishing clinical relationships with local treatment programs, partnering with Nevada-licensed providers, and developing the kind of trusted local network that gets people into the right care — quickly and without the guesswork.
            </p>

            <p className="service-page-body" style={{ marginTop: '1.5rem' }}>
              Call us. <strong><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></strong>. All inquiries are confidential.
            </p>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Why Las Vegas</p>
              <h2>An underserved community that deserves better</h2>
              <p className="service-page-body">
                Las Vegas was built around an industry that runs on alcohol, late nights, and the deliberate removal of consequences. For the 2.2 million people who actually live here — not visit — that environment creates real clinical challenges.
              </p>
              <p className="service-page-body">
                Hospitality and gaming workers face disproportionate rates of substance use, depression, and anxiety. Residents without that industry connection often find themselves isolated in a city designed for visitors, not community. And when someone reaches a breaking point and looks for help, the behavioral health infrastructure in Clark County is thin. Long wait times, limited specialized providers, and a shortage of programs equipped to handle complex presentations like co-occurring disorders or psychosis alongside substance use.
              </p>
              <p className="service-page-body">
                Clinical case management exists precisely to solve this problem: a licensed clinician who knows the landscape, can assess what someone actually needs, and can get them there — locally or nationwide, depending on what the clinical picture requires.
              </p>
            </div>

            <div className="process-callout" style={{ marginTop: '3rem' }}>
              <blockquote>&ldquo;I grew up in Las Vegas. I know what this city asks of the people who live here, and I know how little has historically been available when someone hits a wall. That is exactly why building a serious clinical presence here matters to me.&rdquo;</blockquote>
              <cite>— Jack Foley, LMFT · Founder, Holistic Solutions · Las Vegas, NV</cite>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Services in Las Vegas</p>
              <h2>What we offer in Nevada</h2>
              <div className="process-steps" style={{ marginTop: '2rem' }}>
                <div className="step">
                  <span className="step-num">01</span>
                  <div className="step-content">
                    <h4>Substance Use Case Management</h4>
                    <p>Coordinated care for alcohol and drug use disorders — assessment, treatment placement, ongoing case management across all levels of care. Local Nevada options and nationwide placement both available. <Link href="/substance-use-case-management">Learn more</Link>.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">02</span>
                  <div className="step-content">
                    <h4>Mental Health &amp; Psychosis Case Management</h4>
                    <p>Specialized coordination for psychotic disorders, first-episode psychosis, and complex mental health presentations. Clinical assessment and placement into programs equipped to treat these conditions properly. <Link href="/psychosis-case-management">Learn more</Link>.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">03</span>
                  <div className="step-content">
                    <h4>Co-Occurring Disorders</h4>
                    <p>Integrated case management for clients navigating both substance use and mental health conditions simultaneously. Las Vegas has a high prevalence of co-occurring presentations — this is where proper case management makes the biggest difference. <Link href="/co-occurring-disorders-case-management">Learn more</Link>.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">04</span>
                  <div className="step-content">
                    <h4>Clinical Intervention Services</h4>
                    <p>Structured interventions led by master&apos;s-level licensed clinicians — not certified interventionists. Pre-intervention planning, family preparation, clinical facilitation, and immediate treatment placement. <Link href="/clinical-intervention-services">Learn more</Link>.</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">05</span>
                  <div className="step-content">
                    <h4>Treatment Placement — Local &amp; Nationwide</h4>
                    <p>We identify and vet treatment programs in Nevada and across the country. For Las Vegas clients, we know which local programs are clinically equipped and which are not. When local options are the wrong fit, we place clients nationally with the same rigor.</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Building the Network</p>
              <h2>A growing Las Vegas clinical team</h2>
              <p className="service-page-body">
                Holistic Solutions is in active development of its Las Vegas clinical infrastructure. That means establishing direct working relationships with Nevada-licensed psychiatrists, therapists, and outpatient providers. Vetting local treatment centers and sober living homes. Building the referral channels that allow us to move quickly when someone needs care.
              </p>
              <p className="service-page-body">
                We are deliberate about this. We do not make referrals to programs we have not evaluated. We do not work with providers we do not trust. As the Las Vegas network grows, every addition is one we can stand behind.
              </p>
              <p className="service-page-body">
                In the interim — and for cases requiring programs not yet available locally — our nationwide network of vetted treatment centers, residential programs, and clinical specialists means Las Vegas clients are never limited to local options alone.
              </p>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <p className="section-label">Nationwide Reach</p>
              <h2>Las Vegas is home. Everywhere else is covered too.</h2>
              <p className="service-page-body">
                Holistic Solutions serves clients in all 50 states. Remote assessments, care coordination, and nationwide treatment placement are available regardless of where someone is located. Las Vegas clients benefit from both our growing local presence and our established national network.
              </p>
            </div>
          </div>

          <div className="service-page-sidebar">
            <div className="sidebar-box">
              <p className="section-label">Las Vegas Services</p>
              <ul className="sidebar-list">
                <li>Substance use case management</li>
                <li>Mental health &amp; psychosis coordination</li>
                <li>Co-occurring disorders</li>
                <li>Clinical intervention services</li>
                <li>Treatment placement — local &amp; national</li>
                <li>Recovery coaching</li>
                <li>Companionship and support</li>
                <li>Clinical transport</li>
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
            {faqs.slice(0, 4).map((item) => (
              <details key={item.q}>
                <summary>{item.q}<span className="faq-icon" aria-hidden="true">+</span></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
          <div>
            {faqs.slice(4).map((item) => (
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
