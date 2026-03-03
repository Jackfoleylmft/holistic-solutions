import Link from 'next/link'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export default function HomeCTA() {
  return (
    <section className="home-cta-section">
      <p className="section-label home-cta-label">Get Started</p>
      <h2 className="home-cta-heading" data-split>Reach out. We&apos;ll take it from here.</h2>
      <p className="section-intro home-cta-intro">
        All inquiries are confidential. A member of our team will respond within one business day —
        wherever you are in the US.
      </p>
      <div className="home-cta-buttons">
        <Link href="/contact" className="btn btn-primary">
          Send Us a Message
        </Link>
        <a href={PHONE_HREF} className="btn btn-secondary home-cta-phone">
          {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  )
}
