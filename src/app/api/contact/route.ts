import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/resend";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, service, budget, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "حقول مطلوبة ناقصة" }, { status: 400 });
  }

  // Save to Supabase (non-blocking)
  supabaseAdmin.from("contact_requests").insert({
    name,
    email,
    service: service || "",
    message: `${budget ? `الميزانية: ${budget}\n` : ""}${phone ? `الجوال: ${phone}\n` : ""}${message}`,
    status: "new",
  }).then(() => {});

  // Send email via Resend
  if (process.env.RESEND_API_KEY) {
    try {
      await sendContactEmail({ name, email, service: service || "", message });
    } catch (err) {
      console.error("Email send failed:", err);
    }
  }

  return NextResponse.json({ success: true });
}
