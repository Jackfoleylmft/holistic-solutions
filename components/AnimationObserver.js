'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function AnimationObserver() {
  const pathname = usePathname()

  useEffect(() => {
    // Reset so mutations are batched before first paint
    document.documentElement.classList.remove('animate-ready')

    const els = document.querySelectorAll('[data-animate]')
    els.forEach((el) => el.classList.remove('in-view'))

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

    els.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('in-view')
      }
      observer.observe(el)
    })

    document.documentElement.classList.add('animate-ready')
    return () => observer.disconnect()
  }, [pathname])

  return null
}
