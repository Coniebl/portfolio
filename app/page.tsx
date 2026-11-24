"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  certificates,
  navItems,
  profile,
  projectData,
  services,
  skillGroups,
  timelineItems,
  trainingSlides,
} from "@/data/portfolio";

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
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
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
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
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
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const MenuIcon = ({ size = 20 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M4 7h16M4 12h16M4 17h16"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = ({ size = 20 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="m6 6 12 12M18 6 6 18"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const CopyIcon = ({ size = 14 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <rect
      x="9"
      y="9"
      width="11"
      height="11"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="1.7"
    />
    <path
      d="M5 15H4a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 4 3h9a1.5 1.5 0 0 1 1.5 1.5v1"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const CheckIcon = ({ size = 14 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="m5 12.5 4.5 4.5L19 7.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DownloadIcon = ({ size = 15 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M12 4v11m0 0-4-4m4 4 4-4M5 19h14"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function GoldCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      size: number;
    };
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
        context.arc(
          particle.x,
          particle.y,
          particle.size * particle.life,
          0,
          Math.PI * 2,
        );
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
        {[
          "Responsive layout",
          "Keyboard access",
          "Performance",
          "Cross-browser",
        ].map((test, index) => (
          <div
            key={test}
            style={{ "--test-delay": `${index * 0.25}s` } as CSSProperties}
          >
            <span>✓</span>
            <strong>{test}</strong>
            <small>Passed</small>
          </div>
        ))}
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
              {
                "--bar-height": `${height}%`,
                "--bar-delay": `${index * 0.1}s`,
              } as CSSProperties
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
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectData)[number] | null
  >(null);
  const [activeCertificate, setActiveCertificate] = useState(0);
  const [trainingSlide, setTrainingSlide] = useState(0);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [carouselPaused, setCarouselPaused] = useState(false);
  const [activePhotoBySlide, setActivePhotoBySlide] = useState<
    Record<number, number>
  >({});
  const [lightbox, setLightbox] = useState<{
    title: string;
    images: string[];
    index: number;
  } | null>(null);
  const certificateDragStart = useRef<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as
      | "light"
      | "dark"
      | null;
    const resolved: "light" | "dark" =
      saved === "light" || saved === "dark"
        ? saved
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.dataset.theme = resolved;
    const frame = window.requestAnimationFrame(() => {
      setTheme(resolved);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.links.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.links.email}`;
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
  };

  useEffect(() => {
    const updateActiveSection = () => {
      setHasScrolled(window.scrollY > 80);
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
    if (carouselPaused || lightbox) return;
    const currentSlidePhotos = trainingSlides[trainingSlide]?.images.length ?? 1;
    if (currentSlidePhotos <= 1) return;
    const flipTimer = window.setInterval(() => {
      setActivePhotoBySlide((prev) => ({
        ...prev,
        [trainingSlide]: ((prev[trainingSlide] ?? 0) + 1) % currentSlidePhotos,
      }));
    }, 2800);
    return () => window.clearInterval(flipTimer);
  }, [carouselPaused, lightbox, trainingSlide]);

  useEffect(() => {
    if (carouselPaused || lightbox) return;
    const timer = window.setInterval(() => {
      setTrainingSlide((current) => (current + 1) % trainingSlides.length);
    }, 11500);
    return () => window.clearInterval(timer);
  }, [carouselPaused, lightbox]);

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
      } else if (event.key === "ArrowRight") {
        setLightbox((curr) =>
          curr
            ? { ...curr, index: (curr.index + 1) % curr.images.length }
            : null,
        );
      } else if (event.key === "ArrowLeft") {
        setLightbox((curr) =>
          curr
            ? {
                ...curr,
                index:
                  (curr.index - 1 + curr.images.length) % curr.images.length,
              }
            : null,
        );
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const changeSlide = (direction: number) => {
    setTrainingSlide(
      (current) =>
        (current + direction + trainingSlides.length) % trainingSlides.length,
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
          <button
            className="back-link"
            onClick={() => setSelectedProject(null)}
          >
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
                <span>Stack</span>
                <strong>{selectedProject.tags.join(" · ")}</strong>
              </div>
            </div>
            <div className="project-detail-actions">
              {selectedProject.liveUrl ? (
                <a
                  className="primary-button"
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live demo <ArrowUpRight size={16} />
                </a>
              ) : (
                <span className="secondary-button is-placeholder">
                  Live demo · Coming soon
                </span>
              )}
              {selectedProject.githubUrl ? (
                <a
                  className="secondary-button"
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View source <ArrowUpRight size={15} />
                </a>
              ) : (
                <span className="secondary-button is-placeholder">
                  Source code · Coming soon
                </span>
              )}
            </div>
          </div>
          <div
            className={`project-detail-visual visual-${selectedProject.index}${selectedProject.image ? " has-image" : ""} scroll-reveal reveal-right`}
            data-reveal
          >
            {selectedProject.image ? (
              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} website preview`}
                className="project-detail-screenshot"
              />
            ) : (
              <>
                <span>Project preview · Placeholder</span>
                <strong>{selectedProject.title.slice(0, 1)}</strong>
                <div className="project-lines" />
                <p>Screenshot coming soon</p>
              </>
            )}
          </div>
          <section className="project-case-study scroll-reveal" data-reveal>
            <h2>{selectedProject.caseStudy.headline}</h2>
            <div className="case-study-grid">
              <div className="case-study-block">
                <span>The Challenge</span>
                <p>{selectedProject.caseStudy.challenge}</p>
              </div>
              <div className="case-study-block">
                <span>The Solution</span>
                <p>{selectedProject.caseStudy.solution}</p>
              </div>
            </div>
            <div className="case-study-highlights">
              <span>Key Engineering Highlights</span>
              <ul>
                {selectedProject.caseStudy.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="case-study-outcome">
              <span>Outcome</span>
              <p>{selectedProject.caseStudy.outcome}</p>
            </div>
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

        <nav
          className={menuOpen ? "main-nav open" : "main-nav"}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              className={
                activeSection === item.id ? "nav-link active" : "nav-link"
              }
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
            <p className="availability-pill">
              <i aria-hidden="true" />
              {profile.availability}
            </p>
            <p className="hello">Hi! I am</p>
            <h1 className="hero-name">
              <span className="hero-name-text">
                Conie
                <br className="mobile-break" /> Lariego<i>,</i>
              </span>
              <b className="name-spark" aria-hidden="true" />
            </h1>
            <p className="hero-role">{profile.roleHeadline}</p>
            <p className="hero-description">{profile.heroSummary}</p>
            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => goTo("projects")}
              >
                Explore my projects <ArrowUpRight />
              </button>
              {profile.links.resumeUrl ? (
                <a
                  className="secondary-button"
                  href={profile.links.resumeUrl}
                  download="Conie-Lariego-Resume.pdf"
                >
                  <DownloadIcon /> Download Resume
                </a>
              ) : (
                <span
                  className="secondary-button is-placeholder"
                  title="Drop resume PDF into public/resume.pdf and update data/portfolio.ts"
                >
                  <DownloadIcon /> Resume (PDF soon)
                </span>
              )}
            </div>
            <div className="hero-social-row" aria-label="Quick contact links">
              {profile.links.github ? (
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <ArrowUpRight size={13} />
                </a>
              ) : (
                <span className="social-placeholder">GitHub · Adding soon</span>
              )}
              <span className="social-dot" aria-hidden="true">
                ·
              </span>
              {profile.links.linkedin ? (
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <ArrowUpRight size={13} />
                </a>
              ) : (
                <span className="social-placeholder">
                  LinkedIn · Adding soon
                </span>
              )}
              <span className="social-dot" aria-hidden="true">
                ·
              </span>
              <button
                type="button"
                className="inline-copy-link"
                onClick={copyEmail}
              >
                {copiedEmail ? (
                  <>
                    <CheckIcon size={13} /> Email copied
                  </>
                ) : (
                  <>
                    <CopyIcon size={13} /> {profile.links.email}
                  </>
                )}
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
              <span>Portrait · {profile.portraitYear}</span>
              <span>
                Based in {profile.location} ({profile.timezone})
              </span>
            </div>
          </div>

          <button
            type="button"
            className={
              hasScrolled || activeSection !== "home"
                ? "hero-scroll-cue is-hidden"
                : "hero-scroll-cue"
            }
            onClick={() => goTo("about")}
            aria-hidden={hasScrolled || activeSection !== "home"}
            tabIndex={hasScrolled || activeSection !== "home" ? -1 : 0}
          >
            Get to know me <ArrowDown size={15} />
          </button>
        </section>

        <section id="about" className="section about-section">
          <div className="section-heading scroll-reveal" data-reveal>
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
              <p className="lead">{profile.aboutLead}</p>
              {profile.aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="stats-panel">
              {profile.stats.map((stat) => (
                <div key={stat.lines.join("-")}>
                  <strong>{stat.value}</strong>
                  <span>
                    {stat.lines[0]}
                    <br />
                    {stat.lines[1]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="recognition-row scroll-reveal" data-reveal>
            {profile.recognitions.map((item) => (
              <div className="recognition-card" key={item.title}>
                <strong>{item.title}</strong>
                <small>{item.detail}</small>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-heading scroll-reveal" data-reveal>
            <h2 className="heading-slide">
              Education, leadership
              <br />
              <em>&amp; hands-on growth.</em>
            </h2>
          </div>

          <div className="timeline-list scroll-reveal" data-reveal>
            {timelineItems.map((item) => (
              <article
                key={`${item.category}-${item.title}`}
                className={
                  item.isPlaceholder
                    ? "timeline-item is-placeholder"
                    : "timeline-item"
                }
              >
                <div className="timeline-meta">
                  <span className="timeline-category">{item.category}</span>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <div className="timeline-body">
                  <h3>{item.title}</h3>
                  <p className="timeline-org">
                    {item.organization}
                    {item.location ? ` · ${item.location}` : ""}
                  </p>
                  <ul className="timeline-highlights">
                    {item.highlights.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-heading scroll-reveal" data-reveal>
            <h2 className="heading-slide">
              Ideas, thoughtfully
              <br />
              <em>brought to life.</em>
            </h2>
          </div>

          <div className="services-layout scroll-reveal" data-reveal>
            <div className="skill-intro">
              <p className="lead">
                I combine technical craft with an empathetic, problem-solving
                mindset.
              </p>

              {skillGroups.map((group) => (
                <div className="skill-group" key={group.label}>
                  <p
                    className={
                      group.technical
                        ? "skill-label technical-label"
                        : "skill-label"
                    }
                  >
                    {group.label}
                  </p>
                  <div
                    className={
                      group.technical
                        ? "skills-list technical-skills"
                        : "skills-list"
                    }
                  >
                    {group.items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="service-list">
              {services.map((service, index) => (
                <article
                  key={service.index}
                  className={
                    activeService === index
                      ? "service-card active"
                      : "service-card"
                  }
                  onClick={() =>
                    setActiveService(activeService === index ? null : index)
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveService(activeService === index ? null : index);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={activeService === index}
                >
                  <span className="service-index">{service.index}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <ArrowUpRight size={20} />
                  {activeService === index && (
                    <ServiceSimulation type={service.simulationType} />
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading scroll-reveal" data-reveal>
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
                aria-label={`View ${project.title} case study`}
              >
                <div
                  className={`project-visual visual-${project.index}${project.logo ? " has-logo" : ""}`}
                >
                  {project.logo ? (
                    <>
                      <span>{project.index}</span>
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="project-logo-fill"
                      />
                    </>
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="project-screenshot"
                    />
                  ) : (
                    <>
                      <span>{project.index}</span>
                      <strong>{project.title.slice(0, 1)}</strong>
                      <div className="project-lines" />
                    </>
                  )}
                </div>
                <div className="project-meta">
                  <span>{project.type}</span>
                  <span>
                    {project.index} /{" "}
                    {String(projectData.length).padStart(2, "0")}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <span className="view-project">
                  Read case study <ArrowUpRight size={14} />
                </span>
              </button>
            ))}
          </div>
          <div className="projects-more scroll-reveal" data-reveal>
            {profile.links.github ? (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore all 10+ projects on GitHub <ArrowUpRight size={15} />
              </a>
            ) : (
              <span>
                More projects &amp; GitHub repositories link coming soon
              </span>
            )}
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
                    activeCertificate === index
                      ? "certificate-paper active"
                      : "certificate-paper"
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
                <div
                  key={certificate.title}
                  className={
                    activeCertificate === index
                      ? "certificate-row active"
                      : "certificate-row"
                  }
                >
                  <button
                    className={activeCertificate === index ? "active" : ""}
                    onMouseEnter={() => setActiveCertificate(index)}
                    onFocus={() => setActiveCertificate(index)}
                    onClick={() => setActiveCertificate(index)}
                  >
                    <span>0{index + 1}</span>
                    <div>
                      <strong>{certificate.title}</strong>
                      <small>{certificate.summary}</small>
                      <small className="certificate-issuer">
                        {certificate.issuer}
                      </small>
                    </div>
                    <em>{certificate.year}</em>
                  </button>
                  {certificate.credentialUrl && (
                    <a
                      className="certificate-verify"
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Verify credential <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            className="training-carousel scroll-reveal"
            data-reveal
            onMouseEnter={() => setCarouselPaused(true)}
            onMouseLeave={() => setCarouselPaused(false)}
          >
            <div className="carousel-heading">
              <div>
                <h3>Workshops, events &amp; training</h3>
              </div>
              <div className="carousel-controls">
                <button
                  onClick={() => changeSlide(-1)}
                  aria-label="Previous training"
                >
                  ←
                </button>
                <span>
                  {String(trainingSlide + 1).padStart(2, "0")} /{" "}
                  {String(trainingSlides.length).padStart(2, "0")}
                </span>
                <button
                  onClick={() => changeSlide(1)}
                  aria-label="Next training"
                >
                  →
                </button>
              </div>
            </div>
            <div className="carousel-window">
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${trainingSlide * 100}%)` }}
              >
                {trainingSlides.map((slide, index) => {
                  const activeIdx =
                    (activePhotoBySlide[index] ?? 0) % slide.images.length;
                  const activePhoto = slide.images[activeIdx];
                  const hasMultiple = slide.images.length > 1;
                  const allSrcs = slide.images.map((item) => item.src);

                  return (
                    <article
                      className={`training-slide has-gallery slide-${(index % 5) + 1}`}
                      key={slide.title}
                    >
                      <div
                        className={
                          hasMultiple
                            ? "training-spotlight-layout"
                            : "training-spotlight-layout single-photo"
                        }
                      >
                        <button
                          type="button"
                          className="spotlight-stage"
                          onClick={() =>
                            setLightbox({
                              title: slide.title,
                              images: allSrcs,
                              index: activeIdx,
                            })
                          }
                          aria-label={`Expand ${slide.title} photo ${activeIdx + 1} of ${slide.images.length}`}
                        >
                          <img
                            src={activePhoto.src}
                            alt=""
                            aria-hidden="true"
                            className="spotlight-backdrop"
                          />
                          <img
                            key={activePhoto.src}
                            src={activePhoto.src}
                            alt={`${slide.title} — photo ${activeIdx + 1}`}
                            className="spotlight-img"
                          />
                          <span className="spotlight-counter">
                            {String(activeIdx + 1).padStart(2, "0")} /{" "}
                            {String(slide.images.length).padStart(2, "0")}
                          </span>
                        </button>

                        {hasMultiple && (
                          <div
                            className="spotlight-thumbs"
                            role="tablist"
                            aria-label={`${slide.title} photos`}
                          >
                            {slide.images.map((photo, imgIndex) => (
                              <button
                                key={photo.src}
                                type="button"
                                role="tab"
                                aria-selected={activeIdx === imgIndex}
                                className={
                                  activeIdx === imgIndex
                                    ? "spotlight-thumb active"
                                    : "spotlight-thumb"
                                }
                                onMouseEnter={() =>
                                  setActivePhotoBySlide((prev) => ({
                                    ...prev,
                                    [index]: imgIndex,
                                  }))
                                }
                                onClick={() =>
                                  setActivePhotoBySlide((prev) => ({
                                    ...prev,
                                    [index]: imgIndex,
                                  }))
                                }
                                aria-label={`Focus ${slide.title} photo ${imgIndex + 1}`}
                              >
                                <img
                                  src={photo.src}
                                  alt=""
                                  style={{
                                    objectPosition: photo.position ?? "center",
                                  }}
                                  loading="lazy"
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="training-slide-copy">
                        <span className="training-meta-tag">
                          {slide.organizer} · {slide.year}
                        </span>
                        <h4>{slide.title}</h4>
                        <p>{slide.description}</p>
                        <small className="training-photo-hint">
                          {slide.images.length}{" "}
                          {slide.images.length === 1 ? "photo" : "photos"} ·{" "}
                          {hasMultiple
                            ? "Hover or tap thumbnails · Click photo to expand"
                            : "Click photo to expand"}
                        </small>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
            <div className="carousel-dots">
              {trainingSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  className={trainingSlide === index ? "active" : ""}
                  onClick={() => setTrainingSlide(index)}
                  aria-label={`Show ${slide.title}`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {lightbox && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightbox.title} photo gallery`}
          onClick={() => setLightbox(null)}
        >
          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="lightbox-header">
              <div>
                <strong>{lightbox.title}</strong>
                <span>
                  {lightbox.index + 1} / {lightbox.images.length}
                </span>
              </div>
              <button
                type="button"
                className="lightbox-close"
                onClick={() => setLightbox(null)}
                aria-label="Close photo viewer"
              >
                <CloseIcon size={18} />
              </button>
            </div>
            <div className="lightbox-stage">
              {lightbox.images.length > 1 && (
                <button
                  type="button"
                  className="lightbox-nav prev"
                  onClick={() =>
                    setLightbox((curr) =>
                      curr
                        ? {
                            ...curr,
                            index:
                              (curr.index - 1 + curr.images.length) %
                              curr.images.length,
                          }
                        : null,
                    )
                  }
                  aria-label="Previous photo"
                >
                  ←
                </button>
              )}
              <img
                src={lightbox.images[lightbox.index]}
                alt={`${lightbox.title} — photo ${lightbox.index + 1}`}
              />
              {lightbox.images.length > 1 && (
                <button
                  type="button"
                  className="lightbox-nav next"
                  onClick={() =>
                    setLightbox((curr) =>
                      curr
                        ? {
                            ...curr,
                            index: (curr.index + 1) % curr.images.length,
                          }
                        : null,
                    )
                  }
                  aria-label="Next photo"
                >
                  →
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <footer>
        <div className="footer-intro scroll-reveal" data-reveal>
          <p className="footer-availability">{profile.availability}</p>
          <h2>
            Let’s create something
            <br />
            <em>meaningful together.</em>
          </h2>
        </div>
        <div className="footer-contact">
          <a
            className="contact-link"
            href={`mailto:${profile.links.email}`}
          >
            Start a conversation <ArrowUpRight size={20} />
          </a>
          <div className="footer-email-row">
            <span>{profile.links.email}</span>
            <button
              type="button"
              className="copy-email-btn"
              onClick={copyEmail}
              aria-label="Copy email address"
            >
              {copiedEmail ? (
                <>
                  <CheckIcon size={13} /> Copied
                </>
              ) : (
                <>
                  <CopyIcon size={13} /> Copy email
                </>
              )}
            </button>
          </div>
          <div className="footer-social-links">
            {profile.links.linkedin ? (
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <ArrowUpRight size={13} />
              </a>
            ) : (
              <span className="social-placeholder">LinkedIn (soon)</span>
            )}
            {profile.links.github ? (
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <ArrowUpRight size={13} />
              </a>
            ) : (
              <span className="social-placeholder">GitHub (soon)</span>
            )}
            {profile.links.resumeUrl ? (
              <a
                href={profile.links.resumeUrl}
                download="Conie-Lariego-Resume.pdf"
              >
                Resume PDF <DownloadIcon size={13} />
              </a>
            ) : (
              <span className="social-placeholder">Resume PDF (soon)</span>
            )}
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {profile.displayName} ·{" "}
            {profile.location}
          </span>
          <button onClick={() => goTo("home")}>Back to top ↑</button>
        </div>
      </footer>
    </div>
  );
}
