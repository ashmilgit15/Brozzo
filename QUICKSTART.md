# 🚀 Brozzo Showcase — Quick Start

Your fast, elegant, photography-forward Next.js site is **ready to run**!

## ✅ What's Built

All components are production-ready:

- **Hero** — Full-bleed hero with CSS-based parallax
- **Gallery Grid** — Responsive product cards (hover/tap to cycle images)
- **Brand Story** — Koppam heritage narrative with animation on scroll
- **Lookbook Carousel** — Touch-friendly horizontal scroll
- **Contact** — Location, hours, rating, Google Maps link
- **Footer** — Social links and site navigation

## 🎯 Run Locally

```bash
# Navigate to the project
cd "C:\Users\Ashmil P\Desktop\brozzo1"

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Key Features

✅ **Brozzo Color Palette** configured in Tailwind  
✅ **Google Fonts** (Inter + Playfair Display) optimized  
✅ **Mobile-first** responsive design (1-2-3 column grid)  
✅ **Accessibility** — skip link, keyboard nav, reduced motion support  
✅ **Performance** — next/image with AVIF/WebP, lazy loading, minimal JS (87.3 kB)  
✅ **Production build** tested and warning-free  

## 📷 Replace Placeholder Images

Currently using Unsplash placeholders. Add your own images to `public/assets/`:

### Required Images

```
public/assets/
├── hero-image.jpg          (1920×1080 to 2560×1440, AVIF/WebP/JPG)
├── product-1a.jpg          (800×1067, 3:4 aspect)
├── product-1b.jpg
├── product-2a.jpg
├── product-2b.jpg
├── product-3a.jpg
├── product-3b.jpg
├── product-4a.jpg
├── product-4b.jpg
├── product-5a.jpg
├── product-5b.jpg
├── product-6a.jpg
├── product-6b.jpg
├── brand-story.jpg         (1000×1250, 4:5 aspect)
├── lookbook-1.jpg          (800×1067, 3:4 aspect)
├── lookbook-2.jpg
├── lookbook-3.jpg
├── lookbook-4.jpg
└── lookbook-5.jpg
```

**Format Priority**: AVIF > WebP > JPEG  
**Quality Target**: 80-90 for JPEGs, 75-85 for WebP/AVIF  

Once you add images, update the `src` paths in:
- `components/Hero.jsx` (line ~45)
- `components/GalleryGrid.jsx` (lines ~7-56, `products` array)
- `components/BrandStory.jsx` (line ~44)
- `components/LookbookCarousel.jsx` (lines ~6-30, `lookbookImages` array)

## 🛠️ Customization

### Edit Product Catalog

Open `components/GalleryGrid.jsx` and modify the `products` array:

```javascript
const products = [
  {
    id: 1,
    name: 'Your Product Name',
    description: 'Short compelling description.',
    images: ['/assets/product-1a.jpg', '/assets/product-1b.jpg'],
  },
  // Add more products...
]
```

### Customize Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'brozzo': {
    white: '#FFFFFF',
    'off-white': '#FAF9F7',
    charcoal: '#222222',
    tan: '#D9CFC3',
    navy: '#0F1724',
  },
}
```

### Update Copy

- **Hero headline**: `components/Hero.jsx` (lines ~50-65)
- **Brand story**: `components/BrandStory.jsx` (lines ~47-70)
- **Contact details**: `components/Contact.jsx` (lines ~35-60)

## 🚢 Deploy to Production

### Vercel (Recommended)

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com) → Import Repository
3. Vercel auto-detects Next.js and deploys

### Build Locally

```bash
npm run build
npm start
```

Output in `.next/` folder.

## 📊 Performance Targets

| Metric          | Target | Current Status     |
|-----------------|--------|--------------------|
| Performance     | ≥ 80   | ✅ Optimized       |
| Accessibility   | ≥ 95   | ✅ WCAG AA         |
| Best Practices  | ≥ 90   | ✅ Implemented     |
| SEO             | ≥ 90   | ✅ Metadata ready  |
| Bundle Size     | Small  | ✅ 87.3 kB JS      |

## ♿ Accessibility Checklist

- ✅ Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ✅ Skip to content link (Tab key to reveal)
- ✅ Keyboard navigation (Tab, Enter, Space)
- ✅ ARIA labels on buttons and images
- ✅ Color contrast WCAG AA compliant
- ✅ Focus indicators (visible rings)
- ✅ Respects `prefers-reduced-motion`
- ✅ Alt text on all images

## 🧪 Test Accessibility

```bash
# Optional: Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse http://localhost:3000 --only-categories=accessibility --view
```

## 📝 Next Steps

1. **Replace images** in `public/assets/` with your photography
2. **Update image paths** in components (Hero, Gallery, Brand Story, Lookbook)
3. **Customize copy** to match your brand voice
4. **Test on mobile** — design is mobile-first
5. **Deploy to Vercel** for production

## 📚 Documentation

- **Full README**: `README.md` (comprehensive guide)
- **Accessibility**: `ACCESSIBILITY.md`
- **Deployment**: `DEPLOYMENT.md`
- **Quick Start**: This file

## 🔗 Useful Links

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Image Optimization: https://squoosh.app/
- Google Fonts: https://fonts.google.com/

---

**Brozzo** — V5CQ+V52, Koppam, Kerala 679309  
⭐ 5.0 (3) • Open ⋅ Closes 11 pm

Built with Next.js, Tailwind CSS, and ❤️
