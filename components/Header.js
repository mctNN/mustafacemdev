"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { HiMenu, HiX } from "react-icons/hi";
import { Icon } from "@/components/ui/icon-map";
import { navLinks, socialLinks } from "@/lib/data";
import { cn } from "@/lib/cn";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (path) => (path === "/" ? pathname === "/" : pathname.startsWith(path));

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 border-2 border-fg bg-bg-elevated px-5 py-3 shadow-brutal-sm sm:rounded-full">
        <Link href="/" className="font-display text-lg font-bold uppercase text-fg">
          Mustafa<span className="text-accent">Cem</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "border-b-2 py-0.5 font-mono text-sm font-bold uppercase tracking-wide transition-colors",
                isActive(item.href) ? "border-accent text-fg" : "border-transparent text-fg-muted hover:text-fg"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 border-l-2 border-fg pl-4 md:flex">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fg-muted transition-colors hover:text-accent"
                aria-label={link.name}
              >
                <Icon name={link.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>

          <ThemeToggle />

          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center border-2 border-fg text-fg md:hidden"
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 w-full max-w-6xl border-2 border-fg bg-bg-elevated p-4 shadow-brutal-sm md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "border-b-2 border-fg/10 py-2.5 font-mono text-sm font-bold uppercase tracking-wide transition-colors last:border-none",
                    isActive(item.href) ? "text-accent" : "text-fg-muted hover:text-fg"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="mt-4 flex items-center gap-5 border-t-2 border-fg pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg-muted transition-colors hover:text-accent"
                  aria-label={link.name}
                >
                  <Icon name={link.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
