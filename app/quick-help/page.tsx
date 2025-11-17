import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quick Help',
  description: 'Fast answers when you need them. Quick reference guides for urgent parenting concerns.',
}

export default function QuickHelpPage() {
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

        <div className="rounded-lg border border-dashed py-16 text-center">
          <p className="text-gray-600">Quick help resources coming soon!</p>
          <p className="mt-2 text-sm text-gray-500">
            Check back as new content is published
          </p>
        </div>
      </div>
    </div>
  )
}
