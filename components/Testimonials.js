import { testimonials } from '@/lib/content'

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: 'var(--dusk)' }}>
      <div>
        <p className="section-label" data-animate style={{ color: 'var(--clay)' }}>
          What Families Say
        </p>
        <h2 data-split style={{ color: 'var(--white)' }}>
          Recovery is possible. We have seen it happen.
        </h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={t.name} className="testimonial-card" data-animate data-delay={i + 1}>
            <blockquote className="testimonial-text">{t.text}</blockquote>
            <div className="testimonial-author">
              <span className="author-name">{t.name}</span>
              <span className="author-detail">{t.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
