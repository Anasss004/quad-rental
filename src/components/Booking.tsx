"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import BookingForm from "./BookingForm";
import AvailabilityList from "./AvailabilityList";
import { useLanguage } from "@/lib/i18n";

const WHATSAPP_PHONE = "212664350232";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Bonjour Elta Quad, je souhaite réserver un quad."
);

export default function Booking() {
  const [refreshKey, setRefreshKey] = useState(0);
  const { t } = useLanguage();

  return (
    <section id="reservation" className="py-20 md:py-24 bg-sand-50 dark:bg-charcoal-950">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-center">
          {t("booking_title")}
        </h2>
        <p className="text-center text-charcoal-700/70 dark:text-sand-200/60 mb-10 max-w-md mx-auto">
          {t("booking_subtitle")}
        </p>

        <div className="max-w-xl mx-auto mb-10 text-center">
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto bg-[#25D366] hover:brightness-95 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition hover:-translate-y-0.5"
          >
            <MessageCircle size={20} fill="white" strokeWidth={0} />
            Réserver via WhatsApp
          </a>
          <p className="text-xs text-charcoal-700/60 dark:text-sand-200/50 mt-2">
            Réponse rapide — +212 664-350232
          </p>

          <div className="flex items-center gap-3 my-8 text-xs uppercase tracking-widest text-charcoal-700/40 dark:text-sand-200/40">
            <span className="flex-1 h-px bg-charcoal-950/10 dark:bg-sand-50/10" />
            ou remplissez le formulaire
            <span className="flex-1 h-px bg-charcoal-950/10 dark:bg-sand-50/10" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <BookingForm onBooked={() => setRefreshKey((k) => k + 1)} />
          </div>
          <AvailabilityList refreshKey={refreshKey} />
        </div>
      </div>
    </section>
  );
}
