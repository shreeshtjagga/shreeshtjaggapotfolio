import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "./motion-bits";

export function TiltCard({
  children,
  className,
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const frame = useRef(0);
  const rectRef = useRef<DOMRect | null>(null);
  const reduced = useReducedMotion();

  const onEnter = () => {
    if (reduced || !ref.current) return;
    rectRef.current = ref.current.getBoundingClientRect();
    ref.current.style.willChange = "transform";
  };

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    // Use cached rect if available to prevent forced layout thrashing
    const rect = rectRef.current || el.getBoundingClientRect();
    const px = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const py = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const rx = (0.5 - py) * max * 1.3;
      const ry = (px - 0.5) * max * 1.3;
      el.style.transform = `perspective(1000px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(4px) translateY(-3px)`;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${(px * 100).toFixed(1)}%, ${(py * 100).toFixed(1)}%, 0) translate(-50%, -50%)`;
      }
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    rectRef.current = null;
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px)";
    el.style.willChange = "auto";
  };

  return (
    <div
      ref={ref}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "surface-card group relative overflow-hidden transition-transform duration-200 ease-out hover:border-primary/45 hover:shadow-[var(--shadow-glow)]",
        className,
      )}
    >
      {/* Hardware-accelerated hover glare */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <div
          ref={glowRef}
          className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.82 0.145 190 / 14%) 0%, transparent 70%)",
            willChange: "transform",
          }}
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
