"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface SiteHeaderProps {
  currentPage?: string;
}

export function SiteHeader({ currentPage }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/ingredients", label: "Ingredients & Products" },
    { href: "/solutions", label: "Solutions" },
    { href: "/partners", label: "Partners" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 lg:h-28 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-full.png"
              alt="Revodro Tech AG"
              width={500}
              height={125}
              className="h-14 lg:h-[6.25rem] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg transition-all hover:text-[#4CAF50] hover:font-bold ${
                  currentPage === item.href
                    ? "text-[#165531] font-bold border-b-2 border-[#165531]"
                    : "text-[#203748] font-medium"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#165531] hover:text-[#4CAF50] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
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

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-100 mt-2">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-base transition-colors py-2 pl-4 ${
                    currentPage === item.href
                      ? "font-bold text-[#165531] border-l-4 border-[#165531]"
                      : "font-medium text-[#203748] hover:text-[#4CAF50]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
