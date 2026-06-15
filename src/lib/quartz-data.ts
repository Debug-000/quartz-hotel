export const photography = {
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
  bar:
    "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&fm=jpg&q=80&w=1800",
  suiteLiving:
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&fm=jpg&q=80&w=1800",
  bathroom:
    "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&fm=jpg&q=80&w=1800",
  terrace:
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&fm=jpg&q=80&w=1800",
} as const;

export type RoomType = {
  name: string;
  size: string;
  rate: string;
  image: string;
  accent: string;
  description: string;
  occupancy: string;
  bed: string;
  idealFor: string;
  details: string[];
  gallery: string[];
};

export const roomTypes: RoomType[] = [
  {
    name: "City King",
    size: "34 sqm",
    rate: "From $310",
    image: photography.room,
    accent: "Best for one or two-night city stays",
    description:
      "Quartz Hotel's entry room is still meant to feel composed and premium, not like a downgrade from the rest of the property.",
    occupancy: "2 guests",
    bed: "1 king bed",
    idealFor: "Short city stays and efficient work trips",
    details: [
      "King bed with blackout drapery",
      "Stone bathroom with rain shower",
      "Desk setup for light working hours",
      "Soft oak, brushed metal, and warm lighting",
    ],
    gallery: [photography.room, photography.bathroom, photography.lobby],
  },
  {
    name: "Corner Studio",
    size: "43 sqm",
    rate: "From $420",
    image: photography.lobby,
    accent: "Best for longer business stays",
    description:
      "The Corner Studio adds breathing room and a stronger residential feel, which matters once a guest is staying more than one night.",
    occupancy: "2 guests",
    bed: "1 king bed",
    idealFor: "Longer stays with more light and lounge space",
    details: [
      "Wider glazing and corner light",
      "Lounge chair and side table",
      "Larger vanity and better storage",
      "Extra floor space for unpacking properly",
    ],
    gallery: [photography.lobby, photography.room, photography.terrace],
  },
  {
    name: "Marlowe Suite",
    size: "61 sqm",
    rate: "From $590",
    image: photography.suite,
    accent: "Best for premium arrivals and celebrations",
    description:
      "The suite offer is not about ornament. It is about scale, privacy, smoother service, and a more tailored arrival rhythm.",
    occupancy: "2 to 3 guests",
    bed: "1 king bed plus lounge area",
    idealFor: "Celebrations, longer weekends, and premium arrivals",
    details: [
      "Separate living zone and dining niche",
      "Soaking tub and premium bath setup",
      "Arrival pressing and pre-stay concierge planning",
      "Priority rooftop seating when available",
    ],
    gallery: [photography.suite, photography.suiteLiving, photography.bathroom],
  },
];

export const roomGallery = [
  photography.room,
  photography.suite,
  photography.suiteLiving,
  photography.bathroom,
  photography.lobby,
  photography.terrace,
];

export const restaurantMenu = [
  {
    title: "First plates",
    note: "Clean flavors, restrained richness.",
    items: [
      {
        name: "Yellowtail crudo",
        description: "Citrus oil, shaved fennel, green peppercorn",
        price: "$24",
      },
      {
        name: "Burrata and stone fruit",
        description: "Charred peach, basil, toasted almonds",
        price: "$19",
      },
      {
        name: "Roasted tomato tart",
        description: "Puff pastry, ricotta, preserved lemon",
        price: "$18",
      },
    ],
  },
  {
    title: "Mains",
    note: "Confident city-hotel dining without excess.",
    items: [
      {
        name: "Marlowe ribeye",
        description: "40-day aged beef, smoked shallot butter, fries",
        price: "$56",
      },
      {
        name: "Seared sea bass",
        description: "Braised leek, mussel broth, dill oil",
        price: "$38",
      },
      {
        name: "Wild mushroom risotto",
        description: "Aged parmesan, thyme, black garlic",
        price: "$29",
      },
    ],
  },
  {
    title: "Desserts",
    note: "Structured, not sugary.",
    items: [
      {
        name: "Dark chocolate marquise",
        description: "Salted caramel, creme fraiche",
        price: "$15",
      },
      {
        name: "Vanilla bean pavlova",
        description: "Poached berries, lime zest",
        price: "$14",
      },
      {
        name: "Cheese selection",
        description: "Three cheeses, quince, seeded crisps",
        price: "$18",
      },
    ],
  },
];

export const barMenu = [
  {
    title: "Quartz signatures",
    note: "Sharper cocktails with a late-night edge.",
    items: [
      {
        name: "Marlowe 75",
        description: "Gin, brut rose, lemon, white tea",
        price: "$22",
      },
      {
        name: "Afterglow Martini",
        description: "Vodka, fino sherry, pear distillate",
        price: "$24",
      },
      {
        name: "Roofline Negroni",
        description: "Gin, vermouth, amaro, cacao nib",
        price: "$23",
      },
    ],
  },
  {
    title: "Low and no-proof",
    note: "Same structure, lighter pace.",
    items: [
      {
        name: "Citrus tonic highball",
        description: "Yuzu, tonic, pink grapefruit, rosemary",
        price: "$15",
      },
      {
        name: "Night garden",
        description: "Seedlip Garden, cucumber, basil, soda",
        price: "$14",
      },
      {
        name: "Stone fruit spritz",
        description: "Peach shrub, verjus, sparkling tea",
        price: "$14",
      },
    ],
  },
  {
    title: "Late plates",
    note: "A little richer after dark.",
    items: [
      {
        name: "Crisp polenta fries",
        description: "Parmesan, rosemary salt, aioli",
        price: "$12",
      },
      {
        name: "Lobster roll sliders",
        description: "Butter brioche, chive, lemon",
        price: "$26",
      },
      {
        name: "Midnight burger",
        description: "Dry-aged beef, onions, sharp cheddar",
        price: "$24",
      },
    ],
  },
];

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/restaurant-menu", label: "Restaurant Menu" },
  { href: "/bar-menu", label: "Bar Menu" },
  { href: "/rooms", label: "Rooms" },
];
