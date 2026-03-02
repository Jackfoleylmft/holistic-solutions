const credentials = [
  {
    title: 'Licensed Clinical Case Managers',
    body: 'All case managers hold current licensure in social work, counseling, or a related clinical field. We work with licensed providers in every state we serve.',
  },
  {
    title: 'Masters-Level Clinicians Leading Every Intervention',
    body: 'Our interventions are facilitated by licensed, masters-level clinicians — not just certified interventionists. That clinical foundation means we can assess what\'s actually happening in the room, respond to psychiatric complexity in real time, and navigate crisis with the training to back it up.',
  },
  {
    title: 'Confidential & HIPAA Compliant',
    body: 'All services are provided with strict confidentiality in accordance with HIPAA and applicable state regulations wherever you are located.',
  },
  {
    title: 'Deep Expertise in Substance Use & Psychosis',
    body: 'These are the conditions we built our practice on. Complex, often misunderstood, and frequently undertreated — we know this clinical terrain better than most.',
  },
  {
    title: 'Whole-Person Philosophy',
    body: 'We address clinical, social, environmental, and relational factors — not just a diagnosis. Holistic by name, holistic by practice.',
  },
]

export default function About() {
  return (
    <section id="about">
      <p className="section-label">About Us</p>
      <h2>
        Experienced. Credentialed.
        <br />
        Serving Clients Nationwide.
      </h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            Holistic Solutions was founded on a simple belief: that every person deserves access to
            knowledgeable, compassionate support on their path to recovery — regardless of how
            complicated that path may be or where in the country they live.
          </p>
          <p>
            Our team of licensed clinicians and certified case managers brings extensive experience
            across the full spectrum of behavioral health — but substance use disorders and psychosis
            are where we built our foundation. These are the cases that shaped our clinical approach,
            and they remain the areas where our expertise runs deepest. That said, we work with a
            broad range of struggles, and every client gets the same level of rigorous, individualized
            care.
          </p>
          <p>
            Headquartered in Los Angeles, CA, we maintain professional relationships with treatment
            centers, psychiatrists, therapists, and community resources across the United States —
            giving our clients access to a warm, trusted national network, not just a list of
            referrals.
          </p>
        </div>
        <div className="credentials">
          {credentials.map((c) => (
            <div key={c.title} className="credential">
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
