"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const categories = [
  {
    title: "Controllers",
    count: 5,
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001825_af736a90-cdb8-4284-9547-5a5a4f8acc82.webp?v=1750064375",
    link: "/collections/gaming",
  },
  {
    title: "Keyboards",
    count: 5,
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001826_19b2a88f-ea2f-489d-a8d2-f0f032a33b14_1.jpg?v=1744881975",
    link: "/collections/keyboards",
  },
  {
    title: "Mice",
    count: 5,
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001827_469928dd-dc0b-44e8-8346-1eaf8ce6c9cc.webp?v=1744882142",
    link: "/collections/mice",
  },
  {
    title: "Headsets",
    count: 5,
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001828_c83bf841-4770-4163-92c5-2c01943be2ae.webp?v=1744882252",
    link: "/collections/headsets",
  },
  {
    title: "Flight Simulation",
    count: 5,
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001829_e564fa55-a22c-41a9-911a-5a502039876e.webp?v=1744882310",
    link: "/collections/flight",
  },
  {
    title: "Race Simulation",
    count: 5,
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001830_df77d224-e4ff-4401-a38e-f5684872b9fd.webp?v=1744882421",
    link: "/collections/race",
  },
  {
    title: "Monitor",
    count: 5,
    img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_10000018257.jpg?v=1744882547",
    link: "/collections/monitor",
  },
];

export default function CategorySlider() {
  return (
    <>
      <div className="text-center  bg-white text-[#414558] py-10">
        <h2 className="text-3xl font-bold ">Shop by Category</h2>
      </div>
      <section className="bg-white p-16">
        <div className=" bg-[#23252E] text-white rounded-2xl mx-36">
          <div className="container mx-auto p-12">
            {/* ✅ کل باکس Swiper پس‌زمینه #23252E داره */}
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
              navigation
              pagination={{ clickable: true }}
              className="p-8 bg-[#23252E] rounded-2xl"
            >
              {categories.map((cat, i) => (
                <SwiperSlide key={i}>
                  <a
                    href={cat.link}
                    className="block text-center group flex flex-col items-center"
                  >
                    {/* ✅ باکس تکی با رنگ #3A3B43 */}
                    <div className="bg-[#3A3B43]  aspect-square relative overflow-hidden w-36 max-w-[220px] flex items-center justify-center transition-transform duration-300">
                      {/* ✅ عکس داخل باکس */}
                      <div className="relative w-[80%] h-[80%]">
                        <Image
                          src={cat.img}
                          alt={cat.title}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* ✅ متن زیر عکس */}
                    <div className="mt-3">
                      <h3 className="text-base font-semibold">{cat.title}</h3>
                      <p className="text-xs text-gray-400">{cat.count} items</p>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
