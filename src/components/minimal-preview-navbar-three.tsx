"use client";

import Link from "next/link";
import { useState } from "react";

const sectionLinks = [
  { href: "#stay", label: "Stay" },
  { href: "#planner", label: "Planner" },
  { href: "#dining", label: "Dining" },
  { href: "#wellness", label: "Wellness" },
  { href: "#visit", label: "Visit" },
  { href: "#reserve", label: "Reserve" },
] as const;

export function MinimalPreviewNavbarThree() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-[7.25rem] z-[60] px-4 py-3 sm:top-[6.25rem] sm:px-6 lg:top-[3.75rem]">
      <div className="mx-auto flex w-full max-w-[92rem] items-center justify-between gap-4 rounded-full border border-white/38 bg-[#fffaf0]/42 px-4 py-3 shadow-[0_24px_70px_rgba(0,0,0,0.12)] backdrop-blur-2xl sm:px-5">
        <div className="min-w-0">
          <Link
            href="/minimal-3"
            className="block font-display text-xl tracking-[-0.035em] text-[#17140f] sm:text-2xl"
          >
            Quartz
          </Link>
        </div>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-6">
          {sectionLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-2 text-[9px] uppercase tracking-[0.24em] text-[#332b22] transition hover:text-[#17140f]"
            >
              <span className="absolute inset-x-0 bottom-0 h-px origin-center scale-x-0 bg-[#f0cfa4] shadow-[0_0_18px_rgba(240,207,164,0.9)] transition duration-300 group-hover:scale-x-100" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#reserve"
            className="hidden rounded-full bg-[#fffaf0] px-5 py-3 text-[9px] font-bold uppercase tracking-[0.24em] text-[#17140f] shadow-[0_14px_36px_rgba(0,0,0,0.16)] transition hover:-translate-y-0.5 hover:bg-[#f0cfa4] sm:inline-flex"
          >
            Book
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex rounded-full border border-white/42 bg-[#fffaf0]/78 px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.22em] text-[#17140f] backdrop-blur lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close section menu" : "Open section menu"}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="mx-auto mt-2 max-w-[92rem] rounded-[1.6rem_0.5rem_1.6rem_0.5rem] border border-white/40 bg-[#fffaf0]/94 shadow-[0_24px_70px_rgba(0,0,0,0.14)] backdrop-blur-2xl lg:hidden">
          <div className="grid px-4 py-3">
            {sectionLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#ead8bd] px-1 py-4 text-[10px] uppercase tracking-[0.2em] text-[#17140f] last:border-b-0"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
