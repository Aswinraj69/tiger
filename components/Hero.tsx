'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface HeroProps {
  isLoaded: boolean
}

export default function Hero({ isLoaded }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setVideoLoaded(true)
      video.play().catch((err) => {
        console.log('Video autoplay prevented:', err)
        // Video will show poster image
      })
    }

    const handleError = (e: Event) => {
      console.error('Video error:', e)
      setVideoError(true)
    }

    const handleLoadedMetadata = () => {
      video.play().catch(() => {
        // Autoplay prevented, but video is loaded
      })
    }

    // Try to load video
    video.addEventListener('canplay', handleCanPlay, { once: true })
    video.addEventListener('error', handleError, { once: true })
    video.addEventListener('loadedmetadata', handleLoadedMetadata, { once: true })

    // Set video source and load
    video.load()

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('error', handleError)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
    }
  }, [])

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <>
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
              preload="metadata"
              poster="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&h=1080&fit=crop"
              onLoadedData={() => {
                if (videoRef.current) {
                  videoRef.current.play().catch(() => {})
                }
              }}
            >
              {/* Main background video */}
              <source
                src="/main-video.mp4"
                type="video/mp4"
              />
            </video>
          </>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&h=1080&fit=crop)',
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/10 via-dark/30 to-dark/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div
          className={`mb-4 sm:mb-6 leading-none ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.2s' }}
        >
          <Image
            src="/tigerlogo.png"
            alt="Tiger Club Logo"
            width={600}
            height={300}
            className="w-[200px] h-auto sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] mx-auto object-contain drop-shadow-2xl"
            priority
            quality={95}
          />
        </div>
        <p
          className={`text-xl sm:text-2xl md:text-3xl font-heading font-bold tracking-[0.3em] uppercase text-gray-300 mb-3 sm:mb-4 ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          Where Night Becomes Legend
        </p>
        <p
          className={`text-base sm:text-lg md:text-xl font-body font-medium text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto tracking-wide ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.6s' }}
        >
          An exclusive sanctuary of sound, style, and sophistication
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.8s' }}
        >
          <button 
            onClick={() => window.open('https://www.instagram.com/tigerbardxb?igsh=YjNyYXFwNjJyMjFo', '_blank', 'noopener,noreferrer')}
            className="premium-button-outline text-white px-8 sm:px-12 py-4 sm:py-5 text-sm sm:text-base font-heading font-bold uppercase tracking-[0.15em] relative overflow-hidden group w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              VIEW EVENTS
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center justify-center gap-2 text-gray-400 text-xs uppercase tracking-wider animate-bounce">
        <div className="w-0.5 h-10 bg-gradient-to-b from-primary to-transparent"></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
