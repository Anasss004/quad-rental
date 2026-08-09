import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Fleet from "@/components/Fleet";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
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
        <Booking />
        <MapSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
