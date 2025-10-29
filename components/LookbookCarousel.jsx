'use client'

import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'

const lookbookImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&h=1067&fit=crop&q=85',
    caption: 'Urban essentials',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&h=1067&fit=crop&q=85',
    caption: 'Weekend vibes',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&h=1067&fit=crop&q=85',
    caption: 'Evening elegance',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=800&h=1067&fit=crop&q=85',
    caption: 'Casual comfort',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&h=1067&fit=crop&q=85',
    caption: 'Refined details',
  },
]

export default function LookbookCarousel() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8
      const newScrollLeft = scrollRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
      
      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-brozzo-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-12">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brozzo-charcoal mb-3 sm:mb-4 tracking-tight text-center">
          Lifestyle Lookbook
        </h2>
        <p className="text-sm sm:text-lg text-brozzo-charcoal/70 text-center max-w-2xl mx-auto">
          See how our pieces fit into everyday moments.
        </p>
      </div>

      {/* Carousel container */}
      <div className="relative">
        {/* Left scroll button */}
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          className={`hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 focus-visible-ring ${
            !canScrollLeft ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <svg
            className="w-6 h-6 text-brozzo-charcoal"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        {/* Right scroll button */}
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          className={`hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 focus-visible-ring ${
            !canScrollRight ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <svg
            className="w-6 h-6 text-brozzo-charcoal"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        {/* Scrollable images */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-3 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 sm:px-6 lg:px-8 pb-2"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {lookbookImages.map((image, index) => (
            <div
              key={image.id}
              className="flex-shrink-0 snap-center snap-always first:ml-0 last:mr-0"
              style={{ width: 'min(70vw, 380px)' }}
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl group">
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  sizes="(max-width: 640px) 70vw, 380px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-110"
                  unoptimized
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brozzo-charcoal/80 via-brozzo-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-white text-base sm:text-lg font-semibold tracking-wide drop-shadow-lg">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile scroll hint */}
        <p className="text-center mt-4 sm:mt-6 text-xs sm:text-sm text-brozzo-charcoal/60 md:hidden">
          ← Swipe to explore →
        </p>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

