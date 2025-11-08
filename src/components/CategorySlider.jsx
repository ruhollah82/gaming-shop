"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const categories = [
  {
    title: "Controllers",
    count: 5,
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001825_af736a90-cdb8-4284-9547-5a5a4f8acc82.webp?v=1750064375",
    link: "/collections/gaming",
    gradient: "from-blue-500 to-blue-600",
    icon: "mdi:gamepad-variant",
  },
  {
    title: "Keyboards",
    count: 5,
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001826_19b2a88f-ea2f-489d-a8d2-f0f032a33b14_1.jpg?v=1744881975",
    link: "/collections/keyboards",
    gradient: "from-purple-500 to-purple-600",
    icon: "mdi:keyboard",
  },
  {
    title: "Mice",
    count: 5,
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001827_469928dd-dc0b-44e8-8346-1eaf8ce6c9cc.webp?v=1744882142",
    link: "/collections/mice",
    gradient: "from-green-500 to-green-600",
    icon: "mdi:mouse",
  },
  {
    title: "Headsets",
    count: 5,
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001828_c83bf841-4770-4163-92c5-2c01943be2ae.webp?v=1744882252",
    link: "/collections/headsets",
    gradient: "from-orange-500 to-orange-600",
    icon: "mdi:headset",
  },
  {
    title: "Flight Simulation",
    count: 5,
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001829_e564fa55-a22c-41a9-911a-5a502039876e.webp?v=1744882310",
    link: "/collections/flight",
    gradient: "from-red-500 to-red-600",
    icon: "mdi:airplane",
  },
  {
    title: "Race Simulation",
    count: 5,
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001830_df77d224-e4ff-4401-a38e-f5684872b9fd.webp?v=1744882421",
    link: "/collections/race",
    gradient: "from-indigo-500 to-indigo-600",
    icon: "mdi:steering",
  },
  {
    title: "Monitor",
    count: 5,
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_10000018257.jpg?v=1744882547",
    link: "/collections/monitor",
    gradient: "from-cyan-500 to-cyan-600",
    icon: "mdi:monitor",
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

export default function CategorySlider() {
  return (
    <>
      {/* Header Section */}
      <motion.div
        className="text-center bg-gradient-to-br from-gray-50 to-white py-16"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 mb-6"
          >
            <Icon icon="mdi:tag-multiple" className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
              Product Categories
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
            Shop by Category
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our premium gaming gear collection. From controllers to
            monitors, find everything you need to elevate your gaming
            experience.
          </p>
        </div>
      </motion.div>

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
            <div className="flex justify-between items-center mb-8 relative z-10">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Gaming Categories</h3>
                <p className="text-gray-300">Browse our premium collection</p>
              </div>

              <div className="flex gap-3">
                <motion.button
                  className="category-prev w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon icon="mdi:chevron-left" className="w-6 h-6" />
                </motion.button>
                <motion.button
                  className="category-next w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon icon="mdi:chevron-right" className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

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
              {categories.map((category, index) => (
                <SwiperSlide key={index}>
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
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Can't Find What You're Looking For?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Explore our complete catalog or contact our gaming experts for
                personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/collections/all"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Products
                </motion.a>
                <motion.a
                  href="/contact"
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-2xl font-bold transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Expert Advice
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// Enhanced Category Card Component
function CategoryCard({ category, index }) {
  return (
    <motion.a
      href={category.link}
      className="block group relative"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Icon Badge */}
        <div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center shadow-lg mb-6 mx-auto`}
        >
          <Icon icon={category.icon} className="w-8 h-8 text-white" />
        </div>

        {/* Image Container */}
        <div className="relative aspect-square mb-6 bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden">
          <Image
            src={category.img}
            alt={category.title}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-110 p-4"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 rounded-xl" />
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
            {category.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            {category.count} {category.count === 1 ? "item" : "items"}
          </p>

          {/* CTA Button */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 rounded-full text-sm font-semibold transition-all"
            whileHover={{ scale: 1.05 }}
          >
            <span>Shop Now</span>
            <Icon icon="mdi:arrow-right" className="w-4 h-4" />
          </motion.div>
        </div>

        {/* Gradient Border Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/5 group-hover:to-pink-500/10 transition-all duration-500 pointer-events-none" />
      </div>
    </motion.a>
  );
}
