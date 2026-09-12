"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
  ChevronLeft,
  ChevronRight,
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
} from "@/lib/content";

export default function Home() {
  const [projectIndex, setProjectIndex] = useState(0);

  /* ============================================================
     PROJECT DATA
     ------------------------------------------------------------
     Featured projects appear in the main carousel.
     All other projects automatically appear below it.
     ============================================================ */

  const featuredProjects = projects.filter((p) => p.featured);
  const additionalProjects = projects.filter((p) => !p.featured);

  const project =
    featuredProjects.length > 0
      ? featuredProjects[projectIndex % featuredProjects.length]
      : null;

  const nextProject = () =>
    setProjectIndex((i) =>
      featuredProjects.length > 0
        ? (i + 1) % featuredProjects.length
        : 0
    );

  const prevProject = () =>
    setProjectIndex((i) =>
      featuredProjects.length > 0
        ? (i - 1 + featuredProjects.length) % featuredProjects.length
        : 0
    );

  return (
    <>
      <Nav />

      <main>

        {/* ========================================================
            HERO
            ======================================================== */}

        <section className="hero" id="home">
          <div className="container hero-grid">

            {/* LEFT */}
            <div>
              <div className="eyebrow">
                <span className="pulse" />
                Electronics & Communication Engineering · VLSI Focus
              </div>

              <h1>CHARUNIVETHITHA S</h1>

              <p>Hardware Engineer.</p>

              <p className="hero-copy">
                I&apos;m{" "}
                <strong style={{ color: "white" }}>
                  Charunivethitha S
                </strong>{" "}
                — an Electronics and Communication Engineering student
                specializing in RTL design, FPGA-based prototyping, and
                VLSI architectures. My work focuses on pipelined hardware
                architectures for post-quantum cryptography and neural
                network accelerators, with exposure to SoC integration,
                hardware-software co-design, DFT, and RTL-to-GDSII flow.
              </p>

              <div className="actions">
                <a className="btn primary" href="#projects">
                  Explore my work
                  <ArrowDownRight size={16} />
                </a>

                <a className="btn" href="#contact">
                  Start a conversation
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="hero-socials">
                <a
                  href="https://www.linkedin.com/in/charunivethitha17"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={17} />
                </a>

                <a
                  href="https://github.com/Charunivethitha-S"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={17} />
                </a>

                <a
                  href="mailto:charunivethithas@gmail.com"
                  aria-label="Email"
                >
                  <Mail size={17} />
                </a>
              </div>
            </div>

            {/* HARDWARE + PHOTO */}
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

              {/* Hardware visual behind photo */}
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

              {/* Hardware grid */}
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

              {/* Circuit line */}
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

              {/* Photo */}
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

              {/* Chip marker */}
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

              {/* Circuit node */}
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


        {/* ========================================================
            MARQUEE
            ======================================================== */}

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


        {/* ========================================================
            01 EXECUTIVE SUMMARY
            ======================================================== */}

        <section className="section compact" id="summary">
          <div className="container">

            <div className="section-kicker">
              01 — executive summary
            </div>

            <div className="summary-box">
              <h2>
                Electronics engineering focused on
                <span> intelligent hardware.</span>
              </h2>

              <p>
                Electronics and Communication Engineering student focused
                on VLSI and semiconductor engineering, with hands-on
                experience in RTL design, FPGA-based hardware acceleration,
                Edge AI, neuromorphic computing and hardware security.
                My work centers on translating algorithms into efficient
                digital architectures, developing hardware IP and building
                practical FPGA prototypes.
              </p>
            </div>

          </div>
        </section>


        {/* ========================================================
            02 ABOUT
            ======================================================== */}

        <section className="section compact" id="about">
          <div className="container">

            <div
              className="about-strip"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(40px, 7vw, 100px)",
                alignItems: "stretch",
              }}
            >

              {/* LEFT */}
              <div>
                <div className="section-kicker">
                  02 — about
                </div>

                <h2>
                  Silicon-minded engineering
                  with an AI edge.
                </h2>
              </div>

              {/* RIGHT */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    lineHeight: 1.85,
                  }}
                >
                  I am an Electronics and Communication Engineering
                  student with a strong interest in VLSI and semiconductor
                  engineering. My technical journey focuses on connecting
                  digital design with intelligent computing, particularly
                  through RTL design, FPGA acceleration, Edge AI,
                  neuromorphic architectures and hardware security. I enjoy
                  taking an algorithm or computational idea and understanding
                  how it can be transformed into an efficient hardware
                  architecture. My work includes neural-network
                  accelerators, spiking neural-network implementations,
                  cryptographic hardware and FPGA-based systems. Through
                  academic projects, research and technical participation,
                  I have been building practical experience across Verilog,
                  FPGA development, hardware-software co-design and digital
                  system architecture. I am particularly interested in
                  opportunities where I can contribute to the design and
                  implementation of next-generation semiconductor and
                  intelligent hardware systems.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* ========================================================
            03 FEATURED PROJECTS
            ======================================================== */}

        <section className="section" id="projects">
          <div className="container">

            <SectionHeader
              kicker="03 — featured projects"
              title="Built in hardware."
              text="Selected work across VLSI, FPGA acceleration, Edge AI, neuromorphic computing and hardware security."
            />

            <div className="project-browser">

              {project && (
                <>
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
                            onClick={() => setProjectIndex(i)}
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
                </>
              )}

              {!project && (
                <div className="credential">
                  <p>No featured projects added yet.</p>
                </div>
              )}

            </div>


            {/* ====================================================
                ADDITIONAL / ACADEMIC PROJECTS

                Automatically displays every project where:
                featured: false
                ==================================================== */}

            {additionalProjects.length > 0 && (
              <div style={{ marginTop: "90px" }}>

                <div className="section-kicker">
                  academic & additional projects
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "20px",
                    marginTop: "28px",
                  }}
                >
                  {additionalProjects.map((project, index) => (
                    <ProjectCard
                      key={project.slug}
                      project={project}
                      index={index}
                    />
                  ))}
                </div>

              </div>
            )}

          </div>
        </section>


        {/* ========================================================
            04 RESEARCH
            ======================================================== */}

        <section className="section compact" id="research">
          <div className="container">

            <SectionHeader
              kicker="04 — research"
              title="Research with a hardware direction."
              text="Research work exploring low-latency cryptographic hardware and quantum-resistant embedded systems."
            />

            <div className="horizontal-cards">
              {publications.map((publication, i) => (
                <div
                  className="credential"
                  key={publication.title}
                >
                  <span className="mono">
                    PAPER {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3>{publication.title}</h3>

                  <p>{publication.abstract}</p>

                  <small>
                    {publication.venue} · {publication.year} ·{" "}
                    {publication.status}
                  </small>

                  {publication.paper_id && (
                    <small>
                      Paper ID: {publication.paper_id}
                    </small>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================
            05 EXPERIENCE
            ======================================================== */}

        <section className="section compact" id="experience">
          <div className="container">

            <SectionHeader
              kicker="05 — experience"
              title="Where I build and learn."
              text="Research and engineering experience that shaped my approach to hardware design."
            />

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

          </div>
        </section>


        {/* ========================================================
            06 CERTIFICATES
            ======================================================== */}

        <section className="section compact" id="certificates">
          <div className="container">

            <SectionHeader
              kicker="06 — certificates"
              title="Learning beyond the syllabus."
              text="Technical certifications, workshops and training relevant to VLSI, FPGA and hardware engineering."
            />

            <div className="horizontal-cards">

              {certificates.length > 0 ? (
                certificates.map((certificate, i) => (
                  <div
                    className="credential"
                    key={`${certificate.title}-${i}`}
                  >
                    <span className="mono">
                      CERTIFICATE{" "}
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3>{certificate.title}</h3>

                    <p>{certificate.issuer}</p>

                    <small>
                      {certificate.category} · {certificate.date}
                    </small>
                  </div>
                ))
              ) : (
                <div className="credential">
                  <span className="mono">
                    CERTIFICATES
                  </span>

                  <h3>Certificates will be added here.</h3>

                  <p>
                    Add your technical certifications, workshops and
                    training programs in the portfolio content file.
                  </p>
                </div>
              )}

            </div>

          </div>
        </section>


        {/* ========================================================
            07 HACKATHONS & EVENTS
            ======================================================== */}

        <section
          className="section compact"
          id="participation"
        >
          <div className="container">

            <SectionHeader
              kicker="07 — hackathons & technical participation"
              title="Beyond the classroom."
              text="Technical events, hackathons and collaborative engineering experiences."
            />

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

                  <h3>{e.title}</h3>

                  <p>{e.description}</p>

                  <small>
                    {e.organizer} · {e.date}
                  </small>

                  {e.role && (
                    <small>
                      {e.role}
                    </small>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================
            08 CONTACT
            ======================================================== */}

        <section
          className="section"
          id="contact"
        >
          <div className="container">

            <div className="contact-box">

              <div>
                <div className="section-kicker">
                  08 — contact
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
                  href="mailto:charunivethithas@gmail.com"
                >
                  Email me
                  <Mail size={15} />
                </a>

                <a
                  className="btn"
                  href="https://www.linkedin.com/in/charunivethitha17"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                  <ArrowUpRight size={15} />
                </a>

                <a
                  className="btn"
                  href="https://github.com/Charunivethitha-S"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <Github size={15} />
                </a>

              </div>

            </div>
          </div>
        </section>

      </main>


      {/* ==========================================================
          FOOTER
          ========================================================== */}

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
