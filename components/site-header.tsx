import Link from "next/link";
import Image from "next/image";

interface SiteHeaderProps {
  currentPage?: string;
}

export function SiteHeader({ currentPage }: SiteHeaderProps) {
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
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-full.png"
              alt="Revodro Tech AG"
              width={500}
              height={125}
              className="h-[6.25rem] w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
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
        </div>
      </div>
    </header>
  );
}
