import Footer from "./sections/Footer";
import Separator from "../components/Seprator";
import StartNowSection from "./sections/StartNowSection";
import KickStartSection from "./sections/KickStartSection";

export default function Home() {
  return (
    <>
      <main>
        <KickStartSection />
        <StartNowSection />
      </main>
      <Separator className="bg-black/15" />
      <Footer />
    </>
  );
}
