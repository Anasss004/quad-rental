import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  // Remplacez le numéro ci-dessous par le vôtre, format international sans "+" ni espaces.
  const phone = "33600000000";
  const message = encodeURIComponent(
    "Bonjour Elta Quad, je souhaite avoir des informations sur une réservation."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter Elta Quad sur WhatsApp"
      className="fixed bottom-5 right-5 z-40 bg-[#25D366] hover:brightness-95 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition hover:scale-105"
    >
      <MessageCircle size={22} fill="white" strokeWidth={0} />
    </a>
  );
}
