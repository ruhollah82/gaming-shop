"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const features = [
  {
    icon: "mdi:truck-fast",
    title: "Free Shipping",
    description: "Free express shipping worldwide on orders over $50",
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.1,
  },
  {
    icon: "mdi:credit-card-multiple",
    title: "Flexible Payment",
    description: "Pay with multiple credit cards or installment plans",
    gradient: "from-purple-500 to-pink-500",
    delay: 0.2,
  },
  {
    icon: "mdi:refresh-circle",
    title: "Easy Returns",
    description: "30-day money back guarantee with free returns",
    gradient: "from-green-500 to-emerald-500",
    delay: 0.3,
  },
  {
    icon: "mdi:headset",
    title: "Premium Support",
    description: "24/7 customer support with expert assistance",
    gradient: "from-orange-500 to-red-500",
    delay: 0.4,
  },
];

// Animation variants matching ProductInfo
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

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

const IconBoxSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            <Icon icon="mdi:shield-check" className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Premium Shopping Experience
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're committed to providing you with the best shopping experience,
            from fast shipping to exceptional customer support.
          </p>
        </motion.div>

        {/* Features Grid */}
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

        {/* Stats Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32"></div>
            </div>

            <div className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  {
                    value: "50K+",
                    label: "Happy Customers",
                    icon: "mdi:account-group",
                  },
                  { value: "4.9/5", label: "Average Rating", icon: "mdi:star" },
                  { value: "24/7", label: "Support", icon: "mdi:headset" },
                  { value: "99%", label: "Satisfaction", icon: "mdi:heart" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-white/20">
                      <Icon icon={stat.icon} className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="text-center mt-12 pt-8 border-t border-white/20"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Join thousands of satisfied customers who trust us for their
                  gaming needs.
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
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IconBoxSection;
