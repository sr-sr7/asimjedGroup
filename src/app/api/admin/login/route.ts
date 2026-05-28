import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { allow, clientIp } from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  // Brute-force protection: 5 attempts per 15 minutes per IP
  const ip = clientIp(req);
  if (!allow(ip, "admin-login", 5, 15 * 60 * 1000)) {
    return NextResponse.json(
      { error: "تم تجاوز الحد المسموح، حاول بعد 15 دقيقة" },
      { status: 429 }
    );
  }

  const { password } = await req.json();
  const adminPassword = process.env.ADMIN_PASSWORD;
  const adminSecret   = process.env.ADMIN_SECRET;

  if (!adminPassword || !adminSecret) {
    return NextResponse.json({ error: "Admin not configured" }, { status: 500 });
  }

  if (password !== adminPassword) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set("admin_token", adminSecret, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  return NextResponse.json({ success: true });
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_token");
  return NextResponse.json({ success: true });
}
