import Image from "next/image";
import { brands } from "@/data/ui";

export default function BrandsGrid() {

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
