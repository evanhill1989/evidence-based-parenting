import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Browse by Age',
  description: 'Comprehensive guides organized by your child\'s age and developmental stage.',
}

export default function AgePage() {
  const ageStages = [
    {
      stage: 'Newborn',
      range: '0-3 months',
      description: 'Everything you need to know about the newborn stage',
      href: '/age/newborn',
    },
    {
      stage: 'Infant',
      range: '3-12 months',
      description: 'Rapid growth and development in the first year',
      href: '/age/infant',
    },
    {
      stage: 'Toddler',
      range: '12-36 months',
      description: 'Walking, talking, and exploring the world',
      href: '/age/toddler',
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Browse by Age
          </h1>
          <p className="text-xl text-gray-600">
            Find age-appropriate guidance for your child&apos;s developmental stage
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {ageStages.map((stage) => (
            <div
              key={stage.stage}
              className="rounded-lg border bg-white p-8"
            >
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                {stage.stage}
              </h2>
              <p className="mb-4 text-sm font-medium text-primary-600">
                {stage.range}
              </p>
              <p className="mb-6 text-gray-600">{stage.description}</p>
              <div className="rounded bg-gray-100 p-4 text-center text-sm text-gray-600">
                Coming soon
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
