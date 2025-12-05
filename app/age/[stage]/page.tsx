import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  allAgePages,
  allBlogPosts,
  allGuides,
  allQuickHelp,
} from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { AgeStageTemplate } from "@/components/age/age-stage-template";
import {
  type AgeStage,
  isValidStage,
  getAllStages,
  getStageInfo,
  filterContentByStage,
  sortByPriority,
} from "@/lib/age-utils";

interface PageProps {
  params: {
    stage: string;
  };
}

// Generate static paths for all age stages
export async function generateStaticParams() {
  const stages = getAllStages();
  return stages.map((stage) => ({
    stage: stage,
  }));
}

// Generate metadata for each page
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { stage } = params;

  if (!isValidStage(stage)) {
    return {
      title: "Age Stage Not Found",
    };
  }

  const stageInfo = getStageInfo(stage);
  const overview = allAgePages.find((page) => page.ageStage === stage);

  return {
    title: `${stageInfo.label} (${stageInfo.ageRange})`,
    description: overview?.description || stageInfo.description,
  };
}

export default function AgeStagePage({ params }: PageProps) {
  const { stage } = params;

  // Validate stage parameter
  if (!isValidStage(stage)) {
    notFound();
  }

  // Get the overview page for this stage
  const overview = allAgePages.find((page) => page.ageStage === stage);

  if (!overview) {
    notFound();
  }

  // Filter content by stage
  const blogs = filterContentByStage(allBlogPosts, stage);
  const guides = filterContentByStage(allGuides, stage);
  const quickHelpItems = filterContentByStage(allQuickHelp, stage);

  // Sort quick help by priority
  const sortedQuickHelp = sortByPriority(quickHelpItems);

  // Get the MDX component for the overview content
  const MDXContent = useMDXComponent(overview.body.code);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="mb-4">
            <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
              {getStageInfo(stage).ageRange}
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-hero-foreground sm:text-5xl">
            {getStageInfo(stage).label}
          </h1>
          <p className="text-xl text-secondary-foreground">
            {getStageInfo(stage).description}
          </p>
        </div>

        {/* Development Timeline Visualization - Placeholder */}
        <section className="mb-12 rounded-lg border bg-gray-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Development Timeline
          </h2>
          <div className="text-center text-gray-600">
            <p>Visual timeline showing milestones across 0-36 months</p>
            <p className="text-sm text-gray-500">(Feature coming soon)</p>
          </div>
        </section>

        {/* Interactive Milestone Tracker - Placeholder */}
        <section className="mb-12 rounded-lg border bg-white p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Milestone Tracker
          </h2>
          <div className="text-center text-gray-600">
            <p>
              Interactive checklist for tracking your child&apos;s milestones
            </p>
            <p className="text-sm text-gray-500">(Feature coming soon)</p>
          </div>
        </section>

        {/* Stage Overview Content - MDX Rendered */}
        <section className="mb-12">
          <div className="rounded-lg border  p-8">
            <article className="prose prose-lg max-w-none">
              <MDXContent />
            </article>
          </div>
        </section>

        {/* Quick Help Section */}
        {sortedQuickHelp.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Quick Help for This Age
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sortedQuickHelp.slice(0, 6).map((item) => (
                <a
                  key={item.slug}
                  href={item.url}
                  className="group rounded-lg border bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  {/* Priority badge */}
                  {item.priority === "high" && (
                    <span className="mb-2 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                      High Priority
                    </span>
                  )}
                  {item.priority === "medium" && (
                    <span className="mb-2 inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                      Medium Priority
                    </span>
                  )}
                  <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-primary-600">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
            {sortedQuickHelp.length > 6 && (
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  + {sortedQuickHelp.length - 6} more quick help articles
                </p>
              </div>
            )}
          </section>
        )}

        {/* How-To Guides Section */}
        {guides.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              How-To Guides
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {guides.slice(0, 6).map((guide) => (
                <a
                  key={guide.slug}
                  href={guide.url}
                  className="group rounded-lg border bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  {guide.difficulty && (
                    <span
                      className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                        guide.difficulty === "beginner"
                          ? "bg-green-100 text-green-700"
                          : guide.difficulty === "intermediate"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {guide.difficulty.charAt(0).toUpperCase() +
                        guide.difficulty.slice(1)}
                    </span>
                  )}
                  <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-primary-600">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {guide.description}
                  </p>
                </a>
              ))}
            </div>
            {guides.length > 6 && (
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  + {guides.length - 6} more guides
                </p>
              </div>
            )}
          </section>
        )}

        {/* In-Depth Articles Section */}
        {blogs.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              In-Depth Articles
            </h2>
            <div className="space-y-6">
              {blogs.slice(0, 5).map((post) => (
                <article
                  key={post.slug}
                  className="rounded-lg border bg-white p-6"
                >
                  <a href={post.url} className="group block">
                    {post.isSpecialty && (
                      <span className="mb-2 inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                        Specialty Content
                      </span>
                    )}
                    <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-primary-600">
                      {post.title}
                    </h3>
                    <p className="mb-3 text-gray-600 line-clamp-2">
                      {post.description}
                    </p>
                    {post.readingTime && (
                      <span className="text-sm text-gray-500">
                        {post.readingTime.text}
                      </span>
                    )}
                  </a>
                </article>
              ))}
            </div>
            {blogs.length > 5 && (
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  + {blogs.length - 5} more articles
                </p>
              </div>
            )}
          </section>
        )}

        {/* "Is This Normal?" Quick Checker - Placeholder */}
        <section className="mb-12 rounded-lg border bg-primary-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Is This Normal?
          </h2>
          <div className="text-center text-gray-600">
            <p>
              Quick assessment tool to help determine if a behavior or concern
              is typical
            </p>
            <p className="text-sm text-gray-500">(Feature coming soon)</p>
          </div>
        </section>

        {/* Empty State Messages */}
        {sortedQuickHelp.length === 0 &&
          guides.length === 0 &&
          blogs.length === 0 && (
            <div className="rounded-lg border border-dashed py-16 text-center">
              <p className="text-gray-600">
                No additional content available for this stage yet. Check back
                soon!
              </p>
            </div>
          )}
      </div>
    </div>
  );
}
