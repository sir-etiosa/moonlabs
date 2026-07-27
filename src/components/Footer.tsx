import { site, contact } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 title-block sm:flex-row">
        <p>{site.brand} &middot; &copy; {new Date().getFullYear()}</p>
        <div className="flex gap-6">
          <a href={contact.telegramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)]">
            Telegram
          </a>
          <a href={contact.bookingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)]">
            Book a call
          </a>
        </div>
      </div>
    </footer>
  );
}
