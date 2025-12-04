import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { staggerContainer, scaleIn } from "../shared/animations";

const StatsSection = () => {
  const stats = [
    { value: "10K+", label: "Happy Gamers", icon: "mdi:account-group" },
    { value: "4.9/5", label: "Average Rating", icon: "mdi:star" },
    { value: "98%", label: "Recommend", icon: "mdi:thumb-up" },
    { value: "24/7", label: "Support", icon: "mdi:headset" },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          variants={scaleIn}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-3">
            <Icon icon={stat.icon} className="w-6 h-6 text-white" />
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {stat.value}
          </div>
          <div className="text-gray-600 text-sm font-medium">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsSection;
