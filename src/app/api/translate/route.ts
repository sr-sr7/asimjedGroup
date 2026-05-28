import { NextRequest, NextResponse } from "next/server";
import { allow, clientIp } from "@/lib/rateLimit";

async function gtx(text: string): Promise<string> {
  if (!text?.trim()) return text;

  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", "auto");
  url.searchParams.set("tl", "ar");
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", text);

  const res = await fetch(url.toString(), {
    signal: AbortSignal.timeout(8000),
    headers: { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36" },
  });

  if (!res.ok) throw new Error(`GTX HTTP ${res.status}`);

  const data = (await res.json()) as [[string, string][]][];
  return data[0].map((p) => p[0]).filter(Boolean).join("").trim() || text;
}

export async function POST(req: NextRequest) {
  // Rate limit: 10 requests per minute per IP
  const ip = clientIp(req);
  if (!allow(ip, "translate", 10, 60 * 1000)) {
    return NextResponse.json({ error: "rate limit exceeded" }, { status: 429 });
  }

  try {
    const body = await req.json() as { texts?: string[] };
    const texts = body.texts;

    if (!Array.isArray(texts) || texts.length === 0) {
      return NextResponse.json({ translations: [] });
    }

    const results = await Promise.allSettled(
      texts.slice(0, 60).map((t) => gtx(t))
    );

    return NextResponse.json({
      translations: results.map((r, i) =>
        r.status === "fulfilled" ? r.value : texts[i]
      ),
    });
  } catch (err) {
    console.error("Translate API error:", err);
    return NextResponse.json({ error: "translation failed" }, { status: 500 });
  }
}
