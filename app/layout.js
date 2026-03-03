import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'
import CrisisBar from '@/components/CrisisBar'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'
import AnimationObserver from '@/components/AnimationObserver'
import { PHONE_HREF, EMAIL, SITE_URL, BUSINESS_NAME } from '@/lib/constants'

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
  metadataBase: new URL(SITE_URL),
  title: 'Clinical Case Management — Nationwide | Holistic Solutions',
  description:
    'Masters-level clinical case management for substance use, mental health, co-occurring disorders, and intervention services. Headquartered in Los Angeles, CA — serving individuals and families across the United States.',
  keywords:
    'clinical case management, substance use case manager, mental health case management, co-occurring disorders, clinical intervention services, masters level interventionist, licensed clinician intervention, treatment placement, recovery coaching, companionship services, sober coaching, safe clinical transport, behavioral health case management, nationwide case management, substance abuse help, addiction case manager',
  authors: [{ name: 'Holistic Solutions LLC' }],
  robots: 'index, follow',
  verification: {
    google: '276MvZQU8uXctJ2kzuTIr7Z0I7kl2smLuOPg4zSTiuA',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Clinical Case Management — Nationwide | Holistic Solutions',
    description:
      'Masters-level clinical case management for substance use, mental health, co-occurring disorders, and intervention services. Headquartered in Los Angeles, CA — serving individuals and families across the United States.',
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Clinical Case Management — Nationwide | Holistic Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinical Case Management — Nationwide | Holistic Solutions',
    description:
      'Masters-level clinical case management for substance use, mental health, co-occurring disorders, and intervention services. Headquartered in Los Angeles, CA — serving individuals and families across the United States.',
    images: ['/opengraph-image'],
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'ProfessionalService'],
  name: BUSINESS_NAME,
  description:
    'Nationwide clinical case management for substance use, mental health, co-occurring disorders, and intervention services. Headquartered in Los Angeles, California.',
  url: SITE_URL,
  telephone: '+17024947641',
  email: EMAIL,
  priceRange: '$$$',
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
  sameAs: [
    'https://www.linkedin.com/in/jack-foley-m-a-lmft-25a462133/',
    'https://www.therapyden.com/therapist/jack-foley',
    // Add Psychology Today, CAMFT, AAMFT profile URLs as they go live
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Clinical Case Management Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Substance Use Case Management', url: `${SITE_URL}/services/substance-use` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mental Health Case Management', url: `${SITE_URL}/services/mental-health` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Co-Occurring Disorders Case Management', url: `${SITE_URL}/services/co-occurring-disorders` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Clinical Intervention Services', url: `${SITE_URL}/services/intervention-services` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Treatment Placement Services', url: `${SITE_URL}/services/treatment-placement` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Recovery Coaching', url: `${SITE_URL}/services/recovery-coaching` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Companionship & Support Services', url: `${SITE_URL}/services/companionship-support` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Safe & Clinical Transport', url: `${SITE_URL}/services/safe-transport` } },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9N3BJGHJ6C" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9N3BJGHJ6C');
            `,
          }}
        />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Los Angeles, California" />
        <meta name="geo.position" content="34.0522;-118.2437" />
        <meta name="ICBM" content="34.0522, -118.2437" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <CrisisBar />
        <FloatingCTA />
        <AnimationObserver />
      </body>
    </html>
  )
}
