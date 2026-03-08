import Link from 'next/link'
import HeroParallax from './HeroParallax'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/constants'

export default function Hero() {
  return (
    <HeroParallax>
      <div className="hero-inner">
        <span className="hero-label">
          Clinical Case Management · Nationwide · HQ Los Angeles, CA
        </span>
        <h1 data-split>
          Clinical case management for the
          <br />
          <em>whole person.</em>
        </h1>
        <p className="hero-sub">
          Holistic Solutions provides individualized case management for substance use, mental
          health, co-occurring disorders, and intervention services, guiding individuals and
          families across the United States toward lasting recovery. Our roots are in the most
          complex cases: substance use disorders and psychosis are where our clinical depth runs
          deepest.
        </p>
        <div className="hero-actions">
          <Link href="/contact" className="btn btn-primary">
            Request a Consultation
          </Link>
          <a href={PHONE_HREF} className="btn btn-secondary">
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </HeroParallax>
  )
}
