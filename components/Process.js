const steps = [
  {
    num: '01',
    title: 'Initial Contact',
    body: 'Reach out via phone or our intake form. A case manager will respond within 24 hours to schedule a free consultation.',
  },
  {
    num: '02',
    title: 'Comprehensive Assessment',
    body: 'We conduct a thorough biopsychosocial assessment to understand clinical needs, history, strengths, and goals.',
  },
  {
    num: '03',
    title: 'Care Plan Development',
    body: 'A personalized, goal-oriented care plan is built collaboratively with the client and, when appropriate, their family or support network.',
  },
  {
    num: '04',
    title: 'Ongoing Coordination & Support',
    body: 'We actively coordinate with treatment providers, monitor progress, address barriers, and adjust the plan as needs evolve.',
  },
]

export default function Process() {
  return (
    <section id="process">
      <p className="section-label">How It Works</p>
      <h2>
        Simple, structured,
        <br />
        and client-centered.
      </h2>
      <div className="process-layout">
        <div className="process-steps">
          {steps.map((s) => (
            <div key={s.num} className="step">
              <span className="step-num">{s.num}</span>
              <div className="step-content">
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="process-callout">
            <blockquote>
              "Case management is not a one-size-fits-all service. Every person who walks through
              our door gets a plan built around their life."
            </blockquote>
            <cite>— Holistic Solutions Clinical Team</cite>
          </div>
          <div className="who-list">
            <h4>We Work With</h4>
            <ul>
              <li>Individuals seeking support for themselves</li>
              <li>Families of someone in active addiction or crisis</li>
              <li>Physicians &amp; primary care providers</li>
              <li>Hospitals &amp; emergency departments</li>
              <li>Courts, attorneys &amp; employee assistance programs</li>
              <li>Schools &amp; community organizations nationwide</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
