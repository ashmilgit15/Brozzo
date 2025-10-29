# Deployment Guide

Production deployment guide for the Brozzo showcase website.

---

## 🚀 Quick Deploy (Vercel - Recommended)

The fastest and easiest way to deploy your Next.js site.

### Prerequisites

- GitHub, GitLab, or Bitbucket account
- Vercel account (free at [vercel.com](https://vercel.com))

### Steps

1. **Push to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Brozzo showcase site"
   git branch -M main
   git remote add origin https://github.com/yourusername/brozzo.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your Brozzo repository
   - Vercel auto-detects Next.js — no configuration needed
   - Click "Deploy"

3. **Done!** Your site is live at `your-project.vercel.app`

### Custom Domain (Optional)

1. In Vercel dashboard → Settings → Domains
2. Add your domain (e.g., `brozzo.com`, `www.brozzo.com`)
3. Update DNS records as instructed by Vercel
4. Wait for DNS propagation (5-30 minutes)
5. SSL certificate is automatically provisioned

---

## 🌐 Deploy to Netlify

### Option A: Drag and Drop (Easiest)

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `.next` folder
   - Done! Your site is live

### Option B: Git Integration (Automatic Deploys)

1. **Push to Git** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "New site from Git"
   - Select your repository
   - Build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `.next`
   - Click "Deploy site"

---

## 🐳 Deploy to Your Own Server (Docker)

For those who want to self-host.

### Create Dockerfile

Create `Dockerfile` in project root:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Update next.config.js

Add to `next.config.js`:

```javascript
const nextConfig = {
  output: 'standalone',
  // ... rest of config
}
```

### Build and Run

```bash
# Build Docker image
docker build -t brozzo .

# Run container
docker run -p 3000:3000 brozzo
```

---

## 📦 Static Export (Traditional Hosting)

For shared hosting, cPanel, or static file servers.

### 1. Update Configuration

Edit `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // Remove other image settings
}

module.exports = nextConfig
```

### 2. Build Static Files

```bash
npm run build
```

This creates an `out` folder with static HTML, CSS, and JS files.

### 3. Upload to Server

Upload the contents of the `out` folder to your web server:

- **FTP**: Use FileZilla or similar
- **cPanel**: File Manager → Upload to `public_html`
- **SSH**: `scp -r out/* user@server:/var/www/html/`

### 4. Configure Server

**Apache (.htaccess)**:

Create `.htaccess` in your web root:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx (nginx.conf)**:

```nginx
server {
  listen 80;
  server_name brozzo.com www.brozzo.com;
  root /var/www/brozzo;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

---

## 🔐 Environment Variables

Currently, this project **does not require** environment variables. All content is static.

If you add features that need secrets (API keys, database URLs), use:

### Vercel

1. Dashboard → Settings → Environment Variables
2. Add key-value pairs
3. Redeploy for changes to take effect

### Netlify

1. Site settings → Build & deploy → Environment
2. Add variables
3. Redeploy

### Docker

```bash
docker run -p 3000:3000 -e MY_SECRET=value brozzo
```

---

## 🛡️ Production Checklist

Before going live, verify:

### Performance

- [ ] Run Lighthouse audit (target: Performance ≥ 80)
- [ ] All images optimized (WebP/AVIF format)
- [ ] No console errors or warnings
- [ ] Page load time < 3 seconds on 3G

### Content

- [ ] All placeholder images replaced with real photos
- [ ] Product names and descriptions updated
- [ ] Contact information is correct (address, hours)
- [ ] Social media links point to real accounts
- [ ] Copyright year is current

### SEO

- [ ] Page title and meta description set (`app/layout.jsx`)
- [ ] All images have descriptive alt text
- [ ] Heading hierarchy is correct (H1 → H2 → H3)
- [ ] Schema markup added (optional but recommended)

### Security

- [ ] HTTPS enabled (automatic with Vercel/Netlify)
- [ ] No sensitive data exposed in code
- [ ] Dependencies are up to date (`npm audit`)

### Accessibility

- [ ] Lighthouse accessibility score ≥ 95
- [ ] Keyboard navigation works
- [ ] Skip link appears on Tab press
- [ ] Color contrast meets WCAG AA

### Testing

- [ ] Tested on Chrome, Firefox, Safari
- [ ] Tested on mobile (iOS and Android)
- [ ] All links work (no 404s)
- [ ] Forms work (if applicable)
- [ ] Contact "Get Directions" opens Google Maps

---

## 🔄 Continuous Deployment

### Vercel / Netlify

Both platforms automatically redeploy when you push to Git:

```bash
# Make changes to code
git add .
git commit -m "Update product images"
git push

# Site automatically rebuilds and deploys (usually < 2 minutes)
```

### GitHub Actions (Custom CI/CD)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 📊 Post-Deployment Monitoring

### Analytics

Add Google Analytics or other analytics:

1. **Create `app/analytics.jsx`**:
   ```jsx
   export default function Analytics() {
     return (
       <script
         async
         src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
       />
     )
   }
   ```

2. **Add to `app/layout.jsx`**:
   ```jsx
   import Analytics from './analytics'
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     )
   }
   ```

### Performance Monitoring

- **Vercel Analytics**: Built-in, free on all plans
- **Google PageSpeed Insights**: [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
- **Lighthouse CI**: Run automated audits on each deploy

---

## 🆘 Troubleshooting

### Build Fails

**Error: Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

**Error: Out of memory**
```bash
# Increase Node.js memory limit
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Images Not Loading

- Check that images are in `public/assets/` folder
- Verify filenames match exactly (case-sensitive)
- For static export, ensure `images.unoptimized: true` is set

### 404 on Refresh

- **Vercel/Netlify**: This is handled automatically
- **Static hosting**: Configure rewrite rules (see Static Export section)

### Slow Performance

- Optimize images (compress, use WebP/AVIF)
- Enable Vercel/Netlify image optimization
- Check Lighthouse report for specific recommendations

---

## 📞 Support

If you encounter deployment issues:

1. Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
2. Vercel Support: [vercel.com/support](https://vercel.com/support)
3. Netlify Support: [netlify.com/support](https://www.netlify.com/support/)

---

**Your Brozzo showcase site is ready for the world!** 🎉

