const testimonials = [
  {
    text: '"We had no idea where to turn. Our son had been in and out of treatment for three years. Holistic Solutions did not just find him a program — they stayed with us through the entire process. For the first time, it actually worked."',
    name: 'Parent of a client',
    detail: 'Los Angeles, CA',
  },
  {
    text: '"As a referring physician, I needed a team I could trust with my most complex patients. Holistic Solutions responded within hours, handled everything, and kept me informed throughout. That level of professionalism is rare."',
    name: 'Primary Care Physician',
    detail: 'Referral Partner',
  },
  {
    text: '"I was exhausted from navigating the system alone. My case manager became my advocate — fighting for the right placement, handling insurance, and checking in every step of the way. I finally felt like someone had my back."',
    name: 'Individual client',
    detail: 'In recovery, 18 months',
  },
]

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
            <p className="testimonial-text">{t.text}</p>
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
