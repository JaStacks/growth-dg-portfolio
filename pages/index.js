import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PhilosophySection from "@/components/landing/PhilosophySection";
import ProtocolSection from "@/components/landing/ProtocolSection";
import GetStartedSection from "@/components/landing/GetStartedSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="w-full">
        <HeroSection />
        <FeaturesSection />
        <PhilosophySection />
        <ProtocolSection />
        <GetStartedSection />
        <Footer />
      </main>
    </div>
  );
}
