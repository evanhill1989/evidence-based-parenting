import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Content } from '@/lib/content'

interface RelatedContentProps {
  content: Content[]
}

export function RelatedContent({ content }: RelatedContentProps) {
  if (content.length === 0) {
    return null
  }

  return (
    <section className="mt-16 rounded-lg border bg-gray-50 p-8">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Related Content
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {content.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            className="group rounded-lg border bg-white p-6 transition-shadow hover:shadow-md"
          >
            <div className="mb-2 text-xs font-medium uppercase tracking-wide text-primary-600">
              {item.contentType === 'blog' && 'Article'}
              {item.contentType === 'guide' && 'Guide'}
              {item.contentType === 'quick-help' && 'Quick Help'}
              {item.contentType === 'age-page' && 'Age Guide'}
            </div>
            <h3 className="mb-2 font-semibold text-gray-900 group-hover:text-primary-600">
              {item.title}
            </h3>
            <p className="mb-3 text-sm text-gray-600 line-clamp-2">
              {item.description}
            </p>
            <span className="inline-flex items-center text-sm text-primary-600">
              Read more <ArrowRight className="ml-1 h-3 w-3" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
