import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { readingTime } from "./lib/reading-time";

// Age ranges type
export const ageRanges = [
  "0-3mo",
  "3-6mo",
  "6-9mo",
  "9-12mo",
  "12-18mo",
  "18-24mo",
  "2-3yr",
  "3-5yr",
] as const;

// Content categories
export const categories = [
  "development",
  "sleep",
  "feeding",
  "health",
  "safety",
  "neurological",
  "basics",
] as const;

// Journey types
export const journeyTypes = ["urgent", "learning", "skill-building"] as const;

// Blog Post Document Type
export const BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: false,
    },
    author: {
      type: "string",
      required: true,
    },
    category: {
      type: "enum",
      options: [...categories],
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
    ageRanges: {
      type: "list",
      of: { type: "enum", options: [...ageRanges] },
      required: false,
    },
    journeyType: {
      type: "enum",
      options: [...journeyTypes],
      required: true,
    },
    isSpecialty: {
      type: "boolean",
      required: true,
      default: false,
    },
    featured: {
      type: "boolean",
      required: false,
      default: false,
    },
    image: {
      type: "string",
      required: false,
    },
    imageAlt: {
      type: "string",
      required: false,
    },
    relatedContent: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
    focusKeyword: {
      type: "string",
      required: false,
    },
    ageStage: {
      type: "string",
      required: false,
    },
    ageRange: {
      type: "string",
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("blog/", ""),
    },
    url: {
      type: "string",
      resolve: (doc) => `/blog/${doc._raw.flattenedPath.replace("blog/", "")}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    contentType: {
      type: "string",
      resolve: () => "blog",
    },
  },
}));

// Quick Help Document Type
export const QuickHelp = defineDocumentType(() => ({
  name: "QuickHelp",
  filePathPattern: `quick-help/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    topic: {
      type: "string",
      required: true,
    },
    category: {
      type: "enum",
      options: [...categories],
      required: true,
    },
    ageRanges: {
      type: "list",
      of: { type: "enum", options: [...ageRanges] },
      required: true,
    },
    priority: {
      type: "enum",
      options: ["high", "medium", "low"],
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    medicalDisclaimer: {
      type: "boolean",
      default: false,
    },
    whenToCallDoctor: {
      type: "boolean",
      default: false,
    },
    printFriendly: {
      type: "boolean",
      default: true,
    },
    relatedContent: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
    isSpecialty: {
      type: "boolean",
      default: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("quick-help/", ""),
    },
    url: {
      type: "string",
      resolve: (doc) =>
        `/quick-help/${doc._raw.flattenedPath.replace("quick-help/", "")}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    contentType: {
      type: "string",
      resolve: () => "quick-help",
    },
  },
}));

// Guide Document Type
export const Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: `guides/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    guideCategory: {
      type: "enum",
      options: ["feeding", "sleep", "safety", "development", "basics"],
      required: true,
    },
    category: {
      type: "enum",
      options: [...categories],
      required: true,
    },
    difficulty: {
      type: "enum",
      options: ["beginner", "intermediate", "advanced"], // I don't like idea of "beginner", but leaving for now
      required: true,
    },
    ageRanges: {
      type: "list",
      of: { type: "enum", options: [...ageRanges] },
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: false,
    },
    author: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: false,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
    supplies: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
    estimatedTime: {
      type: "string",
      required: false,
    },
    relatedContent: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
    isSpecialty: {
      type: "boolean",
      default: false,
    },
    featured: {
      type: "boolean",
      default: false,
    },
    journeyType: {
      type: "enum",
      options: [...journeyTypes],
      required: false,
    },
    pillar: {
      type: "string",
      required: false,
    },
    relatedBlogs: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
    medicalDisclaimer: {
      type: "boolean",
      default: false,
    },
    whenToCallDoctor: {
      type: "boolean",
      default: false,
    },
    printFriendly: {
      type: "boolean",
      default: false,
    },
    topic: {
      type: "string",
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("guides/", ""),
    },
    url: {
      type: "string",
      resolve: (doc) =>
        `/guides/${doc._raw.flattenedPath.replace("guides/", "")}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    contentType: {
      type: "string",
      resolve: () => "guide",
    },
  },
}));

// Age Page Document Type
export const AgePage = defineDocumentType(() => ({
  name: "AgePage",
  filePathPattern: `age-pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    ageStage: {
      type: "string",
      required: true,
    },
    ageRange: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: false,
    },
    relatedContent: {
      type: "list",
      of: { type: "string" },
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("age-pages/", ""),
    },
    url: {
      type: "string",
      resolve: (doc) =>
        `/age/${doc._raw.flattenedPath.replace("age-pages/", "")}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    contentType: {
      type: "string",
      resolve: () => "age-page",
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [BlogPost, QuickHelp, Guide, AgePage],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-light",
          keepBackground: false,
        },
      ],
    ],
  },
});
