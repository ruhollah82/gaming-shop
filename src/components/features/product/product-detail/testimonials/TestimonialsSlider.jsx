"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoHeight from "embla-carousel-auto-height";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSlider = ({ testimonials }) => {
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
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
              <TestimonialCard testimonial={testimonial} index={index} />
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
  );
};

export default TestimonialsSlider;
