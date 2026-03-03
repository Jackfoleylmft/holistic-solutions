'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const close = useCallback(() => setOpen(false), [])

  // Close on route change
  useEffect(() => {
    close()
  }, [pathname, close])

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && open) close()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, close])

  return (
    <>
      <nav aria-label="Main navigation">
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
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={close}>{l.label}</Link>
        ))}
        <Link href="/contact" className="mobile-cta" onClick={close}>Get Started</Link>
      </div>
    </>
  )
}
