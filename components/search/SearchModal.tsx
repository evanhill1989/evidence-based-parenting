'use client'

import { useState, useEffect, useCallback } from 'react'
import { Search, X } from 'lucide-react'
import Link from 'next/link'

interface SearchResult {
  title: string
  description: string
  href: string
  category: string
}

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Handle Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) {
          onClose()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Perform search
  const performSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      setResults([])
      return
    }

    setIsSearching(true)

    try {
      // Call the search API endpoint
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)

      if (response.ok) {
        const data = await response.json()
        setResults(data.results || [])
      } else {
        setResults([])
      }
    } catch (error) {
      console.error('Search error:', error)
      setResults([])
    } finally {
      setIsSearching(false)
    }
  }, [])

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(searchQuery)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery, performSearch])

  const handleResultClick = () => {
    setSearchQuery('')
    setResults([])
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-start justify-center p-4 pt-16">
        <div className="relative w-full max-w-2xl rounded-lg bg-white shadow-2xl">
          {/* Search Input */}
          <div className="flex items-center gap-3 border-b px-4 py-3">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              className="flex-1 border-none bg-transparent text-lg outline-none placeholder:text-gray-400"
              placeholder="Search articles, guides, and resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button
              onClick={onClose}
              className="rounded-lg p-1 hover:bg-gray-100"
              aria-label="Close search"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto p-2">
            {isSearching && (
              <div className="p-4 text-center text-gray-500">
                Searching...
              </div>
            )}

            {!isSearching && searchQuery && results.length === 0 && (
              <div className="p-4 text-center text-gray-500">
                No results found for &quot;{searchQuery}&quot;
              </div>
            )}

            {!isSearching && results.length > 0 && (
              <div className="space-y-1">
                {results.map((result, index) => (
                  <Link
                    key={index}
                    href={result.href}
                    className="block rounded-lg p-3 transition-colors hover:bg-gray-100"
                    onClick={handleResultClick}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">
                          {result.title}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                          {result.description}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-primary-100 px-2 py-1 text-xs font-medium text-primary-700">
                        {result.category}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {!searchQuery && (
              <div className="p-4 text-center text-sm text-gray-500">
                Type to search articles, guides, and resources
              </div>
            )}
          </div>

          {/* Footer hint */}
          <div className="border-t px-4 py-2 text-xs text-gray-500">
            <kbd className="rounded border bg-gray-100 px-1.5 py-0.5">ESC</kbd> to close
          </div>
        </div>
      </div>
    </div>
  )
}
