import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

export function LoadingBar() {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Route transition / initial mount animation
  useEffect(() => {
    setLoading(true);
    setProgress(20);

    const t1 = setTimeout(() => setProgress(70), 80);
    const t2 = setTimeout(() => setProgress(95), 180);
    const t3 = setTimeout(() => {
      setProgress(100);
      const t4 = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 200);
      return () => clearTimeout(t4);
    }, 320);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname, isLoading]);

  if (!loading && progress === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[100] h-[3px] pointer-events-none overflow-hidden"
    >
      <div
        className="h-full bg-[image:var(--gradient-accent)] transition-all duration-300 ease-out shadow-[0_0_12px_2px_var(--glow)]"
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
          transitionProperty: "width, opacity",
        }}
      >
        <div className="absolute right-0 top-0 h-full w-24 bg-white/40 blur-[2px] shadow-[0_0_8px_#38bdf8]" />
      </div>
    </div>
  );
}
