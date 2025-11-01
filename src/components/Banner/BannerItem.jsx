"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const BannerItem = ({ image, title, subtitle, description, link }) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({
      scale: 1.15,
      filter: "brightness(1.1)",
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({
      scale: 1,
      filter: "brightness(1)",
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
    });
  };

  return (
    <div
      className="relative w-[45%] h-[660px] overflow-hidden rounded-2xl shadow-lg"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.div animate={controls} className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col justify-center md:justify-end md:items-start items-center px-8 md:px-16 py-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          {subtitle && <p className="text-lg font-semibold">{subtitle}</p>}
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2">{title}</h2>
          {description && (
            <p className="text-xl mt-4 max-w-xl">{description}</p>
          )}

          {link && (
            <motion.a
              href={link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="inline-block mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200"
            >
              Shop Now
            </motion.a>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BannerItem;
