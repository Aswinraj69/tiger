'use client'

import { useEffect, useRef, useState } from 'react'

export default function DJSection() {
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

  const djFeatures = [
    {
      title: 'Premium Sound System',
      description: 'State-of-the-art Funktion-One sound system delivering crystal-clear audio',
      icon: '🔊',
    },
    {
      title: 'World-Class DJs',
      description: 'International DJ lineup featuring top artists from around the globe',
      icon: '🎧',
    },
    {
      title: 'LED Visuals',
      description: 'Immersive LED walls and lighting synchronized with the music',
      icon: '💡',
    },
    {
      title: 'VIP DJ Booth',
      description: 'Exclusive VIP area with direct access to the DJ booth',
      icon: '⭐',
    },
  ]

  return (
    <section
      id="dj"
      ref={sectionRef}
      className="relative py-16 sm:py-24 lg:py-32 bg-dark-card overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary via-secondary to-accent animate-pulse"></div>
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
              DJ & Sound
            </h2>
            <span className="text-primary text-2xl">✦</span>
          </div>
          <p className="text-lg sm:text-xl text-gray-400 uppercase tracking-wider">
            Premium Audio Experience
          </p>
        </div>

        {/* DJ Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {djFeatures.map((feature, index) => (
            <div
              key={index}
              className={`bg-dark border border-white/10 rounded-xl p-6 sm:p-8 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* DJ Booth Image Section */}
        <div
          className={`mt-12 sm:mt-16 lg:mt-20 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.5s' }}
        >
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=1200&h=800&fit=crop"
              alt="DJ Booth"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent flex items-end">
              <div className="p-6 sm:p-8 w-full">
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                  Main Stage
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Experience the ultimate sound system with 360° immersive audio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
