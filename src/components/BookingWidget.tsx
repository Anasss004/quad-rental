"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabaseClient";
import { useBlackoutDates } from "@/lib/useBlackoutDates";
import { QUADS, EXPERIENCES } from "@/lib/catalog";
import AvailabilityList from "./AvailabilityList";

const STEPS = ["Quad", "Date", "Expérience", "Vos infos", "Confirmation"];
const DEPOSIT_ENABLED = process.env.NEXT_PUBLIC_ENABLE_DEPOSIT === "true";

type Feedback = { type: "success" | "error"; message: string } | null;

export default function BookingWidget({ onBooked }: { onBooked: () => void }) {
  const [step, setStep] = useState(0);
  const blackoutDates = useBlackoutDates();

  const [quadId, setQuadId] = useState<string | null>(null);
  const [resDate, setResDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState(1);
  const [experienceId, setExperienceId] = useState<string | null>(null);
  const [clientName, setClientName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [quadsCount, setQuadsCount] = useState(1);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [payingDeposit, setPayingDeposit] = useState(false);
  const [lastReservationId, setLastReservationId] = useState<string | null>(null);

  const selectedQuad = QUADS.find((q) => q.id === quadId) || null;
  const selectedExperience = EXPERIENCES.find((e) => e.id === experienceId) || null;
  const total = selectedQuad ? selectedQuad.pricePerHour * duration * quadsCount : 0;

  function canProceed() {
    if (step === 0) return !!quadId;
    if (step === 1) return !!resDate && !!startTime;
    if (step === 2) return !!experienceId;
    if (step === 3) return clientName.trim() !== "" && phone.trim() !== "";
    return true;
  }

  function next() {
    if (!canProceed()) return;
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function submit() {
    setFeedback(null);

    if (honeypot.trim() !== "") {
      setFeedback({ type: "success", message: "Votre demande a bien été envoyée !" });
      return;
    }

    if (blackoutDates.includes(resDate)) {
      setFeedback({
        type: "error",
        message: "Cette date est indisponible (jour de fermeture). Merci de choisir une autre date.",
      });
      setStep(1);
      return;
    }

    setSubmitting(true);
    const { data, error } = await supabase
      .from("reservations")
      .insert([
        {
          client_name: clientName.trim(),
          phone: phone.trim(),
          email: email.trim() || null,
          res_date: resDate,
          start_time: startTime,
          duration_hours: duration,
          quads_count: quadsCount,
          message: message.trim() || null,
          quad_type: selectedQuad?.name ?? null,
          experience_type: selectedExperience?.name ?? null,
          status: "pending",
        },
      ])
      .select()
      .single();
    setSubmitting(false);

    if (error) {
      console.error(error);
      setFeedback({
        type: "error",
        message: "Une erreur est survenue. Merci de réessayer ou de nous contacter par téléphone.",
      });
      return;
    }

    setFeedback({
      type: "success",
      message: "Votre demande a bien été envoyée ! Nous vous confirmons votre rendez-vous rapidement.",
    });
    setLastReservationId(data?.id ?? null);
    onBooked();
  }

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

  if (feedback?.type === "success") {
    return (
      <div className="border border-charcoal-950/10 dark:border-sand-50/10 p-10 md:p-14 text-center">
        <span className="text-xs uppercase tracking-eyebrow text-terracotta-600 dark:text-terracotta-400">
          Demande envoyée
        </span>
        <p className="font-display text-2xl md:text-3xl text-charcoal-950 dark:text-sand-50 mt-4 max-w-md mx-auto">
          {feedback.message}
        </p>
        {DEPOSIT_ENABLED && lastReservationId && (
          <button
            onClick={payDeposit}
            disabled={payingDeposit}
            className="mt-8 text-xs uppercase tracking-eyebrow font-medium border border-charcoal-950 dark:border-sand-50 text-charcoal-950 dark:text-sand-50 px-8 py-3.5 hover:bg-terracotta-500 hover:border-terracotta-500 hover:text-charcoal-950 transition-colors disabled:opacity-60"
          >
            {payingDeposit ? "Redirection..." : "Payer un acompte de 20€ (optionnel)"}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="border border-charcoal-950/10 dark:border-sand-50/10">
      {/* Step indicator */}
      <div className="flex border-b border-dashed border-charcoal-950/20 dark:border-sand-50/20 overflow-x-auto">
        {STEPS.map((label, i) => (
          <div
            key={label}
            className={`flex-1 min-w-[110px] px-4 py-4 font-mono text-xs uppercase tracking-eyebrow border-r border-dashed last:border-r-0 border-charcoal-950/20 dark:border-sand-50/20 ${
              i === step
                ? "text-charcoal-950 dark:text-sand-50 font-semibold"
                : i < step
                ? "text-terracotta-600 dark:text-terracotta-400"
                : "text-charcoal-950/30 dark:text-sand-50/30"
            }`}
          >
            <span className="block mb-1">0{i + 1}</span>
            {label}
          </div>
        ))}
      </div>

      <div className="p-6 md:p-10 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3 }}
            >
              {step === 0 && (
                <div>
                  <h3 className="font-display font-black text-2xl text-charcoal-950 dark:text-sand-50 mb-6">
                    Choisissez votre quad
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {QUADS.map((q) => (
                      <button
                        key={q.id}
                        type="button"
                        disabled={!q.available}
                        onClick={() => setQuadId(q.id)}
                        className={`text-left border p-4 transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
                          quadId === q.id
                            ? "border-terracotta-500 bg-terracotta-500/5"
                            : "border-charcoal-950/15 dark:border-sand-50/15 hover:border-charcoal-950/40 dark:hover:border-sand-50/40"
                        }`}
                      >
                        <p className="font-display font-bold text-lg text-charcoal-950 dark:text-sand-50">
                          {q.name}
                        </p>
                        <p className="text-xs uppercase tracking-eyebrow text-charcoal-700 dark:text-sand-200/70 mt-1">
                          {q.cc} · {q.capacity}
                        </p>
                        <p className="text-sm text-terracotta-600 dark:text-terracotta-400 mt-2">
                          {q.pricePerHour}€ / h
                        </p>
                        {!q.available && (
                          <p className="text-xs text-charcoal-950/50 dark:text-sand-50/50 mt-1">
                            Complet
                          </p>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div>
                  <h3 className="font-display font-black text-2xl text-charcoal-950 dark:text-sand-50 mb-6">
                    Choisissez date et heure
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-eyebrow mb-2 text-charcoal-700 dark:text-sand-200/70">
                        Date
                      </label>
                      <input
                        type="date"
                        value={resDate}
                        min={new Date().toISOString().slice(0, 10)}
                        onChange={(e) => setResDate(e.target.value)}
                        className="w-full border border-charcoal-950/20 dark:border-sand-50/20 bg-transparent px-3 py-2.5 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-eyebrow mb-2 text-charcoal-700 dark:text-sand-200/70">
                        Heure
                      </label>
                      <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="w-full border border-charcoal-950/20 dark:border-sand-50/20 bg-transparent px-3 py-2.5 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-eyebrow mb-2 text-charcoal-700 dark:text-sand-200/70">
                        Durée
                      </label>
                      <select
                        value={duration}
                        onChange={(e) => setDuration(parseFloat(e.target.value))}
                        className="w-full border border-charcoal-950/20 dark:border-sand-50/20 bg-transparent px-3 py-2.5 text-sm"
                      >
                        <option value={1}>1 heure</option>
                        <option value={2}>2 heures</option>
                        <option value={4}>Demi-journée (4h)</option>
                        <option value={8}>Journée (8h)</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-6">
                    <AvailabilityList refreshKey={0} />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="font-display font-black text-2xl text-charcoal-950 dark:text-sand-50 mb-6">
                    Choisissez votre expérience
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {EXPERIENCES.map((exp) => (
                      <button
                        key={exp.id}
                        type="button"
                        onClick={() => setExperienceId(exp.id)}
                        className={`text-left border p-4 transition-colors ${
                          experienceId === exp.id
                            ? "border-terracotta-500 bg-terracotta-500/5"
                            : "border-charcoal-950/15 dark:border-sand-50/15 hover:border-charcoal-950/40 dark:hover:border-sand-50/40"
                        }`}
                      >
                        <p className="font-display font-bold text-lg text-charcoal-950 dark:text-sand-50">
                          {exp.name}
                        </p>
                        <p className="text-xs uppercase tracking-eyebrow text-charcoal-700 dark:text-sand-200/70 mt-1">
                          {exp.duration}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="font-display font-black text-2xl text-charcoal-950 dark:text-sand-50 mb-2">
                    Vos informations
                  </h3>
                  {/* Honeypot */}
                  <input
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] w-px h-px overflow-hidden"
                  />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-eyebrow mb-2 text-charcoal-700 dark:text-sand-200/70">
                        Nom complet *
                      </label>
                      <input
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full border border-charcoal-950/20 dark:border-sand-50/20 bg-transparent px-3 py-2.5 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-eyebrow mb-2 text-charcoal-700 dark:text-sand-200/70">
                        Téléphone *
                      </label>
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full border border-charcoal-950/20 dark:border-sand-50/20 bg-transparent px-3 py-2.5 text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-eyebrow mb-2 text-charcoal-700 dark:text-sand-200/70">
                        Email
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-charcoal-950/20 dark:border-sand-50/20 bg-transparent px-3 py-2.5 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs uppercase tracking-eyebrow mb-2 text-charcoal-700 dark:text-sand-200/70">
                        Nombre de personnes
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={quadsCount}
                        onChange={(e) => setQuadsCount(parseInt(e.target.value, 10) || 1)}
                        className="w-full border border-charcoal-950/20 dark:border-sand-50/20 bg-transparent px-3 py-2.5 text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-eyebrow mb-2 text-charcoal-700 dark:text-sand-200/70">
                      Message (optionnel)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full border border-charcoal-950/20 dark:border-sand-50/20 bg-transparent px-3 py-2.5 text-sm"
                    />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h3 className="font-display font-black text-2xl text-charcoal-950 dark:text-sand-50 mb-6">
                    Confirmez votre réservation
                  </h3>
                  <ul className="text-sm divide-y divide-dashed divide-charcoal-950/20 dark:divide-sand-50/20 border-t border-b border-dashed border-charcoal-950/20 dark:border-sand-50/20">
                    <li className="flex justify-between py-3">
                      <span className="text-charcoal-700 dark:text-sand-200/70">Nom</span>
                      <span>{clientName}</span>
                    </li>
                    <li className="flex justify-between py-3">
                      <span className="text-charcoal-700 dark:text-sand-200/70">Téléphone</span>
                      <span>{phone}</span>
                    </li>
                    <li className="flex justify-between py-3">
                      <span className="text-charcoal-700 dark:text-sand-200/70">Email</span>
                      <span>{email || "—"}</span>
                    </li>
                  </ul>
                  {feedback?.type === "error" && (
                    <p className="text-red-600 text-sm mt-4">{feedback.message}</p>
                  )}
                  <button
                    onClick={submit}
                    disabled={submitting}
                    className="mt-8 w-full text-xs uppercase tracking-eyebrow font-medium bg-charcoal-950 dark:bg-sand-50 text-sand-50 dark:text-charcoal-950 py-4 hover:bg-terracotta-500 dark:hover:bg-terracotta-400 transition-colors disabled:opacity-60"
                  >
                    {submitting ? "Envoi en cours..." : "Confirmer ma réservation"}
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between mt-10">
            <button
              onClick={back}
              disabled={step === 0}
              className="text-xs uppercase tracking-eyebrow text-charcoal-950 dark:text-sand-50 disabled:opacity-30"
            >
              ← Retour
            </button>
            {step < STEPS.length - 1 && (
              <button
                onClick={next}
                disabled={!canProceed()}
                className="text-xs uppercase tracking-eyebrow font-medium border border-charcoal-950 dark:border-sand-50 text-charcoal-950 dark:text-sand-50 px-6 py-2.5 hover:bg-terracotta-500 hover:border-terracotta-500 transition-colors disabled:opacity-30"
              >
                Suivant →
              </button>
            )}
          </div>
        </div>

        {/* Summary sidebar */}
        <div className="bg-sand-100 dark:bg-charcoal-900 p-6 h-fit sticky top-24">
          <p className="font-mono text-xs uppercase tracking-eyebrow text-charcoal-700 dark:text-sand-200/70 mb-5">
            Récapitulatif
          </p>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-charcoal-700 dark:text-sand-200/70">Quad</dt>
              <dd>{selectedQuad?.name ?? "—"}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-charcoal-700 dark:text-sand-200/70">Date</dt>
              <dd>{resDate || "—"}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-charcoal-700 dark:text-sand-200/70">Durée</dt>
              <dd>{duration} h</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-charcoal-700 dark:text-sand-200/70">Personnes</dt>
              <dd>{quadsCount}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-charcoal-700 dark:text-sand-200/70">Expérience</dt>
              <dd>{selectedExperience?.name ?? "—"}</dd>
            </div>
          </dl>
          <div className="flex justify-between items-baseline mt-6 pt-6 border-t border-dashed border-charcoal-950/20 dark:border-sand-50/20">
            <span className="text-xs uppercase tracking-eyebrow text-charcoal-700 dark:text-sand-200/70">
              Total estimé
            </span>
            <span className="font-display font-black text-2xl text-terracotta-600 dark:text-terracotta-400">
              {total > 0 ? `${total}€` : "—"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
