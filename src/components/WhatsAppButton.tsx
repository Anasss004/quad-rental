import InstagramIcon from "./InstagramIcon";
import WhatsAppIcon from "./WhatsAppIcon";

const INSTAGRAM_URL = "https://www.instagram.com/elta_quad/";

export default function WhatsAppButton() {
  const phone = "212664350232";
  const message = encodeURIComponent(
    "Bonjour 👋🏻 Je souhaite réserver une excursion en quad à Souihla 🏍️🌴"
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Elta Quad sur Instagram"
        className="bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:brightness-95 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition hover:scale-105"
      >
        <InstagramIcon size={22} />
      </a>
      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Elta Quad sur WhatsApp"
        className="bg-[#25D366] hover:brightness-95 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition hover:scale-105"
      >
        <WhatsAppIcon size={24} />
      </a>
    </div>
  );
}
