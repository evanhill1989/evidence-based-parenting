# Launch Checklist

## 1. Pre-Launch Setup

- [ ] Confirm domain is purchased and connected
- [ ] Verify DNS settings are correct (A, CNAME, or Vercel-managed)
- [ ] Ensure environment variables are set in production
- [ ] Run production build locally (`npm run build`) to confirm no errors
- [ ] Confirm API keys are using production-level permissions

## 2. App Functionality

- [ ] Test all navigation flows
- [ ] Test forms (validation, errors, success)
- [ ] Check auth flow: sign-up, login, logout, password reset
- [ ] Test user permissions (public vs authenticated views)
- [ ] Verify error handling pages (404, 500)
- [ ] Validate mobile responsiveness for key pages

## 3. Performance & Accessibility

- [ ] Lighthouse audit passes minimum thresholds
- [ ] Images optimized (Next/Image, compression, WebP/AVIF)
- [ ] No oversized JS bundles
- [ ] Accessible color contrast
- [ ] Keyboard navigation works
- [ ] ARIA roles where appropriate

## 4. SEO / Metadata

- [ ] Title + meta description set for all pages
- [ ] Open Graph tags set (title, description, image)
- [ ] Favicon / app icons added
- [ ] robots.txt + sitemap.xml generated
- [ ] Canonical URLs defined

## 5. QA & Content

- [ ] Proofread all text
- [ ] Remove placeholder data
- [ ] Check for broken links
- [ ] Confirm dates, pricing, or legal text if relevant
- [ ] Verify analytics is firing correctly

## 6. Production Deployment

- [ ] Push latest commits to main
- [ ] Trigger production deployment
- [ ] Review build logs for warnings/errors
- [ ] Test live site on mobile + desktop
- [ ] Test worst-case network conditions (slow 3G simulation)
- [ ] Confirm no console errors in production

## 7. Post-Launch Tasks

- [ ] Announce launch on your chosen channels
- [ ] Monitor analytics for early errors/traffic spikes
- [ ] Set up uptime monitoring
- [ ] Create bug report workflow (GitHub issues or similar)
