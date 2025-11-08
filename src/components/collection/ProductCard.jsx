"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Radio, Tooltip } from "antd";
import { Icon } from "@iconify/react";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(
    product.variants?.[0]?.id || ""
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="hdt-card-product hdt-pr-style1 group bg-white rounded-lg overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      style={{ opacity: 1, transform: "translateY(0px)" }}
    >
      <div className="hdt-card-product__wrapper" data-reveal="slide-in">
        {/* Product Media */}
        <div className="hdt-card-product__media relative overflow-hidden aspect-square">
          <a
            href={`/products/${
              product.handle || product.title.toLowerCase().replace(/\s+/g, "-")
            }`}
            className="hdt-card-product__media-wrapp block relative w-full h-full"
          >
            <img
              src={product.image}
              alt={product.title}
              width="628"
              height="628"
              loading="lazy"
              className={`hdt-card-product__media--main absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isHovered && product.hoverImage ? "opacity-0" : "opacity-100"
              }`}
            />
            {product.hoverImage && (
              <img
                src={product.hoverImage}
                alt={product.title}
                width="628"
                height="628"
                loading="lazy"
                className={`hdt-card-product__media--hover absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </a>

          {/* Badges */}
          <div className="hdt-badge__wrapp absolute top-2 left-2 z-10 flex flex-col gap-1 pointer-events-none">
            {product.badges.includes("sold_out") && (
              <span className="hdt-badge hdt-badge__sold_out bg-red-500 text-white px-2 py-1 text-xs rounded">
                Sold out
              </span>
            )}
            {product.badges.includes("on_sale") && product.discountPercent && (
              <span className="hdt-badge hdt-badge__on-sale bg-green-500 text-white px-2 py-1 text-xs rounded">
                -{product.discountPercent}%
              </span>
            )}
          </div>

          {/* Product Action Buttons */}
          <div className="hdt-product-btns absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="flex flex-col gap-2">
              {/* Quick Add Button */}
              <Tooltip title="Quick add" placement="top">
                <button
                  type="button"
                  aria-controls="hdt-quick-add-modal"
                  aria-expanded="false"
                  className="hdt-card-product__btn-ultra hdt-pr_btn bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                >
                  <Icon
                    icon="mdi:cart-outline"
                    className="w-4 h-4 text-gray-700"
                  />
                  <span className="sr-only">Quick add</span>
                </button>
              </Tooltip>

              {/* Wishlist Button */}
              <Tooltip title="Add to Wishlist" placement="top">
                <button
                  className="hdt-card-product__btn-wishlist hdt-pr_btn bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                  tabIndex={0}
                >
                  <Icon
                    icon="mdi:heart-outline"
                    className="w-4 h-4 text-gray-700"
                  />
                  <span className="sr-only">Add to Wishlist</span>
                </button>
              </Tooltip>

              {/* Compare Button */}
              <Tooltip title="Add to Compare" placement="top">
                <button
                  className="hdt-pr_btn hdt-card-product__btn-compare bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                  tabIndex={0}
                >
                  <Icon
                    icon="mdi:scale-balance"
                    className="w-4 h-4 text-gray-700"
                  />
                  <span className="sr-only">Add to Compare</span>
                </button>
              </Tooltip>

              {/* Quick View Button */}
              <Tooltip title="Quick view" placement="top">
                <button
                  type="button"
                  aria-controls="hdt-quick-view-modal"
                  aria-expanded="false"
                  className="hdt-card-product__btn-quick-view hdt-pr_btn bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                >
                  <Icon
                    icon="mdi:eye-outline"
                    className="w-4 h-4 text-gray-700"
                  />
                  <span className="sr-only">Quick view</span>
                </button>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="hdt-card-product__info p-4 text-center">
          <a
            href={`/products/${
              product.handle || product.title.toLowerCase().replace(/\s+/g, "-")
            }`}
            className="hdt-card-product__title block text-lg font-normal text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors"
          >
            {product.title}
          </a>

          <div className="hdt-price-wrapp text-base font-semibold">
            <div className="hdt-price__list">
              <div className="hdt-price">
                <span className="sr-only">Sale price</span>
                <span className="text-gray-900">${product.price}</span>
              </div>
            </div>
          </div>

          {/* Color Variants */}
          {product.variants && product.variants.length > 0 && (
            <div className="hdt-color-list mt-3">
              <Radio.Group
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="hdt-color-list hdt-color-list-style-1 flex justify-center gap-2"
              >
                {product.variants.map((variant) => (
                  <Tooltip
                    key={variant.id}
                    title={variant.colorName}
                    placement="top"
                  >
                    <Radio.Button
                      value={variant.id}
                      className="hdt-color-list-item"
                    >
                      <label
                        className={`hdt-color-list-color rounded-full w-6 h-6 border border-gray-300 cursor-pointer flex items-center justify-center ${
                          variant.colorName?.toLowerCase() === "white"
                            ? "bg-white"
                            : ""
                        }`}
                        style={{
                          backgroundColor:
                            variant.colorName?.toLowerCase() !== "white"
                              ? variant.color
                              : undefined,
                        }}
                      >
                        <span
                          className="hdt-color-bg rounded-full w-4 h-4 block"
                          style={{ backgroundColor: variant.color }}
                        />
                        <span className="sr-only">{variant.colorName}</span>
                      </label>
                    </Radio.Button>
                  </Tooltip>
                ))}
              </Radio.Group>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
