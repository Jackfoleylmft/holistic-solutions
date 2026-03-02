const cards = [
  {
    title: 'Individuals',
    body: 'If you are ready to make a change, we meet you exactly where you are. No judgment, no pressure. Just a clear path forward.',
  },
  {
    title: 'Families',
    body: 'When someone you love is struggling, we step in to guide families through every decision — from the first call to long-term aftercare.',
  },
  {
    title: 'Healthcare Providers',
    body: 'A trusted partner for physicians, hospitals, and therapists who need a reliable, clinically-informed team for placement and coordination.',
  },
  {
    title: 'Executives & Professionals',
    body: 'Discreet, private, and tailored to high-demand lifestyles. We protect your privacy while getting the right level of care.',
  },
  {
    title: 'Legal & EAP Professionals',
    body: 'Courts, attorneys, and EAPs rely on us for prompt assessment, placement, and documentation delivered with professional integrity.',
  },
  {
    title: 'Young Adults & Adolescents',
    body: 'Specialized case management for younger clients with age-appropriate programming and meaningful family involvement.',
  },
]

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" style={{ background: 'var(--white)' }}>
      <p className="section-label">Who We Serve</p>
      <h2>
        Built for families, individuals,
        <br />
        and the providers who support them.
      </h2>
      <div className="who-serve-grid">
        {cards.map((c) => (
          <div key={c.title} className="serve-card">
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
