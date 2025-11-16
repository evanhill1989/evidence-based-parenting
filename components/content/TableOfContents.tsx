'use client'

import { useEffect, useState } from 'react'

interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -66%' }
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      headings.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [headings])

  if (headings.length === 0) {
    return null
  }

  return (
    <nav className="toc no-print">
      <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-900">
        Table of Contents
      </h4>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 12}px` }}
          >
            <a
              href={`#${heading.id}`}
              className={`block text-sm transition-colors ${
                activeId === heading.id
                  ? 'font-semibold text-primary-600'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

/**
 * Extract headings from HTML content
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
