import Link from "next/link";
import { type AgePage, type BlogPost, type Guide, type QuickHelp } from "contentlayer/generated";
import { type AgeStage, getStageInfo } from "@/lib/age-utils";

interface AgeStageTemplateProps {
  stage: AgeStage;
  overview: AgePage;
  blogs: BlogPost[];
  guides: Guide[];
  quickHelp: QuickHelp[];
}

export function AgeStageTemplate({
  stage,
  overview,
  blogs,
  guides,
  quickHelp,
}: AgeStageTemplateProps) {
  const stageInfo = getStageInfo(stage);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="mb-4">
            <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
              {stageInfo.ageRange}
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {stageInfo.label}
          </h1>
          <p className="text-xl text-gray-600">
            {stageInfo.description}
          </p>
        </div>

        {/* Development Timeline Visualization - Placeholder */}
        <section className="mb-12 rounded-lg border bg-gray-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Development Timeline
          </h2>
          <div className="text-center text-gray-600">
            <p>Visual timeline showing milestones across 0-36 months</p>
            <p className="text-sm">(Feature coming soon)</p>
          </div>
        </section>

        {/* Interactive Milestone Tracker - Placeholder */}
        <section className="mb-12 rounded-lg border bg-white p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            Milestone Tracker
          </h2>
          <div className="text-center text-gray-600">
            <p>Interactive checklist for tracking your child's milestones</p>
            <p className="text-sm">(Feature coming soon)</p>
          </div>
        </section>

        {/* Stage Overview Content */}
        <section className="mb-12">
          <div className="rounded-lg border bg-white p-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {overview.title}
              </h2>
              {/* MDX content will be rendered here in the actual page */}
              <p className="text-gray-600">
                Detailed stage overview content from MDX file will appear here
              </p>
            </div>
          </div>
        </section>

        {/* Quick Help Section */}
        {quickHelp.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Quick Help for This Age
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {quickHelp.slice(0, 6).map((item) => (
                <Link
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
                  <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-primary-600">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
            {quickHelp.length > 6 && (
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  + {quickHelp.length - 6} more quick help articles
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
                <Link
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
                      {guide.difficulty}
                    </span>
                  )}
                  <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-primary-600">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {guide.description}
                  </p>
                </Link>
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
                  <Link href={post.url} className="group block">
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
                  </Link>
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
            <p>Quick assessment tool to help determine if a behavior or concern is typical</p>
            <p className="text-sm">(Feature coming soon)</p>
          </div>
        </section>

        {/* Empty State Messages */}
        {quickHelp.length === 0 && guides.length === 0 && blogs.length === 0 && (
          <div className="rounded-lg border border-dashed py-16 text-center">
            <p className="text-gray-600">
              No additional content available for this stage yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
