import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Github, Linkedin, Mail, MapPin, Phone, ArrowUpRight, Menu, X,
  Code2, Smartphone, Cloud, Brain, Sparkles, Award, GraduationCap,
  Briefcase, Rocket, ChevronDown, Send,
} from "lucide-react";
import portrait from "@/assets/nkwesi-portrait.jpg";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Nkwesi Ditrich — Full-Stack Web, Mobile & AI Developer" },
      { name: "description", content: "21-year-old Full-Stack Developer from Douala, Cameroon. MERN, Laravel/Vue, Flutter, React Native and AI-powered apps." },
    ],
  }),
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const STACK = [
  { icon: Code2, title: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"] },
  { icon: Cloud, title: "Backend & DB", items: ["Node.js / Express", "Laravel", "REST APIs · JWT", "MongoDB · MySQL · PostgreSQL"] },
  { icon: Smartphone, title: "Mobile", items: ["Flutter", "React Native", "Expo", "Dart"] },
  { icon: Brain, title: "AI / ML", items: ["Computer Vision", "Face & Liveness Detection", "Pose Estimation", "Model training"] },
  { icon: Cloud, title: "Cloud & DevOps", items: ["AWS (EC2, S3)", "Docker", "Linux", "Git / GitHub", "CI/CD basics"] },
  { icon: Sparkles, title: "AI Tools", items: ["GitHub Copilot", "Claude", "ChatGPT", "Postman", "WordPress"] },
];

const EXPERIENCE = [
  {
    role: "Software Engineering Intern",
    company: "Maxwell Technologies",
    location: "Bonanjo, Douala",
    period: "Nov 2024 – Jan 2025",
    stack: "JS · Laravel · Vue",
    bullets: [
      "Contributed to a Restaurant Management System (Node.js, Express, React) — order management, billing, reservations, inventory.",
      "Delivered the live Zenith Insurance corporate site with Laravel + Vue.js — responsive, accessible, SEO-friendly.",
      "Followed professional workflows: version control, code reviews, structured deployment with senior devs.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Mavou Consulting",
    location: "Akwa, Douala",
    period: "Aug – Oct 2024",
    stack: "Laravel · Vue · AWS",
    bullets: [
      "Hands-on with WordPress content management and AWS (EC2, S3, deployment workflows).",
      "Independently designed an Event Management System (Laravel + Vue.js) to replace manual event-tracking.",
      "Shipped a maintainable, well-documented platform that improved internal efficiency.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Gtelho",
    location: "Akwa, Douala",
    period: "Jul – Aug 2023",
    stack: "MERN Stack",
    bullets: [
      "Designed and built an Event Management System with MongoDB, Express, React, Node.",
      "Contributed to REST API design, schema modeling, and responsive React components.",
      "Practiced agile teamwork, code reviews and Git workflows.",
    ],
  },
];

const PROJECTS = [
  {
    title: "AI Face Recognition + Liveness Detection",
    tag: "Mobile · Computer Vision",
    tech: ["Flutter", "Dart", "Python"],
    desc: "Cross-platform mobile app for real-time face recognition and identity verification, with a custom deep-learning liveness model to prevent spoofing. Python inference exposed via REST, optimized for low-end devices.",
    accent: "from-[oklch(0.55_0.22_265)] to-[oklch(0.68_0.19_200)]",
  },
  {
    title: "AI Fitness & Rehabilitation App",
    tag: "AI · Health",
    tech: ["Pose Detection", "Mobile", "AI"],
    desc: "Real-time pose estimation guiding fitness form and rehabilitation exercises, with adaptive feedback and progress tracking.",
    accent: "from-[oklch(0.82_0.17_88)] to-[oklch(0.6_0.22_45)]",
  },
  {
    title: "Kanban Project Management (Trello Clone)",
    tag: "Real-Time Web",
    tech: ["MERN", "Socket.io", "JWT"],
    desc: "Drag-and-drop Kanban board with real-time collaboration, authentication, and team workflows powered by Socket.io.",
    accent: "from-[oklch(0.55_0.22_265)] to-[oklch(0.5_0.2_300)]",
  },
  {
    title: "WhatsApp CRM for Businesses",
    tag: "SaaS · CRM",
    tech: ["Next.js", "TypeScript", "WhatsApp API"],
    desc: "CRM enabling businesses to manage WhatsApp conversations, contacts and automated templates — with an analytics dashboard to grow revenue.",
    accent: "from-[oklch(0.68_0.19_200)] to-[oklch(0.55_0.22_265)]",
  },
  {
    title: "Waste Management Mobile App",
    tag: "Cross-Platform Mobile",
    tech: ["React Native", "Expo"],
    desc: "Scheduling and tracking app for waste collection, optimized for smooth performance on low-end Android devices.",
    accent: "from-[oklch(0.82_0.17_88)] to-[oklch(0.68_0.19_200)]",
  },
];

function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* Cursor glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 hidden md:block"
        style={{
          background: `radial-gradient(400px circle at ${cursor.x}px ${cursor.y}px, oklch(0.82 0.17 88 / 0.09), transparent 60%)`,
        }}
      />

      {/* Aurora blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="aurora-blob left-[-10%] top-[-10%] h-[45vw] w-[45vw]"
          style={{ background: "oklch(0.55 0.22 265)" }} />
        <div className="aurora-blob right-[-15%] top-[20%] h-[40vw] w-[40vw]"
          style={{ background: "oklch(0.68 0.19 200)", animationDelay: "-6s" }} />
        <div className="aurora-blob left-[20%] bottom-[-20%] h-[50vw] w-[50vw]"
          style={{ background: "oklch(0.82 0.17 88 / 0.7)", animationDelay: "-12s" }} />
      </div>

      <Nav active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-border/50 py-8 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Nkwesi Ditrich · Crafted with React, TanStack Start & Framer Motion.</p>
      </footer>
    </div>
  );
}

function Nav({ active, menuOpen, setMenuOpen }: { active: string; menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl glass px-5 py-3 md:mt-5">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent font-display text-lg font-bold text-accent-foreground shadow-glow">N</span>
          <span className="font-display text-lg font-semibold tracking-tight">Nkwesi<span className="text-accent">.</span></span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`}
              className={`relative rounded-lg px-3 py-1.5 text-sm transition-colors ${active === n.id ? "text-accent" : "text-foreground/70 hover:text-foreground"}`}>
              {n.label}
              {active === n.id && (
                <motion.span layoutId="nav-underline"
                  className="absolute inset-x-2 -bottom-0.5 h-px bg-accent" />
              )}
            </a>
          ))}
        </nav>
        <a href="#contact"
          className="hidden md:inline-flex items-center gap-1 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-glow transition hover:brightness-110">
          Let's talk <ArrowUpRight className="h-4 w-4" />
        </a>
        <button aria-label="Menu" className="md:hidden rounded-lg p-2 text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-6xl md:hidden">
            <div className="glass mx-3 rounded-2xl p-3">
              {NAV.map((n) => (
                <a key={n.id} href={`#${n.id}`} onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm hover:bg-white/5">
                  {n.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative flex min-h-screen items-center px-4 pt-28 md:pt-32">
      <motion.div style={{ y, opacity }} className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full gold-border bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Available for opportunities · Douala, Cameroon
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block">Hi, I'm</span>
            <span className="block text-gradient-gold">Nkwesi Ditrich.</span>
            <span className="mt-2 block text-gradient-royal text-3xl sm:text-4xl lg:text-5xl">
              I build web, mobile & AI.
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            21-year-old Full-Stack Engineer shipping production apps across the
            <span className="text-foreground"> MERN</span>,
            <span className="text-foreground"> Laravel/Vue</span> and
            <span className="text-foreground"> Flutter</span> stacks — with a soft spot for
            <span className="text-accent"> computer vision</span> and AI-assisted delivery.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-3">
            <a href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-glow transition hover:brightness-110">
              View my work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/5 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-white/10">
              Get in touch <Send className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="mt-10 grid max-w-md grid-cols-3 gap-4 text-center">
            {[
              { k: "3", v: "Internships" },
              { k: "10+", v: "Projects" },
              { k: "2", v: "Languages" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-xl px-3 py-4">
                <div className="font-display text-2xl font-bold text-gradient-gold">{s.k}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.9 }}
          className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/40 via-primary/30 to-aurora/40 blur-2xl" />
          <div className="animate-float relative overflow-hidden rounded-[2rem] gold-border shadow-royal">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
            <img src={portrait} alt="Nkwesi Ditrich portrait"
              className="h-[420px] w-full object-cover object-top sm:h-[520px]" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl glass px-4 py-3">
              <div>
                <div className="font-display text-sm font-semibold">Nkwesi Ditrich</div>
                <div className="text-[11px] text-muted-foreground">Full-Stack · AI</div>
              </div>
              <span className="rounded-full bg-accent/20 px-2 py-1 text-[10px] font-semibold text-accent">Age 21</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute inset-x-0 bottom-6 mx-auto flex w-fit items-center gap-1 text-xs text-muted-foreground">
        Scroll <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <section id={id} className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full gold-border bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-accent">
            {eyebrow}
          </div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">{title}</h2>
        </motion.div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title={<>A builder with a <span className="text-gradient-gold">bilingual mind</span>.</>}>
      <div className="grid gap-8 lg:grid-cols-3">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="col-span-2 text-lg leading-relaxed text-muted-foreground">
          Software Engineering graduate with hands-on experience across three professional internships delivering full-stack web, mobile and AI-powered applications. Comfortable across the MERN, Laravel/Vue and Flutter/React Native stacks — from database design to responsive UI.
          <br /><br />
          Bilingual French/English problem-solver who thrives in multicultural teams. I lean on AI-assisted tools like GitHub Copilot and Claude to move faster — while applying strong engineering fundamentals to review and validate every generated line.
        </motion.p>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
          {[
            { label: "Location", value: "Douala, Cameroon", icon: MapPin },
            { label: "Age", value: "21 years", icon: Sparkles },
            { label: "Languages", value: "FR · EN", icon: Award },
            { label: "Focus", value: "Web · Mobile · AI", icon: Rocket },
          ].map((f) => (
            <motion.div key={f.label} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="glass flex items-center gap-3 rounded-xl p-4">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{f.label}</div>
                <div className="text-sm font-semibold">{f.value}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Stack() {
  return (
    <Section id="stack" eyebrow="Tech stack" title={<>Tools of my <span className="text-gradient-royal">trade</span>.</>}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {STACK.map((s, i) => (
          <motion.div key={s.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="glass group relative overflow-hidden rounded-2xl p-6 transition">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20" />
            <div className="relative">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent to-[oklch(0.6_0.22_45)] text-accent-foreground shadow-glow">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold">{s.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent" />{it}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title={<>Three internships. <span className="text-gradient-gold">Real shipping.</span></>}>
      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-accent/60 via-primary/40 to-transparent md:block" />
        <div className="space-y-6">
          {EXPERIENCE.map((e, i) => (
            <motion.article key={e.company}
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass relative rounded-2xl p-6 md:ml-14">
              <div className="absolute -left-[46px] top-6 hidden h-4 w-4 rounded-full bg-accent shadow-glow md:block" />
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold">{e.role}</h3>
                  <div className="mt-0.5 text-sm text-accent">{e.company} <span className="text-muted-foreground">— {e.location}</span></div>
                </div>
                <div className="text-right text-xs">
                  <div className="rounded-full gold-border bg-accent/10 px-3 py-1 text-accent">{e.period}</div>
                  <div className="mt-1 text-muted-foreground">{e.stack}</div>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <Briefcase className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Selected work" title={<>Projects I've <span className="text-gradient-gold">built</span>.</>}>
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <motion.div key={p.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl gold-border bg-card p-6 transition">
            <div className={`absolute inset-0 -z-10 bg-gradient-to-br opacity-20 transition group-hover:opacity-40 ${p.accent}`} />
            <div className="flex items-start justify-between">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wider text-accent">{p.tag}</span>
              <ArrowUpRight className="h-5 w-5 text-accent opacity-0 transition group-hover:opacity-100" />
            </div>
            <h3 className="mt-4 font-display text-2xl font-semibold">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-foreground/80">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  const edu = [
    { title: "B-Tech Computer Engineering — Software Engineering", place: "Rousseau Higher Institute of Technologies (RHIT), Douala",
      desc: "Software engineering, algorithms, databases, web & mobile development, computer architecture. Capstone: full-stack + AI integration." },
    { title: "GCE Advanced Level — Science", place: "Orchidée Bilingual College, Douala",
      desc: "Specialization in Mathematics, Physics and Computer Science fundamentals." },
    { title: "GCE Ordinary Level — Science", place: "Orchidée Bilingual College, Douala",
      desc: "Foundational science curriculum: Mathematics, Physics, Chemistry, Biology and English." },
  ];
  const certs = [
    "AWS Cloud Foundations — EC2, S3, IAM, deployment workflows",
    "AI-Assisted Development — Copilot, Claude, ChatGPT with strong review fundamentals",
    "Self-directed: MERN, Laravel/Vue, Flutter, React Native, Next.js, TypeScript",
  ];
  const soft = ["Teamwork", "Problem-solving", "Adaptability", "Bilingual communication", "Time management", "Attention to detail", "Initiative", "Cross-cultural"];
  return (
    <Section id="education" eyebrow="Education & credentials" title={<>Foundations & <span className="text-gradient-royal">continuous learning</span>.</>}>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {edu.map((e, i) => (
            <motion.div key={e.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{e.title}</h3>
                  <div className="text-sm text-accent">{e.place}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="space-y-4">
          <div className="glass rounded-2xl p-5">
            <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold"><Award className="h-5 w-5 text-accent" /> Certifications & Learning</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {certs.map((c) => <li key={c} className="flex gap-2"><span className="mt-2 h-1 w-1 rounded-full bg-accent" />{c}</li>)}
            </ul>
          </div>
          <div className="glass rounded-2xl p-5">
            <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold"><Sparkles className="h-5 w-5 text-accent" /> Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {soft.map((s) => (
                <span key={s} className="rounded-full gold-border bg-white/5 px-3 py-1 text-xs">{s}</span>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-5">
            <h3 className="mb-3 font-display text-lg font-semibold">Languages</h3>
            <div className="space-y-3">
              {[{ n: "Français", lvl: 5, sub: "Native" }, { n: "English", lvl: 4, sub: "Professional Working" }].map((l) => (
                <div key={l.n}>
                  <div className="flex items-center justify-between text-sm"><span className="font-medium">{l.n}</span><span className="text-xs text-muted-foreground">{l.sub}</span></div>
                  <div className="mt-1 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className={`h-1.5 flex-1 rounded-full ${i < l.lvl ? "bg-accent" : "bg-white/10"}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("https://formsubmit.co/ajax/ditrichnkwesi@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          _subject: `Portfolio contact from ${data.get("name")}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json?.success === "false") throw new Error(json?.message || "Failed to send");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <Section id="contact" eyebrow="Contact" title={<>Let's build <span className="text-gradient-gold">something great</span>.</>}>
      <div className="glass overflow-hidden rounded-3xl p-8 md:p-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm open to internships, freelance projects and full-time roles in
              <span className="text-foreground"> web</span>,
              <span className="text-foreground"> mobile</span> and
              <span className="text-accent"> AI</span>. Drop a message — I reply fast.
            </p>
            <div className="mt-8 space-y-3">
              {[
                { icon: Mail, label: "Email", value: "ditrichnkwesi@gmail.com", href: "mailto:ditrichnkwesi@gmail.com" },
                { icon: Phone, label: "Phone", value: "+237 651 812 170", href: "tel:+237651812170" },
                { icon: MapPin, label: "Location", value: "Douala, Cameroon", href: "#" },
                { icon: Github, label: "GitHub", value: "NkwesiDitrich", href: "https://github.com/NkwesiDitrich" },
                { icon: Linkedin, label: "LinkedIn", value: "Nkwesi Ditrich", href: "#" },
              ].map((c) => (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border/50 bg-white/5 p-3 transition hover:border-accent/50 hover:bg-accent/5">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/15 text-accent">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="text-sm font-semibold">{c.value}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</label>
              <input name="name" required maxLength={100} className="mt-1 w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent" />
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</label>
              <input name="email" type="email" required maxLength={255} className="mt-1 w-full rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent" />
            </div>
            <div>
              <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea name="message" required rows={6} maxLength={2000} className="mt-1 w-full resize-none rounded-xl border border-border bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-accent" />
            </div>
            <button type="submit" disabled={status === "sending"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-glow transition hover:brightness-110 disabled:opacity-60">
              {status === "sending" ? "Sending..." : "Send message"} <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            {status === "sent" && (
              <p className="rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent">
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                Couldn't send: {errorMsg}. Please email me directly at ditrichnkwesi@gmail.com.
              </p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}
