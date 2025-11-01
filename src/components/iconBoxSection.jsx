"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="30"
        viewBox="0 0 29 30"
      >
        <path
          d="M14.2504 30L0 22.8814V7.01669L14.2504 0L28.5009 7.01273V22.8814L14.2504 30Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Free Shipping",
    description: "You will love at great low prices",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="22"
        viewBox="0 0 30 22"
      >
        <path d="M0 0H29.4643V22H0V0Z" fill="currentColor" />
      </svg>
    ),
    title: "Flexible Payment",
    description: "Pay with Multiple Credit Cards",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="18"
        viewBox="0 0 29 18"
      >
        <path
          d="M25.5 1.5V7.5H5.745L11.115 2.115L9 0L0 9L9 18L11.115 15.885L5.745 10.5H28.5V1.5H25.5Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "14 Day Returns",
    description: "Within 30 days for an exchange",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
      >
        <path
          d="M27.5 10H26.82C25.862 4.334 20.934 0 15 0C9.066 0 4.137 4.334 3.18 10H2.5..."
          fill="currentColor"
        />
      </svg>
    ),
    title: "Premium Support",
    description: "Outstanding premium support",
  },
];

const IconBoxSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-4 text-gray-700"
          >
            <div className="text-black">{f.icon}</div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="text-sm text-gray-500">{f.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default IconBoxSection;
