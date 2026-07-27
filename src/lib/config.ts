// Central place for brand + contact info. Swap the REPLACE_ME values before going live.
export const site = {
  brand: "Moon Labs",
  tagline: "Senior systems engineering for products that can't afford to break.",
  domain: "www.moonlabs.store",
  url: "https://www.moonlabs.store",
};

export const contact = {
  bookingUrl: "https://calendly.com/moonlabs1/moon-labs-consultation",
  telegramUrl: "https://t.me/moonlabs_1",
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "product-rescue",
    name: "Product Rescue & Technical Audit",
    short: "For products that are stuck, breaking, or scaling badly.",
    description:
      "I take over an existing codebase, find out what's actually wrong, and either fix it myself or hand you a clear plan. No relay race of contractors pointing fingers at each other's code.",
    bullets: [
      "Full codebase + infra audit with a prioritized fix list",
      "Security and stability review (critical for anything web3-adjacent)",
      "Direct hands-on fixes, or a scoped roadmap for your team",
      "Fixed-scope engagement, not an open-ended retainer",
    ],
  },
  {
    slug: "new-build",
    name: "MVP / New Product Build",
    short: "For founders launching something new.",
    description:
      "A senior engineer owning your build end to end — architecture, backend, frontend, mobile, or all three — instead of a junior team learning on your budget.",
    bullets: [
      "Web, mobile, and SaaS products built for real users, not demos",
      "Architecture decisions that won't need a rewrite in a year",
      "Milestone-based delivery so you see progress every week",
      "Built solo or alongside your existing team",
    ],
  },
  {
    slug: "web3-hardware",
    name: "Web3 & Smart Contract Engineering",
    short: "For blockchain products that need real engineering, not just Solidity.",
    description:
      "Smart contracts, backend integration, and the infrastructure around them, built by someone who treats security and correctness as the actual deliverable, not an afterthought.",
    bullets: [
      "Smart contract design, integration, and review",
      "Backend + indexing infrastructure around your protocol",
      "Wallet, custody, and on/off-chain data flow design",
      "Plain-language explanations for non-technical stakeholders",
    ],
  },
  {
    slug: "hardware-convergence",
    name: "Embedded & Hardware Integration",
    short: "For products where software has to talk to physical hardware.",
    description:
      "Firmware and systems-level work in C, C++, and Rust, wired into the same cloud, mobile, or blockchain backend the rest of your product runs on.",
    bullets: [
      "Embedded firmware in C / C++ / Rust",
      "Device-to-cloud and device-to-chain data pipelines",
      "IoT and hardware convergence points for existing products",
      "One engineer across the firmware/backend boundary, no handoff gaps",
    ],
  },
];

export const processSteps = [
  {
    title: "Scope call",
    description:
      "A focused call about what's broken, what you're building, and whether it's a fit. No sales pitch.",
  },
  {
    title: "Proposal & milestones",
    description:
      "A written scope with fixed milestones and pricing before any work starts. You know what you're paying for.",
  },
  {
    title: "Build or fix, in the open",
    description:
      "Regular check-ins against the milestones. You see progress, not just a final reveal.",
  },
  {
    title: "Handover & support",
    description:
      "Clean documentation and a working handover, plus a support window after delivery.",
  },
];
