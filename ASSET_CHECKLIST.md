# Asset Checklist for Brozzo

Use this checklist to ensure you have all the required images for the Brozzo showcase site.

---

## 📋 Required Images

### Hero Section (1 image)

- [ ] `hero-image.jpg` — **1920×1080 minimum** (landscape)
  - **Subject**: Engaging lifestyle shot, product in context, or storefront
  - **Style**: High quality, well-lit, professional
  - **Format**: AVIF, WebP, or JPEG
  - **File size**: Under 500KB (after optimization)

---

### Product Gallery (12 images total — 6 products × 2 views each)

Each product needs **two images** (front view and alternate angle):

#### Product 1: Classic Oxford
- [ ] `product-1a.jpg` — **800×1067** (3:4 aspect ratio)
- [ ] `product-1b.jpg` — **800×1067** (alternate view)

#### Product 2: Casual Loafer
- [ ] `product-2a.jpg` — **800×1067**
- [ ] `product-2b.jpg` — **800×1067** (alternate view)

#### Product 3: Sport Sneaker
- [ ] `product-3a.jpg` — **800×1067**
- [ ] `product-3b.jpg` — **800×1067** (alternate view)

#### Product 4: Leather Boot
- [ ] `product-4a.jpg` — **800×1067**
- [ ] `product-4b.jpg` — **800×1067** (alternate view)

#### Product 5: Summer Sandal
- [ ] `product-5a.jpg` — **800×1067**
- [ ] `product-5b.jpg` — **800×1067** (alternate view)

#### Product 6: Dress Shoe
- [ ] `product-6a.jpg` — **800×1067**
- [ ] `product-6b.jpg` — **800×1067** (alternate view)

**Product Image Guidelines**:
- Clean white or neutral background (studio-style)
- Consistent lighting across all products
- Sharp focus on product details
- Centered composition
- File size: Under 200KB each (after optimization)

---

### Brand Story Section (1 image)

- [ ] `brand-story.jpg` — **1000×1250** (4:5 aspect ratio, vertical)
  - **Subject**: Craft, heritage, store interior, or local context
  - **Style**: Authentic, storytelling, warm
  - **Format**: AVIF, WebP, or JPEG
  - **File size**: Under 300KB

---

### Lookbook Carousel (5 images)

- [ ] `lookbook-1.jpg` — **800×1067** (3:4 aspect ratio, vertical)
  - **Caption**: "Urban essentials"
- [ ] `lookbook-2.jpg` — **800×1067**
  - **Caption**: "Weekend vibes"
- [ ] `lookbook-3.jpg` — **800×1067**
  - **Caption**: "Evening elegance"
- [ ] `lookbook-4.jpg` — **800×1067**
  - **Caption**: "Casual comfort"
- [ ] `lookbook-5.jpg` — **800×1067**
  - **Caption**: "Refined details"

**Lookbook Image Guidelines**:
- Lifestyle photography (products in real-world context)
- Diverse settings (street, café, outdoors, etc.)
- Natural lighting preferred
- Show products being worn or used
- File size: Under 200KB each

---

## 📐 Aspect Ratio Quick Reference

| Image Type    | Aspect Ratio | Example Size  | Calculation        |
|---------------|--------------|---------------|--------------------|
| Hero          | 16:9         | 1920×1080     | Width ÷ Height = 1.78 |
| Product       | 3:4          | 800×1067      | Width × 1.333 = Height |
| Brand Story   | 4:5          | 1000×1250     | Width × 1.25 = Height  |
| Lookbook      | 3:4          | 800×1067      | Width × 1.333 = Height |

**Pro tip**: Use an aspect ratio calculator online or crop in Photoshop with fixed ratio.

---

## 🎨 Image Quality Standards

### File Formats (in order of preference)

1. **AVIF** — Best compression, smallest file size (modern browsers)
2. **WebP** — Great compression, wide support
3. **JPEG** — Universal fallback

### Compression Settings

- **WebP/AVIF**: Quality 75-85
- **JPEG**: Quality 80-90
- **Target file sizes**:
  - Hero: 300-500KB
  - Products: 100-200KB
  - Lookbook: 100-200KB
  - Brand Story: 200-300KB

### Resolution Guidelines

- Provide **2× resolution** for Retina displays when possible
  - Example: For 800px display width, provide 1600px source image
- Minimum dimensions listed above are acceptable for standard displays
- Maximum 2560px width for hero images (anything larger is overkill)

---

## 🛠️ Recommended Optimization Tools

### Web-Based (Free)

- **[Squoosh](https://squoosh.app/)** — Best for WebP/AVIF conversion
- **[TinyPNG](https://tinypng.com/)** — Great for JPEG/PNG compression
- **[Compressor.io](https://compressor.io/)** — Quick compression

### Desktop Apps

- **[ImageOptim](https://imageoptim.com/)** (Mac) — Drag-and-drop compression
- **[XnConvert](https://www.xnview.com/en/xnconvert/)** (Windows/Mac/Linux) — Batch processing

### Photoshop / Lightroom

- Export as JPEG at 80-85% quality
- Use "Save for Web" feature
- Resize to target dimensions before exporting

---

## ✅ Image Preparation Workflow

1. **Shoot or source images**
   - Follow composition and subject guidelines above
   - Ensure consistent lighting and style

2. **Edit and crop**
   - Crop to correct aspect ratio
   - Adjust exposure, contrast, and colors
   - Remove any distractions or blemishes

3. **Resize**
   - Resize to target dimensions (or 2× for Retina)
   - Use bicubic interpolation for best quality

4. **Optimize**
   - Compress using one of the tools above
   - Check file size (should meet targets)
   - Preview quality (should look crisp, no visible artifacts)

5. **Save and upload**
   - Name files exactly as listed in this checklist
   - Upload to `public/assets/` folder
   - Test on the site (run `npm run dev` and check)

---

## 🖼️ Temporary Placeholder Images

If you need to launch quickly without final images, use placeholder services:

- **[Unsplash Source](https://source.unsplash.com/)** — High-quality photos
  - Example: `https://source.unsplash.com/800x1067/?shoes`
- **[Lorem Picsum](https://picsum.photos/)** — Random placeholders
  - Example: `https://picsum.photos/800/1067`
- **[Placeholder.com](https://placeholder.com/)** — Solid color placeholders
  - Example: `https://via.placeholder.com/800x1067/FAF9F7/222222`

**Note**: Replace placeholders with real product photography before final launch for best results.

---

## 📊 Progress Tracker

Track your progress as you prepare images:

- [ ] **Hero**: 0/1 completed
- [ ] **Products**: 0/12 completed
- [ ] **Brand Story**: 0/1 completed
- [ ] **Lookbook**: 0/5 completed
- [ ] **Total**: 0/19 images ready

---

## 🎯 Final Checklist

Before considering assets complete:

- [ ] All 19 images uploaded to `public/assets/`
- [ ] Filenames match exactly (case-sensitive)
- [ ] File sizes meet targets (< 500KB for hero, < 200KB for others)
- [ ] Images look sharp and professional
- [ ] Aspect ratios are correct
- [ ] Tested on the live site (no broken images)
- [ ] Optimized for web (compressed)
- [ ] Consistent style and branding across all images

---

**Once all assets are ready, your Brozzo site will look amazing!** 📸✨

