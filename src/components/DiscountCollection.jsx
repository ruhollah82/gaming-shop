"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button, message } from "antd";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Animation variants matching ProductInfo
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, type: "spring", stiffness: 200 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// ⏱ Enhanced Countdown Timer Component
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: "99",
    hours: "08",
    minutes: "49",
    seconds: "27",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let seconds = parseInt(prev.seconds) - 1;
        let minutes = parseInt(prev.minutes);
        let hours = parseInt(prev.hours);
        let days = parseInt(prev.days);

        if (seconds < 0) {
          seconds = 59;
          minutes -= 1;
        }
        if (minutes < 0) {
          minutes = 59;
          hours -= 1;
        }
        if (hours < 0) {
          hours = 23;
          days -= 1;
        }

        return {
          days: days.toString().padStart(2, "0"),
          hours: hours.toString().padStart(2, "0"),
          minutes: minutes.toString().padStart(2, "0"),
          seconds: seconds.toString().padStart(2, "0"),
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "Days", color: "from-red-500 to-pink-600" },
    {
      value: timeLeft.hours,
      label: "Hours",
      color: "from-orange-500 to-red-600",
    },
    {
      value: timeLeft.minutes,
      label: "Minutes",
      color: "from-yellow-500 to-orange-600",
    },
    {
      value: timeLeft.seconds,
      label: "Seconds",
      color: "from-green-500 to-emerald-600",
    },
  ];

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center gap-4"
    >
      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
        <Icon icon="mdi:clock-alert" className="w-6 h-6 text-white" />
        <span className="text-white font-semibold text-lg">
          Flash Sale Ends In
        </span>
      </div>

      <div className="flex gap-3">
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.1, type: "spring" }}
            className="text-center"
          >
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${unit.color} flex flex-col items-center justify-center shadow-lg`}
            >
              <span className="text-white font-bold text-lg leading-none">
                {unit.value}
              </span>
              <span className="text-white/80 text-xs font-medium mt-1">
                {unit.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "100%" }}
        className="mt-4 bg-white/20 rounded-full h-2 overflow-hidden"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"
          animate={{
            background: [
              "linear-gradient(90deg, #10b981, #06b6d4)",
              "linear-gradient(90deg, #06b6d4, #10b981)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

// 🧩 Enhanced Product Card Component
const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.images.main);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.id);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleColorChange = (colorId, image) => {
    setSelectedColor(colorId);
    setCurrentImage(image);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);
    message.success(`Added ${product.title} to cart`);
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    message.info("Quick view opened");
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    message.info("Added to wishlist");
  };

  return (
    <motion.div
      variants={scaleIn}
      className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square bg-gradient-to-br from-gray-50 to-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <Image
              src={currentImage}
              alt={product.title}
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>
        </AnimatePresence>

        {/* Discount Badge */}
        {product.discountPercent && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            className="absolute top-3 left-3 flex flex-col gap-2"
          >
            <span className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-red-500 to-pink-600 text-white text-sm font-bold rounded-full shadow-lg">
              <Icon icon="mdi:lightning-bolt" className="w-4 h-4 mr-1" />-
              {product.discountPercent}% OFF
            </span>
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <motion.button
            onClick={handleAddToWishlist}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all opacity-0 group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Icon icon="mdi:heart-outline" className="w-4 h-4 text-gray-700" />
          </motion.button>

          <motion.button
            onClick={handleQuickView}
            className="p-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all opacity-0 group-hover:opacity-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Icon icon="mdi:eye-outline" className="w-4 h-4 text-gray-700" />
          </motion.button>
        </div>

        {/* Add to Cart Button Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 right-4"
            >
              <motion.button
                onClick={handleAddToCart}
                disabled={isLoading}
                className="w-full py-3 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Icon icon="mdi:loading" className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <>
                    <Icon icon="mdi:cart-plus" className="w-5 h-5" />
                    Add to Cart
                  </>
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <a href={`/products/${product.handle}`} className="block group/title">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 group-hover/title:text-blue-600 transition-colors">
            {product.title}
          </h3>
        </a>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            {product.price}
          </span>

          {product.comparePrice && (
            <>
              <span className="text-sm text-gray-500 line-through">
                {product.comparePrice}
              </span>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full"
              >
                Save {product.discountPercent}%
              </motion.span>
            </>
          )}
        </div>

        {/* Color Swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex justify-center gap-2 pt-2 border-t border-gray-100">
            {product.colors.map((color) => (
              <motion.button
                key={color.id}
                onClick={() => handleColorChange(color.id, color.image)}
                className={`w-6 h-6 rounded-full border-2 transition-all ${
                  selectedColor === color.id
                    ? "border-gray-800 shadow-lg scale-110"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                style={{ backgroundColor: color.value }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        )}

        {/* Features */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Icon icon="mdi:truck-fast" className="w-3 h-3 text-green-600" />
            <span>Free Shipping</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon icon="mdi:shield-check" className="w-3 h-3 text-blue-600" />
            <span>2Y Warranty</span>
          </div>
        </div>
      </div>

      {/* Hover Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-red-500/10 group-hover:via-pink-500/5 group-hover:to-orange-500/10 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};

// 🧩 Enhanced Discount Collection (Main)
const DiscountCollection = () => {
  const products = [
    {
      id: "1",
      title: "Logitech G29 Driving Force Wired Controller",
      price: "283.00 NIS",
      comparePrice: "316.00 NIS",
      discountPercent: 10,
      images: {
        main: "/images/DiscountCollection/image12.webp",
        hover: "/images/DiscountCollection/image12.webp",
      },
      colors: [
        {
          id: "black",
          name: "Black",
          value: "#000",
          image: "/images/DiscountCollection/image12.webp",
        },
        {
          id: "silver",
          name: "Silver",
          value: "#c0c0c0",
          image: "/images/DiscountCollection/image12-silver.webp",
        },
      ],
      handle: "logitech-g29-driving-force-wired-controller",
    },
    {
      id: "2",
      title: "Wireless Gaming Mouse Pro",
      price: "189.00 NIS",
      comparePrice: "229.00 NIS",
      discountPercent: 17,
      images: {
        main: "/images/DiscountCollection/image12.webp",
        hover: "/images/DiscountCollection/image12.webp",
      },
      colors: [
        {
          id: "black",
          name: "Black",
          value: "#000",
          image: "/images/DiscountCollection/image12.webp",
        },
        {
          id: "red",
          name: "Red",
          value: "#ff0000",
          image: "/images/DiscountCollection/image12-red.webp",
        },
      ],
      handle: "wireless-gaming-mouse-pro",
    },
    {
      id: "3",
      title: "Mechanical RGB Keyboard",
      price: "320.00 NIS",
      comparePrice: "399.00 NIS",
      discountPercent: 20,
      images: {
        main: "/images/DiscountCollection/image12.webp",
        hover: "/images/DiscountCollection/image12.webp",
      },
      colors: [
        {
          id: "black",
          name: "Black",
          value: "#000",
          image: "/images/DiscountCollection/image12.webp",
        },
      ],
      handle: "mechanical-rgb-keyboard",
    },
    {
      id: "4",
      title: "Gaming Headset 7.1 Surround",
      price: "450.00 NIS",
      comparePrice: "560.00 NIS",
      discountPercent: 20,
      images: {
        main: "/images/DiscountCollection/image12.webp",
        hover: "/images/DiscountCollection/image12.webp",
      },
      colors: [
        {
          id: "black",
          name: "Black",
          value: "#000",
          image: "/images/DiscountCollection/image12.webp",
        },
        {
          id: "white",
          name: "White",
          value: "#ffffff",
          image: "/images/DiscountCollection/image12-white.webp",
        },
      ],
      handle: "gaming-headset-7-1-surround",
    },
  ];

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="py-20 bg-gradient-to-br from-red-500 via-pink-600 to-purple-700 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
          >
            <Icon icon="mdi:fire" className="w-5 h-5 text-white" />
            <span className="text-white font-semibold text-sm uppercase tracking-wider">
              Flash Sale
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Limited Time Offers
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Don't miss these exclusive deals! Limited quantities available at
            special discounted prices.
          </motion.p>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center mb-12">
          <CountdownTimer targetDate="2030-04-19T12:00:00" />
        </div>

        {/* Custom Navigation */}
        <div className="flex justify-between items-center mb-8">
          <motion.button
            className="discount-prev w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon icon="mdi:chevron-left" className="w-6 h-6" />
          </motion.button>

          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/80 font-semibold"
            >
              Special Offers
            </motion.span>
          </div>

          <motion.button
            className="discount-next w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon icon="mdi:chevron-right" className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: ".discount-prev",
            nextEl: ".discount-next",
          }}
          pagination={{
            clickable: true,
            el: ".discount-pagination",
            renderBullet: function (index, className) {
              return `<span class="${className} w-3 h-3 rounded-full bg-white/30 hover:bg-white/50 transition-all"></span>`;
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-12"
        >
          {products.map((product, index) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="discount-pagination flex justify-center gap-2 mt-6"></div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want More Deals?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about
              exclusive offers, new arrivals, and special promotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-2xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <motion.button
                className="px-8 py-3 bg-white text-red-600 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DiscountCollection;
