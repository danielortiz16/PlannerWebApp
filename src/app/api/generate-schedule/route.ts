import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File;
    const priority = formData.get("priority") as string;

    if (!file) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const base64 = Buffer.from(bytes).toString("base64");

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `You are a college schedule planner. Look at this class schedule image and generate a structured weekly plan.

The student's top priority is: ${priority || "balanced academics"}.

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

Fill in realistic study blocks, breaks, and personal time around the classes. Keep it practical for a college student. Return only valid JSON.`;

    const result = await model.generateContent([
      prompt,
      { inlineData: { data: base64, mimeType: file.type } },
    ]);

    const text = result.response.text();
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json({ error: "Could not parse schedule" }, { status: 500 });
    }

    const schedule = JSON.parse(jsonMatch[0]);
    return NextResponse.json(schedule);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Gemini error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
