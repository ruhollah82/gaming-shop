"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { message } from "antd";

export default function ProductCardInteractive({
  title,
  mainImage,
  hoverImage,
  hasDiscount,
  discountPercent,
  isNew,
  isSoldOut,
  price,
  comparePrice,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsLoading(true);
    message.success(`Added ${title} to cart`);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleAddToWishlist = (event) => {
    event.preventDefault();
    event.stopPropagation();
    message.info("Added to wishlist");
  };

  const handleQuickView = (event) => {
    event.preventDefault();
    event.stopPropagation();
    message.info("Quick view opened");
  };

  return (
    <div
      className="relative overflow-hidden aspect-square bg-gradient-to-br from-gray-50 to-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
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
  );
}

