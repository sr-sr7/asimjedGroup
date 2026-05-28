import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AsiMjed – مجموعة تطوير المواقع والتطبيقات";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d1117",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background glow blobs */}
        <div style={{
          position: "absolute", top: "-120px", right: "-120px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,170,0.15) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", bottom: "-100px", left: "-100px",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(58,123,213,0.15) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", top: "40%", left: "30%",
          width: "300px", height: "300px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(126,217,87,0.08) 0%, transparent 70%)",
        }} />

        {/* Grid lines overlay */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Top accent line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "4px",
          background: "linear-gradient(90deg, #00d4aa, #3a7bd5, #7ed957)",
        }} />

        {/* Content */}
        <div style={{
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: "24px",
          padding: "0 80px", position: "relative", zIndex: 1,
          textAlign: "center",
        }}>
          {/* Brand name */}
          <div style={{
            fontSize: "88px", fontWeight: 900, letterSpacing: "-2px",
            background: "linear-gradient(135deg, #00d4aa, #3a7bd5, #7ed957)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: 1,
          }}>
            AsiMjed
          </div>

          {/* Arabic tagline */}
          <div style={{
            fontSize: "32px", fontWeight: 700, color: "#e6f0ff",
            direction: "rtl",
          }}>
            مجموعة تطوير المواقع والتطبيقات
          </div>

          {/* Services pills */}
          <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
            {["تصميم مواقع", "تطوير تطبيقات", "متاجر إلكترونية", "تحسين SEO"].map((s) => (
              <div key={s} style={{
                padding: "8px 20px", borderRadius: "100px",
                border: "1px solid rgba(0,212,170,0.3)",
                background: "rgba(0,212,170,0.08)",
                color: "#00d4aa", fontSize: "18px", fontWeight: 600,
                direction: "rtl",
              }}>
                {s}
              </div>
            ))}
          </div>

          {/* Domain */}
          <div style={{
            marginTop: "8px", color: "#8ba3c7", fontSize: "22px",
            letterSpacing: "2px",
          }}>
            www.asimjed.com
          </div>
        </div>

        {/* Bottom accent line */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "3px",
          background: "linear-gradient(90deg, #7ed957, #3a7bd5, #00d4aa)",
        }} />
      </div>
    ),
    { ...size }
  );
}
