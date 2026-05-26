"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        setError("كلمة المرور غير صحيحة");
      }
    } catch {
      setError("حدث خطأ، حاول مرة أخرى");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Image src="/logo.png" alt="AsiMjed" width={56} height={56} className="rounded-xl mx-auto mb-4" />
          <h1
            className="grad-text font-black text-2xl"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            لوحة التحكم
          </h1>
          <p className="text-[#8ba3c7] text-sm mt-2">AsiMjed Admin Panel</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#161b22] border border-white/5 rounded-2xl p-7 flex flex-col gap-4"
        >
          <label className="flex flex-col gap-1.5">
            <span className="text-xs text-[#8ba3c7] font-medium">كلمة المرور</span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-[#1f2937] border border-white/5 rounded-xl px-4 py-3 text-sm text-[#e6f0ff] placeholder-[#4d6080] outline-none focus:border-[#00d4aa]/50 transition-colors"
              dir="ltr"
            />
          </label>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="py-3 rounded-xl font-bold text-[#0d1117] transition-all hover:opacity-90 disabled:opacity-60"
            style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5,#7ed957)" }}
          >
            {loading ? "جاري الدخول..." : "دخول"}
          </button>
        </form>
      </div>
    </div>
  );
}
