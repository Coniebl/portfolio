"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type IconProps = { size?: number; className?: string };

const ArrowUpRight = ({ size = 18, className }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M7 17 17 7M8 7h9v9"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowDown = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 5v14m-6-6 6 6 6-6"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Sun = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const Moon = ({ size = 15 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const MenuIcon = ({ size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 7h16M4 12h16M4 17h16"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = ({ size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

function GoldCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    type Particle = { x: number; y: number; vx: number; vy: number; life: number; size: number };
    const particles: Particle[] = [];
    const pointer = { x: -100, y: -100, visible: false };
    let animationFrame = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const move = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.visible = true;
      for (let index = 0; index < 3; index += 1) {
        particles.push({
          x: pointer.x + (Math.random() - 0.5) * 6,
          y: pointer.y + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 0.9,
          vy: Math.random() * 0.5 + 0.15,
          life: 1,
          size: Math.random() * 2.4 + 0.7,
        });
      }
      if (particles.length > 90) particles.splice(0, particles.length - 90);
    };

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= 0.025;
        if (particle.life <= 0) {
          particles.splice(index, 1);
          continue;
        }
        context.beginPath();
        context.fillStyle = `rgba(210, 174, 91, ${particle.life})`;
        context.arc(particle.x, particle.y, particle.size * particle.life, 0, Math.PI * 2);
        context.fill();
      }
      if (pointer.visible) {
        context.beginPath();
        context.strokeStyle = "rgba(210, 174, 91, .85)";
        context.lineWidth = 1;
        context.arc(pointer.x, pointer.y, 8, 0, Math.PI * 2);
        context.stroke();
        context.beginPath();
        context.fillStyle = "#d2ae5b";
        context.arc(pointer.x, pointer.y, 2, 0, Math.PI * 2);
        context.fill();
      }
      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerleave", () => {
      pointer.visible = false;
    });
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return <canvas ref={canvasRef} className="gold-cursor" aria-hidden="true" />;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "Get to know me" },
  { id: "services", label: "What I do" },
  { id: "projects", label: "Projects" },
  { id: "trainings", label: "Trainings" },
];

const projectData = [
  {
    index: "01",
    slug: "metube",
    title: "MeTube",
    type: "Full-stack platform",
    text: "A responsive video sharing experience with thoughtful content discovery, account flows, and a clean viewing interface.",
    tags: ["React", "Node.js", "Database"],
    year: "2025",
    role: "Full-stack developer",
  },
  {
    index: "02",
    slug: "bookease",
    title: "BookEase",
    type: "Hotel booking system",
    text: "An intuitive reservation system that simplifies room discovery, availability checks, and booking management.",
    tags: ["UI/UX", "Full Stack", "Responsive"],
    year: "2024",
    role: "Product designer & developer",
  },
  {
    index: "03",
    slug: "recipebook",
    title: "RecipeBook",
    type: "Web application",
    text: "A warm, accessible recipe collection made for effortless browsing, saving, and sharing in the kitchen.",
    tags: ["Frontend", "API", "Product Design"],
    year: "2024",
    role: "Frontend developer",
  },
];

const certificates = [
  {
    year: "2025",
    title: "Full-Stack Web Development",
    issuer: "Developer training & practical application",
  },
  {
    year: "2024",
    title: "Data Analytics Fundamentals",
    issuer: "Data processing, visualization & insights",
  },
  {
    year: "2024",
    title: "Quality Assurance Essentials",
    issuer: "Testing principles & quality workflows",
  },
  {
    year: "2024",
    title: "Responsive Web Development",
    issuer: "Mobile-first & accessible interface design",
  },
];

const trainingSlides = [
  ["Responsive Web Design", "Accessible, mobile-first interface development"],
  ["JavaScript Algorithms", "Data structures and problem-solving foundations"],
  ["Student Leadership Summit", "Collaborative leadership and project planning"],
  ["UI/UX Design Workshop", "Research-led interface design and prototyping"],
  ["Technology Conference", "Emerging tools, practices, and industry perspectives"],
];

function ServiceSimulation({ type }: { type: number }) {
  if (type === 0) {
    return (
      <div
        className="service-simulation website-simulation"
        aria-label="Animated website coding simulation"
      >
        <div className="simulation-bar">
          <i />
          <i />
          <i />
          <span>portfolio.tsx</span>
        </div>
        <div className="code-pane">
          <code>
            <b>const</b> experience = {"{"}
          </code>
          <code>
            <span> responsive:</span> <em>true</em>,
          </code>
          <code>
            <span> userFriendly:</span> <em>true</em>,
          </code>
          <code>
            <span> polished:</span> <em>true</em>
          </code>
          <code>{"}"}</code>
        </div>
        <div className="mini-site">
          <i />
          <strong />
          <span />
          <span />
        </div>
      </div>
    );
  }
  if (type === 1) {
    return (
      <div
        className="service-simulation qa-simulation"
        aria-label="Animated quality assurance simulation"
      >
        <div className="scan-line" />
        {["Responsive layout", "Keyboard access", "Performance", "Cross-browser"].map(
          (test, index) => (
            <div key={test} style={{ "--test-delay": `${index * 0.25}s` } as CSSProperties}>
              <span>✓</span>
              <strong>{test}</strong>
              <small>Passed</small>
            </div>
          ),
        )}
      </div>
    );
  }
  return (
    <div
      className="service-simulation data-simulation"
      aria-label="Animated data analytics simulation"
    >
      <div className="chart-bars">
        {[42, 68, 54, 88, 74, 96].map((height, index) => (
          <i
            key={height}
            style={
              { "--bar-height": `${height}%`, "--bar-delay": `${index * 0.1}s` } as CSSProperties
            }
          />
        ))}
      </div>
      <svg viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 88 C40 80, 48 52, 88 62 S145 33, 182 45 S240 12, 300 20" />
      </svg>
      <span>Insight trend +28%</span>
    </div>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projectData)[number] | null>(null);
  const [activeCertificate, setActiveCertificate] = useState(0);
  const [trainingSlide, setTrainingSlide] = useState(0);
  const [activeService, setActiveService] = useState<number | null>(null);
  const certificateDragStart = useRef<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as "light" | "dark" | null;
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      document.documentElement.dataset.theme = saved;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.dataset.theme = "dark";
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + 120;
      let current = "home";
      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      });
      setActiveSection(current);
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("in-view", entry.isIntersecting);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" },
    );
    const targets = document.querySelectorAll("[data-reveal]");
    targets.forEach((target) => revealObserver.observe(target));
    return () => revealObserver.disconnect();
  }, [selectedProject]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTrainingSlide((current) => (current + 1) % trainingSlides.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const changeSlide = (direction: number) => {
    setTrainingSlide(
      (current) => (current + direction + trainingSlides.length) % trainingSlides.length,
    );
  };

  const finishCertificateFlick = (clientX: number) => {
    if (certificateDragStart.current === null) return;
    const distance = clientX - certificateDragStart.current;
    if (Math.abs(distance) > 35) {
      setActiveCertificate((current) =>
        distance < 0
          ? (current + 1) % certificates.length
          : (current - 1 + certificates.length) % certificates.length,
      );
    }
    certificateDragStart.current = null;
  };

  if (selectedProject) {
    return (
      <div className="project-page">
        <GoldCursor />
        <header className="project-page-header">
          <button
            className="brand"
            onClick={() => setSelectedProject(null)}
            aria-label="Back to portfolio"
          >
            <img src="/conie-lariego-logo.png" alt="CL — Conie Lariego" />
          </button>
          <button className="back-link" onClick={() => setSelectedProject(null)}>
            ← Back to all projects
          </button>
          <button
            className="icon-theme-switch"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </header>
        <main className="project-detail">
          <div className="project-detail-copy scroll-reveal" data-reveal>
            <p className="eyebrow">{selectedProject.type}</p>
            <h1>{selectedProject.title}</h1>
            <p className="project-detail-lead">{selectedProject.text}</p>
            <div className="project-facts">
              <div>
                <span>Role</span>
                <strong>{selectedProject.role}</strong>
              </div>
              <div>
                <span>Year</span>
                <strong>{selectedProject.year}</strong>
              </div>
              <div>
                <span>Focus</span>
                <strong>{selectedProject.tags.join(" · ")}</strong>
              </div>
            </div>
          </div>
          <div
            className={`project-detail-visual visual-${selectedProject.index} scroll-reveal reveal-right`}
            data-reveal
          >
            <span>Interactive project preview</span>
            <strong>{selectedProject.title.slice(0, 1)}</strong>
            <div className="project-lines" />
            <p>Project experience simulation</p>
          </div>
          <section className="project-case-study scroll-reveal" data-reveal>
            <p className="eyebrow">Case study preview</p>
            <h2>Designed to make complex tasks feel remarkably simple.</h2>
            <p>
              This interactive project preview demonstrates the complete user journey and craft.
              Features responsive design, state management, streamlined workflows, and high attention
              to detail and accessibility across all screen sizes.
            </p>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="site-shell">
      <GoldCursor />
      <header className="floating-header">
        <button
          className="brand"
          onClick={() => goTo("home")}
          aria-label="Conie Lariego — back to home"
        >
          <img src="/conie-lariego-logo.png" alt="CL — Conie Lariego" />
        </button>

        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={activeSection === item.id ? "nav-link active" : "nav-link"}
              onClick={() => goTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="icon-theme-switch"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
        </button>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      <main>
        <section id="home" className="section hero-section">
          <div className="hero-copy reveal">
            <p className="hello">Hi! I am</p>
            <h1 className="hero-name">
              <span className="hero-name-text">
                Conie
                <br className="mobile-break" /> Lariego<i>,</i>
              </span>
              <b className="name-spark" aria-hidden="true" />
            </h1>
            <p className="hero-description">
              I create purposeful digital experiences where thoughtful design meets dependable
              code—clean, responsive, and built around the people who use them.
            </p>
            <div className="hero-actions">
              <button className="primary-button" onClick={() => goTo("projects")}>
                Explore my projects <ArrowUpRight />
              </button>
              <button className="text-button" onClick={() => goTo("about")}>
                Get to know me <ArrowDown />
              </button>
            </div>
          </div>

          <div
            className="portrait-wrap reveal delay-1"
            aria-label="Portrait of Conie Lariego"
          >
            <div className="portrait-frame">
              <img
                src="/conie-blazer.jpg"
                alt="Conie Lariego — Computer Engineering & Full-stack Developer"
                className="portrait-photo"
              />
              <div className="portrait-orbit" />
            </div>
            <div className="portrait-caption">
              <span>Portrait · 2025</span>
              <span>Based in Cebu, PH</span>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="section-heading scroll-reveal" data-reveal>
            <p className="eyebrow">Get to know me</p>
            <h2 className="write-reveal">
              Curious by nature.
              <br />
              <em>Intentional</em> by design.
            </h2>
          </div>

          <div className="about-grid scroll-reveal" data-reveal>
            <div className="about-portrait-frame">
              <img
                src="/conie-about.jpg"
                alt="Conie Lariego"
                className="about-photo"
              />
              <div className="about-photo-badge" aria-hidden="true">
                <span>CL</span>
              </div>
            </div>
            <div className="about-story">
              <p className="lead">
                I’m Conie Besinan Lariego, a Computer Engineering student and full-stack developer
                who cares about the details.
              </p>
              <p>
                I’m pursuing a Bachelor of Science in Computer Engineering at Cebu Technological
                University–Danao Campus, where I’ve built a strong foundation in web development and
                data analytics.
              </p>
              <p>
                I enjoy turning complex ideas into interfaces that feel simple. Whether I’m building
                independently or alongside a team, I bring curiosity, care, and a commitment to
                quality.
              </p>
            </div>
            <div className="stats-panel">
              <div>
                <strong>10+</strong>
                <span>
                  Projects
                  <br />
                  completed
                </span>
              </div>
              <div>
                <strong>4</strong>
                <span>
                  Professional
                  <br />
                  certifications
                </span>
              </div>
              <div>
                <strong>4th</strong>
                <span>
                  Year level
                  <br />
                  BS CpE
                </span>
              </div>
            </div>
          </div>

          <div className="recognition-row scroll-reveal" data-reveal>
            <span>Consistent Dean’s Lister</span>
            <span>DOST Scholar</span>
            <span>Student Leader</span>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-heading scroll-reveal" data-reveal>
            <p className="eyebrow">What I do</p>
            <h2 className="heading-slide">
              Ideas, thoughtfully
              <br />
              <em>brought to life.</em>
            </h2>
          </div>

          <div className="services-layout scroll-reveal" data-reveal>
            <div className="skill-intro">
              <p className="lead">
                I combine technical craft with an empathetic, problem-solving mindset.
              </p>

              <div className="skill-group">
                <p className="skill-label">Core strengths</p>
                <div className="skills-list">
                  {[
                    "Problem solving",
                    "Critical thinking",
                    "Collaboration",
                    "Detail-oriented",
                    "Adaptability",
                    "Time management",
                  ].map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-group">
                <p className="skill-label technical-label">Programming Languages</p>
                <div className="skills-list technical-skills">
                  {["JavaScript", "TypeScript", "Java"].map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-group">
                <p className="skill-label technical-label">Web & Mobile Development</p>
                <div className="skills-list technical-skills">
                  {["HTML", "CSS", "Tailwind CSS", "React", "Next.js", "React + Vite"].map(
                    (skill) => (
                      <span key={skill}>{skill}</span>
                    ),
                  )}
                </div>
              </div>

              <div className="skill-group">
                <p className="skill-label technical-label">Databases & Version Control</p>
                <div className="skills-list technical-skills">
                  {["MySQL", "Supabase", "Git/GitHub"].map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="skill-group">
                <p className="skill-label technical-label">AI & Development Tools</p>
                <div className="skills-list technical-skills">
                  {[
                    "Google Antigravity",
                    "Google Flow",
                    "HeyGen",
                    "Figma",
                    "Microsoft Applications",
                    "PowerBI",
                  ].map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="service-list">
              <article
                className={activeService === 0 ? "service-card active" : "service-card"}
                onClick={() => setActiveService(activeService === 0 ? null : 0)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveService(activeService === 0 ? null : 0);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={activeService === 0}
              >
                <span className="service-index">01</span>
                <div>
                  <p className="eyebrow">Design & development</p>
                  <h3>Websites</h3>
                  <p>
                    Responsive, user-friendly websites that balance elegant interfaces with robust
                    functionality.
                  </p>
                </div>
                <ArrowUpRight size={20} />
                {activeService === 0 && <ServiceSimulation type={0} />}
              </article>
              <article
                className={activeService === 1 ? "service-card active" : "service-card"}
                onClick={() => setActiveService(activeService === 1 ? null : 1)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveService(activeService === 1 ? null : 1);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={activeService === 1}
              >
                <span className="service-index">02</span>
                <div>
                  <p className="eyebrow">Quality assurance</p>
                  <h3>QA Testing</h3>
                  <p>
                    Methodical testing that catches issues early and keeps every experience polished
                    and dependable.
                  </p>
                </div>
                <ArrowUpRight size={20} />
                {activeService === 1 && <ServiceSimulation type={1} />}
              </article>
              <article
                className={activeService === 2 ? "service-card active" : "service-card"}
                onClick={() => setActiveService(activeService === 2 ? null : 2)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActiveService(activeService === 2 ? null : 2);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={activeService === 2}
              >
                <span className="service-index">03</span>
                <div>
                  <p className="eyebrow">Insight & clarity</p>
                  <h3>Data Analytics</h3>
                  <p>
                    Transforming raw information into clear, useful insights that support better
                    decisions.
                  </p>
                </div>
                <ArrowUpRight size={20} />
                {activeService === 2 && <ServiceSimulation type={2} />}
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading scroll-reveal" data-reveal>
            <p className="eyebrow">Projects</p>
            <h2 className="heading-scale">
              Projects built with
              <br />
              <em>purpose & precision.</em>
            </h2>
          </div>
          <div className="projects-grid scroll-reveal" data-reveal>
            {projectData.map((project) => (
              <button
                className="project-card"
                key={project.title}
                onClick={() => {
                  setSelectedProject(project);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                aria-label={`View ${project.title} project`}
              >
                <div className={`project-visual visual-${project.index}`}>
                  <span>{project.index}</span>
                  <strong>{project.title.slice(0, 1)}</strong>
                  <div className="project-lines" />
                </div>
                <div className="project-meta">
                  <span>{project.type}</span>
                  <span>{project.index} / 03</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="view-project">
                  View project <ArrowUpRight size={14} />
                </span>
              </button>
            ))}
          </div>
        </section>

        <section id="trainings" className="section trainings-section">
          <div className="section-heading scroll-reveal" data-reveal>
            <h2 className="heading-soft">
              Always learning.
              <br />
              <em>Always evolving.</em>
            </h2>
          </div>
          <div className="certificate-showcase scroll-reveal" data-reveal>
            <div
              className="certificate-fan"
              aria-label="Certificate preview. Flick left or right to browse."
              onPointerDown={(event) => {
                certificateDragStart.current = event.clientX;
                event.currentTarget.setPointerCapture(event.pointerId);
              }}
              onPointerUp={(event) => finishCertificateFlick(event.clientX)}
              onPointerCancel={() => {
                certificateDragStart.current = null;
              }}
            >
              {certificates.map((certificate, index) => (
                <button
                  key={certificate.title}
                  className={
                    activeCertificate === index ? "certificate-paper active" : "certificate-paper"
                  }
                  style={{ "--card-index": index } as CSSProperties}
                  onPointerDown={() => setActiveCertificate(index)}
                  onClick={() => setActiveCertificate(index)}
                  aria-label={`Show ${certificate.title}`}
                  aria-pressed={activeCertificate === index}
                >
                  <img src="/conie-lariego-logo.png" alt="" />
                  <span>Certificate of completion</span>
                  <strong>{certificate.title}</strong>
                  <small>{certificate.year} · Conie Lariego</small>
                </button>
              ))}
            </div>
            <div className="certificate-list">
              {certificates.map((certificate, index) => (
                <button
                  key={certificate.title}
                  className={activeCertificate === index ? "active" : ""}
                  onMouseEnter={() => setActiveCertificate(index)}
                  onFocus={() => setActiveCertificate(index)}
                  onClick={() => setActiveCertificate(index)}
                >
                  <span>0{index + 1}</span>
                  <div>
                    <strong>{certificate.title}</strong>
                    <small>{certificate.issuer}</small>
                  </div>
                  <em>{certificate.year}</em>
                </button>
              ))}
            </div>
          </div>

          <div className="training-carousel scroll-reveal" data-reveal>
            <div className="carousel-heading">
              <div>
                <p className="eyebrow">Professional growth</p>
                <h3>Workshops, events & training</h3>
              </div>
              <div className="carousel-controls">
                <button onClick={() => changeSlide(-1)} aria-label="Previous training">
                  ←
                </button>
                <span>0{trainingSlide + 1} / 05</span>
                <button onClick={() => changeSlide(1)} aria-label="Next training">
                  →
                </button>
              </div>
            </div>
            <div className="carousel-window">
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${trainingSlide * 100}%)` }}
              >
                {trainingSlides.map(([title, description], index) => (
                  <article className={`training-slide slide-${index + 1}`} key={title}>
                    <span>Training archive · 0{index + 1}</span>
                    <div className="slide-art">
                      <b>{String(index + 1).padStart(2, "0")}</b>
                      <i />
                    </div>
                    <div>
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="carousel-dots">
              {trainingSlides.map(([title], index) => (
                <button
                  key={title}
                  className={trainingSlide === index ? "active" : ""}
                  onClick={() => setTrainingSlide(index)}
                  aria-label={`Show ${title}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="scroll-reveal" data-reveal>
          <h2>
            Let’s create something
            <br />
            <em>meaningful together.</em>
          </h2>
        </div>
        <a className="contact-link" href="mailto:hello@conielariego.com">
          Start a conversation <ArrowUpRight size={20} />
        </a>
        <div className="footer-bottom">
          <span>© 2025 Conie Lariego</span>
          <button onClick={() => goTo("home")}>Back to top ↑</button>
        </div>
      </footer>
    </div>
  );
}
