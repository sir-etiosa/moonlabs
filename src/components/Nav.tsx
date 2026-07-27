import Link from "next/link";
import Image from "next/image";
import { site, contact } from "@/lib/config";
import CTAButton from "./CTAButton";
import logo from "@/app/assets/moonlabs.png";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="mono-label flex items-center gap-2 text-[var(--ink)]">
          <Image src={logo} alt="" width={24} height={24} className="rounded-full" priority />
          {site.brand}
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-[var(--dim)] md:flex">
          <Link href="/#services" className="hover:text-[var(--ink)]">Services</Link>
          <Link href="/#process" className="hover:text-[var(--ink)]">Process</Link>
          <Link href="/#proof" className="hover:text-[var(--ink)]">Status</Link>
          <Link href="/#contact" className="hover:text-[var(--ink)]">Contact</Link>
        </nav>
        <CTAButton href={contact.bookingUrl} className="!px-4 !py-2 text-xs">
          Book a call
        </CTAButton>
      </div>
    </header>
  );
}
