'use client'

import { useState, useEffect, useMemo, memo, useRef } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

// Memoize gallery images to prevent recalculation on every render
const GALLERY_IMAGES = [
  { src: '/DSC_2994.jpg', orientation: 'landscape' },
  { src: '/DSC_3003.jpg', orientation: 'landscape' },
  { src: '/DSC_3007.jpg', orientation: 'landscape' },
  { src: '/DSC_3010.jpg', orientation: 'landscape' },
  { src: '/DSC_3014.jpg', orientation: 'landscape' },
  { src: '/DSC_3101.jpg', orientation: 'landscape' },
  { src: '/DSC_3064.jpg', orientation: 'landscape' },
  { src: '/DSC_3065.jpg', orientation: 'landscape' },
  { src: '/DSC_3070.jpg', orientation: 'landscape' },
  { src: '/DSC_3071.jpg', orientation: 'landscape' },
  { src: '/DSC_3072-Edit.jpg', orientation: 'landscape' },
  { src: '/DSC_3077.jpg', orientation: 'landscape' },
  { src: '/DSC_3082.jpg', orientation: 'landscape' },
  { src: '/DSC_3083.jpg', orientation: 'landscape' },
  { src: '/DSC_3085.jpg', orientation: 'landscape' },
  { src: '/DSC_3089.jpg', orientation: 'landscape' },
  { src: '/DSC_3090.jpg', orientation: 'landscape' },
  { src: '/DSC_3091.jpg', orientation: 'landscape' },
  { src: '/DSC_3092.jpg', orientation: 'landscape' },
  { src: '/DSC_3094.jpg', orientation: 'landscape' },
  { src: '/DSC_3095.jpg', orientation: 'landscape' },
  { src: '/DSC_3097.jpg', orientation: 'landscape' },
  { src: '/DSC_3098.jpg', orientation: 'landscape' },
].map((img, index) => ({
  ...img,
  id: `gallery-${index}`,
}))

// Loading skeleton component
const ImageSkeleton = () => (
  <div className="relative overflow-hidden rounded-lg bg-gray-800 animate-pulse">
    <div className={`w-full aspect-[4/3] bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700`} />
  </div>
)

// Memoized gallery item component with intersection observer
const GalleryItem = memo(({ image, index, isLoaded, onSelect }: {
  image: typeof GALLERY_IMAGES[0]
  index: number
  isLoaded: boolean
  onSelect: (src: string, index: number) => void
}) => {
  const [isInView, setIsInView] = useState(index < 6) // Load first 6 images immediately
  const [imageLoaded, setImageLoaded] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isInView) return // Already loading

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { 
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.01
      }
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => observer.disconnect()
  }, [isInView])

  return (
    <div
      ref={itemRef}
      className={`mb-3 sm:mb-4 lg:mb-6 break-inside-avoid group cursor-pointer ${
        isLoaded ? 'animate-fade-in' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.02}s` }}
      onClick={() => onSelect(image.src, index)}
    >
      <div className="relative overflow-hidden rounded-lg">
        {!imageLoaded && (
          <div className={`absolute inset-0 z-0 ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
            <ImageSkeleton />
          </div>
        )}
        {isInView && (
          <div className={`relative ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
            <Image
              src={image.src}
              alt={`Gallery image ${index + 1}`}
              width={800}
              height={image.orientation === 'portrait' ? 1067 : 600}
              className={`w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700 ${
                image.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'
              }`}
              loading={index < 6 ? 'eager' : 'lazy'}
              priority={index < 6}
              quality={75}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        )}
        {!isInView && <ImageSkeleton />}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>
      </div>
    </div>
  )
})

GalleryItem.displayName = 'GalleryItem'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [modalImageLoaded, setModalImageLoaded] = useState(false)
  const modalImageRef = useRef<HTMLImageElement | null>(null)

  // Memoize gallery images
  const galleryImages = useMemo(() => GALLERY_IMAGES, [])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Reset and handle modal image loading - optimized for instant display
  useEffect(() => {
    if (selectedImage && selectedIndex !== null) {
      setModalImageLoaded(false)
      
      // Use requestAnimationFrame for immediate check after DOM update
      requestAnimationFrame(() => {
        setTimeout(() => {
          const img = modalImageRef.current
          if (img) {
            // If image is already in browser cache, show immediately
            if (img.complete && img.naturalHeight !== 0) {
              setModalImageLoaded(true)
              return
            }
          }
        }, 10)
      })
    }
  }, [selectedImage, selectedIndex])
  
  // Preload adjacent images for faster navigation
  useEffect(() => {
    if (selectedIndex !== null && typeof window !== 'undefined') {
      // Preload next image
      if (selectedIndex < galleryImages.length - 1) {
        const nextImg = document.createElement('img')
        nextImg.src = galleryImages[selectedIndex + 1].src
      }
      // Preload previous image
      if (selectedIndex > 0) {
        const prevImg = document.createElement('img')
        prevImg.src = galleryImages[selectedIndex - 1].src
      }
    }
  }, [selectedIndex, galleryImages])

  // Handle keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
        setSelectedIndex(null)
        setModalImageLoaded(false)
      } else if (e.key === 'ArrowLeft' && selectedIndex > 0) {
        const newIndex = selectedIndex - 1
        setSelectedIndex(newIndex)
        setSelectedImage(galleryImages[newIndex].src)
        setModalImageLoaded(false)
      } else if (e.key === 'ArrowRight' && selectedIndex < galleryImages.length - 1) {
        const newIndex = selectedIndex + 1
        setSelectedIndex(newIndex)
        setSelectedImage(galleryImages[newIndex].src)
        setModalImageLoaded(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedIndex, galleryImages])

  const handleImageSelect = (src: string, index: number) => {
    setSelectedImage(src)
    setSelectedIndex(index)
    setModalImageLoaded(false)
  }

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null && selectedIndex > 0) {
      const newIndex = selectedIndex - 1
      setSelectedIndex(newIndex)
      setSelectedImage(galleryImages[newIndex].src)
      setModalImageLoaded(false)
    }
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null && selectedIndex < galleryImages.length - 1) {
      const newIndex = selectedIndex + 1
      setSelectedIndex(newIndex)
      setSelectedImage(galleryImages[newIndex].src)
      setModalImageLoaded(false)
    }
  }

  const handleClose = () => {
    setSelectedImage(null)
    setSelectedIndex(null)
    setModalImageLoaded(false)
  }

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
              <GalleryItem
                key={image.id}
                image={image}
                index={index}
                isLoaded={isLoaded}
                onSelect={(src) => handleImageSelect(src, index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal - Detailed View */}
      {selectedImage && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/98 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-primary text-4xl sm:text-5xl font-bold transition-colors z-20 bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
            onClick={handleClose}
            aria-label="Close modal"
          >
            ×
          </button>

          {/* Previous Button */}
          {selectedIndex > 0 && (
            <button
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-white hover:text-primary text-3xl sm:text-4xl font-bold transition-colors z-20 bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          {/* Next Button */}
          {selectedIndex < galleryImages.length - 1 && (
            <button
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-white hover:text-primary text-3xl sm:text-4xl font-bold transition-colors z-20 bg-black/50 hover:bg-black/70 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
              onClick={handleNext}
              aria-label="Next image"
            >
              ›
            </button>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full text-sm sm:text-base z-20">
            {selectedIndex + 1} / {galleryImages.length}
          </div>

          {/* Image Container */}
          <div 
            className="relative w-full h-full flex items-center justify-center p-4" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Loading Spinner - Only show if image not ready */}
            {!modalImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            {/* Image - Shows immediately if cached, otherwise loads */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] flex items-center justify-center">
                <img
                  ref={modalImageRef}
                  src={selectedImage}
                  alt={`Gallery image ${selectedIndex + 1}`}
                  className={`w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${
                    modalImageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="eager"
                  onLoad={() => {
                    setModalImageLoaded(true)
                  }}
                  onError={() => {
                    console.error('Failed to load image:', selectedImage)
                    setModalImageLoaded(true) // Show even if error to avoid stuck loading
                  }}
                />
              </div>
            </div>
          </div>
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
