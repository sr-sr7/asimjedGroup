import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, service, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "حقول مطلوبة ناقصة" }, { status: 400 });
  }

  // TODO: connect to email service (Resend, SendGrid, etc.)
  console.log("New contact request:", { name, email, service, message });

  return NextResponse.json({ success: true });
}
