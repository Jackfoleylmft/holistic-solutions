'use client'

import { useState } from 'react'

const faqs = [
  [
    {
      q: 'What is clinical case management?',
      a: 'Clinical case management is a collaborative process in which a licensed professional works with an individual to assess their needs, create a care plan, coordinate services, and monitor progress over time. It bridges the gap between a person and the clinical and community resources they need.',
    },
    {
      q: 'Who is case management for?',
      a: "Case management is for individuals navigating substance use, mental health challenges, or both — as well as their families. It's especially helpful when the healthcare system feels overwhelming, when past treatment hasn't worked, or when multiple needs require coordination.",
    },
    {
      q: 'Do you offer intervention services?',
      a: 'Yes. What sets our interventions apart is that they are led by masters-level licensed clinicians — not just certified interventionists. Most intervention services are trained in the process of intervention but are not equipped to clinically assess or manage what can emerge: acute psychiatric symptoms, trauma responses, co-occurring disorders, or psychosis. Our clinicians are. We guide the entire process — preparation, facilitation, and immediate placement coordination — with the clinical depth to handle complexity safely.',
    },
    {
      q: 'Do you accept insurance?',
      a: 'Services vary. We work with many clients on a private-pay basis and can help identify and verify insurance options for treatment placement and clinical services. Contact us to discuss your specific situation.',
    },
  ],
  [
    {
      q: 'What is the difference between case management and therapy?',
      a: 'Therapy focuses on the therapeutic relationship and emotional processing. Case management focuses on coordination, navigation, and logistics — connecting you to the right providers, managing your care plan, and removing barriers to treatment. Both are often used together.',
    },
    {
      q: 'How quickly can we get started?',
      a: 'We respond to all inquiries within one business day and can often schedule an initial consultation within 48 hours. For urgent situations, please call us directly at (702) 494-7641.',
    },
    {
      q: 'Do you serve clients outside of Los Angeles?',
      a: 'Yes. Holistic Solutions provides clinical case management and intervention services to clients across the United States. We are headquartered in Los Angeles, CA and serve individuals and families nationally through telehealth consultations and on-site coordination. We can help you find the right resources wherever you are.',
    },
    {
      q: 'How does treatment placement work?',
      a: 'We assess your clinical needs, budget, location preferences, and program requirements, then identify and vet the most appropriate options from our national network. We have personally evaluated hundreds of programs — we do not refer you to a list, we place you with purpose.',
    },
    {
      q: 'Is my information kept confidential?',
      a: 'Absolutely. All consultations and services are confidential in accordance with HIPAA and California law. We will never share your information without your explicit written consent, except as required by law.',
    },
  ],
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <details onToggle={(e) => setOpen(e.target.open)}>
      <summary>
        {q}
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </summary>
      <p>{a}</p>
    </details>
  )
}

export default function FAQ() {
  return (
    <section id="faq">
      <p className="section-label">Frequently Asked Questions</p>
      <h2>
        Common questions,
        <br />
        honest answers.
      </h2>
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
