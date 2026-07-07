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
        href: "/projects/anchor",
        badge: "Flagship",
        featured: true,
        description:
          "AI governance engine with static analysis, runtime enforcement, replay, and decision audit chains. Published on PyPI.",
      },
      {
        name: "Canon",
        slug: "canon",
        href: "/projects/canon",
        badge: "Flagship",
        featured: true,
        description:
          "Governance synchronization system for monitoring frameworks, diffing rule changes, and proposing updates.",
      },
      {
        name: "Governance Hub",
        slug: "governance-hub",
        href: "/projects/governance-hub",
        badge: "Flagship",
        featured: true,
        description:
          "Operational platform for governance domains, organizations, verification, and centralized audit chains.",
      },
    ],
  },
  {
    title: "AI Infrastructure",
    summary:
      "Specialized tooling for experimentation, agent ecosystems, and adjacent runtime components.",
    items: [
      {
        name: "QuantForge",
        slug: "quantforge",
        href: "/projects/quantforge",
        badge: "Infrastructure",
        featured: true,
        description:
          "AI-powered financial terminal with developer-first CLI analytics, instrumented with Shadow Watch telemetry.",
      },
      {
        name: "AnchorGrid",
        slug: "anchorgrid",
        href: "/projects/anchorgrid",
        badge: "Network",
        featured: true,
        description:
          "Governed P2P agent network that enforces compliance at the protocol level via Proof-of-Integrity handshakes.",
      },
      {
        name: "Nexxus",
        slug: "nexxus",
        href: "/projects/nexxus",
        badge: "Component",
        featured: true,
        description:
          "High-throughput semantic policy mapping engine that routes natural-language queries into AST constraints.",
      },
    ],
  },
  {
    title: "Developer Infrastructure & Tools",
    summary:
      "Utilities, interfaces, and query engines that support the reproducibility of the portfolio workflows.",
    items: [
      {
        name: "Grid CLI",
        slug: "grid-cli",
        href: "/projects/grid-cli",
        badge: "Tool",
        featured: true,
        description:
          "Unified command-line interface bundling commands from anchor-audit and canon for distributed operations.",
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
    "Anchor is an open-source governance engine that performs static analysis, runtime policy enforcement, deterministic decision auditing, and constitutional enforcement for AI systems. Published as anchor-audit on PyPI.",
  status: "Flagship system",
  links: [
    { label: "PyPI: anchor-audit", href: "https://pypi.org/project/anchor-audit/" },
    { label: "GitHub Repository", href: "https://github.com/Tanishq1030/Anchor" },
    { label: "Zenodo Preprint", href: "https://zenodo.org/records/19734724" },
    { label: "Anchor Paper (PDF)", href: "/docs/anchor/anchor_paper.pdf" },
  ],
  overview: [
    "Anchor exists because policy expressed only in prose cannot govern autonomous systems reliably. The system turns governance into executable infrastructure so runtime behavior can be inspected, replayed, and reviewed.",
    "By checking codebases against formal compliance parameters using AST matching rather than probabilistic reviews, Anchor guarantees absolute determinism in policy outcomes."
  ],
  problem: [
    "AI systems make opaque, probabilistic decisions that are difficult to audit or enforce.",
    "Standard regex-based scanning creates high volumes of false positives in dependency code.",
    "Post-hoc logging fails to provide cryptographically checkable evidence of compliance."
  ],
  motivation: [
    "I built Anchor after noticing that teams deploying LLMs were repeatedly solving compliance in an ad hoc, probabilistic way.",
    "The core motivation was to bring the rigor of compiler design and formal static analysis to the runtime behavior of AI agents."
  ],
  solution: [
    "Anchor parses codebases into abstract syntax trees (ASTs) using Tree-sitter, evaluating declarative rules defined in .anchor files.",
    "Decisions are logged to a tamper-evident audit file with Ed25519 signatures, enabling cryptographic validation of decision history."
  ],
  implementation: [
    "The core scan loop is written in Python, operating in two modes: AST node query matching (Mode A) and regex fallback (Mode B).",
    "It compiles and runs as a CLI command line utility (anchor check) and packages policy intents separately from detection matches."
  ],
  decisions: [
    "We decoupled rule definitions (policy intent) from detection scripts to allow policy authors and parser developers to work independently.",
    "We selected AST parsing over standard regex matching for the primary check to eliminate false positives in downstream code."
  ],
  challenges: [
    "Handling syntax variations across multiple host languages (Python, Go, JS/TS, Rust) within a single unified AST query model.",
    "Keeping execution latency down to microsecond scales during runtime policy interception."
  ],
  architecture: {
    title: "Anchor Pipeline",
    diagram: [
      "Application Source Code",
      "  ↓ (Tree-sitter Parser)",
      "Abstract Syntax Tree (AST)",
      "  ↓ (Rule Matcher / AST Queries)",
      "Enforcement Rules (.anchor)",
      "  ↓ (Runtime Interceptor)",
      "Ed25519 Signed Log File",
      "  ↓ (Replay & Verification)",
      "Verifiable Decision Proof"
    ],
    notes: [
      "Every step is linear and deterministic.",
      "The audit logs act as verifiable receipts."
    ],
  },
  components: [
    {
      name: "AST Parser",
      description: "Builds structured trees of source files using Tree-sitter.",
    },
    {
      name: "Rule Matcher",
      description: "Checks code patterns against declarative policy domains.",
    },
    {
      name: "Runtime Interceptor",
      description: "Applies policy rules inline during live API execution.",
    },
    {
      name: "Signer",
      description: "Signs every decision with Ed25519 keys for audit durability.",
    },
  ],
  features: [
    "Multi-language AST scanning",
    "Deterministic rule execution",
    "Ed25519 cryptographic signatures",
    "Separation of rule from detection",
    "CLI tool & PyPI package",
  ],
  demo: {
    title: "Integration example",
    description: "Scan codebases and run enforcement checks.",
    code: `pip install anchor-audit
anchor init --all
anchor check .`,
    output: [
      "Scanned: 742 files",
      "Violations: 2 Blocker, 1 Error",
      "Log signed: .anchor/reports/latest.json"
    ],
  },
  documentation: [
    "anchor check",
    "anchor init",
    "anchor sync",
    "anchor verify",
  ],
  whitepapers: [
    { label: "Anchor Paper (PDF)", href: "/docs/anchor/anchor_paper.pdf" },
    { label: "Anchor v5 Whitepaper (PDF)", href: "/docs/anchor/anchor_v5_whitepaper.pdf" },
    { label: "Anchor SSRN Research Draft (PDF)", href: "/docs/anchor/anchor_ssrn.pdf" },
    { label: "Anchor Preprint Rebuild Brief (PDF)", href: "/docs/anchor/anchor_preprint_rebuild.pdf" },
    { label: "FSB Consultation Response (PDF)", href: "/docs/policy/fsb_response.pdf" },
    { label: "RBI Consultation Comments (PDF)", href: "/docs/policy/rbi_comments.pdf" }
  ],
  benchmarks: [
    "Repository scan: <3 seconds",
    "Runtime interception: <2.1ms",
    "AST node parsing: ~40ms",
  ],
  roadmap: {
    shipped: ["AST scanning", "Ed25519 log signing", "PyPI release v5"],
    next: ["Dataflow variable tracking", "Multi-agent authorization chains", "VS Code extension"],
  },
  relatedSystems: ["Canon", "Governance Hub"],
};

const canon: FlagshipSystem = {
  slug: "canon",
  name: "Canon",
  category: "Governance Infrastructure",
  tagline: "Deterministic governance synchronization for external policies.",
  summary:
    "Canon monitors external regulatory frameworks, hashes rulesets, generates diff evidence packages, and enforces human-in-the-loop approvals for synchronized Anchor policy state updates.",
  status: "Flagship system",
  links: [
    { label: "GitHub Repository", href: "https://github.com/AnimusLab/Canon" },
    { label: "Sync Spec (PDF)", href: "/docs/canon/governance_sync_spec.pdf" }
  ],
  overview: [
    "Canon treats policy updates as a supply chain problem. By utilizing deterministic hashing and append-only ledgers, it guarantees that no policy updates skip human review."
  ],
  problem: [
    "Regulatory frameworks shift constantly, creating a drift between code and external compliance standards.",
    "Manual policy updates are slow, prone to oversight, and lack verifiable audit history."
  ],
  motivation: [
    "I built Canon to solve the provenance problem. Anchor is only as correct as the policies it enforces; Canon ensures those policies are authoritative, current, and verified."
  ],
  solution: [
    "Crawl framework sources deterministic state hashes, package updates into diff packages, and compile into a tamper-evident, append-only ledger."
  ],
  implementation: [
    "Written in Python, utilizing SHA-256 for state tracking and HMAC for approval validation. Controlled via CLI."
  ],
  decisions: [
    "Treating policy updates as a supply chain with explicit, signed approval milestones.",
    "Making the human approval gate an architectural invariant that cannot be skipped or automated."
  ],
  challenges: [
    "Formatting highly unstructured government pdfs and web releases into unified rulesets.",
    "Handling transient API errors from upstream regulatory sites deterministically."
  ],
  architecture: {
    title: "Canon Pipeline",
    diagram: [
      "Monitored Policy Sources",
      "  ↓ (Crawling / Normalization)",
      "Rule Extraction",
      "  ↓ (SHA-256 State Hashing)",
      "Diff & Evidence Generator",
      "  ↓ (Human-in-the-Loop Approval)",
      "Append-Only Ledger (ledger.jsonl)",
      "  ↓ (Synchronize)",
      "Anchor Rulesets"
    ],
    notes: [
      "The ledger records every state transition.",
      "Syncing is transactional and auditable."
    ],
  },
  components: [
    { name: "Source Adapters", description: "Crawls external portals (NIST, OWASP, EU AI Act)." },
    { name: "Diff Engine", description: "Identifies added, changed, or deleted rulesets." },
    { name: "Ledger Log", description: "A tamper-evident JSONL file storing hashed state transitions." },
  ],
  features: [
    "Framework crawl adapters",
    "Deterministic state hashes",
    "Tamper-evident log chain",
    "Human review approval gate",
  ],
  demo: {
    title: "CLI Sync Sequence",
    description: "Fetch changes and review the update proposals.",
    code: `canon fetch
canon review
canon verify`,
    output: [
      "State hash: sha256_b7c1f44...",
      "Delta: 3 new, 1 removed",
      "Ledger chain verification: VALID"
    ],
  },
  documentation: [
    "canon fetch",
    "canon review",
    "canon verify",
    "canon status",
  ],
  whitepapers: [
    { label: "Governance Sync Spec (PDF)", href: "/docs/canon/governance_sync_spec.pdf" }
  ],
  benchmarks: [
    "Diff engine (100 rules): 88µs",
    "E2E Pipeline (Diff+Hash+Ledger): 490µs",
    "Ledger chain hashing: 1.3µs",
  ],
  roadmap: {
    shipped: ["Adapters", "Diff generation", "Ledger chain"],
    next: ["Adapter framework coverage", "Automatic policy pull alerts", "Sync adapters for Anchor v6"],
  },
  relatedSystems: ["Anchor", "Governance Hub"],
};

const governanceHub: FlagshipSystem = {
  slug: "governance-hub",
  name: "Governance Hub",
  category: "Governance Infrastructure",
  tagline: "Centralized operational surface for policy monitoring and log audits.",
  summary:
    "Governance Hub aggregates runtime verification metadata from distributed Anchor instances, verifies cryptographic signatures, and provides policy drift tracking.",
  status: "Flagship system",
  links: [],
  overview: [
    "Governance Hub brings all distributed Anchor telemetry under one control pane, tracking violations and verifying signature chains."
  ],
  problem: [
    "Running Anchor in production creates logs on distinct virtual servers that are tedious to aggregate.",
    "Log aggregation pipelines can be compromised or altered by unauthorized users."
  ],
  motivation: [
    "To build a single place for operations and compliance teams to inspect verified, signed governance evidence without leaving their central workflow."
  ],
  solution: [
    "Ingests Ed25519-signed decision records from agents, validates their cryptographic integrity, and presents live compliance scores."
  ],
  implementation: [
    "Built using FastAPI for high-throughput ingestion and Next.js / Tailwind CSS for the monitoring dashboard."
  ],
  decisions: [
    "Using signature-based validations to authenticate incoming data payloads instead of trusting database replication."
  ],
  challenges: [
    "Handling high-throughput stream telemetry under heavy execution load without dropping events."
  ],
  architecture: {
    title: "Hub Aggregation",
    diagram: [
      "Distributed Agents",
      "  ↓ (Ed25519-Signed Event Streams)",
      "Hub Telemetry Endpoint",
      "  ↓ (Signature Validation)",
      "Database Store",
      "  ↓",
      "Compliance Dashboard (Next.js)"
    ],
    notes: [
      "Payloads are discarded if signature validation fails.",
      "The UI highlights active violations."
    ],
  },
  components: [
    { name: "Ingestion API", description: "Receives events from active agent nodes." },
    { name: "Verifier", description: "Validates Ed25519 key hashes and chains." },
    { name: "Dashboard UI", description: "Visualizes drift, violations, and active rules." },
  ],
  features: [
    "Centralized runtime auditing",
    "Ed25519 validation",
    "Real-time violation alerts",
  ],
  demo: {
    title: "Hub Client",
    description: "Launch the telemetry listener.",
    code: `uvicorn hub.main:app --port 8000`,
    output: ["Telemetry API listening on port 8000", "Verified signature for node_012"],
  },
  documentation: [
    "Hub API specs",
    "Collector installation",
  ],
  whitepapers: [],
  benchmarks: [
    "Ingestion throughput: >5000 events/s",
    "Signature checks: <0.5ms per payload",
  ],
  roadmap: {
    shipped: ["API collector", "Next.js basic dashboard"],
    next: ["Multi-tenant org domains", "Visual graph query builder for policies"],
  },
  relatedSystems: ["Anchor", "Canon"],
};

const quantforge: FlagshipSystem = {
  slug: "quantforge",
  name: "QuantForge",
  category: "AI Infrastructure",
  tagline: "Developer-first financial terminal with AI analytics and CLI tools.",
  summary:
    "QuantForge brings programmatic financial data access to developers via a CLI terminal client and FastAPI backend, instrumented with Shadow Watch telemetry.",
  status: "Prototype system",
  links: [
    { label: "GitHub Repository", href: "https://github.com/Tanishq1030/QuantForge-terminal" }
  ],
  overview: [
    "QuantForge is a terminal-native financial tool that enables developers to query data, write analysis scripts, and monitor portfolio changes programmatically."
  ],
  problem: [
    "Financial terminals are expensive or lack clean CLI integration for automated scripting.",
    "It is difficult to track user behavioral queries silently for personalization or security."
  ],
  motivation: [
    "Built initially to support my own research data scraping, it evolved into the primary live playground for the Shadow Watch telemetry library."
  ],
  solution: [
    "Provide a versioned REST API backend with a Click CLI shell client, instrumenting every action with async behavior logging."
  ],
  implementation: [
    "FastAPI, PostgreSQL with Alembic migrations, click for CLI commands, and integrated Shadow Watch python package."
  ],
  decisions: [
    "Making the system CLI-first and structured (JSON) by default so developers can easily pipe outputs.",
    "Integrating async telemetry natively into the routing path rather than using a post-action middleware."
  ],
  challenges: [
    "Detecting and formatting output based on varying terminal window sizes across different shells.",
  ],
  architecture: {
    title: "Terminal Architecture",
    diagram: [
      "Click CLI Client",
      "  ↓ (HTTP Requests / CLI Commands)",
      "FastAPI Backend",
      "  ↓ (SQLAlchemy Async / shadowwatch)",
      "PostgreSQL Database",
      "  ↓",
      "External Data Sources (Yahoo, AlphaVantage)"
    ],
    notes: [
      "CLI outputs default to clean JSON.",
      "Actions are tracked asynchronously."
    ],
  },
  components: [
    { name: "Click CLI", description: "Commands for scraping, querying, and analyzing." },
    { name: "FastAPI Backend", description: "Exposes REST endpoints." },
    { name: "Shadow Watch", description: "Passive telemetry layer." },
  ],
  features: [
    "CLI data interface",
    "PostgreSQL + Alembic migrations",
    "Shadow Watch instrumentation",
  ],
  demo: {
    title: "CLI Command",
    description: "Fetch price history.",
    code: `python -m quantforge.cli get-price AAPL`,
    output: ["Fetching AAPL...", "Price: $178.50", "Log: Event tracked by Shadow Watch"],
  },
  documentation: [
    "CLI command guide",
    "API layout",
  ],
  whitepapers: [],
  benchmarks: [
    "CLI load time: <200ms",
    "Data aggregation latency: <120ms",
  ],
  roadmap: {
    shipped: ["Core CLI client", "Yahoo Finance integration", "Shadow Watch log sink"],
    next: ["WebSocket live streaming", "Backtesting engine", "Interactive prompt shell"],
  },
  relatedSystems: ["Shadow Watch"],
};

const anchorgrid: FlagshipSystem = {
  slug: "anchorgrid",
  name: "AnchorGrid",
  category: "AI Infrastructure",
  tagline: "Governed peer-to-peer agent network and secure discovery.",
  summary:
    "AnchorGrid enforces compliance standards dynamically at the P2P protocol level, requiring agents to complete a Proof-of-Integrity handshake before peer discovery.",
  status: "Active development",
  links: [
    { label: "GitHub Repository", href: "https://github.com/quantforge-ai/AnchorGrid-hub" },
    { label: "anchor-audit on PyPI", href: "https://pypi.org/project/anchor-audit/" }
  ],
  overview: [
    "AnchorGrid inserts a compliance check directly into peer handshakes so non-compliant agents cannot register or communicate."
  ],
  problem: [
    "Multi-agent networks allow any agent to join, exposing participants to vulnerabilities.",
    "Manual security review of dynamic agent codebases does not scale."
  ],
  motivation: [
    "To expand Anchor's local compliance verification capabilities to distributed systems and multi-agent operations."
  ],
  solution: [
    "Agents complete a local Anchor audit, receive a signed certificate, and present it during network handshakes."
  ],
  implementation: [
    "FastAPI nodes, governed DHT network routines, and anchor-audit verification."
  ],
  decisions: [
    "Making compliance a protocol primitive rather than an optional configuration layer.",
    "Decaying trust scores dynamically over time to require regular re-audits."
  ],
  challenges: [
    "Constructing a governed DHT that enforces validation constraints without introducing centralized bottlenecks.",
  ],
  architecture: {
    title: "Handshake Sequence",
    diagram: [
      "Agent Node",
      "  ↓ (Local audit check)",
      "Anchor Engine (Local)",
      "  ↓ (Issue Signed Certificate)",
      "P2P Connection Request",
      "  ↓ (Verify compliance hash)",
      "AnchorGrid DHT (Access Granted / Denied)"
    ],
    notes: [
      "Invalid signatures cause connection drops.",
      "Trust scores determine peer access."
    ],
  },
  components: [
    { name: "P2P Handshaker", description: "Negotiates credentials and checks certificates." },
    { name: "Trust Scorer", description: "Computes scores based on policy freshness." },
    { name: "Discovery DHT", description: "Distributed directory of verified nodes." },
  ],
  features: [
    "Proof-of-Integrity handshake",
    "Dynamic trust scores",
    "Governed peer discovery",
  ],
  demo: {
    title: "Discovery Demo",
    description: "Launch node and attempt registration.",
    code: `python -m anchorgrid.node start --port 8000
python demo_discovery.py --agent FinanceBot --cert ./valid.pem`,
    output: ["Node listening on 8000", "Handshake: verified certificate", "Trust Score: 98/100"],
  },
  documentation: [
    "Node setup",
    "Handshake spec",
  ],
  whitepapers: [],
  benchmarks: [
    "Handshake verification: <4ms",
    "Trust score calculation: <1ms",
  ],
  roadmap: {
    shipped: ["Local audit validation", "Core P2P handshake"],
    next: ["Next.js Dashboard Hub", "HIPAA-compliant template libraries", "Mainnet public release"],
  },
  relatedSystems: ["Anchor"],
};

const nexxus: FlagshipSystem = {
  slug: "nexxus",
  name: "Nexxus",
  category: "AI Infrastructure",
  tagline: "High-throughput semantic policy mapping and query routing.",
  summary:
    "Nexxus maps natural-language queries into structured AST constraints deterministically, serving as the bridge between prose policies and Anchor validations.",
  status: "Active development",
  links: [],
  overview: [
    "Nexxus resolves natural language policies into structured code patterns that Anchor can scan or intercept."
  ],
  problem: [
    "Policies are written in human language, whereas security enforcement requires exact AST matching.",
    "Mapping policies to code manually creates gaps and translation errors."
  ],
  motivation: [
    "To make compliance rules accessible to policy makers without requiring them to write Tree-sitter query expressions."
  ],
  solution: [
    "A semantic router that classifies input goals and resolves them to validated AST match templates."
  ],
  implementation: [
    "Lightweight Python semantic classifier with low-latency caching wrappers."
  ],
  decisions: [
    "Caching mapping configurations to guarantee microsecond-scale execution inside request paths."
  ],
  challenges: [
    "Validating that semantic translations don't introduce false negatives in rule matches.",
  ],
  architecture: {
    title: "Nexxus Translation",
    diagram: [
      "Natural Language Policy",
      "  ↓ (Semantic Classifier)",
      "Policy Map Cache",
      "  ↓ (Resolve Query)",
      "Structured AST Queries",
      "  ↓",
      "Anchor Code Validation"
    ],
    notes: [
      "Resolves mappings deterministically.",
      "Uses low-latency lookup tables."
    ],
  },
  components: [
    { name: "Classifier", description: "Categorizes input goals." },
    { name: "Cache Router", description: "Bridges queries with AST patterns." },
  ],
  features: [
    "Natural language policy mapping",
    "Microsecond cache routing",
  ],
  demo: {
    title: "Routing Check",
    description: "Map a rule query.",
    code: `import nexxus
nexxus.map_policy("prevent raw completions API calls")`,
    output: ["Resolved category: API_SECURITY", "AST Query: (call_expression) @completions"],
  },
  documentation: [
    "Nexxus API guide",
  ],
  whitepapers: [],
  benchmarks: [
    "Cache lookup: <20µs",
    "Classification: <15ms",
  ],
  roadmap: {
    shipped: ["Core mapping logic", "Low-latency cache"],
    next: ["Direct Canon schema compilation", "Visual query editor for mapping rules"],
  },
  relatedSystems: ["Anchor", "Canon"],
};

const gridCli: FlagshipSystem = {
  slug: "grid-cli",
  name: "Grid CLI",
  category: "Developer Infrastructure & Tools",
  tagline: "Unified terminal interface for distributed governance operations.",
  summary:
    "Grid CLI bundles command utilities from anchor-audit and canon, providing a single point of interaction for distributed audits and ledger checks.",
  status: "Flagship system",
  links: [],
  overview: [
    "Grid CLI coordinates policy synchronization, local AST scanning, and cryptographic ledger verification directly from a developer shell."
  ],
  problem: [
    "Developers must manage separate configs, profiles, and keys for Anchor and Canon instances."
  ],
  motivation: [
    "To provide a single entry point for all local verification and compliance checking routines."
  ],
  solution: [
    "Compile commands under a single click-based shell application called grid."
  ],
  implementation: [
    "Python client CLI package with local config state management."
  ],
  decisions: [
    "Combining disparate CLI packages into a unified tool with local profile persistence."
  ],
  challenges: [
    "Maintaining backward-compatible flags as the underlying Anchor and Canon utilities change."
  ],
  architecture: {
    title: "CLI Wrapper",
    diagram: [
      "Developer Shell",
      "  ↓ (grid Command)",
      "Grid CLI Wrapper",
      "  ↙       ↘",
      "Anchor    Canon"
    ],
    notes: [
      "Centralizes credential loading.",
      "Simplifies local workflows."
    ],
  },
  components: [
    { name: "Grid Client", description: "Click wrapper command index." },
    { name: "Profile Manager", description: "Saves configurations locally." },
  ],
  features: [
    "Unified command index",
    "Profile config management",
  ],
  demo: {
    title: "CLI Usage",
    description: "Initialize and audit.",
    code: `grid init
grid audit .`,
    output: ["Initialized profiles", "Scan complete: 0 violations"],
  },
  documentation: [
    "Command index",
  ],
  whitepapers: [],
  benchmarks: [
    "Startup latency: <80ms",
  ],
  roadmap: {
    shipped: ["Unified commands wrapper"],
    next: ["Automatic shell completions", "Remote hub sync commands"],
  },
  relatedSystems: ["Anchor", "Canon"],
};

const forge: FlagshipSystem = {
  slug: "forge",
  name: "FORGE",
  category: "AI Infrastructure",
  tagline: "File-Oriented Rust Grade Engine utilizing free cloud storage APIs.",
  summary:
    "FORGE is a high-performance database engine built in Rust that turns free cloud storage providers (Google Drive, MEGA, pCloud) into queryable, authenticated databases via a custom binary format and REST API.",
  status: "Active development",
  links: [
    { label: "GitHub Repository", href: "https://github.com/AnimusLab/FORGE" }
  ],
  overview: [
    "FORGE uses cloud storage you already own and exposes it as a database with its own binary specification, eliminating high locked-in subscription pricing tiers."
  ],
  problem: [
    "Free database tiers are highly restrictive and locks developers into expensive plans.",
    "Using cloud APIs directly for structured querying is slow and lacks schema definitions."
  ],
  motivation: [
    "I built FORGE to challenge lock-in billing by utilizing free cloud storage allocations for running prototype apps and personal databases."
  ],
  solution: [
    "A custom database engine with its own binary format (.forge), REST endpoints, and an in-memory index engine for fast queries."
  ],
  implementation: [
    "Axum web framework, Tokio async runtime, and custom binary parsing engine in Rust."
  ],
  decisions: [
    "Decoupling the storage provider syncing layer from the memory database to support multiple drive providers natively.",
    "Designing a custom header block format to avoid parsing the entire database file for metadata checks."
  ],
  challenges: [
    "Achieving transaction isolation and data durability across asynchronous cloud drive API sync cycles.",
  ],
  architecture: {
    title: "Storage Engine",
    diagram: [
      "Client Application",
      "  ↓ (HTTPS Request with X-Forge-Key)",
      "FORGE REST Engine",
      "  ↓ (In-memory Index / Binary Parse)",
      "Custom .forge File (Disk)",
      "  ↓ (Async Sync Worker)",
      "Cloud Storage API (Google Drive / MEGA)"
    ],
    notes: [
      "In-memory index resolves queries fast.",
      "Syncing runs in a background thread."
    ],
  },
  components: [
    { name: "Axum REST Router", description: "Handles authentication and exposes CRUD routes." },
    { name: "Binary Serializer", description: "Saves records to customized .forge database files." },
    { name: "Query Engine", description: "Executes filters and projections in memory." },
  ],
  features: [
    "Custom binary file format",
    "API Key authorization (X-Forge-Key)",
    "Google Drive storage sync",
  ],
  demo: {
    title: "Insert and Query",
    description: "Write records to collection.",
    code: `curl -X POST http://localhost:8080/v1/data/users \\
  -H "X-Forge-Key: secret" \\
  -d '{"name": "Tanishq", "age": 21}'`,
    output: ["ID: USR-893", "Status: Saved to memory index", "Sync: Google Drive update scheduled"],
  },
  documentation: [
    "API Schema",
    "Deployment guide",
  ],
  whitepapers: [],
  benchmarks: [
    "Query execution: <280µs",
    "Rest API latency: <12ms",
  ],
  roadmap: {
    shipped: ["REST endpoints", "Binary format serializer", "Memory query engine"],
    next: ["WAL transaction log", "Google Drive syncing engine", "Railway deployment script"],
  },
  relatedSystems: ["QuantForge"],
};

const shadowWatch: FlagshipSystem = {
  slug: "shadowwatch",
  name: "Shadow Watch",
  category: "AI Infrastructure",
  tagline: "Passive behavioral intelligence and account takeover (ATO) detection library.",
  summary:
    "Shadow Watch tracks user activity, builds interest profiles, and calculates behavioral fingerprints dynamically to identify account takeovers (ATO) without active verification challenges.",
  status: "Flagship system",
  links: [
    { label: "GitHub Repository", href: "https://github.com/Tanishq1030/Shadow_Watch" },
    { label: "PyPI Package", href: "https://pypi.org/project/shadowwatch/" }
  ],
  overview: [
    "Shadow Watch sits silently in the application request pipeline, constructing user interest indices and calculating login continuity scores to stop takeovers."
  ],
  problem: [
    "Credential stuffing and hijacked accounts bypass standard authentication systems undetected.",
    "Aggressive verification gates (MFA/Captchas) introduce friction for valid users."
  ],
  motivation: [
    "I built Shadow Watch while working on QuantForge to passively authenticate CLI terminal sessions based on historical command signatures."
  ],
  solution: [
    "Analyze sequential logs, build trust profiles, and calculate behavioral drift continuity metrics asynchronously."
  ],
  implementation: [
    "Python client package, asyncpg database adapters, and statistical drift matching algorithms."
  ],
  decisions: [
    "Making the library database-agnostic so developers can plug it into PostgreSQL, SQLite, or MySQL.",
    "Decoupling telemetry collection from analysis routes to keep request-response cycles fast."
  ],
  challenges: [
    "Preventing false positives caused by sudden, legitimate changes in user browsing context.",
  ],
  architecture: {
    title: "Watch Pipeline",
    diagram: [
      "Inbound Request",
      "  ↓ (Surveillance Middleware)",
      "Shadow Watch Logger",
      "  ↙             ↘",
      "Database Sink    Continuity Evaluator",
      "  ↓             ↓",
      "Aggregated Profile  Trust Verification Score"
    ],
    notes: [
      "Continuity checks take less than 1ms.",
      "Operates fully asynchronously."
    ],
  },
  components: [
    { name: "Surveillance Middleware", description: "Intercepts request payloads silently." },
    { name: "Fingerprinter", description: "Computes user behavioral hash signatures." },
    { name: "Continuity Engine", description: "Evaluates logins against historical patterns." },
  ],
  features: [
    "Passive activity logging",
    "Adaptive login trust scoring",
    "ATO prevention integration",
  ],
  demo: {
    title: "ATO Check",
    description: "Verify login context.",
    code: `from shadowwatch import ShadowWatch
sw = ShadowWatch(database_url="postgresql://localhost/db")
await sw.calculate_continuity("user_123")`,
    output: ["Continuity Score: 0.84", "Status: Stable", "ATO Risk: Low"],
  },
  documentation: [
    "FastAPI integration guide",
    "Database setup guidelines",
  ],
  whitepapers: [],
  benchmarks: [
    "Trust score compilation: <850µs",
    "Middleware overhead: <1.1ms",
  ],
  roadmap: {
    shipped: ["Silent logging adapter", "Trust profiling engine", "PostgreSQL database schemas"],
    next: ["Behavioral divergence classification", "Pre-auth intent analysis", "Django adapter coverage"],
  },
  relatedSystems: ["QuantForge"],
};

export const flagshipSystems: FlagshipSystem[] = [
  anchor,
  canon,
  governanceHub,
  quantforge,
  anchorgrid,
  nexxus,
  gridCli,
  forge,
  shadowWatch,
];

export function getFlagshipSystemBySlug(systemSlug: string) {
  return flagshipSystems.find((system) => system.slug === systemSlug);
}

export function getFlagshipSystemSlugs() {
  return flagshipSystems.map((system) => ({ slug: slug(system.slug) }));
}