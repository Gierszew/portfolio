"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { num: "01", label: "Projects", href: "/projects" },
  { num: "02", label: "About",    href: "/about" },
  { num: "03", label: "Contact",  href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled || open
          ? "bg-black/60 backdrop-blur-md border-white/5 py-5"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center px-6 py-4">
        <nav className="w-1/4 flex justify-start">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-sm tracking-tight text-zinc-100"
          >
            <span className="relative">
              gierszew
              <span className="absolute -right-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
            </span>
          </Link>
        </nav>

        <nav className="hidden md:flex w-1/4 justify-around font-mono text-sm">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex items-baseline gap-1.5 text-zinc-400 transition-colors hover:text-zinc-100"
            >
              <span className="text-[11px] text-green-400/70 group-hover:text-green-400 transition-colors">
                {item.num}.
              </span>
              <span className="relative">
                {item.label}
                <span className="absolute left-0 -bottom-1 h-px w-full origin-left scale-x-0 bg-green-400 transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </Link>
          ))}
        </nav>

        <nav className="w-3/4 md:w-1/2 flex justify-end items-center gap-4 font-mono text-xs text-zinc-500">
          <span className="hidden sm:inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
            available
          </span>

          <a
            href=""
            className="hidden sm:inline-flex rounded-full border border-green-400/30 bg-green-400/10 px-3 py-1.5 text-green-300 transition-all hover:border-green-400/60 hover:bg-green-400/20 hover:shadow-[0_0_20px_-4px_#4ade80]"
          >
            get in touch
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden relative flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/5 transition-colors hover:border-green-400/40 hover:bg-white/10"
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-px w-full bg-zinc-200 transition-all duration-300 ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 bg-zinc-200 transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-zinc-200 transition-all duration-300 ${
                  open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </nav>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-white/5 bg-black/80 backdrop-blur-md transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-6 font-mono text-sm">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-baseline gap-3 rounded-md px-3 py-3 transition-colors ${
                  active
                    ? "bg-white/5 text-zinc-100"
                    : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
                }`}
              >
                <span className="text-[11px] text-green-400/70 group-hover:text-green-400 transition-colors">
                  {item.num}.
                </span>
                <span>{item.label}</span>
                <span className="ml-auto text-green-400/40 group-hover:text-green-400 transition-colors">
                  →
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}