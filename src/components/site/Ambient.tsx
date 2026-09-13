import { useEffect, useRef } from "react";

export function Ambient({ tone = "aqua" }: { tone?: "aqua" | "violet" | "mixed" }) {
  const spotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Only track pointer on devices with a fine mouse pointer
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 3;
    let isRunning = false;

    const updatePosition = () => {
      // Smooth interpolation for silky 120 FPS cursor glow
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (spotRef.current) {
        spotRef.current.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      }

      if (Math.abs(targetX - currentX) > 0.5 || Math.abs(targetY - currentY) > 0.5) {
        raf = requestAnimationFrame(updatePosition);
      } else {
        isRunning = false;
      }
    };

    const handlePointer = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isRunning) {
        isRunning = true;
        raf = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointer);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden contain-strict">
      {/* 60/120 FPS hardware-accelerated cursor glow */}
      <div
        ref={spotRef}
        className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full opacity-25 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, oklch(0.82 0.145 190 / 22%) 0%, oklch(0.68 0.17 295 / 10%) 35%, transparent 65%)",
          transform: "translate3d(50vw, 30vh, 0)",
          willChange: "transform",
        }}
      />
      
      {/* Background grain grid */}
      <div className="absolute inset-0 grain-grid opacity-60" />

      {/* Optimized Top Ambient Glow Blob - Smooth CSS gradient stops with low-cost blur */}
      <div
        className="absolute -top-20 -left-12 h-[30rem] w-[30rem] sm:h-[38rem] sm:w-[38rem] rounded-full opacity-35 blur-2xl pointer-events-none"
        style={{
          background:
            tone === "violet"
              ? "radial-gradient(circle at center, oklch(0.68 0.17 295 / 65%) 0%, oklch(0.68 0.17 295 / 25%) 40%, transparent 70%)"
              : "radial-gradient(circle at center, oklch(0.82 0.145 190 / 60%) 0%, oklch(0.72 0.15 240 / 25%) 40%, transparent 70%)",
          animation: "blob-drift 18s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* Optimized Bottom Ambient Glow Blob */}
      <div
        className="absolute -bottom-28 -right-12 h-[30rem] w-[30rem] sm:h-[38rem] sm:w-[38rem] rounded-full opacity-30 blur-2xl pointer-events-none"
        style={{
          background:
            tone === "aqua"
              ? "radial-gradient(circle at center, oklch(0.72 0.15 240 / 55%) 0%, oklch(0.82 0.145 190 / 20%) 40%, transparent 70%)"
              : "radial-gradient(circle at center, oklch(0.68 0.17 295 / 55%) 0%, oklch(0.82 0.145 190 / 20%) 40%, transparent 70%)",
          animation: "blob-drift 22s ease-in-out infinite reverse",
          willChange: "transform",
        }}
      />

      {/* Vignette mask */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,var(--background)_95%)]" />
    </div>
  );
}
