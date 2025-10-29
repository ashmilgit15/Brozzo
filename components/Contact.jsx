'use client'

import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const currentSection = sectionRef.current

    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [])

  const openMaps = () => {
    window.open('https://maps.google.com/?q=V5CQ+V52,Koppam,Kerala+679309', '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-brozzo-white"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brozzo-charcoal mb-4 tracking-tight">
            Visit Us
          </h2>
          <p className="text-base sm:text-lg text-brozzo-charcoal/70 max-w-2xl mx-auto">
            Experience the collection in person at our Koppam location.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 lg:gap-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-brozzo-charcoal/60 uppercase tracking-wider mb-2">
                Location
              </h3>
              <p className="text-lg sm:text-xl text-brozzo-charcoal leading-relaxed">
                V5CQ+V52, Koppam<br />
                Kerala 679309<br />
                India
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-brozzo-charcoal/60 uppercase tracking-wider mb-2">
                Hours
              </h3>
              <p className="text-lg sm:text-xl text-brozzo-charcoal">
                Open ⋅ Closes 11 pm
              </p>
              <p className="text-sm text-brozzo-charcoal/60 mt-1">
                Daily
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-brozzo-charcoal/60 uppercase tracking-wider mb-2">
                Rating
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-lg text-brozzo-charcoal font-medium">5.0</span>
                <span className="text-sm text-brozzo-charcoal/60">(3 reviews)</span>
              </div>
            </div>

            <button
              onClick={openMaps}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brozzo-navy text-white rounded-md text-sm sm:text-base font-medium hover:bg-brozzo-charcoal transition-colors duration-300 focus-visible-ring mt-4"
              aria-label="Open location in Google Maps"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Get Directions
            </button>
          </div>

          {/* Map placeholder with decorative element */}
          <div className="relative aspect-[4/3] md:aspect-square rounded-sm overflow-hidden shadow-lg bg-brozzo-tan/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-brozzo-navy/30"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm text-brozzo-charcoal/60">
                  Koppam, Kerala
                </p>
              </div>
            </div>
            {/* Optional: Replace with actual embedded map or static map image */}
            {/* 
            <iframe
              title="Brozzo location map"
              src="https://maps.google.com/maps?q=V5CQ+V52,Koppam,Kerala+679309&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            */}
          </div>
        </div>
      </div>
    </section>
  )
}

