import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import GameStoreBanner from "@/components/Banner/Banner";

export default function HomePage() {
  return (
    <div className="px-4 py-8">
      <section className="mb-10">
        <GameStoreBanner />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        {/* <ProductList /> */}
      </section>
    </div>
  );
}
