import Link from 'next/link'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} Holistic Solutions LLC · Los Angeles, CA · Serving Clients
        Nationwide · All rights reserved.
      </p>
      <p>
        <a href={PHONE_HREF}>{PHONE_DISPLAY}</a> · <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
      <p>
        <Link href="/privacy">Privacy Policy</Link> · <Link href="/terms">Terms of Service</Link> ·{' '}
        <Link href="/hipaa">HIPAA Notice</Link>
      </p>
    </footer>
  )
}
