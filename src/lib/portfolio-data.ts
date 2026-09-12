export const RESUME_URL = "https://drive.google.com/file/d/1w5xGRVasxo62UNW9ftwBNE9ap9Dt964g/view?usp=sharing";
export const CREDLY_URL = "https://www.credly.com/users/shreeshtjagga/badges/credly";
export const CANTILEVER_LOGO = "/logos/cantilever.svg";


export const profile = {
  name: "Shreesht Jagga",
  role: "Machine Learning & Data Science Student",
  subRole: "Final-year B.Tech, Data Science",
  email: "shreesht.jagga@gmail.com",
  linkedin: "https://www.linkedin.com/in/shreessht-jagga/",
  github: "https://github.com/shreeshtjagga",
  location: "Hyderabad, Telangana, India",
  summary:
    "Final-year Data Science undergraduate with strong expertise in applied machine learning, distributed data pipelines, and high-performance backend systems. Experienced in architecting full-stack AI platforms with FastAPI, PostgreSQL, Redis, LangGraph, and Groq LLM. Seeking Software Engineering, MLOps, and ML roles applying these skills to production systems.",
  tagline:
    "Building high-performance backends, distributed data pipelines, and production-ready machine learning systems — from quantitative models to multi-agent AI platforms.",
  rotatingRoles: [
    "Aspiring MLOps Engineer",
    "Backend & Data Pipeline Builder",
    "Applied NLP & Generative AI",
    "Final-year B.Tech, Data Science",
  ],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/certificates", label: "Certificates" },
  { to: "/experience", label: "Education & Experience" },
  { to: "/contact", label: "Contact" },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "R", "SQL"],
  },
  {
    title: "ML / AI",
    items: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Ensemble Methods",
      "Prompt Engineering",
      "Generative AI",
    ],
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
      "LangGraph",
    ],
  },
  {
    title: "Data & Infrastructure",
    items: ["MySQL", "PostgreSQL", "Redis", "ChromaDB"],
  },
  {
    title: "Cloud & Deployment",
    items: ["AWS", "Render", "Vercel"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Jupyter", "VS Code", "OpenCV", "MediaPipe", "Groq LLM"],
  },
  {
    title: "Spoken Languages",
    items: ["English — Professional", "Telugu — Native / Bilingual", "Hindi — Professional"],
  },
] as const;

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  featured?: boolean;
  tags: string[];
  repo: string;
  demo: string | null;
  bullets: string[];
};

export const projects: Project[] = [
  {
    slug: "reqsense",
    title: "ReqSense AI",
    oneLiner:
      "An AI-powered requirements-gathering platform where an AI assistant sits between client and developer, catching contradictions in real time.",
    featured: true,
    tags: [
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Groq LLM",
      "ChromaDB",
      "React",
      "JWT",
    ],
    repo: "https://github.com/shreeshtjagga/ReqSense",
    demo: null,
    bullets: [
      'An AI-powered requirements-gathering platform where an AI assistant ("ARIA") sits between client and developer, detects contradictions in requirements in real time, and auto-generates SRS (Software Requirements Specification) documents.',
      "Full-stack system with a FastAPI backend, PostgreSQL database, Redis + Celery for background task processing, and an AI layer using Groq LLM with ChromaDB for retrieval-augmented context.",
      "Includes secure authentication (JWT with refresh-token rotation), rate limiting, audit logs, analytics, and hardened security headers (CSP, HSTS, etc.).",
      "React-based frontend with real-time contradiction detection UI, deployed via Render (backend) and Vercel (frontend).",
    ],
  },
  {
    slug: "datapulse",
    title: "DataPulse — Agentic AI Data Analysis & Research Platform",
    oneLiner:
      "A four-agent system that runs automated statistical, ML, and RAG-based analysis over large JSON/CSV datasets.",
    tags: ["LangGraph", "Groq LLM", "ChromaDB", "FastAPI", "Redis", "JWT"],
    repo: "https://github.com/shreeshtjagga/Data-Analysis-MultiAgent",
    demo: null,
    bullets: [
      "Architected a multi-agent system (4 specialized agents) using Groq LLM and LangGraph for automated statistical, ML, and RAG-based analysis on large JSON/CSV datasets, with ChromaDB for retrieval.",
      "Built a high-performance FastAPI backend with REST APIs, Redis-based caching, JWT authentication, SMTP-based password reset, and secure bcrypt hashing.",
      "Conducted security audits (JWT storage, rate limiting, OAuth flows) and deployed across Fly.io, Render, and Vercel.",
    ],
  },
  {
    slug: "nse-predictor",
    title: "Quantitative Trading Signal Model — NSE Stock Predictor",
    oneLiner:
      "A quantitative model predicting next-day NSE stock direction with 78% accuracy using an XGBoost classifier.",
    tags: ["XGBoost", "Time Series", "Feature Engineering", "Streamlit", "Pandas"],
    repo: "https://github.com/shreeshtjagga/Indian-Stock-Predictor",
    demo: null,
    bullets: [
      "Built a quantitative model predicting next-day NSE stock direction with 78% accuracy using an XGBoost classifier.",
      "Engineered statistical/technical indicators (SMA, EMA, daily returns, volatility) from historical time-series market data; deployed an interactive research tool via Streamlit.",
    ],
  },
  {
    slug: "stress-predictor",
    title: "Stress Level Predictor",
    oneLiner:
      "A machine learning web app that predicts stress level from everyday lifestyle factors.",
    tags: ["Random Forest", "Scikit-learn", "Streamlit", "Classification"],
    repo: "https://github.com/shreeshtjagga/Stress-Level-Predictor",
    demo: null,
    bullets: [
      "A machine learning web app that predicts a user's stress level (Low / Medium / High) from lifestyle factors such as sleep hours, work hours, physical activity, and screen time.",
      "Built with a Random Forest classifier and an interactive Streamlit interface with color-coded stress level output and insights.",
    ],
  },
  {
    slug: "chess-alpha-beta",
    title: "Chess Game Using Alpha-Beta Pruning",
    oneLiner:
      "A Python chess engine where a human plays an AI opponent driven by Minimax with Alpha-Beta Pruning.",
    tags: ["Python", "Minimax", "Alpha-Beta Pruning", "python-chess"],
    repo: "https://github.com/shreeshtjagga/Chess-Game-Using-Alpha-Beta-Pruning",
    demo: null,
    bullets: [
      "A Python chess engine where a human plays against an AI opponent that uses the Minimax algorithm with Alpha-Beta Pruning and a material-based heuristic to select optimal moves, built on the python-chess library.",
    ],
  },
];

export const certifications = [
  {
    title: "Generative AI Practitioner",
    issuer: "AWS Cloud Quest",
    short: "AWS",
    logo: "/logos/aws.svg",
    image: "/certificates/cert-aws-practitioner.svg",
    credlyUrl: "https://www.credly.com/badges/8ca8a452-6eae-4011-984e-2c2ca5a568c0/public_url",
  },
  {
    title: "Generative AI Foundations Trained",
    issuer: "AWS Academy",
    short: "AWS",
    logo: "/logos/aws.svg",
    image: "/certificates/cert-aws-foundations.svg",
    credlyUrl: "https://www.credly.com/badges/1925b698-2a85-429e-be33-9c154b505994/public_url",
  },
  {
    title: "Introduction to Red Hat OpenShift AI",
    issuer: "Red Hat",
    short: "Red Hat",
    logo: "/logos/redhat.svg",
    image: "/certificates/cert-redhat-openshift.svg",
    credlyUrl: "https://www.credly.com/badges/725fe0b1-6432-439e-af3c-7b312b59761c/public_url",
  },
  {
    title: "Python Essentials",
    issuer: "Cisco Networking Academy",
    short: "Cisco",
    logo: "/logos/cisco.svg",
    image: "/certificates/cert-cisco-python.svg",
    credlyUrl: "https://www.credly.com/badges/ddacbb8e-1d2d-4b1a-9910-77335578776e/public_url",
  },
  {
    title: "Database Design",
    issuer: "Oracle Academy",
    short: "Oracle",
    logo: "/logos/oracle.svg",
    image: "/certificates/cert-oracle-design.svg",
    credlyUrl: null as string | null,
  },
  {
    title: "Database Programming with SQL",
    issuer: "Oracle Academy",
    short: "Oracle",
    logo: "/logos/oracle.svg",
    image: "/certificates/cert-oracle-sql.svg",
    credlyUrl: null as string | null,
  },
];

export const aboutHighlights = [
  "I'm a final-year Data Science undergraduate focused on practical, high-impact machine learning and robust software engineering.",
  "My expertise centers on building real-world ML systems and resilient backends: automated data analysis pipelines, agentic workflows, API architectures, and quantitative prediction models that hold up under load.",
  "I specialize in the end-to-end lifecycle — from data preprocessing and feature engineering to deployment with FastAPI, Redis, PostgreSQL, and cloud infrastructure.",
  "Outside pure coding, I've served as tech lead on award-winning hackathon and ideathon projects, enjoying the challenge of transforming complex data into working, accessible software.",
];

export const timeline = [
  {
    kind: "experience" as const,
    title: "Machine Learning Intern",
    org: "Cantilever Labs",
    period: "Apr 2025 – Jun 2025",
    location: "Hyderabad",
    link: "https://github.com/shreeshtjagga/Face-Hand-Gesture-Recognition",
    linkLabel: "Project Repository",
    bullets: [
      "Developed a real-time face & hand gesture recognition system using OpenCV and MediaPipe with a low-latency live webcam inference pipeline.",
      "Preprocessed a large volume of video frame data with Pandas and trained classification models using Scikit-learn, focused on runtime performance.",
      "Tested and validated model performance across multiple gesture classes and hand positions to guide feature/model improvements.",
    ],
  },
  {
    kind: "award" as const,
    title: "1st Place — Eco-Vate Ideathon",
    org: "Mahindra University",
    period: "Apr 2025",
    location: "Hyderabad",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7317777802953437185/",
    linkLabel: "View announcement",
    bullets: [
      "Secured 1st place at the Eco-Vate Ideathon, a sustainability-focused competition hosted by Mahindra University.",
      "Served as tech lead, presenting a low-cost, eco-friendly alternative to the Hawkeye system built for grassroots tennis and badminton.",
      "Designed the solution around accessibility — accurate line-calling for rural and semi-urban venues without expensive infrastructure.",
    ],
  },
  {
    kind: "award" as const,
    title: "Winner — Ideathon, Robotica 2.0",
    org: "Robotics Club, Geethanjali College of Engineering and Technology",
    period: "Dec 2024",
    location: "Hyderabad",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7277580980637331456/",
    linkLabel: "View announcement",
    bullets: [
      "Won Ideathon – Robotica 2.0 against 84 competing teams.",
      "Acted as tech lead on a system to redefine judgment calls in tennis, badminton, and volleyball with higher accuracy at a far lower cost.",
      "Recognised for the innovation and practicality of the prototype and its potential impact on fairness in sports officiating.",
    ],
  },
  {
    kind: "education" as const,
    title: "B.Tech in Data Science",
    org: "Geethanjali College of Engineering and Technology",
    period: "2023 – 2027",
    location: "Hyderabad",
    link: null,
    linkLabel: null,
    bullets: [
      "Coursework across algorithms, probability & statistics, machine learning, and database systems.",
      "From-scratch implementations of neural networks, ensemble methods, Bayesian Networks, and HMMs.",
    ],
  },
];
