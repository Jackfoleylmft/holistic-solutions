'use client'

import { useState, useEffect } from 'react'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants'

export default function FloatingCTA() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    // Persist dismiss state across page loads
    const wasDismissed = localStorage.getItem('floatingCtaDismissed') === 'true'
    if (wasDismissed) {
      setDismissed(true)
      return
    }

    const handleScroll = () => {
      setShow(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function dismiss() {
    setDismissed(true)
    setShow(false)
    localStorage.setItem('floatingCtaDismissed', 'true')
  }

  if (dismissed) return null

  return (
    <div className={`floating-cta${show ? ' show' : ''}`} role="complementary" aria-label="Quick contact options">
      <span className="floating-cta-label">Need help now?</span>
      <div className="floating-cta-buttons">
        <a href={PHONE_HREF} className="fcta-call" aria-label={`Call us at ${PHONE_DISPLAY}`}>
          <svg className="fcta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="16" height="16">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.02 1.18 2 2 0 012 .02h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          {PHONE_DISPLAY}
        </a>
        <a href="/contact" className="fcta-consult" aria-label="Request a free consultation">
          <svg className="fcta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" width="16" height="16">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Free Consultation
        </a>
      </div>
      <button className="floating-cta-dismiss" onClick={dismiss} aria-label="Dismiss this prompt">
        Dismiss
      </button>
    </div>
  )
}
