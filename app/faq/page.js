import FAQ from '@/components/FAQ'
import HomeCTA from '@/components/HomeCTA'
import { faqs } from '@/lib/content'
import { SITE_URL } from '@/lib/constants'

export const metadata = {
  title: 'FAQ | Holistic Solutions Case Management',
  description: 'Frequently asked questions about clinical case management, intervention services, treatment placement, and working with Holistic Solutions Case Management.',
  alternates: { canonical: `${SITE_URL}/faq` },
}

const schemaFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.flat().map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
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
