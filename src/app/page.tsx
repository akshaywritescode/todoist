import Footer from "./sections/Footer";
import Separator from "../components/Seprator";
import StartNowSection from "./sections/StartNowSection";

export default function Home() {
  return (
    <>
      <main>
        <StartNowSection />
      </main>
      <Separator className="bg-black/15" />
      <Footer />
    </>
  );
}
