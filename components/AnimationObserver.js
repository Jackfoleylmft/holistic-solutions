'use client'
import { useEffect } from 'react'

export default function AnimationObserver() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-animate]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    // Mark elements already in viewport before enabling animations
    // so they don't flash invisible on mount
    els.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('in-view')
      }
      observer.observe(el)
    })

    document.documentElement.classList.add('animate-ready')
    return () => observer.disconnect()
  }, [])

  return null
}
