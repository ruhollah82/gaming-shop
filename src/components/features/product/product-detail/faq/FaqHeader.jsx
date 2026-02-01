"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeInUp, scaleIn } from "../shared/animations";

const FaqHeader = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="text-center mb-16"
    >
      <motion.div
        variants={scaleIn}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 mb-6"
      >
        <Icon icon="mdi:help-circle" className="w-5 h-5 text-blue-600" />
        <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
          Support Center
        </span>
      </motion.div>

      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
        Frequently Asked Questions
      </h2>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Everything you need to know about our products and services. Can't find
        the answer you're looking for? Reach out to our support team.
      </p>
    </motion.div>
  );
};

export default FaqHeader;
