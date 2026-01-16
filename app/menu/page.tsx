'use client'

import { useEffect, useRef, useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function MenuPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const menuSections = [
    {
      id: 'bar-bites',
      title: 'Bar Bites',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=1600&fit=crop',
      description: 'Perfect accompaniments to your drinks',
    },
    {
      id: 'food-menu',
      title: 'Food Menu',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=1600&fit=crop',
      description: 'Gourmet dishes crafted by our expert chefs',
    },
    {
      id: 'happy-hour',
      title: 'Happy Hour',
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1200&h=1600&fit=crop',
      description: 'Special offers every day from 5 PM to 8 PM',
    },
  ]

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-gray-900 overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-[#FAF9F6] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black mb-4 text-gray-900">
            <span className="text-primary">MENU</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium selection of cocktails, spirits, and gourmet cuisine
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-12">
            {menuSections.map((section, index) => (
              <div
                key={section.id}
                className={`group cursor-pointer ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
              >
                {/* Section Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-200 group-hover:border-primary transition-colors duration-300">
                  <div>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 mt-2">{section.description}</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-primary">
                    <span className="text-sm font-semibold uppercase tracking-wider">
                      {activeSection === section.id ? 'Hide' : 'View'} Menu
                    </span>
                    <svg
                      className={`w-6 h-6 transition-transform duration-300 ${
                        activeSection === section.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Expanded Menu Image */}
                {activeSection === section.id && (
                  <div className="mt-6 rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
                    <div className="relative h-96 sm:h-[500px] lg:h-[600px]">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                        <div className="p-8 sm:p-12 w-full">
                          <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                            {section.title}
                          </h3>
                          <p className="text-white/90 text-lg max-w-2xl">
                            {section.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Ready to Experience Tiger?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Reserve your table and join us for an unforgettable night
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#home"
              className="premium-button-primary inline-block text-white px-8 py-4 text-base font-heading font-bold uppercase tracking-[0.15em] relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                RESERVE TABLE
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
            <Link
              href="/#about"
              className="premium-button-outline inline-block text-white px-8 py-4 text-base font-heading font-bold uppercase tracking-[0.15em] relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                LEARN MORE
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
