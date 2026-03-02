'use client'

import { useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  function close() { setOpen(false) }

  return (
    <>
      <nav>
        <Link href="/" className="logo">
          Holistic <span>Solutions</span>
        </Link>
        <ul>
          {links.map((l) => (
            <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
          ))}
          <li><Link href="/contact" className="nav-cta">Get Started</Link></li>
        </ul>
        <button
          className={`hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={close}>{l.label}</Link>
        ))}
        <Link href="/contact" className="mobile-cta" onClick={close}>Get Started</Link>
      </div>
    </>
  )
}
