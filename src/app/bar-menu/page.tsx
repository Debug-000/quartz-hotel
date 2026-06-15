import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame } from "@/components/quartz-page-frame";
import { barMenu } from "@/lib/quartz-data";

export const metadata: Metadata = {
  title: "Roofline Bar Menu | Quartz Hotel",
  description:
    "Explore the Roofline Bar menu at Quartz Hotel with signature cocktails, no-proof drinks, and late-night plates.",
};

const serviceNotes = [
  ["Hours", "5:00 pm - 1:00 am"],
  ["Late plates", "Until midnight"],
  ["Seating", "Rooftop when available"],
  ["Mood", "Premium casual after dark"],
] as const;

export default function BarMenuPage() {
  return (
    <PageFrame>
      <section className="mx-auto w-full max-w-[92rem] px-4 pb-14 pt-6 sm:px-6 md:px-8 lg:px-10 lg:pb-18 lg:pt-8 2xl:px-12">
        <div className="rounded-[2.2rem] border border-black/8 bg-[linear-gradient(180deg,#fffdfa_0%,#f7f1e8_100%)] shadow-[0_24px_60px_rgba(31,24,18,0.06)]">
          <div className="border-b border-black/8 px-6 py-7 sm:px-8 lg:px-10 lg:py-9">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a7c6d]">
                  Roofline Bar
                </p>
                <h1 className="mt-4 max-w-xl font-display text-[clamp(2.4rem,5vw,4.7rem)] leading-[0.94] tracking-[-0.05em] text-[#161b22]">
                  Bar menu
                </h1>
                <p className="mt-4 max-w-lg text-sm leading-7 text-[#4f473e] sm:text-base">
                  Signature cocktails, lighter pours, and late plates for after dark.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {serviceNotes.map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-[1.15rem] border border-black/8 bg-white/70 px-4 py-4"
                  >
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#8a7c6d]">
                      {label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#161b22]">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/restaurant-menu"
                className="group inline-flex items-center justify-center rounded-full border border-[#161b22] bg-[#161b22] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_14px_32px_rgba(22,27,34,0.16)] transition hover:bg-[#2b3138]"
              >
                <span className="text-[#fffaf2] [text-shadow:0_1px_1px_rgba(0,0,0,0.35)]">
                  Restaurant menu
                </span>
              </Link>
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[16rem_minmax(0,1fr)]">
            <aside className="border-b border-black/8 px-6 py-6 lg:sticky lg:top-24 lg:h-fit lg:border-b-0 lg:border-r lg:px-8 lg:py-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#8a7c6d]">
                Sections
              </p>
              <div className="mt-4 space-y-3">
                {barMenu.map((section) => (
                  <a
                    key={section.title}
                    href={`#${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block text-sm leading-6 text-[#4f473e] transition hover:translate-x-1 hover:text-[#161b22]"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </aside>

            <div className="px-6 py-6 sm:px-8 lg:px-10 lg:py-8">
              <div className="space-y-10">
                {barMenu.map((section, index) => (
                  <section
                    key={section.title}
                    id={section.title.toLowerCase().replace(/\s+/g, "-")}
                    className="scroll-mt-28 border-b border-black/8 pb-10 last:border-none last:pb-0"
                  >
                    <div className="mb-6 grid gap-3 sm:grid-cols-[minmax(0,1fr)_14rem] sm:items-end">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.28em] text-[#8a7c6d]">
                          {section.title}
                        </p>
                        <p className="mt-3 max-w-xl text-sm leading-7 text-[#5a5248]">
                          {section.note}
                        </p>
                      </div>
                      {index === 0 ? (
                        <div className="rounded-full border border-[#161b22] bg-[#161b22] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white sm:justify-self-end">
                          House signatures
                        </div>
                      ) : null}
                    </div>

                    <div className="space-y-6">
                      {section.items.map((item) => (
                        <article
                          key={item.name}
                          className="grid gap-3 border-t border-black/8 pt-5 sm:grid-cols-[minmax(0,1fr)_6rem]"
                        >
                          <div>
                            <h2 className="font-display text-[2rem] leading-none text-[#161b22]">
                              {item.name}
                            </h2>
                            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#4f473e]">
                              {item.description}
                            </p>
                          </div>
                          <div className="text-left sm:text-right">
                            <span className="text-base font-medium text-[#161b22]">
                              {item.price}
                            </span>
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
