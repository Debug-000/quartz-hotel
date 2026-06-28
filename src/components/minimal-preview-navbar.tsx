"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

const previewNavItems = [
  { href: "/minimal", label: "Preview Home" },
  { href: "/minimal/rooms", label: "Room Design" },
  { href: "/restaurant-menu", label: "Restaurant" },
  { href: "/bar-menu", label: "Bar" },
] as const;

export function MinimalPreviewNavbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <div className="sticky top-0 z-50 border-b border-black/6 bg-[#f7f4ef]/92 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[92rem] items-center justify-between gap-4 px-4 py-4 sm:px-6 md:px-8 lg:px-10 2xl:px-12">
        <div className="min-w-0">
          <Link
            href="/minimal"
            className="block font-display text-base tracking-[0.16em] text-[#161b22] sm:text-lg"
            onClick={() => setMenuOpen(false)}
          >
            QUARTZ HOTEL
          </Link>
          <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-[#817565]">
            Minimal preview direction
          </p>
        </div>

        <nav className="hidden items-center gap-3 lg:flex">
          {previewNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition ${
                isActive(item.href)
                  ? "bg-[#161b22] text-white"
                  : "border border-black/8 text-[#4f473e] hover:border-[#161b22] hover:text-[#161b22]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="hidden rounded-full border border-black/8 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#4f473e] transition hover:border-[#161b22] hover:text-[#161b22] sm:inline-flex"
          >
            Current site
          </Link>
          <Link
            href="/#reserve"
            className="hidden rounded-full bg-[#161b22] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white transition hover:bg-[#2b3138] md:inline-flex"
          >
            Reserve
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close preview menu" : "Open preview menu"}
            className="inline-flex h-10 items-center justify-center rounded-full border border-black/8 px-4 text-[11px] uppercase tracking-[0.22em] text-[#161b22] transition hover:border-[#161b22] lg:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-black/6 lg:hidden"
          >
            <div className="mx-auto grid w-full max-w-[92rem] gap-2 px-4 py-4 sm:px-6 md:px-8">
              {previewNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-[1.1rem] px-4 py-3 text-sm transition ${
                    isActive(item.href)
                      ? "bg-[#161b22] text-white"
                      : "border border-black/8 bg-white text-[#161b22]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-black/8 px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-[#4f473e]"
                >
                  Current site
                </Link>
                <Link
                  href="/#reserve"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-[#161b22] px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-white"
                >
                  Reserve
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
