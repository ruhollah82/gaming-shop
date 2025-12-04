import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { fadeInUp, scaleIn } from "../shared/animations";

const SupportCTA = ({ onContactClick, onLiveChatClick }) => {
  return (
    <motion.div
      className="w-full lg:w-5/12"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.3 }}
    >
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg mx-auto mb-4">
            <Icon icon="mdi:headset" className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Need More Help?
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our support team is here to answer your questions and help you
            get the most out of your product.
          </p>
        </div>

        <div className="space-y-4">
          {/* Support Features */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              {
                icon: "mdi:clock-outline",
                label: "24/7 Support",
                color: "text-green-600",
              },
              {
                icon: "mdi:shield-check",
                label: "Secure",
                color: "text-blue-600",
              },
              {
                icon: "mdi:rocket-launch",
                label: "Fast Response",
                color: "text-purple-600",
              },
              {
                icon: "mdi:expert",
                label: "Experts",
                color: "text-orange-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.label}
                variants={scaleIn}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all"
              >
                <Icon
                  icon={feature.icon}
                  className={`w-5 h-5 ${feature.color}`}
                />
                <span className="text-sm font-medium text-gray-700">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <motion.button
            onClick={onContactClick}
            className="group relative w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-center gap-3">
              <Icon icon="mdi:email-outline" className="w-6 h-6" />
              <span>Send Message</span>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          <motion.button
            onClick={onLiveChatClick}
            className="group relative w-full py-4 px-6 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-center gap-3">
              <Icon icon="mdi:message-text-outline" className="w-6 h-6" />
              <span>Start Live Chat</span>
            </div>
          </motion.button>

          {/* Contact Info */}
          <motion.div
            variants={fadeInUp}
            className="pt-6 border-t border-gray-200 space-y-3"
          >
            {[
              {
                icon: "mdi:phone",
                label: "+1 (555) 123-4567",
                action: "tel:+15551234567",
              },
              {
                icon: "mdi:email",
                label: "support@ecomus.com",
                action: "mailto:support@ecomus.com",
              },
              {
                icon: "mdi:clock",
                label: "24/7 Available",
                action: null,
              },
            ].map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.action}
                variants={scaleIn}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-3 p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all group"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-all">
                  <Icon icon={contact.icon} className="w-5 h-5" />
                </div>
                <span className="font-medium">{contact.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SupportCTA;
