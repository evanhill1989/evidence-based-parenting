# Downloads Folder

This folder contains downloadable resources (PDFs, etc.) for your blog posts and guides.

## How to Add a PDF

1. Place your PDF file in this folder (e.g., `developmental-milestones-guide.pdf`)
2. Reference it in your MDX content using the `DownloadButton` component:

```mdx
<DownloadButton href="/downloads/your-file.pdf">
  Download Your Resource Name
</DownloadButton>
```

## Current Files

- `developmental-milestones-guide.pdf` - Referenced in blog post: developmental-milestones-guide.mdx

## Notes

- Files in this folder are publicly accessible at `/downloads/filename.pdf`
- Keep filenames URL-friendly (lowercase, hyphens instead of spaces)
- Make sure file sizes are reasonable for web downloads (ideally < 5MB)
