"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { href: "/#stay", label: "Stay" },
  { href: "/rooms", label: "Rooms" },
  { href: "/restaurant-menu", label: "Restaurant" },
  { href: "/bar-menu", label: "Bar" },
  { href: "/#wellness", label: "Wellness" },
  { href: "/#visit", label: "Visit" },
] as const;

export function SiteNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative z-40 bg-[#f6f1e8]">
      <div className="mx-auto w-full max-w-[92rem] px-4 pt-5 sm:px-6 sm:pt-4 md:px-8 lg:px-10 2xl:px-12">
        <header className="rounded-[1.8rem] border border-black/8 bg-white/88 px-4 py-4 shadow-[0_12px_40px_rgba(26,22,18,0.05)] backdrop-blur md:px-5 xl:rounded-full xl:px-6 xl:py-3">
          <div className="xl:hidden">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <Link
                  href="/"
                  className="block font-display text-[1.02rem] tracking-[0.16em] text-[#161b22] sm:text-[1.08rem]"
                  onClick={() => setMenuOpen(false)}
                >
                  QUARTZ HOTEL
                </Link>
                <div className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[#6b6258] sm:text-[10px] sm:tracking-[0.34em]">
                  Luxury Minimal City Stay
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <Link
                  href="/#reserve"
                  className="hidden items-center justify-center gap-2 rounded-full border border-[#161b22] bg-[#161b22] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_14px_32px_rgba(22,27,34,0.16)] transition duration-200 hover:bg-[#2b3138] sm:inline-flex"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.4)]">
                    Reserve
                  </span>
                  <span className="text-white">+</span>
                </Link>

                <button
                  type="button"
                  aria-expanded={menuOpen}
                  aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                  onClick={() => setMenuOpen((open) => !open)}
                  className={`inline-flex h-11 items-center justify-center rounded-full border px-4 text-[11px] font-semibold uppercase tracking-[0.22em] transition duration-200 ${
                    menuOpen
                      ? "border-[#161b22] bg-[#161b22] text-white shadow-[0_14px_32px_rgba(22,27,34,0.16)]"
                      : "border-black/10 bg-[#f7f3ec] text-[#161b22] hover:bg-white"
                  }`}
                >
                  {menuOpen ? "Close" : "Menu"}
                </button>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {menuOpen ? (
                <motion.nav
                  key="mobile-nav"
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="rounded-[1.45rem] border border-black/8 bg-[#f7f3ec] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                    <div className="grid gap-2 sm:grid-cols-2">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{
                            duration: 0.24,
                            delay: index * 0.03,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <Link
                            className="flex min-h-14 items-center justify-between rounded-[1.2rem] border border-black/8 bg-white px-4 py-3 text-[11px] uppercase tracking-[0.24em] text-[#4f473e] shadow-[0_8px_20px_rgba(26,22,18,0.04)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#161b22] hover:text-white"
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                          >
                            <span>{item.label}</span>
                            <span className="text-xs opacity-55">+</span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.nav>
              ) : null}
            </AnimatePresence>
          </div>

          <div className="hidden xl:grid xl:grid-cols-[auto_1fr_auto] xl:items-center xl:gap-4">
            <div className="min-w-0">
              <Link
                href="/"
                className="block font-display text-base tracking-[0.18em] text-[#161b22] sm:text-lg sm:tracking-[0.2em]"
              >
                QUARTZ HOTEL
              </Link>
              <div className="text-[9px] uppercase tracking-[0.3em] text-[#6b6258] sm:text-[10px] sm:tracking-[0.34em]">
                Luxury Minimal City Stay
              </div>
            </div>

            <nav className="flex items-center justify-center gap-5 text-[12px] uppercase tracking-[0.22em] text-[#6a6056]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className="transition hover:text-[#161b22]"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/#reserve"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#161b22] bg-[#161b22] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_14px_32px_rgba(22,27,34,0.16)] transition duration-200 hover:bg-[#2b3138]"
            >
              <span className="text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.4)]">
                Reserve
              </span>
              <span className="text-white">+</span>
            </Link>
          </div>
        </header>
      </div>
    </section>
  );
}
