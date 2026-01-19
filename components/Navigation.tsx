'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const targetId = href.substring(1)
      
      if (pathname !== '/') {
        router.push(`/${href}`)
      } else {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          })
        }
      }
      setMobileMenuOpen(false)
    }
  }

  const navLinks = [
    { href: '#home', label: 'HOME', isRoute: false },
    { href: '/menu', label: 'MENU', isRoute: true },
    { href: '/gallery', label: 'GALLERY', isRoute: true },
    { href: '#about', label: 'ABOUT', isRoute: false },
  ]

  return (
    <>
      {/* Premium Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/80 backdrop-blur-2xl shadow-2xl border-b border-primary/20 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        {/* Animated Top Border */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Premium Logo with Glow Effect */}
            <Link
              href="/"
              className="relative group"
              onMouseEnter={() => setHoveredLink('logo')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all duration-500 rounded-lg opacity-0 group-hover:opacity-100"></div>
              <div className={`relative transition-all duration-300 ${
                hoveredLink === 'logo' ? 'scale-110' : ''
              }`}>
                <Image
                  src="/tigerlogo.png"
                  alt="Tiger Club Logo"
                  width={200}
                  height={100}
                  className="h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto object-contain"
                  priority
                  quality={90}
                />
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></div>
            </Link>

            {/* Premium Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`relative px-4 py-2 text-xs font-heading font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                      pathname === link.href 
                        ? 'text-primary' 
                        : hoveredLink === link.href 
                        ? 'text-white' 
                        : 'text-gray-400'
                    }`}
                  >
                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-primary/10 rounded-lg transition-all duration-300 ${
                      hoveredLink === link.href || pathname === link.href ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}></div>
                    
                    {/* Neon Glow Effect */}
                    <div className={`absolute inset-0 bg-primary/20 blur-md rounded-lg transition-all duration-300 ${
                      hoveredLink === link.href ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    
                    {/* Text */}
                    <span className="relative z-10">{link.label}</span>
                    
                    {/* Animated Underline */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-primary transition-all duration-300 ${
                      hoveredLink === link.href || pathname === link.href ? 'w-full' : 'w-0'
                    }`}></div>
                  </Link>
                ) : (
                  <Link
                    key={link.href}
                    href={pathname === '/' ? link.href : `/${link.href}`}
                    onClick={(e) => {
                      if (pathname === '/') {
                        e.preventDefault()
                        handleSmoothScroll(e as any, link.href)
                      }
                    }}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`relative px-4 py-2 text-xs font-heading font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                      hoveredLink === link.href ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-primary/10 rounded-lg transition-all duration-300 ${
                      hoveredLink === link.href ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}></div>
                    
                    {/* Neon Glow Effect */}
                    <div className={`absolute inset-0 bg-primary/20 blur-md rounded-lg transition-all duration-300 ${
                      hoveredLink === link.href ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    
                    {/* Text */}
                    <span className="relative z-10">{link.label}</span>
                    
                    {/* Animated Underline */}
                    <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-primary transition-all duration-300 ${
                      hoveredLink === link.href ? 'w-full' : 'w-0'
                    }`}></div>
                  </Link>
                )
              ))}
              
              {/* Premium Reserve Button */}
              <button 
                className="relative ml-4 px-6 py-2.5 bg-primary hover:bg-primary-light text-white text-xs font-heading font-bold uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden group"
                onMouseEnter={() => setHoveredLink('button')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                
                {/* Text */}
                <span className="relative z-10 flex items-center gap-2">
                  RESERVE TABLE
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                
                {/* Neon Shadow */}
                <div className={`absolute -inset-1 bg-primary/50 blur-lg transition-all duration-300 ${
                  hoveredLink === 'button' ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </button>
            </div>

            {/* Premium Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative p-2 text-white group"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></div>
                <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}></div>
                <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></div>
              </div>
            </button>
          </div>

          {/* Premium Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-6 pb-6 space-y-2 animate-fade-in border-t border-primary/20 pt-4">
              {navLinks.map((link) => (
                link.isRoute ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-sm font-heading font-bold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-primary/10 rounded-lg transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    key={link.href}
                    href={pathname === '/' ? link.href : `/${link.href}`}
                    onClick={(e) => {
                      if (pathname === '/') {
                        e.preventDefault()
                        handleSmoothScroll(e as any, link.href)
                      }
                      setMobileMenuOpen(false)
                    }}
                    className="block px-4 py-3 text-sm font-heading font-bold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-primary/10 rounded-lg transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <button className="premium-button-primary w-full mt-4 text-white px-6 py-3 text-sm font-heading font-bold uppercase tracking-[0.15em] relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  RESERVE TABLE
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
