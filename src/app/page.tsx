import CTAButton from "@/components/CTAButton";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import ProofSection from "@/components/ProofSection";
import ContactSection from "@/components/ContactSection";
import { contact, services } from "@/lib/config";

const buyers = [
  {
    title: "Your product is stuck, breaking, or scaling badly",
    description:
      "Bugs nobody can trace, a codebase past contractors left behind, infra that falls over under load. I take it over and stabilize it.",
  },
  {
    title: "You're launching something new",
    description:
      "A web, mobile, SaaS, or web3 product that needs one senior engineer making the architecture calls, not a junior team learning on your budget.",
  },
  {
    title: "Software has to talk to hardware",
    description:
      "Firmware, embedded systems, or IoT devices that need to sync cleanly with the cloud, mobile app, or blockchain backend already in place.",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="bp-frame p-8 sm:p-12">
          <p className="log-line mb-6">
            &gt; scanning product health<span className="tag">...</span> <span className="ok">done</span>
            <br />
            &gt; engineer <span className="tag">assigned</span>: senior, full-stack, web3 + embedded
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[var(--ink)] sm:text-5xl">
            Your product is stuck, breaking, or stalled. I fix that.
            <span className="cursor-blink" aria-hidden="true" />
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--dim)]">
            Senior software engineer taking over existing products &mdash; and building new ones &mdash;
            across web, mobile, SaaS, and web3. When hardware&apos;s involved, I write the C, C++, and
            Rust underneath it too. One engineer, no relay race of contractors.
          </p>

          <div className="mt-8 grid grid-cols-1 divide-y divide-[var(--border)] border border-[var(--border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="p-4">
              <p className="mono-label text-[var(--dim)]">Scope</p>
              <p className="mt-1 text-sm text-[var(--ink)]">Web &middot; Mobile &middot; SaaS</p>
            </div>
            <div className="p-4">
              <p className="mono-label text-[var(--dim)]">Depth</p>
              <p className="mt-1 text-sm text-[var(--ink)]">Firmware &middot; C / C++ / Rust</p>
            </div>
            <div className="p-4">
              <p className="mono-label text-[var(--dim)]">Focus</p>
              <p className="mt-1 text-sm text-[var(--ink)]">Web3 &middot; Product Rescue</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <CTAButton href={contact.bookingUrl}>Book a free audit call</CTAButton>
            <CTAButton href="#services" variant="secondary">
              view-services
            </CTAButton>
          </div>

          <div className="title-block mt-10 flex flex-wrap justify-between gap-2 border-t border-dashed border-[var(--border)] pt-4">
            <span>Dwg. Kings-Lab-01</span>
            <span>Scale: 1:1</span>
            <span>Rev. A</span>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mono-label text-[var(--dim)]">Who this is for</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {buyers.map((b) => (
              <div key={b.title}>
                <h3 className="text-lg font-semibold text-[var(--ink)]">{b.title}</h3>
                <p className="mt-2 text-sm text-[var(--dim)]">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-bold text-[var(--ink)]">How we can work together</h2>
        <p className="mt-3 max-w-2xl text-[var(--dim)]">
          Fixed-scope engagements, not open-ended retainers. Pick the one closest to what you need
          &mdash; we&apos;ll refine the scope on the call.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <section id="process" className="border-y border-[var(--border)] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-[var(--ink)]">How an engagement runs</h2>
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <ProofSection />
      <ContactSection />
    </>
  );
}
