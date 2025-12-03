"use client";
import { Banner, FreeExpressMarquee, IconBoxSection, CategorySlider, TestimonialSlider, BrandsGrid, StoreLocationSection } from "@/components/sections";
import DiscountCollection from "@/features/home/components/DiscountCollection";
import ProductCard from "@/features/product/components/ProductCard";

export default function HomePage() {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <FreeExpressMarquee />
      <IconBoxSection />
      <CategorySlider />
      <DiscountCollection />
      <ProductCard />
      <div className="px-36 py-24 bg-white">
        <TestimonialSlider />
      </div>
      <BrandsGrid />
      <StoreLocationSection />
    </div>
  );
}
