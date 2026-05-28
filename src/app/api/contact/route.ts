import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/resend";
import { supabaseAdmin } from "@/lib/supabase";
import { allow, clientIp } from "@/lib/rateLimit";

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret || !token) return true;

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`,
  });
  const data = await res.json();
  return data.success && data.score >= 0.5;
}

export async function POST(req: NextRequest) {
  // Rate limit: 5 submissions per 15 minutes per IP
  const ip = clientIp(req);
  if (!allow(ip, "contact", 5, 15 * 60 * 1000)) {
    return NextResponse.json(
      { error: "كثير من الطلبات، يرجى الانتظار قليلاً" },
      { status: 429 }
    );
  }

  const body = await req.json();
  const { name, email, phone, service, budget, message, recaptchaToken } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "حقول مطلوبة ناقصة" }, { status: 400 });
  }

  // reCAPTCHA check
  const isHuman = await verifyRecaptcha(recaptchaToken ?? "");
  if (!isHuman) {
    return NextResponse.json({ error: "فشل التحقق من الأمان" }, { status: 403 });
  }

  // Save to Supabase (fire-and-forget)
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
