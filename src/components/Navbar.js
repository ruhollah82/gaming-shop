"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function StickyNavbar() {
  const [show, setShow] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setAtTop(currentScrollY < 1);

      if (currentScrollY < 1) {
        setShow(true);
      } else if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: show ? 0 : -100 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className={clsx(
        "fixed left-0 w-full z-40 backdrop-blur-md bg-neutral-900/80 text-white shadow-md transition-all",
        atTop ? "top-[40px]" : "top-0" // 👈 Push down when top bar is visible
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-lg font-semibold">MyShop</div>
        <nav className="space-x-6 hidden md:flex">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/shop" className="hover:text-gray-300">
            Shop
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
