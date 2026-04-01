import Link from "next/link";
import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";

const priorities = [
  { icon: "🎓", label: "Better Grades", desc: "Block deep study sessions around your hardest courses and upcoming exams." },
  { icon: "🤝", label: "Networking", desc: "Reserve time for clubs, office hours, and career events that build your future." },
  { icon: "😴", label: "Rest & Recovery", desc: "Protect sleep and downtime so you can show up recharged and not burned out." },
  { icon: "💪", label: "Health & Fitness", desc: "Fit in workouts and meals without sacrificing your academic performance." },
];

const steps = [
  { step: "01", title: "Upload Your Schedule", desc: "Snap a photo of your class schedule or paste in your courses. PlanitPlease reads it instantly." },
  { step: "02", title: "Set Your Priorities", desc: "Tell PlanitPlease what matters most whether that is grades, rest, networking, or anything else." },
  { step: "03", title: "Get Your Plan", desc: "PlanitPlease builds a personalized daily schedule around your goals and existing commitments." },
  { step: "04", title: "Adapt on the Fly", desc: "Something pop up? Drop it in and PlanitPlease automatically rearranges your schedule." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0a1a] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e1b4b_0%,_#0a0a1a_70%)]" />
        <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJ3aGl0ZSI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMSIvPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjgwIiByPSIxLjUiLz48Y2lyY2xlIGN4PSIyNTAiIGN5PSIzMCIgcj0iMSIvPjxjaXJjbGUgY3g9IjM1MCIgY3k9IjEyMCIgcj0iMSIvPjxjaXJjbGUgY3g9IjgwIiBjeT0iMTgwIiByPSIxIi8+PGNpcmNsZSBjeD0iMjAwIiBjeT0iMjAwIiByPSIxLjUiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIyNTAiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSIzMDAiIHI9IjEiLz48Y2lyY2xlIGN4PSIzNTAiIGN5PSIzNTAiIHI9IjEuNSIvPjwvZz48L3N2Zz4=')]" />
        <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
          <div className="flex justify-center mb-8">
            <Image src="/Logo 1.jpeg" alt="PlanitPlease" width={120} height={40} className="h-12 w-auto rounded-xl" />
          </div>
          <span className="inline-block bg-indigo-900/60 border border-indigo-700 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
            🚀 Built for college students
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Your daily plan,<br />
            <span className="text-yellow-300">designed around your life.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-6">
            PlanitPlease helps college students plan their day without the stress. Just <strong className="text-white">upload a photo of your class schedule</strong>, tell us your goals, and we will build a personalized daily plan automatically.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-slate-400">
            <span className="flex items-center gap-2"><span className="text-yellow-300">📸</span> Upload your schedule</span>
            <span className="flex items-center gap-2"><span className="text-yellow-300">🎯</span> Set your priorities</span>
            <span className="flex items-center gap-2"><span className="text-yellow-300">📅</span> Get your plan instantly</span>
          </div>
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
          <p className="mt-4 text-sm text-slate-500">No credit card required. Launching soon.</p>
          <div className="mt-6">
            <Link href="/#how-it-works" className="text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-4 transition-colors">
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="bg-indigo-950 border-b border-indigo-900 py-5">
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm text-indigo-300 text-center">
          <span>⭐ Priority-based scheduling</span>
          <span>🪐 Real-time rescheduling</span>
          <span>🌙 Upload your class schedule</span>
          <span>☄️ Calendar sync</span>
          <span>🌟 Works around your life</span>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          College is busy. <span className="text-indigo-400">Your planner should keep up.</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-4">
          Between classes, assignments, clubs, and everything else, it is hard to know where to even start. Most planners give you a blank calendar and wish you luck.
        </p>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          PlanitPlease is different. Snap a photo of your class schedule, tell us what you are working toward, and we will design a realistic daily plan built around your life.
        </p>
      </section>

      {/* Priorities */}
      <section id="priorities" className="bg-indigo-950/50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Your plan, built around your goals</h2>
            <p className="text-slate-400 text-lg">Pick what matters most. PlanitPlease does the scheduling.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {priorities.map((p) => (
              <div key={p.label} className="bg-indigo-950 rounded-2xl p-6 shadow-sm border border-indigo-800 hover:border-indigo-500 transition-all text-center">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-white mb-2">{p.label}</h3>
                <p className="text-sm text-slate-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">From chaos to clarity in minutes</h2>
          <p className="text-slate-400 text-lg">No complicated setup. Just results.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.step}>
              <div className="text-5xl font-extrabold text-indigo-900 mb-3">{s.step}</div>
              <h3 className="font-bold text-white text-lg mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-indigo-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-4xl mb-6">🌌</div>
          <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-4">
            &ldquo;I needed something that actually understood my life and not just a blank calendar.&rdquo;
          </p>
          <p className="text-indigo-300 text-sm">The problem PlanitPlease was built to solve</p>
        </div>
      </section>

    </>
  );
}
