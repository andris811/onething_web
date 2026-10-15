'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  isLegalPage?: boolean;
}

export default function Navigation({ isLegalPage = false }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = isLegalPage
    ? [{ href: '/', label: 'Back to Home' }]
    : [
        { href: '#features', label: 'Features' },
        { href: '#screenshots', label: 'Screenshots' },
        { href: '#contact', label: 'Contact' },
      ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50">
            <Image
              src="/onething_logo.png"
              alt="OneThing Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-2xl font-bold text-[#E5745A]">OneThing</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-[#E5745A] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`transition-colors ${
                        pathname === item.href
                          ? 'text-[#E5745A]'
                          : 'text-gray-700 hover:text-[#E5745A]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              ))}
            </ul>
            {!isLegalPage && (
              <Link
                href="/legal"
                className="text-gray-700 hover:text-[#E5745A] transition-colors text-sm"
              >
                Terms & Privacy
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#E5745A] transition-colors z-50"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 right-0 w-72 bg-white/98 backdrop-blur-lg border border-[#E5DCC8] rounded-lg shadow-2xl m-4 overflow-hidden">
            <div className="px-6 py-6 space-y-4">
              <ul className="space-y-3">
                {navItems.map((item) => (
                  item.href.startsWith('#') ? (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="block text-gray-700 hover:text-[#E5745A] hover:bg-[#F5F1E8] transition-all px-4 py-2 rounded-md text-base font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ) : (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block text-gray-700 hover:text-[#E5745A] hover:bg-[#F5F1E8] transition-all px-4 py-2 rounded-md text-base font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                ))}
                {!isLegalPage && (
                  <li>
                    <Link
                      href="/legal"
                      className="block text-gray-700 hover:text-[#E5745A] hover:bg-[#F5F1E8] transition-all px-4 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Terms & Privacy
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}