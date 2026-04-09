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
      <section className="bg-[#F4F1FB] py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="animate-fade-in inline-block bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
            Contact
          </span>
          <h1 className="animate-fade-in-up delay-100 text-4xl md:text-5xl font-extrabold mb-4 text-[#1C1626]">Get in touch</h1>
          <p className="animate-fade-in-up delay-200 text-[#6B6580] text-lg">Have a question, idea, or just want to say hi? We would love to hear from you.</p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-xl mx-auto px-6 py-20">
        {submitted ? (
          <div className="animate-scale-in text-center bg-white border border-[#E8E3F5] rounded-2xl px-10 py-12 shadow-sm">
            <div className="w-14 h-14 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-bold text-[#1C1626] text-xl mb-2">Message received!</p>
            <p className="text-[#6B6580]">Thanks {form.name}, we will get back to you at <span className="text-violet-600 font-medium">{form.email}</span> soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="animate-fade-in-up flex flex-col gap-5 bg-white border border-[#E8E3F5] rounded-2xl p-8 shadow-sm">
            <div>
              <label className="block text-sm font-semibold text-[#1C1626] mb-1.5">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-[#E8E3F5] bg-[#FAFAF8] text-[#1C1626] placeholder-[#B0ABC4] focus:outline-none focus:ring-2 focus:ring-violet-300 text-sm transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1C1626] mb-1.5">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-[#E8E3F5] bg-[#FAFAF8] text-[#1C1626] placeholder-[#B0ABC4] focus:outline-none focus:ring-2 focus:ring-violet-300 text-sm transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1C1626] mb-1.5">Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What is on your mind?"
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-[#E8E3F5] bg-[#FAFAF8] text-[#1C1626] placeholder-[#B0ABC4] focus:outline-none focus:ring-2 focus:ring-violet-300 text-sm resize-none transition"
              />
            </div>
            <button
              type="submit"
              className="bg-violet-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-violet-700 hover:-translate-y-0.5 transition-all duration-200 text-sm shadow-sm"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </>
  );
}
