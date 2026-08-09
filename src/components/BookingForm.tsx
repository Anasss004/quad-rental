"use client";

import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useBlackoutDates } from "@/lib/useBlackoutDates";
import { useLanguage } from "@/lib/i18n";
import { Calendar, Clock, Users } from "lucide-react";

type Feedback = { type: "success" | "error"; message: string } | null;

const DEPOSIT_ENABLED =
  process.env.NEXT_PUBLIC_ENABLE_DEPOSIT === "true";

export default function BookingForm({
  onBooked,
}: {
  onBooked: () => void;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [payingDeposit, setPayingDeposit] = useState(false);
  const [lastReservationId, setLastReservationId] = useState<string | null>(
    null
  );
  const blackoutDates = useBlackoutDates();
  const { t } = useLanguage();

  async function payDeposit() {
    if (!lastReservationId) return;
    setPayingDeposit(true);
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reservationId: lastReservationId }),
    });
    const data = await res.json();
    setPayingDeposit(false);
    if (data.url) window.location.href = data.url;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFeedback(null);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      client_name: String(fd.get("client_name") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      email: String(fd.get("email") || "").trim() || null,
      res_date: String(fd.get("res_date") || ""),
      start_time: String(fd.get("start_time") || ""),
      duration_hours: parseFloat(String(fd.get("duration_hours") || "1")),
      quads_count: parseInt(String(fd.get("quads_count") || "1"), 10),
      message: String(fd.get("message") || "").trim() || null,
      status: "pending" as const,
    };

    // Honeypot: real visitors never fill this hidden field. If it's
    // filled, silently pretend success — don't tip off the bot.
    if (String(fd.get("company") || "").trim() !== "") {
      setFeedback({
        type: "success",
        message:
          "Votre demande a bien été envoyée ! Nous vous confirmons votre rendez-vous rapidement par téléphone ou email.",
      });
      form.reset();
      return;
    }

    if (
      !payload.client_name ||
      !payload.phone ||
      !payload.res_date ||
      !payload.start_time
    ) {
      setFeedback({
        type: "error",
        message: "Merci de remplir tous les champs obligatoires.",
      });
      return;
    }

    if (blackoutDates.includes(payload.res_date)) {
      setFeedback({
        type: "error",
        message:
          "Cette date est indisponible (jour de fermeture). Merci de choisir une autre date.",
      });
      return;
    }

    setSubmitting(true);
    const { data, error } = await supabase
      .from("reservations")
      .insert([payload])
      .select()
      .single();
    setSubmitting(false);

    if (error) {
      console.error(error);
      setFeedback({
        type: "error",
        message:
          "Une erreur est survenue. Merci de réessayer ou de nous contacter par téléphone.",
      });
      return;
    }

    setFeedback({
      type: "success",
      message:
        "Votre demande a bien été envoyée ! Nous vous confirmons votre rendez-vous rapidement par téléphone ou email.",
    });
    setLastReservationId(data?.id ?? null);
    form.reset();
    onBooked();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-charcoal-900 border border-charcoal-950/10 dark:border-sand-50/10 rounded-xl shadow-sm p-6 md:p-8 space-y-4"
    >
      {/* Honeypot field — hidden from real users via CSS, bots often fill every field */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] w-px h-px overflow-hidden"
      />

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            {t("label_name")}
          </label>
          <input
            required
            name="client_name"
            type="text"
            className="w-full border border-charcoal-950/15 dark:border-sand-50/15 rounded-lg px-3 py-2 dark:bg-charcoal-800 dark:text-sand-50 focus:outline-none focus:ring-2 focus:ring-terracotta-500/40 focus:border-terracotta-500 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            {t("label_phone")}
          </label>
          <input
            required
            name="phone"
            type="tel"
            className="w-full border border-charcoal-950/15 dark:border-sand-50/15 rounded-lg px-3 py-2 dark:bg-charcoal-800 dark:text-sand-50 focus:outline-none focus:ring-2 focus:ring-terracotta-500/40 focus:border-terracotta-500 transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">{t("label_email")}</label>
        <input
          name="email"
          type="email"
          className="w-full border border-charcoal-950/15 dark:border-sand-50/15 rounded-lg px-3 py-2 dark:bg-charcoal-800 dark:text-sand-50 focus:outline-none focus:ring-2 focus:ring-terracotta-500/40 focus:border-terracotta-500 transition"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="flex items-center gap-1.5 text-sm font-medium mb-1"><Calendar size={14} className="text-terracotta-500" />{t("label_date")}</label>
          <input
            required
            name="res_date"
            type="date"
            min={new Date().toISOString().slice(0, 10)}
            className="w-full border border-charcoal-950/15 dark:border-sand-50/15 rounded-lg px-3 py-2 dark:bg-charcoal-800 dark:text-sand-50 focus:outline-none focus:ring-2 focus:ring-terracotta-500/40 focus:border-terracotta-500 transition"
          />
        </div>
        <div>
          <label className="flex items-center gap-1.5 text-sm font-medium mb-1">
            <Clock size={14} className="text-terracotta-500" />
            {t("label_time")}
          </label>
          <input
            required
            name="start_time"
            type="time"
            className="w-full border border-charcoal-950/15 dark:border-sand-50/15 rounded-lg px-3 py-2 dark:bg-charcoal-800 dark:text-sand-50 focus:outline-none focus:ring-2 focus:ring-terracotta-500/40 focus:border-terracotta-500 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">{t("label_duration")}</label>
          <select
            required
            name="duration_hours"
            defaultValue="1"
            className="w-full border border-charcoal-950/15 dark:border-sand-50/15 rounded-lg px-3 py-2 dark:bg-charcoal-800 dark:text-sand-50 focus:outline-none focus:ring-2 focus:ring-terracotta-500/40 focus:border-terracotta-500 transition"
          >
            <option value="1">1 heure</option>
            <option value="2">2 heures</option>
            <option value="4">Demi-journée (4h)</option>
            <option value="8">Journée (8h)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="flex items-center gap-1.5 text-sm font-medium mb-1">
          <Users size={14} className="text-terracotta-500" />
          {t("label_quads")}
        </label>
        <input
          required
          name="quads_count"
          type="number"
          min={1}
          max={10}
          defaultValue={1}
          className="w-full border border-charcoal-950/15 dark:border-sand-50/15 rounded-lg px-3 py-2 dark:bg-charcoal-800 dark:text-sand-50 focus:outline-none focus:ring-2 focus:ring-terracotta-500/40 focus:border-terracotta-500 transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          {t("label_message")}
        </label>
        <textarea
          name="message"
          rows={3}
          className="w-full border border-charcoal-950/15 dark:border-sand-50/15 rounded-lg px-3 py-2 dark:bg-charcoal-800 dark:text-sand-50 focus:outline-none focus:ring-2 focus:ring-terracotta-500/40 focus:border-terracotta-500 transition"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-terracotta-500 hover:bg-terracotta-600 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        {submitting ? t("submitting") : t("submit")}
      </button>

      {feedback && (
        <p
          className={`text-sm mt-2 ${
            feedback.type === "success" ? "text-green-700" : "text-red-600"
          }`}
        >
          {feedback.message}
        </p>
      )}

      {DEPOSIT_ENABLED && feedback?.type === "success" && lastReservationId && (
        <button
          type="button"
          onClick={payDeposit}
          disabled={payingDeposit}
          className="w-full border-2 border-terracotta-500 text-terracotta-600 dark:text-terracotta-400 font-semibold py-2.5 rounded-lg hover:bg-terracotta-50 dark:hover:bg-charcoal-800 transition-colors disabled:opacity-60"
        >
          {payingDeposit
            ? "Redirection vers le paiement..."
            : "Payer un acompte de 20€ (optionnel, sécurise votre créneau)"}
        </button>
      )}
    </form>
  );
}
