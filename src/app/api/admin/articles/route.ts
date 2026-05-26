import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("articles")
    .select("id, title, slug, category, published, created_at")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json([], { status: 200 });
  return NextResponse.json(data);
}

export async function PATCH(req: NextRequest) {
  const { id, published } = await req.json();
  const { error } = await supabaseAdmin.from("articles").update({ published }).eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });
  const { error } = await supabaseAdmin.from("articles").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
