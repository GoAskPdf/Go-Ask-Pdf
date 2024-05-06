import HeroSection from "@/components/HeroSection/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Overview from "@/components/Overview/Overview";
import TryItSection from "@/components/TryItSection/TryItSection";
import useAuth from "@/customHooks/useAuth";
export default function Home() {
  // const [authState, setAuthState] = useAuth();  // Destructure if returning an array
  // console.log(authState);

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
