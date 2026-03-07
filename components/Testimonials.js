import { testimonials } from '@/lib/content'
import { SITE_URL, BUSINESS_NAME } from '@/lib/constants'

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: BUSINESS_NAME,
  url: SITE_URL,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '3',
    bestRating: '5',
  },
  review: testimonials.map((t) => ({
    '@type': 'Review',
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    author: { '@type': 'Person', name: t.name },
    reviewBody: t.text.replace(/^"|"$/g, ''),
  })),
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: 'var(--dusk)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
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
