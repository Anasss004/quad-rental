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

const STATUS_LABELS: Record<string, string> = {
  pending: "En attente",
  confirmed: "Confirmée",
  cancelled: "Annulée",
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

  const pendingCount = reservations.filter((r) => r.status === "pending").length;
  const confirmedCount = reservations.filter((r) => r.status === "confirmed").length;

  function handleEventClick(info: EventClickArg) {
    const found = reservations.find((r) => r.id === info.event.id);
    if (found) setSelected(found);
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        <StatCard label="Total" value={reservations.length} />
        <StatCard label="En attente" value={pendingCount} accent="#f59e0b" />
        <StatCard label="Confirmées" value={confirmedCount} accent="#16a34a" />
      </div>

      <div className="flex items-center justify-between mb-3 flex-wrap gap-3">
        <h2 className="font-bold text-gray-900">Planning des réservations</h2>
        <div className="flex gap-3 text-xs flex-wrap">
          <LegendDot color={STATUS_COLORS.pending} label={STATUS_LABELS.pending} />
          <LegendDot color={STATUS_COLORS.confirmed} label={STATUS_LABELS.confirmed} />
          <LegendDot color={STATUS_COLORS.cancelled} label={STATUS_LABELS.cancelled} />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4">
        {loading ? (
          <p className="text-sm text-gray-400 py-16 text-center">
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

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent?: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm px-4 py-3.5">
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <p className="text-2xl font-extrabold" style={{ color: accent || "#111827" }}>
        {value}
      </p>
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-gray-500">
      <span
        className="w-2.5 h-2.5 rounded-full inline-block"
        style={{ background: color }}
      />
      {label}
    </span>
  );
}
