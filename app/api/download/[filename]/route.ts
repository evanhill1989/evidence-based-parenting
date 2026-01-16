import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

interface DownloadParams {
  params: Promise<{
    filename: string;
  }>;
}

export async function GET(request: NextRequest, { params }: DownloadParams) {
  try {
    const { filename } = await params;

    // Security: Only allow specific filenames (whitelist approach)
    const allowedFiles = ["milestone_cheat_sheet.pdf"];

    if (!allowedFiles.includes(filename)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    // Get file path
    const filePath = path.join(process.cwd(), "public", "downloads", filename);

    // Read the file
    const fileBuffer = await fs.readFile(filePath);

    // Track the download
    await trackDownload({
      filename,
      userAgent: request.headers.get("user-agent") || "unknown",
      referer: request.headers.get("referer") || "direct",
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
      timestamp: new Date().toISOString(),
    });

    // Determine content type
    const contentType = filename.endsWith(".pdf")
      ? "application/pdf"
      : "application/octet-stream";

    // Return the file
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Failed to download file" },
      { status: 500 }
    );
  }
}

// Track download function - customize this based on your analytics needs
async function trackDownload(data: {
  filename: string;
  userAgent: string;
  referer: string;
  ip: string;
  timestamp: string;
}) {
  // Option 1: Log to console (development)
  console.log("Download tracked:", data);

  // Option 2: Send to analytics service (e.g., Google Analytics, Plausible)
  // Example with fetch to an analytics endpoint:
  /*
  try {
    await fetch('https://your-analytics-endpoint.com/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'file_download',
        properties: data
      })
    });
  } catch (error) {
    console.error('Failed to track download:', error);
  }
  */

  // Option 3: Save to database
  // Example with a hypothetical database client:
  /*
  try {
    await db.downloads.create({
      data: {
        filename: data.filename,
        userAgent: data.userAgent,
        referer: data.referer,
        ip: data.ip,
        timestamp: new Date(data.timestamp),
      }
    });
  } catch (error) {
    console.error('Failed to save download to database:', error);
  }
  */

  // Option 4: Send to Vercel Analytics (if using Vercel)
  // This would typically be done client-side with the @vercel/analytics package
}
