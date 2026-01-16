import { MetadataRoute } from "next";
import {
  allBlogPosts,
  allGuides,
  allQuickHelps,
} from "contentlayer/generated";
import { getAllStages } from "@/lib/age-utils";

// Base URL - Update this with your production domain
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://evidencebasedparenting.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quick-help`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/age`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = allBlogPosts.map((post) => ({
    url: `${baseUrl}${post.url}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: post.featured ? 0.8 : 0.7,
  }));

  // Guides
  const guidePages: MetadataRoute.Sitemap = allGuides.map((guide) => ({
    url: `${baseUrl}${guide.url}`,
    lastModified: guide.updatedAt ? new Date(guide.updatedAt) : new Date(guide.publishedAt),
    changeFrequency: "monthly",
    priority: guide.featured ? 0.8 : 0.7,
  }));

  // Quick Help articles
  const quickHelpPages: MetadataRoute.Sitemap = allQuickHelps.map((help) => ({
    url: `${baseUrl}${help.url}`,
    lastModified: new Date(help.publishedAt),
    changeFrequency: "monthly",
    priority: help.priority === "high" ? 0.8 : 0.7,
  }));

  // Age stage pages
  const ageStages = getAllStages();
  const agePages: MetadataRoute.Sitemap = ageStages.map((stage) => ({
    url: `${baseUrl}/age/${stage}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Combine all pages
  return [
    ...staticPages,
    ...blogPages,
    ...guidePages,
    ...quickHelpPages,
    ...agePages,
  ];
}
