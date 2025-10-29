# Brozzo Setup Guide

Quick setup instructions to get your Brozzo showcase site running locally and deploy it to production.

---

## 🚀 Getting Started (5 minutes)

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages: Next.js, React, Tailwind CSS, and Framer Motion.

### Step 2: Add Your Images

The site needs high-quality images to look great. Add your images to the `public/assets/` folder:

**Required images** (see README.md for size specifications):

```
public/assets/
├── hero-image.jpg          (1920×1080 or larger, landscape)
├── product-1a.jpg          (800×1067, 3:4 aspect ratio)
├── product-1b.jpg          (alternate view)
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
├── brand-story.jpg         (1000×1250, 4:5 aspect ratio)
├── lookbook-1.jpg          (800×1067, 3:4 aspect ratio)
├── lookbook-2.jpg
├── lookbook-3.jpg
├── lookbook-4.jpg
└── lookbook-5.jpg
```

**Quick tip**: If you don't have images yet, you can use placeholder images from [Unsplash](https://unsplash.com/s/photos/footwear) or [Pexels](https://www.pexels.com/search/shoes/) to test the site.

### Step 3: Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the Brozzo site!

The site will auto-reload when you make changes.

---

## ✏️ Customizing Content

### Update Product Information

Edit `components/GalleryGrid.jsx` to change product names, descriptions, and images:

```javascript
const products = [
  {
    id: 1,
    name: 'Classic Oxford',              // ← Change this
    description: 'Timeless elegance.',   // ← Change this
    images: ['/assets/product-1a.jpg', '/assets/product-1b.jpg'], // ← Change these
  },
  // ... add or remove products
]
```

### Update Brand Story

Edit `components/BrandStory.jsx` to update the text about Brozzo:

```javascript
<p>
  Founded in the heart of Kerala, <strong>Brozzo</strong> represents...
</p>
```

### Update Contact Information

Edit `components/Contact.jsx` to update address, hours, or rating:

```javascript
<p className="text-lg sm:text-xl text-brozzo-charcoal leading-relaxed">
  V5CQ+V52, Koppam<br />
  Kerala 679309<br />
  India
</p>
```

### Change Colors

Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  'brozzo': {
    white: '#FFFFFF',      // ← Change these hex codes
    'off-white': '#FAF9F7',
    charcoal: '#222222',
    tan: '#D9CFC3',
    navy: '#0F1724',
  },
}
```

After changing colors, restart the dev server (`Ctrl+C`, then `npm run dev`).

---

## 🎨 Image Optimization Guide

### Recommended Tools

1. **[Squoosh](https://squoosh.app/)** (web-based, free)
   - Upload your image
   - Choose WebP or AVIF format
   - Set quality to 80-85
   - Download optimized image

2. **[ImageOptim](https://imageoptim.com/)** (Mac app, free)
   - Drag and drop images
   - Automatically compresses without quality loss

3. **[TinyPNG](https://tinypng.com/)** (web-based, free)
   - Great for JPEG/PNG compression
   - Supports batch uploads

### Image Sizing Tips

- **Hero**: 1920×1080 minimum, 2560×1440 recommended
- **Products**: 800×1067 (3:4 ratio), 1600×2133 for Retina
- **Lookbook**: Same as products (3:4 vertical)
- **Brand Story**: 1000×1250 (4:5 ratio)

**Aspect ratio calculator**: For 3:4 ratio, multiply width by 1.333 to get height.

---

## 🚢 Deploying to Production

### Option 1: Vercel (Easiest, Free)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial Brozzo site"
   git branch -M main
   git remote add origin https://github.com/yourusername/brozzo.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site is live at `your-project.vercel.app`

3. **Add custom domain** (optional)
   - In Vercel dashboard, go to Settings → Domains
   - Add your domain (e.g., `brozzo.com`)
   - Follow DNS instructions

### Option 2: Netlify

1. **Build your site**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect your GitHub repo for automatic deployments

### Option 3: Traditional Hosting (cPanel, etc.)

For static hosting, you'll need to export the site:

1. **Update `next.config.js`**:
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true, // Required for static export
     },
   }
   ```

2. **Build static files**:
   ```bash
   npm run build
   ```

3. **Upload the `out` folder** to your hosting provider via FTP or cPanel file manager.

---

## 🧪 Pre-Launch Checklist

Before going live, test these:

- [ ] All images load correctly (no broken images)
- [ ] Hero image looks good and parallax is smooth
- [ ] Gallery grid is responsive (test on mobile, tablet, desktop)
- [ ] Product images cycle on hover/tap
- [ ] Lookbook carousel scrolls smoothly
- [ ] All links work (social media, Get Directions)
- [ ] Contact information is correct
- [ ] Site is fast (run Lighthouse in Chrome DevTools)
- [ ] Site works on mobile (test on actual device if possible)
- [ ] Accessibility: keyboard navigation works (press Tab to navigate)
- [ ] Text is readable (good contrast, no typos)

---

## 🐛 Troubleshooting

### Images not loading?

- Check that image files are in `public/assets/` folder
- Check that filenames match exactly (case-sensitive)
- Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Site looks broken after color change?

- Restart the dev server: Stop with `Ctrl+C`, then run `npm run dev` again
- Clear browser cache

### Build errors?

- Make sure all required dependencies are installed: `npm install`
- Check for typos in component files
- Run `npm run lint` to check for errors

### Performance is slow?

- Optimize images (see Image Optimization Guide above)
- Reduce image file sizes to under 300KB each
- Use WebP or AVIF format instead of JPEG

---

## 📚 Helpful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Image Optimization Guide](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Vercel Deployment Docs](https://vercel.com/docs)
- [Web Accessibility Guide](https://www.w3.org/WAI/fundamentals/accessibility-intro/)

---

## 🆘 Need Help?

If you run into issues:

1. Check the main `README.md` for detailed documentation
2. Search for error messages online (Stack Overflow is your friend)
3. Check Next.js and Tailwind documentation
4. Open an issue on the project repository

---

**Good luck with your Brozzo showcase site!** 🎉

