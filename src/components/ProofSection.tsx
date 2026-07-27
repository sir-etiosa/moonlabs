import CTAButton from "./CTAButton";
import { contact } from "@/lib/config";

const proof = [
  {
    label: "Systems background",
    detail: "C, C++, and Rust across embedded, backend, and performance-critical code.",
  },
  {
    label: "Full-stack range",
    detail: "Web, mobile, and SaaS products shipped end to end, not just prototypes.",
  },
  {
    label: "Web3-native",
    detail: "Smart contracts and the infrastructure around them, built with security as a first-class concern.",
  },
];

export default function ProofSection() {
  return (
    <section id="proof" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mono-label text-[var(--dim)]">Status</h2>
      <p className="log-line mt-4">
        &gt; checking case-study archive<span className="tag">...</span>{" "}
        <span className="tag">empty</span> &mdash; studio newly public
      </p>
      <p className="mt-4 max-w-2xl text-[var(--ink)]">
        This studio is newly public, so the case-study wall is still being built &mdash; that&apos;s the
        honest version. What you get in the meantime is direct access to the engineer doing the
        work, not an account manager relaying to one.
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
