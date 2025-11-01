"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

export default function Slider() {
  const slides = [
    "/images/hero/slide4.jpg",
    "/images/hero/slide2.avif",
    "/images/hero/slide3.jpg",
    "/images/hero/slide1.jpg",
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto select-none">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 35,
          stretch: 0,
          depth: 180,
          modifier: 1.5,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation
        className="rounded-3xl shadow-2xl"
      >
        {slides.map((src, i) => (
          <SwiperSlide
            key={i}
            className="w-72 md:w-[500px] transition-all duration-700"
          >
            <motion.div
              className="relative group rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              {/* Slide Image */}
              <motion.img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-72 md:h-[380px] object-cover transition-transform duration-700"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Animated Text Caption */}
              <motion.div
                className="absolute bottom-6 left-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold drop-shadow-lg">
                  Epic Game {i + 1}
                </h3>
                <p className="text-sm md:text-base text-gray-300 mt-1">
                  Experience the thrill
                </p>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Parallax Glow */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-purple-700/20 via-transparent to-transparent" />
    </div>
  );
}
