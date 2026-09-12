"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import Nav from "@/components/Nav";
import HeroVisual from "@/components/HeroVisual";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";

import {
  projects,
  experiences,
  publications,
  certificates,
  events,
  achievements,
  skills,
} from "@/lib/content";

const workTabs = [
  "Experience",
  "Research",
  "Skills",
  "Certificates",
  "Events",
  "Achievements",
];

export default function Home() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Experience");

  const featuredProjects = projects.filter((p) => p.featured);

  const project =
    featuredProjects[projectIndex % featuredProjects.length];

  const nextProject = () =>
    setProjectIndex(
      (i) => (i + 1) % featuredProjects.length
    );

  const prevProject = () =>
    setProjectIndex(
      (i) =>
        (i - 1 + featuredProjects.length) %
        featuredProjects.length
    );

  return (
    <>
      <Nav />

      <main>
        {/* ================= HERO ================= */}
        <section className="hero" id="home">
          <div className="container hero-grid">

            {/* LEFT SIDE */}
            <div>
              <div className="eyebrow">
                <span className="pulse" />
                Electronics & Communication Engineering · VLSI Focus
              </div>

              <h1>
                Hardware
                <br />
                <span>that thinks.</span>
              </h1>

              <p className="hero-copy">
                I&apos;m{" "}
                <strong style={{ color: "white" }}>
                  Charunivethitha S
                </strong>{" "}
                — an ECE engineer focused on VLSI, RTL, FPGA computing,
                Edge AI, neuromorphic architectures and hardware security.
              </p>

              <div className="actions">
                <a className="btn primary" href="#work">
                  Explore my work
                  <ArrowDownRight size={16} />
                </a>

                <a className="btn" href="#contact">
                  Start a conversation
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="hero-socials">
                <a href="#" aria-label="LinkedIn">
                  <Linkedin size={17} />
                </a>

                <a href="#" aria-label="GitHub">
                  <Github size={17} />
                </a>

                <a
                  href="mailto:your-email@example.com"
                  aria-label="Email"
                >
                  <Mail size={17} />
                </a>
              </div>
            </div>


            {/* ================= HERO HARDWARE + PHOTO ================= */}
            <div
              className="hero-side"
              style={{
                position: "relative",
                minHeight: "470px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >

              {/* HARDWARE VISUAL — BEHIND THE PHOTO */}
              <div
                style={{
                  position: "absolute",
                  inset: "5% -8% 0 -8%",
                  zIndex: 0,
                  pointerEvents: "none",
                  opacity: 0.95,
                  transform: "scale(1.02)",
                }}
              >
                <HeroVisual />
              </div>


              {/* SUBTLE HARDWARE GRID / CIRCUIT BACKGROUND */}
              <div
                style={{
                  position: "absolute",
                  width: "88%",
                  height: "82%",
                  right: "2%",
                  top: "9%",
                  zIndex: 0,
                  pointerEvents: "none",
                  border: "1px solid rgba(91, 224, 255, 0.18)",
                  borderRadius: "28px",
                  backgroundImage:
                    "linear-gradient(rgba(91,224,255,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(91,224,255,0.055) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                  transform: "rotate(-2deg)",
                  boxShadow:
                    "0 0 80px rgba(38, 196, 255, 0.08)",
                }}
              />


              {/* CIRCUIT LINE — BEHIND PHOTO */}
              <div
                style={{
                  position: "absolute",
                  width: "70%",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(82,220,255,0.7), transparent)",
                  right: "0",
                  top: "48%",
                  transform: "rotate(-14deg)",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              />


              {/* PHOTO — FRONT LAYER */}
              <div
                className="portrait-frame"
                style={{
                  position: "relative",
                  zIndex: 5,
                  width: "310px",
                  maxWidth: "78%",
                  transform: "rotate(-3deg)",
                  boxShadow:
                    "0 25px 70px rgba(0,0,0,0.5), 0 0 35px rgba(61,210,255,0.12)",
                }}
              >

                <div className="portrait-glow" />

                <img
                  src="/images/profile/charunivethitha.jpg"
                  alt="Charunivethitha S"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    display: "block",
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />

                {/* PHOTO LABEL */}
                <div
                  className="portrait-tag"
                  style={{
                    position: "relative",
                    zIndex: 4,
                  }}
                >
                  ECE / VLSI
                  <br />
                  <span>HARDWARE ENGINEER</span>
                </div>
              </div>


              {/* SMALL CHIP MARKER */}
              <div
                style={{
                  position: "absolute",
                  zIndex: 6,
                  right: "7%",
                  top: "18%",
                  width: "12px",
                  height: "12px",
                  border: "2px solid rgba(91,224,255,0.9)",
                  boxShadow:
                    "0 0 14px rgba(91,224,255,0.65)",
                  transform: "rotate(45deg)",
                  pointerEvents: "none",
                }}
              />

              {/* CIRCUIT NODE */}
              <div
                style={{
                  position: "absolute",
                  zIndex: 6,
                  left: "8%",
                  bottom: "20%",
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#61e6ff",
                  boxShadow:
                    "0 0 14px rgba(97,230,255,0.8)",
                  pointerEvents: "none",
                }}
              />

            </div>
          </div>

          <div className="scroll-note">
            SCROLL TO EXPLORE ↓
          </div>
        </section>


        {/* ================= MARQUEE ================= */}
        <div className="marquee">
          <div className="marquee-track">
            <span>VLSI</span>
            <span>✦</span>
            <span>RTL DESIGN</span>
            <span>✦</span>
            <span>FPGA</span>
            <span>✦</span>
            <span>EDGE AI</span>
            <span>✦</span>
            <span>NEUROMORPHIC COMPUTING</span>
            <span>✦</span>
            <span>HARDWARE SECURITY</span>
            <span>✦</span>
            <span>VLSI</span>
            <span>✦</span>
            <span>RTL DESIGN</span>
            <span>✦</span>
          </div>
        </div>


        {/* ================= ABOUT ================= */}
        <section className="section compact" id="about">
          <div className="container about-strip">
            <div>
              <div className="section-kicker">
                01 — about
              </div>

              <h2>
                Silicon-minded engineering with an AI edge.
              </h2>
            </div>

            <p>
              I enjoy translating algorithms into datapaths,
              architectures and FPGA prototypes — from RTL and
              digital design through hardware acceleration and
              security.
            </p>
          </div>
        </section>


        {/* ================= PROJECTS ================= */}
        <section className="section" id="work">
          <div className="container">

            <SectionHeader
              kicker="02 — selected work"
              title="Built in hardware."
              text="Browse the work without a long page. Use the controls to move through projects."
            />

            <div className="project-browser">

              <div className="project-controls">

                <button
                  onClick={prevProject}
                  aria-label="Previous project"
                >
                  <ChevronLeft size={18} />
                </button>

                <div>
                  <span className="mono">
                    PROJECT{" "}
                    {String(projectIndex + 1).padStart(2, "0")}
                    {" / "}
                    {String(featuredProjects.length).padStart(2, "0")}
                  </span>

                  <div className="project-dots">
                    {featuredProjects.map((p, i) => (
                      <button
                        key={p.slug}
                        className={
                          i === projectIndex ? "active" : ""
                        }
                        onClick={() =>
                          setProjectIndex(i)
                        }
                        aria-label={p.title}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={nextProject}
                  aria-label="Next project"
                >
                  <ChevronRight size={18} />
                </button>

              </div>

              <ProjectCard
                project={project}
                index={projectIndex}
              />

            </div>
          </div>
        </section>


        {/* ================= ENGINEERING JOURNEY ================= */}
        <section
          className="section compact"
          id="journey"
        >
          <div className="container">

            <div className="tab-shell">

              <div className="tab-head">

                <div>
                  <div className="section-kicker">
                    03 — engineering journey
                  </div>

                  <h2>
                    Everything in one workspace.
                  </h2>
                </div>

                <div className="tab-scroller">
                  {workTabs.map((tab) => (
                    <button
                      key={tab}
                      className={
                        activeTab === tab
                          ? "selected"
                          : ""
                      }
                      onClick={() =>
                        setActiveTab(tab)
                      }
                    >
                      {tab}
                    </button>
                  ))}
                </div>

              </div>


              <div className="tab-panel">

                {/* EXPERIENCE */}
                {activeTab === "Experience" && (
                  <div className="timeline">
                    {experiences.map((e) => (
                      <div
                        className="timeline-item"
                        key={e.organization}
                      >
                        <div className="date">
                          {e.start_date} —{" "}
                          {e.end_date || "Present"}
                        </div>

                        <h3>{e.organization}</h3>

                        <div
                          style={{
                            fontWeight: 700,
                            marginBottom: 10,
                          }}
                        >
                          {e.role}
                        </div>

                        <p>{e.description}</p>

                        <div className="tags">
                          {e.technologies.map((t) => (
                            <span
                              className="tag"
                              key={t}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}


                {/* RESEARCH */}
                {activeTab === "Research" && (
                  <div className="research-list">
                    {publications.map((p) => (
                      <article
                        className="research"
                        key={p.title}
                      >
                        <div className="research-meta">
                          <span>{p.status}</span>
                          <span>{p.venue}</span>
                          <span>
                            {p.paper_id
                              ? `Paper ID ${p.paper_id}`
                              : p.year}
                          </span>
                        </div>

                        <h3>{p.title}</h3>

                        <p>{p.abstract}</p>

                        {p.pdf_url && (
                          <a
                            className="btn"
                            href={p.pdf_url}
                          >
                            View paper
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </article>
                    ))}
                  </div>
                )}


                {/* SKILLS */}
                {activeTab === "Skills" && (
                  <div className="skill-cloud">
                    {skills.map((s) => (
                      <span
                        className="skill"
                        key={s}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}


                {/* CERTIFICATES */}
                {activeTab === "Certificates" && (
                  <div className="horizontal-cards">
                    {certificates.map((c, i) => (
                      <div
                        className="credential"
                        key={i}
                      >
                        <span className="mono">
                          CERT{" "}
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <Sparkles size={18} />

                        <h3>{c.title}</h3>

                        <p>{c.issuer}</p>

                        <small>
                          {c.category} · {c.date}
                        </small>
                      </div>
                    ))}
                  </div>
                )}


                {/* EVENTS */}
                {activeTab === "Events" && (
                  <div className="horizontal-cards">
                    {events.map((e, i) => (
                      <div
                        className="credential"
                        key={e.title}
                      >
                        <span className="mono">
                          EVENT{" "}
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <Sparkles size={18} />

                        <h3>{e.title}</h3>

                        <p>{e.description}</p>

                        <small>
                          {e.organizer} · {e.date}
                        </small>
                      </div>
                    ))}
                  </div>
                )}


                {/* ACHIEVEMENTS */}
                {activeTab === "Achievements" && (
                  <div className="achievement-grid">
                    {achievements.map((a) => (
                      <div
                        className="achievement"
                        key={a.label}
                      >
                        <b>{a.value}</b>
                        <strong>{a.label}</strong>
                        <span>{a.detail}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </div>
        </section>


        {/* ================= CONTACT ================= */}
        <section
          className="section"
          id="contact"
        >
          <div className="container">

            <div className="contact-box">

              <div>
                <div className="section-kicker">
                  04 — contact
                </div>

                <h2>
                  Let&apos;s build
                  <br />
                  something real.
                </h2>

                <p>
                  Interested in VLSI, semiconductor engineering,
                  FPGA acceleration, AI hardware or research?
                  I&apos;d be glad to connect.
                </p>
              </div>

              <div className="actions">

                <a
                  className="btn primary"
                  href="mailto:your-email@example.com"
                >
                  Email me
                  <Mail size={15} />
                </a>

                <a
                  className="btn"
                  href="#"
                >
                  LinkedIn
                  <ArrowUpRight size={15} />
                </a>

              </div>

            </div>
          </div>
        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="container footer-row">
          <span>
            © {new Date().getFullYear()} CHARUNIVETHITHA S
          </span>

          <span className="mono">
            VLSI · RTL · FPGA · EDGE AI · SECURITY
          </span>
        </div>
      </footer>
    </>
  );
}
