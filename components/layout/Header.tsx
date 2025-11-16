'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Quick Help', href: '/quick-help' },
    { name: 'By Age', href: '/age' },
    { name: 'Guides', href: '/guides' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary-600">
              Evidence-Based Parenting
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
              >
                {item.name}
              </Link>
            ))}
            <button
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="rounded-lg p-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-700 hover:text-primary-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="flex items-center gap-2 text-base font-medium text-gray-700">
                <Search className="h-5 w-5" />
                Search
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
