import Link from "next/link";
import { Icon } from "@iconify/react";
import ProductCardInteractive from "./product-card/ProductCardInteractive";

export default function ProductCard({ product }) {
  if (!product) return null;

  const {
    title = "Untitled Product",
    price = "—",
    comparePrice = null,
    handle = "#",
    images = {},
    discountPercent = null,
    badges = [],
    isSoldOut = false,
    rating = 4.5,
    reviewCount = 0,
  } = product;

  const mainImage = images.main || "/images/placeholder.webp";
  const hoverImage = images.hover || mainImage;
  const hasDiscount = Boolean(discountPercent && comparePrice);
  const isNew = badges.includes("new");

  const featureIcons = [
    { icon: "mdi:truck-fast", label: "Free Shipping", color: "text-green-600" },
    { icon: "mdi:shield-check", label: "2Y Warranty", color: "text-blue-600" },
    { icon: "mdi:refresh", label: "30-Day Return", color: "text-purple-600" },
  ];

  const ratingStars = Array.from({ length: 5 }, (_, index) => {
    const isFilled = index < Math.floor(rating);
    return (
      <Icon
        key={`${title}-rating-${index}`}
        icon={isFilled ? "mdi:star" : "mdi:star-outline"}
        className={`w-3 h-3 ${isFilled ? "text-yellow-400" : "text-gray-300"}`}
      />
    );
  });

  return (
    <article className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2">
      <ProductCardInteractive
        title={title}
        mainImage={mainImage}
        hoverImage={hoverImage}
        hasDiscount={hasDiscount}
        discountPercent={discountPercent}
        isNew={isNew}
        isSoldOut={isSoldOut}
        price={price}
        comparePrice={comparePrice}
      />

      <div className="p-4 space-y-3">
        <Link href={`/products/${handle}`} className="block group/title">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 group-hover/title:text-blue-600 transition-colors">
            {title}
          </h3>
        </Link>

        {rating > 0 && (
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">{ratingStars}</div>
            <span className="text-xs text-gray-500">({reviewCount})</span>
          </div>
        )}

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">${price}</span>

          {hasDiscount && (
            <>
              <span className="text-sm text-gray-500 line-through">
                ${comparePrice}
              </span>
              <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                Save ${(comparePrice - price).toFixed(2)}
              </span>
            </>
          )}
        </div>

        <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
          {featureIcons.map((feature) => (
            <div key={feature.label} className="flex items-center gap-1">
              <Icon
                icon={feature.icon}
                className={`w-3 h-3 ${feature.color}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none" />
    </article>
  );
}
