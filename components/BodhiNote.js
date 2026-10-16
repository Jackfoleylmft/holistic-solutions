// A short note on Los Angeles and intervention pages pointing South Bay
// families to Bodhi Wellness Collective, the multi-clinician practice Jack
// co-founded in Hermosa Beach. Holistic Solutions keeps coordinating care
// nationwide; Bodhi is where ongoing therapy, psychiatry, and testing live
// for families in Southern California.
export default function BodhiNote({ href = 'https://bodhiwellnesscollective.com', linkText = 'Bodhi Wellness Collective', lead }) {
  return (
    <section style={{ background: 'var(--white)', paddingTop: 0 }}>
      <div style={{ maxWidth: 820, margin: '0 auto', border: '1px solid rgba(200,190,180,0.35)', borderRadius: 14, padding: '1.6rem 1.8rem' }}>
        <p style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--clay)', marginBottom: '0.6rem' }}>
          In the South Bay?
        </p>
        <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--charcoal)', margin: 0 }}>
          {lead || 'Our founder, Jack Foley, LMFT, also co-founded'}{' '}
          <a href={href} style={{ color: 'var(--charcoal)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}>
            {linkText}
          </a>
          , a multi-clinician practice in Hermosa Beach with therapists, a psychiatrist, and a
          neuropsychologist under one roof. For families in the South Bay who need ongoing therapy,
          psychiatry, or testing alongside case management, care can continue there with people who
          already know the history.
        </p>
      </div>
    </section>
  )
}
