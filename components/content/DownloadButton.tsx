"use client";

import { Download } from "lucide-react";
import { trackDownload } from "@/lib/analytics";

interface DownloadButtonProps {
  href: string;
  children: React.ReactNode;
}

export function DownloadButton({ href, children }: DownloadButtonProps) {
  // Extract filename from href (e.g., "/downloads/milestone_cheat_sheet.pdf" -> "milestone_cheat_sheet.pdf")
  const filename = href.split("/").pop() || "";
  // Use API route for tracking
  const trackingHref = `/api/download/${filename}`;

  const handleClick = () => {
    // Track download with unified analytics utility
    trackDownload(filename, href);
  };

  return (
    <div className="my-6">
      <a
        href={trackingHref}
        onClick={handleClick}
        className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-primary-700"
      >
        <Download className="h-5 w-5" />
        {children}
      </a>
    </div>
  );
}
