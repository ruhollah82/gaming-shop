"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  CategoryCard,
  CategorySliderHeader,
  CategorySliderNavigation,
  CategorySliderCTA,
} from "./category-slider/components";
import { getSliderCategories } from "@/lib/api";
import { useState, useEffect } from "react";

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

export default function CategorySlider({ initialCategories }) {
  const [sliderCategories, setSliderCategories] = useState(
    initialCategories || [],
  );
  const [loading, setLoading] = useState(!initialCategories);

  useEffect(() => {
    if (!initialCategories) {
      const fetchCategories = async () => {
        try {
          const categories = await getSliderCategories();
          setSliderCategories(categories);
        } catch (error) {
          console.error("Failed to fetch slider categories:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchCategories();
    } else {
      setLoading(false);
    }
  }, [initialCategories]);

  if (loading) {
    return (
      <section className="py-8 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-1/3 mb-8"></div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-gray-700 rounded-xl h-32"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header Section */}
      <CategorySliderHeader />

      {/* Slider Section */}
      <section className="py-8 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-32 -translate-x-32"></div>
            </div>

            {/* Custom Navigation */}
            <CategorySliderNavigation />

            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={2}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 24,
                },
              }}
              navigation={{
                prevEl: ".category-prev",
                nextEl: ".category-next",
              }}
              pagination={{
                clickable: true,
                el: ".category-pagination",
                renderBullet: function (index, className) {
                  return `<span class="${className} w-2 h-2 rounded-full bg-white/30 hover:bg-white/50 transition-all"></span>`;
                },
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="pb-12"
            >
              {sliderCategories.map((category, index) => (
                <SwiperSlide key={category.id}>
                  <motion.div
                    variants={scaleIn}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CategoryCard category={category} index={index} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Pagination */}
            <div className="category-pagination flex justify-center gap-2 mt-6 relative z-10"></div>
          </motion.div>

          {/* CTA Section */}
          <CategorySliderCTA />
        </div>
      </section>
    </>
  );
}
