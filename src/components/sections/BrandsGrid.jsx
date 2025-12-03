import Image from "next/image";

export default function BrandsGrid() {
  const brands = [
    {
      id: 1,
      src: "/images/brands/Group_1000001831-2.webp",
      alt: "Brand 1",
      width: 304,
      height: 126,
    },
    {
      id: 2,
      src: "/images/brands/Group_1000001831.webp",
      alt: "Brand 2",
      width: 354,
      height: 126,
    },
    {
      id: 3,
      src: "/images/brands/Group_10000018313.webp",
      alt: "Brand 3",
      width: 304,
      height: 126,
    },
    {
      id: 4,
      src: "/images/brands/Group_10000018314.webp",
      alt: "Brand 4",
      width: 304,
      height: 126,
    },
    {
      id: 5,
      src: "/images/brands/Group_10000018315.webp",
      alt: "Brand 5",
      width: 304,
      height: 126,
    },
    {
      id: 6,
      src: "/images/brands/Group_10000018316.webp",
      alt: "Brand 6",
      width: 304,
      height: 126,
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-0">
        {/* Desktop */}
        <div className="hidden lg:flex border border-gray-300 rounded-2xl">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className={`flex-1 flex items-center justify-center py-6 ${
                index !== brands.length - 1 ? "border-r border-gray-300" : ""
              }`}
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={brand.width}
                height={brand.height}
                className="object-contain max-h-20 w-auto"
              />
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="lg:hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide border border-gray-300">
            {brands.map((brand, index) => (
              <div
                key={brand.id}
                className={`flex-shrink-0 w-2/3 md:w-1/3 flex items-center justify-center py-6 snap-center ${
                  index !== brands.length - 1 ? "border-r border-gray-300" : ""
                }`}
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={brand.width}
                  height={brand.height}
                  className="object-contain max-h-20 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
