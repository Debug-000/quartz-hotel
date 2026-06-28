"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { photography, roomTypes } from "@/lib/quartz-data";

const quartzMoments = [
  ["01", "Lobby glow", "Warm arrival, low voices, bags already moving upstairs.", photography.lobby],
  ["02", "Room hush", "Blackout sleep, quiet texture, city views without the noise.", photography.room],
  ["03", "Low-lit table", "A grill seat, late plates, and an evening that slows down.", photography.dining],
  ["04", "Private reset", "Steam, rain shower, soft robes, and a calmer next morning.", photography.bathroom],
] as const;

const diningCards = [
  {
    label: "Breakfast",
    title: "Atrium Room",
    time: "06:30",
    href: "/restaurant-menu",
    note: "Quiet coffee and pastry before the city gets loud.",
  },
  {
    label: "Dinner",
    title: "Marlowe Grill",
    time: "19:30",
    href: "/restaurant-menu",
    note: "Warm plates, low light, and a table that feels held.",
  },
  {
    label: "Late",
    title: "Roofline Bar",
    time: "23:10",
    href: "/bar-menu",
    note: "Nightcaps, small plates, and a slower last hour.",
  },
] as const;

const wellnessItems = [
  "Low-light treatment rooms",
  "Steam, sauna, recovery loungers",
  "24-hour movement studio",
  "Private stretch kit on request",
] as const;

const serviceFlow = [
  ["Arrival without friction", "A quiet handoff: room notes, bags, keys, and timing already aligned."],
  ["The city edited down", "Concierge routes, tables, cars, and calm pauses mapped around the guest."],
  ["Departure kept soft", "Late checkout requests, luggage timing, and the final ride handled early."],
] as const;

const eventSpaces = [
  ["Private dinner", "18", "guests", "Marlowe table, low light, private service."],
  ["Boardroom", "14", "guests", "Quiet daylight, proper screens, no corporate glare."],
  ["Rooftop reception", "120", "guests", "Skyline drinks with a controlled guest flow."],
  ["Salon gathering", "42", "guests", "Soft seating, warm lighting, and room to move."],
] as const;

const visitTimes = [
  ["Financial district", "5 min", "Morning meetings without a long transfer."],
  ["Museum quarter", "9 min", "A quiet gallery route before dinner."],
  ["Central station", "12 min", "Easy arrivals, late departures."],
  ["Airport", "24 min", "Cars timed before checkout starts."],
] as const;

const faqs = [
  ["Can arrivals be planned before we land?", "Yes. Transfers, room notes, restaurant holds, and early-arrival requests can be arranged before the guest reaches Quartz."],
  ["Is the hotel quiet enough for work?", "Rooms include blackout drapery, calm lighting, fast Wi-Fi, and desk setups suited to short calls or focused mornings."],
  ["Can dinner and late drinks stay in-house?", "Yes. Marlowe Grill and Roofline Bar cover the evening without needing to leave the property."],
] as const;

function Kicker({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`text-[10px] uppercase tracking-[0.34em] ${dark ? "text-[#d7b891]/62" : "text-[#9a6849]"}`}>
      {children}
    </p>
  );
}

function ButtonLink({ href, children, pale = false }: { href: string; children: React.ReactNode; pale?: boolean }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.22em] transition hover:-translate-y-1 ${
        pale
          ? "bg-[#f0cfa4] text-[#17140f] hover:bg-[#fff6e8]"
          : "bg-[#17140f] text-[#fff6e8] hover:bg-[#955d3c]"
      }`}
    >
      {children}
      <span className="transition group-hover:translate-x-1">+</span>
    </Link>
  );
}

export default function MinimalPreviewHomePage() {
  const shouldReduceMotion = useReducedMotion();
  const [activeRoom, setActiveRoom] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const selectedRoom = roomTypes[activeRoom];

  const reveal = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.22 },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
      };

  const staggerReveal = shouldReduceMotion
    ? {}
    : {
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.18 },
        variants: {
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.09,
              delayChildren: 0.06,
            },
          },
        },
      };

  const revealItem = shouldReduceMotion
    ? {}
    : {
        variants: {
          hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
          show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
          },
        },
      };

  return (
    <div className="relative overflow-hidden bg-[#eee4d6] text-[#17140f]">
      <section className="relative min-h-[96svh] bg-[#11100d] text-[#fff6e8]">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={photography.suite}
            alt="Quartz Hotel suite prepared for a quiet city stay"
            className="absolute inset-0 h-full w-full object-cover"
            animate={shouldReduceMotion ? undefined : { scale: [1.03, 1.08, 1.03], y: [0, -10, 0] }}
            transition={{ duration: 24, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(13,13,11,0.08),rgba(13,13,11,0.5)_54%,rgba(13,13,11,0.84)),linear-gradient(180deg,rgba(13,13,11,0.2),rgba(13,13,11,0.66)_72%,rgba(13,13,11,0.92))]" />
          <motion.div
            className="absolute left-1/2 top-[28%] h-72 w-72 -translate-x-1/2 rounded-full bg-[#f0cfa4]/18 blur-3xl"
            animate={shouldReduceMotion ? undefined : { opacity: [0.32, 0.58, 0.32], scale: [1, 1.08, 1] }}
            transition={{ duration: 11, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>

        <header className="quartz-after-load quartz-after-load-nav absolute inset-x-0 top-0 z-20 px-5 pt-5 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[92rem] grid-cols-[1fr_auto] items-center gap-4 border-b border-[#fff6e8]/16 pb-4 md:grid-cols-[1fr_auto_1fr]">
            <Link href="/minimal" className="font-display text-2xl tracking-[-0.04em]">Quartz</Link>
            <nav className="hidden items-center gap-7 md:flex">
              {[["Stay", "#stay"], ["Mood", "#planner"], ["Dining", "#dining"], ["Wellness", "#wellness"], ["Visit", "#visit"]].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="group relative py-2 text-[10px] uppercase tracking-[0.24em] text-[#fff6e8]/68 transition duration-300 hover:text-[#fff6e8]"
                >
                  <span className="absolute inset-x-0 bottom-0 h-px origin-center scale-x-0 bg-[#f0cfa4] shadow-[0_0_16px_rgba(240,207,164,0.9)] transition duration-300 ease-out group-hover:scale-x-100" />
                  <span className="relative z-10">{label}</span>
                </a>
              ))}
            </nav>
            <Link
              href="#reserve"
              className="justify-self-end rounded-full border border-[#fff6e8]/24 px-5 py-2.5 text-[9px] font-bold uppercase tracking-[0.22em] text-[#fff6e8] transition duration-300 hover:border-[#f0cfa4] hover:text-[#f0cfa4]"
            >
              Book
            </Link>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[96svh] max-w-[92rem] items-center justify-center px-5 pb-32 pt-32 text-center sm:px-8 lg:px-12">
          <motion.div className="mx-auto max-w-4xl">
            <p className="quartz-after-load quartz-after-load-kicker text-[10px] uppercase tracking-[0.34em] text-[#d7b891]/72">Quartz Hotel / Home 2</p>
            <h1 className="quartz-after-load quartz-after-load-title mx-auto mt-5 max-w-4xl font-display text-[clamp(3.4rem,7.4vw,8rem)] leading-[0.84] tracking-[-0.08em] text-[#fff6e8]">
              Softer city hours.
            </h1>
            <p className="quartz-after-load quartz-after-load-copy mx-auto mt-6 max-w-xl text-sm leading-7 text-[#f7e4cc]/72 sm:text-base">
              Calm rooms, late light, warm tables, and a quieter way to arrive in the city.
            </p>
            <div className="quartz-after-load quartz-after-load-actions mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="#reserve" pale>Check dates</ButtonLink>
              <ButtonLink href="#stay">See rooms</ButtonLink>
            </div>
          </motion.div>
        </div>

        <motion.div className="absolute inset-x-0 bottom-0 z-20 translate-y-[45%] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[78rem] snap-x gap-4 overflow-x-auto pb-3 [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
            {[
              {
                label: "Entry",
                room: roomTypes[0],
                image: roomTypes[0].image,
                tone: "Fast city stays",
                href: "#stay",
              },
              {
                label: "Studio",
                room: roomTypes[1],
                image: photography.suiteLiving,
                tone: "More lounge space",
                href: "#stay",
              },
              {
                label: "Suite",
                room: roomTypes[2],
                image: roomTypes[2].image,
                tone: "Private arrival",
                href: "#stay",
              },
            ].map((card, index) => (
              <motion.a
                key={card.room.name}
                href={card.href}
                onClick={() => setActiveRoom(index)}
                whileHover={shouldReduceMotion ? undefined : { y: -10, scale: 1.012 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className={`quartz-after-load group min-w-[82%] snap-center overflow-hidden rounded-[2.8rem_0.8rem_2.8rem_0.8rem] border border-[#fff6e8]/85 bg-[#fbf4e8] text-[#17140f] shadow-[0_28px_80px_rgba(0,0,0,0.26)] sm:min-w-[46%] md:min-w-0 ${index === 1 ? "quartz-after-load-card-2 md:-translate-y-6" : index === 2 ? "quartz-after-load-card-3" : "quartz-after-load-card-1"}`}
              >
                <div className="relative h-48 overflow-hidden sm:h-56">
                  <Image
                    src={card.image}
                    alt={`${card.room.name} at Quartz Hotel`}
                    fill
                    sizes="(min-width: 768px) 33vw, 82vw"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17140f]/55 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#fbf4e8]/92 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#17140f] shadow-[0_12px_30px_rgba(0,0,0,0.14)] backdrop-blur-sm">
                    {card.label}
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-full bg-[#17140f]/78 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#fff6e8] backdrop-blur-sm">
                    {card.room.rate}
                  </span>
                </div>
                <div className="flex items-end justify-between gap-4 p-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.26em] text-[#9b6546]">{card.room.size}</p>
                    <h3 className="mt-2 font-display text-3xl leading-none tracking-[-0.055em] sm:text-4xl">{card.room.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#5d5148]">{card.tone}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-[#17140f] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#fff6e8] transition duration-300 group-hover:bg-[#955d3c] group-hover:shadow-[0_0_24px_rgba(149,93,60,0.32)]">
                    Check +
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="stay" className="relative scroll-mt-24 px-5 pb-16 pt-44 sm:px-8 sm:pt-48 lg:px-12 lg:pb-24 lg:pt-52">
        <div className="absolute inset-x-0 top-24 mx-auto h-64 max-w-6xl rounded-full bg-[#d7b891]/16 blur-3xl" />
        <motion.div className="relative mx-auto max-w-[92rem]" {...reveal}>
          <div className="mb-8 flex flex-col justify-between gap-5 border-t border-[#d8c4a8] pt-8 md:flex-row md:items-end">
            <div>
              <Kicker>Rooms</Kicker>
              <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.7rem,5.6vw,5.8rem)] leading-[0.86] tracking-[-0.065em] text-[#17140f]">
                Three ways to stay.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#5d5148] sm:text-base">
              Pick by space, rhythm, and how much privacy the trip needs.
            </p>
          </div>

          <motion.div className="grid gap-4 lg:grid-cols-3" {...staggerReveal}>
            {roomTypes.map((room, index) => (
              <motion.button
                key={room.name}
                type="button"
                onClick={() => setActiveRoom(index)}
                {...revealItem}
                whileHover={shouldReduceMotion ? undefined : { y: -10, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                className={`group overflow-hidden rounded-[2.6rem_0.75rem_2.6rem_0.75rem] border text-left shadow-[0_24px_70px_rgba(23,20,15,0.1)] transition ${
                  activeRoom === index
                    ? "border-[#17140f] bg-[#17140f] text-[#fff6e8]"
                    : "border-[#fff6e8]/90 bg-[#fbf4e8] text-[#17140f] hover:border-[#955d3c]"
                }`}
              >
                <div className="relative h-64 overflow-hidden sm:h-72">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    sizes="(min-width: 1024px) 31vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17140f]/64 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-[#fbf4e8]/92 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#17140f] backdrop-blur-sm">
                    0{index + 1}
                  </span>
                  <span className="absolute bottom-5 left-5 rounded-full bg-[#17140f]/76 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#fff6e8] backdrop-blur-sm">
                    {room.rate}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={`text-[10px] uppercase tracking-[0.28em] ${activeRoom === index ? "text-[#d7b891]" : "text-[#9b6546]"}`}>
                        {room.size} / {room.occupancy}
                      </p>
                      <h3 className="mt-3 font-display text-4xl leading-none tracking-[-0.055em] sm:text-5xl">{room.name}</h3>
                    </div>
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-lg transition ${
                      activeRoom === index ? "bg-[#f0cfa4] text-[#17140f]" : "bg-[#17140f] text-[#fff6e8] group-hover:bg-[#955d3c]"
                    }`}>
                      +
                    </span>
                  </div>
                  <p className={`mt-5 text-sm leading-7 ${activeRoom === index ? "text-[#efe0c8]/76" : "text-[#5d5148]"}`}>
                    {room.idealFor}
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRoom.name}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="mt-5 grid gap-4 rounded-[2rem_0.65rem_2rem_0.65rem] border border-[#e2d2bc] bg-[#fffaf0]/82 p-4 shadow-[0_20px_60px_rgba(23,20,15,0.08)] backdrop-blur-md lg:grid-cols-[1fr_auto] lg:items-center lg:p-5"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#9b6546]">{selectedRoom.accent}</p>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-[#5d5148] sm:text-base">{selectedRoom.description}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                {selectedRoom.details.slice(0, 2).map((detail) => (
                  <span key={detail} className="rounded-full border border-[#e2d2bc] px-4 py-2 text-sm text-[#5d5148]">
                    {detail}
                  </span>
                ))}
                <Link
                  href="#reserve"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#17140f] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#fff6e8] transition hover:-translate-y-1 hover:bg-[#955d3c]"
                >
                  Check room <span className="transition group-hover:translate-x-1">+</span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>

      <section id="planner" className="relative scroll-mt-24 overflow-hidden bg-[#14120f] px-5 py-16 text-[#fff6e8] sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(149,93,60,0.26),transparent_30%),radial-gradient(circle_at_84%_72%,rgba(240,207,164,0.16),transparent_34%)]" />
        <motion.div
          className="absolute left-[8%] top-20 h-56 w-56 rounded-full bg-[#d7b891]/14 blur-3xl"
          animate={shouldReduceMotion ? undefined : { x: [0, 26, 0], y: [0, -18, 0], opacity: [0.4, 0.72, 0.4] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <div className="relative mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <motion.div {...reveal}>
            <Kicker dark>Quartz mood</Kicker>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(3.3rem,7vw,8rem)] leading-[0.82] tracking-[-0.075em] text-[#fff6e8]">
              Less schedule. More atmosphere.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[#ead8c0]/72 sm:text-base">
              The hotel is built around a few quiet moments: an easy arrival, a room that settles fast, dinner close by, and a softer reset before the city starts again.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#stay" pale>See rooms</ButtonLink>
              <Link href="#dining" className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#fff6e8]/22 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#fff6e8] transition hover:-translate-y-1 hover:border-[#f0cfa4] hover:text-[#f0cfa4]">
                Explore dining <span className="transition group-hover:translate-x-1">+</span>
              </Link>
            </div>
          </motion.div>

          <motion.div className="relative min-h-[35rem]" {...reveal}>
            <motion.img
              src={photography.lobby}
              alt="Quartz Hotel lobby glow"
              className="absolute left-0 top-8 h-[23rem] w-[68%] rounded-[4rem_1rem_4rem_1rem] object-cover shadow-[0_30px_90px_rgba(0,0,0,0.34)] sm:h-[28rem]"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.025, rotate: -0.6 }}
              transition={{ duration: 0.45 }}
            />
            <motion.img
              src={photography.dining}
              alt="Quartz Hotel dining room"
              className="absolute right-0 top-0 h-[14rem] w-[46%] rounded-[1rem_3.2rem_1rem_3.2rem] object-cover shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:h-[18rem]"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.035, rotate: 0.8 }}
              transition={{ duration: 0.45 }}
            />
            <motion.img
              src={photography.room}
              alt="Quartz Hotel quiet room"
              className="absolute bottom-0 right-[8%] h-[16rem] w-[54%] rounded-[3rem_0.8rem_3rem_0.8rem] object-cover shadow-[0_28px_80px_rgba(0,0,0,0.3)] sm:h-[20rem]"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03, rotate: -0.5 }}
              transition={{ duration: 0.45 }}
            />
            <div className="absolute left-[8%] top-[52%] hidden -translate-y-1/2 rounded-full border border-[#fff6e8]/18 bg-[#fff6e8]/10 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#fff6e8] backdrop-blur-md sm:block">
              Four quiet signatures
            </div>
          </motion.div>
        </div>

        <motion.div className="relative mx-auto mt-14 grid max-w-[92rem] gap-3 sm:grid-cols-2 lg:grid-cols-4" {...staggerReveal}>
          {quartzMoments.map(([number, title, copy], index) => (
            <motion.article
              key={title}
              {...revealItem}
              whileHover={shouldReduceMotion ? undefined : { y: -8, rotate: index % 2 === 0 ? -0.45 : 0.45 }}
              className="group border-t border-[#fff6e8]/18 pt-5 transition hover:border-[#f0cfa4]"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#d7b891]/56">{number}</p>
                <span className="h-px flex-1 origin-left scale-x-0 bg-[#f0cfa4] shadow-[0_0_14px_rgba(240,207,164,0.72)] transition duration-300 group-hover:scale-x-100" />
              </div>
              <h3 className="mt-5 font-display text-4xl leading-none tracking-[-0.055em] text-[#fff6e8]">{title}</h3>
              <p className="mt-4 max-w-xs text-sm leading-7 text-[#ead8c0]/68">{copy}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="dining" className="relative scroll-mt-24 overflow-hidden bg-[#efe4d4] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute left-0 top-0 h-32 w-full bg-gradient-to-b from-[#14120f] to-transparent opacity-10" />
        <div className="absolute -right-28 top-20 h-72 w-72 rounded-full bg-[#955d3c]/12 blur-3xl" />

        <div className="relative mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <motion.div className="relative min-h-[34rem]" {...reveal}>
            <motion.img
              src={photography.dining}
              alt="Quartz Hotel restaurant dining room"
              className="absolute left-0 top-6 h-[24rem] w-[76%] rounded-[1rem_4.5rem_1rem_4.5rem] object-cover shadow-[0_30px_90px_rgba(23,20,15,0.18)] sm:h-[29rem]"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.025, rotate: -0.55 }}
              transition={{ duration: 0.45 }}
            />
            <motion.div
              className="absolute right-0 top-0 w-[48%] rounded-[3rem_0.85rem_3rem_0.85rem] bg-[#17140f] p-5 text-[#fff6e8] shadow-[0_24px_70px_rgba(23,20,15,0.24)] sm:p-6"
              whileHover={shouldReduceMotion ? undefined : { y: -8, rotate: 0.65 }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#d7b891]/62">Marlowe Grill</p>
              <h3 className="mt-8 font-display text-[clamp(2.5rem,4vw,4.6rem)] leading-[0.85] tracking-[-0.06em]">Dinner holds the room.</h3>
              <p className="mt-8 text-[10px] uppercase tracking-[0.24em] text-[#d7b891]/72">12:30 - 22:30</p>
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-[12%] grid w-[78%] gap-3 rounded-[3rem_1rem_3rem_1rem] border border-[#fff6e8]/68 bg-[#fbf4e8]/92 p-4 shadow-[0_24px_70px_rgba(23,20,15,0.16)] backdrop-blur-md sm:grid-cols-3"
              {...staggerReveal}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ duration: 0.45 }}
            >
              {diningCards.map((card) => (
                <motion.div key={card.title} {...revealItem}>
                  <Link href={card.href} className="group block rounded-[1.4rem_0.5rem_1.4rem_0.5rem] px-3 py-3 transition hover:bg-[#17140f] hover:text-[#fff6e8]">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#9b6546] transition group-hover:text-[#d7b891]">{card.time}</p>
                    <p className="mt-3 font-display text-2xl leading-none tracking-[-0.05em]">{card.label}</p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div {...reveal}>
            <Kicker>Dining</Kicker>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(3.2rem,6.8vw,7.8rem)] leading-[0.82] tracking-[-0.075em] text-[#17140f]">
              From quiet coffee to late light.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#5d5148] sm:text-base">
              Breakfast stays calm, dinner feels composed, and the bar keeps the evening loose without turning the hotel loud.
            </p>

            <motion.div className="mt-8 space-y-3" {...staggerReveal}>
              {diningCards.map((card, index) => (
                <motion.div key={card.title} {...revealItem}>
                  <Link
                    href={card.href}
                    className="group grid gap-4 border-t border-[#d8c4a8] py-4 transition hover:border-[#955d3c] sm:grid-cols-[4rem_1fr_auto] sm:items-center"
                  >
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#9b6546]">0{index + 1}</p>
                    <div>
                      <h3 className="font-display text-3xl leading-none tracking-[-0.055em] text-[#17140f]">{card.title}</h3>
                      <p className="mt-2 max-w-md text-sm leading-6 text-[#5d5148]">{card.note}</p>
                    </div>
                    <span className="w-fit rounded-full border border-[#d8c4a8] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#17140f] transition group-hover:border-[#17140f] group-hover:bg-[#17140f] group-hover:text-[#fff6e8]">
                      {card.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/restaurant-menu" className="group inline-flex items-center justify-center rounded-full bg-[#17140f] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#fff6e8] transition hover:-translate-y-1 hover:bg-[#955d3c]">
                Restaurant menu <span className="ml-3 transition group-hover:translate-x-1">+</span>
              </Link>
              <Link href="/bar-menu" className="group inline-flex items-center justify-center rounded-full border border-[#d8c4a8] bg-[#fbf4e8] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#17140f] transition hover:-translate-y-1 hover:border-[#17140f]">
                Bar menu <span className="ml-3 transition group-hover:translate-x-1">+</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="wellness" className="relative scroll-mt-24 overflow-hidden bg-[#23271f] px-5 py-16 text-[#fff6e8] sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(240,207,164,0.16),transparent_32%),radial-gradient(circle_at_76%_78%,rgba(111,125,100,0.26),transparent_38%),linear-gradient(135deg,#17140f_0%,#25291f_46%,#3d3a2f_100%)]" />
        <motion.div
          className="absolute right-[18%] top-20 h-64 w-64 rounded-full bg-[#f0cfa4]/13 blur-3xl"
          animate={shouldReduceMotion ? undefined : { y: [0, 24, 0], opacity: [0.32, 0.6, 0.32] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <div className="relative mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div {...reveal}>
            <Kicker dark>Wellness</Kicker>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(3.4rem,7vw,8rem)] leading-[0.82] tracking-[-0.075em] text-[#fff6e8]">
              Recovery, kept quiet.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#efe0c8]/74 sm:text-base">
              No resort performance. Just dim rooms, warm water, movement, and small resets that fit naturally around a city stay.
            </p>

            <motion.div className="mt-10 grid gap-3 sm:grid-cols-2" {...staggerReveal}>
              {wellnessItems.map((item, index) => (
                <motion.div
                  key={item}
                  {...revealItem}
                  whileHover={shouldReduceMotion ? undefined : { y: -6, rotate: index % 2 === 0 ? -0.35 : 0.35 }}
                  className="group border-t border-[#fff6e8]/18 pt-4 transition hover:border-[#f0cfa4]"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.28em] text-[#d7b891]/72">0{index + 1}</span>
                    <span className="h-px flex-1 origin-left scale-x-0 bg-[#f0cfa4] shadow-[0_0_14px_rgba(240,207,164,0.72)] transition duration-300 group-hover:scale-x-100" />
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[#efe0c8]/82">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="relative min-h-[35rem]" {...reveal}>
            <motion.img
              src={photography.bathroom}
              alt="Quartz Hotel bathroom ritual"
              className="absolute right-0 top-0 h-[25rem] w-[72%] rounded-[4.5rem_1rem_4.5rem_1rem] object-cover shadow-[0_32px_95px_rgba(23,20,15,0.28)] sm:h-[30rem]"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.025, rotate: 0.55 }}
              transition={{ duration: 0.45 }}
            />
            <motion.img
              src={photography.spa}
              alt="Quartz Hotel quiet spa room"
              className="absolute left-0 top-[30%] h-[17rem] w-[48%] rounded-[1rem_3.2rem_1rem_3.2rem] object-cover shadow-[0_26px_80px_rgba(23,20,15,0.24)] sm:h-[20rem]"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.035, rotate: -0.65 }}
              transition={{ duration: 0.45 }}
            />
            <motion.div
              className="absolute bottom-0 right-[8%] w-[62%] rounded-[3rem_0.85rem_3rem_0.85rem] border border-[#fff6e8]/16 bg-[#17140f]/58 p-5 text-[#fff6e8] shadow-[0_24px_75px_rgba(23,20,15,0.24)] backdrop-blur-md"
              whileHover={shouldReduceMotion ? undefined : { y: -8 }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#d7b891]/72">After the city</p>
              <p className="mt-4 font-display text-[clamp(2rem,3.4vw,3.6rem)] leading-[0.9] tracking-[-0.055em]">Steam, stillness, softer light.</p>
              <p className="mt-5 text-sm leading-6 text-[#efe0c8]/70">A short reset before dinner or a quieter checkout morning.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="relative scroll-mt-24 overflow-hidden bg-[#efe4d4] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(149,93,60,0.11),transparent_30%),radial-gradient(circle_at_78%_72%,rgba(23,20,15,0.08),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div className="relative min-h-[34rem] order-2 lg:order-1" {...reveal}>
            <motion.img
              src={photography.lobby}
              alt="Quartz Hotel concierge arrival"
              className="absolute left-0 top-0 h-[25rem] w-[74%] rounded-[4rem_1rem_4rem_1rem] object-cover shadow-[0_30px_90px_rgba(23,20,15,0.18)] sm:h-[30rem]"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.025, rotate: -0.55 }}
              transition={{ duration: 0.45 }}
            />
            <motion.div
              className="absolute right-0 top-16 w-[52%] rounded-[3rem_0.85rem_3rem_0.85rem] bg-[#17140f] p-5 text-[#fff6e8] shadow-[0_26px_80px_rgba(23,20,15,0.24)] sm:p-6"
              whileHover={shouldReduceMotion ? undefined : { y: -8, rotate: 0.55 }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#d7b891]/70">Invisible service</p>
              <p className="mt-8 font-display text-[clamp(2.2rem,3.8vw,4.1rem)] leading-[0.86] tracking-[-0.055em]">Handled before you ask.</p>
              <p className="mt-6 text-sm leading-6 text-[#efe0c8]/68">The luxury is not more attention. It is less friction.</p>
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-[10%] w-[78%] rounded-[1rem_3.4rem_1rem_3.4rem] border border-[#fff6e8]/70 bg-[#fbf4e8]/92 p-4 shadow-[0_24px_70px_rgba(23,20,15,0.14)] backdrop-blur-md"
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#9b6546]">Tonight&apos;s quiet asks</p>
              <motion.div className="mt-4 flex flex-wrap gap-2" {...staggerReveal}>
                {["Corner room", "Dinner hold", "Late bags", "Car ready"].map((item) => (
                  <motion.span key={item} className="rounded-full border border-[#d8c4a8] px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#17140f]" {...revealItem}>{item}</motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="order-1 lg:order-2" {...reveal}>
            <Kicker>Services</Kicker>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(3.2rem,6.8vw,7.8rem)] leading-[0.82] tracking-[-0.075em] text-[#17140f]">
              The best service almost disappears.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#5d5148] sm:text-base">
              Quartz keeps the useful parts close and the performance quiet: arrival, routing, tables, luggage, and checkout all handled with restraint.
            </p>

            <motion.div className="mt-8 space-y-3" {...staggerReveal}>
              {serviceFlow.map(([phase, copy], index) => (
                <motion.article
                  key={phase}
                  {...revealItem}
                  whileHover={shouldReduceMotion ? undefined : { x: 8 }}
                  className="group border-t border-[#d8c4a8] py-4 transition hover:border-[#955d3c]"
                >
                  <div className="grid gap-4 sm:grid-cols-[4rem_1fr] sm:items-start">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#9b6546]">0{index + 1}</p>
                    <div>
                      <h3 className="font-display text-3xl leading-none tracking-[-0.055em] text-[#17140f]">{phase}</h3>
                      <p className="mt-2 max-w-lg text-sm leading-6 text-[#5d5148]">{copy}</p>
                    </div>
                  </div>
                  <span className="mt-4 block h-px origin-left scale-x-0 bg-[#955d3c] transition duration-300 group-hover:scale-x-100" />
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#17140f] px-5 py-16 text-[#fff6e8] sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(240,207,164,0.12),transparent_32%),radial-gradient(circle_at_84%_68%,rgba(149,93,60,0.18),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <motion.div {...reveal}>
            <Kicker dark>Private gatherings</Kicker>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(3.2rem,6.8vw,7.8rem)] leading-[0.82] tracking-[-0.075em] text-[#fff6e8]">
              Rooms that know when to stay quiet.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#efe0c8]/70 sm:text-base">
              Dinners, boards, rooftops, and salons are treated like part of the hotel rhythm: warm, controlled, and never generic.
            </p>

            <motion.div className="mt-10 grid gap-3 sm:grid-cols-2" {...staggerReveal}>
              {eventSpaces.map(([label, value, unit, copy], index) => (
                <motion.article
                  key={label}
                  {...revealItem}
                  whileHover={shouldReduceMotion ? undefined : { y: -7, rotate: index % 2 === 0 ? -0.35 : 0.35 }}
                  className="group border-t border-[#fff6e8]/16 pt-5 transition hover:border-[#f0cfa4]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#d7b891]/68">{label}</p>
                      <p className="mt-4 font-display text-5xl leading-none tracking-[-0.055em] text-[#fff6e8]">{value}</p>
                      <p className="mt-1 text-sm text-[#efe0c8]/56">{unit}</p>
                    </div>
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#f0cfa4] opacity-50 shadow-[0_0_18px_rgba(240,207,164,0.9)] transition group-hover:opacity-100" />
                  </div>
                  <p className="mt-5 max-w-xs text-sm leading-6 text-[#efe0c8]/68">{copy}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="relative min-h-[35rem]" {...reveal}>
            <motion.img
              src={photography.dining}
              alt="Quartz Hotel private dining setup"
              className="absolute right-0 top-0 h-[24rem] w-[76%] rounded-[4.2rem_1rem_4.2rem_1rem] object-cover shadow-[0_32px_95px_rgba(0,0,0,0.32)] sm:h-[29rem]"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.025, rotate: 0.55 }}
              transition={{ duration: 0.45 }}
            />
            <motion.img
              src={photography.suiteLiving}
              alt="Quartz Hotel salon lounge"
              className="absolute left-0 top-[34%] h-[17rem] w-[48%] rounded-[1rem_3.2rem_1rem_3.2rem] object-cover shadow-[0_26px_80px_rgba(0,0,0,0.28)] sm:h-[20rem]"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.035, rotate: -0.65 }}
              transition={{ duration: 0.45 }}
            />
            <motion.div
              className="absolute bottom-0 right-[9%] w-[62%] rounded-[3rem_0.85rem_3rem_0.85rem] border border-[#fff6e8]/16 bg-[#fff6e8]/10 p-5 shadow-[0_24px_75px_rgba(0,0,0,0.24)] backdrop-blur-md"
              whileHover={shouldReduceMotion ? undefined : { y: -8 }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#d7b891]/72">Host note</p>
              <p className="mt-4 font-display text-[clamp(2rem,3.2vw,3.4rem)] leading-[0.9] tracking-[-0.055em]">Enough polish. No banquet energy.</p>
              <p className="mt-5 text-sm leading-6 text-[#efe0c8]/70">Layouts are shaped around the mood, not just the headcount.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="visit" className="relative scroll-mt-24 overflow-hidden bg-[#eee4d6] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(149,93,60,0.1),transparent_30%),radial-gradient(circle_at_84%_76%,rgba(23,20,15,0.08),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <motion.div {...reveal}>
            <Kicker>Visit</Kicker>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(3.2rem,6.8vw,7.8rem)] leading-[0.82] tracking-[-0.075em] text-[#17140f]">
              Central, but never rushed.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#5d5148] sm:text-base">
              Quartz sits close to the useful parts of the city, then edits the arrival so it still feels calm when the street is moving fast.
            </p>

            <motion.div className="mt-10 space-y-4" {...staggerReveal}>
              {visitTimes.map(([place, time, copy], index) => (
                <motion.article
                  key={place}
                  {...revealItem}
                  whileHover={shouldReduceMotion ? undefined : { x: 8 }}
                  className="group grid gap-4 border-t border-[#d8c4a8] py-4 transition hover:border-[#955d3c] sm:grid-cols-[5rem_1fr]"
                >
                  <p className="font-display text-4xl leading-none tracking-[-0.055em] text-[#955d3c]">{time}</p>
                  <div>
                    <div className="flex items-center gap-3">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#9b6546]">0{index + 1}</p>
                      <span className="h-px flex-1 origin-left scale-x-0 bg-[#955d3c] transition duration-300 group-hover:scale-x-100" />
                    </div>
                    <h3 className="mt-3 font-display text-3xl leading-none tracking-[-0.055em] text-[#17140f]">{place}</h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-[#5d5148]">{copy}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="relative min-h-[35rem]" {...reveal}>
            <motion.img
              src={photography.lobby}
              alt="Quartz Hotel city arrival lobby"
              className="absolute right-0 top-0 h-[25rem] w-[74%] rounded-[1rem_4.4rem_1rem_4.4rem] object-cover shadow-[0_30px_90px_rgba(23,20,15,0.18)] sm:h-[30rem]"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.025, rotate: 0.55 }}
              transition={{ duration: 0.45 }}
            />
            <motion.div
              className="absolute left-0 top-[22%] grid h-56 w-56 place-items-center rounded-full border border-[#d8c4a8] bg-[#fbf4e8]/82 text-center shadow-[0_24px_70px_rgba(23,20,15,0.13)] backdrop-blur-md sm:h-64 sm:w-64"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.035, rotate: -1.2 }}
              transition={{ duration: 0.45 }}
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#9b6546]">Quartz radius</p>
                <p className="mt-4 font-display text-6xl leading-none tracking-[-0.07em] text-[#17140f]">12</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-[#5d5148]">minutes to most plans</p>
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-0 right-[10%] w-[66%] rounded-[3rem_0.85rem_3rem_0.85rem] bg-[#17140f] p-5 text-[#fff6e8] shadow-[0_26px_80px_rgba(23,20,15,0.24)]"
              whileHover={shouldReduceMotion ? undefined : { y: -8 }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#d7b891]/72">Arrival note</p>
              <p className="mt-4 font-display text-[clamp(2rem,3.2vw,3.4rem)] leading-[0.9] tracking-[-0.055em]">The city stays close. The noise stays outside.</p>
              <p className="mt-5 text-sm leading-6 text-[#efe0c8]/70">Cars, bags, and table timing are handled before the guest reaches the lobby.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#11100d] px-5 py-16 text-[#fff6e8] sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(240,207,164,0.12),transparent_30%),radial-gradient(circle_at_78%_72%,rgba(149,93,60,0.14),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <motion.div {...reveal}>
            <Kicker dark>Before booking</Kicker>
            <h2 className="mt-4 max-w-3xl font-display text-[clamp(3.1rem,6.4vw,7.2rem)] leading-[0.82] tracking-[-0.075em] text-[#fff6e8]">
              Small answers, calmer decisions.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#efe0c8]/68 sm:text-base">
              The useful questions stay visible. Everything else can be handled by the concierge before arrival.
            </p>
          </motion.div>

          <motion.div className="grid gap-3" {...staggerReveal}>
            {faqs.map(([question, answer], index) => (
              <motion.article
                key={question}
                {...revealItem}
                whileHover={shouldReduceMotion ? undefined : { x: 8 }}
                className="group border-t border-[#fff6e8]/16 transition hover:border-[#f0cfa4]"
              >
                <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="grid w-full gap-4 py-5 text-left sm:grid-cols-[4rem_1fr_auto] sm:items-center">
                  <span className="text-[10px] uppercase tracking-[0.28em] text-[#d7b891]/68">0{index + 1}</span>
                  <span className="font-display text-3xl leading-tight tracking-[-0.045em] text-[#fff6e8] sm:text-4xl">{question}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-[#fff6e8]/18 text-xl text-[#f0cfa4] transition group-hover:border-[#f0cfa4] group-hover:bg-[#f0cfa4] group-hover:text-[#17140f]">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index ? (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pb-5 text-sm leading-7 text-[#efe0c8]/68 sm:pl-16"
                    >
                      {answer}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="reserve" className="relative scroll-mt-24 overflow-hidden bg-[#0d0d0b] px-5 py-12 text-[#fff6e8] sm:px-8 lg:px-12 lg:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_48%,rgba(149,93,60,0.16),transparent_32%),radial-gradient(circle_at_84%_50%,rgba(240,207,164,0.08),transparent_28%)]" />
        <motion.div className="relative mx-auto grid max-w-[92rem] gap-6 rounded-[2.4rem_0.75rem_2.4rem_0.75rem] border border-[#fff6e8]/12 bg-[#17140f] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)] md:grid-cols-[1fr_auto] md:items-center lg:p-7" {...reveal}>
          <div>
            <Kicker dark>Direct booking</Kicker>
            <h2 className="mt-3 max-w-3xl font-display text-[clamp(2.4rem,4.8vw,4.9rem)] leading-[0.86] tracking-[-0.07em] text-[#fff6e8]">
              Reserve direct. Arrive prepared.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#efe0c8]/70">
              Flexible changes, arrival notes, dining holds, and concierge support stay in one conversation.
            </p>
            <motion.div className="mt-5 flex flex-wrap gap-2" {...staggerReveal}>
              {["Flexible rate", "Arrival notes", "Dining holds"].map((item) => (
                <motion.span key={item} className="rounded-full border border-[#fff6e8]/14 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[#efe0c8]/72" {...revealItem}>
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <div className="grid gap-3 md:min-w-80">
            <div className="grid gap-2 text-sm text-[#efe0c8]/70 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              <a href="tel:+12125550188" className="rounded-full border border-[#fff6e8]/12 px-4 py-3 transition hover:border-[#f0cfa4] hover:text-[#fff6e8]">+1 (212) 555-0188</a>
              <a href="mailto:stay@quartzhotel.com" className="rounded-full border border-[#fff6e8]/12 px-4 py-3 transition hover:border-[#f0cfa4] hover:text-[#fff6e8]">stay@quartzhotel.com</a>
            </div>
            <Link href="/#reserve" className="inline-flex items-center justify-center rounded-full bg-[#f0cfa4] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#17140f] transition hover:-translate-y-1 hover:bg-[#fff6e8]">
              Reserve a stay <span className="ml-3">+</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
