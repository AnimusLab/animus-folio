import { readingTime } from "@/utils/readingTime";
import { slug } from "@/utils/slug";
import type { PublicationEntry } from "@/types/publication";
import type { ResearchEntry } from "@/types/project";
import type { TimelineEntry } from "@/types/timeline";
import type { WritingEntry } from "@/types/writing";

export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Systems", href: "/systems" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Writing", href: "/writing" },
  { label: "Timeline", href: "/timeline" },
  { label: "Now", href: "/now" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
] as const;

export const researchEntries: ResearchEntry[] = [
  {
    title: "AI Governance and runtime policy enforcement",
    summary:
      "Designing deterministic control surfaces for autonomous AI systems so policy decisions can be evaluated, replayed, and audited.",
    focus: "Governance as code, runtime enforcement, auditability, and execution traceability.",
    outputs: [
      "Anchor's static analysis and runtime policy layer.",
      "Governance replay patterns for deterministic decision review.",
    ],
  },
  {
    title: "Constitutional AI and human-approved synchronization",
    summary:
      "Studying how external frameworks can be monitored, diffed, and synchronized into an internal governance engine without eroding human control.",
    focus: "Canonical policy sources, evidence packages, approval workflows, and framework drift.",
    outputs: [
      "Canon's framework monitoring and update proposal pipeline.",
      "Human-in-the-loop synchronization for governance changes.",
    ],
  },
  {
    title: "Governance infrastructure for enterprise AI systems",
    summary:
      "Building operational surfaces for organizations that need runtime monitoring, replay chains, and model risk visibility across autonomous workflows.",
    focus: "Governance Hub, audit chains, enterprise operations, and model risk management.",
    outputs: [
      "Governance Hub for domains, organizations, and replay systems.",
      "External technical review workflows for Anchor and related systems.",
    ],
  },
] as const;

export const publicationEntries: PublicationEntry[] = [
  {
    title: "Canon v0.1 released",
    venue: "Open-source release",
    date: "2026-06-18",
    type: "Release",
    abstract:
      "Initial release of the governance synchronization system for monitoring frameworks, generating evidence packages, and proposing approved updates into Anchor.",
  },
  {
    title: "Technical consultation to the Reserve Bank of India",
    venue: "Policy consultation",
    date: "2026-04-02",
    type: "Consultation",
    abstract:
      "Submitted technical input on AI model risk management, governance controls, and deterministic oversight for autonomous systems.",
  },
  {
    title: "Anchor v5 released",
    venue: "Open-source release",
    date: "2026-01-21",
    type: "Release",
    abstract:
      "Major release of the AI governance engine with static analysis, runtime enforcement, deterministic auditing, and constitutional enforcement primitives.",
  },
] as const;

const firstWriting = [
  "Governance systems fail when policy exists only as prose. If the control layer cannot be executed, replayed, and audited, it is not governance infrastructure.",
  "Anchor was designed around deterministic decision paths so runtime behavior can be inspected after the fact without relying on memory or ad hoc explanations.",
  "The practical goal is not to make systems feel safer in the abstract. It is to make every governed action traceable to a specific policy, version, and decision chain.",
];

const secondWriting = [
  "Constitutional AI only becomes useful in practice when the constitution is wired into a synchronization system, not just a prompt wrapper.",
  "Canon exists to monitor external frameworks, package evidence, and surface human-approved updates into the governance engine with minimal ambiguity.",
  "That makes policy maintenance a disciplined engineering workflow instead of a recurring manual rewrite.",
];

const thirdWriting = [
  "Runtime AI safety is an operations problem as much as a modeling problem.",
  "Governance Hub is being shaped as the operational surface for replay chains, audit trails, monitoring, and organizational governance domains.",
  "The long-term work is to make model risk management deterministic enough that it can be reviewed by humans without guesswork.",
];

export const writingEntries: WritingEntry[] = [
  {
    slug: slug("Governance as Code for Autonomous Systems"),
    title: "Governance as Code for Autonomous Systems",
    summary:
      "Why policy must be executable, versioned, and replayable if autonomous systems are expected to behave inside real-world constraints.",
    date: "2026-06-12",
    readingTime: readingTime(firstWriting.join(" ")),
    content: firstWriting,
    takeaways: [
      "Governance should be defined as machine-checkable infrastructure.",
      "Deterministic replay is essential for meaningful auditability.",
      "Policy updates should preserve human approval and traceability.",
    ],
  },
  {
    slug: slug("Runtime AI Safety and Deterministic Enforcement"),
    title: "Runtime AI Safety and Deterministic Enforcement",
    summary:
      "A technical note on enforcing policy at runtime without losing determinism, observability, or replay fidelity.",
    date: "2026-04-27",
    readingTime: readingTime(secondWriting.join(" ")),
    content: secondWriting,
    takeaways: [
      "Runtime controls must be visible to operators.",
      "A constitutional layer should shape behavior before output is emitted.",
      "Enforcement logic should be auditable without post-hoc reconstruction.",
    ],
  },
  {
    slug: slug("Human-in-the-Loop Governance for Model Risk Management"),
    title: "Human-in-the-Loop Governance for Model Risk Management",
    summary:
      "A note on making governance updates reviewable, contextual, and safe enough for enterprise and policy environments.",
    date: "2026-02-11",
    readingTime: readingTime(thirdWriting.join(" ")),
    content: thirdWriting,
    takeaways: [
      "Human approval should remain part of the change path.",
      "Model risk management needs evidence, not only intent.",
      "Governance operations should be reproducible across organizations and domains.",
    ],
  },
] as const;

export const timelineEntries: TimelineEntry[] = [
  {
    title: "Released Anchor v5",
    date: "2026-07-01",
    kind: "Release",
    summary:
      "Shipped the latest major version of Anchor with static analysis, runtime enforcement, deterministic auditing, and constitutional enforcement capabilities.",
  },
  {
    title: "Released Canon v0.1",
    date: "2026-05-12",
    kind: "Release",
    summary:
      "Launched the governance synchronization system for monitoring frameworks and generating human-reviewed evidence packages.",
  },
  {
    title: "Submitted RBI technical consultation",
    date: "2026-03-08",
    kind: "Policy",
    summary:
      "Provided technical consultation on AI model risk management and governance controls for autonomous systems.",
  },
  {
    title: "Built Governance Hub",
    date: "2026-01-18",
    kind: "Platform",
    summary:
      "Developed the management platform for governance domains, replay systems, audit chains, and enterprise governance operations.",
  },
] as const;

export const currentWorkItems = [
  {
    title: "Anchor",
    summary:
      "An open-source AI governance engine for static analysis, runtime policy enforcement, deterministic decision auditing, governance replay, and constitutional enforcement.",
  },
  {
    title: "Canon",
    summary:
      "A synchronization layer that tracks external governance frameworks, generates evidence packages, and proposes reviewed updates into Anchor.",
  },
  {
    title: "Governance Hub",
    summary:
      "A management platform for governance domains, organizations, replay systems, audit chains, and runtime monitoring.",
  },
] as const;

export const resumeExperience = [
  {
    role: "Founder & Research Engineer",
    organization: "AnimusLab",
    period: "2025 - Present",
    summary:
      "Leading research and engineering work on Anchor, Canon, and Governance Hub for autonomous AI governance infrastructure.",
  },
  {
    role: "Computer Science Student",
    organization: "Academic study",
    period: "Current",
    summary:
      "Studying systems, software, and governance-relevant technical foundations while building applied AI infrastructure.",
  },
] as const;

export const resumeEducation = [
  {
    degree: "Computer Science",
    institution: "Current study",
    period: "Ongoing",
    summary:
      "Emphasis on systems engineering, applied AI, runtime guarantees, and governance infrastructure.",
  },
] as const;

export const resumeSkills = [
  {
    title: "Technical",
    items: ["TypeScript", "Next.js App Router", "Runtime policy systems", "MDX"],
  },
  {
    title: "Content",
    items: ["Governance as code", "Technical writing", "Policy documentation"],
  },
  {
    title: "Workflow",
    items: ["Deterministic replay", "Audit chains", "Human-approved synchronization"],
  },
] as const;

export const contactMethods = [
  {
    label: "Email",
    value: "tanishq@animuslab.dev",
    href: "mailto:tanishq@animuslab.dev",
    summary: "Best for research collaboration, technical review, and governance infrastructure inquiries.",
  },
  {
    label: "Open-source work",
    value: "Anchor / Canon / Governance Hub",
    href: "/",
    summary: "Public workstreams that document ongoing research, engineering, and governance operations.",
  },
] as const;