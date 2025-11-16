import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How-To Guides',
  description: 'Step-by-step instructions for common parenting tasks and skills.',
}

export default function GuidesPage() {
  const categories = [
    {
      name: 'Feeding',
      description: 'Breastfeeding, bottle feeding, and starting solids',
      count: 0,
    },
    {
      name: 'Sleep',
      description: 'Sleep training, routines, and safe sleep practices',
      count: 0,
    },
    {
      name: 'Safety',
      description: 'Baby-proofing, car seats, and injury prevention',
      count: 0,
    },
    {
      name: 'Development',
      description: 'Supporting your child\'s growth and milestones',
      count: 0,
    },
    {
      name: 'Basics',
      description: 'Diapering, bathing, and daily care routines',
      count: 0,
    },
  ]

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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="rounded-lg border bg-white p-6"
            >
              <h2 className="mb-2 text-xl font-bold text-gray-900">
                {category.name}
              </h2>
              <p className="mb-4 text-sm text-gray-600">
                {category.description}
              </p>
              <p className="text-xs text-gray-500">
                {category.count} guides • More coming soon
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
