'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function BrandStory() {
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

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-brozzo-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div
            className={`relative aspect-[4/5] rounded-sm overflow-hidden shadow-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <Image
              src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&h=1500&fit=crop&q=85"
              alt="Brozzo craft and heritage"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brozzo-charcoal mb-6 tracking-tight leading-tight">
              Crafted in Koppam
            </h2>
            
            <div className="space-y-4 text-base sm:text-lg text-brozzo-charcoal/80 leading-relaxed">
              <p>
                Founded in the heart of Kerala, <strong className="font-medium text-brozzo-charcoal">Brozzo</strong> represents 
                a commitment to timeless quality and authentic craftsmanship.
              </p>
              
              <p>
                Every piece in our collection is carefully selected to blend classic silhouettes 
                with modern comfort — footwear and accessories designed for those who value 
                both style and substance.
              </p>
              
              <p>
                From the bustling streets of Koppam to your everyday journey, we bring you 
                products that honor tradition while embracing contemporary aesthetics.
              </p>
              
              <p className="font-serif italic text-brozzo-navy pt-4 border-t border-brozzo-tan/30">
                &ldquo;Where heritage meets modern sensibility.&rdquo;
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 pt-8 border-t border-brozzo-charcoal/10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-brozzo-navy mb-1">5.0</div>
                <div className="text-xs sm:text-sm text-brozzo-charcoal/60">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-brozzo-navy mb-1">100%</div>
                <div className="text-xs sm:text-sm text-brozzo-charcoal/60">Quality Promise</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-brozzo-navy mb-1">Local</div>
                <div className="text-xs sm:text-sm text-brozzo-charcoal/60">Kerala Pride</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

