"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { formatDateFr, addHoursToTime } from "@/lib/format";
import { useBlackoutDates } from "@/lib/useBlackoutDates";

type Slot = {
  res_date: string;
  start_time: string;
  duration_hours: number;
};

export default function AvailabilityList({ refreshKey }: { refreshKey: number }) {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const blackoutDates = useBlackoutDates();

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(false);

      const todayStr = new Date().toISOString().slice(0, 10);

      const { data, error } = await supabase
        .from("public_availability")
        .select("res_date, start_time, duration_hours")
        .gte("res_date", todayStr)
        .order("res_date", { ascending: true })
        .order("start_time", { ascending: true });

      if (cancelled) return;

      if (error) {
        console.error(error);
        setError(true);
        setLoading(false);
        return;
      }

      setSlots(data ?? []);
      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [refreshKey]);

  return (
    <div className="bg-white dark:bg-charcoal-900 border border-charcoal-950/10 dark:border-sand-50/10 rounded-xl shadow-sm p-6 h-fit">
      <h3 className="font-bold text-lg mb-1">Créneaux déjà demandés</h3>
      <p className="text-sm text-charcoal-700/70 dark:text-sand-200/60 mb-4">
        Évitez ces créneaux pour une confirmation plus rapide.
      </p>

      {loading && <p className="text-sm text-charcoal-700/50 dark:text-sand-200/40">Chargement...</p>}
      {error && (
        <p className="text-sm text-red-600">
          Impossible de charger les disponibilités pour le moment.
        </p>
      )}
      {!loading && !error && slots.length === 0 && (
        <p className="text-sm text-charcoal-700/70 dark:text-sand-200/60">
          Aucun créneau réservé pour le moment — toutes les dates sont libres !
        </p>
      )}

      <ul className="space-y-2 max-h-72 overflow-y-auto pr-1">
        {blackoutDates.map((d) => (
          <li
            key={`blackout-${d}`}
            className="text-sm bg-sand-100 dark:bg-charcoal-800 border border-charcoal-950/10 dark:border-sand-50/10 rounded-lg px-3 py-2 text-charcoal-700/60 dark:text-sand-200/50"
          >
            <span className="font-medium capitalize">{formatDateFr(d)}</span>{" "}
            — Fermé
          </li>
        ))}
        {slots.map((s, i) => (
          <li
            key={i}
            className="text-sm bg-terracotta-500/10 dark:bg-terracotta-500/10 border border-terracotta-500/20 rounded-lg px-3 py-2"
          >
            <span className="font-medium capitalize">
              {formatDateFr(s.res_date)}
            </span>{" "}
            — {s.start_time.slice(0, 5)} à{" "}
            {addHoursToTime(s.start_time, s.duration_hours)}
          </li>
        ))}
      </ul>
    </div>
  );
}
