"use client";

import { motion } from "framer-motion";
import { ShippingIcon } from "@/components/ui";
import { marqueeItems, marqueeConfig } from "@/data/ui";

const FreeExpressMarquee = () => {
  const repeatedItems = Array(marqueeConfig.repeat).fill(marqueeItems).flat();

  return (
    <div
      className="relative overflow-hidden p-[30px]"
      style={{ backgroundColor: "rgb(153,20,242)" }}
    >
      <motion.div
        className="flex whitespace-nowrap justify-between"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 10,
        }}
      >
        {repeatedItems.map((text, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-5 mx-8 text-white text-lg font-medium py-4"
          >
            <ShippingIcon />
            <p>{text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FreeExpressMarquee;
