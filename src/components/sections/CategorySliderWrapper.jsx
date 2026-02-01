import { getSliderCategories } from "@/lib/api";
import CategorySlider from "./CategorySlider";

export default async function CategorySliderWrapper() {
  // Fetch data on server side
  const sliderCategories = await getSliderCategories();

  return <CategorySlider initialCategories={sliderCategories} />;
}
