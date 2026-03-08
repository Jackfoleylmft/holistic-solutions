'use client'
import dynamic from 'next/dynamic'

const AnimationObserver = dynamic(() => import('./AnimationObserver'), {
  ssr: false,
})

export default function LazyAnimationObserver() {
  return <AnimationObserver />
}
