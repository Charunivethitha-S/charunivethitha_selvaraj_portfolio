"use client";
import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Mail, Github, Linkedin, ExternalLink, ChevronLeft, ChevronRight, Cpu, Sparkles } from "lucide-react";
import Nav from "@/components/Nav";
import HeroVisual from "@/components/HeroVisual";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects, experiences, publications, certificates, events, achievements, skills } from "@/lib/content";

const workTabs = ["Experience", "Research", "Skills", "Certificates", "Events", "Achievements"];

export default function Home() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("Experience");
  const project = projects.filter(p => p.featured)[projectIndex % projects.filter(p => p.featured).length];
  const nextProject = () => setProjectIndex(i => (i + 1) % projects.filter(p => p.featured).length);
  const prevProject = () => setProjectIndex(i => (i - 1 + projects.filter(p => p.featured).length) % projects.filter(p => p.featured).length);

  return <>
    <Nav />
    <main>
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow"><span className="pulse"/> Electronics & Communication Engineering · VLSI Focus</div>
            <h1>Hardware<br/><span>that thinks.</span></h1>
            <p className="hero-copy">I&apos;m <strong style={{color:"white"}}>Charunivethitha S</strong> — an ECE engineer focused on VLSI, RTL, FPGA computing, Edge AI, neuromorphic architectures and hardware security.</p>
            <div className="actions"><a className="btn primary" href="#work">Explore my work <ArrowDownRight size={16}/></a><a className="btn" href="#contact">Start a conversation <ArrowUpRight size={16}/></a></div>
            <div className="hero-socials"><a href="#" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="#" aria-label="GitHub"><Github size={17}/></a><a href="mailto:your-email@example.com" aria-label="Email"><Mail size={17}/></a></div>
          </div>
          <div className="hero-side"><div className="portrait-frame"><div className="portrait-glow"/><img src="/images/profile/charunivethitha.jpg" alt="Charunivethitha S"/><div className="portrait-tag">ECE / VLSI<br/><span>HARDWARE ENGINEER</span></div></div><HeroVisual /></div>
        </div>
        <div className="scroll-note">SCROLL TO EXPLORE ↓</div>
      </section>

      <div className="marquee"><div className="marquee-track"><span>VLSI</span><span>✦</span><span>RTL DESIGN</span><span>✦</span><span>FPGA</span><span>✦</span><span>EDGE AI</span><span>✦</span><span>NEUROMORPHIC COMPUTING</span><span>✦</span><span>HARDWARE SECURITY</span><span>✦</span><span>VLSI</span><span>✦</span><span>RTL DESIGN</span><span>✦</span></div></div>

      <section className="section compact" id="about"><div className="container about-strip"><div><div className="section-kicker">01 — about</div><h2>Silicon-minded engineering with an AI edge.</h2></div><p>I enjoy translating algorithms into datapaths, architectures and FPGA prototypes — from RTL and digital design through hardware acceleration and security.</p></div></section>

      <section className="section" id="work"><div className="container"><SectionHeader kicker="02 — selected work" title="Built in hardware." text="Browse the work without a long page. Use the controls to move through projects."/>
        <div className="project-browser"><div className="project-controls"><button onClick={prevProject} aria-label="Previous project"><ChevronLeft size={18}/></button><div><span className="mono">PROJECT {String(projectIndex+1).padStart(2,"0")} / {String(projects.filter(p=>p.featured).length).padStart(2,"0")}</span><div className="project-dots">{projects.filter(p=>p.featured).map((p,i)=><button key={p.slug} className={i===projectIndex?"active":""} onClick={()=>setProjectIndex(i)} aria-label={p.title}/>)}</div></div><button onClick={nextProject} aria-label="Next project"><ChevronRight size={18}/></button></div><ProjectCard project={project} index={projectIndex}/></div>
      </div></section>

      <section className="section compact" id="journey"><div className="container"><div className="tab-shell"><div className="tab-head"><div><div className="section-kicker">03 — engineering journey</div><h2>Everything in one workspace.</h2></div><div className="tab-scroller">{workTabs.map(tab=><button key={tab} className={activeTab===tab?"selected":""} onClick={()=>setActiveTab(tab)}>{tab}</button>)}</div></div>
        <div className="tab-panel">
          {activeTab==="Experience" && <div className="timeline">{experiences.map(e=><div className="timeline-item" key={e.organization}><div className="date">{e.start_date} — {e.end_date || "Present"}</div><h3>{e.organization}</h3><div style={{fontWeight:700,marginBottom:10}}>{e.role}</div><p>{e.description}</p><div className="tags">{e.technologies.map(t=><span className="tag" key={t}>{t}</span>)}</div></div>)}</div>}
          {activeTab==="Research" && <div className="research-list">{publications.map(p=><article className="research" key={p.title}><div className="research-meta"><span>{p.status}</span><span>{p.venue}</span><span>{p.paper_id ? `Paper ID ${p.paper_id}` : p.year}</span></div><h3>{p.title}</h3><p>{p.abstract}</p>{p.pdf_url && <a className="btn" href={p.pdf_url}>View paper <ExternalLink size={14}/></a>}</article>)}</div>}
          {activeTab==="Skills" && <div className="skill-cloud">{skills.map(s=><span className="skill" key={s}>{s}</span>)}</div>}
          {activeTab==="Certificates" && <div className="horizontal-cards">{certificates.map((c,i)=><div className="credential" key={i}><span className="mono">CERT {String(i+1).padStart(2,"0")}</span><Sparkles size={18}/><h3>{c.title}</h3><p>{c.issuer}</p><small>{c.category} · {c.date}</small></div>)}</div>}
          {activeTab==="Events" && <div className="horizontal-cards">{events.map((e,i)=><div className="credential" key={e.title}><span className="mono">EVENT {String(i+1).padStart(2,"0")}</span><Sparkles size={18}/><h3>{e.title}</h3><p>{e.description}</p><small>{e.organizer} · {e.date}</small></div>)}</div>}
          {activeTab==="Achievements" && <div className="achievement-grid">{achievements.map(a=><div className="achievement" key={a.label}><b>{a.value}</b><strong>{a.label}</strong><span>{a.detail}</span></div>)}</div>}
        </div></div></div></section>

      <section className="section" id="contact"><div className="container"><div className="contact-box"><div><div className="section-kicker">04 — contact</div><h2>Let&apos;s build<br/>something real.</h2><p>Interested in VLSI, semiconductor engineering, FPGA acceleration, AI hardware or research? I&apos;d be glad to connect.</p></div><div className="actions"><a className="btn primary" href="mailto:your-email@example.com">Email me <Mail size={15}/></a><a className="btn" href="#">LinkedIn <ArrowUpRight size={15}/></a></div></div></div></section>
    </main>
    <footer className="footer"><div className="container footer-row"><span>© {new Date().getFullYear()} CHARUNIVETHITHA S</span><span className="mono">VLSI · RTL · FPGA · EDGE AI · SECURITY</span></div></footer>
  </>;
}
