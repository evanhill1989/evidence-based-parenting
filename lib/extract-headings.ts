export interface Heading {
  id: string
  text: string
  level: number
}

/**
 * Extract headings from HTML content (server-side safe)
 */
export function extractHeadings(html: string): Heading[] {
  const headingRegex = /<h([2-4])[^>]*id="([^"]*)"[^>]*>(.+?)<\/h\1>/g
  const headings: Heading[] = []
  let match

  while ((match = headingRegex.exec(html)) !== null) {
    headings.push({
      level: parseInt(match[1]),
      id: match[2],
      text: match[3].replace(/<[^>]*>/g, ''), // Strip HTML tags
    })
  }

  return headings
}
