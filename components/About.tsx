'use client'

import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()

  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-36 bg-dark overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 sm:mb-20 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-3xl sm:text-4xl text-primary animate-pulse">✦</span>
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[0.2em] text-white">
              ABOUT US
            </h2>
            <span className="text-3xl sm:text-4xl text-primary animate-pulse" style={{ animationDelay: '0.5s' }}>✦</span>
          </div>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Side - About Text */}
          <div
            className={`${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            {/* Premium Text Block */}
            <div className="space-y-6 mb-8">
              <div className="relative pl-6 border-l-2 border-primary/50">
                <p className="text-gray-200 text-lg sm:text-xl leading-relaxed font-body font-normal tracking-wide">
                  Tiger has officially opened its doors in Dubai — bringing the city an all-American bar, 
                  restaurant, and entertainment hub like no other.
                </p>
              </div>
              
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-body font-light tracking-wide">
                Spanning across multiple immersive zones, the venue fuses bold flavors, high-energy entertainment, 
                and premium nightlife experiences under one roof.
              </p>
            </div>

            {/* Highlighted Section */}
            <div className="bg-dark-card/50 border border-primary/20 rounded-xl p-6 sm:p-8 mb-8 backdrop-blur-sm">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-4 tracking-[0.1em] uppercase">
                CULINARY EXCELLENCE
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-body font-light">
                At the helm of our kitchen is a team of expert chefs whose culinary roots stretch from 
                international cuisine to local favorites. Our menu is a celebration of live fire cooking 
                and bold comfort food infused with global flair.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#gallery"
                className="premium-button-outline inline-block text-center text-white py-3 px-8 text-sm font-heading font-bold uppercase tracking-[0.15em] relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  EXPLORE GALLERY
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right Side - Images with Distressed Border */}
          <div
            className={`space-y-6 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            {/* Top Image */}
            <div className="relative group">
              <div className="distressed-border absolute inset-0 transform rotate-[-1deg] group-hover:rotate-0 transition-transform duration-500 z-10 pointer-events-none"></div>
              <div className="relative h-64 sm:h-80 lg:h-[400px] rounded-xl overflow-hidden">
                <img
                  src="/DSC_3010.jpg"
                  alt="Tiger Club Interior"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Bottom Image */}
            <div className="relative group">
              <div className="distressed-border absolute inset-0 transform rotate-[1deg] group-hover:rotate-0 transition-transform duration-500 z-10 pointer-events-none"></div>
              <div className="relative h-64 sm:h-80 lg:h-[400px] rounded-xl overflow-hidden">
                <img
                  src="/DSC_3014.jpg"
                  alt="Tiger Club Dining Area"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
