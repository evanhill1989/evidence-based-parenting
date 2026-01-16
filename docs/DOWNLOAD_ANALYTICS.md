# Download Analytics Tracking

This document explains how to track PDF downloads (and other file downloads) on your Next.js site.

## How It Works

The download tracking system consists of two parts:

1. **API Route** (`app/api/download/[filename]/route.ts`) - Serves files and tracks downloads server-side
2. **DownloadButton Component** (`components/content/MDXComponents.tsx`) - Handles client-side tracking

When a user clicks a download button:
1. The click is tracked client-side (Google Analytics, Plausible, Vercel Analytics, etc.)
2. The request goes to `/api/download/[filename]` which logs the download server-side
3. The file is served to the user

## Current Setup

### Server-Side Tracking
Currently logs to console. You can view downloads in:
- **Development**: Check your terminal/console
- **Production (Vercel)**: Check your Vercel logs dashboard

### Client-Side Tracking
The `DownloadButton` component supports:
- Google Analytics (`gtag`)
- Plausible Analytics
- Vercel Analytics

## Analytics Integration Options

### Option 1: Google Analytics (Recommended for most sites)

1. **Install Google Analytics:**
   Add to `app/layout.tsx`:
   ```tsx
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
     strategy="afterInteractive"
   />
   <Script id="google-analytics" strategy="afterInteractive">
     {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX');
     `}
   </Script>
   ```

2. **View Download Events:**
   - Go to Google Analytics
   - Navigate to Events → file_download
   - View file_name and file_path parameters

### Option 2: Plausible Analytics (Privacy-focused)

1. **Install Plausible:**
   Add to `app/layout.tsx`:
   ```tsx
   <Script
     defer
     data-domain="yourdomain.com"
     src="https://plausible.io/js/script.js"
   />
   ```

2. **View Download Events:**
   - Go to your Plausible dashboard
   - Navigate to Goal Conversions
   - Look for "File Download" events

### Option 3: Vercel Analytics (If hosting on Vercel)

1. **Install package:**
   ```bash
   npm install @vercel/analytics
   ```

2. **Add to layout:**
   ```tsx
   import { Analytics } from '@vercel/analytics/react';

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

3. **View Download Events:**
   - Go to Vercel Dashboard → Analytics
   - Look for "File Download" custom events

### Option 4: Database Tracking (Most comprehensive)

If you want detailed analytics stored in your own database:

1. **Setup Database** (example with Prisma):
   ```prisma
   model Download {
     id        String   @id @default(cuid())
     filename  String
     userAgent String
     referer   String
     ip        String
     timestamp DateTime @default(now())
   }
   ```

2. **Update the API route** (`app/api/download/[filename]/route.ts`):
   ```typescript
   import { prisma } from '@/lib/prisma';

   async function trackDownload(data) {
     try {
       await prisma.download.create({
         data: {
           filename: data.filename,
           userAgent: data.userAgent,
           referer: data.referer,
           ip: data.ip,
           timestamp: new Date(data.timestamp),
         }
       });
     } catch (error) {
       console.error('Failed to save download:', error);
     }
   }
   ```

3. **Create Analytics Dashboard:**
   - Query download counts by filename
   - Track downloads over time
   - Analyze referer sources

## Adding More Files to Track

To track additional files:

1. **Add the file** to `public/downloads/`

2. **Whitelist it** in `app/api/download/[filename]/route.ts`:
   ```typescript
   const allowedFiles = [
     "milestone_cheat_sheet.pdf",
     "your_new_file.pdf", // Add here
   ];
   ```

3. **Use in your content:**
   ```mdx
   <DownloadButton href="/downloads/your_new_file.pdf">
     Download Your New File
   </DownloadButton>
   ```

## Viewing Analytics

### Development
Check your terminal for console logs:
```
Download tracked: {
  filename: 'milestone_cheat_sheet.pdf',
  userAgent: 'Mozilla/5.0...',
  referer: 'http://localhost:3000/blog/developmental-milestones-guide',
  ip: '::1',
  timestamp: '2025-01-16T...'
}
```

### Production (Vercel)
1. Go to your Vercel dashboard
2. Select your project
3. Click "Logs" or "Observability"
4. Filter for "Download tracked"

### Google Analytics
1. Go to GA4 dashboard
2. Reports → Engagement → Events
3. Find "file_download" event
4. View by file_name dimension

### Custom Analytics Dashboard
If using database tracking, create your own dashboard with queries like:
```sql
-- Total downloads by file
SELECT filename, COUNT(*) as downloads
FROM downloads
GROUP BY filename
ORDER BY downloads DESC;

-- Downloads over time
SELECT DATE(timestamp) as date, COUNT(*) as downloads
FROM downloads
GROUP BY DATE(timestamp)
ORDER BY date DESC;

-- Top referrers
SELECT referer, COUNT(*) as downloads
FROM downloads
WHERE referer != 'direct'
GROUP BY referer
ORDER BY downloads DESC;
```

## Testing

Test the download tracking:

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Navigate to a page with a download button:**
   ```
   http://localhost:3000/blog/developmental-milestones-guide
   ```

3. **Click the download button**

4. **Check your terminal** for the console log

5. **Check your browser's Network tab** to see the API request to `/api/download/[filename]`

## Security Notes

- The API route uses a **whitelist** approach - only explicitly allowed files can be downloaded
- User IP addresses are tracked but should be handled according to GDPR/privacy laws
- Consider anonymizing IPs in production: `ip.split('.').slice(0, 3).join('.') + '.0'`
- The download route is protected against directory traversal attacks

## Performance

- Files are cached with `max-age=31536000` for optimal performance
- Server-side tracking is async and won't slow down downloads
- Client-side tracking is non-blocking

## Next Steps

1. Choose an analytics provider (Google Analytics recommended for most)
2. Add tracking script to your layout
3. Test downloads and verify events appear in your analytics dashboard
4. (Optional) Set up database tracking for detailed analytics
