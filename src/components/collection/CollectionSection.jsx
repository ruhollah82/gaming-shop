"use client";

import { useState, useEffect } from "react";
import { Row, Col, Card, Button, Dropdown, Divider } from "antd";
import { Icon } from "@iconify/react";
import ProductCard from "./ProductCard";
import FilterDrawer from "./FilterDrawer";
import LayoutSwitcher from "@/components/ui/LayoutSwitcher";
import { products } from "./data/products";
import { sortOptions } from "./data/sortOptions";

const { Meta } = Card;

export default function CollectionSection() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState(5);
  const [sortBy, setSortBy] = useState("best-selling");
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let filtered = [...products];

    // Price filter
    filtered = filtered.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
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
        selectedCategories.includes(p.category)
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
  }, [sortBy, priceRange, selectedCategories, selectedAvailability]);

  const handleLayoutChange = (layout) => setSelectedLayout(layout);

  const getGridColumns = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-[30px] pb-[70px]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Shop Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <button
              className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors  text-black"
              onClick={() => setIsFilterOpen(true)}
            >
              <Icon icon="mi:filter" className="w-5 h-5" />
              <span>Filter</span>
            </button>

            <LayoutSwitcher
              selectedLayout={selectedLayout}
              onLayoutChange={handleLayoutChange}
            />

            <div>
              <Dropdown
                menu={{
                  items: sortOptions.map((opt) => ({
                    key: opt.value,
                    label: opt.label,
                  })),
                  onClick: ({ key }) => setSortBy(key),
                  selectedKeys: [sortBy],
                }}
                trigger={["click"]}
              >
                <Button className="flex items-center justify-between min-w-[140px]">
                  <span className="hidden md:inline-block">
                    {sortOptions.find((opt) => opt.value === sortBy)?.label}
                  </span>
                  <span className="inline-block md:hidden">Sort</span>
                  <Icon icon="mdi:chevron-down" className="ml-2 w-4 h-4" />
                </Button>
              </Dropdown>
            </div>
          </div>
        </div>

        <div className={`grid ${getGridColumns()} gap-6`}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
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
