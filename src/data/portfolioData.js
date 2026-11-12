/**
 * Centralized data source for Bharath Kumar Panuganti's portfolio.
 * Keeps content separate from presentation for easy maintenance and updates.
 */

export const personalInfo = {
  name: "Bharath Kumar Panuganti",
  shortName: "Bharath Kumar",
  initials: "BK",
  title: "Backend Software Engineer | Node.js | TypeScript | NestJS | Express.js | MERN Stack",
  headline: "Backend Software Engineer",
  tagline: "I build scalable backend systems, robust APIs, and modern web applications with a focus on performance, reliability, and clean architecture.",
  experienceYears: "3+ Years Experience",
  location: "Hyderabad, India",
  email: "bharathpanuganti1@gmail.com",
  phone: "+91 9642980211",
  showPhone: false, // Optional in public UI per user request
  github: "https://github.com/panuganti0211",
  linkedin: "https://www.linkedin.com/in/panuganti-bharath/",
  resumeUrl: "/Bharath_Kumar_Panuganti_Resume.pdf",
  resumeDownloadName: "Bharath_Kumar_Panuganti_Resume.pdf",
  availabilityStatus: "Open to backend & full-stack engineering roles",
  isAvailable: true,
  summary: "Software Engineer with 3+ years of experience building scalable web applications, backend systems, and RESTful APIs. Skilled in Node.js, Express.js, NestJS, React.js, JavaScript, and TypeScript, with experience in PostgreSQL, MongoDB, Redis, and Supabase.",
  techHighlights: [
    "Node.js",
    "TypeScript",
    "NestJS",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Supabase",
    "Redis"
  ]
};

export const aboutHighlights = [
  {
    title: "Backend API Development",
    description: "Designing and deploying RESTful APIs and backend services using Node.js, NestJS, and Express.js with clean modular architecture, controllers, and services.",
    icon: "Server"
  },
  {
    title: "Full-Stack Web Applications",
    description: "Full-stack development connecting robust backend architectures with responsive, component-driven React.js user interfaces and state workflows.",
    icon: "Layers"
  },
  {
    title: "Database Design & Caching",
    description: "Working with relational (PostgreSQL, MySQL) and document (MongoDB) databases, alongside in-memory Redis caching layers and Supabase integrations.",
    icon: "Database"
  },
  {
    title: "Authentication & Authorization",
    description: "Implementing secure authentication mechanisms including JWT token lifecycles, Role-Based Access Control (RBAC), and Supabase Row Level Security (RLS).",
    icon: "ShieldCheck"
  },
  {
    title: "Application Workflows",
    description: "Developing business workflows, data integration pipelines, and background task execution with a focus on code maintainability and testability.",
    icon: "Zap"
  },
  {
    title: "Testing & Reliability",
    description: "Debugging complex edge cases, performing systematic code testing, maintaining existing functionality, and collaborating across cross-functional teams.",
    icon: "Bug"
  }
];

export const skillCategories = [
  {
    category: "Backend",
    description: "Core server-side engineering, RESTful API architecture, and authentication.",
    icon: "Server",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "NestJS" },
      { name: "REST APIs" },
      { name: "JWT Authentication" }
    ]
  },
  {
    category: "Frontend",
    description: "Modern, responsive client interfaces built with React and standard web technologies.",
    icon: "Layout",
    skills: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "JavaScript (ES6+)" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" }
    ]
  },
  {
    category: "Databases & Caching",
    description: "Relational, document, and in-memory data persistence.",
    icon: "Database",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Supabase" },
      { name: "Redis" },
      { name: "MySQL" }
    ]
  },
  {
    category: "Tools & Platforms",
    description: "Development workflows, version control, API testing, and asset management.",
    icon: "Cpu",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Postman" },
      { name: "Prisma" },
      { name: "Cloudinary" }
    ]
  },
  {
    category: "Additional Technologies",
    description: "Security patterns, database access policies, and serverless workflows.",
    icon: "Sparkles",
    skills: [
      { name: "Role-Based Access Control (RBAC)" },
      { name: "Row Level Security (RLS)" },
      { name: "Supabase Edge Functions" },
      { name: "CRUD Workflows" }
    ]
  }
];

export const experiences = [
  {
    company: "TechMirus",
    role: "Software Engineer",
    project: "SiteSync PM",
    period: "April 2026 — Present",
    location: "Hyderabad, India",
    type: "Full-Time",
    description: "Full-stack engineering and module development for SiteSync PM, a construction project management platform.",
    responsibilities: [
      "React.js and TypeScript frontend development.",
      "Supabase and PostgreSQL backend integrations.",
      "Scheduling and Change Orders.",
      "RFIs and Submittals.",
      "Drawings and Annotations.",
      "Notifications and email workflows.",
      "Reports, PDF forms and Punch Lists.",
      "Authentication, Row Level Security, database migrations and Supabase Edge Functions.",
      "Debugging, testing and maintaining existing application functionality."
    ],
    tech: ["React.js", "TypeScript", "Node.js", "Supabase", "PostgreSQL", "RLS", "Supabase Edge Functions"]
  },
  {
    company: "String Metaverse Limited",
    role: "Full Stack Developer",
    period: "January 2025 – March 2026",
    location: "Hyderabad, India",
    type: "Full-Time",
    description: "Full-stack development using Node.js and NestJS, working with application workflows, database persistence, and caching.",
    responsibilities: [
      "Developed and maintained backend services using Node.js and NestJS.",
      "Developed and maintained REST API endpoints.",
      "Worked with NestJS modules, controllers and services.",
      "Worked with PostgreSQL and MongoDB for application data.",
      "Implemented Redis caching.",
      "Worked on backend application workflows and integrations."
    ],
    tech: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "REST APIs"]
  },
  {
    company: "GlobalLogic Technologies Pvt. Ltd.",
    role: "Analyst",
    period: "September 2023 – January 2025",
    location: "Hyderabad, India",
    type: "Full-Time",
    description: "During this period, I spent considerable time on bench allocation and focused on self-directed technical learning and upskilling in software development.",
    responsibilities: [
      "Focused on self-directed technical learning and upskilling in software development during bench allocation.",
      "Deepened core skills in JavaScript, React.js, Node.js, and web application fundamentals."
    ],
    tech: ["JavaScript", "React.js", "Node.js", "Web Fundamentals"]
  }
];

export const projects = [
  {
    id: "issue-tracking-app",
    title: "Full-Stack Issue Tracking Application",
    subtitle: "Workspace Management & Issue Tracking Platform",
    category: "Full-Stack",
    featured: true,
    description: "Full-stack issue tracking web application featuring workspace management, Kanban and list views, and role-based access control.",
    technologies: ["React", "Supabase", "PostgreSQL", "Authentication", "RBAC", "Docker"],
    highlights: [
      "Workspace management with structured project and issue grouping.",
      "Interactive issue tracking across Kanban board and list views.",
      "User authentication and role-based access control (RBAC) powered by Supabase.",
      "PostgreSQL relational data persistence containerized with Docker."
    ],
    github: "https://github.com/panuganti0211/Full-Stack-Issue-Tracking-Application",
    liveDemo: null
  },
  {
    id: "team-task-tracker-api",
    title: "Team Task Tracker API",
    subtitle: "RESTful Task Management API with RBAC & Caching",
    category: "Backend API",
    featured: true,
    description: "RESTful backend API designed for team task coordination, role-based authorization, and cached data access.",
    technologies: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma", "Redis", "Docker"],
    highlights: [
      "Task management endpoints with CRUD operations and status workflows.",
      "Role-based access control (RBAC) ensuring fine-grained authorization.",
      "Prisma ORM with PostgreSQL for type-safe database queries and migrations.",
      "Redis caching layer for optimized task retrieval and data access.",
      "Containerized development environment configured with Docker."
    ],
    github: "https://github.com/panuganti0211/team-task-tracker-rbac-api",
    liveDemo: null
  },
  {
    id: "mern-crm-opportunity-tracker",
    title: "MERN CRM Opportunity Tracker",
    subtitle: "Opportunity & Lead Management Application",
    category: "Full-Stack MERN",
    featured: true,
    description: "Full-stack MERN application for tracking business leads, managing opportunity pipelines, and organizing customer accounts.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    highlights: [
      "Opportunity and lead management with pipeline stage tracking.",
      "CRUD operations for accounts, contacts, and deal records.",
      "RESTful API backend built with Express.js and MongoDB.",
      "User authentication for secured access to sales data."
    ],
    github: "https://github.com/panuganti0211/mern-crm-opportunity-tracker",
    liveDemo: null
  },
  {
    id: "smart-property-platform",
    title: "Smart Property Image & Experience Platform",
    subtitle: "Property Showcase & Image Management Web Platform",
    category: "Full-Stack Web",
    featured: true,
    description: "Web platform for managing property listings, organizing photo galleries, and delivering interactive property experiences.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    highlights: [
      "Property listing and image management with structured metadata.",
      "Image upload and asset management integrated with Cloudinary.",
      "REST API backend developed with Express.js and MongoDB.",
      "Responsive user interface for browsing property visual experiences."
    ],
    github: "https://github.com/panuganti0211/Smart-Property-Image-Experience-Platform",
    liveDemo: null
  }
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Manpower Development College, Osmania University",
    period: "August 2022 – October 2024",
    grade: "First Division · CGPA: 6.89",
    description: "Master of Computer Applications from Osmania University, graduating with First Division (CGPA 6.89)."
  },
  {
    degree: "Bachelor of Science (MPCS)",
    institution: "Vivekananda Govt Degree College, Osmania University",
    period: "June 2019 – November 2021",
    grade: "Percentage: 74.40%",
    description: "Bachelor of Science in Mathematics, Physics, and Computer Science from Osmania University."
  }
];

export const contactDetails = {
  heading: "Let's Build Something Together",
  subheading: "I'm always interested in discussing backend engineering, software development opportunities, and interesting projects.",
  location: "Hyderabad, Telangana, India",
  channels: [
    {
      id: "email",
      label: "Email",
      value: "bharathpanuganti1@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=bharathpanuganti1@gmail.com",
      display: "bharathpanuganti1@gmail.com",
      actionText: "Send Email"
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "panuganti-bharath",
      href: "https://www.linkedin.com/in/panuganti-bharath/",
      display: "linkedin.com/in/panuganti-bharath",
      actionText: "Connect"
    },
    {
      id: "github",
      label: "GitHub",
      value: "panuganti0211",
      href: "https://github.com/panuganti0211",
      display: "github.com/panuganti0211",
      actionText: "View Code"
    }
  ]
};
