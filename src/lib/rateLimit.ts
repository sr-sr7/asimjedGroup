/**
 * In-memory rate limiter.
 * Works per serverless instance — sufficient for a portfolio site.
 */
const store = new Map<string, { count: number; resetAt: number }>();

// Periodic cleanup to avoid memory leaks
let ops = 0;
function sweep() {
  if (++ops % 200 !== 0) return;
  const now = Date.now();
  for (const [k, v] of store) if (now > v.resetAt) store.delete(k);
}

/**
 * Returns true  → request is allowed
 * Returns false → rate limit exceeded
 *
 * @param ip       client IP
 * @param key      route identifier  e.g. "contact" | "translate" | "admin"
 * @param limit    max requests per window
 * @param windowMs window length in milliseconds
 */
export function allow(ip: string, key: string, limit: number, windowMs: number): boolean {
  sweep();
  const now = Date.now();
  const id  = `${key}:${ip}`;
  const entry = store.get(id);

  if (!entry || now > entry.resetAt) {
    store.set(id, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (entry.count >= limit) return false;
  entry.count++;
  return true;
}

/** Extract real client IP from Vercel / Nginx forwarded headers */
export function clientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}
