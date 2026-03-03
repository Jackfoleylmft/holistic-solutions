'use client'

import { useState } from 'react'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL } from '@/lib/constants'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'xreavvjn'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')

    const data = new FormData(e.target)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <p className="section-label">Get Started</p>
      <h2>Reach out. We&apos;ll take it from here.</h2>
      <p className="section-intro">
        All inquiries are confidential. A member of our team will respond within one business day —
        wherever you are in the US.
      </p>
      <div className="contact-layout">
        <div className="contact-info">
          <div className="contact-item">
            <h4>Phone</h4>
            <p><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></p>
          </div>
          <div className="contact-item">
            <h4>Email</h4>
            <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
          </div>
          <div className="contact-item">
            <h4>Service Area</h4>
            <p>Nationwide · Headquartered in<br />Los Angeles, CA</p>
          </div>
          <div className="contact-item">
            <h4>Hours</h4>
            <p>Monday – Friday, 8am – 6pm<br />Urgent consultations by appointment</p>
          </div>
          <div className="contact-item">
            <h4>Crisis Line</h4>
            <p>Call or text <strong style={{ color: 'var(--clay)' }}>988</strong> for immediate crisis support</p>
          </div>
        </div>

        {status === 'success' ? (
          <div className="form-success" role="status">
            <strong>Message received.</strong> Thank you for reaching out. A member of our team
            will be in touch within one business day. If this is urgent, please call us directly
            at <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>.
          </div>
        ) : (
          <form onSubmit={handleSubmit} aria-busy={status === 'submitting'} noValidate>
            <div className="form-row">
              <div className="field">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstName" placeholder="Jane" required />
              </div>
              <div className="field">
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastName" placeholder="Smith" required />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="jane@email.com" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone (optional)</label>
                <input type="tel" id="phone" name="phone" placeholder="(555) 000-0000" inputMode="tel" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="inquiry">Nature of Inquiry</label>
              <select id="inquiry" name="inquiry" defaultValue="">
                <option value="" disabled>Select one</option>
                <option>I am seeking support for myself</option>
                <option>I am a family member seeking help for a loved one</option>
                <option>I am a healthcare / referral provider</option>
                <option>I have a question about services</option>
                <option>Other</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="service">Service of Interest</label>
              <select id="service" name="service" defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Substance Use Case Management</option>
                <option>Mental Health Case Management</option>
                <option>Co-Occurring Disorders</option>
                <option>Intervention Services</option>
                <option>Not sure — need guidance</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Share any additional context. This helps us prepare for your consultation."
                maxLength={1000}
              />
            </div>
            {status === 'error' && (
              <p className="form-error" role="alert" aria-live="polite">
                Something went wrong. Please try again or call us at{' '}
                <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>.
              </p>
            )}
            <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
            <p className="form-note">
              This form does not collect sensitive health information. All submissions are handled
              confidentially. By submitting you agree to be contacted by Holistic Solutions LLC
              regarding your inquiry.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
