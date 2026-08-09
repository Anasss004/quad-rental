"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

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
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6 mt-6">
      <h3 className="font-bold text-lg mb-1">Jours de fermeture</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        Ces dates seront automatiquement bloquées sur le formulaire public.
      </p>

      <form onSubmit={addDate} className="flex flex-wrap gap-2 mb-4">
        <input
          required
          name="blackout_date"
          type="date"
          className="border rounded-lg px-3 py-2 text-sm"
        />
        <input
          name="reason"
          type="text"
          placeholder="Raison (optionnel)"
          className="border rounded-lg px-3 py-2 text-sm flex-1 min-w-[150px]"
        />
        <button
          type="submit"
          className="bg-orange-700 hover:bg-orange-800 text-white text-sm font-semibold px-4 py-2 rounded-lg"
        >
          Ajouter
        </button>
      </form>

      {loading ? (
        <p className="text-sm text-gray-400">Chargement...</p>
      ) : dates.length === 0 ? (
        <p className="text-sm text-gray-500 dark:text-gray-400">Aucun jour de fermeture programmé.</p>
      ) : (
        <ul className="space-y-2">
          {dates.map((d) => (
            <li
              key={d.id}
              className="flex items-center justify-between text-sm bg-gray-50 dark:bg-gray-950 border rounded-lg px-3 py-2"
            >
              <span>
                {d.blackout_date}
                {d.reason ? ` — ${d.reason}` : ""}
              </span>
              <button
                onClick={() => remove(d.id)}
                className="text-red-600 hover:text-red-800 text-xs font-semibold"
              >
                Retirer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
