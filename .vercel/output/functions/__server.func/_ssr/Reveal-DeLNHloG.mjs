import { i as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as cn } from "./router-BHLuj73U.mjs";
import { r as WordReveal, t as Ambient } from "./AnimatedText-FpMhT5I7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-DeLNHloG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PageShell({ eyebrow, title, intro, tone = "mixed", children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-page-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ambient, { tone }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 pt-28 pb-8 sm:px-6 sm:pt-36 md:pt-40 md:pb-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-[0.28em] text-primary/80",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-4xl font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WordReveal, { text: title })
					}),
					intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg",
						style: {
							animation: "rise-in .6s var(--ease-out-soft) both",
							animationDelay: "200ms"
						},
						children: intro
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-7xl px-4 pb-12 sm:px-6",
				children
			})
		]
	});
}
function Reveal({ children, as: Tag = "div", variant = "rise", delay = 0, className }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setVisible(true);
			return;
		}
		const checkInitial = () => {
			const rect = el.getBoundingClientRect();
			if (rect.top < window.innerHeight * .95 && rect.bottom > 0) {
				setVisible(true);
				return true;
			}
			return false;
		};
		if (checkInitial()) return;
		const io = new IntersectionObserver((entries) => {
			if (entries[0]?.isIntersecting) {
				setVisible(true);
				io.disconnect();
			}
		}, {
			threshold: .05,
			rootMargin: "0px 0px -2% 0px"
		});
		io.observe(el);
		const timeout = setTimeout(() => setVisible(true), 1200);
		return () => {
			clearTimeout(timeout);
			io.disconnect();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		"data-variant": variant,
		className: cn("reveal", visible && "is-visible", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
//#endregion
export { Reveal as n, PageShell as t };
