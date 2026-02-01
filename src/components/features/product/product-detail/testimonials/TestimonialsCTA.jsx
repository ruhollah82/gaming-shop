"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "../shared/animations";

const TestimonialsCTA = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
      className="text-center mt-16"
    >
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32"></div>
        </div>

        <div className="relative z-10">
          <h3 className="text-3xl font-bold mb-4">Join Our Gaming Community</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Experience the difference for yourself. Join thousands of gamers who
            have already elevated their setup.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>

            <motion.button
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-2xl font-bold transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More Reviews
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialsCTA;
