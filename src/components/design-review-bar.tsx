"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const reviewLinks = [
  { href: "/", label: "Home 1" },
  { href: "/minimal", label: "Home 2" },
  { href: "/minimal-3", label: "Home 3" },
] as const;

export function DesignReviewBar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-[70] border-b border-black/8 bg-[#161b22] text-white">
      <div className="mx-auto flex w-full max-w-[92rem] flex-col gap-3 px-4 py-3 sm:px-6 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10 2xl:px-12">
        <div className="shrink-0">
          <p className="text-[10px] uppercase tracking-[0.32em] text-white/52">
            Temporary Review Nav
          </p>
          <p className="mt-1 text-sm text-white/76">
            Switch between homepage directions while the client chooses a route.
          </p>
        </div>

        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 lg:max-w-[62rem]">
          {reviewLinks.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`shrink-0 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition ${
                  active
                    ? "bg-[#ead9c3] text-[#161b22]"
                    : "border border-white/12 bg-white/6 text-white/78 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
