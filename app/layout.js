import { Cormorant_Garamond, Jost } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import CrisisBar from '@/components/CrisisBar'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'
const Nav = dynamic(() => import('@/components/Nav'), { ssr: false })
const FloatingCTA = dynamic(() => import('@/components/FloatingCTA'), { ssr: false })
import { PHONE_HREF, EMAIL, SITE_URL, BUSINESS_NAME } from '@/lib/constants'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Clinical Case Management — Nationwide | Holistic Solutions',
  description:
    'Clinical case management for substance use, mental health, and co-occurring disorders. Licensed clinicians, nationwide. Call (702) 494-7641.',
  keywords:
    'clinical case management, substance use case manager, mental health case management, co-occurring disorders, clinical intervention services, masters level interventionist, licensed clinician intervention, treatment placement, recovery coaching, companionship services, sober coaching, safe clinical transport, behavioral health case management, nationwide case management, substance abuse help, addiction case manager',
  authors: [{ name: 'Holistic Solutions LLC' }],
  robots: 'index, follow',
  verification: {
    google: '276MvZQU8uXctJ2kzuTIr7Z0I7kl2smLuOPg4zSTiuA',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Clinical Case Management — Nationwide | Holistic Solutions',
    description:
      'Clinical case management for substance use, mental health, and co-occurring disorders. Licensed clinicians, nationwide. Call (702) 494-7641.',
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Clinical Case Management — Nationwide | Holistic Solutions' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinical Case Management — Nationwide | Holistic Solutions',
    description:
      'Clinical case management for substance use, mental health, and co-occurring disorders. Licensed clinicians, nationwide. Call (702) 494-7641.',
    images: ['/opengraph-image'],
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': ['MedicalBusiness', 'ProfessionalService'],
  '@id': SITE_URL,
  name: BUSINESS_NAME,
  description:
    'Nationwide clinical case management for substance use, mental health, co-occurring disorders, and intervention services. Headquartered in Los Angeles, California.',
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  image: `${SITE_URL}/opengraph-image`,
  telephone: '+17024947641',
  email: EMAIL,
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Los Angeles',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  medicalSpecialty: [
    'Substance Use',
    'Mental Health',
    'Co-Occurring Disorders',
    'Intervention Services',
    'Treatment Placement',
    'Recovery Coaching',
    'Companionship Services',
    'Safe Clinical Transport',
  ],
  openingHours: 'Mo-Fr 08:00-18:00',
  founder: {
    '@type': 'Person',
    '@id': `${SITE_URL}/about`,
    name: 'Jack Foley',
    jobTitle: 'Founder and Clinical Director',
    url: `${SITE_URL}/about`,
    sameAs: [
      'https://www.linkedin.com/in/jack-foley-m-a-lmft-25a462133/',
      'https://www.therapyden.com/therapist/jack-foley',
    ],
    hasCredential: ['LMFT', 'M.S. Clinical Psychology', 'B.S. Psychology'],
  },
  sameAs: [
    'https://www.linkedin.com/in/jack-foley-m-a-lmft-25a462133/',
    'https://www.therapyden.com/therapist/jack-foley',
    // Add Psychology Today, CAMFT, AAMFT profile URLs as they go live
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Clinical Case Management Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Substance Use Case Management', url: `${SITE_URL}/services/substance-use` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mental Health Case Management', url: `${SITE_URL}/services/mental-health` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Co-Occurring Disorders Case Management', url: `${SITE_URL}/services/co-occurring-disorders` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Clinical Intervention Services', url: `${SITE_URL}/services/intervention-services` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Treatment Placement Services', url: `${SITE_URL}/services/treatment-placement` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Recovery Coaching', url: `${SITE_URL}/services/recovery-coaching` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Companionship & Support Services', url: `${SITE_URL}/services/companionship-support` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Safe & Clinical Transport', url: `${SITE_URL}/services/safe-transport` } },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9N3BJGHJ6C"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9N3BJGHJ6C');
          `}
        </Script>
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Los Angeles, California" />
        <meta name="geo.position" content="34.0522;-118.2437" />
        <meta name="ICBM" content="34.0522, -118.2437" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <CrisisBar />
        <FloatingCTA />
        <Script id="animations" strategy="lazyOnload">
          {`
(function(){
  function splitText(el){
    if(el.dataset.splitDone)return;
    el.dataset.splitDone='true';
    var wi=0;
    function proc(n,t){
      if(n.nodeType===3){
        n.textContent.split(/(\\s+)/).forEach(function(p){
          if(!p)return;
          if(/^\\s+$/.test(p)){t.appendChild(document.createTextNode(p))}
          else{var w=document.createElement('span');w.className='word';
          var i=document.createElement('span');i.className='word-inner';
          i.style.transitionDelay=wi*0.06+'s';i.textContent=p;
          w.appendChild(i);t.appendChild(w);wi++}
        })
      }else if(n.nodeType===1){
        if(n.tagName==='BR'){t.appendChild(document.createElement('br'))}
        else{var w=document.createElement('span');w.className='word';
        var i=document.createElement('span');i.className='word-inner';
        i.style.transitionDelay=wi*0.06+'s';i.appendChild(n.cloneNode(true));
        w.appendChild(i);t.appendChild(w);wi++}
      }
    }
    var ch=Array.from(el.childNodes);el.innerHTML='';
    ch.forEach(function(c){proc(c,el)})
  }
  function init(){
    var els=document.querySelectorAll('[data-animate]');
    var splits=document.querySelectorAll('[data-split]');
    splits.forEach(function(el){splitText(el)});
    var obs=new IntersectionObserver(function(entries){
      entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in-view');obs.unobserve(e.target)}})
    },{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(el){
      if(el.getBoundingClientRect().top<window.innerHeight)el.classList.add('in-view');
      obs.observe(el)
    });
    splits.forEach(function(el){
      if(el.getBoundingClientRect().top<window.innerHeight){
        requestAnimationFrame(function(){requestAnimationFrame(function(){el.classList.add('in-view')})})
      }else{obs.observe(el)}
    });
    document.documentElement.classList.add('animate-ready');
    if(window.matchMedia('(pointer:fine)').matches){
      document.querySelectorAll('.btn-primary').forEach(function(btn){
        btn.addEventListener('mousemove',function(e){
          var r=btn.getBoundingClientRect();
          btn.style.transition='none';
          btn.style.transform='translate('+(e.clientX-(r.left+r.width/2))*0.28+'px,'+(e.clientY-(r.top+r.height/2))*0.38+'px)'
        });
        btn.addEventListener('mouseleave',function(){
          btn.style.transition='transform 0.5s cubic-bezier(0.23,1,0.32,1)';btn.style.transform=''
        })
      })
    }
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init)}else{init()}
})()
          `}
        </Script>
      </body>
    </html>
  )
}
