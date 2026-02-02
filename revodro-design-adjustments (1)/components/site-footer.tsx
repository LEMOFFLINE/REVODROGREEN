import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="relative bg-[#303a44] py-16 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo-full.png"
              alt="Revodro Tech AG"
              width={400}
              height={100}
              className="h-24 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-[#F7FAFC]/80 text-base leading-relaxed">
              Innovating health solutions through functional ingredients for
              the European market and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-lg">Quick Links</h4>
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
                <Link href="/ingredients" className="hover:text-[#4CAF50] transition-colors">
                  Ingredients & Products
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#4CAF50] transition-colors">
                  Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-5 text-lg">Company</h4>
            <ul className="space-y-3 text-sm text-[#F7FAFC]/70">
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
              <li>
                <Link href="/legal" className="hover:text-[#4CAF50] transition-colors">
                  Legal Notice
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold text-white mb-5 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm text-[#F7FAFC]/70">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>office@revodro.net</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-[#4A5568]/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#F7FAFC]/60">
              <span className="font-semibold text-white">Revodro Tech AG</span> | Stockerstrasse 43, 8002 Zurich, Switzerland
            </p>
            <div className="flex gap-6 text-sm text-[#F7FAFC]/60">
              <span>© Revodro Tech AG. All rights reserved.</span>
              <Link href="/legal" className="hover:text-[#4CAF50] transition-colors">
                Privacy & Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
