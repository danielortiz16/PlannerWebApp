"use client";
import { useState, useRef } from "react";
import Image from "next/image";

const priorities = [
  { value: "better grades", label: "🎓 Better Grades" },
  { value: "networking and social life", label: "🤝 Networking" },
  { value: "rest and recovery", label: "😴 Rest & Recovery" },
  { value: "health and fitness", label: "💪 Health & Fitness" },
];

const typeColors: Record<string, string> = {
  class: "bg-indigo-900 border-indigo-600 text-indigo-200",
  study: "bg-yellow-900/40 border-yellow-600 text-yellow-200",
  break: "bg-emerald-900/40 border-emerald-600 text-emerald-200",
  personal: "bg-purple-900/40 border-purple-600 text-purple-200",
};

type DayPlan = { time: string; task: string; type: string }[];
type Schedule = {
  classes: { name: string; days: string[]; time: string }[];
  dailyPlan: Record<string, DayPlan>;
  tip: string;
};

export default function PlannerPage() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [priority, setPriority] = useState("better grades");
  const [loading, setLoading] = useState(false);
  const [schedule, setSchedule] = useState<Schedule | null>(null);
  const [error, setError] = useState("");
  const [activeDay, setActiveDay] = useState("Monday");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(file: File) {
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setSchedule(null);
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!image) return;
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("priority", priority);

    try {
      const res = await fetch("/api/generate-schedule", { method: "POST", body: formData });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setSchedule(data);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white">
      {/* Header */}
      <section className="relative bg-[#0a0a1a] py-16 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e1b4b_0%,_#0a0a1a_70%)]" />
        <div className="relative max-w-3xl mx-auto px-6">
          <span className="inline-block bg-indigo-900/60 border border-indigo-700 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            🚀 AI Planner
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Build your <span className="text-yellow-300">perfect schedule</span>
          </h1>
          <p className="text-slate-400 text-lg">Upload a photo of your class schedule and we will build your week around your priorities.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24">
        {!schedule ? (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Upload area */}
            <div
              onClick={() => inputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
              className="border-2 border-dashed border-indigo-700 hover:border-yellow-400 rounded-2xl p-10 text-center cursor-pointer transition-colors"
            >
              <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }} />
              {preview ? (
                <div className="relative w-full max-w-xs mx-auto">
                  <Image src={preview} alt="Schedule preview" width={300} height={400} className="rounded-xl object-contain mx-auto max-h-64" />
                  <p className="text-slate-400 text-sm mt-3">Click to change photo</p>
                </div>
              ) : (
                <>
                  <div className="text-5xl mb-4">📸</div>
                  <p className="text-white font-semibold text-lg mb-1">Drop your schedule photo here</p>
                  <p className="text-slate-500 text-sm">or click to browse</p>
                </>
              )}
            </div>

            {/* Priority picker */}
            <div>
              <p className="text-white font-semibold mb-3">What is your top priority this semester?</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {priorities.map((p) => (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => setPriority(p.value)}
                    className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${priority === p.value ? "border-yellow-400 bg-yellow-400/10 text-yellow-300" : "border-indigo-800 bg-indigo-950 text-slate-400 hover:border-indigo-500"}`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={!image || loading}
              className="w-full bg-yellow-400 text-gray-900 font-bold py-4 rounded-xl hover:bg-yellow-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-lg"
            >
              {loading ? "Building your plan..." : "Generate My Schedule"}
            </button>

            {loading && (
              <div className="text-center text-slate-400 text-sm animate-pulse">
                🌌 Analyzing your schedule and building your personalized plan...
              </div>
            )}

            {error && <p className="text-red-400 text-center text-sm">{error}</p>}
          </form>
        ) : (
          <div className="space-y-8">
            {/* Tip */}
            <div className="bg-indigo-950 border border-indigo-700 rounded-2xl p-5 text-center">
              <p className="text-yellow-300 font-semibold">💡 {schedule.tip}</p>
            </div>

            {/* Classes detected */}
            <div>
              <h2 className="text-xl font-extrabold text-white mb-4">Classes detected</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {schedule.classes.map((c, i) => (
                  <div key={i} className="bg-indigo-950 border border-indigo-800 rounded-xl p-4">
                    <p className="font-bold text-white">{c.name}</p>
                    <p className="text-slate-400 text-sm">{c.days.join(", ")} • {c.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Day tabs */}
            <div>
              <h2 className="text-xl font-extrabold text-white mb-4">Your weekly plan</h2>
              <div className="flex gap-2 mb-6 flex-wrap">
                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => setActiveDay(day)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${activeDay === day ? "bg-yellow-400 text-gray-900" : "bg-indigo-950 border border-indigo-800 text-slate-400 hover:border-indigo-500"}`}
                  >
                    {day.slice(0, 3)}
                  </button>
                ))}
              </div>
              <div className="space-y-3">
                {(schedule.dailyPlan[activeDay] || []).map((item, i) => (
                  <div key={i} className={`flex gap-4 border rounded-xl px-4 py-3 ${typeColors[item.type] || "bg-slate-900 border-slate-700 text-slate-300"}`}>
                    <span className="text-xs font-mono pt-0.5 whitespace-nowrap opacity-70">{item.time}</span>
                    <span className="text-sm">{item.task}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => { setSchedule(null); setImage(null); setPreview(null); }}
              className="w-full border border-indigo-700 text-slate-400 py-3 rounded-xl hover:border-yellow-400 hover:text-yellow-300 transition-colors text-sm"
            >
              Start over with a new schedule
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
