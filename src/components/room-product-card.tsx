"use client";

/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import type { RoomType } from "@/lib/quartz-data";

type BookingProfile = {
  imageBadge: string;
  reserveNote: string;
  perks: string[];
  pairing: string;
  imageNotes: string[];
  galleryNotes: string[];
};

type RoomProductCardProps = {
  room: RoomType;
  bookingProfile: BookingProfile;
};

export function RoomProductCard({
  room,
  bookingProfile,
}: RoomProductCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <article className="grid gap-6 rounded-[2rem] border border-black/8 bg-white p-5 shadow-[0_24px_60px_rgba(31,24,18,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_70px_rgba(31,24,18,0.08)] lg:grid-cols-[0.82fr_1.18fr]">
        <div className="group relative min-h-[290px] overflow-hidden rounded-[1.8rem] border border-black/8 bg-[#f7f3ec] sm:min-h-[360px] lg:min-h-[38rem]">
          <div className="pointer-events-none absolute -left-8 top-8 z-10 h-24 w-24 rounded-full bg-white/30 blur-3xl transition duration-700 group-hover:scale-125" />
          <div className="pointer-events-none absolute -right-10 bottom-8 z-10 h-28 w-28 rounded-full bg-[#ead9c3]/40 blur-3xl transition duration-700 group-hover:scale-125" />
          <img
            src={room.image}
            alt={room.name}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,22,27,0.08)_0%,rgba(17,22,27,0.02)_42%,rgba(17,22,27,0.3)_100%)]" />
          <div className="absolute left-4 top-4 z-10 inline-flex rounded-full border border-white/18 bg-[#161b22]/52 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white backdrop-blur">
            {bookingProfile.imageBadge}
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-[#161b22]/48"
          >
            <span>Room details</span>
            <span>+</span>
          </button>
        </div>

        <div className="flex h-full flex-col gap-5">
          <div className="rounded-[1.7rem] border border-[#ead9c3] bg-[linear-gradient(180deg,#fffdfa_0%,#fcf8f2_100%)] p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-[0.24em] text-[#8a7c6d]">
              <span>{room.size}</span>
              <span>{room.rate}</span>
            </div>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.5rem)] leading-[0.96] tracking-[-0.045em] text-[#161b22]">
              {room.name}
            </h2>
            <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#8a7c6d]">
              {room.accent}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4f473e] sm:text-[15px]">
              {room.description}
            </p>
          </div>

          <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_17rem]">
            <div className="grid gap-3">
              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-[1.2rem] border border-black/8 bg-[#f7f3ec] px-4 py-4 text-sm text-[#4f473e] transition duration-300 hover:-translate-y-0.5 hover:bg-white">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-[#8a7c6d]">
                    Occupancy
                  </span>
                  <span className="mt-2 block text-[1.05rem] text-[#161b22]">
                    {room.occupancy}
                  </span>
                </div>
                <div className="rounded-[1.2rem] border border-black/8 bg-[#f7f3ec] px-4 py-4 text-sm text-[#4f473e] transition duration-300 hover:-translate-y-0.5 hover:bg-white">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-[#8a7c6d]">
                    Bed
                  </span>
                  <span className="mt-2 block text-[1.05rem] text-[#161b22]">
                    {room.bed}
                  </span>
                </div>
                <div className="rounded-[1.2rem] border border-black/8 bg-[#f7f3ec] px-4 py-4 text-sm text-[#4f473e] transition duration-300 hover:-translate-y-0.5 hover:bg-white">
                  <span className="block text-[11px] uppercase tracking-[0.18em] text-[#8a7c6d]">
                    Best for
                  </span>
                  <span className="mt-2 block text-[1.05rem] text-[#161b22]">
                    {room.idealFor}
                  </span>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {room.gallery.map((image, index) => (
                  <button
                    key={`${room.name}-${index}`}
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="group/thumb relative overflow-hidden rounded-[1.25rem] border border-black/8 bg-white shadow-[0_12px_28px_rgba(31,24,18,0.05)] transition duration-300 hover:-translate-y-1"
                  >
                    <img
                      src={image}
                      alt={`${room.name} gallery ${index + 1}`}
                      className="block h-32 w-full object-cover transition duration-700 group-hover/thumb:scale-[1.06]"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-[#161b22] bg-[#161b22] p-5 text-white shadow-[0_24px_50px_rgba(17,22,27,0.16)]">
              <div className="flex items-start justify-between gap-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/55">
                  Direct booking
                </p>
                <div className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/82">
                  {room.rate}
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/76">
                Flexible direct rate and smoother arrival support.
              </p>
              <div className="mt-5 grid gap-3">
                <Link
                  href="/#reserve"
                  className="group inline-flex w-full items-center justify-between rounded-full bg-[#ead9c3] px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.22em] text-[#161b22] shadow-[0_16px_34px_rgba(234,217,195,0.16)] transition duration-300 hover:-translate-y-1 hover:bg-[#fff8ed]"
                >
                  <span className="text-[#161b22] [text-shadow:0_1px_1px_rgba(255,255,255,0.18)]">
                    Reserve this room
                  </span>
                  <span className="text-[#161b22] transition group-hover:translate-x-1">
                    +
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="inline-flex w-full items-center justify-between rounded-full border border-white/12 bg-white/6 px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <span>See all details</span>
                  <span>+</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            className="fixed inset-0 z-50 bg-[#161b22]/44 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex h-full items-center justify-center px-4 py-4 sm:px-6 sm:py-8">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.98 }}
                animate={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? {} : { opacity: 0, y: 20, scale: 0.985 }}
                transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="grid h-[calc(100dvh-2rem)] w-full max-w-5xl grid-rows-[16rem_minmax(0,1fr)] overflow-hidden rounded-[2rem] border border-black/8 bg-[#f8f3ec] shadow-[0_36px_100px_rgba(0,0,0,0.22)] sm:h-[88dvh] sm:grid-rows-[18rem_minmax(0,1fr)] lg:grid-cols-[0.9fr_1.1fr] lg:grid-rows-1"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="relative min-h-0 overflow-hidden bg-[#f1e9de]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,22,27,0.04)_0%,rgba(17,22,27,0.1)_45%,rgba(17,22,27,0.5)_100%)]" />
                <div className="absolute left-5 top-5 inline-flex rounded-full border border-white/18 bg-[#161b22]/56 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white backdrop-blur">
                  {bookingProfile.imageBadge}
                </div>
                <div className="absolute inset-x-5 bottom-5 grid gap-3 sm:grid-cols-3">
                  {bookingProfile.imageNotes.map((note) => (
                    <div
                      key={note}
                      className="rounded-full border border-white/14 bg-white/12 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-white backdrop-blur"
                    >
                      {note}
                    </div>
                  ))}
                </div>
                </div>

                <div className="min-h-0 overflow-y-auto overscroll-contain p-5 pb-10 [-webkit-overflow-scrolling:touch] sm:p-6 sm:pb-12 lg:p-7 lg:pb-14">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-[#8a7c6d]">
                        <span>{room.size}</span>
                        <span>{room.rate}</span>
                      </div>
                      <h3 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.95] tracking-[-0.045em] text-[#161b22]">
                        {room.name}
                      </h3>
                      <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#8a7c6d]">
                        {room.accent}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/8 bg-white text-[#161b22] transition duration-300 hover:-translate-y-0.5 hover:bg-[#161b22] hover:text-white"
                      aria-label={`Close ${room.name} details`}
                    >
                      x
                    </button>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[1.2rem] border border-black/8 bg-white px-4 py-4">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[#8a7c6d]">
                        Occupancy
                      </p>
                      <p className="mt-2 text-[1.05rem] text-[#161b22]">
                        {room.occupancy}
                      </p>
                    </div>
                    <div className="rounded-[1.2rem] border border-black/8 bg-white px-4 py-4">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[#8a7c6d]">
                        Bed
                      </p>
                      <p className="mt-2 text-[1.05rem] text-[#161b22]">
                        {room.bed}
                      </p>
                    </div>
                    <div className="rounded-[1.2rem] border border-black/8 bg-white px-4 py-4">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[#8a7c6d]">
                        Best for
                      </p>
                      <p className="mt-2 text-[1.05rem] text-[#161b22]">
                        {room.idealFor}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-[1.5rem] border border-[#ead9c3] bg-[linear-gradient(180deg,#fffdfa_0%,#fcf7ef_100%)] p-5">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#8a7c6d]">
                      In the room
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {room.details.map((detail, index) => (
                        <div
                          key={detail}
                          className={`rounded-[1.2rem] border px-4 py-4 text-sm leading-6 text-[#4f473e] ${
                            index % 2 === 0
                              ? "border-[#ead9c3] bg-white"
                              : "border-black/8 bg-[#f6f1e9]"
                          }`}
                        >
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4">
                    <div className="rounded-[1.5rem] border border-black/8 bg-white p-5">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#8a7c6d]">
                        Direct booking
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#4f473e]">
                        {bookingProfile.reserveNote}
                      </p>
                      <div className="mt-4 grid gap-2">
                        {bookingProfile.perks.map((perk) => (
                          <div
                            key={perk}
                            className="rounded-full border border-[#ddcfbc] bg-[#fcf8f2] px-3 py-2 text-sm text-[#4f473e]"
                          >
                            {perk}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-[#161b22] bg-[#161b22] p-5 text-white">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-white/55">
                        Stay rhythm
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/78">
                        {bookingProfile.pairing}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#8a7c6d]">
                      Gallery
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {room.gallery.map((image, index) => (
                        <div
                          key={`${room.name}-modal-${index}`}
                          className="overflow-hidden rounded-[1.2rem] border border-black/8 bg-white"
                        >
                          <img
                            src={image}
                            alt={`${room.name} view ${index + 1}`}
                            className="block h-28 w-full object-cover"
                          />
                          <div className="px-3 py-3 text-[11px] uppercase tracking-[0.18em] text-[#8a7c6d]">
                            {bookingProfile.galleryNotes[index]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/#reserve"
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#161b22] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.22em] text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#2d333b]"
                    >
                      <span className="text-[#fffaf2] [text-shadow:0_1px_1px_rgba(0,0,0,0.35)]">
                        Reserve this room
                      </span>
                      <span className="text-[#fffaf2] transition group-hover:translate-x-1">
                        +
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
