/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import { RoomProductCard } from "@/components/room-product-card";
import { PageFrame } from "@/components/quartz-page-frame";
import { photography, roomGallery, roomTypes } from "@/lib/quartz-data";

export const metadata: Metadata = {
  title: "Rooms & Suites | Quartz Hotel",
  description:
    "Explore Quartz Hotel room typologies, amenities, rates, details, and a curated gallery of rooms and suites.",
};

const roomBookingProfiles: Record<
  string,
  {
    imageBadge: string;
    reserveNote: string;
    perks: string[];
    pairing: string;
    imageNotes: string[];
    galleryNotes: string[];
  }
> = {
  "City King": {
    imageBadge: "Fast city stays",
    reserveNote:
      "Best for guests who want a clean, premium base with flexible direct-booking support.",
    perks: [
      "Flexible changes on direct rate",
      "Priority early-arrival request",
      "Fast concierge replies before check-in",
    ],
    pairing:
      "Pairs well with rooftop drinks, one-night stays, and a quick morning departure.",
    imageNotes: ["Blackout drapery", "Rain shower", "Quiet work setup"],
    galleryNotes: ["Sleep area", "Bath", "Arrival mood"],
  },
  "Corner Studio": {
    imageBadge: "Longer stay favorite",
    reserveNote:
      "The better pick when a guest needs more daylight, more storage, and a calmer multi-night rhythm.",
    perks: [
      "Longer-stay room assignment priority",
      "More unpacking room and lounge space",
      "Direct support for weekday schedule changes",
    ],
    pairing:
      "Pairs well with business dinners, quiet-floor requests, and a slower arrival pace.",
    imageNotes: ["Corner light", "Lounge setup", "Extra storage"],
    galleryNotes: ["Studio view", "Room detail", "Terrace mood"],
  },
  "Marlowe Suite": {
    imageBadge: "Premium arrival",
    reserveNote:
      "Built for suite-level arrivals where space, privacy, and service need to feel immediate.",
    perks: [
      "Pre-arrival concierge planning",
      "Celebration and in-room setup requests",
      "Priority rooftop seating when available",
    ],
    pairing:
      "Pairs well with weekend celebrations, later departures, and a more tailored city schedule.",
    imageNotes: ["Living zone", "Bath ritual", "Concierge setup"],
    galleryNotes: ["Suite room", "Living space", "Bath detail"],
  },
};

const heroRoomHighlights = [
  ["Entry", "City King", "Efficient and composed"],
  ["Expanded", "Corner Studio", "More light and lounge space"],
  ["Premium", "Marlowe Suite", "Scale, privacy, and service"],
] as const;

export default function RoomsPage() {
  return (
    <PageFrame>
      <section className="mx-auto grid w-full max-w-[92rem] gap-8 px-4 pb-14 pt-6 sm:px-6 md:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:pb-18 lg:pt-8 2xl:px-12">
        <div className="flex flex-col justify-center lg:pr-4">
          <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a7c6d]">
            Rooms and suites
          </p>
          <h1 className="mt-4 max-w-lg font-display text-[clamp(2.4rem,5vw,5rem)] leading-[0.95] tracking-[-0.05em] text-[#161b22]">
            Rooms shaped around pace, privacy, and better arrivals.
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#4f473e] sm:text-base">
            Quartz Hotel keeps the palette calm, but the room types are clearly
            differentiated so guests can compare scale, mood, and service level
            before they book.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "72 rooms and suites",
              "Rain showers and premium bath setup",
              "Direct booking flexibility",
              "Work and weekend-friendly layouts",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.3rem] border border-black/8 bg-white/72 px-4 py-3 text-sm text-[#4f473e] shadow-[0_14px_34px_rgba(31,24,18,0.04)] transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#reserve"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#161b22] bg-[#161b22] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] shadow-[0_14px_32px_rgba(22,27,34,0.16)] transition duration-300 hover:-translate-y-1 hover:bg-[#2b3138]"
            >
              <span className="text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.35)]">
                Reserve a room
              </span>
              <span className="text-white transition group-hover:translate-x-1">
                +
              </span>
            </Link>
            <Link
              href="/restaurant-menu"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#e3cfb3] bg-[#ead9c3] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#161b22] shadow-[0_14px_32px_rgba(200,173,136,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#161b22] hover:text-[#fffdf8]"
            >
              <span>See dining</span>
              <span className="transition group-hover:translate-x-1">+</span>
            </Link>
          </div>
        </div>

        <div className="group relative min-h-[28rem] overflow-hidden rounded-[2.4rem] border border-black/8 bg-white shadow-[0_30px_80px_rgba(33,26,20,0.1)] sm:min-h-[34rem] lg:min-h-[43rem]">
          <div className="pointer-events-none absolute -right-8 top-8 z-10 h-32 w-32 rounded-full bg-[#ead9c3]/55 blur-3xl" />
          <div className="pointer-events-none absolute left-10 top-10 z-10 h-24 w-24 rounded-full bg-[#f9f2e8]/45 blur-3xl" />
          <img
            src={photography.suite}
            alt="Quartz Hotel suite"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,22,27,0.12)_0%,rgba(17,22,27,0.08)_28%,rgba(17,22,27,0.48)_100%)]" />

          <div className="absolute left-5 right-5 top-5 z-10 flex flex-wrap items-center justify-between gap-3">
            <div className="rounded-full border border-white/16 bg-white/14 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white backdrop-blur">
              72 keys
            </div>
            <div className="rounded-full border border-white/16 bg-[#161b22]/48 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-white backdrop-blur">
              From $310
            </div>
          </div>

          <div className="absolute inset-x-5 bottom-5 z-10 hidden gap-3 sm:grid sm:grid-cols-2 xl:grid-cols-3">
            {heroRoomHighlights.map(([label, value, note], index) => (
              <article
                key={label}
                className={`rounded-[1.6rem] border px-5 py-5 shadow-[0_20px_50px_rgba(17,22,27,0.12)] backdrop-blur transition duration-300 hover:-translate-y-1 ${
                  index === 0
                    ? "border-[#161b22] bg-[#161b22]/84 text-white"
                    : "border-white/18 bg-white/88 text-[#161b22]"
                }`}
              >
                <p
                  className={`text-[11px] uppercase tracking-[0.24em] ${
                    index === 0 ? "text-white/56" : "text-[#8a7c6d]"
                  }`}
                >
                  {label}
                </p>
                <p className="mt-3 font-display text-[2rem] leading-none">
                  {value}
                </p>
                <p
                  className={`mt-3 text-sm leading-6 ${
                    index === 0 ? "text-white/74" : "text-[#4f473e]"
                  }`}
                >
                  {note}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="-mt-1 flex gap-3 overflow-x-auto pb-1 sm:hidden">
          {heroRoomHighlights.map(([label, value, note], index) => (
            <article
              key={label}
              className={`min-w-[16.5rem] shrink-0 rounded-[1.6rem] border px-5 py-5 shadow-[0_20px_50px_rgba(17,22,27,0.08)] transition duration-300 ${
                index === 0
                  ? "border-[#161b22] bg-[#161b22] text-white"
                  : "border-black/8 bg-white text-[#161b22]"
              }`}
            >
              <p
                className={`text-[11px] uppercase tracking-[0.24em] ${
                  index === 0 ? "text-white/56" : "text-[#8a7c6d]"
                }`}
              >
                {label}
              </p>
              <p className="mt-3 font-display text-[2rem] leading-none">
                {value}
              </p>
              <p
                className={`mt-3 text-sm leading-6 ${
                  index === 0 ? "text-white/74" : "text-[#4f473e]"
                }`}
              >
                {note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/8 bg-[#f2ece3]">
        <div className="mx-auto grid w-full max-w-[92rem] gap-6 px-4 py-14 sm:px-6 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10 lg:py-18 2xl:px-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#8a7c6d]">
              Room typologies
            </p>
            <h2 className="mt-4 max-w-md font-display text-[clamp(2rem,4vw,3.8rem)] leading-[0.98] tracking-[-0.04em] text-[#161b22]">
              Entry rooms still feel premium, and the bigger categories feel clearly worth the step up.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#4f473e]">
              The comparison is meant to feel useful. Each typology has its own
              pace, scale, and arrival rhythm rather than being dressed up with
              the same generic copy.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:items-start">
            {roomTypes.map((room, index) => (
              <article
                key={room.name}
                className={`group rounded-[1.8rem] border px-5 py-5 shadow-[0_20px_50px_rgba(31,24,18,0.05)] transition duration-300 hover:-translate-y-2 ${
                  index === 0
                    ? "border-[#161b22] bg-[#161b22] text-white xl:translate-y-8"
                    : index === 1
                      ? "border-black/8 bg-white text-[#161b22]"
                      : "border-[#ead9c3] bg-[#fcf8f2] text-[#161b22] xl:translate-y-5"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p
                      className={`text-[11px] uppercase tracking-[0.24em] ${
                        index === 0 ? "text-white/48" : "text-[#8a7c6d]"
                      }`}
                    >
                      {index === 0 ? "Entry" : index === 1 ? "Expanded" : "Premium"}
                    </p>
                    <h3 className="mt-3 font-display text-[2.1rem] leading-none">
                      {room.name}
                    </h3>
                  </div>
                  <div
                    className={`rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.2em] ${
                      index === 0
                        ? "border border-white/12 bg-white/8 text-white"
                        : "border border-black/8 bg-white text-[#161b22]"
                    }`}
                  >
                    {room.size}
                  </div>
                </div>

                <p
                  className={`mt-4 text-sm uppercase tracking-[0.16em] ${
                    index === 0 ? "text-white/58" : "text-[#8a7c6d]"
                  }`}
                >
                  {room.accent}
                </p>

                <p
                  className={`mt-4 text-sm leading-7 ${
                    index === 0 ? "text-white/76" : "text-[#4f473e]"
                  }`}
                >
                  {room.idealFor}
                </p>

                <div
                  className={`mt-5 rounded-[1.2rem] px-4 py-4 ${
                    index === 0 ? "bg-white/6" : "bg-white"
                  }`}
                >
                  <p
                    className={`text-[11px] uppercase tracking-[0.2em] ${
                      index === 0 ? "text-white/46" : "text-[#8a7c6d]"
                    }`}
                  >
                    Why it works
                  </p>
                  <div className="mt-3 space-y-3">
                    {room.details.slice(0, 2).map((detail) => (
                      <p
                        key={detail}
                        className={`text-sm leading-6 ${
                          index === 0 ? "text-white/74" : "text-[#4f473e]"
                        }`}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span
                    className={`text-sm ${
                      index === 0 ? "text-white/78" : "text-[#4f473e]"
                    }`}
                  >
                    {room.rate}
                  </span>
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-[0.22em] transition group-hover:translate-x-1 ${
                      index === 0 ? "text-white" : "text-[#161b22]"
                    }`}
                  >
                    Compare +
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[92rem] px-4 py-14 sm:px-6 md:px-8 lg:px-10 lg:py-18 2xl:px-12">
        <div className="grid gap-6">
          {roomTypes.map((room) => (
            <RoomProductCard
              key={room.name}
              room={room}
              bookingProfile={roomBookingProfiles[room.name]}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-black/8 bg-[#f2ece3]">
        <div className="mx-auto w-full max-w-[92rem] px-4 py-14 sm:px-6 md:px-8 lg:px-10 lg:py-16 2xl:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#8a7c6d]">
                Photo gallery
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-[clamp(2rem,4vw,3.8rem)] leading-[0.98] tracking-[-0.04em] text-[#161b22]">
                A quieter gallery of rooms, suite details, and material choices.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#4f473e]">
              More useful than glossy. The gallery is meant to help a guest compare tone and scale.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-12">
            {roomGallery.map((image, index) => {
              const layoutClasses = [
                "xl:col-span-4",
                "xl:col-span-4",
                "xl:col-span-4",
                "xl:col-span-5",
                "xl:col-span-3",
                "xl:col-span-4",
              ];

              const heightClasses = [
                "h-[300px] sm:h-[340px]",
                "h-[300px] sm:h-[340px]",
                "h-[300px] sm:h-[340px]",
                "h-[300px] sm:h-[380px]",
                "h-[300px] sm:h-[380px]",
                "h-[300px] sm:h-[380px]",
              ];

              return (
                <div
                  key={`${image}-${index}`}
                  className={`group overflow-hidden rounded-[1.8rem] border border-black/8 bg-white shadow-[0_20px_50px_rgba(31,24,18,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(31,24,18,0.08)] ${layoutClasses[index]}`}
                >
                  <img
                    src={image}
                    alt={`Quartz Hotel gallery image ${index + 1}`}
                    className={`block w-full object-cover transition duration-700 group-hover:scale-[1.04] ${heightClasses[index]}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </PageFrame>
  );
}
