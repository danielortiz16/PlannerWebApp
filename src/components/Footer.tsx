import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="text-white font-bold text-lg mb-2">Align</p>
          <p className="text-sm max-w-xs">
            A smarter planner built for college students who have too much going on.
          </p>
        </div>
        <div className="flex gap-12 text-sm">
          <div className="flex flex-col gap-2">
            <p className="text-white font-semibold mb-1">Product</p>
            <Link href="/features" className="hover:text-white transition-colors">Features</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-white font-semibold mb-1">Company</p>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/signup" className="hover:text-white transition-colors">Join Waitlist</Link>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-gray-800 text-xs text-gray-600">
        © {new Date().getFullYear()} Align. All rights reserved.
      </div>
    </footer>
  );
}
