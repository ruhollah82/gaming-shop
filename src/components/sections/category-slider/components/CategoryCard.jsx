"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

const CategoryCard = ({ category, index, className = "" }) => {
  return (
    <motion.a
      href={category.link}
      className={`block group relative ${className}`}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Icon Badge */}
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center shadow-lg mb-6 mx-auto`}
        >
          <Icon icon={category.icon} className="w-8 h-8 text-white" />
        </div>

        {/* Image Container */}
        <div className="relative aspect-square mb-6 bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden">
          <Image
            src={category.img}
            alt={category.title}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 rounded-xl" />
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
            {category.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            {category.count} {category.count === 1 ? "item" : "items"}
          </p>

          {/* CTA Button */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-full text-sm font-semibold transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <span>Shop Now</span>
            <Icon icon="mdi:arrow-right" className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Gradient Border Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none" />
      </div>
    </motion.a>
  );
};

export default CategoryCard;
