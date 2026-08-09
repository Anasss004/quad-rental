"use client";

import { useLanguage } from "@/lib/i18n";

const tiers = [
  { label: "1 heure", price: "25€", popular: false },
  { label: "2 heures", price: "35€", popular: true },
];

export default function Pricing() {
  const { t } = useLanguage();
  return (
    <section id="pricing" className="py-20 md:py-24 bg-sand-100 dark:bg-charcoal-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-center">
          {t("pricing_title")}
        </h2>
        <p className="text-center text-charcoal-700/70 dark:text-sand-200/60 mb-12 max-w-md mx-auto">
          {t("pricing_subtitle")}
        </p>
        <div className="grid grid-cols-2 gap-5 max-w-md mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.label}
              className={`relative text-center rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                tier.popular
                  ? "bg-charcoal-950 dark:bg-sand-50 text-sand-50 dark:text-charcoal-950 shadow-lg"
                  : "bg-white dark:bg-charcoal-950 border border-charcoal-950/10 dark:border-sand-50/10 hover:shadow-md"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-terracotta-500 text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                  Populaire
                </span>
              )}
              <p
                className={`text-sm mb-2 ${
                  tier.popular ? "text-sand-100/70 dark:text-charcoal-700/70" : "text-charcoal-700/70 dark:text-sand-200/60"
                }`}
              >
                {tier.label}
              </p>
              <p className={`text-3xl font-extrabold ${tier.popular ? "text-terracotta-400" : "text-terracotta-600 dark:text-terracotta-400"}`}>
                {tier.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
