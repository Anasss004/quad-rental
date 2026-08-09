"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "fr" | "en";

const translations = {
  fr: {
    nav_fleet: "Nos Quads",
    nav_pricing: "Tarifs",
    nav_gallery: "Galerie",
    nav_how: "Comment ça marche",
    nav_faq: "FAQ",
    nav_reservation: "Réserver",
    nav_contact: "Contact",
    hero_title1: "Quad Ride",
    hero_title2: "à Marrakech",
    hero_subtitle:
      "Vivez une sortie ou une randonnée inoubliable. Choisissez votre créneau, réservez en ligne, on s'occupe du reste.",
    hero_cta: "Prendre rendez-vous",
    fleet_title: "Notre Quad",
    fleet_subtitle:
      "Un modèle robuste et fiable, entretenu avant chaque sortie, prêt pour votre prochaine aventure.",
    pricing_title: "Tarifs à l'heure",
    pricing_subtitle: "Prix indicatifs Elta Quad — à adapter selon votre activité.",
    how_title: "Comment ça marche",
    booking_title: "Réserver un créneau",
    booking_subtitle: "Votre demande sera confirmée rapidement par nos soins.",
    label_name: "Nom complet *",
    label_phone: "Téléphone *",
    label_email: "Email",
    label_date: "Date *",
    label_time: "Heure de départ *",
    label_duration: "Durée *",
    label_quads: "Nombre de quads *",
    label_message: "Message (optionnel)",
    submit: "Envoyer ma demande",
    submitting: "Envoi en cours...",
    contact_title: "Nous trouver",
    footer_tagline: "Location de quads à l'heure",
  },
  en: {
    nav_fleet: "Our Quads",
    nav_pricing: "Pricing",
    nav_gallery: "Gallery",
    nav_how: "How it works",
    nav_faq: "FAQ",
    nav_reservation: "Book now",
    nav_contact: "Contact",
    hero_title1: "Quad Ride",
    hero_title2: "in Marrakech",
    hero_subtitle:
      "Experience an unforgettable ride or trip. Pick your time slot, book online, we handle the rest.",
    hero_cta: "Book now",
    fleet_title: "Our Quad",
    fleet_subtitle:
      "A reliable, well-maintained model, ready for your next desert adventure.",
    pricing_title: "Hourly rates",
    pricing_subtitle: "Sample Elta Quad pricing — adjust to your business.",
    how_title: "How it works",
    booking_title: "Book a time slot",
    booking_subtitle: "Your request will be confirmed quickly by our team.",
    label_name: "Full name *",
    label_phone: "Phone *",
    label_email: "Email",
    label_date: "Date *",
    label_time: "Start time *",
    label_duration: "Duration *",
    label_quads: "Number of quads *",
    label_message: "Message (optional)",
    submit: "Send my request",
    submitting: "Sending...",
    contact_title: "Find us",
    footer_tagline: "Quad bike rental by the hour",
  },
} as const;

export type TranslationKey = keyof typeof translations.fr;

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    function restore() {
      const stored = localStorage.getItem("lang");
      if (stored === "en" || stored === "fr") setLangState(stored);
    }
    restore();
  }, []);

  function setLang(next: Lang) {
    setLangState(next);
    localStorage.setItem("lang", next);
  }

  function t(key: TranslationKey) {
    return translations[lang][key];
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
