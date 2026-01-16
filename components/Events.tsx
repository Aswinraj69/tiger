'use client'

import { useEffect, useRef, useState } from 'react'

export default function Events() {
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

  const events = [
    {
      date: { day: '15', month: 'JAN' },
      title: 'Friday Night Live',
      description: 'International DJ lineup with premium sound system and LED visuals',
      time: '10:00 PM - 3:00 AM',
      featured: true,
    },
    {
      date: { day: '22', month: 'JAN' },
      title: 'VIP Exclusive Night',
      description: 'Private event with celebrity guest DJ and bottle service',
      time: '9:00 PM - 2:00 AM',
      featured: false,
    },
    {
      date: { day: '29', month: 'JAN' },
      title: 'New Year Celebration',
      description: 'Grand celebration with fireworks, live performances, and premium bar',
      time: '8:00 PM - 4:00 AM',
      featured: false,
    },
  ]

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative py-16 sm:py-24 lg:py-32 bg-dark overflow-hidden"
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
              Upcoming Events
            </h2>
            <span className="text-primary text-2xl">✦</span>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 uppercase tracking-[0.15em] font-heading font-semibold">
            Exclusive Nights & Special Performances
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className={`bg-dark-card border border-white/10 rounded-xl p-6 sm:p-8 hover:border-primary transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {event.featured && (
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded">
                  Featured
                </div>
              )}
              
              <div className="flex gap-4 sm:gap-6 mb-4">
                <div className="flex flex-col items-center justify-center min-w-[70px] sm:min-w-[80px] p-3 sm:p-4 bg-primary/10 border border-primary rounded-lg">
                  <span className="text-2xl sm:text-3xl font-bold text-primary leading-none">
                    {event.date.day}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mt-1">
                    {event.date.month}
                  </span>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-display text-xl sm:text-2xl font-bold mb-2 text-white">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-3 leading-relaxed font-body font-medium">
                    {event.description}
                  </p>
                  <span className="inline-block bg-primary/10 border border-primary text-primary px-3 py-1 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded">
                    {event.time}
                  </span>
                </div>
              </div>
              
              <button className="premium-button w-full mt-4 text-white py-3 px-6 text-sm sm:text-base font-heading font-bold uppercase tracking-[0.15em] relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  BOOK NOW
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
