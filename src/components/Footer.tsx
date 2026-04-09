"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E8E3F5] text-[#9E99B0] py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <Image src="/Logo 1.jpeg" alt="PlanitPlease" width={100} height={34} className="h-9 w-auto mb-3" />
          <p className="text-sm max-w-xs leading-relaxed">A smarter planner built for college students who have too much going on.</p>
        </div>
        <div className="flex gap-12 text-sm">
          <div className="flex flex-col gap-2">
            <p className="text-[#1C1626] font-semibold mb-1">Product</p>
            <Link href="/#how-it-works" className="hover:text-violet-600 transition-colors">How It Works</Link>
            <Link href="/#waitlist" className="hover:text-violet-600 transition-colors">Join Waitlist</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#1C1626] font-semibold mb-1">Company</p>
            <Link href="/about" className="hover:text-violet-600 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-violet-600 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-[#E8E3F5] text-xs">
        &copy; {new Date().getFullYear()} PlanitPlease. All rights reserved.
      </div>
    </footer>
  );
}
