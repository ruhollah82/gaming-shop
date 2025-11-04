"use client";
import { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  if (!product) return null;

  const {
    title = "Untitled Product",
    price = "—",
    comparePrice = null,
    handle = "#",
    images = {},
    discountPercent = null,
  } = product;

  const mainImage = images.main || "/images/placeholder.webp";
  const hoverImage = images.hover || mainImage;

  return (
    <div
      className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* تصویر محصول */}
      <div className="relative overflow-hidden aspect-square">
        <Image
          src={isHovered ? hoverImage : mainImage}
          alt={title}
          width={400}
          height={400}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />

        {/* آیکون‌ها */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
            <Heart className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
            <ShoppingCart className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        {/* برچسب تخفیف */}
        {discountPercent ? (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
            -{discountPercent}%
          </div>
        ) : null}
      </div>

      {/* اطلاعات محصول */}
      <div className="p-4 text-center">
        <a
          href={`/products/${handle}`}
          className="block text-gray-800 font-medium text-sm hover:text-blue-600 line-clamp-2"
        >
          {title}
        </a>

        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="text-gray-900 font-semibold">{price}</span>
          {comparePrice && (
            <span className="text-gray-400 text-sm line-through">
              {comparePrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
