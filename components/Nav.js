'use client'

import { useState } from 'react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#who-we-serve', label: 'Who We Serve' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#founder', label: 'Our Founder' },
  { href: '#faq', label: 'FAQ' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  function close() { setOpen(false) }

  return (
    <>
      <nav>
        <a href="#home" className="logo">
          Holistic <span>Solutions</span>
        </a>
        <ul>
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
          <li><a href="#contact" className="nav-cta">Get Started</a></li>
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
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a href="#contact" className="mobile-cta" onClick={close}>Get Started</a>
      </div>
    </>
  )
}
