/**
 * Analytics utility for tracking events across different platforms
 * Supports Google Analytics, Plausible, and Vercel Analytics
 */

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    plausible?: (event: string, options?: { props?: Record<string, any> }) => void;
    va?: { track: (event: string, properties?: Record<string, any>) => void };
  }
}

export type AnalyticsEvent = {
  name: string;
  properties?: Record<string, any>;
};

/**
 * Track an event across all configured analytics platforms
 */
export function trackEvent(event: AnalyticsEvent): void {
  const { name, properties = {} } = event;

  // Google Analytics
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, properties);
  }

  // Plausible Analytics
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible(name, { props: properties });
  }

  // Vercel Analytics
  if (typeof window !== "undefined" && window.va) {
    window.va.track(name, properties);
  }

  // Development logging
  if (process.env.NODE_ENV === "development") {
    console.log("📊 Analytics Event:", { name, properties });
  }
}

/**
 * Track a file download
 */
export function trackDownload(filename: string, filePath?: string): void {
  trackEvent({
    name: "file_download",
    properties: {
      file_name: filename,
      file_path: filePath,
    },
  });
}

/**
 * Track a page view (useful for SPA navigation)
 */
export function trackPageView(url: string, title?: string): void {
  trackEvent({
    name: "page_view",
    properties: {
      page_location: url,
      page_title: title,
    },
  });
}

/**
 * Track newsletter signup
 */
export function trackNewsletterSignup(source?: string): void {
  trackEvent({
    name: "newsletter_signup",
    properties: {
      source,
    },
  });
}

/**
 * Track search queries
 */
export function trackSearch(query: string, resultsCount?: number): void {
  trackEvent({
    name: "search",
    properties: {
      search_term: query,
      results_count: resultsCount,
    },
  });
}

/**
 * Track content engagement
 */
export function trackContentEngagement(
  contentType: "blog" | "guide" | "quick-help",
  contentTitle: string,
  action: "read_start" | "read_complete" | "share" | "print"
): void {
  trackEvent({
    name: "content_engagement",
    properties: {
      content_type: contentType,
      content_title: contentTitle,
      action,
    },
  });
}

/**
 * Track outbound link clicks
 */
export function trackOutboundLink(url: string, label?: string): void {
  trackEvent({
    name: "outbound_link_click",
    properties: {
      link_url: url,
      link_label: label,
    },
  });
}
