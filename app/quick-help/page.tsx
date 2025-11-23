import Link from 'next/link'
import { allQuickHelps } from 'contentlayer/generated'
import { getCategoryLabel, getAgeRangeLabel } from '@/lib/utils'
import { Clock, ArrowRight, AlertCircle } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quick Help',
  description: 'Fast answers when you need them. Quick reference guides for urgent parenting concerns.',
}

export default function QuickHelpPage() {
  const quickHelps = allQuickHelps.sort((a, b) => {
    // Sort by priority first (high priority first), then by date
    if (a.priority !== b.priority) {
      const priorityOrder = { high: 0, medium: 1, low: 2 }
      return (priorityOrder[a.priority] || 2) - (priorityOrder[b.priority] || 2)
    }
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })

  // Group by category
  const quickHelpsByCategory = quickHelps.reduce((acc, help) => {
    const category = help.category || 'Other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(help)
    return acc
  }, {} as Record<string, typeof quickHelps>)

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Quick Help
          </h1>
          <p className="text-xl text-gray-600">
            Fast, actionable answers when you need them most. 2am crying baby? We&apos;ve got you covered.
          </p>
        </div>

        {/* Display quick helps by category */}
        {Object.entries(quickHelpsByCategory).map(([category, categoryHelps]) => (
          <section key={category} className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              {getCategoryLabel(category)}
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoryHelps.map((help) => (
                <Link
                  key={help.slug}
                  href={help.url}
                  className="group rounded-lg border bg-white p-6 transition-shadow hover:shadow-lg"
                >
                  {/* Priority and specialty badges */}
                  <div className="mb-3 flex items-center gap-2">
                    {help.priority === 'high' && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                        <AlertCircle className="h-3 w-3" />
                        High Priority
                      </span>
                    )}
                    {help.isSpecialty && (
                      <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
                        Specialty
                      </span>
                    )}
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-primary-600">
                    {help.title}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                    {help.description}
                  </p>

                  {/* Age ranges */}
                  {help.ageRanges && help.ageRanges.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {help.ageRanges.slice(0, 2).map((age) => (
                        <span
                          key={age}
                          className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                        >
                          {getAgeRangeLabel(age)}
                        </span>
                      ))}
                      {help.ageRanges.length > 2 && (
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                          +{help.ageRanges.length - 2} more
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    {help.readingTime && (
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {help.readingTime.text}
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
        {quickHelps.length === 0 && (
          <div className="rounded-lg border border-dashed py-16 text-center">
            <p className="text-gray-600">Quick help resources coming soon!</p>
            <p className="mt-2 text-sm text-gray-500">
              Check back as new content is published
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
