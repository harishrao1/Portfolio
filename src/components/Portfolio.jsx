import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Code,
  Database,
  Server,
  Trophy,
  Calendar,
  MapPin,
  Menu,
  X,
  Star,
  Award,
  GraduationCap,
  Zap,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react";
import {
  CERTIFICATIONS,
  EXPERIENCES,
  NAVIGATION_ITEMS,
  PORTFOLIO_INFO,
  PROJECTS,
  SECTIONS,
  SKILLS,
  SOCIAL_PROFILE_URLS,
} from "../config";
import ThemeSwitcher from "./ThemeSwitcher";

// ─── Animation Variants ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = (delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
});

// ─── Skill icon map ───────────────────────────────────────────────────────────
const SKILL_ICON = {
  Frontend:        Code,
  "Data & APIs":   Database,
  "Build & Tools": Server,
  "Core Concepts": Zap,
};

// ─── Reusable primitives ─────────────────────────────────────────────────────

const Divider = () => (
  <div className="border-t border-[var(--accent-06)] mx-8 md:mx-12 lg:mx-16" />
);

const SectionLabel = ({ number, children }) => (
  <motion.div variants={fadeUp} className="mb-10">
    <p className="text-[10px] font-semibold tracking-[0.28em] uppercase text-[var(--accent-40)] mb-2">
      {String(number).padStart(2, "0")} · {children}
    </p>
    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
      {children}
    </h2>
  </motion.div>
);

const GoldCard = ({ children, className = "", ...rest }) => (
  <motion.div
    className={`bg-[#111111] border border-[var(--accent-10)]
      hover:border-[var(--accent-30)]
      hover:shadow-[0_0_40px_var(--accent-04)]
      rounded-lg transition-all duration-300 ${className}`}
    {...rest}
  >
    {children}
  </motion.div>
);

const Tag = ({ children, color = "default" }) => {
  const styles = {
    default: "bg-white/[0.04] border-white/[0.08]  text-gray-400",
    amber:   "bg-[var(--accent-08)] border-[var(--accent-20)] text-[var(--accent)]",
  };
  return (
    <span
      className={`text-[11px] px-2.5 py-1 rounded border font-medium
        ${styles[color] ?? styles.default}`}
    >
      {children}
    </span>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen]       = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (y >= offsetTop - 140 && y < offsetTop + offsetHeight - 140) {
            setActiveSection(id);
          }
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="flex bg-[#090909] dot-grid min-h-screen text-white">

      {/* ════════════════════════════════════════════════════════════════════
          SIDEBAR  (desktop only)
         ════════════════════════════════════════════════════════════════════ */}
      <aside
        className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-56
          border-r border-[var(--accent-08)] bg-[#090909] z-40 shrink-0"
      >
        {/* Brand */}
        <div className="px-7 py-7 border-b border-[var(--accent-06)]">
          <button
            onClick={() => scrollTo("home")}
            className="text-sm font-bold text-white hover:text-[var(--accent)] transition-colors block"
          >
            {PORTFOLIO_INFO.name}
          </button>
          <p className="text-[11px] text-gray-600 mt-0.5 font-medium">Frontend Engineer</p>
        </div>

        {/* Nav */}
        <nav className="sidebar-nav flex-1 px-4 py-6 space-y-0.5 overflow-y-auto">
          {NAVIGATION_ITEMS.map((item) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative flex items-center gap-2.5 w-full px-4 py-2.5 text-[13px] font-medium
                  rounded-md transition-all duration-200
                  ${active
                    ? "text-[var(--accent)] bg-[var(--accent-08)]"
                    : "text-gray-500 hover:text-gray-300 hover:bg-white/[0.03]"
                  }`}
              >
                {active && (
                  <span className="absolute left-0 top-2 bottom-2 w-[2px] bg-[var(--accent)] rounded-full" />
                )}
                <item.icon size={13} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Theme picker */}
        <div className="px-3 pb-2">
          <ThemeSwitcher />
        </div>

        {/* Bottom: socials + copyright */}
        <div className="px-7 py-6 border-t border-[var(--accent-06)]">
          <div className="flex gap-3.5 mb-4">
            {[
              { href: SOCIAL_PROFILE_URLS.githubProfile,   Icon: Github,   label: "GitHub profile"   },
              { href: SOCIAL_PROFILE_URLS.linkdlnProfile,  Icon: Linkedin, label: "LinkedIn profile" },
              { href: "mailto:harishrao1846@gmail.com",     Icon: Mail,     label: "Send email"       },
            ].map(({ href, Icon, label }, i) => (
              <a
                key={i}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="text-gray-600 hover:text-[var(--accent)] transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
          <p className="text-[10px] text-gray-700">© 2026 Harish Rao</p>
        </div>
      </aside>

      {/* ════════════════════════════════════════════════════════════════════
          MOBILE HEADER
         ════════════════════════════════════════════════════════════════════ */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center
        justify-between px-5 h-14 bg-[#090909]/95 backdrop-blur-xl
        border-b border-[var(--accent-08)]">
        <button
          onClick={() => scrollTo("home")}
          className="text-sm font-bold text-white"
        >
          {PORTFOLIO_INFO.name}
        </button>
        <button
          onClick={() => setIsMenuOpen((o) => !o)}
          className="text-gray-400 hover:text-white transition-colors p-1"
        >
          {isMenuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{    opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden fixed top-14 left-0 right-0 bottom-0 z-40
              bg-[#0a0a0a] flex flex-col overflow-hidden"
          >
            {/* Nav items */}
            <nav className="flex-1 px-4 py-4 space-y-0.5 overflow-y-auto">
              {NAVIGATION_ITEMS.map((item) => {
                const active = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`relative flex items-center gap-3 w-full px-4 py-3.5 text-sm
                      font-medium rounded-md transition-all
                      ${active
                        ? "text-[var(--accent)] bg-[var(--accent-08)]"
                        : "text-gray-500 hover:text-gray-200 hover:bg-white/[0.03]"
                      }`}
                  >
                    {active && (
                      <span className="absolute left-0 top-2.5 bottom-2.5 w-[2px] bg-[var(--accent)] rounded-full" />
                    )}
                    <item.icon size={15} />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Theme switcher + socials */}
            <div className="shrink-0 border-t border-[var(--accent-06)]">
              <div className="px-3 py-3">
                <ThemeSwitcher />
              </div>
              <div className="flex gap-5 px-7 py-4 border-t border-[var(--accent-06)]">
                {[
                  { href: SOCIAL_PROFILE_URLS.githubProfile,  Icon: Github,   label: "GitHub"   },
                  { href: SOCIAL_PROFILE_URLS.linkdlnProfile, Icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:harishrao1846@gmail.com",    Icon: Mail,     label: "Email"    },
                ].map(({ href, Icon, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-[var(--accent)]
                      transition-colors text-xs font-medium"
                  >
                    <Icon size={13} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════════════════════════════════════════════════════════════
          SCROLL PROGRESS BAR
         ════════════════════════════════════════════════════════════════════ */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[1.5px] z-50 origin-left bg-[var(--accent)]"
      />

      {/* ════════════════════════════════════════════════════════════════════
          MAIN CONTENT
         ════════════════════════════════════════════════════════════════════ */}
      <main className="lg:ml-56 flex-1 min-h-screen pt-14 lg:pt-0">

        {/* ─── HOME / HERO ──────────────────────────────────────────────── */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center
            px-8 md:px-12 lg:px-16 py-16 lg:py-0"
        >
          <div className="flex items-start gap-12 xl:gap-20">
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            animate="show"
            className="flex-1 min-w-0"
          >
            {/* Available badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-emerald-400">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name — editorial large */}
            <motion.h1
              variants={fadeUp}
              className="text-[56px] md:text-[72px] lg:text-[88px] font-black
                tracking-[-0.04em] text-white leading-[0.88] mb-8"
            >
              {(() => {
                const parts = PORTFOLIO_INFO.fullName.split(" ");
                const line1 = parts.slice(0, 2).join(" ");
                const line2 = parts.slice(2).join(" ");
                return (
                  <>
                    <span className="block">{line1}</span>
                    {line2 && <span className="block">{line2}</span>}
                  </>
                );
              })()}
            </motion.h1>

            {/* Gold divider rule */}
            <motion.div
              variants={fadeUp}
              className="h-px bg-gradient-to-r from-[var(--accent)] via-[var(--accent-40)] to-transparent mb-7 w-56"
            />

            {/* Role + location row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mb-6"
            >
              <span className="text-base font-semibold text-gray-200">Frontend Engineer</span>
              <span className="text-[var(--accent-30)]">·</span>
              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                <MapPin size={12} className="text-[var(--accent-50)]" />
                Pune, India
              </span>
              <span className="text-[var(--accent-30)]">·</span>
              <span className="text-sm text-gray-500">3 years experience</span>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="text-[15px] text-gray-400 leading-relaxed max-w-lg mb-10"
            >
              {PORTFOLIO_INFO.content}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-16">
              <a
                href="mailto:harishrao1846@gmail.com"
                className="group flex items-center gap-2 bg-[var(--accent)] hover:brightness-110
                  text-black font-semibold text-sm px-5 py-2.5 rounded-md
                  transition-all duration-200 shadow-[0_0_20px_var(--accent-glow)]
                  hover:shadow-[0_0_28px_var(--accent-glow-strong)]"
              >
                Get In Touch
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                    transition-transform duration-200"
                />
              </a>
              <a
                href={SOCIAL_PROFILE_URLS.githubProfile}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08]
                  border border-white/[0.08] hover:border-white/[0.18]
                  text-gray-300 hover:text-white text-sm px-5 py-2.5 rounded-md
                  font-semibold transition-all duration-200"
              >
                <Github size={15} />
                GitHub
              </a>
              <a
                href={SOCIAL_PROFILE_URLS.linkdlnProfile}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-white/[0.04] hover:bg-white/[0.08]
                  border border-white/[0.08] hover:border-white/[0.18]
                  text-gray-300 hover:text-white text-sm px-5 py-2.5 rounded-md
                  font-semibold transition-all duration-200"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-8">
              {[
                { value: "3+",   label: "Years Experience"       },
                { value: "40%",  label: "Effort Saved via Config UI" },
                { value: "B2B",  label: "SaaS Product Company"   },
              ].map((s, i) => (
                <div key={i} className="border-l-2 border-[var(--accent-25)] pl-4">
                  <div className="text-2xl font-black text-[var(--accent)] leading-none">{s.value}</div>
                  <div className="text-[10px] text-gray-600 mt-1 font-medium uppercase tracking-wider">
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right decorative panel — xl screens only */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden xl:flex flex-col gap-3 w-56 shrink-0 pt-28"
          >
            <div className="border border-[var(--accent-10)] rounded-lg p-5 bg-[#111111]">
              <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[var(--accent-40)] mb-4">
                Core Stack
              </p>
              <div className="space-y-2.5">
                {["React.js", "TypeScript", "Redux", "Ag-Grid", "Nivo Charts", "Webpack"].map((tech, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 rounded-full bg-[var(--accent-40)] shrink-0" />
                    <span className="text-[12px] text-gray-400 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-[var(--accent-10)] rounded-lg p-5 bg-[#111111]">
              <p className="text-[9px] font-semibold tracking-[0.3em] uppercase text-[var(--accent-40)] mb-3">
                Currently at
              </p>
              <p className="text-sm font-bold text-white mb-0.5">ExtraaEdge</p>
              <p className="text-[11px] text-[var(--accent-70)] font-medium mb-0.5">Frontend Developer</p>
              <p className="text-[11px] text-gray-600">Aug 2023 – Present</p>
            </div>
          </motion.div>
          </div>
        </section>

        <Divider />

        {/* ─── ABOUT ────────────────────────────────────────────────────── */}
        <section id="about" className="px-8 md:px-12 lg:px-16 py-16 lg:py-20">
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionLabel number={1}>About</SectionLabel>

            <div className="grid lg:grid-cols-2 gap-8 max-w-3xl mb-10">
              <motion.p variants={fadeUp} className="text-[15px] text-gray-400 leading-relaxed">
                I'm a Frontend Engineer with 3 years of experience building scalable,
                config-driven React.js applications at{" "}
                <span className="text-[var(--accent)] font-semibold">ExtraaEdge</span>,
                a B2B SaaS company focused on higher-education CRM software.
              </motion.p>
              <motion.p variants={fadeUp} className="text-[15px] text-gray-400 leading-relaxed">
                I specialise in JSON-driven UI architecture, frontend performance (code splitting,
                lazy loading), data-intensive dashboards with Ag-Grid & Nivo, and AI integrations
                including a LiveKit WebRTC voice agent.
              </motion.p>
            </div>

            {/* Highlight tags */}
            <div className="flex flex-wrap gap-2 max-w-3xl">
              {[
                "React.js & TypeScript",
                "Config-Driven UI",
                "Ag-Grid & Nivo Charts",
                "LiveKit WebRTC",
                "Performance Optimization",
                "HarvardX CS50",
                "Gold Badge — HackerRank",
              ].map((tag, i) => (
                <motion.span
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="text-[11px] bg-[var(--accent-06)] border border-[var(--accent-15)]
                    text-[var(--accent-70)] px-3 py-1.5 rounded font-medium"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* ─── EXPERIENCE ───────────────────────────────────────────────── */}
        <section id="experience" className="px-8 md:px-12 lg:px-16 py-16 lg:py-20">
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionLabel number={2}>Experience</SectionLabel>

            <div className="max-w-3xl space-y-5">
              {EXPERIENCES.map((exp, idx) => (
                <GoldCard key={idx} variants={fadeUp} custom={idx} className="p-7">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-base font-bold text-white mb-0.5">{exp.position}</h3>
                      <p className="text-[var(--accent)] font-semibold text-sm mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-3 text-[11px] text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={10} className="text-[var(--accent-40)]" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={10} className="text-[var(--accent-40)]" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Products */}
                  {exp.products && (
                    <div className="mb-5">
                      <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-600 mb-2">
                        Products
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.products.map((p, i) => <Tag key={i} color="amber">{p}</Tag>)}
                      </div>
                    </div>
                  )}

                  {/* Responsibilities */}
                  <div className="mb-5">
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-600 mb-3">
                      Key Contributions
                    </p>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[13px] text-gray-400">
                          <ChevronRight
                            size={11}
                            className="text-[var(--accent-40)] mt-1 shrink-0"
                          />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack */}
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-gray-600 mb-2">
                      Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((t, i) => <Tag key={i}>{t}</Tag>)}
                    </div>
                  </div>
                </GoldCard>
              ))}
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* ─── PROJECTS ─────────────────────────────────────────────────── */}
        <section id="projects" className="px-8 md:px-12 lg:px-16 py-16 lg:py-20">
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionLabel number={3}>Projects</SectionLabel>

            <div className="max-w-3xl space-y-5">
              {PROJECTS.map((project, idx) => (
                <GoldCard
                  key={idx}
                  variants={fadeUp}
                  custom={idx}
                  className="p-7 group cursor-default"
                  whileHover={{ x: 3, transition: { duration: 0.2 } }}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-base font-bold text-white
                      group-hover:text-[var(--accent)] transition-colors duration-200">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0">
                      {project.year && (
                        <span className="text-[11px] text-gray-600 font-mono">{project.year}</span>
                      )}
                      <Tag color="amber">{project.category}</Tag>
                    </div>
                  </div>

                  <p className="text-[13px] text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {project.highlights && (
                    <ul className="space-y-1.5 mb-4">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-[12px] text-gray-500">
                          <ChevronRight size={10} className="text-[var(--accent-35)] mt-0.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((t, i) => <Tag key={i}>{t}</Tag>)}
                  </div>
                </GoldCard>
              ))}
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* ─── SKILLS ───────────────────────────────────────────────────── */}
        <section id="skills" className="px-8 md:px-12 lg:px-16 py-16 lg:py-20">
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionLabel number={4}>Skills</SectionLabel>

            <div className="max-w-3xl space-y-8">
              {Object.entries(SKILLS).map(([category, skillList], catIdx) => {
                const Icon = SKILL_ICON[category] ?? Zap;
                return (
                  <motion.div key={catIdx} variants={fadeUp} custom={catIdx}>
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={12} className="text-[var(--accent-60)]" />
                      <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-gray-600">
                        {category}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.85 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: catIdx * 0.04 + i * 0.03, duration: 0.3 }}
                          className="text-[12px] bg-white/[0.03] border border-white/[0.07]
                            text-gray-400 px-3 py-1.5 rounded cursor-default font-medium
                            hover:border-[var(--accent-25)] hover:text-[var(--accent)]
                            transition-colors duration-200"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* ─── EDUCATION ────────────────────────────────────────────────── */}
        <section id="education" className="px-8 md:px-12 lg:px-16 py-16 lg:py-20">
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionLabel number={5}>Education</SectionLabel>

            <div className="max-w-3xl grid lg:grid-cols-2 gap-5">
              {/* Degree */}
              <GoldCard variants={fadeUp} className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap size={14} className="text-[var(--accent)]" />
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-600">
                    Education
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-0.5">Bachelor of Engineering</h4>
                <p className="text-[var(--accent)] text-xs font-semibold mb-2">GuruNanak University</p>
                <p className="text-xs text-gray-500 mb-4">2016 — 2020</p>
              </GoldCard>

              {/* Achievement */}
              <GoldCard variants={fadeUp} className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy size={14} className="text-[var(--accent)]" />
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-600">
                    Achievement
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 rounded-md
                  bg-[var(--accent-04)] border border-[var(--accent-08)]">
                  <Star size={12} className="text-[var(--accent)] mt-0.5 shrink-0" />
                  <p className="text-[12px] text-gray-400 leading-relaxed">
                    <span className="text-[var(--accent)] font-semibold">Gold Badge</span> in Java
                    {" & "}
                    <span className="text-[var(--accent)] font-semibold">30 Days of Code</span>
                    {" on HackerRank"}
                  </p>
                </div>
              </GoldCard>

              {/* Certifications — full width */}
              <GoldCard variants={fadeUp} className="p-6 lg:col-span-2">
                <div className="flex items-center gap-2 mb-5">
                  <Award size={14} className="text-[var(--accent)]" />
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-gray-600">
                    Certifications
                  </span>
                </div>
                <div className="grid sm:grid-cols-3 gap-5">
                  {CERTIFICATIONS.map((cert, i) => (
                    <div key={i} className="border-l border-[var(--accent-20)] pl-4">
                      <h4 className="text-[12px] font-semibold text-gray-200 mb-1 leading-snug">
                        {cert.name}
                      </h4>
                      <p className="text-[11px] text-gray-500 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  ))}
                </div>
              </GoldCard>
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* ─── CONTACT ──────────────────────────────────────────────────── */}
        <section id="contact" className="px-8 md:px-12 lg:px-16 py-16 lg:py-20">
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionLabel number={6}>Contact</SectionLabel>

            <motion.p
              variants={fadeUp}
              className="text-[15px] text-gray-400 max-w-sm mb-10 leading-relaxed"
            >
              Open to exciting opportunities, interesting projects, and good conversations.
            </motion.p>

            <div className="max-w-sm space-y-2">
              {[
                {
                  href:  "mailto:harishrao1846@gmail.com",
                  Icon:  Mail,
                  label: "harishrao1846@gmail.com",
                },
                {
                  href:  SOCIAL_PROFILE_URLS.linkdlnProfile,
                  Icon:  Linkedin,
                  label: "linkedin.com/in/harishrao-rangineni",
                },
                {
                  href:  SOCIAL_PROFILE_URLS.githubProfile,
                  Icon:  Github,
                  label: "github.com/harishrao1",
                },
              ].map(({ href, Icon, label }, i) => (
                <motion.a
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 text-gray-500 hover:text-[var(--accent)]
                    transition-colors duration-200 group py-2 text-sm"
                >
                  <Icon size={13} className="text-[var(--accent-40)] group-hover:text-[var(--accent)] transition-colors" />
                  {label}
                  <ArrowUpRight
                    size={11}
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ─── Footer ───────────────────────────────────────────────────── */}
        <div className="px-8 md:px-12 lg:px-16 py-7 border-t border-[var(--accent-06)]">
          <p className="text-[10px] text-gray-700 tracking-wider">
            © 2026 HARISH RAO RANGINENI · BUILT WITH REACT & FRAMER MOTION
          </p>
        </div>

      </main>
    </div>
  );
};

export default Portfolio;
