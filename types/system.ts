export interface SystemCategoryItem {
  name: string;
  slug?: string;
  href?: string;
  description: string;
  featured?: boolean;
  badge?: string;
}

export interface SystemCategory {
  title: string;
  summary: string;
  items: SystemCategoryItem[];
}

export interface SystemLink {
  label: string;
  href: string;
}

export interface SystemComponent {
  name: string;
  description: string;
}

export interface FlagshipSystem {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  status: string;
  links: SystemLink[];
  overview: string[];
  problem: string[];
  solution: string[];
  architecture: {
    title: string;
    diagram: string[];
    notes: string[];
  };
  components: SystemComponent[];
  features: string[];
  demo: {
    title: string;
    description: string;
    code: string;
    output: string[];
  };
  documentation: string[];
  whitepapers: string[];
  benchmarks: string[];
  roadmap: {
    shipped: string[];
    next: string[];
  };
  relatedSystems: string[];
}