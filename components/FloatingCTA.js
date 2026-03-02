'use client'

import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed) {
        setShow(window.scrollY > 400)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed])

  function dismiss() {
    setDismissed(true)
    setShow(false)
  }

  return (
    <div className={`floating-cta${show ? ' show' : ''}`}>
      <span className="floating-cta-label">Need help now?</span>
      <div className="floating-cta-buttons">
        <a href="tel:+17024947641" className="fcta-call">
          <span className="fcta-icon">📞</span> (702) 494-7641
        </a>
        <a href="#contact" className="fcta-consult">
          <span className="fcta-icon">✉</span> Free Consultation
        </a>
      </div>
      <button className="floating-cta-dismiss" onClick={dismiss}>
        Dismiss
      </button>
    </div>
  )
}
