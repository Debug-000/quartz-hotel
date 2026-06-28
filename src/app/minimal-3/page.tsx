"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { photography, roomTypes } from "@/lib/quartz-data";

const stayRhythms = [
  {
    label: "Arrive",
    title: "Soft landing",
    note: "Bags move first, keys are quiet, and the room is already set to the guest notes.",
    time: "03:00 PM",
  },
  {
    label: "Evening",
    title: "One-floor dinner",
    note: "A table at Marlowe, a roofline drink after, and no need to re-enter the city rush.",
    time: "07:30 PM",
  },
  {
    label: "Morning",
    title: "Slow reset",
    note: "Blackout sleep, table-side coffee, and checkout handled before the lobby gets busy.",
    time: "08:40 AM",
  },
] as const;

const diningCards = [
  ["Atrium breakfast", "06:30 - 10:30", "Quiet coffee, pastry, eggs to order."],
  ["Marlowe Grill", "12:30 - 22:30", "Warm plates and low-light dining."],
  ["Roofline Bar", "17:00 - late", "Champagne, nightcaps, skyline air."],
] as const;

const plannerVisuals = [photography.lobby, photography.dining, photography.room] as const;
const diningVisuals = [photography.dining, photography.dining, photography.bar] as const;

const wellnessNotes = [
  ["Low-light treatment rooms", "Focused massage and recovery work."],
  ["Steam and rain rituals", "A short reset before dinner or checkout."],
  ["24-hour movement", "Quiet studio, towels, water, and soft light."],
  ["In-room stretch kit", "Private recovery setup on request."],
] as const;

const serviceNotes = [
  ["Before arrival", "Transfers, room notes, dinner holds, and early-arrival requests."],
  ["During the stay", "Concierge routing, in-room dining, work support, and table timing."],
  ["Departure", "Luggage timing, late checkout requests, and cars prepared early."],
] as const;

const eventSpaces = [
  ["Private dinner", "18 guests", "Marlowe table, warm service, no banquet mood."],
  ["Boardroom", "14 guests", "Daylight, screens, coffee, and quiet hospitality."],
  ["Rooftop reception", "120 guests", "Skyline drinks with controlled guest flow."],
  ["Salon gathering", "42 guests", "Soft seating, low music, and room to move."],
] as const;

const visitNotes = [
  ["Financial district", "5 min", "Morning meetings without a long transfer."],
  ["Museum quarter", "9 min", "A quiet gallery route before dinner."],
  ["Central station", "12 min", "Easy arrivals and late departures."],
  ["Airport", "24 min", "Cars timed before checkout starts."],
] as const;

const faqs = [
  [
    "Can arrivals be planned before check-in?",
    "Yes. Transfers, room notes, dining holds, and early-arrival requests can be arranged before you reach Quartz.",
  ],
  [
    "Is the hotel good for business stays?",
    "Yes. Rooms include quiet work setups, blackout drapery, fast Wi-Fi, and quick access to the financial district.",
  ],
  [
    "Can guests dine without leaving the hotel?",
    "Yes. Breakfast, Marlowe Grill, Roofline Bar, and in-room dining cover the full day.",
  ],
] as const;

const heroCards = [
  {
    label: "Stay",
    title: "Rooms",
    note: "Choose the rhythm, then the rate.",
    image: photography.room,
    href: "#stay",
    action: "Check rooms",
    roomIndex: 0,
  },
  {
    label: "Dine",
    title: "Marlowe",
    note: "Breakfast, grill, and roofline drinks.",
    image: photography.dining,
    href: "#dining",
    action: "See dining",
  },
  {
    label: "Plan",
    title: "Arrival",
    note: "Transfers, dinner holds, and room notes.",
    image: photography.lobby,
    href: "#planner",
    action: "Plan stay",
  },
] as const;

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.34em] text-[#9b6a47]">
      {children}
    </p>
  );
}

function ButtonLink({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] transition duration-300 hover:-translate-y-1 ${
        dark
          ? "bg-[#17140f] text-[#fffaf0] hover:bg-[#9b6a47]"
          : "border border-[#dfc9a7] bg-[#fffaf0] text-[#17140f] hover:border-[#17140f]"
      }`}
    >
      {children}
      <span className="transition group-hover:translate-x-1">+</span>
    </Link>
  );
}

export default function MinimalThreeHomePage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeRoom, setActiveRoom] = useState(0);
  const [activeRhythm, setActiveRhythm] = useState(0);
  const [activeDining, setActiveDining] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const selectedRhythm = stayRhythms[activeRhythm];
  const selectedDining = diningCards[activeDining];

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 30, filter: "blur(8px)" },
        whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
        viewport: { once: true, amount: 0.18 },
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <div className="overflow-hidden bg-[#fbf7ef] text-[#17140f]">
      <section className="relative min-h-[100svh] overflow-visible bg-[#17140f] px-5 pb-44 pt-28 sm:px-8 sm:pt-32 lg:px-12">
        <div className="absolute inset-0">
          <Image
            src={photography.suite}
            alt="Quartz Hotel bright suite atmosphere"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,20,15,0.46)_0%,rgba(23,20,15,0.12)_34%,rgba(23,20,15,0.36)_70%,rgba(23,20,15,0.72)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_44%,rgba(246,211,162,0.24),transparent_42%),radial-gradient(circle_at_18%_72%,rgba(255,250,240,0.16),transparent_24%)]" />
          <div className="absolute inset-x-0 bottom-[-1px] h-36 bg-gradient-to-t from-[#fbf7ef] via-[#fbf7ef]/52 to-transparent" />
        </div>

        <motion.div className="relative z-10 mx-auto flex min-h-[calc(100svh-300px)] max-w-[92rem] items-center justify-center text-center" {...reveal}>
          <div className="mx-auto max-w-6xl">
            <p className="text-[10px] uppercase tracking-[0.38em] text-[#f0cfa4]">
              Quartz Hotel / Home 3
            </p>
            <h1 className="mx-auto mt-5 max-w-6xl font-display text-[clamp(4.2rem,8.8vw,10.5rem)] leading-[0.78] tracking-[-0.09em] text-[#fffaf0] drop-shadow-[0_18px_42px_rgba(0,0,0,0.34)]">
              Arrive quietly. Stay brighter.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-[#fffaf0]/78 sm:text-base">
              Calm rooms, warm dining, soft planning, and a city stay that feels composed before you reach the door.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="#stay" dark>Explore rooms</ButtonLink>
              <ButtonLink href="#planner">Shape the stay</ButtonLink>
            </div>
          </div>
        </motion.div>

        <motion.div className="absolute inset-x-0 bottom-0 z-20 translate-y-[30%] px-5 sm:px-8 lg:px-12" {...reveal}>
          <div className="mx-auto flex max-w-[82rem] snap-x items-end gap-4 overflow-x-auto px-1 pb-7 pt-4 [scrollbar-width:none] md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
            {heroCards.map((card, index) => (
              <motion.a
                key={card.title}
                href={card.href}
                onClick={() => {
                  if ("roomIndex" in card) {
                    setActiveRoom(card.roomIndex);
                  }
                }}
                whileHover={shouldReduceMotion ? undefined : { y: -10, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={`group relative min-w-[82%] snap-center overflow-hidden rounded-[1.15rem] border border-white/35 bg-[#17140f] text-[#fffaf0] shadow-[0_32px_80px_rgba(20,14,8,0.26)] sm:min-w-[42%] md:min-w-0 ${
                  index === 1 ? "md:-translate-y-5" : "md:translate-y-3"
                }`}
              >
                <div className="relative h-64 overflow-hidden sm:h-72 lg:h-80">
                  <Image
                    src={card.image}
                    alt={`${card.title} at Quartz Hotel`}
                    fill
                    sizes="(min-width: 768px) 33vw, 82vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,20,15,0.08)_0%,rgba(23,20,15,0.24)_38%,rgba(23,20,15,0.92)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
                    <div className="mb-4 flex items-center justify-between border-b border-white/18 pb-3">
                      <span className="text-[10px] uppercase tracking-[0.32em] text-[#f0cfa4]">
                        {card.label}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.24em] text-white/56">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-4xl leading-none tracking-[-0.06em] text-[#fffaf0] drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-72 text-sm leading-6 text-[#fffaf0]/84 drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]">
                      {card.note}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-3 border-b border-[#f0cfa4] pb-1 text-[9px] font-bold uppercase tracking-[0.24em] text-[#fffaf0] transition group-hover:tracking-[0.3em]">
                      {card.action}
                      <span>+</span>
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="stay" className="scroll-mt-24 px-5 pb-16 pt-40 sm:px-8 sm:pt-44 lg:px-12 lg:pb-20 lg:pt-48">
        <motion.div
          className="mx-auto max-w-[92rem] border-t border-[#dfc9a7] pt-8"
          {...reveal}
        >
          <div className="grid gap-6 lg:grid-cols-[0.68fr_0.42fr] lg:items-end">
            <div>
              <Kicker>Stay</Kicker>
              <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.8rem,5vw,5.6rem)] leading-[0.86] tracking-[-0.075em]">
                Rooms, quietly compared.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#5d5148] sm:text-base lg:justify-self-end">
              Three clear options with enough information to choose, and
              nothing extra fighting for attention.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {roomTypes.map((room, index) => (
              <motion.button
                key={room.name}
                type="button"
                onClick={() => setActiveRoom(index)}
                whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                className={`group overflow-hidden rounded-[1.1rem] border bg-[#fffaf0]/46 text-left transition ${
                  activeRoom === index
                    ? "border-[#9b6a47] shadow-[0_24px_70px_rgba(126,89,52,0.12)]"
                    : "border-[#ead8bd] hover:border-[#c99f6d]"
                }`}
              >
                <div className="relative aspect-[1.18/1] overflow-hidden bg-[#efe7da]">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                    <span className="rounded-full bg-[#fffaf0]/88 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.24em] text-[#17140f] backdrop-blur">
                      0{index + 1}
                    </span>
                    <span className="rounded-full bg-[#fffaf0]/88 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#17140f] backdrop-blur">
                      {room.rate}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#9b6a47]">
                        {room.size} / {room.occupancy}
                      </p>
                      <h3 className="mt-3 font-display text-4xl leading-none tracking-[-0.06em] text-[#17140f]">
                        {room.name}
                      </h3>
                    </div>
                    <span className={`mt-1 h-3 w-3 rounded-full transition ${
                      activeRoom === index ? "bg-[#9b6a47]" : "bg-[#dfc9a7] group-hover:bg-[#9b6a47]"
                    }`} />
                  </div>
                  <p className="mt-4 min-h-12 text-sm leading-6 text-[#5d5148]">
                    {room.idealFor}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-[#ead8bd] pt-4">
                    <span className="truncate pr-4 text-[10px] uppercase tracking-[0.22em] text-[#9b6a47]">
                      {room.bed}
                    </span>
                    <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.22em] text-[#17140f]">
                      Select
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-[#dfc9a7] pt-6 sm:flex-row sm:items-center">
            <p className="max-w-xl text-sm leading-7 text-[#5d5148]">
              Full photos, inclusions, and booking details stay on the rooms
              page so this section stays light.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/rooms"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#17140f] px-7 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#fffaf0] transition hover:-translate-y-1 hover:bg-[#9b6a47] hover:text-white"
              >
                View rooms <span>+</span>
              </Link>
              <Link
                href="#reserve"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#dfc9a7] bg-[#fffaf0]/64 px-7 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#17140f] transition hover:-translate-y-1 hover:border-[#17140f] hover:bg-[#fffaf0]"
              >
                Check dates <span>+</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="planner" className="relative scroll-mt-24 overflow-hidden bg-[#edf1e8] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="pointer-events-none absolute left-[-12rem] top-10 h-80 w-80 rounded-full bg-[#f0cfa4]/22 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-10rem] right-[-8rem] h-96 w-96 rounded-full bg-[#fffaf0]/70 blur-3xl" />
        <motion.div className="relative mx-auto max-w-[92rem]" {...reveal}>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <Kicker>Planner</Kicker>
              <h2 className="mt-4 max-w-3xl font-display text-[clamp(3rem,5.8vw,6.5rem)] leading-[0.82] tracking-[-0.075em]">
                Choose the stay tempo.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-[#5d5148] sm:text-base lg:justify-self-end">
              Select a rhythm and the hotel quietly aligns arrival, dinner,
              sleep, and departure around it.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
            <div className="relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-[#d7dfcc] bg-[#fbf7ef]/68 p-3 shadow-[0_30px_90px_rgba(67,82,52,0.1)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedRhythm.title}
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-3 overflow-hidden rounded-[1.6rem]"
                >
                  <Image
                    src={plannerVisuals[activeRhythm]}
                    alt={`${selectedRhythm.label} planning at Quartz Hotel`}
                    fill
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,20,15,0.03)_0%,rgba(23,20,15,0.16)_48%,rgba(23,20,15,0.56)_100%)]" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute left-6 top-6 rounded-full bg-[#fffaf0]/88 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.24em] text-[#17140f] backdrop-blur">
                {selectedRhythm.time}
              </div>

              <div className="absolute bottom-6 left-6 right-6 rounded-[1.2rem] border border-white/48 bg-[#fffaf0]/86 p-5 text-[#17140f] shadow-[0_18px_60px_rgba(20,14,8,0.18)] backdrop-blur-md sm:right-auto sm:max-w-md">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b6a47]">
                  Active rhythm
                </p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedRhythm.label}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.34 }}
                  >
                    <h3 className="mt-3 font-display text-[clamp(2.8rem,4.5vw,5rem)] leading-[0.84] tracking-[-0.07em]">
                      {selectedRhythm.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#5d5148]">
                      {selectedRhythm.note}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 rounded-[2rem] border border-[#d7dfcc] bg-[#fbf7ef]/48 p-5 sm:p-6 lg:p-8">
              <div className="flex snap-x gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {stayRhythms.map((rhythm, index) => (
                  <button
                    key={rhythm.label}
                    type="button"
                    onClick={() => setActiveRhythm(index)}
                    className={`shrink-0 rounded-full px-5 py-3 text-[10px] font-bold uppercase tracking-[0.22em] transition hover:-translate-y-1 ${
                      activeRhythm === index
                        ? "bg-[#9b6a47] text-white shadow-[0_14px_34px_rgba(155,106,71,0.24)]"
                        : "border border-[#cfd8c2] bg-[#fffaf0]/62 text-[#17140f] hover:border-[#9b6a47]"
                    }`}
                  >
                    {rhythm.label}
                  </button>
                ))}
              </div>

              <div className="grid gap-3">
                {stayRhythms.map((rhythm, index) => (
                  <motion.button
                    key={rhythm.title}
                    type="button"
                    onClick={() => setActiveRhythm(index)}
                    whileHover={shouldReduceMotion ? undefined : { x: 8 }}
                    className={`group grid gap-4 rounded-[1.2rem] border p-5 text-left transition sm:grid-cols-[3rem_1fr_auto] sm:items-center ${
                      activeRhythm === index
                        ? "border-[#9b6a47] bg-[#fffaf0] shadow-[0_18px_55px_rgba(67,82,52,0.1)]"
                        : "border-[#d7dfcc] bg-transparent hover:border-[#9b6a47] hover:bg-[#fffaf0]/52"
                    }`}
                  >
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full text-[10px] font-bold uppercase tracking-[0.18em] ${
                      activeRhythm === index
                        ? "bg-[#17140f] text-[#fffaf0]"
                        : "bg-[#fffaf0] text-[#72805f] group-hover:text-[#17140f]"
                    }`}>
                      0{index + 1}
                    </span>
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.26em] text-[#9b6a47]">
                        {rhythm.time}
                      </span>
                      <span className="mt-2 block font-display text-4xl leading-none tracking-[-0.055em] text-[#17140f]">
                        {rhythm.label}
                      </span>
                      <span className="mt-2 block max-w-xl text-sm leading-6 text-[#5d5148]">
                        {rhythm.note}
                      </span>
                    </span>
                    <span className={`hidden h-px w-16 transition sm:block ${
                      activeRhythm === index ? "bg-[#9b6a47]" : "bg-[#cfd8c2] group-hover:bg-[#9b6a47]"
                    }`} />
                  </motion.button>
                ))}
              </div>

              <div className="grid gap-3 border-t border-[#cfd8c2] pt-5 sm:grid-cols-3">
                {["Room notes", "Dinner holds", "Checkout timing"].map((item) => (
                  <div key={item} className="rounded-full border border-[#d7dfcc] bg-[#fffaf0]/54 px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#17140f]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="dining" className="scroll-mt-24 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <motion.div className="mx-auto max-w-[92rem]" {...reveal}>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_0.55fr] lg:items-end">
            <div>
              <Kicker>Dining</Kicker>
              <h2 className="mt-4 max-w-3xl font-display text-[clamp(3rem,5.8vw,6.5rem)] leading-[0.82] tracking-[-0.075em]">
                A full day at the table.
              </h2>
            </div>
            <div className="max-w-xl lg:justify-self-end">
              <p className="text-sm leading-7 text-[#5d5148] sm:text-base">
                Breakfast, Marlowe Grill, and the roofline bar stay connected:
                useful, warm, and easy to read.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/restaurant-menu"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#9b6a47] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:bg-[#17140f]"
                >
                  Restaurant menu <span>+</span>
                </Link>
                <Link
                  href="/bar-menu"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[#dfc9a7] bg-[#fffaf0]/58 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#17140f] transition hover:-translate-y-1 hover:border-[#17140f] hover:bg-[#fffaf0]"
                >
                  Bar menu <span>+</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {diningCards.map(([title, time, note], index) => (
                <motion.button
                  key={title}
                  type="button"
                  onClick={() => setActiveDining(index)}
                  whileHover={shouldReduceMotion ? undefined : { x: 8 }}
                  className={`group rounded-[1.15rem] border p-5 text-left transition ${
                    activeDining === index
                      ? "border-[#9b6a47] bg-[#fffaf0] shadow-[0_20px_64px_rgba(94,69,43,0.1)]"
                      : "border-[#ead8bd] bg-[#fffaf0]/38 hover:border-[#9b6a47] hover:bg-[#fffaf0]/70"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#9b6a47]">
                      {time}
                    </span>
                    <span className={`h-2.5 w-2.5 rounded-full transition ${
                      activeDining === index ? "bg-[#9b6a47]" : "bg-[#dfc9a7] group-hover:bg-[#9b6a47]"
                    }`} />
                  </div>
                  <h3 className="mt-5 font-display text-4xl leading-none tracking-[-0.055em] text-[#17140f]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5d5148]">
                    {note}
                  </p>
                </motion.button>
              ))}
            </div>

            <div className="relative min-h-[36rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedDining[0]}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-0 top-0 overflow-hidden rounded-[2rem] border border-[#ead8bd] bg-[#fffaf0] p-3 shadow-[0_32px_90px_rgba(94,69,43,0.1)] lg:inset-y-0"
                >
                  <div className="relative h-full min-h-[28rem] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={diningVisuals[activeDining]}
                      alt={selectedDining[0]}
                      fill
                      sizes="(min-width: 1024px) 48vw, 100vw"
                      className="object-cover transition duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,20,15,0)_0%,rgba(23,20,15,0.18)_48%,rgba(23,20,15,0.64)_100%)]" />
                  </div>
                  <div className="absolute bottom-8 left-8 right-8 rounded-[1.1rem] border border-white/50 bg-[#fffaf0]/88 p-5 text-[#17140f] shadow-[0_18px_60px_rgba(20,14,8,0.16)] backdrop-blur-md">
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b6a47]">
                        {selectedDining[1]}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.24em] text-[#9b6a47]">
                        0{activeDining + 1}
                      </p>
                    </div>
                    <h3 className="mt-3 font-display text-[clamp(3rem,5vw,5.8rem)] leading-[0.84] tracking-[-0.075em]">
                      {selectedDining[0]}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-[#5d5148]">
                      {selectedDining[2]}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="wellness" className="scroll-mt-24 bg-[#f2eee2] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <motion.div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center" {...reveal}>
          <div>
            <Kicker>Wellness</Kicker>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(3rem,6vw,6.8rem)] leading-[0.82] tracking-[-0.075em]">
              Recovery without resort theatre.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#5d5148] sm:text-base">
              A quieter wellness layer for city guests: useful treatments, steam, movement, and recovery that fits around the day.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {wellnessNotes.map(([title, note]) => (
                <motion.div
                  key={title}
                  whileHover={shouldReduceMotion ? undefined : { y: -6, rotate: -0.25 }}
                  className="rounded-[1.8rem_0.6rem_1.8rem_0.6rem] border border-[#d5d8c7] bg-[#fbf7ef]/78 p-5 shadow-[0_16px_45px_rgba(80,97,70,0.08)]"
                >
                  <h3 className="font-display text-3xl leading-none tracking-[-0.055em]">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5d5148]">{note}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid min-h-[34rem] grid-cols-[0.82fr_1fr] gap-4">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -10 }}
              className="relative self-end overflow-hidden rounded-[4rem_1rem_1rem_4rem] shadow-[0_28px_80px_rgba(80,97,70,0.16)]"
            >
              <Image
                src={photography.spa}
                alt="Quartz Hotel calm wellness pool"
                width={700}
                height={900}
                className="h-[25rem] w-full object-cover transition duration-700 hover:scale-105 sm:h-[30rem]"
              />
            </motion.div>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: 10 }}
              className="relative overflow-hidden rounded-[1rem_4rem_4rem_1rem] shadow-[0_28px_80px_rgba(80,97,70,0.14)]"
            >
              <Image
                src={photography.bathroom}
                alt="Quartz Hotel bathroom and bath ritual"
                width={800}
                height={1000}
                className="h-[30rem] w-full object-cover transition duration-700 hover:scale-105 sm:h-[36rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17140f]/34 to-transparent" />
              <p className="absolute bottom-5 left-5 rounded-full bg-[#fffaf0]/92 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#17140f] backdrop-blur">
                Spa / Bath / Movement
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="services" className="scroll-mt-24 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <motion.div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center" {...reveal}>
          <div className="relative order-2 min-h-[32rem] overflow-hidden rounded-[1.2rem] bg-[#17140f] shadow-[0_30px_90px_rgba(94,69,43,0.14)] lg:order-1">
            <Image
              src={photography.lobby}
              alt="Quartz Hotel attentive service"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,20,15,0.04)_0%,rgba(23,20,15,0.72)_100%)]" />
            <div className="absolute bottom-5 left-5 right-5 text-[#fffaf0]">
              <p className="text-[10px] uppercase tracking-[0.34em] text-[#f0cfa4]">Concierge thread</p>
              <p className="mt-3 max-w-md text-sm leading-7 text-[#fffaf0]/76">
                One quiet conversation for arrivals, tables, room notes, and departure timing.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Kicker>Service</Kicker>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(3rem,6vw,6.8rem)] leading-[0.82] tracking-[-0.075em]">
              Service before you ask.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#5d5148] sm:text-base">
              Quartz keeps service visible only where it helps: before arrival, during the stay, and at departure.
            </p>
            <div className="mt-8 grid gap-3">
              {serviceNotes.map(([title, note], index) => (
                <motion.div
                  key={title}
                  whileHover={shouldReduceMotion ? undefined : { x: 8 }}
                  className="grid gap-4 rounded-[1rem] border border-[#ead8bd] bg-[#fffaf0]/56 p-5 sm:grid-cols-[3.5rem_1fr] sm:items-start"
                >
                  <span className="text-[10px] uppercase tracking-[0.28em] text-[#9b6a47]">0{index + 1}</span>
                  <div>
                    <h3 className="font-display text-3xl leading-none tracking-[-0.055em]">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#5d5148]">{note}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="events" className="scroll-mt-24 bg-[#efe0cb] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <motion.div className="mx-auto max-w-[92rem]" {...reveal}>
          <div className="grid gap-7 lg:grid-cols-[0.62fr_0.54fr] lg:items-end">
            <div>
              <Kicker>Events</Kicker>
              <h2 className="mt-4 max-w-3xl font-display text-[clamp(3rem,4.9vw,5.6rem)] leading-[0.88] tracking-[-0.075em]">
                Events, softly hosted.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-[#5d5148] sm:text-base lg:justify-self-end">
              Private dinners, boardroom hours, and skyline receptions stay
              warm, composed, and easy to host.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[0.52fr_0.48fr] lg:items-stretch">
            <div className="relative min-h-[30rem] overflow-hidden rounded-[1.2rem] bg-[#17140f] shadow-[0_30px_90px_rgba(94,69,43,0.16)]">
              <Image
                src={photography.terrace}
                alt="Quartz Hotel private event terrace"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,20,15,0.04)_0%,rgba(23,20,15,0.76)_100%)]" />
              <div className="absolute bottom-5 left-5 right-5 text-[#fffaf0]">
                <p className="text-[10px] uppercase tracking-[0.34em] text-[#f0cfa4]">Event rhythm</p>
                <h3 className="mt-3 max-w-2xl font-display text-[clamp(3rem,5vw,5.8rem)] leading-[0.82] tracking-[-0.075em]">
                  Dinner, meeting, rooftop.
                </h3>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {eventSpaces.map(([title, count, note], index) => (
                <motion.article
                  key={title}
                  whileHover={shouldReduceMotion ? undefined : { y: -7 }}
                  className={`rounded-[1rem] border p-5 ${
                    index === 2
                      ? "border-[#17140f] bg-[#17140f] text-[#fffaf0]"
                      : "border-white/80 bg-[#fffaf0]/72"
                  }`}
                >
                  <p className={`text-[10px] uppercase tracking-[0.3em] ${index === 2 ? "text-[#f0cfa4]" : "text-[#9b6a47]"}`}>{title}</p>
                  <p className="mt-5 font-display text-5xl leading-none tracking-[-0.06em]">{count}</p>
                  <p className={`mt-4 text-sm leading-6 ${index === 2 ? "text-[#efe0c8]/76" : "text-[#5d5148]"}`}>{note}</p>
                </motion.article>
              ))}
              <Link
                href="/#reserve"
                className="inline-flex items-center justify-between rounded-[1rem] bg-[#e7cfa9] p-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#17140f] transition hover:-translate-y-1 hover:bg-[#17140f] hover:text-[#fffaf0] sm:col-span-2"
              >
                Ask for dates <span>+</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="visit" className="scroll-mt-24 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <motion.div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center" {...reveal}>
          <div>
            <Kicker>Visit</Kicker>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(3rem,6vw,6.8rem)] leading-[0.82] tracking-[-0.075em]">
              Central, but soft around the edges.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#5d5148] sm:text-base">
              Close to work, galleries, rail, and the airport without making the stay feel like transit.
            </p>
            <div className="mt-8 grid gap-3">
              {visitNotes.map(([place, time, note]) => (
                <motion.div
                  key={place}
                  whileHover={shouldReduceMotion ? undefined : { x: 8 }}
                  className="grid gap-3 border-t border-[#dfc9a7] py-4 sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <div>
                    <p className="font-display text-3xl leading-none tracking-[-0.055em]">{place}</p>
                    <p className="mt-2 text-sm text-[#5d5148]">{note}</p>
                  </div>
                  <span className="w-fit rounded-full bg-[#17140f] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#fffaf0]">
                    {time}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid min-h-[34rem] grid-cols-[0.9fr_1fr] gap-4">
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: 10 }}
              className="relative self-end overflow-hidden rounded-[1rem_3.6rem_1rem_3.6rem] shadow-[0_28px_80px_rgba(94,69,43,0.14)]"
            >
              <Image
                src={photography.lobby}
                alt="Quartz Hotel city arrival"
                width={700}
                height={900}
                className="h-[24rem] w-full object-cover transition duration-700 hover:scale-105 sm:h-[29rem]"
              />
            </motion.div>
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { y: -10 }}
              className="relative overflow-hidden rounded-[3.8rem_1rem_3.8rem_1rem] shadow-[0_28px_80px_rgba(94,69,43,0.14)]"
            >
              <Image
                src={photography.terrace}
                alt="Quartz Hotel terrace in the city"
                width={800}
                height={1000}
                className="h-[30rem] w-full object-cover transition duration-700 hover:scale-105 sm:h-[36rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17140f]/44 to-transparent" />
              <p className="absolute bottom-5 left-5 rounded-full bg-[#fffaf0]/92 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#17140f] backdrop-blur">
                City / Gallery / Rail
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <motion.div className="mx-auto grid max-w-[92rem] gap-10 border-t border-[#dfc9a7] pt-10 lg:grid-cols-[0.82fr_1.18fr]" {...reveal}>
          <div>
            <Kicker>Guest notes</Kicker>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(3rem,6vw,6.8rem)] leading-[0.82] tracking-[-0.075em]">
              Useful answers, no brochure voice.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#5d5148]">
              Short notes for the questions guests usually ask before choosing a room.
            </p>
          </div>

          <div className="grid gap-3">
            {faqs.map(([question, answer], index) => (
              <div key={question} className="overflow-hidden border-t border-[#dfc9a7] first:border-t-0">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-display text-3xl leading-none tracking-[-0.045em] sm:text-4xl">{question}</span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#17140f] text-[#fffaf0]">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index ? (
                    <motion.div
                      initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p className="max-w-2xl pb-6 text-sm leading-7 text-[#5d5148]">{answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="reserve" className="relative overflow-hidden bg-[#f0dcc0] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute left-[-10rem] top-[-10rem] h-96 w-96 rounded-full bg-[#fbf7ef]/58 blur-3xl" />
        <motion.div className="relative mx-auto grid max-w-[92rem] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center" {...reveal}>
          <div>
            <Kicker>Direct booking</Kicker>
            <h2 className="mt-4 max-w-4xl font-display text-[clamp(3rem,6vw,6.8rem)] leading-[0.82] tracking-[-0.075em]">
              Book direct. Arrive lighter.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#5d5148]">
              Flexible changes, room notes, dinner timing, and arrival support stay in one quiet conversation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#cfa36f] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#17140f]">Flexible dates</span>
              <span className="rounded-full border border-[#cfa36f] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#17140f]">Arrival notes</span>
              <span className="rounded-full border border-[#cfa36f] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#17140f]">Room choice</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.2rem] bg-[#17140f] p-5 text-[#fffaf0] shadow-[0_30px_90px_rgba(94,69,43,0.18)] sm:p-6">
            <div className="absolute right-[-5rem] top-[-5rem] h-56 w-56 rounded-full bg-[#f0cfa4]/18 blur-3xl" />
            <div className="relative grid gap-3 sm:grid-cols-2">
              <a href="tel:+12125550188" className="rounded-[0.85rem] border border-white/12 px-5 py-4 text-sm text-[#fffaf0]/78 transition hover:border-[#f0cfa4] hover:text-[#fffaf0]">
                <span className="block text-[9px] uppercase tracking-[0.26em] text-[#f0cfa4]">Call</span>
                <span className="mt-2 block">+1 (212) 555-0188</span>
              </a>
              <a href="mailto:stay@quartzhotel.com" className="rounded-[0.85rem] border border-white/12 px-5 py-4 text-sm text-[#fffaf0]/78 transition hover:border-[#f0cfa4] hover:text-[#fffaf0]">
                <span className="block text-[9px] uppercase tracking-[0.26em] text-[#f0cfa4]">Email</span>
                <span className="mt-2 block">stay@quartzhotel.com</span>
              </a>
            </div>
            <Link href="/#reserve" className="relative mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#f0cfa4] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#17140f] transition hover:-translate-y-1 hover:bg-[#fffaf0]">
              Check availability <span className="ml-3">+</span>
            </Link>
          </div>
        </motion.div>
      </section>

      <footer className="bg-[#fbf7ef] px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[92rem] gap-8 border-t border-[#dfc9a7] pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-display text-4xl tracking-[-0.05em]">Quartz Hotel</p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-[#9b6a47]">Bright premium city stay</p>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#5d5148]">
              Calm rooms, warm dining, useful wellness, and a smoother way to arrive in the city.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] uppercase tracking-[0.22em] text-[#5d5148]">
            <Link href="/rooms" className="hover:text-[#17140f]">Rooms</Link>
            <Link href="/restaurant-menu" className="hover:text-[#17140f]">Restaurant</Link>
            <Link href="/bar-menu" className="hover:text-[#17140f]">Bar</Link>
            <Link href="/minimal" className="hover:text-[#17140f]">Home 2</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
