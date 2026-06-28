/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { roomGallery, roomTypes } from "@/lib/quartz-data";

export default function MinimalPreviewRoomsPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-[92rem] px-4 pb-12 pt-8 sm:px-6 md:px-8 lg:px-10 lg:pb-16 lg:pt-10 2xl:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a7c6d]">
              Room design preview
            </p>
            <h1 className="mt-4 max-w-lg font-display text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.94] tracking-[-0.05em] text-[#161b22]">
              The same room story, reduced to cleaner cards and calmer spacing.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#5a5248] sm:text-base">
              This page keeps the room typology structure intact while shifting the visuals toward flatter surfaces, more disciplined buttons, and less decorative weight.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/minimal"
                className="inline-flex items-center justify-center rounded-full border border-black/8 px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-[#161b22] transition hover:border-[#161b22]"
              >
                Preview home
              </Link>
              <Link
                href="/#reserve"
                className="inline-flex items-center justify-center rounded-full bg-[#161b22] px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition hover:bg-[#2b3138]"
              >
                Reserve inquiry
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/8 bg-white p-5">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["72", "Rooms and suites"],
                ["34-61 sqm", "Current size range"],
                ["Direct", "Flexible booking support"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[1.3rem] border border-black/8 bg-[#f7f4ef] px-4 py-4">
                  <p className="font-display text-2xl text-[#161b22]">{value}</p>
                  <p className="mt-2 text-sm text-[#5f564c]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/6 bg-white/55">
        <div className="mx-auto grid w-full max-w-[92rem] gap-5 px-4 py-14 sm:px-6 md:px-8 lg:px-10 lg:py-16 2xl:px-12">
          {roomTypes.map((room, index) => (
            <article
              key={room.name}
              className="grid gap-5 rounded-[2rem] border border-black/8 bg-white p-5 lg:grid-cols-[0.86fr_1.14fr] lg:p-6"
            >
              <div className="overflow-hidden rounded-[1.7rem]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-[280px] w-full object-cover sm:h-[360px] lg:h-full"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a7c6d]">
                    {room.size}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#8a7c6d]">
                    {room.rate}
                  </p>
                </div>

                <h2 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.5rem)] leading-[0.96] tracking-[-0.04em] text-[#161b22]">
                  {room.name}
                </h2>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#8a7c6d]">
                  {room.accent}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4f473e]">
                  {room.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-[1.25rem] border border-black/8 bg-[#f7f4ef] px-4 py-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#8a7c6d]">
                      Occupancy
                    </p>
                    <p className="mt-2 text-sm text-[#161b22]">{room.occupancy}</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-black/8 bg-[#f7f4ef] px-4 py-4">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#8a7c6d]">
                      Bed
                    </p>
                    <p className="mt-2 text-sm text-[#161b22]">{room.bed}</p>
                  </div>
                  <div className={`rounded-[1.25rem] border px-4 py-4 ${
                    index === 0 ? "border-[#161b22] bg-[#161b22] text-white" : "border-black/8 bg-white text-[#161b22]"
                  }`}>
                    <p className={`text-[11px] uppercase tracking-[0.2em] ${index === 0 ? "text-white/52" : "text-[#8a7c6d]"}`}>
                      Best for
                    </p>
                    <p className={`mt-2 text-sm ${index === 0 ? "text-white" : "text-[#161b22]"}`}>{room.idealFor}</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {room.details.map((detail) => (
                    <div
                      key={detail}
                      className="rounded-[1.25rem] border border-black/8 bg-[#faf8f3] px-4 py-4 text-sm leading-6 text-[#4f473e]"
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[92rem] px-4 py-14 sm:px-6 md:px-8 lg:px-10 lg:py-16 2xl:px-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a7c6d]">
              Gallery
            </p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2rem,4vw,4rem)] leading-[0.96] tracking-[-0.04em] text-[#161b22]">
              The image grid also simplifies well when the framing gets calmer.
            </h2>
          </div>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full px-2 py-2 text-[11px] uppercase tracking-[0.26em] text-[#6f655a] underline decoration-black/20 underline-offset-4 transition hover:text-[#161b22]"
          >
            Open current site
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {roomGallery.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="overflow-hidden rounded-[1.8rem] border border-black/8 bg-white"
            >
              <img
                src={image}
                alt={`Quartz Hotel gallery ${index + 1}`}
                className="h-[250px] w-full object-cover sm:h-[300px]"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
