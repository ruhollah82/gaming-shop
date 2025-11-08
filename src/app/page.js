"use client";
import GameStoreBanner from "@/components/Banner/Banner";
import MarqueeSection from "@/components/freeExpress";
import IconBoxSection from "@/components/iconBoxSection";
import CategorySlider from "@/components/CategorySlider";
import DiscountCollection from "@/components/DiscountCollection";
import ProductCard from "@/components/ProductCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import BrandsGrid from "@/components/BrandsGrid";
import MapSection from "@/components/MapSection";

export default function HomePage() {
  return (
    <div>
      <section>
        <GameStoreBanner />
      </section>
      <MarqueeSection />
      <IconBoxSection />
      <CategorySlider />
      <DiscountCollection />
      <ProductCard />
      <div className="px-36 py-24 bg-white">
        <TestimonialSlider />
      </div>
      <BrandsGrid />
      <MapSection />
    </div>
  );
}
