'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import RodeoChallenge from '@/components/RodeoChallenge'
import VideoShowcase from '@/components/VideoShowcase'
import Menu from '@/components/Menu'
import VideoCards from '@/components/VideoCards'
import About from '@/components/About'
import Footer from '@/components/Footer'

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
