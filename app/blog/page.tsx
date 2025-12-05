import Link from "next/link";
import { allBlogPosts } from "contentlayer/generated";
import { formatDate, getCategoryLabel } from "@/lib/utils";
import { Clock, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "In-depth articles on child development, parenting strategies, and pediatric health topics.",
};

export default function BlogPage() {
  const posts = allBlogPosts.sort((a, b) => {
    return (
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  });

  const featuredPosts = posts.filter((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-foreground">
            In-depth articles on child development, parenting strategies, and
            pediatric health topics
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Featured Articles
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={post.url}
                  className="group rounded-lg border bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  {post.isSpecialty && (
                    <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                      Specialty Content
                    </span>
                  )}
                  <h3 className="mb-3 text-2xl font-bold text-gray-900 group-hover:text-primary-600">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-gray-600 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <time dateTime={post.publishedAt}>
                        {formatDate(post.publishedAt)}
                      </time>
                      {post.readingTime && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readingTime.text}
                        </span>
                      )}
                    </div>
                    <ArrowRight className="h-5 w-5 text-primary-600" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            All Articles
          </h2>
          <div className="space-y-8">
            {regularPosts.map((post) => (
              <article key={post.slug} className="border-b pb-8 last:border-0">
                <Link href={post.url} className="group block">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {post.isSpecialty && (
                        <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                          Specialty Content
                        </span>
                      )}
                      <h3 className="mb-2 text-2xl font-bold text-gray-900 group-hover:text-primary-600">
                        {post.title}
                      </h3>
                      <p className="mb-3 text-gray-600 line-clamp-2">
                        {post.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <time dateTime={post.publishedAt}>
                          {formatDate(post.publishedAt)}
                        </time>
                        <span className="hidden sm:inline">•</span>
                        {post.readingTime && (
                          <>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {post.readingTime.text}
                            </span>
                            <span className="hidden sm:inline">•</span>
                          </>
                        )}
                        <span>{getCategoryLabel(post.category)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Empty state */}
        {posts.length === 0 && (
          <div className="rounded-lg border border-dashed py-16 text-center">
            <p className="text-gray-600">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
