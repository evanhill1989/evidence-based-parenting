# Launch Checklist - Evidence-Based Parenting Resource Site

## 1. Pre-Launch Setup

- [ ] Confirm domain is purchased and connected
- [ ] Verify DNS settings are correct (A, CNAME, or Vercel-managed)
- [ ] Set environment variables in production (`NEXT_PUBLIC_SITE_URL`)
- [ ] Run production build locally (`npm run build`) to confirm no errors
- [ ] Verify Contentlayer builds successfully (check `.contentlayer/generated/`)
- [ ] Confirm analytics tracking ID is production-ready

## 2. Content Integrity & Medical Accuracy

### Content Compilation
- [ ] All MDX files compile without errors
- [ ] Contentlayer build completes in reasonable time
- [ ] All frontmatter schema validation passes (required fields present)
- [ ] No content drafts leaked into production (check `content-drafts/` excluded)

### Medical Content Verification
- [ ] Medical disclaimers render on all Quick Help pages (`medicalDisclaimer: true`)
- [ ] "When to Call Doctor" sections display correctly (`whenToCallDoctor: true`)
- [ ] Emergency/high-priority content easily discoverable (`priority: "high"`)
- [ ] Specialty content properly flagged (`isSpecialty: true/false`)
- [ ] Age ranges display and filter correctly (0-3mo, 3-6mo, etc.)
- [ ] No outdated clinical guidance (review `updatedAt` dates)
- [ ] Author credentials displayed correctly ("MSN, CPNP-AC")

### Custom Components
- [ ] `<MedicalDisclaimer>` component renders correctly
- [ ] `<WhenToCallDoctor>` component styled appropriately
- [ ] `<InfoBox>` component displays as expected
- [ ] `<QuickRefCard>` component functional
- [ ] All custom MDX components work in production build

### Content Quality
- [ ] Proofread all published content for typos/errors
- [ ] Medical accuracy review completed (have clinical colleague verify if possible)
- [ ] Remove any placeholder text or draft content
- [ ] Verify all content aligns with brand voice (clinical, not folksy)
- [ ] Check for broken internal links between content
- [ ] Related content recommendations display correctly
- [ ] Reading time estimates appear accurate

## 3. Search & Discovery

- [ ] Pagefind build runs successfully (`npx pagefind`)
- [ ] Search index includes all content types (blog, guides, quick-help)
- [ ] Search results return relevant content (test: "fever", "milestones", "sleep")
- [ ] SearchModal opens and closes correctly
- [ ] Search works on mobile devices
- [ ] Search results include proper snippets/excerpts
- [ ] No orphaned or missing pages in search results
- [ ] Search performance acceptable (results load quickly)

## 4. App Functionality & Navigation

### Core Navigation
- [ ] All navigation links work (header, footer, sidebar)
- [ ] Blog listing page displays all posts
- [ ] Quick Help listing shows all quick-help content
- [ ] Guides listing organized by category
- [ ] Age-based filtering works correctly
- [ ] Category filtering functional
- [ ] Tag-based navigation works

### Dynamic Routes
- [ ] Individual blog posts render (`/blog/[slug]`)
- [ ] Individual quick-help pages render (`/quick-help/[slug]`)
- [ ] Individual guide pages render (`/guides/[...slug]`)
- [ ] 404 page displays for invalid routes
- [ ] 500 error page styled appropriately

### Responsive Design
- [ ] Mobile navigation works (hamburger menu if applicable)
- [ ] All pages responsive on mobile devices
- [ ] Tables/wide content handles mobile gracefully
- [ ] Quick Help pages readable on mobile (critical for urgent use)
- [ ] Print-friendly layouts work (`printFriendly: true` content)

## 5. Brand Compliance

### Voice & Tone
- [ ] No "mama bear" or folksy language in published content
- [ ] Clinical, authoritative tone maintained throughout
- [ ] Perseverance Technique applied to difficult advice (effort + outcome)
- [ ] No emotional validation without clinical grounding
- [ ] Professional credentials emphasized over personal anecdotes

### Visual Identity
- [ ] Color palette follows brand (navy, charcoal, white - no bright pastels)
- [ ] Typography consistent (sans-serif body, serif headings)
- [ ] High white space for reduced cognitive load
- [ ] Grid-based, minimalist layout maintained
- [ ] Quick Help pages have distinct visual header, no sidebars
- [ ] Guide pages include table of contents

### Content Structure by Type
- [ ] Quick Help: Direct, imperative, concise tone
- [ ] Guides: Educating, measured, explanatory tone
- [ ] Blog: Appropriate mix of clinical insight and accessibility

## 6. Performance & Accessibility

### Performance
- [ ] Lighthouse Performance score ≥90 (mobile and desktop)
- [ ] First Contentful Paint (FCP) <2s
- [ ] Largest Contentful Paint (LCP) <2.5s
- [ ] Cumulative Layout Shift (CLS) <0.1
- [ ] Images optimized (Next.js Image component used)
- [ ] No oversized JavaScript bundles (check bundle analyzer if available)
- [ ] Static generation completes for all routes
- [ ] Page load times acceptable on slow 3G simulation

### Accessibility (WCAG AA)
- [ ] Color contrast meets AA standards (especially for medical warnings)
- [ ] All images have alt text
- [ ] Heading hierarchy logical (h1 → h2 → h3)
- [ ] Keyboard navigation works throughout site
- [ ] Focus indicators visible
- [ ] ARIA roles applied where appropriate
- [ ] Screen reader testing passed (key pages)
- [ ] Form labels associated correctly (if forms exist)

## 7. SEO & Metadata

### Basic SEO
- [ ] Unique title tags for all pages
- [ ] Meta descriptions for all pages (155-160 characters)
- [ ] Favicon and app icons present (`/public/favicon.ico`, etc.)
- [ ] `robots.txt` allows search engines
- [ ] `sitemap.xml` generated and submitted to Google Search Console
- [ ] Canonical URLs defined (avoid duplicate content)

### Structured Data
- [ ] Schema.org MedicalWebPage markup for clinical content
- [ ] Author schema includes healthcare professional credentials
- [ ] Article schema for blog posts
- [ ] BreadcrumbList schema for navigation
- [ ] Validate structured data (Google Rich Results Test)

### Social Sharing
- [ ] Open Graph tags set (og:title, og:description, og:image)
- [ ] Twitter Card tags set
- [ ] Social share images sized correctly (1200x630px recommended)
- [ ] Test social share previews (Facebook, Twitter, LinkedIn)

### Content SEO
- [ ] Focus keywords identified for key pages
- [ ] Internal linking strategy implemented
- [ ] External links open in new tabs (if applicable)
- [ ] No broken external links

## 8. Legal & Professional Protection

### Required Pages
- [ ] Terms of Service page exists and is linked in footer
- [ ] Privacy Policy page exists and is linked in footer
- [ ] About page clearly states credentials and qualifications
- [ ] Disclaimer clarifies content is educational, not medical advice
- [ ] Contact page or method provided

### Content Disclaimers
- [ ] Site-wide disclaimer visible (footer or dedicated page)
- [ ] Individual medical content pages have disclaimers
- [ ] "When to call doctor" guidance present for urgent topics
- [ ] Emergency situations clearly marked (call 911 guidance)
- [ ] Content review dates visible (`updatedAt` displayed)

### Data & Privacy
- [ ] Privacy policy covers analytics/tracking (if using Google Analytics, etc.)
- [ ] Cookie consent if required (check local regulations)
- [ ] No collection of sensitive medical data without proper protections

## 9. Production Deployment

### Pre-Deployment
- [ ] All git changes committed
- [ ] `npm run predeploy` passes (typecheck + lint + build)
- [ ] No console warnings in build output
- [ ] Environment variables set in Vercel dashboard
- [ ] Production branch configured correctly

### Deployment
- [ ] Push latest commits to main branch
- [ ] Trigger production deployment (Vercel auto-deploys)
- [ ] Review Vercel build logs for errors/warnings
- [ ] Verify deployment success in Vercel dashboard

### Post-Deployment Testing
- [ ] Test live site on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test live site on mobile devices (iOS Safari, Android Chrome)
- [ ] Verify all dynamic routes work in production
- [ ] Check production console for errors (Chrome DevTools)
- [ ] Test search functionality on live site
- [ ] Verify analytics tracking fires on production
- [ ] Test form submissions if applicable
- [ ] Confirm images load correctly via CDN
- [ ] Test worst-case network conditions (slow 3G simulation)

## 10. Post-Launch Tasks

### Immediate (Day 1)
- [ ] Monitor Vercel analytics for errors/traffic
- [ ] Check production logs for unexpected errors
- [ ] Verify Google Analytics/tracking working
- [ ] Test on additional devices/browsers as users report issues

### First Week
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up uptime monitoring (UptimeRobot, Vercel Analytics, etc.)
- [ ] Monitor Core Web Vitals in Search Console
- [ ] Create bug report workflow (GitHub issues or project management tool)

### First Month
- [ ] Review analytics for popular content (double-check accuracy)
- [ ] Monitor search queries (Search Console)
- [ ] Collect feedback from initial users
- [ ] Identify content gaps based on user behavior
- [ ] Review and address any accessibility issues reported
- [ ] Plan content update schedule based on medical literature

### Ongoing
- [ ] Establish content review cycle (quarterly for medical accuracy)
- [ ] Monitor for broken links (monthly)
- [ ] Update outdated content (`updatedAt` maintenance)
- [ ] Review and respond to user feedback
- [ ] Track Core Web Vitals and performance metrics
- [ ] Stay current with pediatric guidelines/research
