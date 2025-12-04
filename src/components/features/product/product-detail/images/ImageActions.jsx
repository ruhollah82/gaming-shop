"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function ImageActions({ onFullscreenClick, onFavoriteClick }) {
  return (
    <div className="absolute top-4 right-4 flex flex-col gap-2">
      <motion.button
        className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onFullscreenClick}
      >
        <Icon icon="mdi:fullscreen" className="w-5 h-5 text-gray-700" />
      </motion.button>

      <motion.button
        className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onFavoriteClick}
      >
        <Icon
          icon="mdi:heart-outline"
          className="w-5 h-5 text-gray-700"
        />
      </motion.button>
    </div>
  );
}
