import Image from "next/image";
import {
  ArrowUpRight,
  Download,
  GitBranch,
  Link,
  Mail,
  MapPin,
} from "lucide-react";

const projects = [
  {
    title: "FailSpec",
    description:
      "A local-first tool that turns bug reports into executable Playwright regression tests using Codex, isolated Git worktrees, and controlled test execution.",
    technologies: ["TypeScript", "Node.js", "Playwright", "Codex"],
    github: "https://github.com/OmerNYU/FailSpec",
  },
  {
    title: "Finance Management Tracker",
    description:
      "A full-stack financial tracking app with authentication, expenses, budgeting, forecasting, and AI-powered financial insights.",
    technologies: ["Next.js", "FastAPI", "PostgreSQL", "Supabase"],
    github: "https://github.com/Sheharyar-Khan14324/FinanceManagementTracker",
  },
  {
    title: "AI Confidence Analyzer",
    description:
      "A hackathon project that analyzes confidence and communication patterns in user responses.",
    technologies: ["MediaPipe", "NLP", "React", "Tailwind CSS", "TensorFlow"],
    github: "https://github.com/OmerNYU/Cursor_Hackathon",
  },
];

const experience = [
  [
    "Software Engineering Intern",
    "Waada",
    "June 2026 – Present",
    "Developing backend features across a microservices ecosystem with ASP.NET Core, C#, PostgreSQL, gRPC, Docker, Redis, and Elasticsearch.",
  ],
  [
    "AI/ML Engineering Intern",
    "McLeuker",
    "2026",
    "Built AI and data-driven systems, including retrieval pipelines, API integrations, and machine-learning workflows.",
  ],
  [
    "Machine Learning Researcher",
    "New York University Abu Dhabi",
    "2025 – 2026",
    "Contributed to machine-learning research through experimentation, data analysis, and model evaluation.",
  ],

  [
      "Data Analyst Intern",
      "Enrichly",
      "2025",
      "Led a 5-member analytics team to deploy machine learning models (regression and clustering) and impact analysis dashboard",
  ],  
];

const skills = {
  Languages: ["Python", "C#", "C++", "TypeScript", "JavaScript", "C"],
  "Web / Backend": ["ASP.NET Core", ".NET", "REST APIs", "gRPC", "PostgreSQL", "Redis", "Elasticsearch", "Supabase", "React"],
  Tools: ["Docker", "Kubernetes", "Terraform", "CI/CD", "AWS", "Azure", "GCP", "Git", "Vercel", "n8n"],
  "ML / AI": ["PyTorch", "TensorFlow", "Scikit-learn", "RAG Systems", "NLP"],
};

const github = "https://github.com/Sheharyar-Khan14324";
const linkedin = "https://www.linkedin.com/in/sheharyarukhan";
const email = "muk2010@nyu.edu";

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#content">Skip to content</a>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a aria-label="Sheharyar Khan home" className="logo-mark" href="#top">
          <span>SK</span><i aria-hidden="true" />
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm font-medium text-[#231942] sm:flex">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="text-sm font-semibold text-[#231942]" href="/Sheharyar_Khan_Resume.pdf" target="_blank" rel="noreferrer">
          Resume ↗
        </a>
      </header>

      <div id="top" className="hero-glow">
        <section id="content" className="mx-auto grid min-h-[min(48rem,calc(100vh-5rem))] max-w-6xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
          <div>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-[#231942] sm:text-6xl lg:text-7xl">
              Engineer passionate about distributed systems, AI, and building software that scales.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#231942] sm:text-xl">
              I&apos;m Sheharyar Khan, a Computer Science and Finance student at NYU Abu Dhabi focused on software engineering, AI/ML, and data engineering.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="button-secondary" href="/Sheharyar_Khan_Resume.pdf" target="_blank" rel="noreferrer">
                <Download size={18} aria-hidden="true" /> View resume
              </a>
              <a className="button-secondary" href="#projects">Explore selected work <ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
            <div className="mt-10 flex items-center gap-5 text-[#231942]">
              <a aria-label="GitHub" href={github} target="_blank" rel="noreferrer"><GitBranch size={22} /></a>
              <a aria-label="LinkedIn" href={linkedin} target="_blank" rel="noreferrer"><Link size={22} /></a>
              <a aria-label="Email Sheharyar" href={`mailto:${email}`}><Mail size={22} /></a>
              <span className="h-5 border-l border-slate-300" aria-hidden="true" />
              <span className="inline-flex items-center gap-2 text-sm"><MapPin size={16} aria-hidden="true" /> Abu Dhabi, UAE</span>
            </div>
          </div>

          <div className="justify-self-center lg:justify-self-end">
            <div className="relative h-64 w-64 overflow-hidden rounded-[2rem] bg-violet-100 shadow-2xl shadow-violet-950/15 sm:h-80 sm:w-80">
              <Image src="/profile.jpg" alt="Sheharyar Khan" fill priority sizes="(max-width: 640px) 16rem, 20rem" className="object-cover" />
            </div>
          </div>
        </section>
      </div>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Experience" title="Building systems that hold up in the real world." />
        <div className="experience-grid mt-12 grid gap-9 md:grid-cols-3">
          {experience.map(([role, company, period, description], index) => (
            <article key={role} className="experience-card flex min-h-72 flex-col p-6">
              <p className="text-xs font-bold tracking-[0.18em] text-[#231942]/70">EXPERIENCE 0{index + 1} · {period}</p>
              <div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#231942]">{role}</h3>
                <p className="mt-1 font-medium text-[#231942]">{company}</p>
                <p className="mt-3 max-w-2xl leading-7 text-[#231942]">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="bg-[#f1efff] py-24 text-[#231942]">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Selected work" title="A few things I&apos;ve made." />
          <div className="project-grid mt-12 grid gap-9 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className="project-card flex min-h-72 flex-col p-6">
                <p className="text-xs font-bold tracking-[0.18em] text-[#231942]/70">PROJECT 0{index + 1}</p>
                <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-[#231942]">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => <span key={technology} className="rounded-full border border-[#231942]/20 bg-white/45 px-3 py-1 text-xs font-medium text-[#231942]">{technology}</span>)}
                </div>
                <a className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#231942] hover:text-[#231942]" href={project.github} target="_blank" rel="noreferrer">
                  View on GitHub <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Toolbox" title="Comfortable across the stack." />
        <div className="toolbox-card mt-12 grid max-w-5xl gap-8 p-7 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-[#231942]">{category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((skill) => <span key={skill} className="rounded-full border border-[#231942]/20 bg-white/55 px-3 py-1.5 text-sm font-medium text-[#231942]">{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <footer className="border-t border-[#231942]/15 px-6 py-6 text-center text-sm text-[#231942]">© {new Date().getFullYear()} Sheharyar Khan</footer>
    </main>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="eyebrow section-eyebrow">{eyebrow}</p>
      <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.045em] text-[#231942] sm:text-5xl">{title}</h2>
    </div>
  );
}
