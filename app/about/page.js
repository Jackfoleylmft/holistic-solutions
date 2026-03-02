import About from '@/components/About'
import Founder from '@/components/Founder'

export const metadata = {
  title: 'About | Holistic Solutions — Jack Foley, LMFT',
  description: 'Learn about Jack Foley, LMFT, founder of Holistic Solutions LLC. Licensed clinician, behavioral health case manager, and advocate for individuals and families navigating substance use and mental health challenges.',
}

export default function AboutPage() {
  return (
    <>
      <About />
      <Founder />
    </>
  )
}
