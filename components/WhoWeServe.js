import { whoWeServeCards } from '@/lib/content'

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" style={{ background: 'var(--white)' }}>
      <div data-animate>
        <p className="section-label">Who We Serve</p>
        <h2>
          Built for families, individuals,
          <br />
          and the providers who support them.
        </h2>
      </div>
      <div className="who-serve-grid">
        {whoWeServeCards.map((c, i) => (
          <div key={c.title} className="serve-card" data-animate data-delay={i + 1}>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
