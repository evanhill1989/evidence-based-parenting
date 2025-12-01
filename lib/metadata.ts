import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://evidence-basedparenting.org";
const siteName = "Evidence-Based Parenting";
const siteDescription =
  "Expert parenting guidance from a Pediatric Nurse Practitioner specializing in developmental and neurological care";

export const defaultMetadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "parenting",
    "child development",
    "pediatric neurology",
    "infant care",
    "toddler development",
    "parenting tips",
    "developmental milestones",
  ],
  authors: [{ name: "Alisha Blevins, MSN, CPNP-AC" }],
  creator: "Alisha Blevins",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/og-image.jpg"],
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

interface GenerateMetadataProps {
  title: string;
  description: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  canonicalUrl?: string;
}

export function generateArticleMetadata({
  title,
  description,
  image,
  publishedTime,
  modifiedTime,
  authors = [],
  tags = [],
  canonicalUrl,
}: GenerateMetadataProps): Metadata {
  const url = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const imageUrl = image ? `${siteUrl}${image}` : `${siteUrl}/og-image.jpg`;

  return {
    title,
    description,
    alternates: canonicalUrl
      ? {
          canonical: canonicalUrl,
        }
      : undefined,
    keywords: tags,
    authors: authors.map((name) => ({ name })),
    openGraph: {
      type: "article",
      locale: "en_US",
      url,
      siteName,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime,
      modifiedTime,
      authors,
      tags,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@yourhandle",
    },
  };
}
