'use client';

import { useState } from "react"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header - White Background */}
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
              <Link
                href="/"
                className="text-lg font-bold text-[#165531] hover:text-[#4CAF50] transition-colors border-b-2 border-[#165531]"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium text-[#203748] hover:text-[#4CAF50] hover:font-bold transition-all"
              >
                About Us
              </Link>
              <Link
                href="/ingredients"
                className="text-lg font-medium text-[#203748] hover:text-[#4CAF50] hover:font-bold transition-all"
              >
                Ingredients & Products
              </Link>
              <Link
                href="/solutions"
                className="text-lg font-medium text-[#203748] hover:text-[#4CAF50] hover:font-bold transition-all"
              >
                Solutions
              </Link>
              <Link
                href="/partners"
                className="text-lg font-medium text-[#203748] hover:text-[#4CAF50] hover:font-bold transition-all"
              >
                Partners
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium text-[#203748] hover:text-[#4CAF50] hover:font-bold transition-all"
              >
                Contact Us
              </Link>
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
                <Link
                  href="/"
                  className="text-base font-bold text-[#165531] hover:text-[#4CAF50] transition-colors py-2 border-l-4 border-[#165531] pl-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-base font-medium text-[#203748] hover:text-[#4CAF50] transition-colors py-2 pl-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/ingredients"
                  className="text-base font-medium text-[#203748] hover:text-[#4CAF50] transition-colors py-2 pl-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Ingredients & Products
                </Link>
                <Link
                  href="/solutions"
                  className="text-base font-medium text-[#203748] hover:text-[#4CAF50] transition-colors py-2 pl-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  href="/partners"
                  className="text-base font-medium text-[#203748] hover:text-[#4CAF50] transition-colors py-2 pl-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Partners
                </Link>
                <Link
                  href="/contact"
                  className="text-base font-medium text-[#203748] hover:text-[#4CAF50] transition-colors py-2 pl-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[500px] lg:min-h-[700px] bg-[#F7FAFC] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-lab-background.jpeg"
            alt="Laboratory Innovation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/75 via-gray-800/60 to-gray-700/40" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 lg:px-8 pt-24 lg:pt-32 pb-32 lg:pb-40 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
              <span className="block text-balance">Innovating Health</span>
              <span className="block text-balance">Solutions, Together</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-xl">
              Connecting global innovative ingredients with European markets through specialized trade and solution services
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#4CAF50] hover:bg-[#43A047] text-white font-bold px-10 py-7 text-base rounded-lg shadow-lg"
            >
              <Link href="/solutions">Explore Our Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Exclusive Product Lines Section */}
      <section className="relative py-16 lg:py-24 bg-[#F7FAFC] z-30">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#4CAF50] to-[#43A047] text-white text-sm font-bold rounded-full mb-4">
              Premium Ingredients
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#165531] text-balance">
              Exclusive Product Lines
            </h2>
            <p className="text-xl text-[#203748] max-w-2xl mx-auto text-pretty">
              Exclusive authorization in Europe for premium functional ingredients
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Card A: HMO */}
            <Card className="overflow-hidden bg-white border-2 border-[#E2E8F0] hover:border-[#4CAF50] hover:shadow-2xl transition-all duration-300 rounded-2xl !p-0 !gap-0 flex flex-col">
              <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/images/hmo-molecule.jpg"
                  alt="HMO Molecular Structure"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
              </div>
              <div className="p-7 -mt-4 flex flex-col flex-1">
                <div className="flex-1">
                  <div className="inline-block px-4 py-1.5 bg-[#4CAF50] text-white text-sm font-bold rounded-full mb-3">
                    Exclusive Authorization in Europe
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#165531]">
                    HMO Products
                  </h3>
                  <p className="text-[#4A5568] mb-2 text-sm font-semibold">Human Milk Oligosaccharides</p>
                  <p className="text-[#203748] leading-relaxed mb-5 text-base">
                    Exclusive authorized partner for HMO products in Europe, supporting 2'-FL, 3'-SL, and LNnT.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Button
                    asChild
                    className="flex-1 bg-[#165531] hover:bg-[#1E5631] text-white font-bold rounded-lg"
                  >
                    <Link href="/ingredients">View Details</Link>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Card B: Natural Plant Flavors */}
            <Card className="overflow-hidden bg-white border-2 border-[#E2E8F0] hover:border-[#4CAF50] hover:shadow-2xl transition-all duration-300 rounded-2xl !p-0 !gap-0 flex flex-col">
              <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                <Image
                  src="/images/plant-flavors-citrus.jpg"
                  alt="Natural Citrus Fruits"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
              </div>
              <div className="p-7 -mt-4 flex flex-col flex-1">
                <div className="flex-1">
                  <div className="inline-block px-4 py-1.5 bg-[#4CAF50] text-white text-sm font-bold rounded-full mb-3">
                    Exclusive Authorization in Europe
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-[#165531]">
                    Natural Flavors
                  </h3>
                  <p className="text-[#4A5568] mb-2 text-sm font-semibold">Plant-Based Solutions</p>
                  <p className="text-[#203748] leading-relaxed mb-5 text-base">
                    Exclusive partner for natural plant flavors including flowers, herbs, and fruits.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Button
                    asChild
                    className="flex-1 bg-[#165531] hover:bg-[#1E5631] text-white font-bold rounded-lg"
                  >
                    <Link href="/ingredients">View Details</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#4CAF50] to-[#43A047] text-white text-sm font-bold rounded-full mb-4">
              Our Commitment
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#165531] text-balance">
              Our Core Values
            </h2>
            <p className="text-xl text-[#203748] max-w-2xl mx-auto">
              Building excellence through reliability, application expertise, and unwavering commitment to quality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Reliable Supply Chain */}
            <Card 
              className="rounded-2xl bg-white border-2 border-[#E2E8F0] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#4CAF50] hover:shadow-2xl !p-0 !gap-0"
            >
              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/warehouse-supply-chain.jpg"
                  alt="Warehouse supply chain with organized inventory"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
              </div>
              <div className="p-7 -mt-4">
                <h3 className="text-2xl font-bold mb-4 text-[#165531]">
                  Reliable Supply Chain
                </h3>
                <p className="text-[#203748] leading-relaxed text-base">
                  Cross-market delivery and document collaboration, ensuring supply stability and delivery cadence.
                </p>
              </div>
            </Card>

            {/* Application-Oriented */}
            <Card 
              className="rounded-2xl bg-white border-2 border-[#E2E8F0] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#4CAF50] hover:shadow-2xl !p-0 !gap-0"
            >
              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/application-delivery.jpg"
                  alt="Package delivery handover"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
              </div>
              <div className="p-7 -mt-4">
                <h3 className="text-2xl font-bold mb-4 text-[#165531]">
                  Application-Oriented
                </h3>
                <p className="text-[#203748] leading-relaxed text-base">
                  Providing samples and application advice to support formulation directions and evaluation decisions.
                </p>
              </div>
            </Card>

            {/* Compliance & Quality First */}
            <Card 
              className="rounded-2xl bg-white border-2 border-[#E2E8F0] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#4CAF50] hover:shadow-2xl !p-0 !gap-0"
            >
              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/images/compliance-docs.jpg"
                  alt="Compliance documentation and paperwork"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
              </div>
              <div className="p-7 -mt-4">
                <h3 className="text-2xl font-bold mb-4 text-[#165531]">
                  Compliance & Quality First
                </h3>
                <p className="text-[#203748] leading-relaxed text-base">
                  Standardized document packages and quality communication mechanisms to reduce compliance and delivery risks.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#303a44] py-16 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <Image
                src="/images/logo-full.png"
                alt="Revodro Tech AG"
                width={200}
                height={50}
                className="h-14 w-auto mb-5 brightness-0 invert"
              />
              <p className="text-[#F7FAFC]/80 text-base leading-relaxed">
                Innovating health solutions through functional ingredients for the European market and beyond.
              </p>
            </div>

            {/* About */}
            <div>
              <h4 className="font-bold text-white mb-5 text-lg">About</h4>
              <ul className="space-y-3 text-sm text-[#F7FAFC]/70">
                <li>
                  <Link href="/" className="hover:text-[#4CAF50] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#4CAF50] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="hover:text-[#4CAF50] transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#4CAF50] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-white mb-5 text-lg">Company</h4>
              <ul className="space-y-3 text-sm text-[#F7FAFC]/70">
                <li>
                  <Link href="/contact" className="hover:text-[#4CAF50] transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#4CAF50] transition-colors">
                    Term of Use
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-[#4CAF50] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-bold text-white mb-5 text-lg">Contact Us</h4>
              <ul className="space-y-3 text-sm text-[#F7FAFC]/70">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#4CAF50]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  office@revodro.net
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-14 pt-8 border-t border-[#4A5S68]/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#F7FAFC]/60">
              <p>
                <strong className="text-white">Revodro Tech AG</strong> | Stockerstrasse 43, 8002 Zurich, Switzerland
              </p>
              <p>© Revodro Tech AG. All rights reserved.</p>
              <Link href="/legal" className="hover:text-[#4CAF50] transition-colors">
                Privacy & Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
