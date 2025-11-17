export interface Heading {
  id: string
  text: string
  level: number
}

/**
 * Extract headings from raw MDX/Markdown content (server-side safe)
 */
export function extractHeadings(raw: string): Heading[] {
  // Match markdown headings (##, ###, ####)
  const headingRegex = /^(#{2,4})\s+(.+)$/gm
  const headings: Heading[] = []
  let match

  while ((match = headingRegex.exec(raw)) !== null) {
    const level = match[1].length
    const text = match[2].trim()
    // Generate ID similar to how rehype-slug does it
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

    headings.push({
      level,
      id,
      text,
    })
  }

  return headings
}
