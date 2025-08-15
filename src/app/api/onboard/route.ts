import { NextRequest, NextResponse } from "next/server";
import { OnboardSchema, OnboardInput } from "@/app/lib/schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data: OnboardInput = OnboardSchema.parse(body);
    console.log("Onboarding data received:", data);
    return NextResponse.json({ message: "Form submitted successfully", data });
  } catch (err: any) {
    console.error("Error in /api/onboard:", err);
    return NextResponse.json(
      { error: err?.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
