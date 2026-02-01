"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { getFeatures } from "@/lib/api";
import { useState, useEffect } from "react";

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, type: "spring", stiffness: 200 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function IconBoxFeatures({ initialFeatures }) {
  const [features, setFeatures] = useState(initialFeatures || []);
  const [loading, setLoading] = useState(!initialFeatures);

  useEffect(() => {
    if (!initialFeatures) {
      const fetchFeatures = async () => {
        try {
          const featuresData = await getFeatures();
          setFeatures(featuresData);
        } catch (error) {
          console.error("Failed to fetch features:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchFeatures();
    } else {
      setLoading(false);
    }
  }, [initialFeatures]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
              <div className="w-20 h-20 bg-gray-200 rounded-2xl mb-6 mx-auto"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-3 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          variants={scaleIn}
          transition={{ delay: feature.delay }}
          className="group relative"
        >
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50">
            {/* Icon Container */}
            <motion.div
              className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 },
              }}
            >
              <Icon icon={feature.icon} className="w-10 h-10 text-white" />
            </motion.div>

            {/* Content */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
              {feature.title}
            </h3>

            <p className="text-gray-600 leading-relaxed flex-1">
              {feature.description}
            </p>

            {/* Hover Arrow */}
            <motion.div
              className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                <Icon
                  icon="mdi:arrow-right"
                  className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors"
                />
              </div>
            </motion.div>

            {/* Background Pattern on Hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/3 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none" />
          </div>

          {/* Floating Elements */}
          <motion.div
            className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
