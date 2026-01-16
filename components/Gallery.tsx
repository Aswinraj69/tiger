'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function Gallery() {
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

  // Featured gallery images for home page preview
  const featuredImages = [
    { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop', title: 'Main Bar' },
    { src: 'https://images.unsplash.com/photo-1566737236500-c8ac43014b67?w=800&h=600&fit=crop', title: 'Dance Floor' },
    { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop', title: 'VIP Lounge' },
    { src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop', title: 'Cocktails' },
    { src: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=600&fit=crop', title: 'DJ Booth' },
    { src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&h=600&fit=crop', title: 'Night Ambiance' },
  ]

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-16 sm:py-24 lg:py-32 bg-dark-card overflow-hidden"
    >
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
              Gallery
            </h2>
            <span className="text-primary text-2xl">✦</span>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 uppercase tracking-[0.15em] mb-6 font-heading font-semibold">
            Moments of Excellence
          </p>
        </div>

        {/* Premium Gallery Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          {featuredImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                index === 0 ? 'col-span-2 sm:col-span-1 sm:row-span-2' : ''
              } ${index === 3 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <div className={`relative ${
                index === 0 ? 'h-64 sm:h-full' : 'h-48 sm:h-64 lg:h-80'
              }`}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 sm:p-6 w-full">
                    <h3 className="font-display text-lg sm:text-xl font-black text-white tracking-[0.05em]">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div
          className={`text-center ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <Link
            href="/gallery"
            className="premium-button-primary inline-block text-white px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-heading font-bold uppercase tracking-[0.15em] relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              VIEW FULL GALLERY
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
