import Link from "next/link";

const footerSections = [
  {
    title: "Stay",
    items: ["Rooms & Suites", "Room Typologies", "Wellness", "Dining"],
  },
  {
    title: "Hotel",
    items: ["Restaurant Menu", "Bar Menu", "Concierge", "Direct Booking"],
  },
  {
    title: "Practical",
    items: [
      "Check-in 3:00 pm",
      "Check-out 12:00 pm",
      "Airport transfer",
      "Flexible rates",
    ],
  },
] as const;

function FooterItem({ item }: { item: string }) {
  if (item === "Room Typologies") {
    return (
      <Link href="/rooms" className="transition hover:text-white">
        {item}
      </Link>
    );
  }

  if (item === "Restaurant Menu") {
    return (
      <Link href="/restaurant-menu" className="transition hover:text-white">
        {item}
      </Link>
    );
  }

  if (item === "Bar Menu") {
    return (
      <Link href="/bar-menu" className="transition hover:text-white">
        {item}
      </Link>
    );
  }

  return <>{item}</>;
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-12 top-12 h-56 w-56 rounded-full bg-[#e7d2b2]/50 blur-3xl" />
        <div className="absolute right-[-3rem] top-[18rem] hidden h-72 w-72 rounded-full bg-[#b7c9df]/28 blur-3xl lg:block" />
        <div className="absolute bottom-[12rem] left-[12%] hidden h-52 w-52 rounded-full bg-[#d9bf98]/22 blur-3xl xl:block" />
      </div>

      {children}

      <section className="bg-[#131920] text-white">
        <div className="mx-auto w-full max-w-[92rem] px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-10 2xl:px-12">
          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,#1c232c,#12171d_56%,#d9bf98_180%)] shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
            <div className="pointer-events-none absolute -right-12 top-4 h-48 w-48 rounded-full bg-[#ead9c3]/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-52 w-52 rounded-full bg-[#7d98b6]/15 blur-3xl" />
            <div className="grid gap-8 p-7 lg:grid-cols-[1.05fr_0.95fr] lg:p-9">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/55">
                  Reserve at Quartz Hotel
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.15rem,5vw,4.7rem)] leading-[0.98] tracking-[-0.04em] text-white">
                  Stay central, arrive calmer, and book directly for the smoothest check-in.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/72">
                  Flexible rates, concierge planning, rooftop priority when available, and direct support before you arrive.
                </p>
              </div>

              <div className="grid gap-4 self-end rounded-[1.8rem] border border-white/10 bg-white/6 p-5 backdrop-blur">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.1rem] border border-white/10 bg-white/6 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/52">
                      Call
                    </p>
                    <p className="mt-2 text-sm text-white">+1 (212) 555-0188</p>
                  </div>
                  <div className="rounded-[1.1rem] border border-white/10 bg-white/6 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/52">
                      Email
                    </p>
                    <p className="mt-2 text-sm text-white">stay@quartzhotel.com</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/#reserve"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-[#e3cfb3] bg-[#ead9c3] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#161b22] shadow-[0_14px_32px_rgba(200,173,136,0.18)] transition duration-200 hover:bg-white"
                  >
                    <span>Reserve a stay</span>
                    <span>+</span>
                  </Link>
                  <Link
                    href="/#visit"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/6 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition duration-200 hover:bg-white/10"
                  >
                    <span>Find the hotel</span>
                    <span>+</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-10 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr]">
            <div>
              <p className="font-display text-2xl tracking-[0.18em] text-white">
                QUARTZ HOTEL
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/42">
                Luxury Minimal City Stay
              </p>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/64">
                18 Marlowe Avenue, Marlowe District. A five-star city hotel designed around calm rooms, polished service, and a livelier rooftop after dark.
              </p>
            </div>

            {footerSections.map((section) => (
              <div key={section.title}>
                <p className="text-[11px] uppercase tracking-[0.26em] text-white/42">
                  {section.title}
                </p>
                <div className="mt-4 space-y-3">
                  {section.items.map((item) => (
                    <p key={item} className="text-sm text-white/72">
                      <FooterItem item={item} />
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </footer>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/52 sm:flex-row sm:items-center sm:justify-between">
            <p>Concept photography sourced from Unsplash.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#stay" className="transition hover:text-white">
                Rooms
              </Link>
              <Link href="/#dining" className="transition hover:text-white">
                Dining
              </Link>
              <Link href="/#wellness" className="transition hover:text-white">
                Wellness
              </Link>
              <Link href="/#reserve" className="transition hover:text-white">
                Book Direct
              </Link>
            </div>
          </div>
        </div>
        <div className="fixed inset-x-4 bottom-4 z-20 md:hidden">
          <Link
            href="/#reserve"
            className="flex w-full items-center justify-center gap-3 rounded-full border border-[#e3cfb3] bg-[#ead9c3] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#161b22] shadow-[0_20px_50px_rgba(22,27,34,0.18)] backdrop-blur transition duration-200 hover:bg-white"
          >
            <span>Reserve</span>
            <span>+</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
