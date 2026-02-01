"use client";

import { useState, useEffect } from "react";
import { getProducts } from "@/lib/api";
import FilterDrawer from "./FilterDrawer";
import CollectionControls from "./CollectionControls";
import CollectionGrid from "./CollectionGrid";

const getGridColumns = (selectedLayout) => {
  const map = {
    0: "grid-cols-1",
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
  };
  return map[selectedLayout] || "grid-cols-5";
};

export default function CollectionSection() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState(5);
  const [sortBy, setSortBy] = useState("best-selling");
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
        setFilteredProducts(productsData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Price filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1],
    );

    // Availability
    if (selectedAvailability.length > 0) {
      const inStock = selectedAvailability.includes("in-stock");
      const outOfStock = selectedAvailability.includes("out-of-stock");
      filtered = filtered.filter((p) => {
        if (inStock && outOfStock) return true;
        if (inStock) return p.inStock;
        if (outOfStock) return !p.inStock;
        return true;
      });
    }

    // Category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) =>
        selectedCategories.includes(p.category),
      );
    }

    // Sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-ascending":
          return a.price - b.price;
        case "price-descending":
          return b.price - a.price;
        case "title-ascending":
          return a.title.localeCompare(b.title);
        case "title-descending":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [products, sortBy, priceRange, selectedCategories, selectedAvailability]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-[30px] pb-[70px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-1/3 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-[30px] pb-[70px]">
      <div className="max-w-7xl mx-auto px-4">
        <CollectionControls
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
          selectedLayout={selectedLayout}
          onLayoutChange={setSelectedLayout}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <CollectionGrid
          products={filteredProducts}
          gridColumns={getGridColumns(selectedLayout)}
        />
      </div>

      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        selectedAvailability={selectedAvailability}
        onAvailabilityChange={setSelectedAvailability}
      />
    </div>
  );
}
