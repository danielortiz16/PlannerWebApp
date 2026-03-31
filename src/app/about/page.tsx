import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-[#0a0a1a] text-white py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e1b4b_0%,_#0a0a1a_70%)]" />
        <div className="relative max-w-3xl mx-auto px-6">
          <span className="inline-block bg-indigo-900/60 border border-indigo-700 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
            About
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Why we built PlanitPlease</h1>
          <p className="text-slate-400 text-lg">A planner built by students, for students.</p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-extrabold text-white mb-4">The problem we lived</h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-4">
          College is exciting but it&apos;s also overwhelming. Between classes, assignments, clubs, social life, and trying to sleep, it&apos;s nearly impossible to feel like you have it together. Most students don&apos;t lack motivation. They just need a system that actually works for them.
        </p>
        <p className="text-slate-400 text-lg leading-relaxed mb-4">
          We tried every planner, app, and productivity system out there. They were all either too rigid, too complicated, or completely ignored the fact that life doesn&apos;t follow a perfect schedule. One unexpected assignment or a study session that runs long and the whole plan falls apart.
        </p>
        <p className="text-slate-400 text-lg leading-relaxed">
          So we built PlanitPlease. A planner that starts with <em>you</em>. Upload your schedule, tell it what matters most, and let it figure out the rest.
        </p>
      </section>

      {/* Mission */}
      <section className="bg-indigo-950 border-y border-indigo-900 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-4xl mb-4">🌌</div>
          <h2 className="text-2xl font-extrabold text-white mb-4">Our mission</h2>
          <p className="text-slate-300 text-xl leading-relaxed">
            Help every college student spend their time on what actually matters to them and not just whatever is due next.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-extrabold text-white mb-6">From the creator</h2>
        <div className="relative mx-auto overflow-hidden rounded-2xl shadow-lg border border-indigo-800" style={{ width: "320px", paddingTop: "568px" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/JfsN9rSYgT8"
            title="PlanitPlease demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* What makes us different */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-extrabold text-white mb-10 text-center">What makes PlanitPlease different</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "📸", title: "Starts with your real schedule", desc: "Just upload a photo of your class schedule. No manual entry, no complicated setup." },
            { icon: "🎯", title: "Built around your priorities", desc: "You pick what matters most whether that is grades, rest, networking, or fitness. PlanitPlease builds your plan around that." },
            { icon: "⚡", title: "Adapts when things change", desc: "Life happens. Add a task and your whole plan reshuffles automatically so nothing falls through the cracks." },
          ].map((item) => (
            <div key={item.title} className="text-center bg-indigo-950 border border-indigo-800 rounded-2xl p-6">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Creator */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-extrabold text-white mb-2">The Creator</h2>
        <p className="text-yellow-300 font-semibold text-lg mb-10">Daniel Ortiz</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="overflow-hidden rounded-2xl shadow-md border border-indigo-800">
            <Image src="/photo1.jpeg" alt="Daniel Ortiz" width={400} height={500} className="w-full h-80 object-cover object-top" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md border border-indigo-800">
            <Image src="/photo2.jpeg" alt="Daniel Ortiz" width={400} height={500} className="w-full h-80 object-cover object-top" />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-md border border-indigo-800">
            <Image src="/photo3.jpeg" alt="Daniel Ortiz" width={400} height={500} className="w-full h-80 object-cover object-top" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-900 text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-4">Ready to try it?</h2>
          <p className="text-indigo-300 mb-8">Join the waitlist and be first in line when PlanitPlease launches.</p>
          <Link href="/#waitlist" className="inline-block bg-yellow-400 text-gray-900 font-bold px-10 py-4 rounded-xl hover:bg-yellow-300 transition-colors text-lg">
            Join the Waitlist
          </Link>
        </div>
      </section>
    </>
  );
}
