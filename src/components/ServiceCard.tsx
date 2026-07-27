import Link from "next/link";
import type { Service } from "@/lib/config";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/${service.slug}`}
      className="bp-frame group flex flex-col gap-3 p-6 transition-colors hover:border-[var(--gold)]/50"
    >
      <h3 className="text-lg font-semibold text-[var(--ink)]">{service.name}</h3>
      <p className="text-sm text-[var(--dim)]">{service.short}</p>
      <span className="mono-label mt-auto pt-2 text-[var(--gold)] group-hover:underline">
        See how it works &rarr;
      </span>
    </Link>
  );
}
