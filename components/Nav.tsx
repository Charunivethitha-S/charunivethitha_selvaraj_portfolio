import { ArrowUpRight } from "lucide-react";

export default function Nav() {
  return (
    <nav className="nav">
      <a className="brand" href="/">
        <span className="brand-mark" />
        <span>CHARUNIVETHITHA</span>
      </a>
      <div className="nav-links">
        <a href="/#work">Work</a>
        <a href="/#research">Research</a>
        <a href="/#experience">Experience</a>
        <a href="/#certificates">Certificates</a>
        <a href="/#events">Events</a>
      </div>
      <a className="nav-cta" href="/#contact">Let&apos;s connect <ArrowUpRight size={12}/></a>
    </nav>
  );
}
