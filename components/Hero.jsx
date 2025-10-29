'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const parallaxRef = useRef(null)

  useEffect(() => {
    // Lightweight CSS-based parallax effect using requestAnimationFrame
    // Only runs if user hasn't requested reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (parallaxRef.current) {
            const scrolled = window.scrollY
            const rate = scrolled * 0.5
            parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToGallery = () => {
    const gallery = document.getElementById('gallery')
    if (gallery) {
      gallery.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen min-h-[500px] sm:min-h-[600px] overflow-hidden bg-brozzo-charcoal">
      {/* Parallax container */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=2000&h=1200&fit=crop&q=80"
          alt="Brozzo — Classic, Reimagined"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center sm:object-center"
          style={{ objectPosition: 'center 40%' }}
          unoptimized
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brozzo-charcoal/40 via-brozzo-charcoal/30 to-brozzo-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end sm:items-center justify-center px-4 sm:px-6 lg:px-8 pb-16 sm:pb-0">
        <div className="text-center max-w-4xl mx-auto animate-on-scroll is-visible w-full">
          <h1 className="font-serif text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-6 tracking-tight leading-tight">
            BROZZO
          </h1>
          <p className="font-serif text-2xl sm:text-2xl md:text-3xl text-brozzo-tan mb-2 sm:mb-4 tracking-wide">
            Classic, Reimagined
          </p>
          <p className="text-sm sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-10 font-light tracking-wide max-w-md mx-auto">
            Every step shaped by craft.
          </p>
          <button
            onClick={scrollToGallery}
            aria-label="Scroll to collection gallery"
            className="inline-block w-full sm:w-auto px-8 sm:px-8 py-4 sm:py-4 bg-white text-brozzo-charcoal rounded-full sm:rounded-md text-base sm:text-base font-semibold shadow-lg hover:bg-brozzo-tan hover:scale-105 transition-all duration-300 focus-visible-ring"
          >
            Explore the Collection
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

