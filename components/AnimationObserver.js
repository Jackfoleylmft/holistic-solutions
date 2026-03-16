'use client'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

function splitText(el) {
  if (el.dataset.splitDone) return
  el.dataset.splitDone = 'true'
  let wordIndex = 0

  function processNode(node, target) {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent.split(/(\s+)/).forEach((part) => {
        if (!part) return
        if (/^\s+$/.test(part)) {
          target.appendChild(document.createTextNode(part))
        } else {
          const wrap = document.createElement('span')
          wrap.className = 'word'
          const inner = document.createElement('span')
          inner.className = 'word-inner'
          inner.style.transitionDelay = `${wordIndex * 0.06}s`
          inner.textContent = part
          wrap.appendChild(inner)
          target.appendChild(wrap)
          wordIndex++
        }
      })
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.tagName === 'BR') {
        target.appendChild(document.createElement('br'))
      } else {
        const wrap = document.createElement('span')
        wrap.className = 'word'
        const inner = document.createElement('span')
        inner.className = 'word-inner'
        inner.style.transitionDelay = `${wordIndex * 0.06}s`
        inner.appendChild(node.cloneNode(true))
        wrap.appendChild(inner)
        target.appendChild(wrap)
        wordIndex++
      }
    }
  }

  const children = Array.from(el.childNodes)
  el.innerHTML = ''
  children.forEach((child) => processNode(child, el))
}

function initMagnetic() {
  if (!window.matchMedia('(pointer: fine)').matches) return
  document.querySelectorAll('.btn-primary:not([data-magnetic])').forEach((btn) => {
    btn.dataset.magnetic = 'true'
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      btn.style.transition = 'none'
      btn.style.transform = `translate(${dx * 0.28}px, ${dy * 0.38}px)`
    })
    btn.addEventListener('mouseleave', () => {
      btn.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
      btn.style.transform = ''
    })
  })
}

export default function AnimationObserver() {
  const pathname = usePathname()
  const isFirstMount = useRef(true)

  useEffect(() => {
    // On initial mount the inline script in layout.js already handled animations.
    // Skip the reset so we don't conflict — just mark first mount done.
    if (isFirstMount.current) {
      isFirstMount.current = false
      return
    }

    document.documentElement.classList.remove('animate-ready')

    const els = document.querySelectorAll('[data-animate]')
    els.forEach((el) => el.classList.remove('in-view'))

    const splitEls = document.querySelectorAll('[data-split]')
    splitEls.forEach((el) => {
      el.classList.remove('in-view')
      splitText(el)
    })

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

    const splitObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            splitObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('in-view')
      }
      observer.observe(el)
    })

    document.documentElement.classList.add('animate-ready')

    splitEls.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Double rAF: browser paints hidden state first, then transition fires
        requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('in-view')))
      } else {
        splitObserver.observe(el)
      }
    })

    initMagnetic()

    return () => {
      observer.disconnect()
      splitObserver.disconnect()
    }
  }, [pathname])

  return null
}
