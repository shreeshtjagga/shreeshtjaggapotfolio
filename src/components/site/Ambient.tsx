export function Ambient({ tone = "aqua" }: { tone?: "aqua" | "violet" | "mixed" }) {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grain-grid opacity-70" />
      <div
        className="absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full opacity-[0.35] blur-[110px]"
        style={{
          background:
            tone === "violet"
              ? "radial-gradient(circle, oklch(0.68 0.17 295) 0%, transparent 68%)"
              : "radial-gradient(circle, oklch(0.82 0.145 190) 0%, transparent 68%)",
          animation: "blob-drift 26s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-52 -right-24 h-[42rem] w-[42rem] rounded-full opacity-30 blur-[130px]"
        style={{
          background:
            tone === "aqua"
              ? "radial-gradient(circle, oklch(0.72 0.15 240) 0%, transparent 68%)"
              : "radial-gradient(circle, oklch(0.68 0.17 295) 0%, transparent 68%)",
          animation: "blob-drift 34s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute top-1/3 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, oklch(0.6 0.13 320) 0%, transparent 70%)",
          animation: "blob-drift 42s ease-in-out infinite",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_35%,var(--background)_92%)]" />
    </div>
  );
}
