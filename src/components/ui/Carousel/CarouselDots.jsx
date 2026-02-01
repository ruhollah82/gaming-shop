"use client";

import { motion } from "framer-motion";

const CarouselDots = ({
  total,
  current,
  onDotClick,
  className = "flex justify-center mt-10 space-x-3",
  dotClassName = "relative w-3 h-3 rounded-full transition-all duration-300",
  activeDotClassName = "bg-gradient-to-r from-blue-500 to-purple-600",
  inactiveDotClassName = "bg-gray-300 hover:bg-gray-400",
}) => {
  return (
    <div className={className}>
      {Array.from({ length: total }, (_, index) => (
        <motion.button
          key={index}
          onClick={() => onDotClick(index)}
          className={`${dotClassName} ${
            current === index ? activeDotClassName : inactiveDotClassName
          }`}
          aria-label={`Go to slide ${index + 1}`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {current === index && (
            <motion.div
              layoutId="activeDot"
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default CarouselDots;
