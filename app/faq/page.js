import FAQ from '@/components/FAQ'
import HomeCTA from '@/components/HomeCTA'

export const metadata = {
  title: 'FAQ | Holistic Solutions Case Management',
  description: 'Frequently asked questions about clinical case management, intervention services, treatment placement, and working with Holistic Solutions Case Management.',
}

export default function FAQPage() {
  return (
    <>
      <FAQ />
      <HomeCTA />
    </>
  )
}
