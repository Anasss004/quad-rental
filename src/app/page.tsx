import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Fleet from "@/components/Fleet";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import MapSection from "@/components/MapSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Fleet />
        <Pricing />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <FAQ />

        {/* Le vrai formulaire de réservation arrive en Phase 3 (Feature 4) */}
        <section
          id="reservation"
          className="py-20 bg-orange-50 text-center px-4"
        >
          <h2 className="text-3xl font-bold mb-2">Réserver un créneau</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Le formulaire de réservation connecté à la base de données arrive
            à la Phase 3. En attendant, contactez-nous directement via
            WhatsApp (bouton en bas à droite).
          </p>
        </section>

        <MapSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
