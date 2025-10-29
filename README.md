# Brozzo — Classic, Reimagined

A fast, elegant, photography-forward showcase website for Brozzo retail (Koppam, Kerala). Built with Next.js, React, and Tailwind CSS — mobile-first, highly responsive, and production-ready.

## 🎯 Project Overview

**Goal**: Create a stylish, approachable, and trustworthy online presence for Brozzo footwear and accessories.

**Tone**: Modern, confident, warm — editorial copy with short, strong lines.

**Focus**: Product photography, clarity, speed — images and layout sell the brand, not gimmicks.

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0.0 or higher
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
brozzo1/
├── app/
│   ├── layout.jsx          # Global layout with fonts and metadata
│   ├── page.jsx            # Main home page
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Hero.jsx            # Full-bleed hero with CSS parallax
│   ├── GalleryGrid.jsx     # Responsive product gallery with image cycling
│   ├── BrandStory.jsx      # Brand narrative section
│   ├── LookbookCarousel.jsx # Horizontal scroll lookbook
│   ├── Contact.jsx         # Location and contact info
│   └── Footer.jsx          # Footer with social links
├── public/
│   └── assets/             # Image assets (see Asset Specifications below)
├── tailwind.config.js      # Tailwind with Brozzo color palette
├── next.config.js          # Next.js config with image optimization
└── package.json
```

---

## 🎨 Design System

### Color Palette

| Color          | Hex       | Usage                          |
|----------------|-----------|--------------------------------|
| White          | `#FFFFFF` | Backgrounds, text on dark      |
| Off-white      | `#FAF9F7` | Primary background             |
| Charcoal       | `#222222` | Primary text, dark backgrounds |
| Warm Tan       | `#D9CFC3` | Accents, hover states          |
| Navy           | `#0F1724` | CTA buttons, links, footer     |

### Typography

- **UI/Body**: Inter (Google Fonts, variable)
- **Headings**: Playfair Display (Google Fonts, variable, serif for editorial elegance)

### Motion & Animation

- **Philosophy**: Minimal, performant animations that respect `prefers-reduced-motion`
- **Techniques**:
  - Fade-up on scroll (CSS transitions)
  - CSS-based parallax on hero (GPU-accelerated `transform: translate3d`)
  - Smooth hover transitions (300ms ease)
- **No heavy libraries**: No GSAP, no Three.js — pure CSS + minimal Framer Motion for micro-interactions

---

## 🖼️ Asset Specifications

All images should be placed in `public/assets/`. Follow these guidelines for optimal performance:

### Image Requirements

| Asset Type       | Filename Pattern       | Recommended Size        | Format        | Notes                                    |
|------------------|------------------------|-------------------------|---------------|------------------------------------------|
| Hero Image       | `hero-image.jpg`       | 1920×1080 to 2560×1440  | AVIF/WebP/JPG | High quality, engaging lifestyle shot    |
| Product Images   | `product-{N}{a/b}.jpg` | 800×1067 (3:4 aspect)   | AVIF/WebP/JPG | Clean studio shots, two views per item   |
| Brand Story      | `brand-story.jpg`      | 1000×1250 (4:5 aspect)  | AVIF/WebP/JPG | Authentic, craft-focused imagery         |
| Lookbook Images  | `lookbook-{N}.jpg`     | 800×1067 (3:4 aspect)   | AVIF/WebP/JPG | Lifestyle shots, diverse settings        |

### Format Priority

1. **AVIF** (best compression, modern browsers)
2. **WebP** (great compression, wide support)
3. **JPEG** (fallback, universal support)

Next.js will automatically serve the best format based on browser support.

### Image Optimization Tips

- Use [Squoosh](https://squoosh.app/) or [ImageOptim](https://imageoptim.com/) to compress images before upload
- Target quality: 80-90 for JPEGs, 75-85 for WebP/AVIF
- Provide at least 2× resolution for Retina displays (e.g., 1600px wide for 800px display size)
- **Low-Quality Image Placeholders (LQIP)**: Currently using inline base64 blur placeholders; consider generating real blur data URLs from your images

### Current Placeholder Images

The project currently uses **placeholder paths**. You need to add your own images to `public/assets/`:

- `hero-image.jpg`
- `product-1a.jpg`, `product-1b.jpg`
- `product-2a.jpg`, `product-2b.jpg`
- `product-3a.jpg`, `product-3b.jpg`
- `product-4a.jpg`, `product-4b.jpg`
- `product-5a.jpg`, `product-5b.jpg`
- `product-6a.jpg`, `product-6b.jpg`
- `brand-story.jpg`
- `lookbook-1.jpg` through `lookbook-5.jpg`

---

## ♿ Accessibility Checklist

- ✅ **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` used correctly
- ✅ **Skip to content link**: Visible on keyboard focus
- ✅ **Keyboard navigation**: All interactive elements accessible via Tab/Enter/Space
- ✅ **ARIA attributes**: Buttons, links, and images have appropriate labels
- ✅ **Color contrast**: WCAG AA compliant (4.5:1 for body text, 3:1 for large text)
- ✅ **Focus indicators**: Clear, visible focus rings on all interactive elements
- ✅ **Reduced motion**: Respects `prefers-reduced-motion` media query
- ✅ **Alt text**: All images have descriptive alt attributes
- ✅ **Responsive text**: Minimum 16px body text, scalable with zoom

### Testing Accessibility

```bash
# Install Lighthouse CLI (optional)
npm install -g lighthouse

# Run accessibility audit
lighthouse http://localhost:3000 --only-categories=accessibility --view
```

---

## ⚡ Performance Targets

### Lighthouse Scores (Mobile)

| Metric          | Target | Notes                                      |
|-----------------|--------|--------------------------------------------|
| Performance     | ≥ 80   | Prioritize image optimization and lazy load|
| Accessibility   | ≥ 95   | Follow checklist above                     |
| Best Practices  | ≥ 90   | HTTPS, console errors, modern APIs         |
| SEO             | ≥ 90   | Metadata, semantic HTML, alt text          |

### Optimization Techniques Used

- **next/image**: Automatic responsive images, lazy loading, modern formats
- **Code splitting**: Automatic with Next.js App Router
- **Font optimization**: Google Fonts with `display: swap`
- **CSS-only animations**: No JavaScript animation libraries
- **Minimal dependencies**: Only essential packages

### Performance Monitoring

```bash
# Build and analyze bundle size
npm run build

# Check bundle size
# Output will show page sizes and warnings for large bundles
```

---

## 🛠️ Development Guide

### Component Guidelines

1. **Use `'use client'`** only when necessary (interactivity, hooks, browser APIs)
2. **Lazy load offscreen images** with `loading="lazy"` (handled automatically by `next/image`)
3. **Optimize re-renders** with proper state management
4. **Test on mobile first** — design is mobile-first

### Adding New Products

Edit `components/GalleryGrid.jsx`:

```javascript
const products = [
  {
    id: 1,
    name: 'Your Product Name',
    description: 'Short compelling description.',
    images: ['/assets/product-1a.jpg', '/assets/product-1b.jpg'],
  },
  // Add more...
]
```

### Customizing Colors

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

---

## 📱 Responsive Breakpoints

Tailwind default breakpoints used:

| Breakpoint | Min Width | Usage                        |
|------------|-----------|------------------------------|
| `sm`       | 640px     | Small tablets and above      |
| `md`       | 768px     | Tablets and above            |
| `lg`       | 1024px    | Laptops and above            |
| `xl`       | 1280px    | Desktops                     |
| `2xl`      | 1536px    | Large desktops               |

**Grid behavior**:
- **Gallery**: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)
- **Lookbook**: Horizontal scroll on all devices, touch-friendly

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Visit [vercel.com](https://vercel.com) and import your repository
3. Vercel will auto-detect Next.js and deploy
4. Add your custom domain in Vercel dashboard

### Deploy to Other Platforms

**Build the static export** (if not using server features):

```bash
npm run build
```

The output will be in the `.next` folder. For static hosting, you may need to configure Next.js for static export (see [Next.js docs](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)).

**Environment Variables**: None required for this project (all static content).

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Hero image loads and parallax works smoothly
- [ ] Gallery images cycle on hover (desktop) and tap (mobile)
- [ ] All buttons and links are keyboard-accessible (Tab, Enter)
- [ ] Lookbook carousel scrolls smoothly (mouse/touch)
- [ ] Contact "Get Directions" opens Google Maps in new tab
- [ ] Footer social links open in new tab with `noopener`
- [ ] Skip-to-content link appears on Tab press
- [ ] Site works with JavaScript disabled (images and content visible)
- [ ] Reduced motion preference is respected

### Browser Testing

Test on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

---

## 📄 License & Credits

**Brozzo Showcase Site** — Built with ❤️ for Brozzo, Koppam, Kerala.

### Technologies

- [Next.js 14](https://nextjs.org/) — React framework
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) — Optional micro-animations
- [Google Fonts](https://fonts.google.com/) — Inter & Playfair Display

### Placeholder Images

Replace all placeholder images in `public/assets/` with your own high-quality photography.

---

## 🤝 Support & Contribution

For questions or issues, please open an issue on the repository or contact the development team.

**Brozzo** — V5CQ+V52, Koppam, Kerala 679309  
Open ⋅ Closes 11 pm  
⭐ 5.0 (3)

---

**Made with Next.js and Tailwind CSS**  
Fast. Elegant. Production-ready.

