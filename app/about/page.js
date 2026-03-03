import About from '@/components/About'
import Founder from '@/components/Founder'

export const metadata = {
  title: 'About | Holistic Solutions Case Management — Jack Foley, LMFT',
  description: 'Learn about Jack Foley, LMFT, founder of Holistic Solutions Case Management. Licensed clinician, behavioral health case manager, and advocate for individuals and families navigating substance use and mental health challenges.',
  alternates: { canonical: 'https://hscasemanagement.com/about' },
}

export default function AboutPage() {
  return (
    <>
      <About />
      <Founder />
    </>
  )
}
