import {
  Banner,
  FreeExpressMarquee,
  IconBoxSection,
  CategorySlider,
  TestimonialSlider,
  BrandsGrid,
  StoreLocationSection,
} from "@/components/sections";
import DiscountCollection from "@/features/home/components/DiscountCollection";

export default async function HomePage() {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <FreeExpressMarquee />
      <IconBoxSection />
      <CategorySlider />
      <DiscountCollection />
      <div className="px-4 sm:px-8 lg:px-12 xl:px-36 py-8 sm:py-12 lg:py-16 xl:py-24 bg-white">
        <TestimonialSlider />
      </div>
      <BrandsGrid />
      <StoreLocationSection />
    </div>
  );
}

