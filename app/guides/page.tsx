import Link from 'next/link'
import { allGuides } from 'contentlayer/generated'
import { getCategoryLabel, getDifficultyLabel, getAgeRangeLabel } from '@/lib/utils'
import { Clock, ArrowRight, TrendingUp } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How-To Guides',
  description: 'Step-by-step instructions for common parenting tasks and skills.',
}

export default function GuidesPage() {
  const guides = allGuides.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })

  // Group guides by category
  const guidesByCategory = guides.reduce((acc, guide) => {
    const category = guide.category || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(guide)
    return acc
  }, {} as Record<string, typeof guides>)

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            How-To Guides
          </h1>
          <p className="text-xl text-gray-600">
            Step-by-step instructions for common parenting tasks and skills
          </p>
        </div>

        {/* Display guides by category */}
        {Object.entries(guidesByCategory).map(([category, categoryGuides]) => (
          <section key={category} className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              {getCategoryLabel(category)}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoryGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={guide.url}
                  className="group rounded-lg border bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  {/* Difficulty badge */}
                  {guide.difficulty && (
                    <div className="mb-3 flex items-center gap-2">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                          guide.difficulty === 'beginner'
                            ? 'bg-green-100 text-green-700'
                            : guide.difficulty === 'intermediate'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {getDifficultyLabel(guide.difficulty)}
                      </span>
                      {guide.isSpecialty && (
                        <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                          Specialty
                        </span>
                      )}
                    </div>
                  )}

                  <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-primary-600">
                    {guide.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                    {guide.description}
                  </p>

                  {/* Age ranges */}
                  {guide.ageRanges && guide.ageRanges.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {guide.ageRanges.slice(0, 2).map((age) => (
                        <span
                          key={age}
                          className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                        >
                          {getAgeRangeLabel(age)}
                        </span>
                      ))}
                      {guide.ageRanges.length > 2 && (
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                          +{guide.ageRanges.length - 2} more
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    {guide.readingTime && (
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {guide.readingTime.text}
                      </span>
                    )}
                    <ArrowRight className="h-5 w-5 text-primary-600" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* Empty state */}
        {guides.length === 0 && (
          <div className="rounded-lg border border-dashed py-16 text-center">
            <p className="text-gray-600">No guides yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  )
}
