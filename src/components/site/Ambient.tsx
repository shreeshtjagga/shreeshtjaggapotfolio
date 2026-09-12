import { useEffect, useState } from "react";

export function Ambient({ tone = "aqua" }: { tone?: "aqua" | "violet" | "mixed" }) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const handlePointer = (e: PointerEvent) => {
      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);
      setMousePos({ x, y });
    };
    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointer);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Dynamic interactive cursor ambient spotlight */}
      <div
        className="absolute -inset-40 opacity-30 transition-all duration-700 ease-out blur-[120px]"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, oklch(0.82 0.145 190 / 22%), oklch(0.68 0.17 295 / 15%), transparent 70%)`,
        }}
      />
      <div className="absolute inset-0 grain-grid opacity-80" />
      <div
        className="absolute -top-32 -left-20 h-[36rem] w-[36rem] sm:h-[44rem] sm:w-[44rem] rounded-full opacity-45 blur-[100px]"
        style={{
          background:
            tone === "violet"
              ? "radial-gradient(circle, oklch(0.68 0.17 295) 0%, transparent 68%)"
              : "radial-gradient(circle, oklch(0.82 0.145 190) 0%, transparent 68%)",
          animation: "blob-drift 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-40 -right-20 h-[38rem] w-[38rem] sm:h-[48rem] sm:w-[48rem] rounded-full opacity-40 blur-[110px]"
        style={{
          background:
            tone === "aqua"
              ? "radial-gradient(circle, oklch(0.72 0.15 240) 0%, transparent 68%)"
              : "radial-gradient(circle, oklch(0.68 0.17 295) 0%, transparent 68%)",
          animation: "blob-drift 18s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute top-1/3 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full opacity-30 blur-[100px]"
        style={{
          background: "radial-gradient(circle, oklch(0.65 0.16 310) 0%, transparent 70%)",
          animation: "blob-drift 22s ease-in-out infinite",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_25%,var(--background)_95%)]" />
    </div>
  );
}
