"use client";

import { useCallback, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import frLocale from "@fullcalendar/core/locales/fr";
import { EventClickArg } from "@fullcalendar/core";
import { supabase } from "@/lib/supabaseClient";
import ReservationModal, { Reservation } from "./ReservationModal";

const STATUS_COLORS: Record<string, string> = {
  pending: "#f59e0b",
  confirmed: "#16a34a",
  cancelled: "#9ca3af",
};

export default function AdminCalendar() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [selected, setSelected] = useState<Reservation | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);
  const refresh = useCallback(() => setRefreshKey((k) => k + 1), []);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from("reservations")
        .select("*")
        .order("res_date", { ascending: true });

      if (cancelled) return;
      if (!error && data) setReservations(data as Reservation[]);
      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [refreshKey]);

  function addHours(date: string, time: string, hours: number) {
    const start = new Date(`${date}T${time}`);
    return new Date(start.getTime() + hours * 3600 * 1000);
  }

  const events = reservations.map((r) => ({
    id: r.id,
    title: `${r.client_name} (${r.quads_count} quad${
      r.quads_count > 1 ? "s" : ""
    })`,
    start: new Date(`${r.res_date}T${r.start_time}`).toISOString(),
    end: addHours(r.res_date, r.start_time, r.duration_hours).toISOString(),
    color: STATUS_COLORS[r.status] || STATUS_COLORS.pending,
  }));

  function handleEventClick(info: EventClickArg) {
    const found = reservations.find((r) => r.id === info.event.id);
    if (found) setSelected(found);
  }

  return (
    <div>
      <div className="flex gap-4 mb-4 text-sm flex-wrap">
        <span className="flex items-center gap-1">
          <span
            className="w-3 h-3 rounded-full inline-block"
            style={{ background: STATUS_COLORS.pending }}
          />
          En attente
        </span>
        <span className="flex items-center gap-1">
          <span
            className="w-3 h-3 rounded-full inline-block"
            style={{ background: STATUS_COLORS.confirmed }}
          />
          Confirmée
        </span>
        <span className="flex items-center gap-1">
          <span
            className="w-3 h-3 rounded-full inline-block"
            style={{ background: STATUS_COLORS.cancelled }}
          />
          Annulée
        </span>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-4">
        {loading ? (
          <p className="text-sm text-gray-400 py-10 text-center">
            Chargement du planning...
          </p>
        ) : (
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="timeGridWeek"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            locale={frLocale}
            firstDay={1}
            slotMinTime="07:00:00"
            slotMaxTime="21:00:00"
            height="auto"
            events={events}
            eventClick={handleEventClick}
          />
        )}
      </div>

      {selected && (
        <ReservationModal
          reservation={selected}
          onClose={() => setSelected(null)}
          onChanged={refresh}
        />
      )}
    </div>
  );
}
