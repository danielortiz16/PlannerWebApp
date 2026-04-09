import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#F4F1FB] py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="animate-fade-in inline-block bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-widest">
            About
          </span>
          <h1 className="animate-fade-in-up delay-100 text-4xl md:text-5xl font-extrabold mb-4 text-[#1C1626]">
            Why we built <span className="text-violet-600">PlanitPlease</span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-[#6B6580] text-lg">
            A planner built by <span className="text-violet-600 font-semibold">students</span>, for <span className="text-violet-600 font-semibold">students</span>.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="animate-fade-in-up text-2xl font-extrabold text-[#1C1626] mb-5">The problem we lived</h2>
        <p className="animate-fade-in-up delay-100 text-[#6B6580] text-lg leading-relaxed mb-5">
          College is exciting but it is also overwhelming. Between classes, assignments, clubs, social life, and trying to sleep, it is nearly impossible to feel like you have it together. Most students do not lack motivation. They just need <span className="text-violet-600 font-semibold">a system that actually works for them</span>.
        </p>
        <p className="animate-fade-in-up delay-200 text-[#6B6580] text-lg leading-relaxed mb-5">
          We tried every planner, app, and productivity system out there. They were all either too rigid, too complicated, or completely ignored the fact that life does not follow a perfect schedule. One unexpected assignment or a study session that runs long and the whole plan falls apart.
        </p>
        <p className="animate-fade-in-up delay-300 text-[#6B6580] text-lg leading-relaxed">
          So we built PlanitPlease. A planner that starts with <span className="text-violet-600 font-semibold">you</span>. Upload your schedule, tell it what matters most, and let it figure out the rest.
        </p>

        <div className="animate-scale-in delay-400 mt-10 bg-violet-50 border border-violet-200 p-8 text-center">
          <p className="text-violet-700 text-xl font-semibold leading-relaxed">
            You are capable of more than you think. You just need the right plan.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#F4F1FB] border-y border-[#E8E3F5] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="animate-fade-in text-violet-600 text-sm font-semibold uppercase tracking-widest mb-4">Our mission</p>
          <h2 className="animate-fade-in-up delay-100 text-2xl font-extrabold text-[#1C1626] mb-5">Built with purpose</h2>
          <p className="animate-fade-in-up delay-200 text-[#6B6580] text-xl leading-relaxed">
            Help every college student spend their time on <span className="text-violet-600 font-semibold">what actually matters to them</span> and not just whatever is due next.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { stat: "1 upload", label: "That is all it takes to get started", delay: "0s" },
            { stat: "Your goals", label: "Not someone else's template", delay: "0.1s" },
            { stat: "Zero stress", label: "We handle the scheduling so you do not have to", delay: "0.2s" },
          ].map((item) => (
            <div
              key={item.stat}
              className="animate-fade-in-up bg-white border border-[#E8E3F5] p-8 hover:border-violet-300 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: item.delay }}
            >
              <p className="text-violet-600 text-2xl font-extrabold mb-2">{item.stat}</p>
              <p className="text-[#6B6580] text-sm leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="py-16 text-center bg-[#F4F1FB] border-y border-[#E8E3F5]">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">From the creator</p>
          <h2 className="text-2xl font-extrabold text-[#1C1626] mb-2">Hear it directly</h2>
          <p className="text-[#6B6580] mb-8">Daniel shares why he built PlanitPlease and what he wants it to mean for students like you.</p>
          <div className="animate-scale-in relative mx-auto overflow-hidden shadow-lg border border-[#E8E3F5]" style={{ width: "320px", paddingTop: "568px" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/JfsN9rSYgT8"
              title="PlanitPlease demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">Why us</p>
          <h2 className="text-2xl font-extrabold text-[#1C1626]">What makes PlanitPlease different</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Starts with your real schedule",
              desc: "Just upload a photo of your class schedule. No manual entry, no complicated setup.",
              iconBg: "bg-violet-100",
              iconColor: "text-violet-600",
              delay: "0s",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
            },
            {
              title: "Built around your priorities",
              desc: "You pick what matters most — grades, rest, networking, or fitness. PlanitPlease builds your plan around that.",
              iconBg: "bg-sky-100",
              iconColor: "text-sky-600",
              delay: "0.1s",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
            {
              title: "Adapts when things change",
              desc: "Life happens. Add a task and your whole plan reshuffles automatically so nothing falls through the cracks.",
              iconBg: "bg-emerald-100",
              iconColor: "text-emerald-600",
              delay: "0.2s",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ),
            },
          ].map((item) => (
            <div
              key={item.title}
              className="animate-fade-in-up text-center bg-white border border-[#E8E3F5] p-7 hover:border-violet-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: item.delay }}
            >
              <div className={`w-12 h-12 ${item.iconBg} ${item.iconColor} flex items-center justify-center mx-auto mb-4`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-[#1C1626] mb-2">{item.title}</h3>
              <p className="text-sm text-[#6B6580] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Creator */}
      <section className="bg-[#F4F1FB] border-y border-[#E8E3F5] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">The creator</p>
          <h2 className="text-2xl font-extrabold text-[#1C1626] mb-1 animate-fade-in-up">Daniel Ortiz</h2>
          <p className="animate-fade-in-up delay-100 text-[#6B6580] max-w-xl mx-auto mb-12 leading-relaxed">
            A college student who got tired of feeling behind and decided to <span className="text-violet-600 font-semibold">build something better</span>. PlanitPlease is personal because the problem was personal.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["/photo1.jpeg", "/photo2.jpeg", "/photo3.jpeg"].map((src, i) => (
              <div
                key={src}
                className="animate-fade-in-up group overflow-hidden shadow-sm border-2 border-[#E8E3F5] hover:border-violet-400 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ animationDelay: `${i * 0.1}s`, marginTop: i === 1 ? "2rem" : "0" }}
              >
                <Image src={src} alt="Daniel Ortiz" width={400} height={500} className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
            ))}
          </div>
          <p className="text-violet-400 text-sm mt-8 italic animate-fade-in delay-500">Building the tool I wish I had from day one.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-violet-600 text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-violet-200 font-medium text-lg mb-3 animate-fade-in-up">Your best semester starts with a better plan.</p>
          <h2 className="text-3xl font-extrabold mb-4 animate-fade-in-up delay-100">Ready to try it?</h2>
          <p className="text-violet-300 mb-8 animate-fade-in-up delay-200">Join the waitlist and be first in line when PlanitPlease launches.</p>
          <div className="animate-fade-in-up delay-300">
            <Link href="/#waitlist" className="inline-block bg-white text-violet-700 font-bold px-10 py-4 hover:bg-violet-50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md text-lg shadow-sm">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
