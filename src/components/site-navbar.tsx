import Link from "next/link";

const navItems = [
  { href: "/#stay", label: "Stay" },
  { href: "/rooms", label: "Rooms" },
  { href: "/restaurant-menu", label: "Restaurant" },
  { href: "/bar-menu", label: "Bar" },
  { href: "/#wellness", label: "Wellness" },
  { href: "/#visit", label: "Visit" },
] as const;

export function SiteNavbar() {
  return (
    <section className="relative bg-[#f6f1e8]">
      <div className="mx-auto w-full max-w-[92rem] px-4 pt-5 sm:px-6 sm:pt-4 md:px-8 lg:px-10 2xl:px-12">
        <header className="flex items-center justify-between rounded-full border border-black/8 bg-white/80 px-4 py-3 shadow-[0_12px_40px_rgba(26,22,18,0.05)] backdrop-blur md:px-6">
          <div>
            <Link
              href="/"
              className="font-display text-lg tracking-[0.2em] text-[#161b22]"
            >
              QUARTZ HOTEL
            </Link>
            <div className="text-[10px] uppercase tracking-[0.34em] text-[#6b6258]">
              Luxury Minimal City Stay
            </div>
          </div>

          <nav className="hidden items-center gap-5 text-[12px] uppercase tracking-[0.22em] text-[#6a6056] xl:flex">
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
            className="inline-flex items-center justify-center gap-3 rounded-full border border-[#161b22] bg-[#161b22] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_14px_32px_rgba(22,27,34,0.16)] transition duration-200 hover:bg-[#2b3138]"
          >
            <span className="text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.4)]">
              Reserve
            </span>
            <span className="text-white">+</span>
          </Link>
        </header>
      </div>
    </section>
  );
}
