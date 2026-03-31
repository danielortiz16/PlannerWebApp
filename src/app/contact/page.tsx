"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.name && form.email && form.message) setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
      <section className="relative bg-[#0a0a1a] text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e1b4b_0%,_#0a0a1a_70%)]" />
        <div className="relative max-w-3xl mx-auto px-6">
          <span className="inline-block bg-indigo-900/60 border border-indigo-700 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get in touch</h1>
          <p className="text-slate-400 text-lg">Have a question, idea, or just want to say hi? We would love to hear from you.</p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-xl mx-auto px-6 py-20">
        {submitted ? (
          <div className="text-center bg-indigo-950 border border-indigo-700 rounded-2xl px-10 py-12">
            <span className="text-4xl">🚀</span>
            <p className="font-bold text-white text-xl mt-4 mb-2">Message received!</p>
            <p className="text-slate-400">Thanks {form.name}, we will get back to you at {form.email} soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-1">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-indigo-800 bg-indigo-950 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-1">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-indigo-800 bg-indigo-950 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-1">Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What is on your mind?"
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-indigo-800 bg-indigo-950 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-sm resize-none"
              />
            </div>
            <button type="submit" className="bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition-colors text-sm">
              Send Message
            </button>
          </form>
        )}
      </section>
    </>
  );
}
