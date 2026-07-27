import CTAButton from "./CTAButton";
import { contact } from "@/lib/config";

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="bp-frame p-10 text-center">
        <p className="log-line mb-4">
          &gt; awaiting input<span className="cursor-blink" aria-hidden="true" />
        </p>
        <h2 className="text-2xl font-bold text-[var(--ink)] sm:text-3xl">
          Tell me what&apos;s broken, or what you&apos;re building.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-[var(--dim)]">
          20 minutes, no pitch deck. If it&apos;s not a fit, I&apos;ll tell you that too.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton href={contact.bookingUrl}>Book a free audit call</CTAButton>
          <CTAButton href={contact.telegramUrl} variant="secondary">
            message --telegram
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
