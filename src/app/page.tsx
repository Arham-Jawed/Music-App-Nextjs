import CardSection from "@/components/CardSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StickySection from "@/components/StickySection";
import UpcomingSection from "@/components/UpcomingSection";
import WavySection from "@/components/WavySection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
         <div className="h-screen">
         <HeroSection />
         </div>
         <FeatureSection />
         <StickySection />
         <CardSection />
         <UpcomingSection />
         <WavySection />
         <Footer />
    </main>
  );
}
