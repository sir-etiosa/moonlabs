import CTAButton from "./CTAButton";
import { contact } from "@/lib/config";

const proof = [
  {
    label: "Track record",
    detail: "13+ web3 products and MVPs shipped, most under NDA or built stealth-mode for founders pre-launch.",
  },
  {
    label: "Cross-domain",
    detail: "Web3 is the core, but the same engineering has shipped for agriculture and wellness/health products too.",
  },
  {
    label: "Systems + full-stack",
    detail: "C, C++, and Rust for the hard parts; web, mobile, and SaaS for everything built on top.",
  },
];

export default function ProofSection() {
  return (
    <section id="proof" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mono-label text-[var(--dim)]">Status</h2>
      <p className="log-line mt-4">
        &gt; checking availability<span className="tag">...</span> <span className="ok">done</span>
      </p>
      <p className="mt-4 max-w-2xl text-[var(--ink)]">
        What you get is direct access to the engineer who did the work above, not an account
        manager relaying to one.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {proof.map((p) => (
          <div key={p.label} className="bp-frame p-6">
            <h3 className="mono-label text-[var(--gold)]">{p.label}</h3>
            <p className="mt-2 text-sm text-[var(--dim)]">{p.detail}</p>
          </div>
        ))}
      </div>

      <div className="bp-frame mt-10 flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-6">
          <div>
            <p className="mono-label text-[var(--dim)]">Availability</p>
            <p className="mt-1 text-sm text-[var(--gold)]">Open &mdash; 2 project slots</p>
          </div>
          <div>
            <p className="mono-label text-[var(--dim)]">Response time</p>
            <p className="mt-1 text-sm text-[var(--gold)]">&lt; 24h</p>
          </div>
        </div>
        <CTAButton href={contact.bookingUrl} className="shrink-0">
          Book a free audit call
        </CTAButton>
      </div>
    </section>
  );
}
