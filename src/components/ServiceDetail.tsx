import CTAButton from "./CTAButton";
import ProcessSteps from "./ProcessSteps";
import ContactSection from "./ContactSection";
import { contact, services, site, type Service } from "@/lib/config";

export default function ServiceDetail({ service }: { service: Service }) {
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pb-16 pt-20 sm:pt-28">
        <div className="bp-frame p-8 sm:p-10">
          <p className="log-line mb-4">
            &gt; loading service<span className="tag">...</span> <span className="ok">done</span>
          </p>
          <p className="mono-label text-[var(--gold)]">{site.brand} &mdash; {service.name}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl">
            {service.short}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--dim)]">{service.description}</p>
          <div className="mt-10">
            <CTAButton href={contact.bookingUrl}>Book a free scope call</CTAButton>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mono-label text-[var(--dim)]">What&apos;s included</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.bullets.map((b) => (
              <li key={b} className="bp-frame flex gap-3 p-4 text-sm text-[var(--ink)]/80">
                <span className="text-[var(--gold)]">&#10003;</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-bold text-[var(--ink)]">How this engagement runs</h2>
        <div className="mt-10">
          <ProcessSteps />
        </div>
      </section>

      <section className="border-y border-[var(--border)] py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mono-label text-[var(--dim)]">Also available</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {others.map((o) => (
              <a
                key={o.slug}
                href={`/${o.slug}`}
                className="border border-[var(--border)] px-4 py-2 text-sm text-[var(--dim)] hover:border-[var(--gold)]/50 hover:text-[var(--ink)]"
              >
                {o.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
