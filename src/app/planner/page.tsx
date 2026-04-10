"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

function useGateUser() {
  const [gateUser, setGateUser] = useState<{ name: string; email: string } | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("planit_user");
    if (stored) setGateUser(JSON.parse(stored));
    setChecked(true);
  }, []);

  function saveUser(name: string, email: string) {
    const user = { name, email };
    localStorage.setItem("planit_user", JSON.stringify(user));
    setGateUser(user);
  }

  return { gateUser, checked, saveUser };
}

const priorityOptions = [
  { value: "better grades", label: "Better Grades" },
  { value: "networking and social life", label: "Networking" },
  { value: "rest and recovery", label: "Rest & Recovery" },
  { value: "health and fitness", label: "Health & Fitness" },
];

const typeColors: Record<string, string> = {
  class:    "bg-violet-100 border-violet-200 text-violet-800",
  study:    "bg-amber-50 border-amber-200 text-amber-800",
  break:    "bg-emerald-50 border-emerald-200 text-emerald-800",
  personal: "bg-pink-50 border-pink-200 text-pink-800",
};

type Task = { id: number; text: string; day: string };
type DayPlan = { time: string; task: string; type: string }[];
type Schedule = {
  classes: { name: string; days: string[]; time: string }[];
  dailyPlan: Record<string, DayPlan>;
  tip: string;
};

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Any day"];

export default function PlannerPage() {
  const { gateUser, checked, saveUser } = useGateUser();
  const [gateName, setGateName]   = useState("");
  const [gateEmail, setGateEmail] = useState("");
  const [gateError, setGateError] = useState("");

  function handleGateSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    const name  = gateName.trim();
    const email = gateEmail.trim();
    if (!name || !email) { setGateError("Please fill in both fields."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setGateError("Please enter a valid email."); return; }
    saveUser(name, email);
  }

  const [image, setImage]       = useState<File | null>(null);
  const [preview, setPreview]   = useState<string | null>(null);
  const [priority, setPriority] = useState("better grades");
  const [tasks, setTasks]       = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState("");
  const [taskDay, setTaskDay]   = useState("Any day");
  const [loading, setLoading]   = useState(false);
  const [schedule, setSchedule] = useState<Schedule | null>(null);
  const [error, setError]       = useState("");
  const [activeDay, setActiveDay] = useState("Monday");
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId   = useRef(1);

  function handleFile(file: File) {
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setSchedule(null);
    setError("");
  }

  function addTask() {
    const text = taskInput.trim();
    if (!text) return;
    setTasks((prev) => [...prev, { id: nextId.current++, text, day: taskDay }]);
    setTaskInput("");
    setTaskDay("Any day");
  }

  function removeTask(id: number) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!image) return;
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("priority", priority);
    if (tasks.length) {
      formData.append("tasks", JSON.stringify(tasks.map((t) => ({ text: t.text, day: t.day }))));
    }

    try {
      const res  = await fetch("/api/generate-schedule", { method: "POST", body: formData });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setSchedule(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  const planDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  function exportToCalendar() {
    if (!schedule) return;

    // Find the coming Monday
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0=Sun, 1=Mon...
    const daysUntilMonday = dayOfWeek === 0 ? 1 : (8 - dayOfWeek) % 7 || 7;
    const monday = new Date(today);
    monday.setDate(today.getDate() + daysUntilMonday);
    monday.setHours(0, 0, 0, 0);

    const dayOffsets: Record<string, number> = {
      Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4,
    };

    function parseTime(timeStr: string): { h: number; m: number } {
      const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (!match) return { h: 9, m: 0 };
      let h = parseInt(match[1]);
      const m = parseInt(match[2]);
      const period = match[3].toUpperCase();
      if (period === "PM" && h !== 12) h += 12;
      if (period === "AM" && h === 12) h = 0;
      return { h, m };
    }

    function toICSDate(base: Date, offsetDays: number, h: number, m: number): string {
      const d = new Date(base);
      d.setDate(base.getDate() + offsetDays);
      d.setHours(h, m, 0, 0);
      return d.toISOString().replace(/[-:]/g, "").split(".")[0];
    }

    const lines: string[] = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//PlanitPlease//EN",
      "CALSCALE:GREGORIAN",
    ];

    planDays.forEach((day) => {
      const offset = dayOffsets[day];
      const items = schedule.dailyPlan[day] || [];
      items.forEach((item, idx) => {
        const { h, m } = parseTime(item.time);
        const dtstart = toICSDate(monday, offset, h, m);
        const dtend   = toICSDate(monday, offset, h, m + 50); // 50-min blocks
        lines.push(
          "BEGIN:VEVENT",
          `UID:planitplease-${day}-${idx}-${Date.now()}`,
          `DTSTART:${dtstart}`,
          `DTEND:${dtend}`,
          `SUMMARY:${item.task}`,
          `CATEGORIES:${item.type.toUpperCase()}`,
          "END:VEVENT"
        );
      });
    });

    lines.push("END:VCALENDAR");

    const blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href     = url;
    a.download = "planitplease-schedule.ics";
    a.click();
    URL.revokeObjectURL(url);
  }

  if (!checked) return null;

  if (!gateUser) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <span className="inline-block bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
              Get Started
            </span>
            <h1 className="text-3xl font-extrabold text-[#1C1626] mb-2">Before we build your plan</h1>
            <p className="text-[#6B6580]">Enter your name and email to continue.</p>
          </div>
          <form onSubmit={handleGateSubmit} className="bg-white border border-[#E8E3F5] p-8 space-y-4 shadow-sm">
            <div>
              <label className="block text-sm font-semibold text-[#1C1626] mb-1.5">Full name</label>
              <input
                type="text"
                value={gateName}
                onChange={(e) => setGateName(e.target.value)}
                placeholder="Jane Smith"
                className="w-full px-4 py-2.5 border border-[#E8E3F5] bg-white text-[#1C1626] placeholder-[#B0ABC4] focus:outline-none focus:ring-2 focus:ring-violet-300 text-sm transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1C1626] mb-1.5">Email address</label>
              <input
                type="email"
                value={gateEmail}
                onChange={(e) => setGateEmail(e.target.value)}
                placeholder="jane@university.edu"
                className="w-full px-4 py-2.5 border border-[#E8E3F5] bg-white text-[#1C1626] placeholder-[#B0ABC4] focus:outline-none focus:ring-2 focus:ring-violet-300 text-sm transition"
              />
            </div>
            {gateError && <p className="text-rose-500 text-sm">{gateError}</p>}
            <button
              type="submit"
              className="w-full bg-violet-600 text-white font-bold py-3 hover:bg-violet-700 transition-all duration-200 text-sm mt-2"
            >
              Continue to Planner
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#1C1626]">
      {/* Header */}
      <section className="bg-[#F4F1FB] py-16 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="inline-block bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            AI Planner
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-[#1C1626]">
            Build your <span className="text-violet-600">perfect schedule</span>
          </h1>
          <p className="text-[#6B6580] text-lg">
            Upload your class schedule, add your tasks, and we will build your week around your priorities.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24 pt-12">
        {!schedule ? (
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* ── Upload ── */}
            <div>
              <p className="text-[#1C1626] font-semibold mb-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-violet-600 text-white text-xs font-bold mr-2">1</span>
                Upload your class schedule
              </p>
              <div
                onClick={() => inputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
                className="border-2 border-dashed border-violet-200 hover:border-violet-400 bg-white p-10 text-center cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }} />
                {preview ? (
                  <div className="relative w-full max-w-xs mx-auto">
                    <Image src={preview} alt="Schedule preview" width={300} height={400} className="rounded-xl object-contain mx-auto max-h-64" />
                    <p className="text-[#9E99B0] text-sm mt-3">Click to change photo</p>
                  </div>
                ) : (
                  <>
                    <div className="w-14 h-14 bg-violet-100 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-7 h-7 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4-4a3 3 0 014.24 0L16 16m-2-2l1.586-1.586a3 3 0 014.242 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-[#1C1626] font-semibold text-lg mb-1">Drop your schedule photo here</p>
                    <p className="text-[#9E99B0] text-sm">or click to browse</p>
                  </>
                )}
              </div>
            </div>

            {/* ── Priority ── */}
            <div>
              <p className="text-[#1C1626] font-semibold mb-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-violet-600 text-white text-xs font-bold mr-2">2</span>
                What is your top priority this semester?
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {priorityOptions.map((p) => (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => setPriority(p.value)}
                    className={`py-3 px-4 border text-sm font-medium transition-all duration-200 ${
                      priority === p.value
                        ? "border-violet-500 bg-violet-50 text-violet-700 shadow-sm"
                        : "border-[#E8E3F5] bg-white text-[#6B6580] hover:border-violet-300 hover:bg-violet-50/50"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* ── To-do list ── */}
            <div>
              <p className="text-[#1C1626] font-semibold mb-1">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-violet-600 text-white text-xs font-bold mr-2">3</span>
                Add tasks to schedule
              </p>
              <p className="text-[#9E99B0] text-sm mb-4 ml-7">Assignments, errands, workouts — anything you need to fit in. The AI will slot them into your week.</p>

              {/* Input row */}
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={taskInput}
                  onChange={(e) => setTaskInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTask(); } }}
                  placeholder="e.g. Study for Calc exam"
                  className="flex-1 px-4 py-2.5 border border-[#E8E3F5] bg-white text-[#1C1626] placeholder-[#B0ABC4] focus:outline-none focus:ring-2 focus:ring-violet-300 text-sm transition"
                />
                <select
                  value={taskDay}
                  onChange={(e) => setTaskDay(e.target.value)}
                  className="px-3 py-2.5 border border-[#E8E3F5] bg-white text-[#6B6580] text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 transition"
                >
                  {DAYS.map((d) => <option key={d}>{d}</option>)}
                </select>
                <button
                  type="button"
                  onClick={addTask}
                  disabled={!taskInput.trim()}
                  className="px-4 py-2.5 bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Add
                </button>
              </div>

              {/* Task list */}
              {tasks.length > 0 ? (
                <ul className="space-y-2">
                  {tasks.map((t) => (
                    <li
                      key={t.id}
                      className="flex items-center gap-3 bg-white border border-[#E8E3F5] px-4 py-3 group"
                    >
                      <div className="w-2 h-2 rounded-full bg-violet-400 shrink-0" />
                      <span className="flex-1 text-sm text-[#1C1626]">{t.text}</span>
                      {t.day !== "Any day" && (
                        <span className="text-[10px] font-semibold uppercase tracking-wide text-violet-600 bg-violet-50 border border-violet-100 px-2 py-0.5 rounded-full shrink-0">
                          {t.day.slice(0, 3)}
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={() => removeTask(t.id)}
                        className="text-[#B0ABC4] hover:text-rose-400 transition-colors ml-1 shrink-0"
                        aria-label="Remove task"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="border border-dashed border-[#E8E3F5] px-4 py-6 text-center">
                  <p className="text-[#B0ABC4] text-sm">No tasks yet — add something above or skip to generate.</p>
                </div>
              )}
            </div>

            {/* ── Generate ── */}
            <button
              type="submit"
              disabled={!image || loading}
              className="w-full bg-violet-600 text-white font-bold py-4 hover:bg-violet-700 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-lg shadow-sm"
            >
              {loading ? "Building your plan..." : "Generate My Schedule"}
            </button>

            {loading && (
              <div className="text-center text-[#9E99B0] text-sm animate-pulse">
                Analyzing your schedule and fitting in your tasks...
              </div>
            )}

            {error && <p className="text-rose-500 text-center text-sm">{error}</p>}
          </form>
        ) : (
          <div className="space-y-8">
            {/* Tip */}
            <div className="bg-violet-50 border border-violet-200 p-5 text-center">
              <p className="text-violet-700 font-semibold">{schedule.tip}</p>
            </div>

            {/* Classes detected */}
            <div>
              <h2 className="text-xl font-extrabold text-[#1C1626] mb-4">Classes detected</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {schedule.classes.map((c, i) => (
                  <div key={i} className="bg-white border border-[#E8E3F5] p-4 shadow-sm">
                    <p className="font-bold text-[#1C1626]">{c.name}</p>
                    <p className="text-[#9E99B0] text-sm mt-0.5">{c.days.join(", ")} · {c.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tasks included */}
            {tasks.length > 0 && (
              <div>
                <h2 className="text-xl font-extrabold text-[#1C1626] mb-4">Tasks included</h2>
                <div className="flex flex-wrap gap-2">
                  {tasks.map((t) => (
                    <span key={t.id} className="inline-flex items-center gap-1.5 bg-white border border-[#E8E3F5] rounded-full px-3 py-1.5 text-sm text-[#1C1626]">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                      {t.text}
                      {t.day !== "Any day" && <span className="text-[10px] text-violet-500 font-semibold">· {t.day.slice(0,3)}</span>}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Day tabs */}
            <div>
              <h2 className="text-xl font-extrabold text-[#1C1626] mb-4">Your weekly plan</h2>
              <div className="flex gap-2 mb-6 flex-wrap">
                {planDays.map((day) => (
                  <button
                    key={day}
                    onClick={() => setActiveDay(day)}
                    className={`px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      activeDay === day
                        ? "bg-violet-600 text-white shadow-sm"
                        : "bg-white border border-[#E8E3F5] text-[#6B6580] hover:border-violet-300"
                    }`}
                  >
                    {day.slice(0, 3)}
                  </button>
                ))}
              </div>
              <div className="space-y-2.5">
                {(schedule.dailyPlan[activeDay] || []).map((item, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 border px-4 py-3 ${typeColors[item.type] || "bg-white border-[#E8E3F5] text-[#1C1626]"}`}
                  >
                    <span className="text-xs font-mono pt-0.5 whitespace-nowrap opacity-60 w-20 shrink-0">{item.time}</span>
                    <span className="text-sm font-medium">{item.task}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={exportToCalendar}
              className="w-full bg-violet-600 text-white font-bold py-4 hover:bg-violet-700 hover:-translate-y-0.5 transition-all duration-200 text-sm shadow-sm flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Export to Calendar (.ics)
            </button>

            <button
              onClick={() => { setSchedule(null); setImage(null); setPreview(null); setTasks([]); }}
              className="w-full border border-[#E8E3F5] text-[#9E99B0] py-3 hover:border-violet-400 hover:text-violet-600 transition-all duration-200 text-sm"
            >
              Start over with a new schedule
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
