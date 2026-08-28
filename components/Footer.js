import Link from "next/link";
import { Icon } from "@/components/ui/icon-map";
import { socialLinks, personalInfo } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-fg bg-bg">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <Link href="/" className="font-display text-lg font-bold uppercase text-fg">
              Mustafa<span className="text-accent">Cem</span>
            </Link>
            <p className="mt-2 font-mono text-sm uppercase tracking-wide text-fg-muted">{personalInfo.title}</p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex h-9 w-9 items-center justify-center border-2 border-fg text-fg transition-colors hover:bg-accent hover:text-accent-fg"
                >
                  <Icon name={link.icon} />
                </a>
              ))}
            </div>
            <p className="font-mono text-xs uppercase tracking-wide text-fg-muted">
              © {currentYear} {personalInfo.fullName}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
