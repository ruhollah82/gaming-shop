import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const CategorySliderNavigation = ({
  title = "Gaming Categories",
  subtitle = "Browse our premium collection",
  prevButtonClass = "category-prev",
  nextButtonClass = "category-next",
  className = "flex justify-between items-center mb-8 relative z-10"
}) => {
  return (
    <div className={className}>
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{subtitle}</p>
      </div>

      <div className="flex gap-3">
        <motion.button
          className={`${prevButtonClass} w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon icon="mdi:chevron-left" className="w-6 h-6" />
        </motion.button>
        <motion.button
          className={`${nextButtonClass} w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon icon="mdi:chevron-right" className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
};

export default CategorySliderNavigation;
