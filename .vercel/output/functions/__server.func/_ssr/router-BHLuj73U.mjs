import { i as __toESM, t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as createRootRouteWithContext, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { T as ArrowUp, c as Mail, f as Github, l as Linkedin, o as Menu, p as FileText, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BHLuj73U.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-_-71oNNH.css";
var RESUME_URL = "https://drive.google.com/file/d/1w5xGRVasxo62UNW9ftwBNE9ap9Dt964g/view?usp=sharing";
var CREDLY_URL = "https://www.credly.com/users/shreeshtjagga/badges/credly";
var profile = {
	name: "Shreesht Jagga",
	role: "Machine Learning & Data Science Student",
	subRole: "Final-year B.Tech, Data Science",
	email: "shreesht.jagga@gmail.com",
	linkedin: "https://www.linkedin.com/in/shreessht-jagga/",
	github: "https://github.com/shreeshtjagga",
	location: "Hyderabad, Telangana, India",
	summary: "Final-year Data Science undergraduate with strong expertise in applied machine learning, distributed data pipelines, and high-performance backend systems. Experienced in architecting full-stack AI platforms with FastAPI, PostgreSQL, Redis, LangGraph, and Groq LLM. Seeking Software Engineering, MLOps, and ML roles applying these skills to production systems.",
	tagline: "Building high-performance backends, distributed data pipelines, and production-ready machine learning systems — from quantitative models to multi-agent AI platforms.",
	rotatingRoles: [
		"Aspiring MLOps Engineer",
		"Backend & Data Pipeline Builder",
		"Applied NLP & Generative AI",
		"Final-year B.Tech, Data Science"
	]
};
var navLinks = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/skills",
		label: "Skills"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/certificates",
		label: "Certificates"
	},
	{
		to: "/experience",
		label: "Education & Experience"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var skillGroups = [
	{
		title: "Languages",
		items: [
			"Python",
			"R",
			"SQL"
		]
	},
	{
		title: "ML / AI",
		items: [
			"Supervised Learning",
			"Unsupervised Learning",
			"Ensemble Methods",
			"Prompt Engineering",
			"Generative AI"
		]
	},
	{
		title: "Frameworks & Libraries",
		items: [
			"Pandas",
			"NumPy",
			"Scikit-learn",
			"PyTorch",
			"FastAPI",
			"Flask",
			"Streamlit",
			"LangGraph"
		]
	},
	{
		title: "Data & Infrastructure",
		items: [
			"MySQL",
			"PostgreSQL",
			"Redis",
			"ChromaDB"
		]
	},
	{
		title: "Cloud & Deployment",
		items: [
			"AWS",
			"Render",
			"Vercel"
		]
	},
	{
		title: "Tools",
		items: [
			"Git",
			"GitHub",
			"Jupyter",
			"VS Code",
			"OpenCV",
			"MediaPipe",
			"Groq LLM"
		]
	},
	{
		title: "Spoken Languages",
		items: [
			"English — Professional",
			"Telugu — Native / Bilingual",
			"Hindi — Professional"
		]
	}
];
var projects = [
	{
		slug: "reqsense",
		title: "ReqSense AI",
		oneLiner: "An AI-powered requirements-gathering platform where an AI assistant sits between client and developer, catching contradictions in real time.",
		featured: true,
		tags: [
			"FastAPI",
			"PostgreSQL",
			"Redis",
			"Celery",
			"Groq LLM",
			"ChromaDB",
			"React",
			"JWT"
		],
		repo: "https://github.com/shreeshtjagga/ReqSense",
		demo: null,
		bullets: [
			"An AI-powered requirements-gathering platform where an AI assistant (\"ARIA\") sits between client and developer, detects contradictions in requirements in real time, and auto-generates SRS (Software Requirements Specification) documents.",
			"Full-stack system with a FastAPI backend, PostgreSQL database, Redis + Celery for background task processing, and an AI layer using Groq LLM with ChromaDB for retrieval-augmented context.",
			"Includes secure authentication (JWT with refresh-token rotation), rate limiting, audit logs, analytics, and hardened security headers (CSP, HSTS, etc.).",
			"React-based frontend with real-time contradiction detection UI, deployed via Render (backend) and Vercel (frontend)."
		]
	},
	{
		slug: "datapulse",
		title: "DataPulse — Agentic AI Data Analysis & Research Platform",
		oneLiner: "A four-agent system that runs automated statistical, ML, and RAG-based analysis over large JSON/CSV datasets.",
		tags: [
			"LangGraph",
			"Groq LLM",
			"ChromaDB",
			"FastAPI",
			"Redis",
			"JWT"
		],
		repo: "https://github.com/shreeshtjagga/Data-Analysis-MultiAgent",
		demo: null,
		bullets: [
			"Architected a multi-agent system (4 specialized agents) using Groq LLM and LangGraph for automated statistical, ML, and RAG-based analysis on large JSON/CSV datasets, with ChromaDB for retrieval.",
			"Built a high-performance FastAPI backend with REST APIs, Redis-based caching, JWT authentication, SMTP-based password reset, and secure bcrypt hashing.",
			"Conducted security audits (JWT storage, rate limiting, OAuth flows) and deployed across Fly.io, Render, and Vercel."
		]
	},
	{
		slug: "nse-predictor",
		title: "Quantitative Trading Signal Model — NSE Stock Predictor",
		oneLiner: "A quantitative model predicting next-day NSE stock direction with 78% accuracy using an XGBoost classifier.",
		tags: [
			"XGBoost",
			"Time Series",
			"Feature Engineering",
			"Streamlit",
			"Pandas"
		],
		repo: "https://github.com/shreeshtjagga/Indian-Stock-Predictor",
		demo: null,
		bullets: ["Built a quantitative model predicting next-day NSE stock direction with 78% accuracy using an XGBoost classifier.", "Engineered statistical/technical indicators (SMA, EMA, daily returns, volatility) from historical time-series market data; deployed an interactive research tool via Streamlit."]
	},
	{
		slug: "stress-predictor",
		title: "Stress Level Predictor",
		oneLiner: "A machine learning web app that predicts stress level from everyday lifestyle factors.",
		tags: [
			"Random Forest",
			"Scikit-learn",
			"Streamlit",
			"Classification"
		],
		repo: "https://github.com/shreeshtjagga/Stress-Level-Predictor",
		demo: null,
		bullets: ["A machine learning web app that predicts a user's stress level (Low / Medium / High) from lifestyle factors such as sleep hours, work hours, physical activity, and screen time.", "Built with a Random Forest classifier and an interactive Streamlit interface with color-coded stress level output and insights."]
	},
	{
		slug: "chess-alpha-beta",
		title: "Chess Game Using Alpha-Beta Pruning",
		oneLiner: "A Python chess engine where a human plays an AI opponent driven by Minimax with Alpha-Beta Pruning.",
		tags: [
			"Python",
			"Minimax",
			"Alpha-Beta Pruning",
			"python-chess"
		],
		repo: "https://github.com/shreeshtjagga/Chess-Game-Using-Alpha-Beta-Pruning",
		demo: null,
		bullets: ["A Python chess engine where a human plays against an AI opponent that uses the Minimax algorithm with Alpha-Beta Pruning and a material-based heuristic to select optimal moves, built on the python-chess library."]
	}
];
var certifications = [
	{
		title: "Generative AI Practitioner",
		issuer: "AWS Cloud Quest",
		short: "AWS",
		logo: "/logos/aws.svg",
		image: "/certificates/cert-aws-practitioner.svg",
		credlyUrl: "https://www.credly.com/badges/8ca8a452-6eae-4011-984e-2c2ca5a568c0/public_url"
	},
	{
		title: "Generative AI Foundations Trained",
		issuer: "AWS Academy",
		short: "AWS",
		logo: "/logos/aws.svg",
		image: "/certificates/cert-aws-foundations.svg",
		credlyUrl: "https://www.credly.com/badges/1925b698-2a85-429e-be33-9c154b505994/public_url"
	},
	{
		title: "Introduction to Red Hat OpenShift AI",
		issuer: "Red Hat",
		short: "Red Hat",
		logo: "/logos/redhat.svg",
		image: "/certificates/cert-redhat-openshift.svg",
		credlyUrl: "https://www.credly.com/badges/725fe0b1-6432-439e-af3c-7b312b59761c/public_url"
	},
	{
		title: "Python Essentials",
		issuer: "Cisco Networking Academy",
		short: "Cisco",
		logo: "/logos/cisco.svg",
		image: "/certificates/cert-cisco-python.svg",
		credlyUrl: "https://www.credly.com/badges/ddacbb8e-1d2d-4b1a-9910-77335578776e/public_url"
	},
	{
		title: "Database Design",
		issuer: "Oracle Academy",
		short: "Oracle",
		logo: "/logos/oracle.svg",
		image: "/certificates/cert-oracle-design.svg",
		credlyUrl: null
	},
	{
		title: "Database Programming with SQL",
		issuer: "Oracle Academy",
		short: "Oracle",
		logo: "/logos/oracle.svg",
		image: "/certificates/cert-oracle-sql.svg",
		credlyUrl: null
	}
];
var aboutHighlights = [
	"I'm a final-year Data Science undergraduate focused on practical, high-impact machine learning and robust software engineering.",
	"My expertise centers on building real-world ML systems and resilient backends: automated data analysis pipelines, agentic workflows, API architectures, and quantitative prediction models that hold up under load.",
	"I specialize in the end-to-end lifecycle — from data preprocessing and feature engineering to deployment with FastAPI, Redis, PostgreSQL, and cloud infrastructure.",
	"Outside pure coding, I've served as tech lead on award-winning hackathon and ideathon projects, enjoying the challenge of transforming complex data into working, accessible software."
];
var timeline = [
	{
		kind: "experience",
		title: "Machine Learning Intern",
		org: "Cantilever Labs",
		period: "Apr 2025 – Jun 2025",
		location: "Hyderabad",
		link: "https://github.com/shreeshtjagga/Face-Hand-Gesture-Recognition",
		linkLabel: "Project Repository",
		bullets: [
			"Developed a real-time face & hand gesture recognition system using OpenCV and MediaPipe with a low-latency live webcam inference pipeline.",
			"Preprocessed a large volume of video frame data with Pandas and trained classification models using Scikit-learn, focused on runtime performance.",
			"Tested and validated model performance across multiple gesture classes and hand positions to guide feature/model improvements."
		]
	},
	{
		kind: "award",
		title: "1st Place — Eco-Vate Ideathon",
		org: "Mahindra University",
		period: "Apr 2025",
		location: "Hyderabad",
		link: "https://www.linkedin.com/feed/update/urn:li:activity:7317777802953437185/",
		linkLabel: "View announcement",
		bullets: [
			"Secured 1st place at the Eco-Vate Ideathon, a sustainability-focused competition hosted by Mahindra University.",
			"Served as tech lead, presenting a low-cost, eco-friendly alternative to the Hawkeye system built for grassroots tennis and badminton.",
			"Designed the solution around accessibility — accurate line-calling for rural and semi-urban venues without expensive infrastructure."
		]
	},
	{
		kind: "award",
		title: "Winner — Ideathon, Robotica 2.0",
		org: "Robotics Club, Geethanjali College of Engineering and Technology",
		period: "Dec 2024",
		location: "Hyderabad",
		link: "https://www.linkedin.com/feed/update/urn:li:activity:7277580980637331456/",
		linkLabel: "View announcement",
		bullets: [
			"Won Ideathon – Robotica 2.0 against 84 competing teams.",
			"Acted as tech lead on a system to redefine judgment calls in tennis, badminton, and volleyball with higher accuracy at a far lower cost.",
			"Recognised for the innovation and practicality of the prototype and its potential impact on fairness in sports officiating."
		]
	},
	{
		kind: "education",
		title: "B.Tech in Data Science",
		org: "Geethanjali College of Engineering and Technology",
		period: "2023 – 2027",
		location: "Hyderabad",
		link: null,
		linkLabel: null,
		bullets: ["Coursework across algorithms, probability & statistics, machine learning, and database systems.", "From-scratch implementations of neural networks, ensemble methods, Bayesian Networks, and HMMs."]
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function SocialIcons({ size = 16 }) {
	const base = "grid h-9 w-9 place-items-center rounded-full border border-border/70 bg-surface/30 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_18px_-4px_var(--glow)]";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: profile.linkedin,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "LinkedIn",
		className: base,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { size })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: profile.github,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "GitHub",
		className: base,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { size })
	})] });
}
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => setOpen(false), [pathname]);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "backdrop-blur-xl" : ""),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("mx-auto flex max-w-7xl items-center gap-3 px-4 transition-all duration-500 sm:px-6", scrolled ? "my-2 h-14 rounded-2xl border border-border/70 bg-background/80 shadow-[var(--shadow-soft)] backdrop-blur-xl" : "h-20 border-b border-transparent"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex min-w-0 items-center gap-2.5 font-display text-sm font-semibold tracking-tight",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "relative grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-primary/40 bg-primary/8 text-primary transition-transform duration-500 group-hover:rotate-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-xl bg-primary/10 blur-[6px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative",
							children: "SJ"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate sm:inline text-foreground/90 group-hover:text-primary transition-colors",
						children: profile.name
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "ml-auto hidden items-center gap-0.5 xl:flex",
					"aria-label": "Main",
					children: navLinks.map((l) => {
						const active = pathname === l.to;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: l.to,
							className: cn("relative rounded-full px-3 py-2 text-[13px] font-medium transition-colors duration-300", active ? "text-foreground font-semibold" : "text-muted-foreground hover:text-foreground"),
							children: [active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full border border-primary/40 bg-primary/10 shadow-[0_0_20px_-6px_var(--glow)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative",
								children: l.label === "Education & Experience" ? "Experience" : l.label
							})]
						}, l.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-2 xl:ml-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden items-center gap-2 md:flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcons, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: RESUME_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "group relative hidden overflow-hidden rounded-full border border-primary/45 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary shadow-[0_0_14px_-6px_var(--glow)] transition-all duration-300 hover:text-primary-foreground sm:inline-flex sm:items-center sm:gap-2 sm:px-4 sm:py-2 sm:text-[13px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -translate-x-full bg-[image:var(--gradient-accent)] transition-transform duration-500 ease-[var(--ease-out-soft)] group-hover:translate-x-0" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
									size: 14,
									className: "relative transition-transform duration-300 group-hover:scale-110"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative",
									children: "Resume"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen((v) => !v),
							"aria-label": open ? "Close menu" : "Open menu",
							"aria-expanded": open,
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border/70 bg-surface/40 text-foreground transition-colors hover:border-primary/50 hover:text-primary xl:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 18 })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("fixed inset-0 z-40 origin-top bg-background/98 backdrop-blur-2xl transition-all duration-400 xl:hidden", open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex h-full flex-col justify-center gap-1 px-8 max-w-md mx-auto",
				"aria-label": "Mobile",
				children: [navLinks.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					className: cn("border-b border-border/40 py-3.5 font-display text-xl sm:text-2xl transition-colors", pathname === l.to ? "text-primary font-semibold" : "text-foreground/80 hover:text-primary"),
					style: open ? {
						animation: `rise-in .4s var(--ease-out-soft) both`,
						animationDelay: `${i * 45}ms`
					} : void 0,
					children: l.label
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SocialIcons, { size: 18 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: RESUME_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-[0_0_16px_-6px_var(--glow)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { size: 15 }), " Resume"]
					})]
				})]
			})
		})]
	});
}
function Footer() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 380);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative mt-16 sm:mt-20 border-t border-border/60 bg-surface/20 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 sm:px-6 sm:flex-row",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center sm:text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm sm:text-base font-semibold text-foreground/90",
						children: profile.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-0.5 text-xs text-muted-foreground",
						children: [
							profile.subRole,
							" · ",
							profile.location
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-medium sm:gap-x-5",
					"aria-label": "Footer",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "text-muted-foreground transition-colors hover:text-primary",
						children: l.label === "Education & Experience" ? "Experience" : l.label
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3.5 text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						profile.name
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [[{
							href: profile.linkedin,
							icon: Linkedin,
							label: "LinkedIn"
						}, {
							href: profile.github,
							icon: Github,
							label: "GitHub"
						}].map(({ href, icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href,
							target: "_blank",
							rel: "noreferrer",
							"aria-label": label,
							className: "grid h-8 w-8 place-items-center rounded-full border border-border/70 bg-surface/30 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_16px_-4px_var(--glow)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 14 })
						}, label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							"aria-label": "Email",
							className: "grid h-8 w-8 place-items-center rounded-full border border-border/70 bg-surface/30 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_16px_-4px_var(--glow)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 14 })
						})]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => window.scrollTo({
				top: 0,
				behavior: "smooth"
			}),
			"aria-label": "Back to top",
			className: cn("fixed bottom-5 right-5 z-40 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border border-primary/45 bg-background/85 text-primary backdrop-blur-md shadow-[0_0_20px_-6px_var(--glow)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_28px_-4px_var(--glow)]", show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { size: 16 })
		})]
	});
}
function LoadingBar() {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const isLoading = useRouterState({ select: (s) => s.status === "pending" });
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": "true",
		className: "fixed inset-x-0 top-0 z-[100] h-[3px] pointer-events-none overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-full bg-[image:var(--gradient-accent)] transition-all duration-300 ease-out shadow-[0_0_12px_2px_var(--glow)]",
			style: {
				width: `${progress}%`,
				opacity: progress === 100 ? 0 : 1,
				transitionProperty: "width, opacity"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-0 h-full w-24 bg-white/40 blur-[2px] shadow-[0_0_8px_#38bdf8]" })
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Shreesht Jagga Portfolio" },
			{
				name: "description",
				content: "Portfolio of Shreesht Jagga — B.Tech Data Science student building applied ML systems, high-performance backends, and agentic AI platforms."
			},
			{
				name: "author",
				content: "Shreesht Jagga"
			},
			{
				property: "og:site_name",
				content: "Shreesht Jagga"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#14161f"
			},
			{
				property: "og:title",
				content: "Shreesht Jagga Portfolio"
			},
			{
				name: "twitter:title",
				content: "Shreesht Jagga Portfolio"
			},
			{
				property: "og:description",
				content: "Portfolio of Shreesht Jagga — B.Tech Data Science student building applied ML systems, high-performance backends, and agentic AI platforms."
			},
			{
				name: "twitter:description",
				content: "Portfolio of Shreesht Jagga — B.Tech Data Science student building applied ML systems, high-performance backends, and agentic AI platforms."
			},
			{
				property: "og:image",
				content: "/avatar.svg"
			},
			{
				name: "twitter:image",
				content: "/avatar.svg"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=JetBrains+Mono:wght@400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.svg",
				type: "image/svg+xml"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Person",
				name: "Shreesht Jagga",
				jobTitle: "Machine Learning & Data Science Student",
				email: "mailto:shreesht.jagga@gmail.com",
				address: {
					"@type": "PostalAddress",
					addressLocality: "Hyderabad",
					addressRegion: "Telangana",
					addressCountry: "IN"
				},
				sameAs: ["https://www.linkedin.com/in/shreessht-jagga/", "https://github.com/shreeshtjagga"]
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#content",
				className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "content",
				className: "min-h-screen",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var $$splitComponentImporter$6 = () => import("./routes-BBDi2vMX.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Shreesht Jagga Portfolio" },
			{
				name: "description",
				content: "Portfolio of Shreesht Jagga — B.Tech Data Science student building applied ML systems, high-performance backends, and agentic AI platforms."
			},
			{
				property: "og:title",
				content: "Shreesht Jagga Portfolio"
			},
			{
				property: "og:description",
				content: "Portfolio of Shreesht Jagga — B.Tech Data Science student building applied ML systems, high-performance backends, and agentic AI platforms."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./about-oskThAnB.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — Shreesht Jagga" },
			{
				name: "description",
				content: "About Shreesht Jagga: final-year Data Science undergraduate building applied machine learning systems, data pipelines, and backend architectures."
			},
			{
				property: "og:title",
				content: "About — Shreesht Jagga"
			},
			{
				property: "og:description",
				content: "Background, expertise, and focus areas of Shreesht Jagga."
			},
			{
				property: "og:type",
				content: "profile"
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./certificates-tBzWJPOA.mjs");
var Route$4 = createFileRoute("/certificates")({
	head: () => ({
		meta: [
			{ title: "Certificates — Shreesht Jagga" },
			{
				name: "description",
				content: "Certifications from AWS, Red Hat, Cisco Networking Academy, and Oracle Academy in generative AI, cloud workflows, Python, and databases."
			},
			{
				property: "og:title",
				content: "Certificates — Shreesht Jagga"
			},
			{
				property: "og:description",
				content: "AWS Generative AI, Red Hat OpenShift AI, Cisco Python Essentials, Oracle Academy credentials."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/certificates"
			}
		],
		links: [{
			rel: "canonical",
			href: "/certificates"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-GowP7wSg.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact — Shreesht Jagga" },
			{
				name: "description",
				content: "Get in touch with Shreesht Jagga about software engineering and machine learning roles, collaborations, or research projects."
			},
			{
				property: "og:title",
				content: "Contact — Shreesht Jagga"
			},
			{
				property: "og:description",
				content: "Reach out by email, LinkedIn, or GitHub."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./experience-BXJCt14Y.mjs");
var Route$2 = createFileRoute("/experience")({
	head: () => ({
		meta: [
			{ title: "Education & Experience — Shreesht Jagga" },
			{
				name: "description",
				content: "B.Tech in Data Science at Geethanjali College of Engineering and Technology, and a machine learning internship at Cantilever Labs."
			},
			{
				property: "og:title",
				content: "Education & Experience — Shreesht Jagga"
			},
			{
				property: "og:description",
				content: "Timeline of study and applied machine learning work."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/experience"
			}
		],
		links: [{
			rel: "canonical",
			href: "/experience"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./projects-CZDGdJSo.mjs");
var Route$1 = createFileRoute("/projects")({
	head: () => ({
		meta: [
			{ title: "Projects — Shreesht Jagga" },
			{
				name: "description",
				content: "Selected work: ReqSense AI requirements platform, DataPulse agentic analysis, NSE stock signal model, stress predictor, and an alpha-beta chess engine."
			},
			{
				property: "og:title",
				content: "Projects — Shreesht Jagga"
			},
			{
				property: "og:description",
				content: "ReqSense AI, DataPulse, NSE Stock Predictor, Stress Level Predictor, Chess AI."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/projects"
			}
		],
		links: [{
			rel: "canonical",
			href: "/projects"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./skills-BbFNkG1Y.mjs");
var Route = createFileRoute("/skills")({
	head: () => ({
		meta: [
			{ title: "Skills — Shreesht Jagga" },
			{
				name: "description",
				content: "Technical toolkit: Python, R, SQL, PyTorch, Scikit-learn, FastAPI, LangGraph, PostgreSQL, Redis, ChromaDB, AWS and more."
			},
			{
				property: "og:title",
				content: "Skills — Shreesht Jagga"
			},
			{
				property: "og:description",
				content: "Languages, ML/AI, frameworks, data infrastructure, cloud, and tools."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "/skills"
			}
		],
		links: [{
			rel: "canonical",
			href: "/skills"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute: Route$5.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$7
	}),
	CertificatesRoute: Route$4.update({
		id: "/certificates",
		path: "/certificates",
		getParentRoute: () => Route$7
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$7
	}),
	ExperienceRoute: Route$2.update({
		id: "/experience",
		path: "/experience",
		getParentRoute: () => Route$7
	}),
	ProjectsRoute: Route$1.update({
		id: "/projects",
		path: "/projects",
		getParentRoute: () => Route$7
	}),
	SkillsRoute: Route.update({
		id: "/skills",
		path: "/skills",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { RESUME_URL as a, profile as c, timeline as d, CREDLY_URL as i, projects as l, cn as n, aboutHighlights as o, certifications as s, router_exports as t, skillGroups as u };
