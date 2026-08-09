import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type ReservationRecord = {
  id: string;
  client_name: string;
  phone: string;
  email: string | null;
  res_date: string;
  start_time: string;
  duration_hours: number;
  quads_count: number;
  message: string | null;
  status: string;
  cancel_token: string;
};

type SupabaseWebhookPayload = {
  type: "INSERT" | "UPDATE" | "DELETE";
  table: string;
  record: ReservationRecord;
  old_record: ReservationRecord | null;
};

export async function POST(req: NextRequest) {
  // 1. Verify this request genuinely comes from our own Supabase webhook,
  // not a random visitor hitting this URL directly.
  const secret = req.headers.get("x-webhook-secret");
  if (!process.env.SUPABASE_WEBHOOK_SECRET || secret !== process.env.SUPABASE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const payload = (await req.json()) as SupabaseWebhookPayload;

  if (payload.table !== "reservations" || payload.type !== "INSERT") {
    // Nothing to notify about — acknowledge and exit.
    return NextResponse.json({ skipped: true });
  }

  const r = payload.record;
  const resend = new Resend(process.env.RESEND_API_KEY);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const ownerEmail = process.env.OWNER_EMAIL;
  const fromAddress = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

  const dateLabel = new Date(`${r.res_date}T00:00:00`).toLocaleDateString(
    "fr-FR",
    { weekday: "long", day: "numeric", month: "long", year: "numeric" }
  );

  const results: { owner?: unknown; client?: unknown } = {};

  // 2. Notify the owner.
  if (ownerEmail) {
    results.owner = await resend.emails.send({
      from: `Elta Quad <${fromAddress}>`,
      to: ownerEmail,
      subject: `Nouvelle demande de réservation — ${r.client_name}`,
      html: `
        <h2>Nouvelle demande de réservation</h2>
        <p><strong>Client :</strong> ${r.client_name}</p>
        <p><strong>Téléphone :</strong> ${r.phone}</p>
        <p><strong>Email :</strong> ${r.email || "-"}</p>
        <p><strong>Date :</strong> ${dateLabel} à ${r.start_time.slice(0, 5)}</p>
        <p><strong>Durée :</strong> ${r.duration_hours} h</p>
        <p><strong>Nombre de quads :</strong> ${r.quads_count}</p>
        <p><strong>Message :</strong> ${r.message || "-"}</p>
        <p><a href="${siteUrl}/admin">Gérer cette réservation</a></p>
      `,
    });
  }

  // 3. Confirm to the client, if they gave an email, with a self-service
  // cancellation link built from their unique cancel_token.
  if (r.email) {
    const cancelUrl = `${siteUrl}/annuler/${r.cancel_token}`;
    results.client = await resend.emails.send({
      from: `Elta Quad <${fromAddress}>`,
      to: r.email,
      subject: "Votre demande de réservation — Elta Quad",
      html: `
        <h2>Merci pour votre demande, ${r.client_name} !</h2>
        <p>Nous avons bien reçu votre demande de réservation :</p>
        <p><strong>Date :</strong> ${dateLabel} à ${r.start_time.slice(0, 5)}</p>
        <p><strong>Durée :</strong> ${r.duration_hours} h</p>
        <p><strong>Nombre de quads :</strong> ${r.quads_count}</p>
        <p>Nous vous confirmons ce créneau rapidement par téléphone ou email.</p>
        <p style="margin-top:24px;">
          Besoin d'annuler ?
          <a href="${cancelUrl}">Annuler ma réservation</a>
        </p>
      `,
    });
  }

  return NextResponse.json({ ok: true, results });
}
