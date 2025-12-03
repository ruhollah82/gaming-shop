"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DiscountCollectionProductCard({ product }) {
  const {
    handle,
    title,
    price,
    comparePrice,
    discountPercent,
    images = {},
    colors = [],
  } = product;

  const defaultImage = images.main || "/images/placeholder.webp";
  const [currentImage, setCurrentImage] = useState(defaultImage);

  const initialColor = useMemo(() => colors[0]?.id ?? null, [colors]);
  const [selectedColor, setSelectedColor] = useState(initialColor);

  const handleColorChange = (colorId, image) => {
    setSelectedColor(colorId);
    setCurrentImage(image || defaultImage);
  };

  return (
    <article className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative group">
        <Link href={`/products/${handle}`}>
          <Image
            src={currentImage}
            alt={title}
            width={400}
            height={400}
            className="object-cover w-full aspect-square transition-transform duration-300 group-hover:scale-105"
            priority={false}
          />
          <span className="sr-only">View {title}</span>
        </Link>

        {discountPercent && (
          <span className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 text-sm rounded-md font-semibold shadow">
            -{discountPercent}%
          </span>
        )}
      </div>

      <div className="p-4 text-center space-y-3">
        <Link
          href={`/products/${handle}`}
          className="block text-gray-900 font-medium text-base line-clamp-2 hover:text-blue-600 transition-colors"
        >
          {title}
        </Link>

        <div className="text-gray-900 font-semibold">
          {price}
          {comparePrice && (
            <span className="text-gray-400 line-through ml-2 text-sm">
              {comparePrice}
            </span>
          )}
        </div>

        {colors.length > 0 && (
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
      </div>
    </article>
  );
}

