"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GameStoreBanner = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]"
      >
        <Image
          src="https://ecomus-2-2.myshopify.com/cdn/shop/files/image_57735b1e-8659-4126-b525-631f5ae81429.png?v=1744791792"
          alt="Gaming Store Banner"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="rounded-2xl"
        />
        {/* Optional overlay for text or effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none rounded-2xl" />
      </motion.div>
    </div>
  );
};

export default GameStoreBanner;
