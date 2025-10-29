import Hero from '@/components/Hero'
import GalleryGrid from '@/components/GalleryGrid'
import BrandStory from '@/components/BrandStory'
import LookbookCarousel from '@/components/LookbookCarousel'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main id="main-content" className="overflow-x-hidden">
      <Hero />
      <GalleryGrid />
      <BrandStory />
      <LookbookCarousel />
      <Contact />
      <Footer />
    </main>
  )
}

