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
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg text-2xl transition"
    >
      💬
    </a>
  );
}
