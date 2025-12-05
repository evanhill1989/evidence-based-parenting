import { notFound } from "next/navigation";
import { allGuides } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";
import {
  formatDate,
  getCategoryLabel,
  getAgeRangeLabel,
  getDifficultyLabel,
} from "@/lib/utils";
import { getRelatedContent } from "@/lib/content";
import { generateArticleMetadata } from "@/lib/metadata";
import { extractHeadings } from "@/lib/extract-headings";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RelatedContent } from "@/components/content/RelatedContent";
import { TableOfContents } from "@/components/content/TableOfContents";
import MDXComponents from "@/components/content/MDXComponents";
import { Clock, Calendar, Tag, User, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

interface GuidePageProps {
  params: Promise<{
    slug: string[];
  }>;
}

// Generate static params for all guides
export async function generateStaticParams() {
  return allGuides.map((guide) => ({
    slug: guide.slug.split("/"),
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugPath = slug.join("/");
  const guide = allGuides.find((guide) => guide.slug === slugPath);

  if (!guide) {
    return {};
  }

  return generateArticleMetadata({
    title: guide.title,
    description: guide.description,
    image: guide.image,
    publishedTime: guide.publishedAt,
    modifiedTime: guide.updatedAt,
    authors: [guide.author],
    tags: guide.tags,
    canonicalUrl: guide.url,
  });
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const slugPath = slug.join("/");
  const guide = allGuides.find((guide) => guide.slug === slugPath);

  if (!guide) {
    notFound();
  }

  const MDXContent = getMDXComponent(guide.body.code);
  const relatedContent = getRelatedContent(guide, 3);
  const headings = extractHeadings(guide.body.raw);

  return (
    <article className="py-12 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: "Guides", href: "/guides" }, { label: guide.title }]}
        />

        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {/* Difficulty badge */}
              {guide.difficulty && (
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                    guide.difficulty === "beginner"
                      ? "bg-green-100 text-green-700"
                      : guide.difficulty === "intermediate"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  <TrendingUp className="h-4 w-4" />
                  {getDifficultyLabel(guide.difficulty)}
                </span>
              )}

              {/* Specialty badge */}
              {guide.isSpecialty && (
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
                  Specialty: Neurology & Development
                </span>
              )}
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {guide.title}
            </h1>

            <p className="mb-6 text-xl text-gray-600">{guide.description}</p>

            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-6 border-y border-gray-200 py-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{guide.author}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={guide.publishedAt}>
                  {formatDate(guide.publishedAt)}
                </time>
              </div>

              {guide.readingTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{guide.readingTime.text}</span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span>{getCategoryLabel(guide.category)}</span>
              </div>
            </div>

            {/* Age ranges */}
            {guide.ageRanges && guide.ageRanges.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {guide.ageRanges.map((age) => (
                  <span
                    key={age}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                  >
                    {getAgeRangeLabel(age)}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Content with Table of Contents */}
          <div className="grid gap-8 lg:grid-cols-[1fr_250px]">
            {/* Main content */}
            <div className=" max-w-none">
              <MDXContent components={MDXComponents} />
            </div>

            {/* Table of Contents - Desktop only */}
            {headings.length > 0 && (
              <aside className="hidden lg:block">
                <TableOfContents headings={headings} />
              </aside>
            )}
          </div>

          {/* Tags */}
          {guide.tags && guide.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700">Tags:</span>
              {guide.tags.map((tag) => (
                <a
                  key={tag}
                  href={`/guides/tag/${tag}`}
                  className="rounded-full bg-primary-50 px-3 py-1 text-sm text-primary-700 hover:bg-primary-100"
                >
                  {tag}
                </a>
              ))}
            </div>
          )}

          {/* Author Bio */}
          <div className="mt-12 rounded-lg border bg-gray-50 p-6">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              About the Author
            </h3>
            <p className="text-sm text-gray-600">
              {guide.author} is a Pediatric Nurse Practitioner (MSN, CPNP-AC)
              with over 8 years of experience, specializing in developmental
              pediatrics and pediatric neurology. She is passionate about
              providing evidence-based guidance to parents navigating the
              challenges of raising young children.
            </p>
          </div>
        </div>

        {/* Related Content */}
        {relatedContent.length > 0 && (
          <div className="mx-auto mt-16 max-w-7xl">
            <RelatedContent content={relatedContent} />
          </div>
        )}
      </div>
    </article>
  );
}
