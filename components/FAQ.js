'use client'

import { useState } from 'react'
import { faqs } from '@/lib/content'

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <details onToggle={(e) => setOpen(e.target.open)}>
      <summary>
        {q}
        <span className="faq-icon" aria-hidden="true">{open ? '−' : '+'}</span>
      </summary>
      <p>{a}</p>
    </details>
  )
}

export default function FAQ() {
  return (
    <section id="faq">
      <p className="section-label">Frequently Asked Questions</p>
      <h1>
        Common questions,
        <br />
        honest answers.
      </h1>
      <div className="faq-grid">
        {faqs.map((col, i) => (
          <div key={i}>
            {col.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
