"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import {
  X,
  Phone,
  Mail,
  Calendar,
  Clock,
  Users,
  MessageSquare,
  Check,
  Ban,
  Trash2,
} from "lucide-react";

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

const STATUS_STYLES: Record<string, string> = {
  pending: "bg-amber-50 text-amber-700 border-amber-200",
  confirmed: "bg-green-50 text-green-700 border-green-200",
  cancelled: "bg-gray-100 text-gray-500 border-gray-200",
};

const STATUS_LABELS: Record<string, string> = {
  pending: "En attente",
  confirmed: "Confirmée",
  cancelled: "Annulée",
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
  const [busy, setBusy] = useState(false);

  async function updateStatus(status: string) {
    setBusy(true);
    await supabase
      .from("reservations")
      .update({ status })
      .eq("id", reservation.id);
    setBusy(false);
    onChanged();
    onClose();
  }

  async function remove() {
    if (!confirm("Supprimer définitivement cette réservation ?")) return;
    setBusy(true);
    await supabase.from("reservations").delete().eq("id", reservation.id);
    setBusy(false);
    onChanged();
    onClose();
  }

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full relative overflow-hidden">
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-gray-100">
          <div>
            <p className="font-bold text-gray-900">{reservation.client_name}</p>
            <span
              className={`inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full border ${STATUS_STYLES[reservation.status]}`}
            >
              {STATUS_LABELS[reservation.status]}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-4 space-y-3 text-sm text-gray-700">
          <InfoRow icon={<Phone size={14} />} label={reservation.phone} />
          {reservation.email && (
            <InfoRow icon={<Mail size={14} />} label={reservation.email} />
          )}
          <InfoRow
            icon={<Calendar size={14} />}
            label={`${reservation.res_date} à ${reservation.start_time.slice(0, 5)}`}
          />
          <InfoRow icon={<Clock size={14} />} label={`${reservation.duration_hours} h`} />
          <InfoRow
            icon={<Users size={14} />}
            label={`${reservation.quads_count} quad${reservation.quads_count > 1 ? "s" : ""}`}
          />
          {reservation.message && (
            <InfoRow icon={<MessageSquare size={14} />} label={reservation.message} />
          )}
        </div>

        <div className="flex flex-wrap gap-2 px-6 pb-6 pt-2">
          <ActionButton
            onClick={() => updateStatus("confirmed")}
            disabled={busy || reservation.status === "confirmed"}
            icon={<Check size={14} />}
            label="Confirmer"
            className="bg-green-600 hover:bg-green-700"
          />
          <ActionButton
            onClick={() => updateStatus("cancelled")}
            disabled={busy || reservation.status === "cancelled"}
            icon={<Ban size={14} />}
            label="Annuler"
            className="bg-gray-500 hover:bg-gray-600"
          />
          <ActionButton
            onClick={remove}
            disabled={busy}
            icon={<Trash2 size={14} />}
            label="Supprimer"
            className="bg-red-600 hover:bg-red-700"
          />
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="text-terracotta-500 mt-0.5">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

function ActionButton({
  onClick,
  disabled,
  icon,
  label,
  className,
}: {
  onClick: () => void;
  disabled?: boolean;
  icon: React.ReactNode;
  label: string;
  className: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-1.5 text-white text-sm font-medium px-3.5 py-2 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${className}`}
    >
      {icon}
      {label}
    </button>
  );
}
