'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const products = [
  {
    id: 1,
    name: 'Classic White Sneaker',
    description: 'Timeless elegance for every occasion.',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=1067&fit=crop&q=85',
      'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&h=1067&fit=crop&q=85',
    ],
  },
  {
    id: 2,
    name: 'Urban Runner',
    description: 'Performance crafted with style.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=1067&fit=crop&q=85',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=1067&fit=crop&q=85',
    ],
  },
  {
    id: 3,
    name: 'Canvas High-Top',
    description: 'Street style meets comfort.',
    images: [
      'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800&h=1067&fit=crop&q=85',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=1067&fit=crop&q=85',
    ],
  },
  {
    id: 4,
    name: 'Premium Leather',
    description: 'Crafted for the discerning.',
    images: [
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&h=1067&fit=crop&q=85',
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&h=1067&fit=crop&q=85',
    ],
  },
  {
    id: 5,
    name: 'Sport Elite',
    description: 'Engineered for movement.',
    images: [
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&h=1067&fit=crop&q=85',
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=1067&fit=crop&q=85',
    ],
  },
  {
    id: 6,
    name: 'Minimalist Low',
    description: 'Understated sophistication.',
    images: [
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=1067&fit=crop&q=85',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&h=1067&fit=crop&q=85',
    ],
  },
]

function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleToggleImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleToggleImage()
    }
  }

  return (
    <div
      className={`group cursor-pointer transition-opacity duration-500 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleToggleImage}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
      aria-label={`${product.name}. Click or press Enter to view alternate image.`}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-brozzo-white rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300">
        {product.images.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`${product.name} - view ${idx + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover transition-opacity duration-500 ${
              idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            unoptimized
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
        ))}
        
        {/* Hover indicator */}
        <div className="absolute inset-0 bg-gradient-to-t from-brozzo-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* Image counter */}
        <div className="absolute top-3 right-3 bg-white/90 text-brozzo-charcoal text-xs px-2 py-1 rounded-full font-medium">
          {currentImageIndex + 1}/{product.images.length}
        </div>
      </div>

      <div className="mt-4 px-1">
        <h3 className="text-lg sm:text-xl font-medium text-brozzo-charcoal mb-1 tracking-tight">
          {product.name}
        </h3>
        <p className="text-sm sm:text-base text-brozzo-charcoal/70 mb-3 leading-relaxed">
          {product.description}
        </p>
        <span className="inline-block text-sm font-medium text-brozzo-navy hover:text-brozzo-tan transition-colors duration-200 border-b border-brozzo-navy/20 group-hover:border-brozzo-tan">
          View Details →
        </span>
      </div>
    </div>
  )
}

export default function GalleryGrid() {
  return (
    <section id="gallery" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-brozzo-off-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brozzo-charcoal mb-4 tracking-tight">
            The Collection
          </h2>
          <p className="text-base sm:text-lg text-brozzo-charcoal/70 max-w-2xl mx-auto">
            Carefully curated styles that blend tradition with modern sensibility.
          </p>
        </div>

        {/* Product grid - responsive: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Call-to-action hint */}
        <p className="text-center mt-8 text-sm text-brozzo-charcoal/60 italic">
          Tap or hover to view alternate angles
        </p>
      </div>
    </section>
  )
}

