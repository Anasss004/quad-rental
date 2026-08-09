export type Quad = {
  id: string;
  name: string;
  cc: string;
  capacity: string;
  transmission: string;
  pricePerHour: number;
  available: boolean;
  image: string;
};

export const QUADS: Quad[] = [
  {
    id: "solo-250",
    name: "Solo 250",
    cc: "250cc",
    capacity: "1 place",
    transmission: "Automatique",
    pricePerHour: 40,
    available: true,
    image:
      "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "sport-400",
    name: "Sport 400",
    cc: "400cc",
    capacity: "1 place",
    transmission: "Automatique",
    pricePerHour: 55,
    available: true,
    image:
      "https://images.unsplash.com/photo-1508776108219-2ea3860f18bd?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "biplace-450",
    name: "Biplace 450",
    cc: "450cc",
    capacity: "2 places",
    transmission: "Automatique",
    pricePerHour: 70,
    available: false,
    image:
      "https://images.unsplash.com/photo-1516934024742-b461ee5df3f1?auto=format&fit=crop&w=1000&q=80",
  },
];

export type Experience = {
  id: string;
  name: string;
  duration: string;
};

export const EXPERIENCES: Experience[] = [
  { id: "desert-discovery", name: "Desert Discovery", duration: "1–2 heures" },
  { id: "sunset-ride", name: "Sunset Ride", duration: "2 heures" },
  { id: "adventure-tour", name: "Adventure Tour", duration: "Demi-journée" },
  { id: "private", name: "Private Experience", duration: "Sur-mesure" },
];
