"use client";
import GameStoreBanner from "@/components/Banner/Banner";
import MarqueeSection from "@/components/freeExpress";
import IconBoxSection from "@/components/iconBoxSection";
import CategorySlider from "@/components/CategorySlider";
import DiscountCollection from "@/components/DiscountCollection";
import ProductCard from "@/components/ProductCard";
import TestimonialSlider from "@/components/TestimonialSlider";

export default function HomePage() {
  return (
    <div className=" py-8">
      <section>
        <GameStoreBanner />
      </section>
      <MarqueeSection />
      <IconBoxSection />
      <CategorySlider />
      <DiscountCollection />
      <ProductCard />
      <TestimonialSlider />
    </div>
  );
}
