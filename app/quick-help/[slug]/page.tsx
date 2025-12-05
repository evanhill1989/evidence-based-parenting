import { notFound } from "next/navigation";
import { allQuickHelps } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer2/hooks";
import { getCategoryLabel, getAgeRangeLabel } from "@/lib/utils";
import { getRelatedContent } from "@/lib/content";
import { extractHeadings } from "@/lib/extract-headings";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RelatedContent } from "@/components/content/RelatedContent";
import { TableOfContents } from "@/components/content/TableOfContents";
import MDXComponents from "@/components/content/MDXComponents";
import { Clock, Tag, AlertCircle } from "lucide-react";
import type { Metadata } from "next";

interface QuickHelpPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all quick helps
export async function generateStaticParams() {
  return allQuickHelps.map((help) => ({
    slug: help.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: QuickHelpPageProps): Promise<Metadata> {
  const { slug } = await params;
  const help = allQuickHelps.find((help) => help.slug === slug);

  if (!help) {
    return {};
  }

  return {
    title: help.title,
    description: help.description,
  };
}

export default async function QuickHelpPage({ params }: QuickHelpPageProps) {
  const { slug } = await params;
  const help = allQuickHelps.find((help) => help.slug === slug);

  if (!help) {
    notFound();
  }

  const MDXContent = getMDXComponent(help.body.code);
  const relatedContent = getRelatedContent(help, 3);
  const headings = extractHeadings(help.body.raw);

  return (
    <article className="py-12 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Quick Help", href: "/quick-help" },
            { label: help.title },
          ]}
        />

        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {/* Priority badge */}
              {help.priority === "high" && (
                <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700">
                  <AlertCircle className="h-4 w-4" />
                  High Priority
                </span>
              )}

              {/* Specialty badge */}
              {help.isSpecialty && (
                <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
                  Specialty: Neurology & Development
                </span>
              )}
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {help.title}
            </h1>

            <p className="mb-6 text-xl text-secondary-foreground">
              {help.description}
            </p>

            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-6 border-y border-gray-200 py-4 text-sm text-gray-600">
              {help.readingTime && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{help.readingTime.text}</span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span>{getCategoryLabel(help.category)}</span>
              </div>

              {help.priority && (
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      help.priority === "high"
                        ? "bg-red-100 text-red-700"
                        : help.priority === "medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {help.priority.charAt(0).toUpperCase() +
                      help.priority.slice(1)}{" "}
                    Priority
                  </span>
                </div>
              )}
            </div>

            {/* Age ranges */}
            {help.ageRanges && help.ageRanges.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {help.ageRanges.map((age) => (
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
            <div className="max-w-none">
              <MDXContent components={MDXComponents} />
            </div>

            {/* Table of Contents - Desktop only */}
            {headings.length > 0 && (
              <aside className="hidden lg:block">
                <TableOfContents headings={headings} />
              </aside>
            )}
          </div>

          {/* Medical Disclaimer */}
          {help.medicalDisclaimer && (
            <div className="mt-12 rounded-lg border border-amber-200 bg-amber-50 p-6">
              <h3 className="mb-2 text-sm font-semibold text-amber-900">
                Medical Disclaimer
              </h3>
              <p className="text-xs text-amber-800">
                This content is for informational purposes only and does not
                constitute medical advice. Always consult with your pediatrician
                or healthcare provider for medical concerns.
              </p>
            </div>
          )}
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
