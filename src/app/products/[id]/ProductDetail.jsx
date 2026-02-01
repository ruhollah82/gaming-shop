// app/products/[id]/ProductDetail.jsx
import { productAPI } from "@/lib/api/products";
import { DeliveryInfoCard, CompareSection, FaqSection, TestimonialsSection } from "@/components/features/product";
import InteractiveProductDetail from "./InteractiveProductDetail";

export default async function ProductDetail({ productId }) {
  // Server-side data fetching from API
  let product;
  try {
    product = await productAPI.getById(productId);
  } catch (error) {
    product = null;
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl text-red-500">⚠️</div>
          <h2 className="text-xl font-semibold text-gray-900 mt-4">
            Product Not Found
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Interactive product detail section */}
      <InteractiveProductDetail product={product} />

      {/* Static sections rendered on server */}
      <DeliveryInfoCard />
      <CompareSection />

      {/* Interactive sections rendered on client */}
      <FaqSection />
      <TestimonialsSection />
    </div>
  );
}
