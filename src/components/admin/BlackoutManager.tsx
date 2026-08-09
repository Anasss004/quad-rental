"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { CalendarOff, Plus, Trash2 } from "lucide-react";

type Blackout = { id: string; blackout_date: string; reason: string | null };

export default function BlackoutManager() {
  const [dates, setDates] = useState<Blackout[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      const { data, error } = await supabase
        .from("blackout_dates")
        .select("*")
        .order("blackout_date", { ascending: true });
      if (cancelled) return;
      if (!error && data) setDates(data as Blackout[]);
      setLoading(false);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [refreshKey]);

  function refresh() {
    setRefreshKey((k) => k + 1);
  }

  async function addDate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const blackout_date = String(fd.get("blackout_date") || "");
    const reason = String(fd.get("reason") || "").trim() || null;
    if (!blackout_date) return;

    await supabase.from("blackout_dates").insert([{ blackout_date, reason }]);
    (e.target as HTMLFormElement).reset();
    refresh();
  }

  async function remove(id: string) {
    await supabase.from("blackout_dates").delete().eq("id", id);
    refresh();
  }

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-2.5 mb-1">
        <CalendarOff size={18} className="text-terracotta-500" />
        <h2 className="font-bold text-gray-900">Jours de fermeture</h2>
      </div>
      <p className="text-sm text-gray-400 mb-5">
        Ces dates seront automatiquement bloquées sur le formulaire public.
      </p>

      <form
        onSubmit={addDate}
        className="flex flex-wrap gap-2 mb-6 bg-white border border-gray-200 rounded-xl p-3"
      >
        <input
          required
          name="blackout_date"
          type="date"
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-500/40 focus:border-terracotta-500 transition"
        />
        <input
          name="reason"
          type="text"
          placeholder="Raison (optionnel)"
          className="border border-gray-200 rounded-lg px-3 py-2 text-sm flex-1 min-w-[150px] focus:outline-none focus:ring-2 focus:ring-terracotta-500/40 focus:border-terracotta-500 transition"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-1.5 bg-terracotta-500 hover:bg-terracotta-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          <Plus size={15} />
          Ajouter
        </button>
      </form>

      {loading ? (
        <p className="text-sm text-gray-400">Chargement...</p>
      ) : dates.length === 0 ? (
        <p className="text-sm text-gray-400 bg-white border border-dashed border-gray-200 rounded-xl px-4 py-6 text-center">
          Aucun jour de fermeture programmé.
        </p>
      ) : (
        <ul className="space-y-2">
          {dates.map((d) => (
            <li
              key={d.id}
              className="flex items-center justify-between text-sm bg-white border border-gray-200 rounded-lg px-4 py-2.5"
            >
              <span className="text-gray-700">
                <span className="font-medium">{d.blackout_date}</span>
                {d.reason ? <span className="text-gray-400"> — {d.reason}</span> : null}
              </span>
              <button
                onClick={() => remove(d.id)}
                className="text-gray-400 hover:text-red-600 transition-colors"
                aria-label="Retirer"
              >
                <Trash2 size={15} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
