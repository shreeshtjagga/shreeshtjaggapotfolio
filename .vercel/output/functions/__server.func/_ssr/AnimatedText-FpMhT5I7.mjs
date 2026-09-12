import { i as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as cn } from "./router-BHLuj73U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AnimatedText-FpMhT5I7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Ambient({ tone = "aqua" }) {
	const spotRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let raf = 0;
		const handlePointer = (e) => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden contain-strict",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: spotRef,
				className: "absolute top-0 left-0 h-[600px] w-[600px] rounded-full opacity-20 transition-opacity duration-300 will-change-transform",
				style: {
					background: "radial-gradient(circle, oklch(0.82 0.145 190 / 25%) 0%, oklch(0.68 0.17 295 / 15%) 40%, transparent 70%)",
					transform: "translate3d(50vw, 30vh, 0)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 grain-grid opacity-70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-24 -left-16 h-[32rem] w-[32rem] sm:h-[40rem] sm:w-[40rem] rounded-full opacity-35 blur-[75px] will-change-transform",
				style: {
					background: tone === "violet" ? "radial-gradient(circle, oklch(0.68 0.17 295) 0%, transparent 68%)" : "radial-gradient(circle, oklch(0.82 0.145 190) 0%, transparent 68%)",
					animation: "blob-drift 16s ease-in-out infinite"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -bottom-32 -right-16 h-[34rem] w-[34rem] sm:h-[42rem] sm:w-[42rem] rounded-full opacity-30 blur-[80px] will-change-transform",
				style: {
					background: tone === "aqua" ? "radial-gradient(circle, oklch(0.72 0.15 240) 0%, transparent 68%)" : "radial-gradient(circle, oklch(0.68 0.17 295) 0%, transparent 68%)",
					animation: "blob-drift 20s ease-in-out infinite reverse"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,var(--background)_95%)]" })
		]
	});
}
function SplitText({ text, className, charClassName, delay = 0, step = 34 }) {
	const chars = Array.from(text);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-block", className),
		"aria-label": text,
		children: chars.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: cn("animate-char-in inline-block", charClassName),
			style: { animationDelay: `${delay + i * step}ms` },
			children: c === " " ? "\xA0" : c
		}, `${c}-${i}`))
	});
}
function WordReveal({ text, className, delay = 0, step = 70 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-block", className),
		"aria-label": text,
		children: text.split(" ").map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "inline-block overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-block",
				style: {
					animation: `rise-in 0.6s var(--ease-out-soft) both`,
					animationDelay: `${delay + i * step}ms`
				},
				children: [w, "\xA0"]
			})
		}, `${w}-${i}`))
	});
}
//#endregion
export { SplitText as n, WordReveal as r, Ambient as t };
