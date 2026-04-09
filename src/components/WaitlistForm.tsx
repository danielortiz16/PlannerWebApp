"use client";
import { useState } from "react";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (name && email) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="animate-scale-in inline-flex flex-col items-center gap-2 bg-white border border-[#E8E3F5] px-10 py-8 shadow-sm">
        <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-1">
          <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-bold text-[#1C1626] text-lg">You&apos;re on the list, {name}!</p>
        <p className="text-[#6B6580] text-sm">We&apos;ll reach out at <span className="font-medium text-violet-600">{email}</span> when PlanitPlease launches.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 justify-center max-w-md mx-auto">
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        className="px-4 py-3 border border-[#E8E3F5] bg-white text-[#1C1626] placeholder-[#B0ABC4] focus:outline-none focus:ring-2 focus:ring-violet-400 text-sm shadow-sm transition"
      />
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your .edu email"
        className="px-4 py-3 border border-[#E8E3F5] bg-white text-[#1C1626] placeholder-[#B0ABC4] focus:outline-none focus:ring-2 focus:ring-violet-400 text-sm shadow-sm transition"
      />
      <button
        type="submit"
        className="bg-violet-600 text-white font-semibold px-6 py-3 hover:bg-violet-700 hover:-translate-y-0.5 transition-all duration-200 text-sm shadow-sm animate-glow-pulse"
      >
        Get Early Access
      </button>
    </form>
  );
}
