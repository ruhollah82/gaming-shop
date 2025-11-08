"use client";

import { useState } from "react";
import { Tooltip, Tag, Button } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(
    product.variants?.[0]?.id || ""
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const isSoldOut = product.badges.includes("sold_out");
  const hasDiscount = product.comparePrice && product.discountPercent;

  return (
    <motion.div
      className={`hdt-card-product hdt-pr-style1 group bg-white rounded-lg overflow-hidden relative ${
        isSoldOut ? "hdt-pr-sold_out opacity-75" : ""
      }`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      style={{ opacity: 1, transform: "translateY(0px)" }}
      onMouseEnter={() => !isSoldOut && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sold Out Overlay */}
      <AnimatePresence>
        {isSoldOut && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[rgba(124,124,124,0.3)] z-20 flex items-center justify-center"
          >
            <motion.div
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
              className="bg-white text-black rounded-full px-6 py-4 text-sm font-semibold uppercase tracking-wider transform rotate-0"
            >
              Sold Out
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hdt-card-product__wrapper" data-reveal="slide-in">
        {/* Product Media */}
        <div className="hdt-card-product__media relative overflow-hidden aspect-square">
          <a
            href={`/products/${product.id}`}
            className="hdt-card-product__media-wrapp block relative w-full h-full"
          >
            <motion.img
              src={product.image}
              alt={product.title}
              width="628"
              height="628"
              loading="lazy"
              className={`hdt-card-product__media--main absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isHovered && product.hoverImage ? "opacity-0" : "opacity-100"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            {product.hoverImage && (
              <motion.img
                src={product.hoverImage}
                alt={product.title}
                width="628"
                height="628"
                loading="lazy"
                className={`hdt-card-product__media--hover absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </a>

          {/* Badges */}
          <div className="hdt-badge__wrapp absolute top-3 left-3 z-10 flex flex-col gap-2 pointer-events-none">
            <AnimatePresence>
              {hasDiscount && (
                <motion.div
                  variants={badgeVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Tag
                    color="#ff4d4f"
                    className="font-semibold text-xs px-2 py-1 border-0"
                  >
                    -{product.discountPercent}%
                  </Tag>
                </motion.div>
              )}

              {isSoldOut && (
                <motion.div
                  variants={badgeVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Tag
                    color="#8c8c8c"
                    className="font-semibold text-xs px-2 py-1 border-0"
                  >
                    Sold Out
                  </Tag>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Product Action Buttons */}
          <motion.div
            className="hdt-product-btns absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
            variants={buttonVariants}
          >
            <div className="flex flex-col gap-2">
              {/* View Product Button - Always visible for sold out items but disabled */}
              <Tooltip
                title={isSoldOut ? "Out of stock" : "View product"}
                placement="left"
              >
                <motion.a
                  href={`/products/${product.id}`}
                  className={`hdt-card-product__btn-ultra hdt-pr_btn bg-white p-3 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center ${
                    isSoldOut
                      ? "opacity-50 cursor-not-allowed grayscale"
                      : "hover:bg-gray-50 hover:shadow-xl hover:scale-110"
                  }`}
                  whileHover={!isSoldOut ? { scale: 1.1 } : {}}
                  whileTap={!isSoldOut ? { scale: 0.95 } : {}}
                >
                  <Icon
                    icon={isSoldOut ? "mdi:eye-outline" : "mdi:cart-outline"}
                    className="w-4 h-4 text-gray-700"
                  />
                  <span className="sr-only">
                    {isSoldOut ? "View product" : "Quick add"}
                  </span>
                </motion.a>
              </Tooltip>

              {/* Wishlist Button */}
              <Tooltip title="Add to Wishlist" placement="left">
                <motion.button
                  className="hdt-card-product__btn-wishlist hdt-pr_btn bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSoldOut}
                >
                  <Icon
                    icon="mdi:heart-outline"
                    className="w-4 h-4 text-gray-700"
                  />
                  <span className="sr-only">Add to Wishlist</span>
                </motion.button>
              </Tooltip>

              {/* Compare Button */}
              <Tooltip title="Add to Compare" placement="left">
                <motion.button
                  className="hdt-pr_btn hdt-card-product__btn-compare bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSoldOut}
                >
                  <Icon
                    icon="mdi:scale-balance"
                    className="w-4 h-4 text-gray-700"
                  />
                  <span className="sr-only">Add to Compare</span>
                </motion.button>
              </Tooltip>

              {/* Quick View Button */}
              <Tooltip title="Quick view" placement="left">
                <motion.button
                  type="button"
                  aria-controls="hdt-quick-view-modal"
                  aria-expanded="false"
                  className="hdt-card-product__btn-quick-view hdt-pr_btn bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSoldOut}
                >
                  <Icon
                    icon="mdi:eye-outline"
                    className="w-4 h-4 text-gray-700"
                  />
                  <span className="sr-only">Quick view</span>
                </motion.button>
              </Tooltip>
            </div>
          </motion.div>
        </div>

        {/* Product Info */}
        <div className="hdt-card-product__info p-4 text-center">
          <a
            href={`/products/${product.id}`}
            className="hdt-card-product__title block text-lg font-normal text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors"
          >
            {product.title}
          </a>

          <div className="hdt-price-wrapp text-base font-semibold">
            <div className="hdt-price__list flex items-center justify-center gap-2">
              {hasDiscount && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="hdt-compare-at-price text-gray-500 line-through text-sm"
                >
                  ${product.comparePrice}
                </motion.span>
              )}
              <motion.span
                className={`hdt-price ${
                  hasDiscount ? "text-red-600" : "text-gray-900"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                ${product.price}
              </motion.span>

              {hasDiscount && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <Tag color="red" className="text-xs font-bold border-0">
                    Save ${(product.comparePrice - product.price).toFixed(2)}
                  </Tag>
                </motion.div>
              )}
            </div>
          </div>

          {/* Enhanced Color Variants */}
          {product.variants && product.variants.length > 0 && (
            <motion.div
              className="hdt-color-list mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex justify-center gap-1">
                {product.variants.map((variant, index) => (
                  <Tooltip
                    key={variant.id}
                    title={variant.colorName}
                    placement="top"
                  >
                    <motion.button
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      onClick={() => !isSoldOut && setSelectedColor(variant.id)}
                      className={`relative p-0.5 rounded-full border-2 transition-all duration-200 ${
                        selectedColor === variant.id
                          ? "border-blue-500 ring-2 ring-blue-200"
                          : "border-gray-300 hover:border-gray-400"
                      } ${
                        isSoldOut
                          ? "opacity-50 cursor-not-allowed"
                          : "cursor-pointer"
                      }`}
                      disabled={isSoldOut}
                    >
                      <div
                        className="w-6 h-6 rounded-full border border-gray-200 shadow-sm"
                        style={{ backgroundColor: variant.color }}
                      >
                        {selectedColor === variant.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <Icon
                              icon="mdi:check"
                              className="w-3 h-3 text-white drop-shadow-md"
                            />
                          </motion.div>
                        )}
                      </div>
                      <span className="sr-only">{variant.colorName}</span>
                    </motion.button>
                  </Tooltip>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
