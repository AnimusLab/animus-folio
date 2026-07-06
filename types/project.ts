export interface ResearchEntry {
  title: string;
  summary: string;
  focus: string;
  outputs: string[];
}

export interface ProjectEntry {
  title: string;
  summary: string;
  href?: string;
  status?: string;
}