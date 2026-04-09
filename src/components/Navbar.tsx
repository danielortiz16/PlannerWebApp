"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/planner", label: "Try It" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#E8E3F5]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/Logo 1.jpeg" alt="PlanitPlease" width={120} height={40} className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-[#6B6580] hover:text-violet-700 transition-colors font-medium">
              {l.label}
            </Link>
          ))}
          <Link href="/#waitlist" className="bg-violet-600 text-white text-sm font-semibold px-5 py-2 hover:bg-violet-700 transition-colors">
            Join Waitlist
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 text-[#6B6580]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#E8E3F5] bg-white px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-[#6B6580] hover:text-violet-700 font-medium" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/#waitlist" className="bg-violet-600 text-white text-sm font-semibold px-5 py-2.5 text-center hover:bg-violet-700" onClick={() => setOpen(false)}>
            Join Waitlist
          </Link>
        </div>
      )}
    </nav>
  );
}
