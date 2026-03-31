import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-green-700 via-emerald-600 to-teal-600 text-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
            About
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Why we built Inplantoo
          </h1>
          <p className="text-green-100 text-lg">
            A planner built by students, for students.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4">The problem we lived</h2>
        <p className="text-gray-500 text-lg leading-relaxed mb-4">
          College is exciting — but it&apos;s also overwhelming. Between classes, assignments, clubs, social life, and trying to sleep, it&apos;s nearly impossible to feel like you have it together. Most students don&apos;t lack motivation. They lack a system that actually works for them.
        </p>
        <p className="text-gray-500 text-lg leading-relaxed mb-4">
          We tried every planner, app, and productivity system out there. They were either too rigid, too complicated, or completely ignored the fact that life doesn&apos;t follow a perfect schedule. One unexpected assignment or a study session that runs long and the whole plan falls apart.
        </p>
        <p className="text-gray-500 text-lg leading-relaxed">
          So we built Inplantoo — a planner that starts with <em>you</em>. Upload your schedule, tell it what matters most, and let it do the heavy lifting of figuring out your day.
        </p>
      </section>

      {/* Mission */}
      <section className="bg-green-50 border-y border-green-100 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Our mission</h2>
          <p className="text-gray-600 text-xl leading-relaxed">
            Help every college student spend their time on what actually matters to them — not just what&apos;s due next.
          </p>
        </div>
      </section>

      {/* What makes us different */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-10 text-center">What makes Inplantoo different</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "📸",
              title: "Starts with your real schedule",
              desc: "Just upload a photo of your class schedule. No manual entry, no setup friction.",
            },
            {
              icon: "🎯",
              title: "Built around your priorities",
              desc: "You choose what matters — grades, rest, networking, fitness. Inplantoo builds your plan around that.",
            },
            {
              icon: "⚡",
              title: "Adapts when things change",
              desc: "Life happens. Add a task and your whole plan reshuffles automatically — no chaos, no stress.",
            },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-700 text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold mb-4">Ready to try it?</h2>
          <p className="text-emerald-100 mb-8">Join the waitlist and be first in line when Inplantoo launches.</p>
          <Link
            href="/#waitlist"
            className="inline-block bg-lime-400 text-gray-900 font-bold px-10 py-4 rounded-xl hover:bg-lime-300 transition-colors text-lg"
          >
            Join the Waitlist
          </Link>
        </div>
      </section>
    </>
  );
}
