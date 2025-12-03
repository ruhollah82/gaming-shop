import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

// Note: This component uses framer-motion animations but renders static content
// In Next.js 13+ App Router, this can be a server component since motion handles the client-side animations

export default function ProductBadges({ product }) {
  const hasDiscount = product.comparePrice && product.discountPercent;
  const isSoldOut = product.isSoldOut || product.badges.includes("sold_out");
  const isOnSale = product.badges.includes("on_sale");

  return (
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
  );
}
