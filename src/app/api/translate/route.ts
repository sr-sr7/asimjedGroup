import { NextRequest, NextResponse } from "next/server";

/**
 * Translates text via the unofficial Google Translate GTX endpoint.
 * Called server-side so there are no CORS issues.
 */
async function gtx(text: string): Promise<string> {
  if (!text?.trim()) return text;

  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", "auto"); // auto-detect source
  url.searchParams.set("tl", "ar");
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", text);

  const res = await fetch(url.toString(), {
    signal: AbortSignal.timeout(8000),
    headers: {
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36",
    },
  });

  if (!res.ok) throw new Error(`GTX HTTP ${res.status}`);

  // Response shape: [ [ ["translated","original",...], ... ], null, "en", ... ]
  const data = (await res.json()) as [[string, string][]][];
  const translated = data[0]
    .map((pair) => pair[0])
    .filter(Boolean)
    .join("")
    .trim();

  return translated || text;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as { texts?: string[] };
    const texts = body.texts;

    if (!Array.isArray(texts) || texts.length === 0) {
      return NextResponse.json({ translations: [] });
    }

    // Translate in parallel — cap at 60 items just in case
    const results = await Promise.allSettled(
      texts.slice(0, 60).map((t) => gtx(t))
    );

    const translations = results.map((r, i) =>
      r.status === "fulfilled" ? r.value : texts[i]
    );

    return NextResponse.json({ translations });
  } catch (err) {
    console.error("Translate API error:", err);
    return NextResponse.json({ error: "translation failed" }, { status: 500 });
  }
}
