'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-dark-card border-t border-white/10 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-secondary to-accent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-12 sm:mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-3xl sm:text-4xl font-black tracking-wider mb-6 text-white">
              TIGER
            </h3>
            <p className="text-gray-400 text-base sm:text-lg mb-6 leading-relaxed">
              Premium Bar & Dance Club
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              An exclusive sanctuary of sound, style, and sophistication. Where night becomes legend.
            </p>
          </div>

          {/* Location Section */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold uppercase tracking-wider mb-6 text-white">
              Location
            </h4>
            <div className="space-y-4">
              <p className="text-gray-400 text-base leading-relaxed">
                Dubai, United Arab Emirates
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Premium nightlife destination in the heart of Dubai
              </p>
              <div className="pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-light text-sm font-semibold uppercase tracking-wider transition-colors"
                >
                  Get Directions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold uppercase tracking-wider mb-6 text-white">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:reservations@tigerclub.com"
                className="block text-gray-400 hover:text-primary text-base transition-colors"
              >
                reservations@tigerclub.com
              </a>
              <a
                href="tel:+971XXXXXXXXX"
                className="block text-gray-400 hover:text-primary text-base transition-colors"
              >
                +971 XX XXX XXXX
              </a>
              <div className="pt-4">
                <button className="premium-button text-white px-6 py-3 text-sm font-heading font-bold uppercase tracking-[0.15em] relative overflow-hidden group">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    BOOK NOW
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Social & Hours Section */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold uppercase tracking-wider mb-6 text-white">
              Follow Us
            </h4>
            <div className="space-y-4 mb-6">
              <a
                href="#"
                className="block text-gray-400 hover:text-primary text-base transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-primary text-base transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-primary text-base transition-colors"
              >
                Twitter
              </a>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-gray-500 text-sm mb-2">Opening Hours</p>
              <p className="text-gray-400 text-sm">Mon - Sun: 9 PM - 3 AM</p>
            </div>
          </div>
        </div>

        {/* Newsletter Section
        <div className="border-t border-white/10 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-white">
              Stay Updated
            </h4>
            <p className="text-gray-400 mb-6">
              Subscribe to receive exclusive offers and event updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-dark border border-white/20 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
              <button className="premium-button-primary text-white px-6 py-3 font-heading font-bold uppercase tracking-[0.15em] relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  SUBSCRIBE
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              &copy; 2026 Tiger Club. All rights reserved.
            </p>
            {/* <div className="flex gap-6">
              <Link href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary text-sm transition-colors">
                Terms of Service 
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
