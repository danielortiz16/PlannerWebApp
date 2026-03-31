import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";

const priorities = [
  {
    icon: "🎓",
    label: "Better Grades",
    desc: "Block deep study sessions around your hardest courses and upcoming exams.",
  },
  {
    icon: "🤝",
    label: "Networking",
    desc: "Reserve time for club meetings, office hours, and career events that build your future.",
  },
  {
    icon: "😴",
    label: "Rest & Recovery",
    desc: "Protect sleep and downtime so you can show up recharged — not burned out.",
  },
  {
    icon: "💪",
    label: "Health & Fitness",
    desc: "Fit in workouts and meals without sacrificing your academic performance.",
  },
];

const steps = [
  {
    step: "01",
    title: "Upload Your Schedule",
    desc: "Snap a photo of your class schedule or paste in your courses. Inplantoo reads it instantly.",
  },
  {
    step: "02",
    title: "Set Your Priorities",
    desc: "Tell Inplantoo what matters most — grades, rest, networking, or anything else. You're in control.",
  },
  {
    step: "03",
    title: "Get Your Plan",
    desc: "Inplantoo builds a personalized daily schedule around your goals and existing commitments.",
  },
  {
    step: "04",
    title: "Adapt on the Fly",
    desc: "Something pop up? Drop it in. Inplantoo automatically rearranges your schedule to keep everything flowing.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-700 via-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_80%,white,transparent_50%)]" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Built for college students
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Your daily plan,<br />
            <span className="text-lime-300">designed around your life.</span>
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto mb-6">
            Inplantoo helps college students plan their day without the stress. Just <strong className="text-white">upload a photo of your class schedule</strong>, tell us your goals, and we&apos;ll build a personalized daily plan — automatically.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-green-200">
            <span className="flex items-center gap-2"><span className="text-lime-300">📸</span> Upload your schedule</span>
            <span className="flex items-center gap-2"><span className="text-lime-300">🎯</span> Set your priorities</span>
            <span className="flex items-center gap-2"><span className="text-lime-300">📅</span> Get your plan instantly</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#waitlist"
              className="bg-lime-400 text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-lime-300 transition-colors text-lg shadow-lg"
            >
              Join the Waitlist — Free
            </Link>
            <Link
              href="/#how-it-works"
              className="bg-white/15 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/25 transition-colors text-lg border border-white/30"
            >
              See How It Works
            </Link>
          </div>
          <p className="mt-6 text-sm text-green-200">No credit card required. Launching soon.</p>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="bg-green-50 border-b border-green-100 py-5">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-green-700 text-center">
          <span>🌱 Priority-based scheduling</span>
          <span>🌱 Real-time rescheduling</span>
          <span>🌱 Upload your class schedule</span>
          <span>🌱 Calendar sync</span>
          <span>🌱 Works around your life</span>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          College is busy. <span className="text-emerald-600">Your planner should keep up.</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-4">
          Between classes, assignments, clubs, and everything else, it&apos;s hard to know where to even start. Most planners give you a blank calendar and wish you luck.
        </p>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Inplantoo is different. Snap a photo of your class schedule, tell us what you&apos;re working toward, and we&apos;ll design a realistic daily plan built around <em>your</em> life.
        </p>
      </section>

      {/* Priorities */}
      <section id="priorities" className="bg-gradient-to-b from-green-50 to-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Your plan, built around your goals
            </h2>
            <p className="text-gray-500 text-lg">Pick what matters most. Inplantoo does the scheduling.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {priorities.map((p) => (
              <div
                key={p.label}
                className="bg-white rounded-2xl p-6 shadow-sm border border-green-100 hover:shadow-md hover:border-green-300 transition-all text-center"
              >
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{p.label}</h3>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            From chaos to clarity in minutes
          </h2>
          <p className="text-gray-500 text-lg">No complicated setup. Just results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.step}>
              <div className="text-5xl font-extrabold text-green-100 mb-3">{s.step}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-emerald-700 text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
            &ldquo;I used to spend Sunday nights overwhelmed, not knowing where to start. I needed something that actually understood my life — not just a blank calendar.&rdquo;
          </p>
          <p className="text-emerald-200 text-sm">— The problem Inplantoo was built to solve</p>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="max-w-6xl mx-auto px-6 py-28 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Ready to get your time back?
        </h2>
        <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
          Join students already on the waitlist. Be the first to get access when Inplantoo launches.
        </p>
        <WaitlistForm />
      </section>
    </>
  );
}
