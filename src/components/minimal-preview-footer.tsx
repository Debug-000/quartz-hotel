import Link from "next/link";

export function MinimalPreviewFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[#fff6e8]/10 bg-[#0d0d0b] text-[#fff6e8]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(240,207,164,0.08),transparent_28%),radial-gradient(circle_at_84%_72%,rgba(149,93,60,0.1),transparent_34%)]" />
      <div className="relative mx-auto grid w-full max-w-[92rem] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.25fr_0.75fr_0.75fr_auto] lg:px-12">
        <div>
          <p className="font-display text-[clamp(2.4rem,4vw,4.8rem)] leading-[0.86] tracking-[-0.065em] text-[#fff6e8]">
            Quartz Hotel
          </p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.32em] text-[#d7b891]/62">
            Quiet luxury in the city
          </p>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#efe0c8]/64">
            Calm rooms, warm tables, softer arrivals, and the city held close enough to use without letting it take over.
          </p>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#d7b891]/62">Stay</p>
          <div className="mt-5 grid gap-3 text-sm text-[#efe0c8]/62">
            <Link href="/minimal/rooms" className="transition hover:text-[#fff6e8]">Rooms and suites</Link>
            <Link href="/restaurant-menu" className="transition hover:text-[#fff6e8]">Marlowe Grill</Link>
            <Link href="/bar-menu" className="transition hover:text-[#fff6e8]">Roofline Bar</Link>
          </div>
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#d7b891]/62">Contact</p>
          <div className="mt-5 grid gap-3 text-sm text-[#efe0c8]/62">
            <a href="tel:+12125550188" className="transition hover:text-[#fff6e8]">+1 (212) 555-0188</a>
            <a href="mailto:stay@quartzhotel.com" className="transition hover:text-[#fff6e8]">stay@quartzhotel.com</a>
            <p>Financial district, city center</p>
          </div>
        </div>

        <div className="flex flex-col justify-end gap-3 lg:min-w-64 lg:items-end">
          <Link
            href="/minimal/rooms"
            className="group inline-flex items-center justify-center rounded-full bg-[#f0cfa4] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#17140f] transition hover:-translate-y-1 hover:bg-[#fff6e8]"
          >
            Explore rooms <span className="ml-3 transition group-hover:translate-x-1">+</span>
          </Link>
          <Link
            href="/"
            className="group inline-flex items-center justify-center rounded-full border border-[#fff6e8]/18 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#fff6e8]/72 transition hover:-translate-y-1 hover:border-[#f0cfa4] hover:text-[#f0cfa4]"
          >
            Current site <span className="ml-3 transition group-hover:translate-x-1">+</span>
          </Link>
        </div>
      </div>
      <div className="relative mx-auto flex w-full max-w-[92rem] flex-col gap-3 border-t border-[#fff6e8]/10 px-5 py-5 text-[10px] uppercase tracking-[0.24em] text-[#efe0c8]/38 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <p>Quartz Hotel preview direction</p>
        <p>Luxury minimal city stay</p>
      </div>
    </footer>
  );
}
