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
      <section className="bg-gradient-to-br from-green-700 via-emerald-600 to-teal-600 text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
            Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get in touch
          </h1>
          <p className="text-green-100 text-lg">
            Have a question, idea, or just want to say hi? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-xl mx-auto px-6 py-20">
        {submitted ? (
          <div className="text-center bg-green-50 border border-green-100 rounded-2xl px-10 py-12">
            <span className="text-4xl">🌱</span>
            <p className="font-bold text-gray-900 text-xl mt-4 mb-2">Message received!</p>
            <p className="text-gray-500">Thanks {form.name}, we will get back to you at {form.email} soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="What is on your mind?"
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-emerald-800 transition-colors text-sm"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </>
  );
}
