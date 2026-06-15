"use client";

/* eslint-disable @next/next/no-img-element */

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const photography = {
  lobby:
    "https://images.unsplash.com/photo-1554009975-d74653b879f1?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8aG90ZWwlMjBpbnNpZGV8ZW58MHx8fHwxNzUwNjQ5NzExfDA&ixlib=rb-4.1.0&q=80&w=1800",
  room:
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjR8fGhvdGVsJTIwcm9vbXxlbnwwfHx8fDE3NTA2NTAyNDR8MA&ixlib=rb-4.1.0&q=80&w=1600",
  dining:
    "https://images.unsplash.com/photo-1759038086841-506aae3e1545?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1800",
  spa:
    "https://images.unsplash.com/photo-1488345979593-09db0f85545f?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8c3BhJTIwaG90ZWx8ZW58MHx8fHwxNzUwNjQ5NzExfDA&ixlib=rb-4.1.0&q=80&w=1800",
  pool:
    "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHJvb2Z0b3AlMjBwb29sfGVufDB8fHx8MTc1MDY0OTcxMXww&ixlib=rb-4.1.0&q=80&w=1800",
  suite:
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&fm=jpg&q=80&w=1800",
};

const roomTypes = [
  {
    name: "City King",
    size: "34 sqm",
    rate: "From $310",
    image: photography.room,
    accent: "Best for one or two-night city stays",
    details: [
      "King bed with blackout drapery",
      "Stone bathroom with rain shower",
      "Desk setup for light working hours",
      "Soft oak, brushed metal, and warm lighting",
    ],
    description:
      "Quartz Hotel's entry room is still meant to feel composed and premium, not like a downgrade from the rest of the property.",
  },
  {
    name: "Corner Studio",
    size: "43 sqm",
    rate: "From $420",
    image: photography.lobby,
    accent: "Best for longer business stays",
    details: [
      "Wider glazing and corner light",
      "Lounge chair and side table",
      "Larger vanity and better storage",
      "Extra floor space for unpacking properly",
    ],
    description:
      "The Corner Studio adds breathing room and a stronger residential feel, which matters once a guest is staying more than one night.",
  },
  {
    name: "Marlowe Suite",
    size: "61 sqm",
    rate: "From $590",
    image: photography.suite,
    accent: "Best for premium arrivals and celebrations",
    details: [
      "Separate living zone and dining niche",
      "Soaking tub and premium bath setup",
      "Arrival pressing and pre-stay concierge planning",
      "Priority rooftop seating when available",
    ],
    description:
      "The suite offer is not about ornament. It is about scale, privacy, smoother service, and a more tailored arrival rhythm.",
  },
];

const stayModes = [
  {
    label: "Business",
    eyebrow: "Quartz for work",
    title: "Fast mornings, quiet rooms, and late suppers that still feel polished.",
    copy:
      "For guests landing with meetings already on the calendar, Quartz Hotel is meant to remove friction rather than add ceremony.",
    moments: [
      "7:00 am espresso in the lobby lounge",
      "8:30 am house car into the business district",
      "6:30 pm dinner at Marlowe Grill",
      "10:00 pm turndown and in-room tea service",
    ],
    cardTone: "bg-[#161b22] text-white",
  },
  {
    label: "Weekend",
    eyebrow: "Quartz at ease",
    title: "Late breakfast, a slower lobby, and enough personality to make a short stay memorable.",
    copy:
      "For couples or solo city breaks, the hotel leans calmer and more atmospheric without becoming performative.",
    moments: [
      "9:30 am breakfast room service",
      "1:00 pm museum quarter walk from the hotel",
      "5:30 pm rooftop pool and cocktail hour",
      "11:00 pm late plates at Roofline Bar",
    ],
    cardTone: "bg-[#f7f3ec] text-[#161b22]",
  },
  {
    label: "Celebration",
    eyebrow: "Quartz dressed up",
    title: "A suite arrival, stronger service touches, and just enough drama at the right moment.",
    copy:
      "For anniversaries, proposal weekends, or private dinners, the experience becomes more personal rather than louder.",
    moments: [
      "Champagne setup before arrival",
      "Private dinner reservation by concierge",
      "Golden-hour rooftop table hold",
      "Late check-out request prioritized",
    ],
    cardTone: "bg-[linear-gradient(145deg,#eadcc9,#d7b48a)] text-[#161b22]",
  },
];

const diningVenues = [
  {
    name: "Atrium Breakfast Room",
    hours: "6:30 am - 10:30 am",
    mood: "Light-filled and quiet",
    copy:
      "Table-side coffee, fresh pastry, eggs to order, and a calmer morning tempo than a generic buffet line.",
  },
  {
    name: "Marlowe Grill",
    hours: "12:30 pm - 10:30 pm",
    mood: "Warm, structured, confident",
    copy:
      "A restrained dining room for client lunches, evening suppers, and guests who want a proper meal without leaving the building.",
  },
  {
    name: "Roofline Bar",
    hours: "5:00 pm - 1:00 am",
    mood: "Playful after dark",
    copy:
      "Skyline views, late plates, deep seating, and the one part of Quartz Hotel where the mood intentionally loosens up.",
  },
];

const playfulMoments = [
  "Rooftop sunset table drops at 6:45 pm",
  "A rotating nightcap menu after 10:00 pm",
  "In-room vinyl and reading list in suites",
  "Concierge-curated one-hour city walks",
];

const wellnessItems = [
  "Four treatment rooms and a couples suite",
  "Sauna, steam, vitality pool, and recovery loungers",
  "24-hour fitness room with Technogym cardio and free weights",
  "In-room stretch kits and private training on request",
];

const serviceColumns = [
  {
    title: "Arrival",
    items: [
      "Valet and luggage handling",
      "Express seated check-in",
      "Early arrival refresh access",
      "Private transfer coordination",
    ],
  },
  {
    title: "Business",
    items: [
      "Quiet call booths off the lobby",
      "Printing and courier support",
      "Boardroom booking",
      "Reliable workspace in every room",
    ],
  },
  {
    title: "Personalization",
    items: [
      "Pillow and fragrance preferences",
      "Celebration setup",
      "Family amenities on request",
      "Flexible direct-booking benefits",
    ],
  },
];

const eventStats = [
  ["Ballroom", "220 guests seated"],
  ["Boardroom", "14 guests"],
  ["Private dining", "18 guests"],
  ["Rooftop reception", "120 guests"],
];

const nearbyPlaces = [
  ["Financial district", "5 min drive"],
  ["Central station", "12 min walk"],
  ["Museum quarter", "9 min walk"],
  ["Airport", "24 min transfer"],
];

const faqs = [
  {
    question: "What defines the five-star experience at Quartz Hotel?",
    answer:
      "Service continuity. Concierge, transport, arrival handling, room comfort, dining access, and wellness all feel like one system rather than disconnected extras.",
  },
  {
    question: "Is Quartz Hotel suited for both leisure and business stays?",
    answer:
      "Yes. The layout is intentionally balanced: quiet rooms, proper desks, strong service, late-night dining, and enough atmosphere for a city break.",
  },
  {
    question: "Do direct bookings include extra benefits?",
    answer:
      "Direct guests receive flexible modification windows, priority early check-in requests, and preferred rooftop seating when available.",
  },
  {
    question: "Can Quartz Hotel host events and private dinners?",
    answer:
      "Yes. The concept includes a ballroom, boardroom, private dining space, and rooftop buyout options for receptions and launches.",
  },
];

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
];

function ButtonLink({
  href,
  label,
  variant = "dark",
  className = "",
}: {
  href: string;
  label: string;
  variant?: "dark" | "light" | "outline";
  className?: string;
}) {
  const styles = {
    dark:
      "border-[#161b22] bg-[#161b22] shadow-[0_14px_32px_rgba(22,27,34,0.16)] hover:bg-[#2b3138] hover:border-[#2b3138]",
    light:
      "border-[#e3cfb3] bg-[#ead9c3] shadow-[0_14px_32px_rgba(200,173,136,0.18)] hover:bg-[#161b22] hover:border-[#161b22]",
    outline:
      "border-[#b9aea0] bg-white shadow-[0_10px_24px_rgba(22,27,34,0.06)] hover:bg-[#f7f3ec]",
  } as const;

  const textStyles = {
    dark: "text-white group-hover:text-white [text-shadow:0_1px_1px_rgba(0,0,0,0.35)]",
    light: "text-[#161b22] group-hover:text-[#fffdf8]",
    outline: "text-[#161b22]",
  } as const;

  return (
    <motion.a
      href={href}
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      className={`group inline-flex items-center justify-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] transition duration-200 hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      <span className={textStyles[variant]}>{label}</span>
      <span
        className={`transition group-hover:translate-x-1 ${textStyles[variant]}`}
      >
        +
      </span>
    </motion.a>
  );
}

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [activeRoom, setActiveRoom] = useState(0);
  const [roomDirection, setRoomDirection] = useState(1);
  const [activeStayMode, setActiveStayMode] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const reveal = (delay = 0, distance = 28) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: distance },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: {
            duration: 0.7,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  const selectedRoom = roomTypes[activeRoom];
  const selectedStayMode = stayModes[activeStayMode];

  const handleRoomChange = (index: number) => {
    if (index === activeRoom) return;

    setRoomDirection(index > activeRoom ? 1 : -1);
    setActiveRoom(index);
  };

  return (
    <main className="relative overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, 40, 0], y: [0, -30, 0], opacity: [0.25, 0.38, 0.25] }
          }
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute -left-12 top-20 h-56 w-56 rounded-full bg-[#e7d2b2]/55 blur-3xl"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, -24, 0], y: [0, 28, 0], opacity: [0.18, 0.32, 0.18] }
          }
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute right-[-4rem] top-[24rem] hidden h-72 w-72 rounded-full bg-[#b7c9df]/35 blur-3xl lg:block"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, 18, 0], y: [0, -20, 0], opacity: [0.15, 0.28, 0.15] }
          }
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-[14rem] left-[18%] hidden h-52 w-52 rounded-full bg-[#d9bf98]/30 blur-3xl xl:block"
        />
      </div>

      <section className="relative border-b border-black/8 bg-[#f6f1e8]">
        <div className="mx-auto w-full max-w-[92rem] px-4 pb-10 pt-6 sm:px-6 md:px-8 lg:px-10 lg:pb-10 lg:pt-8 2xl:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div className="max-w-2xl" {...reveal()}>
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#8d7f6f]">
                Quartz Hotel
              </p>
              <h1 className="mt-4 max-w-xl font-display text-[clamp(2.5rem,8vw,5.25rem)] leading-[0.94] tracking-[-0.05em] text-[#161b22]">
                Quiet luxury for the city.
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-7 text-[#4f473e] sm:text-base">
                A five-star stay with calm rooms, polished service, and a
                livelier rooftop after dark.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href="#reserve"
                  label="Check availability"
                  variant="dark"
                />
                <ButtonLink
                  href="#planner"
                  label="Plan your stay"
                  variant="light"
                />
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {playfulMoments.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                    className="rounded-full border border-black/8 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#5e554b] transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_26px_70px_rgba(33,26,20,0.08)]"
              {...reveal(0.08, 40)}
            >
              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { x: [0, 18, 0], y: [0, -12, 0], opacity: [0.18, 0.28, 0.18] }
                }
                transition={{
                  duration: 12,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -right-8 top-6 h-28 w-28 rounded-full bg-[#ead9c3]/55 blur-3xl"
              />
              <img
                src={photography.lobby}
                alt="Quartz Hotel lobby inspiration"
                className="block h-[320px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[380px] md:h-[430px] lg:h-[520px] 2xl:h-[620px]"
              />
            </motion.div>
          </div>

          <div className="grid gap-3 py-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["72", "Rooms and suites"],
              ["3", "Dining venues"],
              ["24/7", "Concierge and in-room dining"],
              ["5 min", "To the financial district"],
            ].map(([value, label]) => (
              <motion.div
                key={label}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                className="rounded-[1.4rem] border border-black/8 bg-white/70 px-4 py-4 transition hover:-translate-y-0.5 hover:bg-white"
              >
                <p className="font-display text-3xl text-[#161b22]">{value}</p>
                <p className="mt-2 text-sm text-[#61584e]">{label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section
        id="stay"
        className="mx-auto grid w-full max-w-[92rem] gap-10 px-4 py-16 sm:px-6 sm:py-18 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:px-10 lg:py-20 2xl:px-12"
      >
        <div className="lg:pr-4">
          <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a7c6d]">
            Stay at Quartz Hotel
          </p>
          <h2 className="mt-4 max-w-md font-display text-[clamp(2.2rem,4.3vw,4.25rem)] leading-[0.98] tracking-[-0.04em] text-[#161b22]">
            Find the room that fits the way you stay.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#4f473e]">
            From quick city nights to longer business stays and suite arrivals,
            each category is shaped around a different pace.
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#4f473e]">
            Switch between room types and compare the layout, mood, rate, and
            in-room details before you reserve.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Size, rate, and room feel at a glance",
              "Sharper comparison before booking direct",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.2rem] border border-black/8 bg-white/70 px-4 py-3 text-sm text-[#4f473e]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {roomTypes.map((room, index) => (
              <button
                key={room.name}
                onClick={() => handleRoomChange(index)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition-all duration-300 ${
                  index === activeRoom
                    ? "border border-[#161b22] bg-[#161b22] text-[#fffaf2] shadow-[0_14px_32px_rgba(22,27,34,0.16)]"
                    : "border border-black/10 bg-white text-[#161b22] hover:-translate-y-0.5 hover:bg-[#f7f3ec]"
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>

        </div>

        <div className="grid gap-6">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
            <AnimatePresence initial={false} mode="wait" custom={roomDirection}>
              <motion.div
                key={`${selectedRoom.name}-image`}
                custom={roomDirection}
                initial={{ opacity: 0, x: 42 * roomDirection, scale: 0.985 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -42 * roomDirection, scale: 0.985 }}
                transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_24px_60px_rgba(31,24,18,0.07)]"
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              >
                <img
                  src={selectedRoom.image}
                  alt={`${selectedRoom.name} inspiration`}
                  className="block h-[360px] w-full object-cover transition duration-700 group-hover:scale-[1.04] sm:h-[440px] lg:h-full lg:min-h-[620px]"
                />
              </motion.div>
            </AnimatePresence>

            <AnimatePresence initial={false} mode="wait" custom={roomDirection}>
              <motion.article
                key={`${selectedRoom.name}-details`}
                custom={roomDirection}
                initial={{ opacity: 0, x: 32 * roomDirection }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -32 * roomDirection }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-[2rem] border border-black/8 bg-white p-6 shadow-[0_24px_60px_rgba(31,24,18,0.05)]"
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              >
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.26em] text-[#8a7c6d]">
                  <span>{selectedRoom.size}</span>
                  <span>{selectedRoom.rate}</span>
                </div>
                <h3 className="mt-4 font-display text-[clamp(2.1rem,4vw,3.5rem)] leading-[0.98] tracking-[-0.04em] text-[#161b22]">
                  {selectedRoom.name}
                </h3>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#8a7c6d]">
                  {selectedRoom.accent}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#4f473e]">
                  {selectedRoom.description}
                </p>

                <div className="mt-6 grid gap-3">
                  {selectedRoom.details.map((detail) => (
                    <div
                      key={detail}
                      className="rounded-[1.2rem] border border-black/8 bg-[#f7f3ec] px-4 py-3 text-sm text-[#4f473e]"
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section
        id="planner"
        className="border-y border-black/8 bg-[#f2ece3]"
      >
        <div className="mx-auto w-full max-w-[92rem] px-4 py-16 sm:px-6 sm:py-18 md:px-8 lg:px-10 lg:py-20 2xl:px-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a7c6d]">
                Plan your stay
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.15rem,5vw,4.7rem)] leading-[0.98] tracking-[-0.04em] text-[#161b22]">
                Quartz Hotel should feel different depending on why the guest is
                here.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {stayModes.map((mode, index) => (
                <button
                  key={mode.label}
                  onClick={() => setActiveStayMode(index)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition ${
                    activeStayMode === index
                      ? "bg-[#ead9c3] text-[#161b22] shadow-[0_12px_28px_rgba(200,173,136,0.18)]"
                      : "border border-black/10 bg-white text-[#161b22] hover:-translate-y-0.5 hover:bg-[#fffaf4]"
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <AnimatePresence initial={false} mode="wait">
              <motion.article
                key={`${selectedStayMode.label}-summary`}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-[2rem] p-6 sm:p-7 shadow-[0_24px_60px_rgba(31,24,18,0.06)] ${selectedStayMode.cardTone}`}
              >
                <p className="text-[11px] uppercase tracking-[0.34em] opacity-60">
                  {selectedStayMode.eyebrow}
                </p>
                <h3 className="mt-4 font-display text-[clamp(2rem,4.2vw,3.5rem)] leading-[0.98] tracking-[-0.04em]">
                  {selectedStayMode.title}
                </h3>
                <p className="mt-5 max-w-xl text-sm leading-7 opacity-80">
                  {selectedStayMode.copy}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ButtonLink href="#reserve" label="Book this mood" variant="dark" />
                  <ButtonLink href="#dining" label="See dining" variant="outline" />
                </div>
              </motion.article>
            </AnimatePresence>

            <AnimatePresence initial={false} mode="wait">
              <motion.article
                key={`${selectedStayMode.label}-rhythm`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-white p-6 shadow-[0_24px_60px_rgba(31,24,18,0.05)]"
              >
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: [0.18, 0.28, 0.18],
                          scale: [1, 1.08, 1],
                        }
                  }
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-[#ead9c3]/30 blur-3xl"
                />
                <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a7c6d]">
                  Suggested rhythm
                </p>
                <div className="mt-5 space-y-4">
                  {selectedStayMode.moments.map((moment, index) => (
                    <motion.div
                      key={moment}
                      initial={shouldReduceMotion ? undefined : { opacity: 0, x: 18 }}
                      animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.32,
                        delay: 0.08 + index * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                      className="flex gap-4 rounded-[1.25rem] border border-black/8 bg-[#f7f3ec] px-4 py-4"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-[#161b22]">
                        0{index + 1}
                      </div>
                      <p className="text-sm leading-7 text-[#4f473e]">{moment}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section
        id="dining"
        className="mx-auto w-full max-w-[92rem] px-4 py-16 sm:px-6 sm:py-18 md:px-8 lg:px-10 lg:py-20 2xl:px-12"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a7c6d]">
              Dining at Quartz Hotel
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.15rem,5vw,4.7rem)] leading-[0.98] tracking-[-0.04em] text-[#161b22]">
              More polished by day, more playful at night.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#4f473e]">
            This is where the hotel gets a little looser. Not loud. Just more
            alive after sunset.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          <motion.div
            className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_24px_60px_rgba(31,24,18,0.07)]"
            whileHover={shouldReduceMotion ? undefined : { y: -4 }}
          >
            <img
              src={photography.dining}
              alt="Quartz Hotel dining inspiration"
              className="block h-[280px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[340px] lg:h-[420px]"
            />
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {diningVenues.map((venue) => (
              <motion.article
                key={venue.name}
                whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-[0_22px_55px_rgba(31,24,18,0.05)] transition hover:-translate-y-1"
              >
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#8a7c6d]">
                  {venue.hours}
                </p>
                <h3 className="mt-4 font-display text-3xl text-[#161b22]">
                  {venue.name}
                </h3>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#8a7c6d]">
                  {venue.mood}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#4f473e]">
                  {venue.copy}
                </p>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      <section
        id="wellness"
        className="border-y border-black/8 bg-[#161b22] text-white"
      >
        <div className="mx-auto grid w-full max-w-[92rem] gap-10 px-4 py-16 sm:px-6 sm:py-18 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-20 2xl:px-12">
          <div className="grid gap-6">
            <motion.div
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_24px_60px_rgba(0,0,0,0.16)]"
              whileHover={shouldReduceMotion ? undefined : { y: -5 }}
            >
              <img
                src={photography.spa}
                alt="Quartz Hotel spa inspiration"
                className="block h-[320px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[420px]"
              />
            </motion.div>
            <motion.div
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_24px_60px_rgba(0,0,0,0.16)]"
              whileHover={shouldReduceMotion ? undefined : { y: -5 }}
            >
              <img
                src={photography.pool}
                alt="Quartz Hotel rooftop pool inspiration"
                className="block h-[240px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[280px]"
              />
            </motion.div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.34em] text-white/48">
              Wellness
            </p>
            <h2 className="mt-4 max-w-lg font-display text-[clamp(2.15rem,5vw,4.7rem)] leading-[0.98] tracking-[-0.04em]">
              Spa, pool, and fitness kept quiet, tactile, and easy to use.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-white/72">
              Even here, the site stays premium minimal rather than resort-heavy.
              The luxury is in calm access and good material choices.
            </p>

            <div className="mt-8 grid gap-3">
              {wellnessItems.map((item) => (
                <motion.div
                  key={item}
                  whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                  className="rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/78 transition hover:bg-white/8"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto w-full max-w-[92rem] px-4 py-16 sm:px-6 sm:py-18 md:px-8 lg:px-10 lg:py-20 2xl:px-12"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a7c6d]">
              Services
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.15rem,5vw,4.7rem)] leading-[0.98] tracking-[-0.04em] text-[#161b22]">
              More content, but still organized enough to be useful.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#4f473e]">
            This section is intentionally denser. High-end hotel sites need more
            than beautiful images to help a guest decide.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {serviceColumns.map((column) => (
            <motion.article
              key={column.title}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-[0_24px_60px_rgba(31,24,18,0.05)]"
            >
              <h3 className="font-display text-3xl text-[#161b22]">
                {column.title}
              </h3>
              <div className="mt-5 space-y-3">
                {column.items.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                    className="rounded-[1.2rem] border border-black/8 bg-[#f7f3ec] px-4 py-3 text-sm text-[#4f473e] transition hover:bg-white"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-black/8 bg-[#f2ece3]">
        <div className="mx-auto grid w-full max-w-[92rem] gap-10 px-4 py-16 sm:px-6 sm:py-18 md:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:px-10 lg:py-20 2xl:px-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a7c6d]">
              Events
            </p>
            <h2 className="mt-4 max-w-sm font-display text-[clamp(2.05rem,3.5vw,3.85rem)] leading-[1] tracking-[-0.04em] text-[#161b22]">
              Event spaces that still belong to the Quartz Hotel brand.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#4f473e]">
              The meeting and celebration offer should feel architecturally tied
              to the rest of the property rather than hidden in a generic
              banquet wing.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {eventStats.map(([label, detail]) => (
              <motion.article
                key={label}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-[0_24px_60px_rgba(31,24,18,0.05)] transition hover:-translate-y-1"
              >
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#8a7c6d]">
                  {label}
                </p>
                <p className="mt-3 font-display text-3xl text-[#161b22]">
                  {detail}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="visit"
        className="mx-auto grid w-full max-w-[92rem] gap-10 px-4 py-16 sm:px-6 sm:py-18 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10 lg:py-20 2xl:px-12"
      >
        <div>
          <p className="text-[11px] uppercase tracking-[0.34em] text-[#8a7c6d]">
            Visit
          </p>
          <h2 className="mt-4 max-w-sm font-display text-[clamp(2.05rem,3.5vw,3.85rem)] leading-[1] tracking-[-0.04em] text-[#161b22]">
            Quartz Hotel sits close to movement, but the stay itself stays calm.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#4f473e]">
            Guests should understand what is reachable quickly, what the
            neighborhood feels like, and how concierge can shape a short city
            window.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.article
            whileHover={shouldReduceMotion ? undefined : { y: -6 }}
            className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-[0_24px_60px_rgba(31,24,18,0.05)]"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#8a7c6d]">
              Travel times
            </p>
            <div className="mt-6 space-y-4">
              {nearbyPlaces.map(([place, time]) => (
                <div
                  key={place}
                  className="flex items-center justify-between border-b border-black/8 pb-4 last:border-none last:pb-0"
                >
                  <span className="text-sm text-[#4f473e]">{place}</span>
                  <span className="text-sm font-medium text-[#161b22]">
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            whileHover={shouldReduceMotion ? undefined : { y: -6 }}
            className="rounded-[2rem] border border-black/8 bg-[#f7f3ec] p-6 shadow-[0_24px_60px_rgba(31,24,18,0.05)]"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#8a7c6d]">
              Neighborhood notes
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[#4f473e]">
              <p>
                Two blocks from the financial district, one short walk from the
                museum quarter, and surrounded by better evening dining than a
                typical chain-hotel zone.
              </p>
              <p>
                Concierge can arrange gallery routes, private transfers,
                executive dinners, theatre bookings, and short city itineraries
                for guests with limited free time.
              </p>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="border-y border-black/8 bg-[#161b22] text-white">
        <div className="mx-auto w-full max-w-[92rem] px-4 py-16 sm:px-6 sm:py-18 md:px-8 lg:px-10 lg:py-20 2xl:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.34em] text-white/46">
                Questions
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.15rem,5vw,4.7rem)] leading-[0.98] tracking-[-0.04em]">
                An interactive FAQ reads better than a wall of answers.
              </h2>
            </div>
            <ButtonLink
              href="#reserve"
              label="Reserve directly"
              variant="light"
            />
          </div>

          <div className="mt-10 grid gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <motion.article
                  key={faq.question}
                  whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.08)] sm:p-6"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-6 text-left"
                  >
                    <h3 className="font-display text-[clamp(1.8rem,3.7vw,2.5rem)] leading-tight text-white">
                      {faq.question}
                    </h3>
                    <motion.span
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              scale: isOpen ? 1.08 : 1,
                              backgroundColor: isOpen
                                ? "rgba(255,255,255,0.16)"
                                : "rgba(255,255,255,0.08)",
                            }
                      }
                      transition={{ duration: 0.24, ease: "easeOut" }}
                      className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/8 text-lg transition"
                    >
                      {isOpen ? "−" : "+"}
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.p
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: "auto", opacity: 1, marginTop: 20 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-4xl overflow-hidden text-sm leading-7 text-white/72"
                      >
                        {faq.answer}
                      </motion.p>
                    ) : null}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#131920] text-white">
        <div className="mx-auto w-full max-w-[92rem] px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-10 2xl:px-12">
          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(135deg,#1c232c,#12171d_56%,#d9bf98_180%)] shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : { x: [0, 24, 0], y: [0, -20, 0], opacity: [0.2, 0.32, 0.2] }
              }
              transition={{
                duration: 14,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-12 top-4 h-48 w-48 rounded-full bg-[#ead9c3]/20 blur-3xl"
            />
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : { x: [0, -18, 0], y: [0, 18, 0], opacity: [0.08, 0.16, 0.08] }
              }
              transition={{
                duration: 18,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute bottom-0 left-0 h-52 w-52 rounded-full bg-[#7d98b6]/15 blur-3xl"
            />
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
                  <ButtonLink href="#reserve" label="Reserve a stay" variant="light" />
                  <ButtonLink href="#visit" label="Find the hotel" variant="outline" />
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
                      {item === "Room Typologies" ? (
                        <Link href="/rooms" className="transition hover:text-white">
                          {item}
                        </Link>
                      ) : item === "Restaurant Menu" ? (
                        <Link href="/restaurant-menu" className="transition hover:text-white">
                          {item}
                        </Link>
                      ) : item === "Bar Menu" ? (
                        <Link href="/bar-menu" className="transition hover:text-white">
                          {item}
                        </Link>
                      ) : (
                        item
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </footer>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/52 sm:flex-row sm:items-center sm:justify-between">
            <p>Concept photography sourced from Unsplash.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#stay" className="transition hover:text-white">
                Rooms
              </a>
              <a href="#dining" className="transition hover:text-white">
                Dining
              </a>
              <a href="#wellness" className="transition hover:text-white">
                Wellness
              </a>
              <a href="#reserve" className="transition hover:text-white">
                Book Direct
              </a>
            </div>
          </div>
        </div>

        <div className="fixed inset-x-4 bottom-4 z-20 md:hidden">
          <ButtonLink
            href="#reserve"
            label="Reserve"
            variant="light"
            className="flex w-full shadow-[0_20px_50px_rgba(22,27,34,0.18)] backdrop-blur"
          />
        </div>
      </section>

    </main>
  );
}
