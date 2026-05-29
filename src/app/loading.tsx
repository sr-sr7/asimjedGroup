export default function Loading() {
  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-50"
      style={{ background: "#0d1117" }}
    >
      {/* Spinning gradient ring */}
      <div className="relative w-16 h-16 mb-6">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, #00d4aa, #3a7bd5, #7ed957, #00d4aa)",
            animation: "spin 1.2s linear infinite",
          }}
        />
        <div
          className="absolute inset-1 rounded-full"
          style={{ background: "#0d1117" }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            fontFamily: "var(--font-orbitron), sans-serif",
            fontSize: "18px",
            fontWeight: 900,
            background: "linear-gradient(135deg,#00d4aa,#3a7bd5)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          A
        </div>
      </div>

      <p
        className="text-[#8ba3c7] text-sm tracking-widest"
        style={{ animation: "pulse 1.5s ease-in-out infinite" }}
      >
        جارٍ التحميل...
      </p>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
