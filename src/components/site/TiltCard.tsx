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
  const frame = useRef(0);
  const reduced = useReducedMotion();

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.transition = "transform 0.08s ease-out, box-shadow 0.3s ease, border-color 0.3s ease";
      el.style.transform = `perspective(1000px) rotateX(${(0.5 - py) * max * 1.4}deg) rotateY(${(px - 0.5) * max * 1.4}deg) translateZ(4px) translateY(-4px)`;
      el.style.setProperty("--mx", `${px * 100}%`);
      el.style.setProperty("--my", `${py * 100}%`);
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease, border-color 0.4s ease";
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        "surface-card group relative overflow-hidden hover:border-primary/45 hover:shadow-[var(--shadow-glow)]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), oklch(0.82 0.145 190 / 12%), transparent 65%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
