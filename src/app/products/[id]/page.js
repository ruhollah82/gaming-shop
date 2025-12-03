// app/products/[id]/page.jsx
import ProductDetail from "./ProductDetail";
import { CompareSection } from "@/components/features/product";

export default function ProductDetailPage() {
  return (
    <>
      <ProductDetail />
      <CompareSection />
    </>
  );
}
