import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Overview from "@/components/Overview/Overview";
import TryItSection from "@/components/TryItSection/TryItSection";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <div className="bottom-80 relative">
    <TryItSection />
    <Overview />
    </div>
    </>
  );
}
