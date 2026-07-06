import { slug } from "@/utils/slug";
import type { FlagshipSystem, SystemCategory } from "@/types/system";

export const systemCategories: SystemCategory[] = [
  {
    title: "Governance Infrastructure",
    summary:
      "Core systems for deterministic governance, constitutional enforcement, runtime policy, and enterprise review.",
    items: [
      {
        name: "Anchor",
        slug: "anchor",
        href: "/systems/anchor",
        badge: "Flagship",
        featured: true,
        description:
          "AI governance engine with static analysis, runtime enforcement, replay, and decision audit chains.",
      },
      {
        name: "Canon",
        slug: "canon",
        href: "/systems/canon",
        badge: "Flagship",
        featured: true,
        description:
          "Governance synchronization system for monitoring frameworks and proposing human-reviewed updates.",
      },
      {
        name: "Governance Hub",
        slug: "governance-hub",
        href: "/systems/governance-hub",
        badge: "Flagship",
        featured: true,
        description:
          "Operational platform for governance domains, organizations, replay systems, and audit chains.",
      },
    ],
  },
  {
    title: "AI Infrastructure",
    summary:
      "Specialized tooling for experimentation, terminal workflows, and adjacent runtime components.",
    items: [
      {
        name: "QuantForge AI",
        badge: "Infrastructure",
        description:
          "AI experimentation platform for model evaluation, pipelines, and controlled runs.",
      },
      {
        name: "Quant Terminal",
        badge: "Interface",
        description:
          "Developer interface for QuantForge rather than a standalone product surface.",
      },
      {
        name: "AnchorGrid",
        badge: "Component",
        description:
          "Runtime-adjacent infrastructure component that may evolve into larger distributed governance infrastructure.",
      },
    ],
  },
  {
    title: "Developer Infrastructure",
    summary:
      "Utilities and tooling that support the ecosystem without competing with the flagship systems.",
    items: [
      {
        name: "Grid CLI",
        badge: "Tool",
        description:
          "One-page utility for commands, setup, workflows, and roadmaps.",
      },
      {
        name: "Future tools",
        badge: "Planned",
        description:
          "Reserved for smaller utilities that keep the lab's workflows reproducible.",
      },
    ],
  },
] as const;

const anchor: FlagshipSystem = {
  slug: "anchor",
  name: "Anchor",
  category: "Governance Infrastructure",
  tagline: "Deterministic governance infrastructure for autonomous AI systems.",
  summary:
    "Anchor is the open-source governance engine that performs static analysis, runtime policy enforcement, deterministic decision auditing, governance replay, and constitutional enforcement for AI systems.",
  status: "Flagship system",
  links: [
    { label: "Documentation", href: "#documentation" },
    { label: "Architecture", href: "#architecture" },
    { label: "Whitepaper", href: "#whitepapers" },
    { label: "Roadmap", href: "#roadmap" },
  ],
  overview: [
    "Anchor exists because policy expressed only in prose cannot govern autonomous systems reliably.",
    "The system turns governance into executable infrastructure so runtime behavior can be inspected, replayed, and reviewed.",
  ],
  problem: [
    "Current AI systems often cannot explain why a decision was permitted.",
    "Policies are scattered across documents, runtime logs are incomplete, and execution paths are not reproducible.",
    "Organizations need deterministic governance rather than post-hoc interpretation.",
  ],
  solution: [
    "Anchor makes the governance source executable, then applies it through static analysis, runtime interception, and audit-chain generation.",
    "The result is a policy path that can be replayed and reviewed with the same inputs that shaped the original decision.",
  ],
  architecture: {
    title: "Architecture",
    diagram: [
      "Application",
      "  ↓",
      "Anchor Runtime",
      "  ↓",
      "Policy Engine",
      "  ↓",
      "Governance Loader",
      "  ↓",
      "Constitution",
      "  ↓",
      "Decision Audit Chain",
      "  ↓",
      "Replay Engine",
    ],
    notes: [
      "The architecture is intentionally linear so every enforcement step is visible.",
      "Replay and audit are first-class outcomes, not afterthoughts.",
    ],
  },
  components: [
    {
      name: "Runtime",
      description: "Intercepts governed actions and routes them through deterministic policy evaluation.",
    },
    {
      name: "Policy Engine",
      description: "Executes governance rules and produces audit-friendly decisions.",
    },
    {
      name: "Replay",
      description: "Reconstructs governed actions so reviewers can inspect the decision path.",
    },
    {
      name: "DAC",
      description: "Decision audit chain that preserves previous decisions and governance evidence.",
    },
    {
      name: "Governance",
      description: "Defines the constitutional rules and policy sources that shape enforcement.",
    },
    {
      name: "Static Analysis",
      description: "Scans systems before runtime so violations can be identified early.",
    },
    {
      name: "CLI",
      description: "Operational interface for scanning, replaying, and validating governance workflows.",
    },
    {
      name: "SDK",
      description: "Integration surface for applications that need governance in code.",
    },
  ],
  features: [
    "Static code analysis",
    "Runtime policy interception",
    "Constitutional enforcement",
    "Replay",
    "Deterministic audit chains",
    "Human approval workflows",
    "Governance domains",
    "Plugin system",
    "Python SDK",
    "CLI",
  ],
  demo: {
    title: "Example",
    description:
      "A minimal integration that shows how an application can be scanned and then executed through governance.",
    code: `from anchor import Anchor

engine = Anchor()

engine.scan("app.py")
engine.run()`,
    output: ["Violation", "Policy", "Decision", "Evidence", "DAC", "Replay ID"],
  },
  documentation: [
    "Getting Started",
    "Architecture",
    "Runtime",
    "CLI",
    "SDK",
    "Replay",
    "Governance",
    "Canon Integration",
  ],
  whitepapers: [
    "Architecture",
    "Decision Audit Chain",
    "Replay",
    "Constitution",
    "Static Analysis",
  ],
  benchmarks: [
    "Lines scanned",
    "Runtime overhead",
    "Memory footprint",
    "Policies evaluated",
    "Replay speed",
    "Verification speed",
  ],
  roadmap: {
    shipped: ["Runtime", "DAC", "Replay", "Governance", "Canon"],
    next: ["VS Code Extension", "Java", "Rust", "Enterprise", "Cloud"],
  },
  relatedSystems: ["Canon", "Governance Hub"],
};

const canon: FlagshipSystem = {
  slug: "canon",
  name: "Canon",
  category: "Governance Infrastructure",
  tagline: "Governance synchronization for external frameworks and policy drift.",
  summary:
    "Canon monitors external governance frameworks such as NIST, OWASP, FINOS, and RBI guidance, generates evidence packages, proposes governance updates, and enables human-approved synchronization into Anchor.",
  status: "Flagship system",
  links: [
    { label: "Documentation", href: "#documentation" },
    { label: "Architecture", href: "#architecture" },
    { label: "Whitepaper", href: "#whitepapers" },
    { label: "Roadmap", href: "#roadmap" },
  ],
  overview: [
    "Canon exists so governance frameworks can be observed instead of manually re-written.",
    "It turns external policy sources into a synchronization workflow that preserves human approval.",
  ],
  problem: [
    "Governance frameworks change faster than manual review processes can safely track.",
    "Teams need a way to detect drift, package evidence, and keep updates accountable.",
    "A governance system without synchronization becomes stale and inconsistent.",
  ],
  solution: [
    "Canon continuously monitors framework sources, extracts deltas, and assembles evidence packages for review.",
    "Approved updates are then synchronized into Anchor so runtime enforcement stays aligned with current policy.",
  ],
  architecture: {
    title: "Architecture",
    diagram: [
      "Framework Sources",
      "  ↓",
      "Monitoring Layer",
      "  ↓",
      "Diff / Evidence Package",
      "  ↓",
      "Human Review",
      "  ↓",
      "Approved Sync",
      "  ↓",
      "Anchor",
    ],
    notes: [
      "Canon is a synchronization layer, not an enforcement engine.",
      "Its job is to preserve traceability between external frameworks and internal governance.",
    ],
  },
  components: [
    { name: "Framework monitor", description: "Tracks source frameworks and detects meaningful changes." },
    { name: "Evidence generator", description: "Produces packages that support review and approval." },
    { name: "Approval workflow", description: "Keeps humans in control of synchronization decisions." },
    { name: "Sync engine", description: "Pushes approved governance updates into Anchor." },
    { name: "Audit log", description: "Retains a record of what changed and why." },
    { name: "Policy diff", description: "Highlights drift across versions and sources." },
  ],
  features: [
    "Framework monitoring",
    "Evidence packages",
    "Human review",
    "Governance diffing",
    "Approved synchronization",
    "Policy drift tracking",
  ],
  demo: {
    title: "Example workflow",
    description:
      "A governance update begins as a monitored framework change and ends as an approved sync into Anchor.",
    code: `canon watch --source nist
canon package --evidence
canon propose --anchor`,
    output: ["Change detected", "Evidence packaged", "Human approval requested", "Sync queued"],
  },
  documentation: [
    "Framework monitoring",
    "Evidence packaging",
    "Human approval",
    "Sync pipeline",
    "Anchor integration",
  ],
  whitepapers: [
    "Governance synchronization",
    "Policy drift detection",
    "Evidence packages",
  ],
  benchmarks: [
    "Framework sources monitored",
    "Evidence package generation time",
    "Update proposal latency",
    "Approval turnaround",
  ],
  roadmap: {
    shipped: ["Canon v0.1", "Evidence packaging", "Anchor sync proposals"],
    next: ["Framework coverage expansion", "Organization-specific profiles", "Review automation"],
  },
  relatedSystems: ["Anchor", "Governance Hub"],
};

const governanceHub: FlagshipSystem = {
  slug: "governance-hub",
  name: "Governance Hub",
  category: "Governance Infrastructure",
  tagline: "Operational platform for governance domains, replay systems, and audit chains.",
  summary:
    "Governance Hub is the management plane for governance domains, organizations, replay systems, audit chains, and runtime monitoring across enterprise AI operations.",
  status: "Flagship system",
  links: [
    { label: "Documentation", href: "#documentation" },
    { label: "Architecture", href: "#architecture" },
    { label: "Whitepaper", href: "#whitepapers" },
    { label: "Roadmap", href: "#roadmap" },
  ],
  overview: [
    "Governance Hub is the operational surface for teams that need to coordinate governance across multiple systems.",
    "It is designed for the work that happens after policies exist: monitoring, review, replay, and cross-domain oversight.",
  ],
  problem: [
    "Enterprise governance often fragments across dashboards, logs, audit systems, and policy documents.",
    "Teams need one place to manage governance domains and operational evidence without losing determinism.",
    "Reviewers need a practical surface for replay chains and runtime monitoring.",
  ],
  solution: [
    "Governance Hub consolidates governance operations into a single management plane.",
    "It keeps audit chains, organization structures, runtime monitoring, and replay workflows aligned.",
  ],
  architecture: {
    title: "Architecture",
    diagram: [
      "Organizations",
      "  ↓",
      "Governance Domains",
      "  ↓",
      "Runtime Monitoring",
      "  ↓",
      "Audit Chains",
      "  ↓",
      "Replay Systems",
      "  ↓",
      "Operations",
    ],
    notes: [
      "The platform is intentionally operational rather than promotional.",
      "It exists to support governance review across larger deployments.",
    ],
  },
  components: [
    { name: "Domain manager", description: "Organizes governance by system, organization, and policy scope." },
    { name: "Runtime monitor", description: "Surfaces policy behavior as it happens." },
    { name: "Replay system", description: "Provides deterministic review of governed actions." },
    { name: "Audit chains", description: "Connects decisions across time and system boundaries." },
    { name: "Operations surface", description: "Supports day-to-day governance administration." },
  ],
  features: [
    "Governance domains",
    "Organizations",
    "Replay systems",
    "Audit chains",
    "Runtime monitoring",
    "Enterprise operations",
  ],
  demo: {
    title: "Example dashboard flow",
    description:
      "A review begins at the organization layer and drills into the replay and audit layers without leaving the governance surface.",
    code: `hub open --domain enterprise
hub replay --chain dac-124
hub audit --decision 42`,
    output: ["Domain opened", "Replay chain located", "Audit context loaded"],
  },
  documentation: [
    "Organizations",
    "Governance domains",
    "Replay systems",
    "Audit chains",
    "Monitoring",
  ],
  whitepapers: [
    "Governance operations",
    "Replay systems",
    "Enterprise governance",
  ],
  benchmarks: [
    "Replay lookup speed",
    "Audit chain traversal",
    "Monitoring latency",
    "Domain scale",
  ],
  roadmap: {
    shipped: ["Governance domains", "Replay systems", "Audit chains"],
    next: ["Enterprise policy views", "Cross-system reporting", "Review automation"],
  },
  relatedSystems: ["Anchor", "Canon"],
};

export const flagshipSystems: FlagshipSystem[] = [anchor, canon, governanceHub];

export function getFlagshipSystemBySlug(systemSlug: string) {
  return flagshipSystems.find((system) => system.slug === systemSlug);
}

export function getFlagshipSystemSlugs() {
  return flagshipSystems.map((system) => ({ slug: slug(system.slug) }));
}