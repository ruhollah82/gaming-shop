import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const CategorySliderCTA = ({
  title = "Can't Find What You're Looking For?",
  subtitle = "Explore our complete catalog or contact our gaming experts for personalized recommendations.",
  primaryButtonText = "View All Products",
  primaryButtonLink = "/collections/all",
  secondaryButtonText = "Get Expert Advice",
  secondaryButtonLink = "/contact",
  className = "text-center mt-12"
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
      className={className}
    >
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href={primaryButtonLink}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {primaryButtonText}
          </motion.a>
          <motion.a
            href={secondaryButtonLink}
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-2xl font-bold transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {secondaryButtonText}
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default CategorySliderCTA;
