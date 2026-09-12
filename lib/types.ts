export type Project = {
  id?: string;
  slug: string;
  title: string;
  eyebrow?: string;
  summary: string;
  description?: string;
  category: string;
  technologies: string[];
  metrics?: { value: string; label: string }[];
  featured?: boolean;
  thumbnail_url?: string;
  gallery?: { url: string; caption?: string }[];
  videos?: { url: string; title?: string }[];
  github_url?: string;
  paper_url?: string;
};

export type Experience = {
  id?: string;
  organization: string;
  role: string;
  start_date: string;
  end_date?: string;
  description: string;
  technologies: string[];
};

export type Publication = {
  id?: string;
  title: string;
  venue: string;
  year: string;
  status: string;
  paper_id?: string;
  abstract: string;
  pdf_url?: string;
  external_url?: string;
};
