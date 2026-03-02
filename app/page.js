import CrisisBar from '@/components/CrisisBar'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhoWeServe from '@/components/WhoWeServe'
import Testimonials from '@/components/Testimonials'
import Process from '@/components/Process'
import About from '@/components/About'
import Founder from '@/components/Founder'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

export default function Home() {
  return (
    <>
      <CrisisBar />
      <Nav />
      <main>
        <Hero />
        <Services />
        <WhoWeServe />
        <Testimonials />
        <Process />
        <About />
        <Founder />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
