"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeInUp } from "../shared/animations";
import ProductBadges from "./ProductBadges";
import ImageActions from "./ImageActions";

export default function ProductImageMain({
  image,
  product,
  selectedImage,
  imagesLength,
  onFullscreenClick,
  onFavoriteClick
}) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="relative group"
    >
      <motion.div
        className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-white shadow-xl border border-gray-100 relative cursor-zoom-in"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.img
          src={image}
          alt={product.title}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onClick={onFullscreenClick}
        />

        {/* Zoom overlay */}
        <AnimatePresence>
          {isZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
              >
                <Icon
                  icon="mdi:magnify-plus"
                  className="w-6 h-6 text-gray-700"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Badges */}
        <ProductBadges product={product} />

        {/* Image Actions */}
        <ImageActions
          onFullscreenClick={onFullscreenClick}
          onFavoriteClick={onFavoriteClick}
        />

        {/* Image Counter */}
        {imagesLength > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm"
          >
            {selectedImage + 1} / {imagesLength}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
