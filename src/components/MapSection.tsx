"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function MapSection() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-20 md:py-24 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-8 text-center">
        {t("contact_title")}
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-10 text-charcoal-700/70 dark:text-sand-200/60 text-sm">
        <span className="flex items-center gap-2">
          <MapPin size={16} className="text-terracotta-600 dark:text-terracotta-400" />
          Adresse : à compléter
        </span>
        <span className="flex items-center gap-2">
          <Phone size={16} className="text-terracotta-600 dark:text-terracotta-400" />
          Téléphone : à compléter
        </span>
        <span className="flex items-center gap-2">
          <Mail size={16} className="text-terracotta-600 dark:text-terracotta-400" />
          Email : à compléter
        </span>
      </div>
      <div className="rounded-xl overflow-hidden shadow-sm border border-charcoal-950/10 dark:border-sand-50/10">
        {/*
          Remplacez le src ci-dessous par l'URL d'intégration de VOTRE adresse :
          Google Maps > Rechercher votre adresse > Partager > Intégrer une carte > Copier le HTML
        */}
        <iframe
          title="Localisation Elta Quad"
          src="https://www.google.com/maps?q=quad%20rental&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
