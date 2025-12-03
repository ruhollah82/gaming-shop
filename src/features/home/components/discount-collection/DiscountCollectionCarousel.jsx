"use client";

import dynamic from "next/dynamic";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Swiper = dynamic(
  () => import("swiper/react").then((mod) => mod.Swiper),
  { ssr: false }
);
const SwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  { ssr: false }
);

import DiscountCollectionProductCard from "./DiscountCollectionProductCard";

const swiperBreakpoints = {
  320: { slidesPerView: 1 },
  640: { slidesPerView: 2 },
  1024: { slidesPerView: 4 },
};

export default function DiscountCollectionCarousel({ products }) {
  if (!Array.isArray(products) || products.length === 0) {
    return null;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={24}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500 }}
      breakpoints={swiperBreakpoints}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <DiscountCollectionProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

