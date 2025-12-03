import DiscountCollectionCountdown from "./discount-collection/DiscountCollectionCountdown";
import DiscountCollectionCarousel from "./discount-collection/DiscountCollectionCarousel";

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

export default function DiscountCollection() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
          <h3 className="text-3xl font-bold">🔥 Hot Deals</h3>
          <DiscountCollectionCountdown targetDate="2030-04-19T12:00:00" />
        </div>

        <DiscountCollectionCarousel products={products} />
      </div>
    </section>
  );
}
