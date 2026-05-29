"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard, FileText, Briefcase, Mail,
  LogOut, Plus, Trash2, Eye, EyeOff, RefreshCw
} from "lucide-react";

type Tab = "overview" | "articles" | "projects" | "requests";

type Request = { id: string; name: string; email: string; service: string; message: string; status: string; created_at: string };
type Article = { id: string; title: string; slug: string; category: string; published: boolean; created_at: string };
type Project = { id: string; title: string; category: string; tags: string[]; color: string; created_at: string };

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>("overview");
  const [requests, setRequests] = useState<Request[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const [rRes, aRes, pRes] = await Promise.all([
        fetch("/api/admin/requests"),
        fetch("/api/admin/articles"),
        fetch("/api/admin/projects"),
      ]);
      if (rRes.ok) setRequests(await rRes.json());
      if (aRes.ok) setArticles(await aRes.json());
      if (pRes.ok) setProjects(await pRes.json());
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchAll(); }, [fetchAll]);

  const logout = async () => {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push("/admin/login");
  };

  const deleteRequest = async (id: string) => {
    await fetch(`/api/admin/requests?id=${id}`, { method: "DELETE" });
    setRequests((prev) => prev.filter((r) => r.id !== id));
  };

  const toggleArticle = async (id: string, published: boolean) => {
    await fetch("/api/admin/articles", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, published: !published }),
    });
    setArticles((prev) => prev.map((a) => a.id === id ? { ...a, published: !published } : a));
  };

  const deleteArticle = async (id: string) => {
    await fetch(`/api/admin/articles?id=${id}`, { method: "DELETE" });
    setArticles((prev) => prev.filter((a) => a.id !== id));
  };

  const tabs: { key: Tab; label: string; icon: React.ElementType; count?: number }[] = [
    { key: "overview", label: "نظرة عامة", icon: LayoutDashboard },
    { key: "requests", label: "الطلبات", icon: Mail, count: requests.filter((r) => r.status === "new").length },
    { key: "articles", label: "المقالات", icon: FileText, count: articles.length },
    { key: "projects", label: "الأعمال", icon: Briefcase, count: projects.length },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] flex">
      {/* Sidebar */}
      <aside className="w-56 border-l border-white/5 bg-[#161b22] flex flex-col py-6 px-4 fixed h-full">
        <div className="flex items-center gap-2 mb-8 px-2">
          <Image src="/logo.png" alt="AsiMjed" width={32} height={32} className="rounded-lg" />
          <span className="font-black text-sm grad-text" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>Admin</span>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          {tabs.map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-right w-full ${
                  tab === t.key
                    ? "text-[#0d1117]"
                    : "text-[#8ba3c7] hover:text-[#00d4aa] hover:bg-white/5"
                }`}
                style={tab === t.key ? { background: "linear-gradient(135deg,#00d4aa,#3a7bd5)" } : {}}
              >
                <Icon size={16} />
                {t.label}
                {t.count !== undefined && t.count > 0 && (
                  <span className={`mr-auto text-xs px-1.5 py-0.5 rounded-full font-bold ${tab === t.key ? "bg-white/20 text-[#0d1117]" : "bg-[#00d4aa]/20 text-[#00d4aa]"}`}>
                    {t.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <button
          onClick={logout}
          className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm text-[#8ba3c7] hover:text-red-400 hover:bg-red-400/5 transition-all"
        >
          <LogOut size={16} />
          تسجيل الخروج
        </button>
      </aside>

      {/* Main */}
      <main className="mr-56 flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-[#e6f0ff] font-black text-2xl">
            {tabs.find((t) => t.key === tab)?.label}
          </h1>
          <button
            onClick={fetchAll}
            className="flex items-center gap-2 text-sm text-[#8ba3c7] hover:text-[#00d4aa] transition-colors"
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            تحديث
          </button>
        </div>

        {/* Overview */}
        {tab === "overview" && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { label: "طلبات جديدة", value: requests.filter((r) => r.status === "new").length, color: "#00d4aa" },
              { label: "إجمالي الطلبات", value: requests.length, color: "#3a7bd5" },
              { label: "مقالات منشورة", value: articles.filter((a) => a.published).length, color: "#7ed957" },
              { label: "إجمالي المقالات", value: articles.length, color: "#00d4aa" },
              { label: "مشاريع في الأعمال", value: projects.length, color: "#3a7bd5" },
              { label: "مقالات مسودة", value: articles.filter((a) => !a.published).length, color: "#7ed957" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#161b22] border border-white/5 rounded-2xl p-5">
                <p className="text-[#8ba3c7] text-xs mb-2">{stat.label}</p>
                <p className="font-black text-3xl" style={{ color: stat.color }}>{stat.value}</p>
              </div>
            ))}
          </div>
        )}

        {/* Requests */}
        {tab === "requests" && (
          <div className="space-y-3">
            {requests.length === 0 && !loading && (
              <p className="text-[#4d6080] text-center py-16">لا توجد طلبات بعد</p>
            )}
            {requests.map((r) => (
              <div key={r.id} className="bg-[#161b22] border border-white/5 rounded-xl p-5 flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#e6f0ff] font-bold text-sm">{r.name}</span>
                    {r.status === "new" && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00d4aa]/20 text-[#00d4aa] font-bold">جديد</span>
                    )}
                  </div>
                  <p className="text-[#8ba3c7] text-xs mb-1">{r.email} {r.service && `· ${r.service}`}</p>
                  <p className="text-[#8ba3c7] text-sm leading-relaxed">{r.message}</p>
                  <p className="text-[#4d6080] text-xs mt-2">{new Date(r.created_at).toLocaleDateString("ar-SA")}</p>
                </div>
                <button
                  onClick={() => deleteRequest(r.id)}
                  className="text-red-400/60 hover:text-red-400 transition-colors self-start"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Articles */}
        {tab === "articles" && (
          <div className="space-y-3">
            <div className="flex justify-end mb-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-[#0d1117]"
                style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5)" }}>
                <Plus size={14} />
                مقال جديد
              </button>
            </div>
            {articles.length === 0 && !loading && (
              <p className="text-[#4d6080] text-center py-16">لا توجد مقالات بعد</p>
            )}
            {articles.map((a) => (
              <div key={a.id} className="bg-[#161b22] border border-white/5 rounded-xl p-5 flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-[#e6f0ff] font-bold text-sm">{a.title}</p>
                  <p className="text-[#8ba3c7] text-xs mt-1">{a.category} · {new Date(a.created_at).toLocaleDateString("ar-SA")}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${a.published ? "bg-[#7ed957]/20 text-[#7ed957]" : "bg-white/5 text-[#4d6080]"}`}>
                    {a.published ? "منشور" : "مسودة"}
                  </span>
                  <button onClick={() => toggleArticle(a.id, a.published)} className="text-[#8ba3c7] hover:text-[#00d4aa] transition-colors">
                    {a.published ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                  <button onClick={() => deleteArticle(a.id)} className="text-red-400/60 hover:text-red-400 transition-colors">
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {tab === "projects" && (
          <div className="space-y-3">
            <div className="flex justify-end mb-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-[#0d1117]"
                style={{ background: "linear-gradient(135deg,#00d4aa,#3a7bd5)" }}>
                <Plus size={14} />
                مشروع جديد
              </button>
            </div>
            {projects.length === 0 && !loading && (
              <p className="text-[#4d6080] text-center py-16">لا توجد مشاريع بعد</p>
            )}
            {projects.map((p) => (
              <div key={p.id} className="bg-[#161b22] border border-white/5 rounded-xl p-5 flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg flex-shrink-0" style={{ background: `${p.color}22` }} />
                <div className="flex-1">
                  <p className="text-[#e6f0ff] font-bold text-sm">{p.title}</p>
                  <p className="text-[#8ba3c7] text-xs mt-1">{p.category} · {p.tags?.join(", ")}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
