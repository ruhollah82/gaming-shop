import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialSlider() {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const contentSwiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      title: "OUR CUSTOMER'S RAVE REVIEWS",
      text: "This four-button console is a perfect throwback! Simple design with classic games like Contra and Mario—great for reliving childhood memories.",
      author: "Robert Smith",
      product: {
        name: "Cooler Master Caliber R2",
        link: "/products/cooler-master-caliber-r2",
      },
      image: {
        src: "/images/testimonial/testimonial.webp",
        alt: "Robert Smith",
      },
    },
    {
      id: 2,
      title: "OUR CUSTOMER'S RAVE REVIEWS",
      text: "With stunning visuals and seamless motion tracking, this VR headset delivers an immersive experience that's perfect for gaming and virtual exploration.",
      author: "Jack Smith",
      product: {
        name: "HTC VIVE Pro Virtual Reality Headset",
        link: "/products/htc-vive-pro-virtual-reality-headset",
      },
      image: {
        src: "/images/testimonial/testimonial2_f3988b0f-61f1-48e2-a801-8ef2806ff05b.webp",
        alt: "Jack Smith",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="relative py-16 bg-gray-50 overflow-hidden rounded-2xl"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/testimonial/kooh.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Testimonial Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              className="relative overflow-hidden rounded-2xl p-8 lg:p-12"
              variants={itemVariants}
            >
              <Swiper
                modules={[Navigation, Pagination, Controller]}
                navigation={{
                  nextEl: ".testimonial-next",
                  prevEl: ".testimonial-prev",
                }}
                pagination={{
                  clickable: true,
                  el: ".testimonial-pagination",
                  bulletClass: "testimonial-bullet",
                  bulletActiveClass: "testimonial-bullet-active",
                }}
                onSwiper={(swiper) => {
                  contentSwiperRef.current = swiper;
                }}
                controller={{ control: controlledSwiper }}
                speed={600}
                loop={true}
                className="h-80"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={testimonial.id}>
                    <motion.div
                      className="w-full h-full flex flex-col justify-center"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Quote Icon */}
                      <motion.div
                        className="mb-6"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <svg
                          className="w-10 h-8 text-white/70"
                          viewBox="0 0 46 31"
                          fill="none"
                        >
                          <path
                            d="M32.4413 30.5L37.8204 19.9545L38.1913 19.2273H37.375H26.375V0.5H45.5V19.6071L39.9438 30.5H32.4413ZM6.56633 30.5L11.9454 19.9545L12.3163 19.2273H11.5H0.5V0.5H19.625V19.6071L14.0688 30.5H6.56633Z"
                            stroke="currentColor"
                          />
                        </svg>
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        className="text-sm font-semibold text-white mb-6 tracking-wide uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {testimonial.title}
                      </motion.h3>

                      {/* Rating */}
                      <motion.div
                        className="flex gap-2 mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.svg
                            key={i}
                            className="w-4 h-4 text-yellow-400"
                            viewBox="0 0 14 13"
                            fill="currentColor"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <path d="M6.84211 10.4479L11.0705 13L9.94842 8.19L13.6842 4.95368L8.76474 4.53632L6.84211 0L4.91947 4.53632L0 4.95368L3.73579 8.19L2.61368 13L6.84211 10.4479Z" />
                          </motion.svg>
                        ))}
                      </motion.div>

                      {/* Testimonial Text */}
                      <motion.blockquote
                        className="text-lg lg:text-xl text-white mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {testimonial.text}
                      </motion.blockquote>

                      {/* User Information */}
                      <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div>
                          <p className="font-semibold text-white text-lg">
                            {testimonial.author}
                          </p>
                          <p className="text-white/80 text-sm">
                            Purchase item:{" "}
                            <motion.a
                              href={testimonial.product.link}
                              className="font-semibold hover:text-white transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {testimonial.product.name}
                            </motion.a>
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8">
                <div className="testimonial-pagination flex gap-2">
                  {/* Pagination bullets will be inserted here by Swiper */}
                </div>

                <div className="flex gap-3">
                  <button
                    className="testimonial-prev p-2 rounded-full border border-white/50 hover:border-white transition-all hover:bg-white/10"
                    aria-label="Previous testimonial"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 7 11"
                      fill="none"
                    >
                      <path
                        d="M5.5 11L0 5.5L5.5 0L6.47625 0.97625L1.9525 5.5L6.47625 10.0238L5.5 11Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>

                  <button
                    className="testimonial-next p-2 rounded-full border border-white/50 hover:border-white hover:bg-white/10 transition-all"
                    aria-label="Next testimonial"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 7 11"
                      fill="none"
                    >
                      <path
                        d="M1.5 11L7 5.5L1.5 0L0.52375 0.97625L5.0475 5.5L0.52375 10.0238L1.5 11Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Testimonial Images */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <motion.div
              className="relative overflow-hidden w-full flex justify-center items-center"
              variants={itemVariants}
            >
              <Swiper
                modules={[Controller]}
                onSwiper={setControlledSwiper}
                controller={{ control: contentSwiperRef.current }}
                speed={1000} // slower = smoother
                loop={true}
                allowTouchMove={false}
                centeredSlides={true} // ✅ centers the active slide
                slidesPerView={1}
                spaceBetween={0}
                className="flex justify-center items-center"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide
                    key={testimonial.id}
                    className="flex justify-center items-center"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="flex justify-center items-center"
                    >
                      <Image
                        src={testimonial.image.src}
                        alt={testimonial.author}
                        width={600}
                        height={600}
                        className="w-[60%] object-cover rounded-xl shadow-lg"
                      />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .testimonial-bullet {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .testimonial-bullet:hover {
          background: rgba(255, 255, 255, 0.7);
          transform: scale(1.2);
        }

        .testimonial-bullet-active {
          background: #ffffff;
          transform: scale(1.2);
        }

        .swiper-pagination {
          position: relative !important;
          bottom: 0 !important;
        }
      `}</style>
    </motion.section>
  );
}
