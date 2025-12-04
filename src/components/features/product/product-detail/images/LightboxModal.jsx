"use client";

import { motion } from "framer-motion";
import { Modal } from "antd";
import { Icon } from "@iconify/react";

export default function LightboxModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
  onSetImage,
  productTitle
}) {
  if (!isOpen || !images.length) return null;

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
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
          key={currentIndex}
          src={images[currentIndex]}
          alt={productTitle}
          className="w-full h-full object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Navigation arrows */}
        <motion.button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
          onClick={() => onNavigate("prev")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon icon="mdi:chevron-left" className="w-6 h-6" />
        </motion.button>

        <motion.button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
          onClick={() => onNavigate("next")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon icon="mdi:chevron-right" className="w-6 h-6" />
        </motion.button>

        {/* Close button */}
        <motion.button
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon icon="mdi:close" className="w-5 h-5" />
        </motion.button>

        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Thumbnail strip */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                currentIndex === idx
                  ? "border-white shadow-lg"
                  : "border-white/30 hover:border-white/60"
              }`}
              onClick={() => onSetImage(idx)}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
}
