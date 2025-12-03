// components/TestimonialsSection.jsx
"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoHeight from "embla-carousel-auto-height";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

// Install: npm install embla-carousel-react embla-carousel-auto-height

const testimonials = [
  {
    id: 1,
    name: "Loretta",
    content:
      "Top-tier performance without the top-tier price. Elegant, durable, and built for serious play.",
    rating: 5,
    role: "Professional Gamer",
    avatar: "👩‍💻",
    verified: true,
    product: "Pro Gaming Mouse",
  },
  {
    id: 2,
    name: "Sandra",
    content:
      "Looks premium, feels premium — but your wallet won't even flinch. A hidden gem for any setup.",
    rating: 5,
    role: "Streamer",
    avatar: "🎮",
    verified: true,
    product: "Mechanical Keyboard",
  },
  {
    id: 3,
    name: "Marcus",
    content:
      "Discreet design meets hardcore functionality. This gear punches way above its price.",
    rating: 5,
    role: "Esports Coach",
    avatar: "🏆",
    verified: true,
    product: "Gaming Headset",
  },
  {
    id: 4,
    name: "Jessica",
    content:
      "Clean aesthetics, smooth handling, and zero compromises. A smart pick over overpriced brands.",
    rating: 5,
    role: "Content Creator",
    avatar: "✨",
    verified: true,
    product: "RGB Mousepad",
  },
  {
    id: 5,
    name: "Alex",
    content:
      "Elegant in form, brutal in performance. Gear that elevates your game without draining your budget.",
    rating: 5,
    role: "Game Developer",
    avatar: "👨‍💻",
    verified: true,
    product: "Wireless Controller",
  },
];

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

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      dragFree: true,
    },
    [AutoHeight()]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      };

      emblaApi.on("select", onSelect);
      onSelect();

      // Auto-play
      const interval = setInterval(() => {
        if (emblaApi) {
          emblaApi.scrollNext();
        }
      }, 5000);

      return () => {
        clearInterval(interval);
        emblaApi.off("select", onSelect);
      };
    }
  }, [emblaApi]);

  const scrollTo = (index) => {
    emblaApi?.scrollTo(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500/5 to-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full border border-purple-200 mb-6"
          >
            <Icon icon="mdi:heart" className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-semibold text-sm uppercase tracking-wider">
              Customer Love
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Why Gamers Love It
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied gamers who have elevated their gaming
            experience with our premium gear.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "10K+", label: "Happy Gamers", icon: "mdi:account-group" },
            { value: "4.9/5", label: "Average Rating", icon: "mdi:star" },
            { value: "98%", label: "Recommend", icon: "mdi:thumb-up" },
            { value: "24/7", label: "Support", icon: "mdi:headset" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-3">
                <Icon icon={stat.icon} className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mb-8">
            <motion.button
              onClick={() => emblaApi?.scrollPrev()}
              className="w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all disabled:opacity-30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon icon="mdi:chevron-left" className="w-6 h-6" />
            </motion.button>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 font-medium">
                {selectedIndex + 1} / {testimonials.length}
              </span>
            </div>

            <motion.button
              onClick={() => emblaApi?.scrollNext()}
              className="w-12 h-12 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all disabled:opacity-30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon icon="mdi:chevron-right" className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6"
                >
                  <motion.div
                    className="h-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Quote Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-purple-200 transition-all">
                      <Icon
                        icon="mdi:format-quote-open"
                        className="w-6 h-6 text-blue-600"
                      />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{
                            delay: index * 0.1 + i * 0.1,
                            type: "spring",
                          }}
                        >
                          <Icon
                            icon={
                              i < testimonial.rating
                                ? "mdi:star"
                                : "mdi:star-outline"
                            }
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-2xl shadow-lg">
                        {testimonial.avatar}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-gray-900">
                            {testimonial.name}
                          </h4>
                          {testimonial.verified && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: index * 0.1 + 0.5 }}
                            >
                              <Icon
                                icon="mdi:check-decagram"
                                className="w-5 h-5 text-green-500"
                              />
                            </motion.div>
                          )}
                        </div>

                        <p className="text-gray-600 text-sm mb-1">
                          {testimonial.role}
                        </p>

                        <div className="flex items-center gap-2 text-xs text-blue-600 font-medium">
                          <Icon
                            icon="mdi:package-variant"
                            className="w-4 h-4"
                          />
                          {testimonial.product}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Dots */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => scrollTo(index)}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-gradient-to-r from-blue-500 to-purple-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {selectedIndex === index && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Join Our Gaming Community
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Experience the difference for yourself. Join thousands of gamers
                who have already elevated their setup.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Shop Now
                </motion.button>

                <motion.button
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 rounded-2xl font-bold transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More Reviews
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
