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
              Premium Barstock & Exchange
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
                Barcelo Al Jaddaf, Dubai, United Arab Emirates
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Premium nightlife destination in the heart of Dubai
              </p>
              <div className="pt-4">
                <a
                  href="https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=ae&sa=X&geocode=KTM4z0g9Q18-MVGU7rF3rOiy&daddr=Al+Jadaf+-+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
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
                hello@tsebar.com
              </a>
              <a
                href="tel:+971565554626"
                className="block text-gray-400 hover:text-primary text-base transition-colors"
              >
                +971 565554626
              </a>
              <div className="pt-2">
                <a
                  href="https://wa.me/971565554626?text=Hello%20Tiger%20Club%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-2 rounded-lg transition-all duration-300 group shadow-md hover:shadow-lg hover:scale-105"
                  aria-label="Contact us on WhatsApp"
                >
                  {/* WhatsApp Logo SVG */}
                  <svg 
                    className="w-4 h-4" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="font-semibold text-xs sm:text-sm">WhatsApp Us</span>
                  <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
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
                href="https://www.instagram.com/tigerbardxb?igsh=YjNyYXFwNjJyMjFo"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-primary text-base transition-colors"
              >
                Instagram
              </a>
            </div>
            <div className="pt-4 border-t border-white/10">
              <p className="text-gray-500 text-sm mb-2">Opening Hours</p>
              <p className="text-gray-400 text-sm">Mon - Sun: 12 PM - 3 AM</p>
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
              &copy; 2026 Tiger bar stock exchange. All rights reserved.
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
