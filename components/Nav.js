'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

const serviceLinks = [
  { href: '/substance-use-case-management', label: 'Substance Use Case Management' },
  { href: '/psychosis-case-management', label: 'Psychosis Case Management' },
  { href: '/co-occurring-disorders-case-management', label: 'Co-Occurring Disorders' },
  { href: '/clinical-intervention-services', label: 'Clinical Intervention Services' },
  { href: '/case-management-las-vegas', label: 'Case Management — Las Vegas' },
  { href: '/case-management-los-angeles', label: 'Case Management — Los Angeles' },
  { href: '/case-management-new-york-city', label: 'Case Management — New York City' },
]

const topLinks = [
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQ' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const pathname = usePathname()

  const close = useCallback(() => {
    setOpen(false)
    setDropdownOpen(false)
    setMobileServicesOpen(false)
  }, [])

  useEffect(() => { close() }, [pathname, close])

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [close])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      <nav aria-label="Main navigation">
        <Link href="/" className="logo">
          Holistic <span>Solutions</span>
        </Link>
        <ul>
          <li className="nav-dropdown" ref={dropdownRef}>
            <button
              className="nav-dropdown-toggle"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
            >
              Services <span className="nav-dropdown-arrow" aria-hidden="true">▾</span>
            </button>
            {dropdownOpen && (
              <div className="nav-dropdown-menu">
                <Link href="/services" onClick={() => setDropdownOpen(false)}>All Services</Link>
                <div className="nav-dropdown-divider" />
                {serviceLinks.map((l) => (
                  <Link key={l.href} href={l.href} onClick={() => setDropdownOpen(false)}>{l.label}</Link>
                ))}
              </div>
            )}
          </li>
          {topLinks.map((l) => (
            <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
          ))}
          <li><a href={PHONE_HREF} className="nav-phone">{PHONE_DISPLAY}</a></li>
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
        <button
          className="mobile-services-toggle"
          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          aria-expanded={mobileServicesOpen}
        >
          Services <span aria-hidden="true">{mobileServicesOpen ? '−' : '+'}</span>
        </button>
        {mobileServicesOpen && (
          <div className="mobile-services-sub">
            <Link href="/services" onClick={close}>All Services</Link>
            {serviceLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={close}>{l.label}</Link>
            ))}
          </div>
        )}
        {topLinks.map((l) => (
          <Link key={l.href} href={l.href} onClick={close}>{l.label}</Link>
        ))}
        <a href={PHONE_HREF} className="mobile-phone" onClick={close}>{PHONE_DISPLAY}</a>
        <Link href="/contact" className="mobile-cta" onClick={close}>Get Started</Link>
      </div>
    </>
  )
}
