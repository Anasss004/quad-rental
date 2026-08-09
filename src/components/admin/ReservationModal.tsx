"use client";

import { supabase } from "@/lib/supabaseClient";

export type Reservation = {
  id: string;
  client_name: string;
  phone: string;
  email: string | null;
  res_date: string;
  start_time: string;
  duration_hours: number;
  quads_count: number;
  message: string | null;
  status: "pending" | "confirmed" | "cancelled";
};

export default function ReservationModal({
  reservation,
  onClose,
  onChanged,
}: {
  reservation: Reservation;
  onClose: () => void;
  onChanged: () => void;
}) {
  async function updateStatus(status: string) {
    await supabase
      .from("reservations")
      .update({ status })
      .eq("id", reservation.id);
    onChanged();
    onClose();
  }

  async function remove() {
    if (!confirm("Supprimer définitivement cette réservation ?")) return;
    await supabase.from("reservations").delete().eq("id", reservation.id);
    onChanged();
    onClose();
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-gray-800 dark:text-gray-100 text-xl"
          aria-label="Fermer"
        >
          &times;
        </button>
        <div className="text-sm space-y-1">
          <p>
            <strong>Client :</strong> {reservation.client_name}
          </p>
          <p>
            <strong>Téléphone :</strong> {reservation.phone}
          </p>
          <p>
            <strong>Email :</strong> {reservation.email || "-"}
          </p>
          <p>
            <strong>Date :</strong> {reservation.res_date} à{" "}
            {reservation.start_time.slice(0, 5)}
          </p>
          <p>
            <strong>Durée :</strong> {reservation.duration_hours} h
          </p>
          <p>
            <strong>Nombre de quads :</strong> {reservation.quads_count}
          </p>
          <p>
            <strong>Message :</strong> {reservation.message || "-"}
          </p>
          <p>
            <strong>Statut :</strong> {reservation.status}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <button
            onClick={() => updateStatus("confirmed")}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded text-sm"
          >
            Confirmer
          </button>
          <button
            onClick={() => updateStatus("cancelled")}
            className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1.5 rounded text-sm"
          >
            Annuler
          </button>
          <button
            onClick={remove}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded text-sm"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
