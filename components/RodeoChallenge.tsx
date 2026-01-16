'use client'

import { useEffect, useRef, useState } from 'react'

export default function RodeoChallenge() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])


  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/noteimage.jpg)',
            filter: 'brightness(0.8)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/10 via-dark/30 to-dark/60"></div>
      </div>
      
      {/* Background Elements Overlay */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Large Text with Images */}
          <div
            className={`text-center lg:text-left ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight">
              <span className="block">TAKE THE</span>
              <span className="block text-primary">TIGER</span>
              <span className="block">CHALLENGE</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 font-body font-medium tracking-wide">
              Experience the ultimate nightlife adventure — the wildest ride in Dubai!
            </p>
          </div>

          {/* Right Side - Rodeo Challenge Card */}
          <div
            className={`flex justify-center lg:justify-end ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="rodeo-card max-w-md w-full relative z-10">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-display font-black text-primary mb-4 tracking-[0.05em] leading-tight">
                    TAKE THE TIGER CHALLENGE
                  </h3>
                  <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-body font-medium">
                    Feel the thrill of our premium mechanical bull — the wildest ride in Dubai! 
                    Test your balance, show your courage, and become a legend of the night.
                  </p>
                </div>
                
                <div className="pt-6 border-t-2 border-gray-200">
                  <div className="mb-6">
                    <span className="text-xs text-gray-600 uppercase tracking-[0.2em] font-heading font-bold">
                      PREMIUM EXPERIENCE
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-8 text-gray-800">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-body font-medium text-gray-800">Professional Safety Equipment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-body font-medium text-gray-800">Video Recording Included</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-body font-medium text-gray-800">Complimentary Drink</span>
                    </li>
                  </ul>
                  
                  <button className="premium-button w-full text-white py-4 px-6 text-lg font-heading font-bold uppercase tracking-[0.15em] relative overflow-hidden group">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      RESERVE A TABLE
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
