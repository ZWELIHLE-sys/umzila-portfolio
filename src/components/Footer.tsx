import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Vision", href: "/vision" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-sage px-6 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        {/* Brand */}
        <div>
          <div className="font-serif text-lg font-bold text-dark">
            Umzila-AfriRoute
          </div>
          <div className="mt-1 text-[13px] text-dark/70">
            Jolivet, KwaZulu-Natal — for Africa
          </div>
        </div>

        {/* Nav (centered) */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-dark/80 transition-colors hover:text-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Copyright (centered) */}
        <div className="w-full border-t border-dark/10 pt-6 text-xs text-dark/60">
          © 2026 Zwelihle Mhlongo · Umzila-AfriRoute. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
