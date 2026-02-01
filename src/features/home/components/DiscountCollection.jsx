import DiscountCollectionCountdown from "./discount-collection/DiscountCollectionCountdown";
import DiscountCollectionCarousel from "./discount-collection/DiscountCollectionCarousel";
import { getProducts } from "@/lib/api";

export default async function DiscountCollection() {
  // Fetch products from API
  const products = await getProducts();

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
          <h3 className="text-3xl font-bold">Hot Deals</h3>
          <DiscountCollectionCountdown targetDate="2030-04-19T12:00:00" />
        </div>

        <DiscountCollectionCarousel
          products={products.filter((p) => !p.isSoldOut)}
        />
      </div>
    </section>
  );
}
