"use client";

import { CalendarDays, ClipboardList, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const steps = [
  {
    icon: CalendarDays,
    title: "Choisissez votre créneau",
    desc: "Date, heure et durée qui vous conviennent.",
  },
  {
    icon: ClipboardList,
    title: "Remplissez le formulaire",
    desc: "Vos coordonnées et le nombre de quads souhaités.",
  },
  {
    icon: CheckCircle2,
    title: "Confirmation",
    desc: "Nous confirmons votre rendez-vous par téléphone ou email.",
  },
];

export default function HowItWorks() {
  const { t } = useLanguage();
  return (
    <section id="how-it-works" className="py-20 md:py-24 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-16 text-center">
        {t("how_title")}
      </h2>
      <div className="relative grid md:grid-cols-3 gap-12 md:gap-8 text-center">
        {/* Connecting trail line between steps (desktop only) */}
        <div className="hidden md:block absolute top-7 left-[16.5%] right-[16.5%] h-px border-t-2 border-dashed border-terracotta-500/30" />

        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="relative">
              <div className="relative z-10 w-14 h-14 mx-auto mb-5 rounded-full bg-white dark:bg-charcoal-900 border-2 border-terracotta-500 flex items-center justify-center">
                <Icon size={22} className="text-terracotta-600 dark:text-terracotta-400" />
              </div>
              <span className="block text-xs font-bold uppercase tracking-wide text-terracotta-600 dark:text-terracotta-400 mb-1">
                0{i + 1}
              </span>
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-charcoal-700/70 dark:text-sand-200/60 text-sm max-w-[220px] mx-auto">
                {s.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
