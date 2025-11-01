"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BannerItem from "./BannerItem";

const GameStoreBanner = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 rounded-2xl px-12 pt-16">
      <BannerItem
        image="/images/hero/keyboard.webp"
        title="Best Seller"
        subtitle="NO.1 GEAR"
        description="Every piece is made to last beyond the season"
        link="/collections/keyboards"
      />
      <BannerItem
        image="/images/hero/mouse.webp"
        title="New Arrivals"
        subtitle="LATEST COLLECTION"
        description="Find the perfect gear for your next adventure"
        link="/collections/new"
      />
    </div>
  );
};

export default GameStoreBanner;
