import { processSteps } from '@/lib/content'

export default function Process() {
  return (
    <section id="process">
      <div>
        <p className="section-label" data-animate>How It Works</p>
        <h2 data-split>
          Simple, structured,
          <br />
          and client-centered.
        </h2>
      </div>
      <div className="process-layout">
        <div className="process-steps">
          {processSteps.map((s, i) => (
            <div key={s.num} className="step" data-animate data-delay={i + 1}>
              <span className="step-num">{s.num}</span>
              <div className="step-content">
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="process-callout" data-animate data-delay="2">
            <blockquote>
              "Case management is not a one-size-fits-all service. Every person who walks through
              our door gets a plan built around their life."
            </blockquote>
            <cite>— Holistic Solutions Clinical Team</cite>
          </div>
          <div className="who-list" data-animate data-delay="3">
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
