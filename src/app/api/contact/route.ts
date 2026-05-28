import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/resend";
import { supabaseAdmin } from "@/lib/supabase";

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret || !token) return true; // تجاوز التحقق لو المفتاح غير موجود

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `secret=${secret}&response=${token}`,
  });
  const data = await res.json();
  // score أكبر من 0.5 = إنسان حقيقي
  return data.success && data.score >= 0.5;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, service, budget, message, recaptchaToken } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "حقول مطلوبة ناقصة" }, { status: 400 });
  }

  // التحقق من reCAPTCHA
  const isHuman = await verifyRecaptcha(recaptchaToken ?? "");
  if (!isHuman) {
    return NextResponse.json({ error: "فشل التحقق من الأمان" }, { status: 403 });
  }

  // حفظ في Supabase
  supabaseAdmin.from("contact_requests").insert({
    name,
    email,
    service: service || "",
    message: `${budget ? `الميزانية: ${budget}\n` : ""}${phone ? `الجوال: ${phone}\n` : ""}${message}`,
    status: "new",
  }).then(() => {});

  // إرسال إيميل عبر Resend
  if (process.env.RESEND_API_KEY) {
    try {
      await sendContactEmail({ name, email, service: service || "", message });
    } catch (err) {
      console.error("Email send failed:", err);
    }
  }

  return NextResponse.json({ success: true });
}
