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
    desc: "Snap a photo of your class schedule or paste in your courses. Align reads it instantly.",
  },
  {
    step: "02",
    title: "Set Your Priorities",
    desc: "Tell Align what matters most — grades, rest, networking, or anything else. You're in control.",
  },
  {
    step: "03",
    title: "Get Your Plan",
    desc: "Align builds a personalized weekly schedule around your goals and existing commitments.",
  },
  {
    step: "04",
    title: "Adapt on the Fly",
    desc: "Something pop up? Drop it in. Align automatically rearranges your schedule to keep everything flowing.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_80%,white,transparent_50%)]" />
        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            Built for college students
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Stop drowning in to-dos.<br />
            <span className="text-yellow-300">Start living on purpose.</span>
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
            Align is the AI-powered planner that builds your schedule around <em>your</em> priorities — then adapts in real time when life inevitably changes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#waitlist"
              className="bg-yellow-400 text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors text-lg shadow-lg"
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
          <p className="mt-6 text-sm text-indigo-200">No credit card required. Launching soon.</p>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="bg-gray-50 border-b border-gray-100 py-5">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-gray-500 text-center">
          <span>✅ Priority-based scheduling</span>
          <span>✅ Real-time rescheduling</span>
          <span>✅ Upload your class schedule</span>
          <span>✅ Calendar sync</span>
          <span>✅ Works around your life</span>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Every planner tells you <span className="text-indigo-600">what</span> to do.<br />
          None of them care <span className="text-indigo-600">why.</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Generic to-do apps don&apos;t know you want better grades more than you want to go to the gym. They don&apos;t know your Tuesday is insane but Friday is free. And they definitely don&apos;t help when an exam gets moved or a group project explodes.
        </p>
        <p className="text-gray-800 font-semibold text-lg mt-6">Align does.</p>
      </section>

      {/* Priorities */}
      <section id="priorities" className="bg-gradient-to-b from-indigo-50 to-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Your plan, built around your goals
            </h2>
            <p className="text-gray-500 text-lg">Pick what matters most. Align does the scheduling.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {priorities.map((p) => (
              <div
                key={p.label}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center"
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
              <div className="text-5xl font-extrabold text-indigo-100 mb-3">{s.step}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
            &ldquo;I used to spend Sunday nights overwhelmed, not knowing where to start. I needed something that actually understood my life — not just a blank calendar.&rdquo;
          </p>
          <p className="text-indigo-200 text-sm">— The problem Align was built to solve</p>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="max-w-6xl mx-auto px-6 py-28 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Ready to get your time back?
        </h2>
        <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
          Join students already on the waitlist. Be the first to get access when Align launches.
        </p>
        <WaitlistForm />
      </section>
    </>
  );
}
