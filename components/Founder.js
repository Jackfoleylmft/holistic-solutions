import Image from 'next/image'

export default function Founder() {
  return (
    <section id="founder">
      <div>
        <p className="section-label" data-animate>A Note From Our Founder</p>
        <h2 data-split>
          This work is personal.
          <br />
          <em>By design.</em>
        </h2>
      </div>
      <div className="founder-layout">
        <div className="founder-identity" data-animate data-delay="1">
          <div className="founder-avatar">
            <Image
              src="/jack-foley.jpg"
              alt="Jack Foley, LMFT — Founder of Holistic Solutions"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
            />
          </div>
          <p className="founder-name">Jack Foley</p>
          <p className="founder-title">Founder &amp; Clinical Director</p>
          <span className="founder-credential">LMFT</span>
          <span className="founder-credential">M.S. Clinical Psychology</span>
          <span className="founder-credential">B.S. Psychology</span>
        </div>
        <div className="founder-message" data-animate data-delay="2">
          <p className="opening">
            "Eleven years ago, I was on the other side of this. I know what it feels like to need
            help, to finally accept it, and to have the right care change everything."
          </p>
          <p>
            My recovery didn't happen by accident. It happened because I had access to high-quality
            treatment and the kind of wraparound support that held me together while I figured out
            how to hold myself together. That experience didn't just change my life — it gave it
            direction.
          </p>
          <p>
            Shortly after completing treatment, I knew what I was supposed to do. I went back to
            school, earned my bachelor's in psychology, then my master's in clinical psychology, and
            built a career around the thing that saved me: connecting people with the right care at
            the right time, and staying with them through it.
          </p>
          <p>
            Holistic Solutions exists because I believe everyone deserves what I was fortunate enough
            to receive. Not a referral to a website. Not a phone number to call alone at 2am. A real
            person who understands this world, knows the players, and will advocate for you like your
            life depends on it — because sometimes it does.
          </p>
          <p>
            I work with a broad range of clinical presentations, but substance use disorders and
            psychosis are where my roots run deepest. These are the cases I was trained in, the cases
            that shaped my clinical instincts, and the cases I am most equipped to navigate —
            including when they show up together, which they often do.
          </p>
          <p>
            If you're reading this, you're probably trying to figure out what to do next. I'd be
            honored to help you figure that out.
          </p>
          <div className="founder-sign">
            <p>— Jack Foley</p>
            <span>LMFT · Founder, Holistic Solutions LLC · Los Angeles, CA</span>
          </div>
        </div>
      </div>
    </section>
  )
}
