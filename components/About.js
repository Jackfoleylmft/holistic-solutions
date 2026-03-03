import { credentials } from '@/lib/content'

export default function About() {
  return (
    <section id="about">
      <p className="section-label">About Us</p>
      <h1>
        Experienced. Credentialed.
        <br />
        Serving Clients Nationwide.
      </h1>
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
