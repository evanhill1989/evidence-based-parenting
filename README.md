# Evidence-Based Parenting Resource Site

A modern, content-rich website providing evidence-based parenting guidance from a Pediatric Nurse Practitioner specializing in developmental and neurological care.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX with Contentlayer
- **Search:** Pagefind (static search)
- **Deployment:** Vercel (recommended)

## Project Structure

```
parenting/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog posts
│   ├── quick-help/        # Quick reference guides
│   ├── age/               # Age-based content
│   ├── guides/            # How-to guides
│   └── ...
├── components/            # React components
│   ├── content/          # Content-specific components
│   ├── layout/           # Layout components
│   └── ui/               # UI components
├── content/              # All MDX content files
│   ├── blog/
│   ├── quick-help/
│   ├── guides/
│   └── age-pages/
├── lib/                  # Utility functions
└── public/              # Static assets
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

## Content Management

### Creating New Content

Content is authored in MDX files in the `content/` directory. Each content type has its own subdirectory:

- **Blog posts:** `content/blog/your-post.mdx`
- **Quick Help:** `content/quick-help/topic.mdx`
- **Guides:** `content/guides/category/guide-name.mdx`
- **Age Pages:** `content/age-pages/stage.mdx`

### Frontmatter Schema

#### Blog Posts

```yaml
---
title: "Your Post Title"
description: "Brief description for SEO and previews"
publishedAt: "2025-01-15"
updatedAt: "2025-01-15"
author: "Your Name, MSN, CPNP-AC"
category: "development" # development, sleep, feeding, health, safety, neurological, basics
tags: ["tag1", "tag2"]
ageRanges: ["0-3mo", "3-6mo"] # Optional
journeyType: "learning" # urgent, learning, skill-building
isSpecialty: true # Neurology/developmental specialty content
featured: false
image: "/images/blog/image.jpg" # Optional
focusKeyword: "main keyword" # For SEO
---
```

#### Quick Help

```yaml
---
title: "Quick Help Title"
description: "Brief description"
topic: "crying" # URL slug
category: "health"
ageRanges: ["0-3mo", "3-6mo"]
priority: "high" # high, medium, low
medicalDisclaimer: true
whenToCallDoctor: true
printFriendly: true
isSpecialty: false
---
```

### Age Ranges

Use these values for ageRanges:
- `0-3mo` - 0-3 months
- `3-6mo` - 3-6 months
- `6-9mo` - 6-9 months
- `9-12mo` - 9-12 months
- `12-18mo` - 12-18 months
- `18-24mo` - 18-24 months
- `2-3yr` - 2-3 years
- `3-5yr` - 3-5 years

### Categories

- `development` - Child development
- `sleep` - Sleep-related content
- `feeding` - Feeding and nutrition
- `health` - Health and medical
- `safety` - Safety topics
- `neurological` - Neurological topics
- `basics` - Basic care

### Custom MDX Components

Use these custom components in your MDX:

```mdx
<MedicalDisclaimer>
This is for educational purposes only...
</MedicalDisclaimer>

<WhenToCallDoctor>
Call your doctor if...
</WhenToCallDoctor>

<InfoBox title="Optional Title">
Important information here
</InfoBox>

<QuickRefCard title="Quick Reference">
Checklist or quick info
</QuickRefCard>
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Vercel will auto-detect Next.js and deploy
4. Set environment variables if needed:
   - `NEXT_PUBLIC_SITE_URL` - Your site URL

### Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## Content Workflow

1. **Write content** - Create MDX files in `content/` directory
2. **Preview locally** - Run `npm run dev`
3. **Commit to git** - `git add . && git commit -m "Add new content"`
4. **Deploy** - `git push` (Vercel auto-deploys)

## Features

- ✅ Type-safe content with Contentlayer
- ✅ Automatic sitemap generation
- ✅ SEO optimized with metadata
- ✅ Mobile-first responsive design
- ✅ Fast static generation
- ✅ Table of contents auto-generation
- ✅ Related content recommendations
- ✅ Reading time estimates
- ✅ Print-friendly layouts
- ✅ Accessible (WCAG AA)

## Performance

- Static generation for fast loads
- Optimized images with Next.js Image
- Minimal client-side JavaScript
- Fast Core Web Vitals scores

## License

Private - All rights reserved
