"use client";

import { useState } from "react";
import BookingForm from "./BookingForm";
import AvailabilityList from "./AvailabilityList";
import { useLanguage } from "@/lib/i18n";

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
