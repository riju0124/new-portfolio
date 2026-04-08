import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Journey",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/riju_naskar007",
    shortLabel: "@riju_naskar007",
  },
  {
    name: "Discord",
    url: "https://discord.com/users/destroyer_will.destroy",
    shortLabel: "destroyer_will.destroy",
  },
  {
    name: "GitHub",
    url: "https://github.com/riju0124",
    shortLabel: "riju0124",
  },
];

export const themeOptions = [
  {
    id: "earth",
    name: "Riju Classic",
    swatch: "linear-gradient(135deg, #e7bf8d, #4d8b6c)",
  },
  {
    id: "blue",
    name: "Riju Neon",
    swatch: "linear-gradient(135deg, #67e8f9, #3b82f6)",
  },
  {
    id: "aurora",
    name: "Riju Aurora",
    swatch: "linear-gradient(135deg, #7c3aed, #22d3ee)",
  },
  {
    id: "crimson",
    name: "Riju Crimson",
    swatch: "linear-gradient(135deg, #fb7185, #ef4444)",
  },
  {
    id: "mono",
    name: "Riju Mono",
    swatch: "linear-gradient(135deg, #e5e7eb, #94a3b8)",
  },
];

const services = [
  {
    title: "Full Stack Builds",
    icon: web,
  },
  {
    title: "Game Systems",
    icon: mobile,
  },
  {
    title: "Backend Architecture",
    icon: backend,
  },
  {
    title: "UI and Motion Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Foundation",
    company_name: "my learning phase",
    icon: web,
    iconBg: "#183b35",
    date: "July 2023 - Dec 2023",
    points: [
      "Started with HTML, CSS, and JavaScript while building clean responsive interfaces.",
      "Learned layout systems, motion basics, and practical UI patterns through small portfolio and landing page builds.",
      "Built a strong understanding of browser behavior, reusable structure, and design consistency.",
      "Focused on writing code that looked polished and felt smooth on real devices.",
    ],
  },
  {
    title: "RAGE:MP Backend Developer",
    company_name: "custom server work",
    icon: backend,
    iconBg: "#dff5ff",
    date: "Oct 2024 - Dec 2024",
    points: [
      "Built backend systems for roleplay servers with a focus on stable gameplay logic and player data flow.",
      "Worked with C# and NeptuneEvo-based structures to create jobs, admin tooling, and server-side features.",
      "Improved performance and maintainability across logs, economy features, and progression systems.",
      "Gained hands-on experience with real multiplayer architecture and feature orchestration.",
    ],
  },
  {
    title: "Full Stack RAGE:MP Developer",
    company_name: "personal and freelance builds",
    icon: mobile,
    iconBg: "#183b35",
    date: "Jan 2025 - Mid 2025",
    points: [
      "Shipped full stack gameplay systems with connected frontend panels and backend logic.",
      "Created CEF interfaces using HTML, CSS, JavaScript, and Svelte for immersive player-facing experiences.",
      "Connected game UI with backend services to support tasks, investments, rentals, and management flows.",
      "Designed systems to feel intuitive for users while remaining practical to maintain and extend.",
    ],
  },
  {
    title: "Independent Full Stack Developer",
    company_name: "current focus",
    icon: creator,
    iconBg: "#dff5ff",
    date: "2025 - Present",
    points: [
      "Building web apps with a stronger focus on clean branding, usability, and scalable structure.",
      "Working across frontend, APIs, databases, and real-time system design.",
      "Balancing visual quality with maintainable engineering decisions.",
      "Continuously refining production habits, performance, and project organization.",
    ],
  },
  {
    title: "App and Unreal Exploration",
    company_name: "what I am learning now",
    icon: mobile,
    iconBg: "#183b35",
    date: "2026 - Present",
    points: [
      "Exploring mobile app development and real-time 3D workflows beyond traditional web stacks.",
      "Learning Unreal Engine to expand into cinematic interaction and game-side experiences.",
      "Studying how strong visuals, system logic, and product thinking can work together.",
      "Pushing toward a multi-platform developer profile with both technical depth and presentation quality.",
    ],
  },
];

const insights = [
  {
    title: "How I build",
    text:
      "I like building interfaces that feel smooth, clear, and premium while keeping the codebase practical enough to grow over time.",
    label: "design + code",
    image: "https://ui-avatars.com/api/?name=riju&background=183b35&color=f8f5ef",
  },
  {
    title: "What I care about",
    text:
      "I care about performance, structure, and polish together. I do not want a project to only look good or only work well. I want both.",
    label: "quality mindset",
    image: "https://ui-avatars.com/api/?name=riju&background=2563eb&color=eef4ff",
  },
  {
    title: "Where I am going",
    text:
      "Right now I am growing deeper into full stack development, game systems, app experiences, and stronger visual direction for everything I ship.",
    label: "next level",
    image: "https://ui-avatars.com/api/?name=riju&background=3d2f56&color=f8f5ef",
  },
];

const projects = [
  {
    name: "AI Assistant Platform",
    description:
      "An AI assistant experience focused on responsive chat, custom workflows, and a clean interface designed for smooth everyday use.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Roleplay Server Systems",
    description:
      "A collection of custom RAGE:MP gameplay systems covering jobs, economy logic, admin tooling, rentals, and backend architecture.",
    tags: [
      { name: "ragemp", color: "blue-text-gradient" },
      { name: "csharp", color: "green-text-gradient" },
      { name: "neptune", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Portfolio",
    description:
      "A cinematic portfolio combining layered gradients, 3D scenes, and motion-led storytelling to present projects and skills with more personality.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "threejs", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Task and Reward Engine",
    description:
      "A structured mission and reward system with tracking, custom UI, and database-backed progression for deeper gameplay loops.",
    tags: [
      { name: "ragemp", color: "blue-text-gradient" },
      { name: "cef-ui", color: "green-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Vehicle Rental Flow",
    description:
      "A vehicle rental feature with categorized options, pricing logic, and zone-aware management for more immersive in-game transport systems.",
    tags: [
      { name: "csharp", color: "blue-text-gradient" },
      { name: "ragemp", color: "green-text-gradient" },
      { name: "backend", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, insights, projects };
