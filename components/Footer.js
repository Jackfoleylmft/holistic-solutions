import Link from 'next/link'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL, GOOGLE_REVIEW_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col">
          <p className="footer-heading">Services</p>
          <Link href="/substance-use-case-management">Substance Use Case Management</Link>
          <Link href="/psychosis-case-management">Psychosis Case Management</Link>
          <Link href="/co-occurring-disorders-case-management">Co-Occurring Disorders</Link>
          <Link href="/clinical-intervention-services">Clinical Intervention Services</Link>
          <Link href="/services">All Services</Link>
        </div>
        <div className="footer-col">
          <p className="footer-heading">Locations</p>
          <Link href="/case-management-los-angeles">Los Angeles</Link>
          <Link href="/case-management-new-york-city">New York City</Link>
          <p className="footer-heading" style={{ marginTop: '1rem' }}>Specialties</p>
          <Link href="/alcohol-use-disorder-case-management">Alcohol Use Disorder</Link>
          <Link href="/opioid-addiction-case-management">Opioid Addiction</Link>
          <Link href="/schizophrenia-case-management">Schizophrenia</Link>
          <Link href="/first-episode-psychosis-case-management">First Episode Psychosis</Link>
        </div>
        <div className="footer-col">
          <p className="footer-heading">Company</p>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <p className="footer-heading" style={{ marginTop: '1rem' }}>Contact</p>
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">Leave a Google Review</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Holistic Solutions LLC · Los Angeles, CA · Serving Clients
          Nationwide · All rights reserved.
        </p>
        <p>
          <Link href="/privacy">Privacy Policy</Link> · <Link href="/terms">Terms of Service</Link> ·{' '}
          <Link href="/hipaa">HIPAA Notice</Link>
        </p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.72rem', color: 'var(--adobe)' }}>
          Website by{' '}
          <a href="https://chiefcomplaintmedia.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
            Chief Complaint Media
          </a>
        </p>
      </div>
    </footer>
  )
}
