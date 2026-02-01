"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeInUp, scaleIn } from "../shared/animations";

const TestimonialsHeader = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="text-center mb-16"
    >
      <motion.div
        variants={scaleIn}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full border border-purple-200 mb-6"
      >
        <Icon icon="mdi:heart" className="w-5 h-5 text-purple-600" />
        <span className="text-purple-700 font-semibold text-sm uppercase tracking-wider">
          Customer Love
        </span>
      </motion.div>

      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
        Why Gamers Love It
      </h2>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Join thousands of satisfied gamers who have elevated their gaming
        experience with our premium gear.
      </p>
    </motion.div>
  );
};

export default TestimonialsHeader;
