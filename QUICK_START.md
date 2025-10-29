# Quick Start Guide

Get the Brozzo showcase site running in **less than 5 minutes**.

---

## ⚡ Installation

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# Navigate to http://localhost:3000
```

That's it! The site should now be running locally.

---

## 📸 Add Images (Important!)

The site currently has placeholder image paths. Add your images to `public/assets/`:

**Minimum required**:
- `hero-image.jpg` (1920×1080)
- `product-1a.jpg` through `product-6b.jpg` (800×1067 each)
- `brand-story.jpg` (1000×1250)
- `lookbook-1.jpg` through `lookbook-5.jpg` (800×1067 each)

See `ASSET_CHECKLIST.md` for complete specifications.

**Quick tip**: Use [Unsplash](https://unsplash.com/s/photos/shoes) for temporary placeholder images while you prepare your real product photography.

---

## 🎨 Customize Content

### Update Product Names

Edit `components/GalleryGrid.jsx`, line 6:

```javascript
const products = [
  {
    id: 1,
    name: 'Classic Oxford',  // ← Change this
    description: 'Timeless elegance for every occasion.',  // ← And this
    images: ['/assets/product-1a.jpg', '/assets/product-1b.jpg'],
  },
  // ... more products
]
```

### Update Brand Story

Edit `components/BrandStory.jsx`, line 43:

```javascript
<p>
  Founded in the heart of Kerala, <strong>Brozzo</strong> represents...
</p>
```

### Update Contact Info

Edit `components/Contact.jsx`, line 48:

```javascript
<p className="text-lg sm:text-xl text-brozzo-charcoal leading-relaxed">
  V5CQ+V52, Koppam<br />
  Kerala 679309<br />
  India
</p>
```

---

## 🚀 Build for Production

```bash
# Build optimized production bundle
npm run build

# Test production build locally
npm start

# Open http://localhost:3000
```

---

## 🌐 Deploy (Choose One)

### Vercel (Easiest, Free)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy
vercel

# 3. Follow prompts
# Your site will be live in ~60 seconds
```

### Netlify

1. Run `npm run build`
2. Drag and drop the `.next` folder to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Done!

See `DEPLOYMENT.md` for more deployment options.

---

## 📁 Project Structure

```
brozzo1/
├── app/
│   ├── layout.jsx       # Global layout
│   ├── page.jsx         # Home page
│   └── globals.css      # Styles
├── components/
│   ├── Hero.jsx         # Hero section
│   ├── GalleryGrid.jsx  # Products
│   ├── BrandStory.jsx   # About
│   ├── LookbookCarousel.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── public/assets/       # ← Add images here
└── tailwind.config.js   # Design system
```

---

## 🛠️ Common Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production |
| `npm start` | Run production server |
| `npm run lint` | Check code for errors |

---

## 📚 Documentation

- **`README.md`** — Complete project documentation
- **`SETUP_GUIDE.md`** — Detailed setup instructions
- **`ASSET_CHECKLIST.md`** — Image requirements
- **`ACCESSIBILITY.md`** — Accessibility features
- **`DEPLOYMENT.md`** — Deployment options

---

## 🆘 Troubleshooting

### Site won't start?

```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Images not showing?

- Check that images are in `public/assets/` folder
- Verify filenames match exactly (case-sensitive)
- Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

### Build errors?

```bash
# Check for syntax errors
npm run lint

# Clear Next.js cache
rm -rf .next
npm run dev
```

---

## ✅ Pre-Launch Checklist

Before deploying to production:

- [ ] All images added to `public/assets/`
- [ ] Product names and descriptions updated
- [ ] Contact information is correct
- [ ] Social media links updated (in `components/Footer.jsx`)
- [ ] Tested on mobile device
- [ ] Run `npm run build` successfully
- [ ] Lighthouse score ≥ 80 (Performance)

---

## 🎯 Next Steps

1. **Add your images** — This is the most important step!
2. **Customize content** — Update product names, descriptions, and brand story
3. **Test locally** — Make sure everything looks good
4. **Deploy** — Choose Vercel, Netlify, or your preferred hosting
5. **Share** — Your beautiful Brozzo showcase is ready for the world!

---

**Need more help?** Check the full `README.md` or `SETUP_GUIDE.md`.

**Ready to deploy?** See `DEPLOYMENT.md` for deployment options.

---

Built with ❤️ for **Brozzo** — Koppam, Kerala

