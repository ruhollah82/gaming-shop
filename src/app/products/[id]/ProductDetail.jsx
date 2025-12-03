// app/products/[id]/ProductDetail.jsx
import { products } from "@/features/collections/data/products";
import { DeliveryInfoCard, CompareSection } from "@/components/features/product";
import InteractiveProductDetail from "./InteractiveProductDetail";
import FaqSection from "@/components/features/product/product-detail/FaqSection";
import TestimonialsSection from "@/components/features/product/product-detail/TestimonialsSection";

export default function ProductDetail({ productId }) {
  // Server-side data validation
  const product = products.find((p) => p.id === productId);

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
