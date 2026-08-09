"use client";

import { Clock, Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const tiers = [
  {
    label: "1 heure",
    price: "25€",
    description: "Une première découverte du quad.",
    popular: false,
  },
  {
    label: "2 heures",
    price: "35€",
    description: "Plus de temps pour profiter de l'aventure.",
    popular: true,
  },
];

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#F5F1E8] py-12 md:py-16"
    >
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        {/* Soft warm glow */}
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-terracotta-400/5 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-terracotta-400/5 blur-3xl" />

        {/* Subtle center light */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-12 max-w-2xl md:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-terracotta-500" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta-600">
              Tarifs
            </span>
          </div>

          <h2 className="text-xl font-black tracking-tight text-charcoal-950 md:text-2xl">
            {t("pricing_title")}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal-600 md:text-lg">
            {t("pricing_subtitle")}
          </p>
        </div>

        {/* =====================================================
            PRICING CARDS
        ====================================================== */}

        <div className="grid gap-5 md:grid-cols-2">

          {tiers.map((tier) => (
            <div
              key={tier.label}
              className={`group relative overflow-hidden rounded-[2rem] border transition-all duration-300 hover:-translate-y-1 ${
                tier.popular
                  ? "border-terracotta-500/30 bg-charcoal-950 text-white shadow-xl shadow-charcoal-950/10"
                  : "border-charcoal-950/10 bg-[#FCFAF5] text-charcoal-950 hover:bg-white hover:shadow-xl hover:shadow-charcoal-950/5"
              }`}
            >

              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute right-5 top-5">
                  <span className="rounded-full bg-terracotta-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                    Populaire
                  </span>
                </div>
              )}

              <div className="p-5 md:p-6">

                {/* Icon + duration */}
                <div className="flex items-center gap-4">

                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-2xl ${
                      tier.popular
                        ? "bg-white/10 text-terracotta-400"
                        : "bg-terracotta-50 text-terracotta-500"
                    }`}
                  >
                    <Clock size={17} />
                  </div>

                  <div>
                    <p
                      className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
                        tier.popular
                          ? "text-white/40"
                          : "text-charcoal-400"
                      }`}
                    >
                      Session
                    </p>

                    <h3
                      className={`mt-0.5 text-xl font-black ${
                        tier.popular
                          ? "text-white"
                          : "text-charcoal-950"
                      }`}
                    >
                      {tier.label}
                    </h3>
                  </div>

                </div>

                {/* Price */}
                <div className="mt-8 flex items-baseline gap-1">

                  <span
                    className={`text-2xl font-black tracking-tight ${
                      tier.popular
                        ? "text-terracotta-400"
                        : "text-terracotta-600"
                    }`}
                  >
                    {tier.price}
                  </span>

                  <span
                    className={`text-sm ${
                      tier.popular
                        ? "text-white/40"
                        : "text-charcoal-400"
                    }`}
                  >
                    / quad
                  </span>

                </div>

                {/* Description */}
                <p
                  className={`mt-3 max-w-sm text-sm leading-relaxed ${
                    tier.popular
                      ? "text-white/60"
                      : "text-charcoal-500"
                  }`}
                >
                  {tier.description}
                </p>

                {/* Divider */}
                <div
                  className={`my-6 h-px ${
                    tier.popular
                      ? "bg-white/10"
                      : "bg-charcoal-950/10"
                  }`}
                />

                {/* Included */}
                <div className="space-y-3">

                  <div
                    className={`flex items-center gap-2.5 text-xs font-medium ${
                      tier.popular
                        ? "text-white/70"
                        : "text-charcoal-600"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${
                        tier.popular
                          ? "bg-terracotta-500/20"
                          : "bg-terracotta-500/10"
                      }`}
                    >
                      <Check
                        size={12}
                        className="text-terracotta-500"
                      />
                    </span>

                    Quad entretenu avant chaque sortie
                  </div>

                  <div
                    className={`flex items-center gap-2.5 text-xs font-medium ${
                      tier.popular
                        ? "text-white/70"
                        : "text-charcoal-600"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-full ${
                        tier.popular
                          ? "bg-terracotta-500/20"
                          : "bg-terracotta-500/10"
                      }`}
                    >
                      <Check
                        size={12}
                        className="text-terracotta-500"
                      />
                    </span>

                    Briefing avant le départ
                  </div>

                </div>

                {/* CTA */}
                <a
                  href="#reservation"
                  className={`group/button mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                    tier.popular
                      ? "bg-terracotta-500 text-white hover:bg-terracotta-600 hover:shadow-lg hover:shadow-terracotta-500/20"
                      : "bg-charcoal-950 text-white hover:bg-terracotta-600 hover:shadow-lg"
                  }`}
                >
                  Réserver cette session

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/button:translate-x-1"
                  />
                </a>

              </div>
            </div>
          ))}

        </div>

        {/* Small note */}
        <p className="mt-6 text-center text-xs text-charcoal-400">
          Prix par quad · Jusqu&apos;à 2 personnes
        </p>

      </div>
    </section>
  );
}