import agencyImg from "../assets/Digital agency platform.webp";
import ecommerceImg from "../assets/E-commerce admin dashboard.png";
import aiContentImg from "../assets/ai content generator.jpg";
import product3dImg from "../assets/3d product showcase.jpg";
import portfolioSaasImg from "../assets/ai portfolio builder saas.png";

export const projects = [
  {
    id: 1,
    title: "Digital Agency Platform",
    description:
      "A full-stack web agency platform with dynamic service pages, client portal, and real-time project tracking.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    category: "fullstack",
    gradient: "from-cyan-500/40 via-teal-400/20 to-purple-600/40",
    accent: "#00f5d4",
    liveUrl: "#",
    githubUrl: "#",
    image: agencyImg,
  },
  {
    id: 2,
    title: "E-Commerce Dashboard",
    description:
      "Feature-rich admin dashboard with analytics, inventory management, and order processing pipelines.",
    tags: ["React", "TypeScript", "Chart.js", "Redux"],
    category: "frontend",
    gradient: "from-violet-600/40 via-purple-500/20 to-fuchsia-600/40",
    accent: "#b17bff",
    liveUrl: "#",
    githubUrl: "#",
    image: ecommerceImg,
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "SaaS platform leveraging OpenAI APIs to generate marketing copy, blog posts, and social media content.",
    tags: ["Next.js", "OpenAI", "Prisma", "PostgreSQL"],
    category: "fullstack",
    gradient: "from-pink-500/40 via-rose-400/20 to-orange-500/40",
    accent: "#ff4ecd",
    liveUrl: "#",
    githubUrl: "#",
    image: aiContentImg,
  },
  {
    id: 4,
    title: "3D Product Showcase",
    description:
      "Interactive product configurator with real-time 3D rendering, custom materials, and AR preview support.",
    tags: ["Three.js", "React", "WebGL", "GSAP"],
    category: "3d",
    gradient: "from-amber-500/40 via-orange-400/20 to-cyan-500/40",
    accent: "#ff9500",
    liveUrl: "#",
    githubUrl: "#",
    image: product3dImg,
  },
  // {
  //   id: 5,
  //   title: "Real Estate App",
  //   description:
  //     "Property listing platform with map integration, virtual tours, and AI-powered price estimation.",
  //   tags: ["React", "Google Maps", "Firebase", "Tailwind"],
  //   category: "frontend",
  //   gradient: "from-emerald-500/40 via-teal-400/20 to-cyan-600/40",
  //   accent: "#00c896",
  //   liveUrl: "#",
  //   githubUrl: "#",
  // },
  {
    id: 6,
    title: "Portfolio Builder SaaS",
    description:
      "Drag-and-drop portfolio builder for designers and developers with one-click deploy to Vercel.",
    tags: ["Next.js", "Supabase", "DnD Kit", "Vercel"],
    category: "fullstack",
    gradient: "from-blue-500/40 via-indigo-400/20 to-violet-600/40",
    accent: "#4e8fff",
    liveUrl: "#",
    githubUrl: "#",
    image: portfolioSaasImg,
  },
];

export const categories = ["all", "fullstack", "frontend", "3d"];
