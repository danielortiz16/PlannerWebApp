import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";

const priorities = [
  { label: "Better Grades",   desc: "Block deep study sessions around your hardest courses and upcoming exams.",        color: "bg-violet-100 text-violet-700", dot: "bg-violet-400", num: "01" },
  { label: "Networking",      desc: "Reserve time for clubs, office hours, and career events that build your future.",  color: "bg-sky-100 text-sky-700",    dot: "bg-sky-400",    num: "02" },
  { label: "Rest & Recovery", desc: "Protect sleep and downtime so you can show up recharged and not burned out.",      color: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-400", num: "03" },
  { label: "Health & Fitness",desc: "Fit in workouts and meals without sacrificing your academic performance.",         color: "bg-pink-100 text-pink-700",  dot: "bg-pink-400",   num: "04" },
];

const steps = [
  { step: "01", title: "Upload Your Schedule", desc: "Snap a photo of your class schedule. PlanitPlease reads it instantly." },
  { step: "02", title: "Set Your Priorities",  desc: "Tell PlanitPlease what matters most — grades, rest, networking, or anything else." },
  { step: "03", title: "Get Your Plan",        desc: "A personalized daily schedule built around your goals and existing commitments." },
  { step: "04", title: "Adapt on the Fly",     desc: "Something pop up? Drop it in and PlanitPlease automatically rearranges your week." },
];


const stats = [
  { value: "1",    unit: "photo",   label: "to get started" },
  { value: "4",    unit: "goals",   label: "to choose from" },
  { value: "5",    unit: "days",    label: "planned instantly" },
  { value: "0",    unit: "stress",  label: "in the process" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#F4F1FB] clip-diagonal-bottom pb-36 pt-24 md:pt-32 overflow-hidden">
        {/* Large decorative background word */}
        <span
          aria-hidden
          className="pointer-events-none select-none absolute -bottom-6 left-1/2 -translate-x-1/2 text-[clamp(80px,18vw,200px)] font-extrabold text-violet-200/30 uppercase tracking-widest leading-none"
        >
          PLAN
        </span>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-8">
                <Image src="/Logo 1.jpeg" alt="PlanitPlease" width={240} height={80} className="h-20 w-auto" />
              </div>

              <span className="inline-flex items-center gap-1.5 bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-widest animate-pulse-soft">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse-soft delay-200" />
                Built for college students
              </span>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-5 text-[#1C1626]">
                Your week,<br />
                planned <em className="not-italic text-violet-600">around</em><br />
                what matters.
              </h1>
              <p className="text-[#6B6580] text-lg max-w-lg mb-8 leading-relaxed">
                Upload a photo of your class schedule, tell us your goals, and PlanitPlease builds a personalized daily plan in seconds.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0">
                <a
                  href="/planner"
                  className="flex-1 bg-violet-600 text-white font-bold px-8 py-4 text-center hover:bg-violet-700 hover:-translate-y-0.5 transition-all duration-200 shadow-sm text-lg"
                >
                  Try the Planner →
                </a>
                <a
                  href="#waitlist"
                  className="flex-1 border border-violet-300 text-violet-700 font-semibold px-8 py-4 text-center hover:bg-violet-50 transition-all duration-200 text-lg"
                >
                  Join Waitlist
                </a>
              </div>
              <p className="mt-3 text-sm text-[#B0ABC4]">Free to use. No account required.</p>
            </div>

            {/* Right — floating schedule card + notification badge */}
            <div className="flex-1 hidden md:flex justify-center">
              <div className="relative w-72 animate-float">
                <div className="absolute -top-4 -right-4 w-full h-full bg-violet-200/50 animate-float-slow delay-200" />
                <div className="absolute -top-2 -right-2 w-full h-full bg-violet-300/30 animate-float-slow delay-400" />
                <div className="relative bg-white shadow-xl border border-violet-100 p-6 space-y-3">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-300 animate-pulse-soft" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-300 animate-pulse-soft delay-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse-soft delay-400" />
                    <span className="text-[10px] text-[#B0ABC4] ml-2 font-mono tracking-wider">monday.plan</span>
                  </div>
                  {[
                    { time: "9:00 AM",  label: "Calc II",      color: "bg-violet-100 text-violet-700" },
                    { time: "11:00 AM", label: "Study block",  color: "bg-amber-100 text-amber-700" },
                    { time: "1:00 PM",  label: "Lunch break",  color: "bg-emerald-100 text-emerald-700" },
                    { time: "2:30 PM",  label: "Econ lecture", color: "bg-violet-100 text-violet-700" },
                    { time: "5:00 PM",  label: "Gym",          color: "bg-pink-100 text-pink-700" },
                  ].map((item, i) => (
                    <div key={item.time} className="flex items-center gap-3 animate-pulse-soft" style={{ animationDelay: `${i * 0.4}s` }}>
                      <span className="text-[10px] text-[#B0ABC4] font-mono w-16 shrink-0">{item.time}</span>
                      <span className={`text-xs font-semibold px-3 py-1.5 flex-1 ${item.color}`}>{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Floating notification toast */}
                <div className="absolute -bottom-8 -left-10 bg-white border border-emerald-100 shadow-lg px-4 py-3 flex items-center gap-3 w-52 animate-float-slow delay-600">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#1C1626]">Plan generated</p>
                    <p className="text-[9px] text-[#9E99B0]">Your week is ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visual break — stacked progress rings ── */}
      <section className="bg-[#1C1626] py-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
          {[
            { label: "Grades",  pct: 88, color: "stroke-violet-400",  bg: "stroke-violet-900" },
            { label: "Sleep",   pct: 75, color: "stroke-emerald-400", bg: "stroke-emerald-900" },
            { label: "Fitness", pct: 62, color: "stroke-pink-400",    bg: "stroke-pink-900" },
            { label: "Social",  pct: 70, color: "stroke-sky-400",     bg: "stroke-sky-900" },
          ].map((item, i) => {
            const r = 28;
            const circ = 2 * Math.PI * r;
            const dash = (item.pct / 100) * circ;
            return (
              <div key={item.label} className="flex flex-col items-center gap-2 animate-pulse-soft" style={{ animationDelay: `${i * 0.4}s` }}>
                <svg width="72" height="72" viewBox="0 0 72 72">
                  <circle cx="36" cy="36" r={r} fill="none" strokeWidth="6" className={item.bg} />
                  <circle
                    cx="36" cy="36" r={r} fill="none" strokeWidth="6"
                    className={item.color}
                    strokeDasharray={`${dash} ${circ - dash}`}
                    strokeDashoffset={circ / 4}
                    strokeLinecap="round"
                  />
                  <text x="36" y="41" textAnchor="middle" className="fill-white text-[11px] font-bold" style={{ fontSize: 11, fontWeight: 700, fill: "white" }}>{item.pct}%</text>
                </svg>
                <span className="text-violet-300/60 text-xs uppercase tracking-widest font-semibold">{item.label}</span>
              </div>
            );
          })}
          <div className="hidden sm:block w-px h-16 bg-white/5" />
          <div className="text-center sm:text-left max-w-xs">
            <p className="text-white/80 font-semibold text-base mb-1">A balanced week, by design.</p>
            <p className="text-violet-300/50 text-sm leading-relaxed">PlanitPlease keeps every part of your life moving forward, not just your GPA.</p>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-white border-b border-[#E8E3F5]">
        <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#E8E3F5]">
          {stats.map((s) => (
            <div key={s.value} className="bg-white px-8 py-10 text-center">
              <p className="text-5xl font-extrabold text-[#1C1626] leading-none mb-1">
                {s.value}<span className="text-violet-500">.</span>
              </p>
              <p className="text-violet-600 text-sm font-bold uppercase tracking-widest mb-1">{s.unit}</p>
              <p className="text-[#9E99B0] text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="max-w-4xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-violet-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">The problem</p>
            <h2 className="text-4xl font-extrabold text-[#1C1626] leading-tight">
              College is busy.<br />
              <span className="text-violet-600">Your planner<br />should keep up.</span>
            </h2>
          </div>
          <div className="border-l-2 border-violet-200 pl-8">
            <p className="text-[#6B6580] text-lg leading-relaxed">
              Between classes, assignments, clubs, and everything else, it is hard to know where to start. Most planners give you a blank calendar and wish you luck.
            </p>
            <p className="text-[#6B6580] text-lg leading-relaxed mt-4">
              PlanitPlease is different — it builds a realistic plan around your actual schedule and goals.
            </p>
          </div>
        </div>
      </section>

      {/* ── Bento feature grid ── */}
      <section className="bg-[#F4F1FB] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-violet-600 text-xs font-bold uppercase tracking-[0.2em] mb-3">Features</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1626]">Everything you need.<br />Nothing you don&apos;t.</h2>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">

            {/* Wide card — upload */}
            <div className="md:col-span-2 bg-white border border-[#E8E3F5] p-8 flex flex-col md:flex-row gap-8 items-center overflow-hidden relative group hover:border-violet-200 hover:shadow-lg transition-all duration-300">
              <div className="shrink-0">
                <div className="w-14 h-14 bg-violet-100 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold text-[#1C1626] mb-2">Snap to schedule</h3>
                <p className="text-[#6B6580] text-sm leading-relaxed max-w-xs">Take a photo of your class schedule and PlanitPlease does the rest — no typing, no setup.</p>
              </div>
              {/* Mini visual */}
              <div className="flex-1 flex justify-center md:justify-end">
                <div className="w-40 h-28 bg-violet-50 border-2 border-dashed border-violet-200 flex items-center justify-center">
                  <svg className="w-10 h-10 text-violet-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4-4a3 3 0 014.24 0L16 16m-2-2l1.586-1.586a3 3 0 014.242 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 to-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>

            {/* Tall card — AI */}
            <div className="bg-[#1C1626] border border-white/5 p-8 flex flex-col justify-between group hover:border-violet-800 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-2xl" />
              <div>
                <div className="w-10 h-10 bg-violet-900/60 border border-violet-700/40 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-extrabold text-white mb-2">AI-powered</h3>
                <p className="text-violet-300/60 text-sm leading-relaxed">Gemini reads your schedule and builds a full week plan in seconds.</p>
              </div>
              <div className="mt-6 flex gap-1.5">
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map((d, i) => (
                  <div key={d} className="flex-1 flex flex-col gap-1">
                    <p className="text-[8px] text-violet-400/50 text-center font-mono">{d}</p>
                    {[...Array(3)].map((_, j) => (
                      <div
                        key={j}
                        className="h-2 bg-violet-700/40 animate-pulse-soft"
                        style={{ animationDelay: `${(i + j) * 0.15}s`, opacity: 0.4 + j * 0.2 }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Small card — priorities */}
            <div className="bg-white border border-[#E8E3F5] p-7 group hover:border-violet-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-violet-100/50 rounded-full blur-xl" />
              <div className="w-10 h-10 bg-emerald-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base font-extrabold text-[#1C1626] mb-1.5">Goal-first planning</h3>
              <p className="text-[#6B6580] text-sm leading-relaxed">Your priorities drive the plan — not a generic template.</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Grades", "Sleep", "Fitness", "Social"].map((tag) => (
                  <span key={tag} className="text-[10px] bg-[#F4F1FB] text-[#6B6580] px-2 py-1 rounded-full border border-[#E8E3F5] font-medium">{tag}</span>
                ))}
              </div>
            </div>

            {/* Small card — adapts */}
            <div className="bg-white border border-[#E8E3F5] p-7 group hover:border-violet-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-20 h-20 bg-sky-100/50 rounded-full blur-xl" />
              <div className="w-10 h-10 bg-sky-100 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-base font-extrabold text-[#1C1626] mb-1.5">Adapts to your life</h3>
              <p className="text-[#6B6580] text-sm leading-relaxed">Drop in a new task and your whole week reshuffles automatically.</p>
            </div>

            {/* Wide card — before/after */}
            <div className="md:col-span-1 bg-gradient-to-br from-violet-600 to-indigo-600 p-8 text-white group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
              <p className="text-violet-200 text-xs font-bold uppercase tracking-widest mb-3">The result</p>
              <p className="text-2xl font-extrabold leading-snug mb-4">Less chaos.<br />More you.</p>
              <div className="flex items-center gap-2 mt-auto">
                <div className="h-1.5 rounded-full bg-white/20 flex-1">
                  <div className="h-full w-3/4 bg-white rounded-full animate-scale-pulse" />
                </div>
                <span className="text-white/70 text-xs font-mono">75%</span>
              </div>
              <p className="text-violet-200/60 text-xs mt-1">less time spent planning</p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Priorities ── */}
      <section id="priorities" className="clip-diagonal-top clip-diagonal-bottom py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-violet-600 text-xs font-bold uppercase tracking-[0.2em] mb-3">What drives you</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1626]">Your plan, built<br />around your goals</h2>
            </div>
            <p className="text-[#6B6580] text-base max-w-xs">Pick what matters most. PlanitPlease handles the scheduling.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {priorities.map((p, i) => (
              <div
                key={p.label}
                className="group relative bg-[#FAFAF8] p-6 border border-[#E8E3F5] hover:border-violet-300 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <span
                  aria-hidden
                  className="absolute top-3 right-4 text-5xl font-extrabold text-violet-100 group-hover:text-violet-200 transition-colors select-none"
                >
                  {p.num}
                </span>
                <div className={`w-8 h-8 ${p.color} flex items-center justify-center mb-4 animate-scale-pulse`} style={{ animationDelay: `${i * 0.4}s` }}>
                  <div className={`w-2 h-2 rounded-full ${p.dot}`} />
                </div>
                <h3 className="font-bold text-[#1C1626] mb-2 relative z-10">{p.label}</h3>
                <p className="text-sm text-[#6B6580] leading-relaxed relative z-10">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-28">
        <div className="text-center mb-16">
          <p className="text-violet-600 text-xs font-bold uppercase tracking-[0.2em] mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1626]">From chaos to clarity<br />in minutes</h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((s) => (
              <div key={s.step} className="relative">
                <div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-violet-300 flex items-center justify-center mb-5 shadow-sm">
                  <span className="text-xs font-bold text-violet-600 font-mono">{s.step}</span>
                </div>
                <h3 className="font-bold text-[#1C1626] text-base mb-2">{s.title}</h3>
                <p className="text-[#6B6580] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After ── */}
      <section className="bg-[#F4F1FB] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-violet-600 text-xs font-bold uppercase tracking-[0.2em] mb-3">The difference</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1C1626]">See what changes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="bg-white border-2 border-rose-100 p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-rose-400">Without PlanitPlease</p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "No system",      w: "w-full",   color: "bg-rose-100" },
                  { label: "Missed tasks",   w: "w-4/5",    color: "bg-rose-100" },
                  { label: "Random blocks",  w: "w-2/3",    color: "bg-rose-100" },
                  { label: "Burnout risk",   w: "w-3/4",    color: "bg-rose-100" },
                  { label: "No free time",   w: "w-5/6",    color: "bg-rose-100" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-3">
                    <span className="text-xs text-[#9E99B0] w-28 shrink-0">{row.label}</span>
                    <div className={`${row.w} h-2.5 ${row.color} rounded-full`} />
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="bg-white border-2 border-emerald-100 p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-500">With PlanitPlease</p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Structured days",  w: "w-full",  color: "bg-emerald-200" },
                  { label: "Everything done",  w: "w-5/6",   color: "bg-emerald-200" },
                  { label: "Study blocks",     w: "w-full",  color: "bg-violet-200" },
                  { label: "Energy managed",   w: "w-4/5",   color: "bg-emerald-200" },
                  { label: "Time for you",     w: "w-3/4",   color: "bg-pink-200" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-3">
                    <span className="text-xs text-[#6B6580] w-28 shrink-0 font-medium">{row.label}</span>
                    <div className={`${row.w} h-2.5 ${row.color} rounded-full animate-scale-pulse`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="bg-[#1C1626] text-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <span className="text-[8rem] leading-none text-violet-700/50 font-serif select-none -mt-8 shrink-0">&ldquo;</span>
            <div className="pt-4">
              <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-6 text-white/90">
                I needed something that actually understood my life, not just a blank calendar.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-violet-500" />
                <p className="text-violet-300/60 text-sm">The problem PlanitPlease was built to solve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── See it in action ── */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <p className="text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">Real output</p>
          <h2 className="text-3xl font-extrabold text-[#1C1626]">This is what your week looks like</h2>
          <p className="text-[#6B6580] mt-3 max-w-xl mx-auto">Upload your schedule, and PlanitPlease hands you a full week broken down by day — classes detected, tasks slotted in, everything organized.</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 bg-violet-100/50 -z-10" />
          <Image
            src="/photo4.jpeg"
            alt="PlanitPlease schedule output example"
            width={1000}
            height={600}
            className="w-full border border-[#E8E3F5] shadow-lg"
          />
        </div>
      </section>

      {/* ── Waitlist CTA ── */}
      <section id="waitlist" className="bg-[#F4F1FB] clip-diagonal-top py-32 text-center">
        <div className="max-w-xl mx-auto px-6">
          <div className="flex items-center gap-4 justify-center mb-8">
            <div className="w-12 h-px bg-violet-300" />
            <span className="text-violet-600 text-xs font-bold uppercase tracking-[0.2em]">Early access</span>
            <div className="w-12 h-px bg-violet-300" />
          </div>
          <h2 className="text-4xl font-extrabold text-[#1C1626] mb-3">Be first in line.</h2>
          <p className="text-[#6B6580] mb-10 text-lg">Join students already on the waitlist. We will reach out when PlanitPlease is ready.</p>
          <WaitlistForm />
        </div>
      </section>
    </>
  );
}
