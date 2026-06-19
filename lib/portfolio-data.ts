export const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const

export const PROFILE = {
  name: "Asif Khan",
  title: "Microsoft Power Platform Developer",
  subtitle: "Full Stack Business Applications Consultant",
  tagline:
    "Building enterprise-grade business applications with Power Apps, Power Automate, SharePoint, Dataverse, and Microsoft 365.",
  intro:
    "I help organizations accelerate digital transformation by automating complex business processes, replacing manual workflows with scalable low-code solutions, and delivering measurable operational efficiency across the enterprise.",
  location: "Dubai, United Arab Emirates",
  email: "hello@asifkhan.dev",
  yearsExperience: "8+",
  linkedin: "https://linkedin.com",
  github: "https://github.com",
}

export const ABOUT_HIGHLIGHTS = [
  "Power Apps",
  "Power Automate",
  "SharePoint Online",
  "Dataverse",
  "Microsoft 365",
  "SQL Server",
  "JavaScript",
  "React",
  "Enterprise Workflow Automation",
]

export const ABOUT_TIMELINE = [
  {
    year: "2017",
    title: "Started in Business Systems",
    description:
      "Began automating internal operations with SharePoint and InfoPath, discovering a passion for solving real business problems with technology.",
  },
  {
    year: "2019",
    title: "Power Platform Focus",
    description:
      "Specialized in Power Apps and Power Automate, delivering the first wave of low-code apps that replaced legacy paper-based processes.",
  },
  {
    year: "2021",
    title: "Enterprise Solutions Architect",
    description:
      "Led model-driven app and Dataverse architecture for mid-to-large enterprises, integrating Microsoft 365 across departments.",
  },
  {
    year: "2024",
    title: "Full Stack Consultant",
    description:
      "Now blending Power Platform with React, SQL Server, and Azure to deliver end-to-end digital transformation programs.",
  },
]

export type SkillCategory = {
  category: string
  icon: string
  skills: { name: string; level: number }[]
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Power Platform",
    icon: "Zap",
    skills: [
      { name: "Power Apps (Canvas & Model-driven)", level: 95 },
      { name: "Power Automate", level: 93 },
      { name: "Power BI", level: 85 },
      { name: "Power Pages", level: 80 },
    ],
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "React & Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript", level: 92 },
    ],
  },
  {
    category: "Backend & Databases",
    icon: "Database",
    skills: [
      { name: "Dataverse", level: 94 },
      { name: "SQL Server", level: 88 },
      { name: "Azure Functions", level: 78 },
      { name: "REST & OData APIs", level: 86 },
    ],
  },
  {
    category: "Microsoft Ecosystem",
    icon: "Boxes",
    skills: [
      { name: "SharePoint Online", level: 93 },
      { name: "Microsoft 365", level: 91 },
      { name: "Teams Integration", level: 87 },
      { name: "Entra ID / Security", level: 80 },
    ],
  },
  {
    category: "Automation & Integration",
    icon: "Workflow",
    skills: [
      { name: "Workflow Automation", level: 95 },
      { name: "Custom Connectors", level: 84 },
      { name: "Azure Logic Apps", level: 82 },
      { name: "Process Optimization", level: 90 },
    ],
  },
]

export type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  achievements: string[]
  demo: string
  github: string
}

export const PROJECTS: Project[] = [
  {
    title: "Rental Space Management System",
    description:
      "A model-driven Power App that centralizes booking, occupancy, and billing for commercial rental spaces with real-time availability.",
    image: "/projects/rental-space.png",
    tech: ["Power Apps", "Dataverse", "Power Automate", "Power BI"],
    achievements: [
      "Reduced booking conflicts by 92%",
      "Automated monthly invoicing for 400+ tenants",
    ],
    demo: "#",
    github: "#",
  },
  {
    title: "HR Employee Onboarding Automation",
    description:
      "End-to-end onboarding workflow orchestrating approvals, account provisioning, and task assignments across departments.",
    image: "/projects/hr-onboarding.png",
    tech: ["Power Automate", "SharePoint", "Microsoft 365", "Teams"],
    achievements: [
      "Cut onboarding time from 5 days to 6 hours",
      "Eliminated 100% of manual data entry",
    ],
    demo: "#",
    github: "#",
  },
  {
    title: "Enterprise KPI Dashboard",
    description:
      "A unified analytics workspace surfacing live operational KPIs from multiple data sources for executive decision-making.",
    image: "/projects/kpi-dashboard.png",
    tech: ["Power BI", "SQL Server", "Dataverse", "Azure"],
    achievements: [
      "Consolidated 12 reports into one live dashboard",
      "Saved 30+ analyst hours per week",
    ],
    demo: "#",
    github: "#",
  },
  {
    title: "Document Approval Workflow System",
    description:
      "Multi-stage approval engine with digital sign-off, audit trails, and SLA tracking built on SharePoint and Power Automate.",
    image: "/projects/document-approval.png",
    tech: ["Power Automate", "SharePoint", "Power Apps", "Adaptive Cards"],
    achievements: [
      "Achieved full audit compliance",
      "Reduced approval turnaround by 70%",
    ],
    demo: "#",
    github: "#",
  },
  {
    title: "Asset Management Application",
    description:
      "Canvas app for tracking company assets with QR tagging, assignment history, maintenance scheduling, and reporting.",
    image: "/projects/asset-management.png",
    tech: ["Power Apps", "Dataverse", "Power BI", "QR Integration"],
    achievements: [
      "Tracked 8,000+ assets across 6 sites",
      "Reduced lost-asset write-offs by 60%",
    ],
    demo: "#",
    github: "#",
  },
  {
    title: "Customer Service Ticketing Platform",
    description:
      "Omnichannel ticketing solution with SLA timers, auto-routing, and a self-service portal for streamlined support.",
    image: "/projects/ticketing.png",
    tech: ["Power Apps", "Power Automate", "Power Pages", "Dataverse"],
    achievements: [
      "Improved first-response SLA to 98%",
      "Handled 25,000+ tickets annually",
    ],
    demo: "#",
    github: "#",
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
  tech: string[]
}

export const EXPERIENCES: Experience[] = [
  {
    role: "Lead Power Platform Consultant",
    company: "Nexus Digital Solutions",
    period: "2022 — Present",
    description:
      "Leading enterprise digital transformation engagements and a team of low-code developers across multiple client programs.",
    highlights: [
      "Architected 20+ production Power Platform solutions",
      "Established a reusable component & governance framework",
      "Mentored a team of 5 developers on ALM best practices",
    ],
    tech: ["Power Apps", "Power Automate", "Dataverse", "Azure", "React"],
  },
  {
    role: "Senior Business Applications Developer",
    company: "Meridian Enterprises",
    period: "2020 — 2022",
    description:
      "Owned the design and delivery of internal business applications that automated core operational processes.",
    highlights: [
      "Delivered the HR onboarding & document approval platforms",
      "Integrated SharePoint, Teams, and SQL Server data sources",
      "Reduced manual processing effort by 40% company-wide",
    ],
    tech: ["Power Apps", "SharePoint", "SQL Server", "Power Automate"],
  },
  {
    role: "Microsoft 365 Developer",
    company: "BrightPath Consulting",
    period: "2017 — 2020",
    description:
      "Built collaboration solutions and the first generation of low-code apps across the Microsoft 365 stack.",
    highlights: [
      "Migrated legacy InfoPath forms to Power Apps",
      "Automated 50+ recurring departmental workflows",
      "Standardized intranet experiences on SharePoint Online",
    ],
    tech: ["SharePoint", "Power Automate", "JavaScript", "Microsoft 365"],
  },
]

export type Certification = {
  name: string
  issuer: string
  date: string
  code: string
}

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Power Platform Developer Associate",
    issuer: "Microsoft",
    date: "2023",
    code: "PL-400",
  },
  {
    name: "Power Platform Functional Consultant",
    issuer: "Microsoft",
    date: "2022",
    code: "PL-200",
  },
  {
    name: "Power Platform Solution Architect",
    issuer: "Microsoft",
    date: "2023",
    code: "PL-600",
  },
  {
    name: "Azure Fundamentals",
    issuer: "Microsoft",
    date: "2021",
    code: "AZ-900",
  },
]

export const ACHIEVEMENTS = [
  { label: "Apps Developed", value: 120, suffix: "+" },
  { label: "Flows Automated", value: 850, suffix: "+" },
  { label: "Hours Saved", value: 42000, suffix: "+" },
  { label: "Users Impacted", value: 35000, suffix: "+" },
]

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Asif transformed our manual approval chaos into a seamless automated platform. The impact on our operations was immediate and measurable.",
    name: "Sarah Mitchell",
    role: "Director of Operations, Meridian Enterprises",
  },
  {
    quote:
      "One of the most capable Power Platform consultants I've worked with. He balances deep technical skill with genuine business understanding.",
    name: "David Chen",
    role: "CIO, Nexus Digital Solutions",
  },
  {
    quote:
      "Our onboarding used to take a week. Asif's automation got it down to hours and new hires noticed the difference on day one.",
    name: "Priya Nair",
    role: "Head of People, BrightPath Consulting",
  },
  {
    quote:
      "He doesn't just build apps, he rethinks the process. The KPI dashboard he delivered is now central to our leadership meetings.",
    name: "James Okoro",
    role: "VP Strategy, Atlas Group",
  },
]
