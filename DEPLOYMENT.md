# Deployment Checklist

## Before Deploying to Vercel

### 1. Content Updates
- [ ] Replace `/public/resume.pdf` with actual CV/Resume
- [ ] Update `/public/robots.txt` with actual domain
- [ ] Verify all contact information in `.env.local`

### 2. Environment Variables
Set these in Vercel dashboard:
```
VITE_CONTACT_EMAIL=kendikanya@gmail.com
VITE_CONTACT_PHONE=+254 708 114250
VITE_LINKEDIN_URL=https://linkedin.com/in/winfredkendi-educator
VITE_LOCATION=Nairobi, Kenya
```

### 3. Build Test
```bash
pnpm build
pnpm preview
```

### 4. Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### 5. Post-Deployment
- [ ] Test all links and navigation
- [ ] Verify dark mode toggle works
- [ ] Test contact form/links
- [ ] Check mobile responsiveness
- [ ] Test CV download
- [ ] Verify OG images on social media
- [ ] Test scroll to top button
- [ ] Check page load speed (Lighthouse)

### 6. Optional Enhancements
- [ ] Add Google Analytics
- [ ] Set up custom domain
- [ ] Add sitemap.xml
- [ ] Enable Vercel Analytics
- [ ] Add contact form with backend (Formspree/EmailJS)

## Performance Targets
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## Security Headers
Already configured in `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Cache-Control for images
