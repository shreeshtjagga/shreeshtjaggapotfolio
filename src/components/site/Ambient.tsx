import { useEffect, useRef } from "react";

export function Ambient({ tone = "aqua" }: { tone?: "aqua" | "violet" | "mixed" }) {
  const spotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const handlePointer = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (spotRef.current) {
          const x = e.clientX;
          const y = e.clientY;
          spotRef.current.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
        }
      });
    };
    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointer);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden contain-strict">
      {/* 60/120 FPS hardware-accelerated cursor glow (zero react re-renders) */}
      <div
        ref={spotRef}
        className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full opacity-20 transition-opacity duration-300 will-change-transform"
        style={{
          background: "radial-gradient(circle, oklch(0.82 0.145 190 / 25%) 0%, oklch(0.68 0.17 295 / 15%) 40%, transparent 70%)",
          transform: "translate3d(50vw, 30vh, 0)",
        }}
      />
      <div className="absolute inset-0 grain-grid opacity-70" />
      <div
        className="absolute -top-24 -left-16 h-[32rem] w-[32rem] sm:h-[40rem] sm:w-[40rem] rounded-full opacity-35 blur-[75px] will-change-transform"
        style={{
          background:
            tone === "violet"
              ? "radial-gradient(circle, oklch(0.68 0.17 295) 0%, transparent 68%)"
              : "radial-gradient(circle, oklch(0.82 0.145 190) 0%, transparent 68%)",
          animation: "blob-drift 16s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -bottom-32 -right-16 h-[34rem] w-[34rem] sm:h-[42rem] sm:w-[42rem] rounded-full opacity-30 blur-[80px] will-change-transform"
        style={{
          background:
            tone === "aqua"
              ? "radial-gradient(circle, oklch(0.72 0.15 240) 0%, transparent 68%)"
              : "radial-gradient(circle, oklch(0.68 0.17 295) 0%, transparent 68%)",
          animation: "blob-drift 20s ease-in-out infinite reverse",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,var(--background)_95%)]" />
    </div>
  );
}
