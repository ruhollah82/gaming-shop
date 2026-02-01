// SSR version - fetches data on server
import { uiAPI } from "@/lib/api/ui";
import BrandsGridClient from "./BrandsGridClient";

export default async function BrandsGrid() {
  // Fetch brands on server
  let brands = [];
  try {
    brands = await uiAPI.getBrands();
  } catch (error) {
    // If API fails (e.g., JSON server not running), pass empty array
    // Client component will handle fetching on client side
    console.warn("Failed to fetch brands on server:", error.message);
  }
  
  // Pass initial data to client component
  return <BrandsGridClient initialBrands={brands} />;
}
