# Shreesht Jagga Portfolio

# Prompt: Build My Portfolio Website — Premium UI/UX, Multi-Page

Build me a **visually stunning, multi-page** portfolio website (separate pages/routes — not one long scrolling page) with a **dark theme** and extremely polished, cohesive color matching throughout. This should look and feel like a professional, high-end designer portfolio — the kind of site that would win a design award — with rich, varied animations and flawless UI/UX, but it must be **butter-smooth with zero lag**, especially when switching between pages.

Do not worry about which technology, framework, or libraries to use — decide that yourself. I only care about the features, structure, pages, visual design, and interactions described below. Polishing the UI, color harmony, and animation quality is the top priority — I want this to be the most visually appealing version possible.

---

## 0. My Info (use this real content — no placeholders for personal info)

- **Name:** Shreesht Jagga
- **Title/Role:** Machine Learning & Data Science Student | Final-year B.Tech, Data Science
- **Email:** shreesht.jagga@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/shreessht-jagga/
- **GitHub:** https://github.com/shreeshtjagga
- **Location:** Hyderabad, Telangana, India
- **Education:** B.Tech in Data Science, Geethanjali College of Engineering and Technology, Hyderabad (2023–2027). Do **not** mention or display CGPA anywhere on the site.
- **Summary:** Final-year Computer Science / Data Science undergraduate with strong foundations in algorithms, probability, and statistics, including from-scratch implementations of neural networks, ensemble methods, and probabilistic models (Bayesian Networks, HMMs). Experienced in building high-performance backend systems, distributed data pipelines, and applied ML/NLP models. Seeking Software Engineering / ML roles applying these skills to research platforms and data-driven products.

### Skills
Display these as **icons/logos with labels only** (language/tool icons, animated badges, or an icon grid) — **do NOT show skill level as a percentage, progress bar, or star rating.** Just represent proficiency through clean animated icon presentation (e.g., icon pops/glows in on scroll, or a slow-rotating/orbiting icon cloud).

- **Languages:** Python, R, SQL
- **ML / AI:** Supervised & Unsupervised Learning, Ensemble Methods, Probabilistic Graphical Models, Neural Networks (from scratch), Prompt Engineering, Generative AI
- **Frameworks & Libraries:** Pandas, NumPy, Scikit-learn, PyTorch, FastAPI, Flask, Streamlit, LangGraph
- **Data & Infrastructure:** MySQL, PostgreSQL, Redis, ChromaDB
- **Cloud & Deployment:** AWS, Fly.io, Render, Vercel
- **Tools:** Git, GitHub, Jupyter, VS Code, OpenCV, MediaPipe, Groq LLM
- **Spoken Languages:** English (Professional), Telugu (Native/Bilingual), Hindi (Professional)

### Experience
**Machine Learning Intern — Cantilever Labs** (Apr 2025 – Jun 2025), Hyderabad
Repo: https://github.com/shreeshtjagga/Face-Hand-Gesture-Recognition
- Developed a real-time face & hand gesture recognition system using OpenCV and MediaPipe with a low-latency live webcam inference pipeline.
- Preprocessed a large volume of video frame data with Pandas and trained classification models using Scikit-learn, focused on runtime performance.
- Tested and validated model performance across multiple gesture classes and hand positions to guide feature/model improvements.

### Projects
**Structure the Projects page so ReqSense is the clear flagship/hero project** — shown first, larger/featured card, or a dedicated highlighted showcase block above the rest of the project grid. The other four projects follow in a standard grid below it.

**🏆 Featured Project — ReqSense AI** (highlight this as the top project)
Repo: https://github.com/shreeshtjagga/ReqSense
- An AI-powered requirements-gathering platform where an AI assistant ("ARIA") sits between client and developer, detects contradictions in requirements in real time, and auto-generates SRS (Software Requirements Specification) documents.
- Full-stack system with a FastAPI backend, PostgreSQL database, Redis + Celery for background task processing, and an AI layer using Groq LLM with ChromaDB for retrieval-augmented context.
- Includes secure authentication (JWT with refresh-token rotation), rate limiting, audit logs, analytics, and hardened security headers (CSP, HSTS, etc.).
- React-based frontend with real-time contradiction detection UI, deployed via Render (backend) and Vercel (frontend).

**DataPulse — Agentic AI Data Analysis & Research Platform**
Repo: https://github.com/shreeshtjagga/Data-Analysis-MultiAgent
- Architected a multi-agent system (4 specialized agents) using Groq LLM and LangGraph for automated statistical, ML, and RAG-based analysis on large JSON/CSV datasets, with ChromaDB for retrieval.
- Built a high-performance FastAPI backend with REST APIs, Redis-based caching, JWT authentication, SMTP-based password reset, and secure bcrypt hashing.
- Conducted security audits (JWT storage, rate limiting, OAuth flows) and deployed across Fly.io, Render, and Vercel.

**Quantitative Trading Signal Model — NSE Stock Predictor**
Repo: https://github.com/shreeshtjagga/Indian-Stock-Predictor
- Built a quantitative model predicting next-day NSE stock direction with 78% accuracy using an XGBoost classifier.
- Engineered statistical/technical indicators (SMA, EMA, daily returns, volatility) from historical time-series market data; deployed an interactive research tool via Streamlit.

**Stress Level Predictor**
Repo: https://github.com/shreeshtjagga/Stress-Level-Predictor
- A machine learning web app that predicts a user's stress level (Low / Medium / High) from lifestyle factors such as sleep hours, work hours, physical activity, and screen time.
- Built with a Random Forest classifier and an interactive Streamlit interface with color-coded stress level output and insights.

**Chess Game Using Alpha-Beta Pruning**
Repo: https://github.com/shreeshtjagga/Chess-Game-Using-Alpha-Beta-Pruning
- A Python chess engine where a human plays against an AI opponent that uses the Minimax algorithm with Alpha-Beta Pruning and a material-based heuristic to select optimal moves, built on the python-chess library.

Each project card should include: title, one-line description, tech tags, and buttons linking to "Source Code" (the GitHub repo above) and "Live Demo" where applicable (leave a clearly marked placeholder if no live demo exists, e.g., Chess Game and ReqSense may not have one).

### Certifications (use exactly this list — no others)
- Python Essentials — Cisco Networking Academy
- Database Design — Oracle Academy
- Database Programming with SQL — Oracle Academy
- Generative AI Practitioner — AWS
- Generative AI Foundations Trained — AWS

---

## 1. Visual Design & Color System (top priority)

- Dark theme only, but designed with real intention: pick a cohesive palette — a deep base background (not flat black; use a subtly tinted charcoal/navy/graphite), 1–2 accent colors that harmonize with each other (e.g., a primary vivid accent + a secondary complementary tone for gradients/highlights), and carefully chosen text tones (bright near-white for headings, softer muted gray for body text) so contrast is comfortable, not harsh.
- Use the accent color(s) consistently for interactive elements, active states, glows, and gradient accents — never randomly different colors per section.
- Add tasteful gradient meshes, glow effects, and soft depth (shadows, layered translucent panels/glassmorphism where appropriate) to make the UI feel premium rather than flat.
- Every page should feel like it belongs to the same design system: consistent spacing scale, corner radius, button styles, card styles, and typography pairing (one distinctive display font for headings + one clean readable font for body).
- Subtle ambient background motion (slow-drifting gradient blobs, faint particles, or soft grid) on every page for atmosphere, kept lightweight so it never causes lag.

---

## 2. Cursor & Interaction Behavior

- Use the **normal system default cursor** everywhere — no custom cursor graphic or cursor-follower blob.
- Instead, put the polish into **hover, focus, and active-state interactions**: buttons, links, nav items, cards, and icons should all have smooth, well-crafted hover/highlight animations (scale, glow, underline sweep, border-light-trace, background-fill wipe, etc.) so interacting with the site feels premium even with a normal cursor.
- Highlight the active/current nav item and current page clearly at all times.
- Every clickable element should have a clear, consistent, animated "this is interactive" affordance (subtle lift, glow ring, or color shift on hover — pick one consistent language and apply it everywhere).

---

## 3. Animation Variety (apply different styles in different places, not one repeated effect)

- **Text animations:** vary the technique across the site — e.g., character-by-character reveal for the hero headline, word-by-word fade/slide-up for section titles, a typewriter effect for a rotating subtitle/role line, gradient-shimmer text for special callouts, and staggered line-by-line reveal for paragraphs.
- **Entrance animations:** cards and sections should animate in as they enter the viewport (staggered fade/slide, scale-in, or clip-path reveal) — vary the entrance style page to page so the site feels crafted, not templated.
- **Page transitions:** smooth animated transition when navigating between pages (fade + slight slide, or a shared-element/morph transition) — must be fast and never block interaction.
- **Micro-interactions:** icon bounce/rotate on hover, button ripple or glow-pulse on click, subtle 3D tilt on project/certificate cards that follows mouse position (kept light-weight so there's no lag).
- Respect "prefers-reduced-motion" — reduce or simplify animations for users with that setting enabled.

---

## 4. Site Structure — Multi-Page

Build these as distinct pages with real client-side navigation between them (no full page reloads, instant/smooth transitions):

1. **Home** — Hero/landing page
2. **About**
3. **Skills**
4. **Projects** (ReqSense featured/highlighted at top, then the rest — with a detail view/modal per project)
5. **Certificates**
6. **Education & Experience** (timeline)
7. **Contact**

No Testimonials page/section. No Blog page/section.

---

## 5. Navigation

- Persistent header/nav bar on every page with subtle blur/glass background, sticky on scroll.
- Nav links to all pages above, with the active page clearly and smoothly highlighted.
- Resume/CV download button in the nav.
- Icon links to LinkedIn, GitHub, and Email using the real links in Section 0.
- On mobile: an animated menu icon that opens a smooth full-screen or slide-in nav overlay.

---

## 6. Home / Hero Page

- Large animated headline with my name and role (Section 0), using one of the varied text-animation styles.
- Short compelling tagline pulled from the summary.
- **On the right side of the hero, embed this interactive 3D animation** (place it beside the hero text on desktop; stack it above/below the text on mobile so nothing overlaps or breaks):
  ```html
  <iframe src='https://my.spline.design/retrofuturismbganimation-QmN5pzStc5fSY0vv53YgNIgl/' frameborder='0' width='100%' height='100%'></iframe>
  ```
- Primary CTA buttons: "View My Work" (→ Projects), "Contact Me" (→ Contact), "Download Resume."
- Animated icon links to LinkedIn, GitHub, Email.

---

## 7. About Page

- Profile photo placeholder with a subtle animated glow/frame effect.
- Full bio using the Section 0 summary.
- Animated stat counters that count up on scroll (e.g., number of projects, certifications, internships) — do not include or reference CGPA anywhere.
- Short teaser linking to the Education & Experience page.
- Resume download button.

---

## 8. Skills Page

- Icon-based skill display grouped into the categories from Section 0 (Languages, ML/AI, Frameworks & Libraries, Data & Infrastructure, Cloud & Deployment, Tools, Spoken Languages).
- Each icon/badge animates in with a staggered reveal as the section scrolls into view; hover gives a small glow/tooltip with the skill name.
- **No percentages, progress bars, or skill-level ratings anywhere** — presentation is purely icon + label + tasteful animation.

---

## 9. Projects Page

- ReqSense shown first as a distinctly featured/highlighted project (larger card, badge like "Featured," or its own showcase block) using the details in Section 0.
- The remaining four projects (DataPulse, NSE Stock Predictor, Stress Level Predictor, Chess Game) shown in a clean animated grid below it.
- Each card: title, one-line description, tech tags, "Source Code" button linked to the correct GitHub repo (see Section 0 for exact URLs), and "Live Demo" button where applicable.
- Clicking a project opens a detail view (modal or page) with the full bullet-point breakdown from Section 0.
- Tasteful hover animation per card (lift + glow, or lightweight 3D tilt following the mouse).

---

## 10. Certificates Page

- Grid/carousel of cards for exactly the 5 certifications listed in Section 0.
- Each card: title, issuing organization, and a "View Certificate" button opening a placeholder image/PDF in a lightbox (so real files can be added later).
- Subtle hover animation (lift, glow, or flip).

---

## 11. Education & Experience Page

- Clean animated vertical timeline combining the Geethanjali College entry and the Cantilever Labs internship (with a link/reference to its repo) in chronological order.
- Distinct icons for education vs. experience entries; each animates in as scrolled to.
- No CGPA shown.

---

## 12. Contact Page

- Interactive contact form (Name, Email, Subject, Message) with animated floating labels, focus states, and a clear animated success/error state on submit.
- Direct contact info: shreesht.jagga@gmail.com, Hyderabad, Telangana, India.
- Icon links to LinkedIn and GitHub repeated here.
- Calmer, cleaner layout than the more animated pages — should feel like a confident close to the site.

---

## 13. Footer

- Navigation links, social icons, copyright line, animated "Back to Top" button.
- **Do not include any "Designed & built by..." credit line or personal attribution text in the footer or anywhere else on the site.**

---

## 14. Performance & Quality Bar

- Zero lag when switching pages — transitions must be instant-feeling and smooth on both desktop and mobile.
- Prefer fewer, well-executed animations over many heavy ones; optimize all animated assets (especially the embedded 3D iframe) so they don't block page load or cause jank.
- Fully responsive on all screen sizes, with animations that scale down gracefully on smaller/weaker devices.
- Proper accessibility: strong color contrast, keyboard-navigable nav/forms, alt text on images, semantic structure, and full support for "prefers-reduced-motion."
- SEO-friendly: unique page titles, meta description, Open Graph tags reflecting my name and role. Favicon and browser tab title using my name/role.

---

## 15. Content Notes

- Use my real info from Section 0 throughout.
- Where an actual asset is missing (profile photo, resume PDF, certificate images/PDFs, live demo URLs not listed above), use a clearly marked placeholder (e.g., `[ADD PROFILE PHOTO]`, `[ADD RESUME PDF]`, `[ADD CERTIFICATE IMAGE]`, `[ADD LIVE DEMO LINK]`) so I can plug in the real files afterward.

---

**Summary of pages/routes required:** Home · About · Skills · Projects (ReqSense featured) · Certificates · Education & Experience · Contact.
No Testimonials. No Blog. No CGPA anywhere. No footer credit line. Normal system cursor with rich hover/interaction animations instead. Skills shown as icons/labels only — never percentages. Zero-lag page transitions and top-tier color-matched, animation-rich UI/UX is the top priority.
i attached my resume also 
in place of certicate image keep  the comapny logo i achieced it from  profie photo just dont genrate just keep need to add photo 
and also the demo link same
i ahve given you the github links for the proejct  i mentioned in the prompt use all this stricly and make it clean

## Deployment

### Deploy on Vercel
1. Import this repository into [Vercel](https://vercel.com).
2. Framework preset: **Vite**
3. Build command: `npm run build:vercel`
4. Output directory: `.output/server` (configured via `vercel.json`)
5. Deploy!

### Deploy on Render
1. Create a new **Web Service** on [Render](https://render.com) connected to your repository.
2. Runtime: **Node**
3. Build command: `npm install && npm run build:render`
4. Start command: `node .output/server/index.mjs`
5. (Or use Blueprint with the included `render.yaml`)

## Development

```sh
npm install
npm run dev
```
