"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function IconBoxCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      className="text-center mt-12 pt-8 border-t border-white/20"
    >
      <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
      <p className="text-white/80 mb-8 max-w-2xl mx-auto">
        Join thousands of satisfied customers who trust us for their gaming
        needs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/collections"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Shop Now
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/about"
            className="inline-block px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-2xl font-bold transition-all"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

