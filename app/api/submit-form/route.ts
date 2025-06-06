import { NextResponse } from "next/server";

const KIT_API_KEY = process.env.KIT_API_KEY;
const KIT_FORM_ID = "8e66cc8226";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, url } = body;

    if (!email || !url) {
      return NextResponse.json(
        { error: "Email and URL are required" },
        { status: 400 }
      );
    }

    if (!KIT_API_KEY) {
      console.error("KIT_API_KEY is not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.kit.co/v1/forms/submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${KIT_API_KEY}`,
      },
      body: JSON.stringify({
        form_id: KIT_FORM_ID,
        data: {
          email,
          url,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Kit API error:", error);
      return NextResponse.json(
        { error: "Failed to submit form" },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
