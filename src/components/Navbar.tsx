"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a1a]/90 backdrop-blur border-b border-indigo-900">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-yellow-300 tracking-tight">
          🪐 PlanitPlease
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/#waitlist" className="bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors">
            Join Waitlist
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 text-slate-400" onClick={() => setOpen(!open)} aria-label="Toggle menu">
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
        <div className="md:hidden border-t border-indigo-900 bg-[#0a0a1a] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-slate-400 hover:text-white" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/#waitlist" className="bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-2 rounded-lg text-center hover:bg-yellow-300" onClick={() => setOpen(false)}>
            Join Waitlist
          </Link>
        </div>
      )}
    </nav>
  );
}
