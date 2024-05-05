import Details from "@/components/Details/Details";
import HeroSection from "@/components/HeroSection/HeroSection";
import InformationScreen from "@/components/InformationScreen/InformationScreen";
import InteractionScreen from "@/components/InteractionScreen/InteractionScreen";
import Navbar from "@/components/Navbar/Navbar";
import Overview from "@/components/Overview/Overview";
import PowerAiCHat from "@/components/PowerAiChat/PowerAiChat";
import PricingTable from "@/components/PriceTable/PriceTable";
import TryItSection from "@/components/TryItSection/TryItSection";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <div className="bottom-80 relative">
    <TryItSection />
    <Overview />
    <InteractionScreen />
    <PowerAiCHat />
    <Details />
    <InformationScreen />
    <PricingTable />
    </div>
    </>
  );
}
