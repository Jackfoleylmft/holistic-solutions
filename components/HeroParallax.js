'use client'
import { useEffect, useRef } from 'react'

export default function HeroParallax({ children }) {
  const ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const y = window.scrollY * 0.4
      ref.current.style.backgroundPosition = `center calc(45% + ${y}px)`
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero" id="home" ref={ref}>
      {children}
    </section>
  )
}
