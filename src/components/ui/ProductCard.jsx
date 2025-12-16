"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import CollectionProductCardActions from "@/features/collections/components/product-card/CollectionProductCardActions";
import CollectionProductVariantSelector from "@/features/collections/components/product-card/CollectionProductVariantSelector";

const ProductCard = ({
  product,
  variant = "default", // "default" | "discount" | "collection"
  showActions = true,
  showVariants = true,
  className = "",
  imageClassName = "",
  ...props
}) => {
  if (!product) return null;

  // Handle different data structures
  const {
    id,
    handle,
    title,
    price,
    comparePrice,
    discountPercent,
    image,
    hoverImage,
    images = {},
    badges = [],
    variants: productVariants = [],
    colors = [],
  } = product;

  // Determine product identifier and link
  const productId = id || handle;
  const productLink = `/products/${productId}`;

  // Handle image sources (support both data structures)
  const processedImage = image?.startsWith('//') ? `https:${image}` : (image || images.main || "/images/placeholder.webp");
  const processedHoverImage = hoverImage?.startsWith('//') ? `https:${hoverImage}` : hoverImage;

  // State for color selection (discount variant)
  const [currentImage, setCurrentImage] = useState(processedImage);
  const initialColor = useMemo(() => colors[0]?.id ?? null, [colors]);
  const [selectedColor, setSelectedColor] = useState(initialColor);

  const isSoldOut = badges.includes("sold_out");
  const hasDiscount = Boolean(comparePrice && discountPercent);
  const savings = hasDiscount && Number.isFinite(comparePrice - price)
    ? (comparePrice - price).toFixed(2)
    : null;

  const handleColorChange = (colorId, image) => {
    setSelectedColor(colorId);
    setCurrentImage(image || processedImage);
  };

  // Different styling based on variant
  const cardClasses = {
    default: `group bg-white rounded-lg overflow-hidden relative border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isSoldOut ? "opacity-75" : ""}`,
    discount: "bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300",
    collection: `group bg-white rounded-lg overflow-hidden relative border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${isSoldOut ? "opacity-75" : ""}`,
  };

  const imageClasses = {
    default: `object-cover transition-opacity duration-300 ${processedHoverImage ? "opacity-100 group-hover:opacity-0" : ""}`,
    discount: "object-cover w-full aspect-square transition-transform duration-300 group-hover:scale-105",
    collection: `object-cover transition-opacity duration-300 ${processedHoverImage ? "opacity-100 group-hover:opacity-0" : ""}`,
  };

  return (
    <motion.article
      className={`${cardClasses[variant]} ${className}`}
      whileHover={{ y: variant === "discount" ? 0 : -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      {...props}
    >
      <div className="relative group">
        <Link
          href={productLink}
          className={`block relative ${variant === "discount" ? "aspect-square overflow-hidden" : "aspect-square overflow-hidden"}`}
        >
          <Image
            src={variant === "discount" ? currentImage : processedImage}
            alt={title}
            fill
            sizes={variant === "discount" ? "(max-width: 768px) 50vw, 33vw" : "(max-width: 768px) 50vw, 25vw"}
            className={`${imageClasses[variant]} ${imageClassName}`}
            priority={false}
          />

          {/* Hover image for non-discount variants */}
          {processedHoverImage && variant !== "discount" && (
            <Image
              src={processedHoverImage}
              alt={`${title} alternate`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              priority={false}
            />
          )}

          {/* Sold out overlay */}
          {isSoldOut && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-sm font-semibold uppercase tracking-wider text-white">
              Sold Out
            </div>
          )}

          <span className="sr-only">View {title}</span>
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2 pointer-events-none">
          {hasDiscount && (
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-red-500 text-white text-xs font-semibold shadow">
              -{discountPercent}%
            </span>
          )}

          {isSoldOut && variant !== "discount" && (
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-gray-700 text-white text-xs font-semibold shadow">
              Sold Out
            </span>
          )}
        </div>

        {/* Actions (only for collection/default variants) */}
        {showActions && (variant === "collection" || variant === "default") && (
          <CollectionProductCardActions productId={productId} isSoldOut={isSoldOut} />
        )}
      </div>

      <div className="p-4 text-center space-y-3">
        <Link
          href={productLink}
          className={`block line-clamp-2 hover:text-blue-600 transition-colors ${
            variant === "discount" ? "text-gray-900 font-medium text-base" : "text-lg font-medium text-gray-900"
          }`}
        >
          {title}
        </Link>

        {/* Pricing */}
        <div className={`flex items-center justify-center gap-2 ${
          variant === "discount" ? "text-gray-900 font-semibold" : "text-base font-semibold"
        }`}>
          {hasDiscount && (
            <span className={`text-gray-500 line-through ${variant === "discount" ? "text-sm" : "text-sm"}`}>
              ${comparePrice}
            </span>
          )}

          <span className={`text-lg ${hasDiscount ? "text-red-600" : ""}`}>
            ${price}
          </span>

          {savings && variant !== "discount" && (
            <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
              Save ${savings}
            </span>
          )}
        </div>

        {/* Color selector (only for discount variant) */}
        {colors.length > 0 && variant === "discount" && (
          <div className="flex justify-center gap-2">
            {colors.map((color) => (
              <button
                key={color.id}
                type="button"
                onClick={() => handleColorChange(color.id, color.image)}
                className={`w-5 h-5 rounded-full border-2 transition-colors ${
                  selectedColor === color.id
                    ? "border-gray-800"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                style={{ backgroundColor: color.value }}
              >
                <span className="sr-only">{color.name}</span>
              </button>
            ))}
          </div>
        )}

        {/* Variants selector (only for collection/default variants) */}
        {showVariants && productVariants.length > 0 && (variant === "collection" || variant === "default") && (
          <CollectionProductVariantSelector
            variants={productVariants}
            disabled={isSoldOut}
          />
        )}
      </div>
    </motion.article>
  );
};

export default ProductCard;
