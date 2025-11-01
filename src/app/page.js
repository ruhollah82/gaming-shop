import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import GameStoreBanner from "@/components/Banner/Banner";
import MarqueeSection from "@/components/freeExpress";
import IconBoxSection from "@/components/iconBoxSection";

export default function HomePage() {
  return (
    <div className="px-4 py-8">
      <section>
        <GameStoreBanner />
      </section>
      <MarqueeSection />
      <IconBoxSection />
    </div>
  );
}
