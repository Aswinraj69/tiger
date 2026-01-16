'use client'

import { useEffect, useRef, useState } from 'react'

export default function VideoShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)
  const [video1Loaded, setVideo1Loaded] = useState(false)
  const [video2Loaded, setVideo2Loaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Play videos when section is visible
          if (video1Ref.current) {
            video1Ref.current.play().catch(() => {})
          }
          if (video2Ref.current) {
            video2Ref.current.play().catch(() => {})
          }
        } else {
          // Pause videos when section is not visible
          if (video1Ref.current) {
            video1Ref.current.pause()
          }
          if (video2Ref.current) {
            video2Ref.current.pause()
          }
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const video1 = video1Ref.current
    const video2 = video2Ref.current

    const handleVideo1CanPlay = () => {
      setVideo1Loaded(true)
      if (video1) {
        video1.play().catch(() => {})
      }
    }

    const handleVideo2CanPlay = () => {
      setVideo2Loaded(true)
      if (video2) {
        video2.play().catch(() => {})
      }
    }

    if (video1) {
      video1.addEventListener('canplay', handleVideo1CanPlay, { once: true })
    }
    if (video2) {
      video2.addEventListener('canplay', handleVideo2CanPlay, { once: true })
    }

    return () => {
      if (video1) {
        video1.removeEventListener('canplay', handleVideo1CanPlay)
      }
      if (video2) {
        video2.removeEventListener('canplay', handleVideo2CanPlay)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Black and White Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
          style={{
            backgroundImage: 'url(/DSC_3122-Edit.jpg)',
            filter: ' contrast(1.2) brightness(0.8)',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/10 via-dark/30 to-dark/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - 50% Section with Wild Image */}
          <div
            className={`${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            <div className="relative group">
              {/* Hanging Sign Effect */}
              <div className="relative transform rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-800 rounded-full opacity-50"></div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-800 rounded-full opacity-50"></div>
                
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg p-6 shadow-2xl border-2 border-gray-700">
                  <div className="bg-black rounded-lg p-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black z-0"></div>
                    <img
                      src="/wild.png"
                      alt="Wild"
                      className="relative z-10 w-full h-auto object-contain filter drop-shadow-lg"
                      style={{ 
                        backgroundColor: 'transparent',
                        imageRendering: 'crisp-edges'
                      }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Text Below Image */}
              <div className="mt-6 text-center lg:text-left">
                <h3 className="font-display text-2xl sm:text-3xl font-black text-white mb-3 tracking-[0.1em]">
                  WHERE THE WILD VIBES ARE!
                </h3>
                <p className="text-gray-300 text-sm sm:text-base font-body font-medium leading-relaxed">
                  Step into a space where every night feels like a rodeo — live bands, bold interiors, neon lights, and that electric, anything can happen energy.
                </p>
                <button className="premium-button-primary mt-6 w-full text-white py-3 px-6 text-sm font-heading font-bold uppercase tracking-[0.15em] relative overflow-hidden group">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    RESERVE A TABLE
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - 50% Section with 2 Video Cards (Column Layout - Stacked Vertically) */}
          <div className="flex flex-col gap-6">
            {/* Video Card 1 */}
            <div
              className={`relative group flex-1 ${
                isVisible ? 'animate-slide-in-right' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="premium-video-card relative overflow-hidden rounded-2xl h-full">
                {!video1Loaded && (
                  <div className="absolute inset-0 bg-dark flex items-center justify-center z-10">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <video
                  ref={video1Ref}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    video1Loaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source
                    src="/party1.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent flex items-end">
                  <div className="p-6 sm:p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 tracking-[0.05em]">
                      PREMIUM EXPERIENCE
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base font-body font-medium">
                      Immerse yourself in the ultimate nightlife adventure
                    </p>
                  </div>
                </div>
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-20 h-20 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Card 2 */}
            <div
              className={`relative group flex-1 ${
                isVisible ? 'animate-slide-in-right' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.4s' }}
            >
              <div className="premium-video-card relative overflow-hidden rounded-2xl h-full">
                {!video2Loaded && (
                  <div className="absolute inset-0 bg-dark flex items-center justify-center z-10">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <video
                  ref={video2Ref}
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    video2Loaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source
                    src="/party2.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent flex items-end">
                  <div className="p-6 sm:p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2 tracking-[0.05em]">
                      NIGHTLIFE LEGEND
                    </h3>
                    <p className="text-gray-200 text-sm sm:text-base font-body font-medium">
                      Where every moment becomes a memory
                    </p>
                  </div>
                </div>
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-20 h-20 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
