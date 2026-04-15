import Link from 'next/link'

export default function AuthorByline() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', margin: '1.5rem 0', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(200,190,180,0.18)' }}>
      <div>
        <p style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--clay)', marginBottom: '0.2rem' }}>Clinically reviewed by</p>
        <p style={{ fontSize: '0.82rem', color: 'var(--charcoal)', lineHeight: 1.4 }}>
          <Link href="/about" style={{ color: 'var(--charcoal)', fontWeight: 500 }}>Jack Foley, LMFT</Link>
          <span style={{ color: 'var(--warm-gray)', marginLeft: '0.4rem' }}>· Founder &amp; Clinical Director, Holistic Solutions</span>
        </p>
      </div>
    </div>
  )
}
