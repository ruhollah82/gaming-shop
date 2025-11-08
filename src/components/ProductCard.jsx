"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button, message } from "antd";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
  const hasDiscount = discountPercent && comparePrice;
  const isNew = badges.includes("new");

  // Animation variants matching ProductInfo
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, type: "spring", stiffness: 200 },
    },
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
    message.success(`Added ${title} to cart`);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    message.info("Added to wishlist");
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    message.info("Quick view opened");
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-gray-50 to-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={isHovered ? "hover" : "main"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <Image
              src={isHovered ? hoverImage : mainImage}
              alt={title}
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        </AnimatePresence>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <AnimatePresence>
            {hasDiscount && (
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-red-500 to-pink-600 text-white text-xs font-bold rounded-full shadow-lg"
              >
                <Icon icon="mdi:tag" className="w-3 h-3 mr-1" />-
                {discountPercent}%
              </motion.span>
            )}

            {isNew && (
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold rounded-full shadow-lg"
              >
                <Icon icon="mdi:star" className="w-3 h-3 mr-1" />
                New
              </motion.span>
            )}

            {isSoldOut && (
              <motion.span
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-3 py-1 bg-gray-600 text-white text-xs font-bold rounded-full shadow-lg"
              >
                <Icon icon="mdi:clock-outline" className="w-3 h-3 mr-1" />
                Sold Out
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <motion.button
            onClick={handleAddToWishlist}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all opacity-0 group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Icon icon="mdi:heart-outline" className="w-4 h-4 text-gray-700" />
          </motion.button>

          <motion.button
            onClick={handleQuickView}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all opacity-0 group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Icon icon="mdi:eye-outline" className="w-4 h-4 text-gray-700" />
          </motion.button>
        </div>

        {/* Add to Cart Button Overlay */}
        <AnimatePresence>
          {isHovered && !isSoldOut && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 right-4"
            >
              <motion.button
                onClick={handleAddToCart}
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Icon icon="mdi:loading" className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <>
                    <Icon icon="mdi:cart-plus" className="w-5 h-5" />
                    Add to Cart
                  </>
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sold Out Overlay */}
        {isSoldOut && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-2xl">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl font-semibold text-gray-900 shadow-lg"
            >
              Out of Stock
            </motion.span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <a href={`/products/${handle}`} className="block group/title">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 group-hover/title:text-blue-600 transition-colors">
            {title}
          </h3>
        </a>

        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  icon={
                    i < Math.floor(rating) ? "mdi:star" : "mdi:star-outline"
                  }
                  className={`w-3 h-3 ${
                    i < rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">({reviewCount})</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">${price}</span>

          {hasDiscount && (
            <>
              <span className="text-sm text-gray-500 line-through">
                ${comparePrice}
              </span>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full"
              >
                Save ${(comparePrice - price).toFixed(2)}
              </motion.span>
            </>
          )}
        </div>

        {/* Features */}
        <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
          {[
            {
              icon: "mdi:truck-fast",
              label: "Free Shipping",
              color: "text-green-600",
            },
            {
              icon: "mdi:shield-check",
              label: "2Y Warranty",
              color: "text-blue-600",
            },
            {
              icon: "mdi:refresh",
              label: "30-Day Return",
              color: "text-purple-600",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center gap-1"
            >
              <Icon
                icon={feature.icon}
                className={`w-3 h-3 ${feature.color}`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hover Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
}
