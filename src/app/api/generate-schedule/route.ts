import { NextRequest, NextResponse } from "next/server";

const MODELS = [
  "minimax/minimax-m2.5:free",
  "google/gemma-4-26b-a4b-it:free",
  "openai/gpt-oss-120b:free",
  "z-ai/glm-4.5-air:free",
  "openai/gpt-oss-20b:free",
  "nousresearch/hermes-3-llama-3.1-405b:free",
];

async function tryModel(
  model: string,
  prompt: string,
  base64: string,
  mimeType: string
): Promise<string> {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://planitplease.com",
      "X-Title": "PlanitPlease",
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            {
              type: "image_url",
              image_url: { url: `data:${mimeType};base64,${base64}` },
            },
          ],
        },
      ],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`${model} failed (${res.status}): ${err}`);
  }

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) throw new Error(`${model} returned empty content`);
  return content;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File;
    const priority = formData.get("priority") as string;
    const tasksRaw = formData.get("tasks") as string | null;
    const tasks: { text: string; day: string }[] = tasksRaw ? JSON.parse(tasksRaw) : [];

    if (!file) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const base64 = Buffer.from(bytes).toString("base64");

    const prompt = `You are a college schedule planner. Look at this class schedule image and generate a structured weekly plan.

The student's top priority is: ${priority || "balanced academics"}.
${tasks.length > 0 ? `\nThe student also has these tasks that must be scheduled into the week:\n${tasks.map((t) => `- "${t.text}"${t.day !== "Any day" ? ` (on ${t.day})` : ""}`).join("\n")}\nMake sure each of these tasks appears in the dailyPlan on the specified day (or any suitable day if unspecified).\n` : ""}
Return a JSON object in this exact format:
{
  "classes": [
    { "name": "Class Name", "days": ["Mon", "Wed"], "time": "9:00 AM - 10:15 AM" }
  ],
  "dailyPlan": {
    "Monday": [
      { "time": "8:00 AM", "task": "Task description", "type": "study|class|break|personal" }
    ],
    "Tuesday": [],
    "Wednesday": [],
    "Thursday": [],
    "Friday": []
  },
  "tip": "One encouraging tip for the student based on their schedule"
}

Fill in realistic study blocks, breaks, and personal time around the classes. Keep it practical for a college student. Return only valid JSON, no markdown code blocks.`;

    let lastError = "";
    for (const model of MODELS) {
      try {
        console.log(`Trying model: ${model}`);
        const text = await tryModel(model, prompt, base64, file.type);
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("No JSON in response");
        const schedule = JSON.parse(jsonMatch[0]);
        console.log(`Success with model: ${model}`);
        return NextResponse.json(schedule);
      } catch (err) {
        lastError = err instanceof Error ? err.message : String(err);
        console.error(`Model ${model} failed:`, lastError);
      }
    }

    return NextResponse.json(
      { error: `All models failed. Last error: ${lastError}` },
      { status: 500 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Route error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
