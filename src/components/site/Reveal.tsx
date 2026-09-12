import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "rise" | "slide-left" | "slide-right" | "scale";

export function Reveal({
  children,
  as: Tag = "div",
  variant = "rise",
  delay = 0,
  className,
}: {
  children: ReactNode;
  as?: ElementType;
  variant?: Variant;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const checkInitial = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
        setVisible(true);
        return true;
      }
      return false;
    };

    if (checkInitial()) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -2% 0px" },
    );

    io.observe(el);
    const timeout = setTimeout(() => setVisible(true), 1200);

    return () => {
      clearTimeout(timeout);
      io.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      data-variant={variant}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
