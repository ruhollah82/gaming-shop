import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

// Animation variants
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

const CategorySliderHeader = ({
  title = "Shop by Category",
  subtitle = "Explore our premium gaming gear collection. From controllers to monitors, find everything you need to elevate your gaming experience.",
  badgeText = "Product Categories",
  badgeIcon = "mdi:tag-multiple",
  className = "text-center bg-gradient-to-br from-gray-50 to-white py-16"
}) => {
  return (
    <motion.div
      className={className}
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={scaleIn}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 mb-6"
        >
          <Icon icon={badgeIcon} className="w-5 h-5 text-blue-600" />
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
            {badgeText}
          </span>
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
          {title}
        </h2>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
};

export default CategorySliderHeader;
