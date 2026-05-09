'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

export default function Navbar() {
  const [helpOpen, setHelpOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setHelpOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
      style={{ backgroundColor: '#1e1b4b' }}
    >
      {/* Logo + Title */}
      <Link href="/" className="flex items-center gap-3 group">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-base shrink-0"
          style={{ backgroundColor: '#4f46e5' }}
        >
          W
        </div>
        <span className="text-white font-semibold text-lg leading-tight">
          What are you doing?
        </span>
      </Link>

      {/* Nav links */}
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-150"
        >
          Features
        </Link>

        {/* Help dropdown */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setHelpOpen((prev) => !prev)}
            className="flex items-center gap-1 text-white/70 hover:text-white text-sm font-medium transition-colors duration-150 cursor-pointer"
          >
            Help
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${helpOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown panel */}
          <div
            className={`absolute right-0 mt-3 w-44 rounded-xl bg-white shadow-lg ring-1 ring-black/5 py-1 transition-all duration-200 ${
              helpOpen
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            {[
              { label: 'FAQ', href: '/faq' },
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setHelpOpen(false)}
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-100"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
