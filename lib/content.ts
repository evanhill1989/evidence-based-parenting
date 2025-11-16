import { allBlogPosts, allQuickHelps, allGuides, allAgePages } from 'contentlayer/generated'
import type { BlogPost, QuickHelp, Guide, AgePage } from 'contentlayer/generated'

export type Content = BlogPost | QuickHelp | Guide | AgePage

/**
 * Get all content sorted by date
 */
export function getAllContent(): Content[] {
  const allContent = [
    ...allBlogPosts,
    ...allQuickHelps,
    ...allGuides,
    ...allAgePages,
  ]

  return allContent.sort((a, b) => {
    const dateA = 'publishedAt' in a ? new Date(a.publishedAt) : new Date(0)
    const dateB = 'publishedAt' in b ? new Date(b.publishedAt) : new Date(0)
    return dateB.getTime() - dateA.getTime()
  })
}

/**
 * Get related content based on tags, category, and age ranges
 */
export function getRelatedContent(
  currentContent: Content,
  limit: number = 3
): Content[] {
  const allContent = getAllContent()

  // Score each piece of content based on similarity
  const scored = allContent
    .filter((content) => content.url !== currentContent.url)
    .map((content) => {
      let score = 0

      // Same category gets high score
      if ('category' in content && 'category' in currentContent) {
        if (content.category === currentContent.category) {
          score += 10
        }
      }

      // Overlapping age ranges
      if ('ageRanges' in content && 'ageRanges' in currentContent) {
        const overlap = content.ageRanges?.filter((age) =>
          currentContent.ageRanges?.includes(age)
        )
        score += (overlap?.length || 0) * 5
      }

      // Same tags
      if ('tags' in content && 'tags' in currentContent) {
        const tagOverlap = content.tags?.filter((tag) =>
          currentContent.tags?.includes(tag)
        )
        score += (tagOverlap?.length || 0) * 3
      }

      // Same content type gets small boost
      if (content.contentType === currentContent.contentType) {
        score += 2
      }

      // Both specialty content
      if ('isSpecialty' in content && 'isSpecialty' in currentContent) {
        if (content.isSpecialty && currentContent.isSpecialty) {
          score += 5
        }
      }

      return { content, score }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)

  return scored.map(({ content }) => content)
}

/**
 * Filter content by age range
 */
export function getContentByAge(ageRange: string): Content[] {
  const allContent = getAllContent()

  return allContent.filter((content) => {
    if ('ageRanges' in content) {
      return content.ageRanges?.includes(ageRange as any)
    }
    return false
  })
}

/**
 * Filter content by category
 */
export function getContentByCategory(category: string): Content[] {
  const allContent = getAllContent()

  return allContent.filter((content) => {
    if ('category' in content) {
      return content.category === category
    }
    return false
  })
}

/**
 * Get featured content
 */
export function getFeaturedContent(limit: number = 6): Content[] {
  const allContent = getAllContent()

  const featured = allContent.filter((content) => {
    if ('featured' in content) {
      return content.featured === true
    }
    return false
  })

  return featured.slice(0, limit)
}

/**
 * Get specialty content (neurological/developmental focus)
 */
export function getSpecialtyContent(limit?: number): Content[] {
  const allContent = getAllContent()

  const specialty = allContent.filter((content) => {
    if ('isSpecialty' in content) {
      return content.isSpecialty === true
    }
    return false
  })

  return limit ? specialty.slice(0, limit) : specialty
}
