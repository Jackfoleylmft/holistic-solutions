const services = [
  {
    num: '01',
    title: 'Substance Use',
    body: 'Assessment, treatment coordination, and ongoing case management for individuals navigating alcohol and drug use disorders across all levels of care — wherever you are in the United States.',
  },
  {
    num: '02',
    title: 'Mental Health',
    body: 'Support for depression, anxiety, trauma, PTSD, and other mental health conditions — including psychosis, one of the most complex and under-supported presentations in behavioral health. We connect clients nationwide with clinicians who actually specialize in what your loved one is facing.',
  },
  {
    num: '03',
    title: 'Co-Occurring Disorders',
    body: 'Integrated care planning for individuals experiencing both substance use and mental health challenges — addressing both simultaneously, not separately.',
  },
  {
    num: '04',
    title: 'Clinical Intervention Services',
    body: 'Our interventions are led by masters-level clinicians, not just certified interventionists. That distinction matters — when a loved one\'s mental health, trauma history, or psychiatric state is part of the picture, you need someone who can read the room clinically, not just follow a script. We handle what others can\'t anticipate.',
  },
  {
    num: '05',
    title: 'Treatment Placement',
    body: 'We identify, vet, and place clients in the most appropriate treatment programs nationwide — detox, residential, PHP, IOP, and beyond. No guessing. No cold calls. Just the right fit, fast.',
  },
  {
    num: '06',
    title: 'Recovery Coaching',
    body: 'Ongoing one-on-one coaching for individuals in active recovery — building accountability, daily structure, and the skills needed for long-term sobriety and mental wellness.',
  },
  {
    num: '07',
    title: 'Companionship & Support',
    body: 'In-person companion services that provide real-time support during high-risk moments, transitions out of treatment, or whenever a trusted presence is needed most.',
  },
  {
    num: '08',
    title: 'Safe & Clinical Transport',
    body: 'Supervised, compassionate transport to treatment facilities, appointments, or step-down programs — ensuring your loved one arrives safely and supported every step of the way.',
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="section-head">
        <div>
          <p className="section-label">What We Do</p>
          <h2>Comprehensive care for complex needs.</h2>
        </div>
        <p className="section-intro">
          We work alongside individuals, families, and providers across the country to build
          coordinated care plans that address the full picture — clinical, social, and personal.
          While our team is equipped to handle a wide range of behavioral health needs, substance use
          disorders and psychosis are the areas where we have the most experience and the strongest
          clinical track record.
        </p>
      </div>
      <div className="services-grid">
        {services.map((s) => (
          <div key={s.num} className="service-card">
            <div className="service-num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
