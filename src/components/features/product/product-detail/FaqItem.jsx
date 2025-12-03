"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

const FaqItem = ({ question, answer, icon, delay = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
      transition={{ delay }}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
      whileHover={{ y: -2 }}
    >
      <button
        className="flex justify-between items-center w-full text-left p-6"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
            <Icon icon={icon} className="w-6 h-6 text-blue-600" />
          </div>
          <div className="text-left">
            <span
              className="text-lg font-semibold text-gray-900 block mb-1"
              itemProp="name"
            >
              {question}
            </span>
            <span className="text-sm text-blue-600 font-medium">
              Click to {isOpen ? "collapse" : "expand"}
            </span>
          </div>
        </div>

        <motion.div
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, type: "spring" }}
        >
          <Icon icon="mdi:chevron-down" className="w-5 h-5 text-gray-600" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-6 border-t border-gray-100 pt-4"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <div
                className="text-gray-600 leading-relaxed text-lg"
                itemProp="text"
              >
                {answer}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FaqItem;
