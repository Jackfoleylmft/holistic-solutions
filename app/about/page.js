import About from '@/components/About'
import Founder from '@/components/Founder'
import Process from '@/components/Process'
import { processSteps } from '@/lib/content'
import { SITE_URL, BUSINESS_NAME } from '@/lib/constants'

export const metadata = {
  title: 'About | Holistic Solutions Case Management — Jack Foley, LMFT',
  description: 'Learn about Jack Foley, LMFT, founder of Holistic Solutions Case Management. Licensed clinician, behavioral health case manager, and advocate for individuals and families navigating substance use and mental health challenges.',
  alternates: { canonical: `${SITE_URL}/about` },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jack Foley',
  jobTitle: 'Licensed Marriage and Family Therapist',
  description:
    'Founder and Clinical Director of Holistic Solutions Case Management. Specializes in substance use disorders, co-occurring conditions, and psychosis. Over a decade of clinical experience in behavioral health case management.',
  url: `${SITE_URL}/about`,
  worksFor: {
    '@type': 'Organization',
    name: BUSINESS_NAME,
    url: SITE_URL,
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'license',
      name: 'Licensed Marriage and Family Therapist (LMFT)',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'Master of Science in Clinical Psychology',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'degree',
      name: 'Bachelor of Science in Psychology',
    },
  ],
  knowsAbout: [
    'Substance Use Disorders',
    'Psychosis',
    'Co-Occurring Disorders',
    'Clinical Case Management',
    'Intervention Services',
    'Treatment Placement',
    'Behavioral Health',
    'Mental Health',
    'Recovery Coaching',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Get Started with Clinical Case Management',
  description:
    'A simple, structured process to begin clinical case management services with Holistic Solutions.',
  step: processSteps.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.title,
    text: s.body,
  })),
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <About />
      <Founder />
      <Process />
    </>
  )
}
