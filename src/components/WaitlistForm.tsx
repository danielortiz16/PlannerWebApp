"use client";
import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="inline-flex flex-col items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-2xl px-10 py-8">
        <span className="text-3xl">🎉</span>
        <p className="font-bold text-gray-900 text-lg">You&apos;re on the list!</p>
        <p className="text-gray-500 text-sm">We&apos;ll email you at <span className="font-medium text-indigo-600">{email}</span> when Inplantoo launches.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your .edu email"
        className="flex-1 px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors text-sm whitespace-nowrap"
      >
        Get Early Access
      </button>
    </form>
  );
}
