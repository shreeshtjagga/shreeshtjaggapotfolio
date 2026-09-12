import { i as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/motion-bits-CSt8HmYn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useReducedMotion() {
	return false;
}
function Typewriter({ phrases, className }) {
	const reduced = useReducedMotion();
	const [index, setIndex] = (0, import_react.useState)(0);
	const [text, setText] = (0, import_react.useState)("");
	const [deleting, setDeleting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (reduced) {
			setText(phrases[0] ?? "");
			return;
		}
		const full = phrases[index % phrases.length] ?? "";
		const done = !deleting && text === full;
		const empty = deleting && text === "";
		const timeout = window.setTimeout(() => {
			if (done) return setDeleting(true);
			if (empty) {
				setDeleting(false);
				setIndex((i) => (i + 1) % phrases.length);
				return;
			}
			setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
		}, done ? 1900 : deleting ? 28 : 55);
		return () => window.clearTimeout(timeout);
	}, [
		text,
		deleting,
		index,
		phrases,
		reduced
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: text }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "caret-blink text-primary",
			"aria-hidden": true,
			children: "|"
		})]
	});
}
//#endregion
export { useReducedMotion as n, Typewriter as t };
