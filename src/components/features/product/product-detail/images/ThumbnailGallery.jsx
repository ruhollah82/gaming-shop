"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { staggerContainer, scaleIn } from "../shared/animations";

export default function ThumbnailGallery({
  images,
  selectedImage,
  onThumbnailClick,
  productTitle
}) {
  if (images.length <= 1) return null;

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      <div className="flex items-center justify-between">
        <label className="text-lg font-semibold text-gray-900">
          Product Gallery
        </label>
        <span className="text-sm text-gray-500 font-medium">
          {images.length} images
        </span>
      </div>

      <div className="flex gap-3 overflow-x-auto py-2 px-1">
        {images.map((img, idx) => (
          <motion.button
            key={idx}
            variants={scaleIn}
            className={`flex-shrink-0 relative group/thumbnail ${
              selectedImage === idx
                ? "ring-3 ring-blue-500 ring-offset-2"
                : "opacity-70 hover:opacity-100"
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onThumbnailClick(idx)}
          >
            <div
              className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                selectedImage === idx
                  ? "border-blue-500 shadow-lg shadow-blue-500/25"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <img
                src={img}
                alt={`${productTitle} view ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Selected indicator */}
            {selectedImage === idx && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Icon icon="mdi:check" className="w-3 h-3 text-white" />
              </motion.div>
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover/thumbnail:bg-black/10 rounded-xl transition-all duration-300" />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
