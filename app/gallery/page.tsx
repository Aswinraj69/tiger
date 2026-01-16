'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Generate 50+ club images (mix of landscape and portrait)
  const generateGalleryImages = () => {
    const baseImages = [
      // Landscape images
      { src: '/DSC_2994.jpg', orientation: 'landscape' },
      { src: '/DSC_3003.jpg', orientation: 'landscape' },
      { src: '/DSC_3007.jpg', orientation: 'landscape' },
      { src: '/DSC_3010.jpg', orientation: 'landscape' },
      { src: '/DSC_3014.jpg', orientation: 'landscape' },
      { src: '/DSC_3101.jpg', orientation: 'landscape' },

      
      
      // More landscape
      { src: '/DSC_3064.jpg', orientation: 'landscape' },
      { src: '/DSC_3065.jpg', orientation: 'landscape' },
      { src: '/DSC_3070.jpg', orientation: 'landscape' },
      { src: '/DSC_3071.jpg', orientation: 'landscape' },
      { src: '/DSC_3072-Edit.jpg', orientation: 'landscape' },
      { src: '/DSC_3077.jpg', orientation: 'landscape' },
      { src: '/DSC_3082.jpg', orientation: 'landscape' },
      { src: '/DSC_3083.jpg', orientation: 'landscape' },
      
      // More portrait
      { src: '/DSC_3085.jpg', orientation: 'landscape' },
      { src: '/DSC_3089.jpg', orientation: 'landscape' },
      { src: '/DSC_3090.jpg', orientation: 'landscape' },
      { src: '/DSC_3091.jpg', orientation: 'landscape' },
      { src: '/DSC_3092.jpg', orientation: 'landscape' },
      { src: '/DSC_3094.jpg', orientation: 'landscape' },
      { src: '/DSC_3095.jpg', orientation: 'landscape' },
      { src: '/DSC_3097.jpg', orientation: 'landscape' },
      { src: '/DSC_3098.jpg', orientation: 'landscape' },
      { src: '/DSC_3101.jpg', orientation: 'landscape' },
    ]

    return baseImages.map((img, index) => ({
      ...img,
      id: `gallery-${index}`,
    }))
  }

  const galleryImages = generateGalleryImages()

  return (
    <main className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 bg-gradient-to-b from-dark via-dark-card to-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`font-display text-5xl sm:text-6xl lg:text-7xl font-black mb-4 gradient-text ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            GALLERY
          </h1>
          <p className={`text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0'
          }`} style={{ animationDelay: '0.2s' }}>
            Explore our premium bar and dance club through stunning visuals
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 lg:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`mb-3 sm:mb-4 lg:mb-6 break-inside-avoid group cursor-pointer ${
                  isLoaded ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.02}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={`Gallery image ${index + 1}`}
                    className={`w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ${
                      image.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary text-4xl font-bold transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Full size gallery image"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Back to Home */}
      <section className="py-12 sm:py-16 bg-dark-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/#home"
            className="inline-block bg-primary hover:bg-primary-light text-white px-8 py-4 text-base font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 transform hover:-translate-y-1 rounded-lg"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
