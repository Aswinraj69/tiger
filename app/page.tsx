'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'

// Dynamically import heavy components to reduce initial bundle size
const RodeoChallenge = dynamic(() => import('@/components/RodeoChallenge'), {
  loading: () => <div className="min-h-screen" />,
})
const VideoShowcase = dynamic(() => import('@/components/VideoShowcase'), {
  loading: () => <div className="min-h-screen" />,
})
const Menu = dynamic(() => import('@/components/Menu'), {
  loading: () => <div className="min-h-screen" />,
})
const VideoCards = dynamic(() => import('@/components/VideoCards'), {
  loading: () => <div className="min-h-screen" />,
})
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="min-h-screen" />,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => null,
})

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    // Handle hash scrolling when page loads
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const targetId = hash.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }, [])

  return (
    <main className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navigation />
      <Hero isLoaded={isLoaded} />
      <RodeoChallenge />
      <VideoShowcase />
      <Menu />
      <VideoCards />
      <About />
      <Footer />
    </main>
  )
}
