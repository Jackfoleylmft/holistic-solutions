import FAQ from '@/components/FAQ'
import HomeCTA from '@/components/HomeCTA'

export const metadata = {
  title: 'FAQ | Holistic Solutions Case Management',
  description: 'Frequently asked questions about clinical case management, intervention services, treatment placement, and working with Holistic Solutions Case Management.',
  alternates: { canonical: 'https://hscasemanagement.com/faq' },
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
        // Note: phone number also lives in lib/constants.js — keep schema string in sync
      },
    },
  ],
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />
      <FAQ />
      <HomeCTA />
    </>
  )
}
