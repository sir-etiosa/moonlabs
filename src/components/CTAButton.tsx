import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function CTAButton({ href, children, variant = "primary", className = "" }: Props) {
  const base = "inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-[var(--gold)] text-[var(--gold-ink)] hover:brightness-110"
      : "mono-label !text-xs border border-[var(--border)] text-[var(--dim)] hover:border-[var(--gold)]/50 hover:text-[var(--ink)]";

  const external = href.startsWith("http");

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
