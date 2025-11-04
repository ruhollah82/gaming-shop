"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ⏱ Countdown Timer Component
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

  return (
    <div className="flex items-center text-lg font-semibold gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="text-white"
      >
        <path d="M13.5631 11.7661L10.7746 9.67465V5.41441C10.7746 4.98605 10.4283 4.6398 9.99996 4.6398C9.5716 4.6398 9.22535 4.98605 9.22535 5.41441V10.062C9.22535 10.306 9.34 10.5361 9.5352 10.6817L12.6336 13.0055C12.7673 13.1062 12.9302 13.1606 13.0975 13.1604C13.3338 13.1604 13.5662 13.0543 13.718 12.8498C13.9752 12.5081 13.9055 12.0225 13.5631 11.7661Z" />
        <path d="M10 0C4.48566 0 0 4.48566 0 10C0 15.5143 4.48566 20 10 20C15.5143 20 20 15.5143 20 10C20 4.48566 15.5143 0 10 0ZM10 18.4508C5.34082 18.4508 1.54918 14.6592 1.54918 10C1.54918 5.34082 5.34082 1.54918 10 1.54918C14.66 1.54918 18.4508 5.34082 18.4508 10C18.4508 14.6592 14.6592 18.4508 10 18.4508Z" />
      </svg>

      <div className="flex gap-1 text-white">
        <span>{timeLeft.days}d</span>:<span>{timeLeft.hours}h</span>:
        <span>{timeLeft.minutes}m</span>:<span>{timeLeft.seconds}s</span>
      </div>
    </div>
  );
};

// 🧩 Product Card Component
const ProductCard = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.images.main);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.id);

  const handleColorChange = (colorId, image) => {
    setSelectedColor(colorId);
    setCurrentImage(image);
  };

  return (
    <div className="product-card bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative group">
        <a href={`/products/${product.handle}`}>
          <Image
            src={currentImage}
            alt={product.title}
            width={400}
            height={400}
            className="object-cover w-full aspect-square transition-all duration-300 group-hover:scale-105"
          />
        </a>

        {product.discountPercent && (
          <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 text-sm rounded-md">
            -{product.discountPercent}%
          </div>
        )}
      </div>

      <div className="p-4 text-center">
        <a
          href={`/products/${product.handle}`}
          className="block text-gray-800 font-medium text-base line-clamp-2 hover:text-blue-600 transition"
        >
          {product.title}
        </a>

        <div className="mt-2 text-gray-900 font-semibold">
          {product.price}
          {product.comparePrice && (
            <span className="text-gray-400 line-through ml-2 text-sm">
              {product.comparePrice}
            </span>
          )}
        </div>

        {/* رنگ‌ها */}
        <div className="flex justify-center mt-3 gap-2">
          {product.colors.map((color) => (
            <button
              key={color.id}
              onClick={() => handleColorChange(color.id, color.image)}
              className={`w-5 h-5 rounded-full border-2 ${
                selectedColor === color.id
                  ? "border-gray-800"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color.value }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// 🧩 Discount Collection (Main)
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
      ],
      handle: "logitech-g29-driving-force-wired-controller",
    },
    {
      id: "2",
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
      ],
      handle: "logitech-g29-driving-force-wired-controller",
    },
    {
      id: "3",
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
      ],
      handle: "logitech-g29-driving-force-wired-controller",
    },
    {
      id: "4",
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
      ],
      handle: "logitech-g29-driving-force-wired-controller",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-3xl font-bold">🔥 Hot Deals</h3>
          <CountdownTimer targetDate="2030-04-19T12:00:00" />
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DiscountCollection;
