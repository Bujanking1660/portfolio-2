// Pure, separated data layer.

export const profile = {
  name: "Rizkya Gusnaldy",
  firstName: "Rizkya",
  lastName: "Gusnaldy",
  role: "Software Engineer & Data Science Enthusiast",
  tagline:
    "I build full-stack applications and AI-powered tools, blending software engineering with data science to solve real-world problems.",
  statement:
    "I work across the stack — from crafting responsive frontends with React and Next.js to designing APIs with FastAPI and Express.js. My passion lies at the intersection of software engineering and data science, building systems that are not only functional but intelligent.",
  email: "rzkygusnaldy@gmail.com",
  location: "Bandung, Indonesia",
  available: true,
  linkedin: "https://www.linkedin.com/in/rizkya-gusnaldy-kalia",
  github: "https://github.com/Bujanking1660",
  photo: "https://media.licdn.com/dms/image/v2/D5603AQHUh2nv28umsg/profile-displayphoto-scale_400_400/B56aAUMJ3pHUAk-/0/1787045127549?e=1789603200&v=beta&t=-Xb9CwVPsNuvChqirXN-rz6Y-AS5yQMO4TEOQPmVMqo",
};

export const contactCtaLabel = "Get in touch";

export const socials = [
  { name: "GitHub", url: "https://github.com/Bujanking1660", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/rizkya-gusnaldy-kalia", icon: "linkedin" },
  { name: "X", url: "https://x.com/", icon: "x" },
  { name: "Dribbble", url: "https://dribbble.com/", icon: "dribbble" },
];

export const projects = [
  {
    id: "urbanpulse",
    title: "UrbanPulse",
    category: "AI Geospatial Platform",
    year: "2026",
    description:
      "End-to-end decision-support system that detects slum areas from satellite imagery using XGBoost, explains predictions with SHAP, and provides AI-powered policy recommendations for urban planning. Built for the Datathon competition.",
    tech: ["Python", "XGBoost", "FastAPI", "Leaflet", "Google Earth Engine", "SHAP"],
    image: "https://picsum.photos/seed/urbanpulse-satellite/1280/960",
    link: "https://github.com/ratuanfajar/UrbanPulse",
    featured: true,
    collaborative: true,
  },
  {
    id: "pak-resto",
    title: "Pak Resto UNIKOM",
    category: "Full-Stack Restaurant Management",
    year: "2026",
    description:
      "Complete restaurant operations platform with QR-based self-ordering, multi-role portals (customer, waiter, cashier, chef), real-time updates via Supabase Postgres Changes, and automated receipt generation.",
    tech: ["Next.js", "Supabase", "Tailwind CSS v4", "TypeScript", "PostgreSQL"],
    image: "https://picsum.photos/seed/pakresto-restaurant/1280/960",
    link: "https://github.com/Bujanking1660/rpl-1",
    featured: true,
    collaborative: false,
  },
  {
    id: "mindmate",
    title: "MindMate",
    category: "Mental Health Platform",
    year: "2026",
    description:
      "Full-stack mental health and mood tracking platform with JWT + Google OAuth authentication, analytics dashboards, profile management, and file uploads. Frontend built with Vite + React, backend with Express.js and Prisma ORM.",
    tech: ["React", "Vite", "Express.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    image: "https://picsum.photos/seed/mindmate-wellness/1280/960",
    link: "https://github.com/Bujanking1660/mindmate-frontend",
    featured: true,
    collaborative: false,
  },
  {
    id: "pluto",
    title: "Pluto Project Planner",
    category: "AI Multi-Agent Tool",
    year: "2026",
    description:
      "AI-powered software project planner using 4 sequential Gemini agents (Analyst, Frontend, Backend, QA) to analyze requirements and generate structured development plans. Features real-time agent tracking, database visualizer, and guest mode.",
    tech: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Google Gemini AI", "TailwindCSS v4"],
    image: "https://picsum.photos/seed/pluto-ai-planner/1280/960",
    link: "https://adlc-eosin.vercel.app",
    featured: false,
    collaborative: false,
  },
];

// Hero images: z-index controls layering. Lower = behind text, higher = in front.
// Opacity is handled in CSS (.poster img { opacity: 0.82 })
export const heroImages = [
  {
    src: "https://picsum.photos/seed/poster-cinema1/420/560",
    alt: "Cinema poster",
    x: 1,
    y: 8,
    rotate: -8,
    w: 210,
    z: 8,
    parallax: "slow",
  },
  {
    src: "https://picsum.photos/seed/poster-design2/380/500",
    alt: "Design poster",
    x: 68,
    y: 3,
    rotate: 7,
    w: 195,
    z: 14,
    parallax: "fast",
  },
  {
    src: projects[0].image,
    alt: projects[0].title,
    x: 16,
    y: 55,
    rotate: -4,
    w: 230,
    z: 16,
    parallax: "medium",
  },
  {
    src: projects[1].image,
    alt: projects[1].title,
    x: 74,
    y: 40,
    rotate: 10,
    w: 185,
    z: 6,
    parallax: "slow",
  },
  {
    src: projects[2].image,
    alt: projects[2].title,
    x: 3,
    y: 65,
    rotate: -6,
    w: 200,
    z: 12,
    parallax: "fast",
  },
  {
    src: projects[3].image,
    alt: projects[3].title,
    x: 60,
    y: 76,
    rotate: 5,
    w: 180,
    z: 4,
    parallax: "medium",
  },
];

// Stats: real data from GitHub profile
export const stats = [
  { num: 37, suffix: "", label: "Repositories" },
  { num: 3, suffix: "+", label: "Years building" },
  { num: 4, suffix: "", label: "Portfolio projects" },
  { num: 10, suffix: "", label: "GitHub followers" },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand the problem, the users, and the constraints before touching any tool.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Rapid prototyping with design systems. Every decision is intentional, never decorative.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Production React with performance budgets. Ship fast, accessible, maintainable code.",
  },
];

export const testimonials = [
  {
    text: "Rizkya's work on UrbanPulse brought real technical depth — the XGBoost model and SHAP explainability layer were critical to making the system useful for urban planners.",
    name: "Ratuan Fajar",
    role: "Collaborator, UrbanPulse Datathon",
    image: "https://avatars.githubusercontent.com/u/106720973",
  },
  {
    text: "The restaurant management system handles real-time orders across multiple roles seamlessly. The Supabase Realtime integration was smooth and production-ready.",
    name: "UNIKOM Team",
    role: "RPL Project, UNIKOM",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    text: "MindMate's auth system with JWT and Google OAuth was well-architected. The frontend-backend separation made it easy to scale and maintain.",
    name: "Naycaa Id o",
    role: "Backend Collaborator, MindMate",
    image: "https://avatars.githubusercontent.com/u/92992195",
  },
  {
    text: "The Pluto Project Planner's multi-agent AI system is genuinely innovative — four Gemini agents working sequentially to generate full project plans from a single prompt.",
    name: "ADLC Team",
    role: "AI Project, UNIKOM",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Node.js",
  "Express.js",
  "Python",
  "FastAPI",
];
