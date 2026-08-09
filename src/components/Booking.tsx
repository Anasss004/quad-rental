"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

import BookingForm from "./BookingForm";
import AvailabilityList from "./AvailabilityList";
import WhatsAppIcon from "./WhatsAppIcon";
import { useLanguage } from "@/lib/i18n";

const WHATSAPP_PHONE = "212664350232";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Bonjour Elta Quad, je souhaite réserver un quad."
);

export default function Booking() {
  const [refreshKey, setRefreshKey] = useState(0);
  const { t } = useLanguage();

  return (
<section
  id="reservation"
  className="relative overflow-hidden bg-white py-24 md:py-32 scroll-mt-24"
>      {/* Ambient background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-terracotta-500/5 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#25D366]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">

        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="mb-12 max-w-2xl md:mb-14">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-terracotta-500" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta-600">
              Réservation
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-charcoal-950 md:text-5xl">
            {t("booking_title")}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal-600 md:text-lg">
            {t("booking_subtitle")}
          </p>
        </div>

       {/* =====================================================
    WHATSAPP QUICK BOOKING
===================================================== */}
<div className="mb-16 rounded-[2rem] border border-charcoal-950/10 bg-sand-50/60 p-7 md:p-9">
  <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

    {/* Content */}
    <div className="flex-1">
      <div className="flex items-start gap-5">

        {/* WhatsApp icon */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]/10">
          <WhatsAppIcon size={27} />
        </div>

        {/* Text */}
        <div>
          <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#25D366]">
            Réservation rapide
          </p>

          <h3 className="text-2xl font-black tracking-tight text-charcoal-950 md:text-3xl">
            Réservez en quelques secondes
          </h3>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-charcoal-600">
            Écrivez-nous sur WhatsApp pour vérifier la disponibilité
            et confirmer votre réservation directement avec notre équipe.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 md:pl-[76px]">

        <span className="flex items-center gap-2 text-sm font-medium text-charcoal-600">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366]/10">
            <CheckCircle2
              size={13}
              className="text-[#25D366]"
            />
          </span>
          Réponse rapide
        </span>

        <span className="flex items-center gap-2 text-sm font-medium text-charcoal-600">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366]/10">
            <CheckCircle2
              size={13}
              className="text-[#25D366]"
            />
          </span>
          Confirmation directe
        </span>

      </div>
    </div>

    {/* CTA */}
    <div className="w-full shrink-0 md:w-[280px]">

      <a
        href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4.5 text-base font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#20bd5b] hover:shadow-xl hover:shadow-[#25D366]/20"
      >
        <WhatsAppIcon size={21} />

        <span>Réserver via WhatsApp</span>

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>

      <a
        href="tel:+212664350232"
        className="mt-3 block text-center text-sm font-medium text-charcoal-500 transition-colors hover:text-[#25D366]"
      >
        ou appelez-nous · +212 664-350232
      </a>

    </div>
  </div>
</div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px flex-1 bg-charcoal-950/10" />

          <span className="flex shrink-0 items-center gap-2 rounded-full border border-charcoal-950/10 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal-400">
            <MessageCircle size={13} />

            Ou réservez en ligne
          </span>

          <span className="h-px flex-1 bg-charcoal-950/10" />
        </div>

        {/* =====================================================
            BOOKING AREA
        ====================================================== */}
        <div className="grid items-start gap-8 md:grid-cols-3">

          {/* =================================================
              BOOKING FORM
          ================================================== */}
          <div className="md:col-span-2">
            <div className="rounded-[2rem] border border-charcoal-950/10 bg-white p-6 shadow-sm md:p-8">

              {/* Form header */}
              <div className="mb-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta-500">
                  Votre aventure
                </p>

                <h3 className="mt-1 text-2xl font-black text-charcoal-950">
                  Choisissez votre créneau
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-relaxed text-charcoal-500">
                  Remplissez les informations ci-dessous pour envoyer votre
                  demande de réservation.
                </p>
              </div>

              {/* Booking form */}
              <BookingForm
                onBooked={() => setRefreshKey((k) => k + 1)}
              />

            </div>
          </div>

          {/* =================================================
              AVAILABILITY
          ================================================== */}
          <div className="md:sticky md:top-24">
            <AvailabilityList refreshKey={refreshKey} />
          </div>

        </div>
      </div>
    </section>
  );
}