'use client'

import { useEffect, useRef, useState, useMemo, memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Memoize featured images
const FEATURED_IMAGES = [
  { src: '/DSC_2986.jpg', title: 'interior' },
  { src: '/DSC_2994.jpg', title: 'interior' },
  { src: '/DSC_3003.jpg', title: 'interior' },
  { src: '/DSC_3007.jpg', title: 'interior' },
  { src: '/DSC_3010.jpg', title: 'interior' },
  { src: '/DSC_3014.jpg', title: 'interior' },
]

// Memoized gallery item
const GalleryImageItem = memo(({ image, index }: { image: typeof FEATURED_IMAGES[0], index: number }) => (
  <div
    className={`relative overflow-hidden rounded-lg group cursor-pointer ${
      index === 0 ? 'col-span-2 sm:col-span-1 sm:row-span-2' : ''
    } ${index === 3 ? 'col-span-2 sm:col-span-1' : ''}`}
  >
    <div className={`relative ${
      index === 0 ? 'h-64 sm:h-full' : 'h-48 sm:h-64 lg:h-80'
    }`}>
      <Image
        src={image.src}
        alt={image.title}
        width={800}
        height={600}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        loading={index < 3 ? 'eager' : 'lazy'}
        quality={85}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
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
))

GalleryImageItem.displayName = 'GalleryImageItem'

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

  // Memoize featured images
  const featuredImages = useMemo(() => FEATURED_IMAGES, [])

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
            <GalleryImageItem key={image.src} image={image} index={index} />
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
