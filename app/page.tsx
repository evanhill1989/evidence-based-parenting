import Link from "next/link";
import { ArrowRight, Clock, BookOpen, Lightbulb, Heart } from "lucide-react";
import { getFeaturedContent, getSpecialtyContent } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export default function HomePage() {
  const featuredContent = getFeaturedContent(6);
  const specialtyContent = getSpecialtyContent(3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-primary-50 to-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Evidence-Based Parenting Guidance
            </h1>
            <p className="mb-8 text-xl text-gray-600">
              Expert advice from a Pediatric Nurse Practitioner specializing in
              developmental and neurological care for young children
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/quick-help"
                className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-base font-medium text-white hover:bg-primary-700"
              >
                Get Quick Help <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
              >
                Browse Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Find What You Need
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Quick Help */}
            <Link
              href="/quick-help"
              className="group rounded-xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-primary-500 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-lg bg-red-100 p-3 text-red-600">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Quick Help
              </h3>
              <p className="mb-4 text-gray-600">
                Fast answers when you need them. 2am crying baby? We&apos;ve got
                you covered.
              </p>
              <span className="inline-flex items-center text-primary-600 group-hover:underline">
                Get help now <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>

            {/* Age-Based Learning */}
            <Link
              href="/age"
              className="group rounded-xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-primary-500 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-lg bg-blue-100 p-3 text-blue-600">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                By Age
              </h3>
              <p className="mb-4 text-gray-600">
                Learn what to expect at each stage of your child&apos;s
                development.
              </p>
              <span className="inline-flex items-center text-primary-600 group-hover:underline">
                Browse by age <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>

            {/* How-To Guides */}
            <Link
              href="/guides"
              className="group rounded-xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-primary-500 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-lg bg-green-100 p-3 text-green-600">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                How-To Guides
              </h3>
              <p className="mb-4 text-gray-600">
                Step-by-step instructions for common parenting tasks and skills.
              </p>
              <span className="inline-flex items-center text-primary-600 group-hover:underline">
                View guides <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Specialty Content */}
      {specialtyContent.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
                <Heart className="h-4 w-4" />
                Specialty Focus: Neurology & Development
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Expert Neurological & Developmental Guidance
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Drawing on years of experience in pediatric neurology
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {specialtyContent.map((content) => (
                <Link
                  key={content.url}
                  href={content.url}
                  className="group rounded-lg border bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <div className="mb-2 text-sm font-medium text-primary-600">
                    {content.contentType === "blog" && "Article"}
                    {content.contentType === "guide" && "Guide"}
                    {content.contentType === "quick-help" && "Quick Help"}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-primary-600">
                    {content.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    {content.description}
                  </p>
                  {"readingTime" in content && content.readingTime && (
                    <div className="text-xs text-gray-500">
                      {content.readingTime.text}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Content */}
      {featuredContent.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              Featured Articles & Guides
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredContent.map((content) => (
                <Link
                  key={content.url}
                  href={content.url}
                  className="group rounded-lg border bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-wide text-gray-500">
                      {content.contentType}
                    </span>
                    {"publishedAt" in content && (
                      <span className="text-xs text-gray-500">
                        {formatDate(content.publishedAt)}
                      </span>
                    )}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-primary-600">
                    {content.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{content.description}</p>
                  {"readingTime" in content && content.readingTime && (
                    <div className="text-sm text-gray-500">
                      {content.readingTime.text}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-primary-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold">
            Expert Guidance When You Need It
          </h2>
          <p className="mb-8 text-lg text-primary-100">
            Browse our comprehensive library of evidence-based parenting
            resources
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-base font-medium text-primary-600 hover:bg-gray-100"
          >
            Explore All Content <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
