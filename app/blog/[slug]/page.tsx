import { notFound } from "next/navigation";
import { allBlogPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";
import { formatDate, getCategoryLabel, getAgeRangeLabel } from "@/lib/utils";
import { getRelatedContent } from "@/lib/content";
import { generateArticleMetadata } from "@/lib/metadata";
import { extractHeadings } from "@/lib/extract-headings";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RelatedContent } from "@/components/content/RelatedContent";
import { TableOfContents } from "@/components/content/TableOfContents";
import MDXComponents from "@/components/content/MDXComponents";
import { Clock, Calendar, Tag, User } from "lucide-react";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allBlogPosts.find((post) => post.slug === slug);

  if (!post) {
    return {};
  }

  return generateArticleMetadata({
    title: post.title,
    description: post.description,
    image: post.image,
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    authors: [post.author],
    tags: post.tags,
    canonicalUrl: post.url,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allBlogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const MDXContent = getMDXComponent(post.body.code);
  const relatedContent = getRelatedContent(post, 3);
  const headings = extractHeadings(post.body.raw);
  // #TODO

  return (
    <article className="py-12 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
        />

        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            {post.isSpecialty && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
                Specialty: Neurology & Development
              </div>
            )}

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
              {post.title}
            </h1>

            <p className="mb-6 text-xl text-gray-100">{post.description}</p>

            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-6 border-y border-gray-200 py-4 text-sm text-gray-100">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
              </div>

              {post.readingTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime.text}</span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span>{getCategoryLabel(post.category)}</span>
              </div>
            </div>

            {/* Age ranges */}
            {post.ageRanges && post.ageRanges.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.ageRanges.map((age) => (
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
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700">Tags:</span>
              {post.tags.map((tag) => (
                <a
                  key={tag}
                  href={`/blog/tag/${tag}`}
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
            <p className="text-sm text-gray-100">
              {post.author} is a Pediatric Nurse Practitioner (MSN, CPNP-AC)
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
