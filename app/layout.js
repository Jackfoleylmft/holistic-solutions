import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://hscasemanagement.com'),
  title: 'Holistic Solutions | Clinical Case Management – Nationwide Services',
  description:
    'Holistic Solutions provides clinical case management for substance use, mental health, co-occurring disorders, and intervention services across the United States. Headquartered in Los Angeles, CA.',
  keywords:
    'clinical case management, substance use case manager, mental health case management, co-occurring disorders, clinical intervention services, masters level interventionist, licensed clinician intervention, treatment placement, recovery coaching, companionship services, sober coaching, safe clinical transport, behavioral health case management, nationwide case management, substance abuse help, addiction case manager',
  authors: [{ name: 'Holistic Solutions LLC' }],
  robots: 'index, follow',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Holistic Solutions | Clinical Case Management – Nationwide',
    description:
      'Individualized case management for substance use, mental health, co-occurring disorders, and intervention services. Serving clients across the United States.',
    type: 'website',
    locale: 'en_US',
    url: 'https://hscasemanagement.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Holistic Solutions | Clinical Case Management – Nationwide',
    description:
      'Individualized case management for substance use, mental health, co-occurring disorders, and intervention services. Serving clients across the United States.',
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Holistic Solutions LLC',
  description:
    'Nationwide clinical case management for substance use, mental health, co-occurring disorders, and intervention services. Headquartered in Los Angeles, California.',
  url: 'https://hscasemanagement.com',
  telephone: '+17024947641',
  email: 'info@holisticsolutions.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  medicalSpecialty: [
    'Substance Use',
    'Mental Health',
    'Co-Occurring Disorders',
    'Intervention Services',
    'Treatment Placement',
    'Recovery Coaching',
    'Companionship Services',
    'Safe Clinical Transport',
  ],
  openingHours: 'Mo-Fr 08:00-18:00',
  founder: {
    '@type': 'Person',
    name: 'Jack Foley',
    jobTitle: 'Founder and Clinical Director',
    hasCredential: ['LMFT', 'M.S. Clinical Psychology', 'B.S. Psychology'],
  },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is clinical case management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Clinical case management is a collaborative process in which a licensed professional works with an individual to assess their needs, create a care plan, coordinate services, and monitor progress over time. It bridges the gap between a person and the clinical and community resources they need.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is case management for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Case management is for individuals navigating substance use, mental health challenges, or both — as well as their families. It is especially helpful when the healthcare system feels overwhelming, when past treatment has not worked, or when multiple needs require coordination.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Holistic Solutions offer services nationwide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Holistic Solutions provides clinical case management and intervention services to clients across the United States. We are headquartered in Los Angeles, CA and work with individuals and families nationally via telehealth and on-site coordination.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between case management and therapy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Therapy focuses on the therapeutic relationship and emotional processing. Case management focuses on coordination, navigation, and logistics — connecting you to the right providers, managing your care plan, and removing barriers to treatment. Both are often used together.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can we get started with Holistic Solutions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We respond to all inquiries within one business day and can often schedule an initial consultation within 48 hours. For urgent situations, please call us directly at (702) 494-7641.',
      },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Los Angeles, California" />
        <meta name="geo.position" content="34.0522;-118.2437" />
        <meta name="ICBM" content="34.0522, -118.2437" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
