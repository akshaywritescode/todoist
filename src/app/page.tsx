import Footer from "./sections/Footer";
import Separator from "../components/Seprator";
import StartNowSection from "./sections/StartNowSection";
import KickStartSection from "./sections/KickStartSection";
import VideoExampleSection from "./sections/VideoExampleSection";
import HeroSection from "./sections/HeroSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <VideoExampleSection />
        <KickStartSection />
        <StartNowSection />
      </main>
      <Separator className="bg-black/15" />
      <Footer />
    </>
  );
}
