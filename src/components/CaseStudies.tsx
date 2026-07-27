const cases = [
  {
    domain: "Web3 / DeFi",
    title: "DeFi Lending Protocol",
    engagement: "Rescue",
    scope: ["Took over an existing lending protocol", "Stabilized the codebase and shipped"],
    outcome: "Live in 6 weeks from handover",
  },
  {
    domain: "Web3 / Payments",
    title: "Merchant Payment Rail (Stablecoins)",
    engagement: "New build",
    scope: ["Frontend", "Backend", "Blockchain layer", "Mobile app", "DevOps"],
    outcome: "Full stack owned end to end",
  },
  {
    domain: "Wellness / Web3",
    title: "Wellness App",
    engagement: "New build",
    scope: ["Smart contract audit", "System architecture", "Analytics"],
    outcome: "On-chain and off-chain sides built together",
  },
  {
    domain: "E-commerce",
    title: "Artisans Marketplace",
    engagement: "New build",
    scope: ["Architecture through launch"],
    outcome: "Shipped from scratch",
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mono-label text-[var(--dim)]">Selected work</h2>
      <p className="mt-4 max-w-2xl text-[var(--ink)]">
        Most engagements are under NDA or still stealth-mode pre-launch, so names are redacted &mdash;
        the scope and outcomes aren&apos;t.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {cases.map((c) => (
          <div key={c.title} className="bp-frame p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="mono-label text-[var(--gold)]">{c.domain}</p>
              <span className="mono-label border border-[var(--border)] px-2 py-1 text-[var(--dim)]">
                {c.engagement}
              </span>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-[var(--ink)]">{c.title}</h3>
            <p className="mono-label mt-3 text-xs text-[var(--dim)]">
              {c.scope.join(" · ")}
            </p>
            <p className="log-line mt-4">
              &gt; outcome<span className="tag">:</span> <span className="ok">{c.outcome}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
