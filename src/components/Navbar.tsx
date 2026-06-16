"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Impact", href: "/#impact" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="flex h-16 items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Umzila-AfriRoute home"
          className="flex items-center"
        >
          <span className="relative block h-10 w-[190px]">
            <Image
              src="/images/logo-umzila.jpg"
              alt="Umzila-AfriRoute"
              fill
              priority
              sizes="190px"
              className="object-cover object-center"
            />
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-dark/80 transition-colors hover:text-dark"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-lg bg-sage px-4 py-2 text-[13px] font-semibold text-dark transition-opacity hover:opacity-90"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-dark md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu (smooth slide-down) */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 ease-out md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`flex flex-col gap-1 border-t border-gray-200 px-6 py-4 ${
            open ? "" : "pointer-events-none"
          }`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-dark/80 transition-colors hover:text-dark"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg bg-sage px-4 py-2 text-center text-[13px] font-semibold text-dark"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
