"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const ShippingIcon = () => (
  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center shadow-lg">
    <Icon icon="mdi:rocket-launch" className="w-4 h-4 text-white" />
  </div>
);

const SecurityIcon = () => (
  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 flex items-center justify-center shadow-lg">
    <Icon icon="mdi:shield-check" className="w-4 h-4 text-white" />
  </div>
);

const SupportIcon = () => (
  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center shadow-lg">
    <Icon icon="mdi:headset" className="w-4 h-4 text-white" />
  </div>
);

const ReturnIcon = () => (
  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-red-400 flex items-center justify-center shadow-lg">
    <Icon icon="mdi:refresh" className="w-4 h-4 text-white" />
  </div>
);

const items = [
  {
    text: "Free express shipping worldwide",
    icon: <ShippingIcon />,
    color: "from-green-500 to-cyan-500",
  },
  {
    text: "30-day money back guarantee",
    icon: <ReturnIcon />,
    color: "from-orange-500 to-red-500",
  },
  {
    text: "Secure payment & data protection",
    icon: <SecurityIcon />,
    color: "from-blue-500 to-indigo-500",
  },
  {
    text: "24/7 customer support",
    icon: <SupportIcon />,
    color: "from-purple-500 to-pink-500",
  },
  {
    text: "2-year warranty on all products",
    icon: <SecurityIcon />,
    color: "from-green-500 to-emerald-500",
  },
  {
    text: "Free returns & exchanges",
    icon: <ReturnIcon />,
    color: "from-cyan-500 to-blue-500",
  },
];

const MarqueeSection = () => {
  const repeatedItems = Array(6).fill(items).flat();

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 py-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-32 translate-y-32"></div>
      </div>

      {/* Animated Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
          animate={{
            background: [
              "linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)",
              "linear-gradient(90deg, #ec4899, #22d3ee, #a855f7)",
              "linear-gradient(90deg, #a855f7, #ec4899, #22d3ee)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="relative">
        {/* First Marquee - Left to Right */}
        <motion.div
          className="flex whitespace-nowrap py-3"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {repeatedItems.map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center gap-4 mx-6 px-4 py-2 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.div>
              <p className="text-white text-base font-semibold whitespace-nowrap group-hover:text-cyan-200 transition-colors">
                {item.text}
              </p>

              {/* Animated Dot */}
              <motion.div
                className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              />
            </div>
          ))}
        </motion.div>

        {/* Second Marquee - Right to Left (Delayed) */}
        <motion.div
          className="flex whitespace-nowrap py-3"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35,
          }}
        >
          {repeatedItems.map((item, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center gap-4 mx-6 px-4 py-2 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.div>
              <p className="text-white text-base font-semibold whitespace-nowrap group-hover:text-purple-200 transition-colors">
                {item.text}
              </p>

              {/* Pulsing Ring */}
              <motion.div
                className="relative"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                <div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color}`}
                />
                <motion.div
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-0`}
                  animate={{
                    opacity: [0, 0.5, 0],
                    scale: [1, 2, 3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Animated Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-400"
          animate={{
            background: [
              "linear-gradient(90deg, #ec4899, #22d3ee, #a855f7)",
              "linear-gradient(90deg, #a855f7, #ec4899, #22d3ee)",
              "linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* CTA Badge */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
      >
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl px-6 py-3 shadow-2xl border border-white/20 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Icon icon="mdi:star" className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-white font-bold text-sm uppercase tracking-wider">
              Premium Features
            </span>
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Icon icon="mdi:star" className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MarqueeSection;
