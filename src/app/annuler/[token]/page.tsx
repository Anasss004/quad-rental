"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

type Status = "loading" | "success" | "already" | "error";

export default function CancelPage() {
  const params = useParams<{ token: string }>();
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let cancelled = false;

    async function run() {
      const { data, error } = await supabase.rpc("cancel_reservation", {
        token: params.token,
      });

      if (cancelled) return;

      if (error) {
        setStatus("error");
        return;
      }

      setStatus(data ? "success" : "already");
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [params.token]);

  const content: Record<Status, { title: string; text: string }> = {
    loading: {
      title: "Annulation en cours...",
      text: "Merci de patienter un instant.",
    },
    success: {
      title: "Réservation annulée",
      text: "Votre réservation a bien été annulée. Vous pouvez fermer cette page ou en réserver une autre depuis le site.",
    },
    already: {
      title: "Lien déjà utilisé",
      text: "Cette réservation est introuvable ou a déjà été annulée. Contactez-nous si vous pensez qu'il s'agit d'une erreur.",
    },
    error: {
      title: "Une erreur est survenue",
      text: "Impossible d'annuler cette réservation pour le moment. Merci de nous contacter directement.",
    },
  };

  const { title, text } = content[status];

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center bg-white dark:bg-gray-900 rounded-xl shadow-sm p-8 border">
        <h1 className="text-2xl font-bold mb-3">{title}</h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">{text}</p>
        <Link
          href="/"
          className="inline-block bg-orange-700 hover:bg-orange-800 text-white font-semibold px-5 py-2 rounded-lg text-sm"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
