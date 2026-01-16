'use client'

import { useEffect, useRef, useState } from 'react'

export default function Menu() {
  const [isVisible, setIsVisible] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Play video when section is visible
          if (videoRef.current) {
            videoRef.current.play().catch(() => {
              // Autoplay prevented
            })
          }
        } else {
          // Pause video when section is not visible
          if (videoRef.current) {
            videoRef.current.pause()
          }
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setVideoLoaded(true)
      video.play().catch(() => {
        // Autoplay prevented
      })
    }

    const handleLoadedData = () => {
      video.play().catch(() => {
        // Autoplay prevented
      })
    }

    video.addEventListener('canplay', handleCanPlay, { once: true })
    video.addEventListener('loadeddata', handleLoadedData, { once: true })

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [])

  const menuImages = [
    {
      src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1200&h=800&fit=crop',
      title: 'Signature Cocktails',
      description: 'Crafted with premium spirits and exotic ingredients',
    },
    {
      src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&h=800&fit=crop',
      title: 'Premium Spirits',
      description: 'World-class selection of fine spirits and wines',
    },
    {
      src: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=1200&h=800&fit=crop',
      title: 'Gourmet Food',
      description: 'Exquisite culinary creations to complement your drinks',
    },
  ]

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {!videoLoaded && (
          <div className="absolute inset-0 bg-dark flex items-center justify-center z-10">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <video
          ref={videoRef}
          className={`w-full h-full object-cover brightness-[0.8] transition-opacity duration-500 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="/menuimage.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/10 via-dark/30 to-dark/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-primary text-2xl">✦</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wider">
              Menu
            </h2>
            <span className="text-primary text-2xl">✦</span>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 uppercase tracking-[0.15em] mb-6 font-heading font-semibold">
            Crafted Cocktails & Premium Spirits
          </p>
        </div>

        {/* Premium Menu Images Grid */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
          {menuImages.map((item, index) => (
            <div
              key={index}
              className={`relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden group cursor-pointer ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent flex items-end">
                <div className="p-6 sm:p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-base font-body font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.6s' }}
        >
          <a
            href="/menu"
            className="premium-button-primary inline-block text-white px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-heading font-bold uppercase tracking-[0.15em] relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              VIEW FULL MENU
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
