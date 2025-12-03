import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeInUp, scaleIn } from "./animations";

// Note: This component uses framer-motion animations but renders static content
// In Next.js 13+ App Router, this can be a server component since motion handles the client-side animations

const features = [
  {
    icon: "mdi:rotate-360",
    title: "360° View",
    description: "Interactive product rotation",
  },
  {
    icon: "mdi:zoom-in",
    title: "Zoom & Pan",
    description: "See every detail clearly",
  },
  {
    icon: "mdi:video-outline",
    title: "Video Tour",
    description: "Watch product in action",
  },
];

export default function ImageFeatures() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
    >
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          variants={scaleIn}
          transition={{ delay: 0.4 + index * 0.1 }}
          className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all cursor-pointer group"
          whileHover={{ scale: 1.02, y: -2 }}
        >
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all">
            <Icon icon={feature.icon} className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 text-sm">
              {feature.title}
            </h4>
            <p className="text-gray-600 text-xs">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
