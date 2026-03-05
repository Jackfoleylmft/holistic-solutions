import Contact from '@/components/Contact'
import { SITE_URL } from '@/lib/constants'

export const metadata = {
  title: 'Contact | Holistic Solutions Case Management — Get Started Today',
  description: 'Reach out to Holistic Solutions Case Management. All inquiries are confidential. A member of our clinical team will respond within one business day.',
  alternates: { canonical: `${SITE_URL}/contact` },
}

export default function ContactPage() {
  return <Contact />
}
