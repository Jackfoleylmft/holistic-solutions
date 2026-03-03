import { testimonials } from '@/lib/content'

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: 'var(--dusk)' }}>
      <p className="section-label" style={{ color: 'var(--clay)' }}>
        What Families Say
      </p>
      <h2 style={{ color: 'var(--white)' }}>
        Recovery is possible. We have seen it happen.
      </h2>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div key={t.name} className="testimonial-card">
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
