// components/product-detail/ProductDetailPage.jsx
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { message } from "antd";
import { motion } from "framer-motion";
import { products } from "@/components/collection/data/products";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import DeliveryInfoCard from "./DeliveryInfoCard";
import TrustBadgeCard from "./TrustBadgeCard";
import AskQuestionModal from "./AskQuestionModal";
import ShareModal from "./ShareModal";
import CompareSection from "./CompareSection";
import FaqSection from "./FaqSection";
import TestimonialsSection from "./TestimonialsSection";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id;

  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAskQuestionModalOpen, setIsAskQuestionModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productId) {
      setTimeout(() => {
        const found = products.find((p) => p.id === productId);
        if (found) {
          setProduct(found);
          setSelectedVariant(found.variants?.[0] || null);
        } else {
          message.error("Product not found");
          router.push("/");
        }
        setLoading(false);
      }, 500);
    }
  }, [productId, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="loading loading-spinner loading-lg text-blue-600" />
          <p className="text-gray-600 mt-4">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-3xl text-red-500">⚠️</div>
          <h2 className="text-xl font-semibold text-gray-900 mt-4">
            Product Not Found
          </h2>
          <button
            onClick={() => router.push("/")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Extract images
  const images = [
    product.image,
    ...(product.hoverImage ? [product.hoverImage] : []),
    ...(product.variants?.map((v) => v.image) || []),
  ].filter((img, i, self) => img && self.indexOf(img) === i);

  // Cart logic
  const handleAddToCart = (quantity, selectedVariant) => {
    if (product.isSoldOut || product.badges.includes("sold_out")) {
      message.warning("This product is sold out");
      return;
    }

    const item = { ...product, selectedVariant, quantity };
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.findIndex(
      (i) =>
        i.id === product.id && i.selectedVariant?.id === selectedVariant?.id
    );

    if (existing > -1) {
      cart[existing].quantity += quantity;
    } else {
      cart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    message.success(`Added ${quantity} ${product.title} to cart`);
  };

  const handleBuyNow = () => {
    handleAddToCart(quantity, selectedVariant);
    router.push("/cart");
  };

  const handleVariantChange = (variantId) => {
    const variant = product.variants?.find((v) => v.id === variantId);
    setSelectedVariant(variant);
    if (variant?.image) {
      const idx = images.findIndex((img) => img === variant.image);
      if (idx !== -1) setSelectedImage(idx);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            ← Back to Products
          </button>
        </nav>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ProductImages
            images={images}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            product={product}
          />

          <ProductInfo
            product={product}
            selectedVariant={selectedVariant}
            quantity={quantity}
            setQuantity={setQuantity}
            onVariantChange={handleVariantChange}
            onAddToCart={() => handleAddToCart(quantity, selectedVariant)}
            onBuyNow={handleBuyNow}
            onAskQuestion={() => setIsAskQuestionModalOpen(true)}
            onShare={() => setIsShareModalOpen(true)}
          />
        </motion.div>
      </div>
      <CompareSection />
      <FaqSection />
      <TestimonialsSection />
    </div>
  );
}
