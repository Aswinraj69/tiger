'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function ScrollImageCard() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null)
  const lastScrollY = useRef(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const heroHeight = window.innerHeight
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection('up')
      }
      lastScrollY.current = currentScrollY
      setScrollY(currentScrollY)

      // Hide card only if at the very top (less than 30% of hero)
      if (currentScrollY < heroHeight * 0.3) {
        setIsVisible(false)
        return
      }

      // Show card when it's in viewport (works for both scroll directions)
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // Show card when it enters viewport (from top or bottom)
        if (rect.top < windowHeight && rect.bottom > 0) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Don't check on initial load - wait for scroll

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate transform based on scroll position
  const getTransform = () => {
    if (!cardRef.current) return { scale: 0.9, translateY: 0, opacity: 0 }
    
    const rect = cardRef.current.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const cardTop = rect.top
    const cardHeight = rect.height
    const cardCenter = cardTop + (cardHeight / 2)
    const viewportCenter = windowHeight / 2
    
    // Calculate distance from viewport center
    const distanceFromCenter = viewportCenter - cardCenter
    
    // Normalize progress: -1 (below viewport) to 1 (above viewport), 0 when centered
    const normalizedProgress = Math.max(-1, Math.min(1, distanceFromCenter / (windowHeight / 2)))
    
    // Convert to 0-1 progress where 0 is when card is below, 1 is when card is above
    const scrollProgress = (1 - normalizedProgress) / 2
    
    // Scale effect: grows from 0.9 to 1.1 as card moves through viewport
    const scale = 0.9 + (scrollProgress * 0.2)
    
    // Translate effect: smooth movement based on position
    // Works for both scroll directions
    const translateY = scrollProgress < 0.3
      ? 50 - (scrollProgress / 0.3) * 100 // Move up from below
      : scrollProgress < 0.7
      ? -50 + ((scrollProgress - 0.3) / 0.4) * 50 // Stay near center
      : -50 + ((scrollProgress - 0.7) / 0.3) * 100 // Move down
    
    // Opacity: fades in when entering viewport, stays visible
    const opacity = Math.min(1, scrollProgress * 1.5)
    
    return { scale, translateY, opacity }
  }

  const transform = getTransform()

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden"
      style={{ 
        marginTop: '-20vh', // Overlap with hero slightly
        marginBottom: '-10vh' // Maintain gap with rodeo challenge
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={cardRef}
          className={`relative w-[85vw] sm:w-[75vw] lg:w-[65vw] max-w-4xl transition-all duration-500 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            transform: `translateY(${transform.translateY}px) scale(${transform.scale})`,
            opacity: isVisible ? transform.opacity : 0,
          }}
        >
          {/* Stylish Card Container */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Card Border Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Main Card */}
            <div className="relative bg-dark-card rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/DSC_3122-Edit.jpg"
                  alt="Tiger Club Experience"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  quality={90}
                  priority={false}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-3">
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
