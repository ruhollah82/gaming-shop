"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useUIStore } from "@/lib/stores";

export default function BrandsGridClient({ initialBrands = [] }) {
  const { brands, loading, error, fetchBrands } = useUIStore();
  const [displayBrands, setDisplayBrands] = useState(initialBrands);

  useEffect(() => {
    // If we have initial data from SSR, use it
    if (initialBrands.length > 0) {
      setDisplayBrands(initialBrands);
      // Also populate store for future use
      if (brands.length === 0) {
        useUIStore.setState({ brands: initialBrands });
      }
    } else if (brands.length > 0) {
      // Use store data if available
      setDisplayBrands(brands);
    } else if (!loading) {
      // Fetch if no data available
      fetchBrands();
    }
  }, [initialBrands, brands, loading, fetchBrands]);

  // Update display brands when store brands change
  useEffect(() => {
    if (brands.length > 0) {
      setDisplayBrands(brands);
    }
  }, [brands]);

  if (loading) {
    return (
      <section className="py-8 bg-white">
        <div className="container mx-auto px-0">
          <div className="flex items-center justify-center py-12">
            <div className="text-gray-500">Loading brands...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-8 bg-white">
        <div className="container mx-auto px-0">
          <div className="flex items-center justify-center py-12">
            <div className="text-red-500">Error loading brands: {error}</div>
          </div>
        </div>
      </section>
    );
  }

  if (!displayBrands || displayBrands.length === 0) {
    return null;
  }

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-0">
        {/* Desktop */}
        <div className="hidden lg:flex border border-gray-300 rounded-2xl">
          {displayBrands.map((brand, index) => (
            <div
              key={brand.id}
              className={`flex-1 flex items-center justify-center py-6 ${
                index !== displayBrands.length - 1 ? "border-r border-gray-300" : ""
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
            {displayBrands.map((brand, index) => (
              <div
                key={brand.id}
                className={`flex-shrink-0 w-2/3 md:w-1/3 flex items-center justify-center py-6 snap-center ${
                  index !== displayBrands.length - 1 ? "border-r border-gray-300" : ""
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

