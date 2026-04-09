"use client";
import { useState, useRef } from "react";
import Image from "next/image";

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
                className="border-2 border-dashed border-violet-200 hover:border-violet-400 bg-white rounded-2xl p-10 text-center cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => { if (e.target.files?.[0]) handleFile(e.target.files[0]); }} />
                {preview ? (
                  <div className="relative w-full max-w-xs mx-auto">
                    <Image src={preview} alt="Schedule preview" width={300} height={400} className="rounded-xl object-contain mx-auto max-h-64" />
                    <p className="text-[#9E99B0] text-sm mt-3">Click to change photo</p>
                  </div>
                ) : (
                  <>
                    <div className="w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
                    className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all duration-200 ${
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
                  className="flex-1 px-4 py-2.5 rounded-xl border border-[#E8E3F5] bg-white text-[#1C1626] placeholder-[#B0ABC4] focus:outline-none focus:ring-2 focus:ring-violet-300 text-sm transition"
                />
                <select
                  value={taskDay}
                  onChange={(e) => setTaskDay(e.target.value)}
                  className="px-3 py-2.5 rounded-xl border border-[#E8E3F5] bg-white text-[#6B6580] text-sm focus:outline-none focus:ring-2 focus:ring-violet-300 transition"
                >
                  {DAYS.map((d) => <option key={d}>{d}</option>)}
                </select>
                <button
                  type="button"
                  onClick={addTask}
                  disabled={!taskInput.trim()}
                  className="px-4 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-xl hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
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
                      className="flex items-center gap-3 bg-white border border-[#E8E3F5] rounded-xl px-4 py-3 group"
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
                <div className="border border-dashed border-[#E8E3F5] rounded-xl px-4 py-6 text-center">
                  <p className="text-[#B0ABC4] text-sm">No tasks yet — add something above or skip to generate.</p>
                </div>
              )}
            </div>

            {/* ── Generate ── */}
            <button
              type="submit"
              disabled={!image || loading}
              className="w-full bg-violet-600 text-white font-bold py-4 rounded-xl hover:bg-violet-700 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-lg shadow-sm"
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
            <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5 text-center">
              <p className="text-violet-700 font-semibold">{schedule.tip}</p>
            </div>

            {/* Classes detected */}
            <div>
              <h2 className="text-xl font-extrabold text-[#1C1626] mb-4">Classes detected</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {schedule.classes.map((c, i) => (
                  <div key={i} className="bg-white border border-[#E8E3F5] rounded-xl p-4 shadow-sm">
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
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
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
                    className={`flex gap-4 border rounded-xl px-4 py-3 ${typeColors[item.type] || "bg-white border-[#E8E3F5] text-[#1C1626]"}`}
                  >
                    <span className="text-xs font-mono pt-0.5 whitespace-nowrap opacity-60 w-20 shrink-0">{item.time}</span>
                    <span className="text-sm font-medium">{item.task}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => { setSchedule(null); setImage(null); setPreview(null); setTasks([]); }}
              className="w-full border border-[#E8E3F5] text-[#9E99B0] py-3 rounded-xl hover:border-violet-400 hover:text-violet-600 transition-all duration-200 text-sm"
            >
              Start over with a new schedule
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
