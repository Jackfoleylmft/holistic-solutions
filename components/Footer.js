import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} Holistic Solutions LLC · Los Angeles, CA · Serving Clients
        Nationwide · All rights reserved.
      </p>
      <p>
        <Link href="/privacy">Privacy Policy</Link> · <Link href="/terms">Terms of Service</Link> ·{' '}
        <Link href="/hipaa">HIPAA Notice</Link>
      </p>
    </footer>
  )
}
