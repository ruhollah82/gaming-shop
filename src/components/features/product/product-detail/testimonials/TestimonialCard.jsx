import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      className="h-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {/* Quote Icon */}
      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-purple-200 transition-all">
        <Icon
          icon="mdi:format-quote-open"
          className="w-6 h-6 text-blue-600"
        />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: index * 0.1 + i * 0.1,
              type: "spring",
            }}
          >
            <Icon
              icon={
                i < testimonial.rating
                  ? "mdi:star"
                  : "mdi:star-outline"
              }
              className="w-5 h-5 text-yellow-400 fill-current"
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        "{testimonial.content}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-2xl shadow-lg">
          {testimonial.avatar}
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-bold text-gray-900">
              {testimonial.name}
            </h4>
            {testimonial.verified && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <Icon
                  icon="mdi:check-decagram"
                  className="w-5 h-5 text-green-500"
                />
              </motion.div>
            )}
          </div>

          <p className="text-gray-600 text-sm mb-1">
            {testimonial.role}
          </p>

          <div className="flex items-center gap-2 text-xs text-blue-600 font-medium">
            <Icon
              icon="mdi:package-variant"
              className="w-4 h-4"
            />
            {testimonial.product}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
