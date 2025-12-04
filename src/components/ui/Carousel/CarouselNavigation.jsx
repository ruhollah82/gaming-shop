import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const CarouselNavigation = ({
  onPrev,
  onNext,
  children,
  className = "flex justify-between items-center mb-8",
  prevButtonClassName = "w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all disabled:opacity-30",
  nextButtonClassName = prevButtonClassName
}) => {
  return (
    <div className={className}>
      <motion.button
        onClick={onPrev}
        className={prevButtonClassName}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon icon="mdi:chevron-left" className="w-6 h-6" />
      </motion.button>

      {children}

      <motion.button
        onClick={onNext}
        className={nextButtonClassName}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Icon icon="mdi:chevron-right" className="w-6 h-6" />
      </motion.button>
    </div>
  );
};

export default CarouselNavigation;
