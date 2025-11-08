// components/product-detail/ProductImages.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Modal } from "antd";
import { Icon } from "@iconify/react";

export default function ProductImages({
  images,
  selectedImage,
  setSelectedImage,
  product,
}) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const hasDiscount = product.comparePrice && product.discountPercent;
  const isSoldOut = product.isSoldOut || product.badges.includes("sold_out");
  const isOnSale = product.badges.includes("on_sale");

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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const navigateLightbox = (direction) => {
    if (direction === "next") {
      setLightboxIndex((prev) => (prev + 1) % images.length);
    } else {
      setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="space-y-6">
      {/* Main Image Container */}
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
            src={images[selectedImage]}
            alt={product.title}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onClick={() => openLightbox(selectedImage)}
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
          <div className="absolute top-4 left-4 flex flex-col gap-3">
            <AnimatePresence>
              {hasDiscount && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white text-sm font-bold rounded-full shadow-lg">
                    <Icon icon="mdi:tag" className="w-4 h-4 mr-2" />
                    {product.discountPercent}% OFF
                  </span>
                </motion.div>
              )}

              {isSoldOut && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                >
                  <span className="inline-flex items-center px-4 py-2 bg-gray-600 text-white text-sm font-bold rounded-full shadow-lg">
                    <Icon icon="mdi:clock-outline" className="w-4 h-4 mr-2" />
                    Sold Out
                  </span>
                </motion.div>
              )}

              {isOnSale && !hasDiscount && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                >
                  <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-bold rounded-full shadow-lg">
                    <Icon icon="mdi:fire" className="w-4 h-4 mr-2" />
                    On Sale
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Image Actions */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <motion.button
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => openLightbox(selectedImage)}
            >
              <Icon icon="mdi:fullscreen" className="w-5 h-5 text-gray-700" />
            </motion.button>

            <motion.button
              className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon
                icon="mdi:heart-outline"
                className="w-5 h-5 text-gray-700"
              />
            </motion.button>
          </div>

          {/* Image Counter */}
          {images.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm"
            >
              {selectedImage + 1} / {images.length}
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
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
                onClick={() => setSelectedImage(idx)}
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
                    alt={`${product.title} view ${idx + 1}`}
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
      )}

      {/* Image Features */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {[
          {
            icon: "mdi:rotate-360",
            title: "360° View",
            description: "Interactive product rotation",
          },
          {
            icon: "mdi:zoom-in",
            title: "Zoom & Pan",
            description: "See every detail clearly",
          },
          {
            icon: "mdi:video-outline",
            title: "Video Tour",
            description: "Watch product in action",
          },
        ].map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={scaleIn}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all">
              <Icon icon={feature.icon} className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-xs">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <Modal
        open={isLightboxOpen}
        onCancel={() => setIsLightboxOpen(false)}
        footer={null}
        width="90vw"
        style={{ maxWidth: "1200px" }}
        className="lightbox-modal"
        styles={{
          body: { padding: 0, background: "black" },
          content: { background: "black", borderRadius: "20px" },
        }}
      >
        <div className="relative aspect-video bg-black rounded-2xl overflow-hidden">
          {/* Main lightbox image */}
          <motion.img
            key={lightboxIndex}
            src={images[lightboxIndex]}
            alt={product.title}
            className="w-full h-full object-contain"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Navigation arrows */}
          <motion.button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
            onClick={() => navigateLightbox("prev")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon icon="mdi:chevron-left" className="w-6 h-6" />
          </motion.button>

          <motion.button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
            onClick={() => navigateLightbox("next")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon icon="mdi:chevron-right" className="w-6 h-6" />
          </motion.button>

          {/* Close button */}
          <motion.button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
            onClick={() => setIsLightboxOpen(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon icon="mdi:close" className="w-5 h-5" />
          </motion.button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  lightboxIndex === idx
                    ? "border-white shadow-lg"
                    : "border-white/30 hover:border-white/60"
                }`}
                onClick={() => setLightboxIndex(idx)}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}
