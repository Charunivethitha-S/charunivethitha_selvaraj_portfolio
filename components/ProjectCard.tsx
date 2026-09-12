import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      <div>
        <div className="card-top">
          <span className="index">0{index + 1} / {project.category}</span>
          <ArrowUpRight size={17} color="#7e8a98"/>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tags">{project.technologies.map(t => <span className="tag" key={t}>{t}</span>)}</div>
      </div>
      {project.metrics?.length ? (
        <div className="metric-row">
          {project.metrics.map(m => <div className="metric" key={m.label}><b>{m.value}</b><small>{m.label}</small></div>)}
        </div>
      ) : null}
    </Link>
  );
}
