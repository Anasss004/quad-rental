"use client";

import { Gauge, Users, Settings2, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

const quad = {
  name: "Quad 300CC",
  desc: "Notre modèle unique — robuste, facile à prendre en main, entretenu avant chaque sortie. Idéal pour découvrir le désert en toute confiance.",
  cc: "300cc",
  capacity: "2 personnes",
  transmission: "Automatique",
  price: "25€/h",
  image: "/images/quad.png",
};

export default function Fleet() {
  const { t } = useLanguage();
  return (
    <section id="fleet" className="py-20 md:py-24 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-center">
        {t("fleet_title")}
      </h2>
      <p className="text-center text-charcoal-700/70 dark:text-sand-200/60 mb-12 max-w-md mx-auto">
        {t("fleet_subtitle")}
      </p>

      <Reveal>
        <div className="group max-w-3xl mx-auto bg-white dark:bg-charcoal-900 border border-charcoal-950/10 dark:border-sand-50/10 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg md:flex">
          <div className="relative md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={quad.image}
              alt={quad.name}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          </div>
          <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-center">
            <h3 className="font-bold text-2xl mb-2">{quad.name}</h3>
            <p className="text-charcoal-700/70 dark:text-sand-200/60 text-sm mb-5 leading-relaxed">
              {quad.desc}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-charcoal-700/70 dark:text-sand-200/60 mb-5 pb-5 border-b border-charcoal-950/10 dark:border-sand-50/10">
              <span className="flex items-center gap-1.5">
                <Gauge size={14} /> {quad.cc}
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={14} /> {quad.capacity}
              </span>
              <span className="flex items-center gap-1.5">
                <Settings2 size={14} /> {quad.transmission}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span>
                <span className="text-2xl font-extrabold text-terracotta-600 dark:text-terracotta-400">
                  {quad.price.split("/")[0]}
                </span>
                <span className="text-xs text-charcoal-700/60 dark:text-sand-200/50">
                  /{quad.price.split("/")[1]}
                </span>
              </span>
              <a
                href="#reservation"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-charcoal-950 dark:text-sand-50 group-hover:text-terracotta-600 dark:group-hover:text-terracotta-400 transition-colors"
              >
                Réserver
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
