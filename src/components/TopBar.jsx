"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function TopBar() {
  const texts = [
    "Epic Gaming Gear Sale - Get Up to 50% Off! ",
    "Power Up with Premium Gaming Gear - Prices Slashed!",
    "Ultimate Gaming Gear Sale - Don’t Miss These Deals!",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % texts.length),
      3500
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white text-black text-sm z-50">
      {" "}
      <div className="max-w-7xl mx-auto px-4 lg:px-10">
        {" "}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center py-2">
          {/* Left menu */}{" "}
          <div className="text-center">
            {" "}
            <ul className="flex justify-center gap-6">
              {" "}
              <li>
                {" "}
                <a
                  href="https://demo-ecomus-global3.myshopify.com/pages/contact-1"
                  className="hover:underline"
                >
                  Contact{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="/blogs/electronic-accessories"
                  className="hover:underline"
                >
                  Blog{" "}
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a
                  href="https://demo-ecomus-global3.myshopify.com/pages/contact"
                  className="hover:underline"
                >
                  Order Tracking{" "}
                </a>{" "}
              </li>{" "}
            </ul>{" "}
          </div>
          {/* Center text slider */}
          <div className="hidden lg:block text-center overflow-hidden h-6 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <p className="text-sm">
                  {texts[index]}{" "}
                  {index === 0 && (
                    <a
                      href="/collections/gaming"
                      className="font-bold underline"
                    >
                      Shop now →
                    </a>
                  )}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Right section: phone + dropdowns */}
          <div className="hidden lg:flex justify-center items-center gap-6">
            <div>
              Need help?{" "}
              <span className="font-bold">
                Call Us:{" "}
                <a href="tel:+18001090" className="underline">
                  +18001090
                </a>
              </span>
            </div>

            {/* Currency selector */}
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition">
              <img
                src="//cdn.shopify.com/static/images/flags/il.svg?width=16"
                alt="Israel"
                width="16"
                height="12"
                className="rounded-sm"
              />
              <span>ILS</span>
              <ChevronDown size={12} />
            </div>

            {/* Language selector */}
            <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition">
              <span>English</span>
              <ChevronDown size={12} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
