import { cn } from "@/lib/utils";

export function SplitText({
  text,
  className,
  charClassName,
  delay = 0,
  step = 34,
}: {
  text: string;
  className?: string;
  charClassName?: string;
  delay?: number;
  step?: number;
}) {
  const chars = Array.from(text);
  return (
    <span className={cn("inline-block", className)} aria-label={text}>
      {chars.map((c, i) => (
        <span
          key={`${c}-${i}`}
          aria-hidden
          className={cn("animate-char-in inline-block", charClassName)}
          style={{ animationDelay: `${delay + i * step}ms` }}
        >
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </span>
  );
}

export function WordReveal({
  text,
  className,
  delay = 0,
  step = 70,
}: {
  text: string;
  className?: string;
  delay?: number;
  step?: number;
}) {
  return (
    <span className={cn("inline-block", className)} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={`${w}-${i}`} aria-hidden className="inline-block overflow-hidden">
          <span
            className="inline-block"
            style={{
              animation: `rise-in 0.6s var(--ease-out-soft) both`,
              animationDelay: `${delay + i * step}ms`,
            }}
          >
            {w}
            {"\u00A0"}
          </span>
        </span>
      ))}
    </span>
  );
}
