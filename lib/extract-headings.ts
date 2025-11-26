import GithubSlugger from 'github-slugger'

export interface Heading {
  id: string;
  text: string;
  level: number;
}

/**
 * Extract headings from raw MDX/Markdown content (server-side safe)
 */
export function extractHeadings(raw: string): Heading[] {
  // Match markdown headings (##, ###, ####)
  const headingRegex = /^(#{2})\s+(.+)$/gm;
  const headings: Heading[] = [];
  const slugger = new GithubSlugger();
  let match;

  while ((match = headingRegex.exec(raw)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    // Use the same slugger that rehype-slug uses - guaranteed identical IDs
    const id = slugger.slug(text);

    headings.push({
      level,
      id,
      text,
    });
  }

  return headings;
}
