import { NextRequest, NextResponse } from 'next/server'
import { allBlogPosts, allGuides, allQuickHelps, allAgePages } from 'contentlayer/generated'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')

  if (!query || query.trim().length === 0) {
    return NextResponse.json({ results: [] })
  }

  const searchTerm = query.toLowerCase()
  const results: Array<{
    title: string
    description: string
    href: string
    category: string
  }> = []

  // Search blog posts
  allBlogPosts.forEach((blog) => {
    if (
      blog.title.toLowerCase().includes(searchTerm) ||
      blog.description?.toLowerCase().includes(searchTerm)
    ) {
      results.push({
        title: blog.title,
        description: blog.description || '',
        href: `/blog/${blog.slug}`,
        category: 'Blog',
      })
    }
  })

  // Search guides
  allGuides.forEach((guide) => {
    if (
      guide.title.toLowerCase().includes(searchTerm) ||
      guide.description?.toLowerCase().includes(searchTerm)
    ) {
      results.push({
        title: guide.title,
        description: guide.description || '',
        href: `/guides/${guide.slug}`,
        category: 'Guide',
      })
    }
  })

  // Search quick help
  allQuickHelps.forEach((quickHelp) => {
    if (
      quickHelp.title.toLowerCase().includes(searchTerm) ||
      quickHelp.description?.toLowerCase().includes(searchTerm)
    ) {
      results.push({
        title: quickHelp.title,
        description: quickHelp.description || '',
        href: `/quick-help/${quickHelp.slug}`,
        category: 'Quick Help',
      })
    }
  })

  // Search age pages
  allAgePages.forEach((agePage) => {
    if (
      agePage.title.toLowerCase().includes(searchTerm) ||
      agePage.description?.toLowerCase().includes(searchTerm)
    ) {
      results.push({
        title: agePage.title,
        description: agePage.description || '',
        href: `/age/${agePage.slug}`,
        category: 'Age Guide',
      })
    }
  })

  // Limit results to top 10
  const limitedResults = results.slice(0, 10)

  return NextResponse.json({ results: limitedResults })
}
