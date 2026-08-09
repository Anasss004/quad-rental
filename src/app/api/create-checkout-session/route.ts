import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const DEPOSIT_AMOUNT_CENTS = 2000; // 20€ — adjust as needed

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe n'est pas configuré." },
      { status: 500 }
    );
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { reservationId } = await req.json();

  if (!reservationId) {
    return NextResponse.json(
      { error: "reservationId manquant." },
      { status: 400 }
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "Acompte réservation Elta Quad",
          },
          unit_amount: DEPOSIT_AMOUNT_CENTS,
        },
        quantity: 1,
      },
    ],
    metadata: { reservation_id: reservationId },
    success_url: `${siteUrl}/?deposit=success`,
    cancel_url: `${siteUrl}/?deposit=cancelled`,
  });

  return NextResponse.json({ url: session.url });
}
