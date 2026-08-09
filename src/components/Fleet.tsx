"use client";

import {
  Gauge,
  Users,
  Settings2,
  ArrowRight,
  Zap,
} from "lucide-react";
import Reveal from "./Reveal";
import { useLanguage } from "@/lib/i18n";

const quad = {
  name: "Quad 300CC",
  desc: "Notre modèle unique — robuste, facile à prendre en main, entretenu avant chaque sortie. Idéal pour découvrir le désert en toute confiance.",
  cc: "300cc",
  capacity: "2 personnes",
  transmission: "Automatique",
  price: "25€/h",
  image: "/images/quad2.png",
};

export default function Fleet() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-terracotta-500/5 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-terracotta-400/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Section heading */}
        <Reveal>
          <div className="mb-12 max-w-2xl md:mb-14">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-terracotta-500" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta-600">
                Notre quad
              </span>
            </div>

            <h2 className="text-xl font-black tracking-tight text-charcoal-950 md:text-2xl">
              {t("fleet_title")}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal-600 md:text-lg">
              {t("fleet_subtitle")}
            </p>
          </div>
        </Reveal>

        {/* Quad card */}
        <Reveal>
          <div className="group mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-charcoal-950/10 bg-white shadow-lg shadow-charcoal-950/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">

            <div className="grid md:grid-cols-2">

              {/* =================================================
                  IMAGE
              ================================================== */}
              <div className="relative min-h-[260px] overflow-hidden md:min-h-[360px]">

                {/* Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={quad.image}
                  alt={quad.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Top badge */}
                <div className="absolute left-5 top-5">
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                    <Zap
                      size={13}
                      className="text-terracotta-400"
                    />

                    300 CC
                  </div>
                </div>

                {/* Bottom image content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">

                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    Disponible à la location
                  </p>

                  <h3 className="text-lg font-black text-white md:text-xl">
                    {quad.name}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">
                    Robuste, simple à prendre en main et prêt pour
                    l&apos;aventure.
                  </p>

                </div>
              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}
              <div className="flex flex-col justify-center p-5 md:p-6">

                {/* Label */}
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-terracotta-500">
                  L&apos;expérience
                </p>

                <h3 className="text-base font-black tracking-tight text-charcoal-950 md:text-lg">
                  Partez à l&apos;aventure
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-charcoal-600 md:text-base">
                  {quad.desc}
                </p>

                {/* Specifications */}
                <div className="mt-7 grid grid-cols-3 gap-2 border-y border-charcoal-950/10 py-5">

                  {/* CC */}
                  <div className="rounded-xl bg-sand-50/70 p-3">
                    <Gauge
                      size={17}
                      className="mb-2 text-terracotta-500"
                    />

                    <p className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400">
                      Moteur
                    </p>

                    <p className="mt-1 text-sm font-bold text-charcoal-950">
                      {quad.cc}
                    </p>
                  </div>

                  {/* Capacity */}
                  <div className="rounded-xl bg-sand-50/70 p-3">
                    <Users
                      size={17}
                      className="mb-2 text-terracotta-500"
                    />

                    <p className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400">
                      Capacité
                    </p>

                    <p className="mt-1 text-sm font-bold text-charcoal-950">
                      {quad.capacity}
                    </p>
                  </div>

                  {/* Transmission */}
                  <div className="rounded-xl bg-sand-50/70 p-3">
                    <Settings2
                      size={17}
                      className="mb-2 text-terracotta-500"
                    />

                    <p className="text-[10px] font-bold uppercase tracking-wider text-charcoal-400">
                      Boîte
                    </p>

                    <p className="mt-1 text-sm font-bold text-charcoal-950">
                      {quad.transmission}
                    </p>
                  </div>

                </div>

                {/* Price + CTA */}
                <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                  {/* Price */}
                  <div>
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-charcoal-400">
                      À partir de
                    </p>

                    <div className="flex items-baseline">
                      <span className="text-xl font-black text-terracotta-600">
                        {quad.price.split("/")[0]}
                      </span>

                      <span className="ml-1 text-sm font-medium text-charcoal-400">
                        /{quad.price.split("/")[1]}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="#reservation"
                    className="group/button inline-flex items-center justify-center gap-2 rounded-xl bg-charcoal-950 px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-terracotta-600 hover:shadow-lg"
                  >
                    Réserver

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/button:translate-x-1"
                    />
                  </a>

                </div>

              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}