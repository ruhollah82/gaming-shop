// Interactive product detail component - handles state and user interactions
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { message } from "antd";
import { motion } from "framer-motion";
import {
  ProductImages,
  ProductInfo,
} from "@/components/features/product";
import { AskQuestionModal, ShareModal } from "@/components/ui";
import ProductBreadcrumb from "@/components/features/product/product-detail/shared/ProductBreadcrumb";

export default function InteractiveProductDetail({ product }) {
  const router = useRouter();

  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAskQuestionModalOpen, setIsAskQuestionModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

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
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <ProductBreadcrumb />

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

      {/* Modals */}
      <AskQuestionModal
        open={isAskQuestionModalOpen}
        onClose={() => setIsAskQuestionModalOpen(false)}
        productTitle={product.title}
      />
      <ShareModal
        open={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        product={product}
      />
    </>
  );
}
