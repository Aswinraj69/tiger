'use client'

import { useEffect, useRef, useState } from 'react'

export default function VideoCards() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

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

  const videoCards = [
    {
      id: 1,
      title: 'Premium Cocktails',
      description: 'Crafted with precision',
      video: '/party1.mp4',
    },
    {
      id: 2,
      title: 'Live Music',
      description: 'Unforgettable performances',
      video: '/party2.mp4',
    },
    {
      id: 3,
      title: 'Dance Floor',
      description: 'Energy never stops',
      video: '/party1.mp4',
    },
    {
      id: 4,
      title: 'VIP Experience',
      description: 'Exclusive luxury',
      video: '/party2.mp4',
    },
    {
      id: 5,
      title: 'Night Vibes',
      description: 'Where legends are made',
      video: '/party1.mp4',
    },
    {
      id: 6,
      title: 'Premium Bar',
      description: 'World-class selection',
      video: '/party2.mp4',
    },
    {
      id: 7,
      title: 'Signature Drinks',
      description: 'Expert mixology',
      video: '/party1.mp4',
    },
    {
      id: 8,
      title: 'Party Atmosphere',
      description: 'Unmatched energy',
      video: '/party2.mp4',
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-[0.8]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/backgrount4.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-dark/20 to-dark/30"></div>
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
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[0.15em] text-white">
              EXPERIENCE
            </h2>
            <span className="text-primary text-2xl">✦</span>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 uppercase tracking-[0.15em] font-heading font-semibold">
            Premium Nightlife Moments
          </p>
        </div>

        {/* Horizontal Scrolling Video Cards */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto overflow-y-hidden scrollbar-hide pb-6"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div className="flex gap-6 w-max">
              {videoCards.map((card, index) => (
                <VideoCard
                  key={card.id}
                  card={card}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/50"></div>
            <div className="w-2 h-2 rounded-full bg-primary/50"></div>
            <div className="w-2 h-2 rounded-full bg-primary/50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Video Card Component
function VideoCard({ card, index, isVisible }: { card: any; index: number; isVisible: boolean }) {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setVideoLoaded(true)
    }

    const handleLoadedData = () => {
      // Mark as loaded as soon as basic data is ready (faster than full canplay)
      setVideoLoaded(true)
    }

    video.addEventListener('loadeddata', handleLoadedData, { once: true })
    video.addEventListener('canplay', handleCanPlay, { once: true })

    // Try to autoplay the video as soon as possible
    video
      .play()
      .then(() => {
        setVideoLoaded(true)
      })
      .catch(() => {
        // Autoplay might be blocked on some browsers, but card will still show once loaded
      })

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [])

  return (
    <div
      className={`flex-shrink-0 group ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="premium-video-card-small relative overflow-hidden rounded-xl cursor-pointer">
        {!videoLoaded && (
          <div className="absolute inset-0 bg-dark flex items-center justify-center z-10">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={card.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/60 to-transparent flex items-end">
          <div className="p-4 sm:p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="font-display text-xl sm:text-2xl font-black text-white mb-1 tracking-[0.05em]">
              {card.title}
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm font-body font-medium">
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
