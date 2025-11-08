"use client";

import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Drawer,
  Select,
  Slider,
  Checkbox,
  Space,
  Divider,
  Tag,
  Tooltip,
  Dropdown,
  Collapse,
  InputNumber,
  Radio,
} from "antd";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const { Meta } = Card;
const { Option } = Select;
const { Panel } = Collapse;

// Mock data matching your HTML structure
const categories = [
  "Adapters",
  "Art decor",
  "Art installation",
  "Automated Collection",
  "Book store",
  "Cables",
  "Docks and hubs",
  "Electronic Accessories",
  "Eyeglasses",
  "Footwear",
  "Fry",
  "Gaming",
  "Handbag",
  "Handbag 2",
  "Headphone",
  "Headphone 1",
  "High Technology",
  "Home page",
  "Hydrogen",
  "Indoor Plants",
  "Iphone Case",
  "Jewelry",
  "Jewelry 2",
  "Keyboards",
  "Kitchen",
  "New Arrival",
  "Ornamental Plants",
  "Phone case",
  "Romance",
  "Screen protection",
  "Setup Gear",
  "Setup Gear 2",
  "Sneakers",
  "Sneakers 2",
  "Sock",
  "Sock women",
  "Sunglasses",
  "Tee",
  "Tee 2",
];

const products = [
  {
    id: "1",
    title: "SONY DualSense Wireless Controller",
    price: 100.0,
    comparePrice: null,
    image:
      "//ecomus-2-2.myshopify.com/cdn/shop/files/product_8ed7d0c5-2b50-4c03-bf7e-3ce9e5bef13f.png?v=1744880869&width=628",
    hoverImage:
      "//ecomus-2-2.myshopify.com/cdn/shop/files/image4.png?v=1744880869&width=628",
    isSoldOut: true,
    discountPercent: null,
    category: "Gaming",
    inStock: false,
    badges: ["sold_out"],
  },
  {
    id: "2",
    title: "SAMSUNG Odyssey G4",
    price: 300.0,
    comparePrice: 339.0,
    image:
      "//ecomus-2-2.myshopify.com/cdn/shop/files/image19.png?v=1744880554&width=628",
    hoverImage:
      "//ecomus-2-2.myshopify.com/cdn/shop/files/image18.png?v=1744880554&width=628",
    isSoldOut: true,
    discountPercent: 12,
    category: "Gaming",
    inStock: false,
    badges: ["on_sale", "sold_out"],
  },
  {
    id: "3",
    title: "RAZER Sphex V3",
    price: 35.0,
    comparePrice: 50.0,
    image:
      "//ecomus-2-2.myshopify.com/cdn/shop/files/product1.png?v=1744880484&width=628",
    hoverImage:
      "//ecomus-2-2.myshopify.com/cdn/shop/files/image6.png?v=1744880484&width=628",
    isSoldOut: true,
    discountPercent: 30,
    category: "Gaming",
    inStock: false,
    badges: ["on_sale", "sold_out"],
  },
  {
    id: "4",
    title: "Logitech G29 Driving Force Wired Controller",
    price: 85.0,
    comparePrice: 95.0,
    image:
      "//ecomus-2-2.myshopify.com/cdn/shop/files/image13.png?v=1744798206&width=628",
    hoverImage:
      "//ecomus-2-2.myshopify.com/cdn/shop/files/image12.png?v=1744798206&width=628",
    isSoldOut: false,
    discountPercent: 11,
    category: "Gaming",
    inStock: true,
    badges: ["on_sale"],
    variants: [
      {
        id: "black",
        color: "#000000",
        colorName: "Black",
        image:
          "//ecomus-2-2.myshopify.com/cdn/shop/files/image13.png?v=1744798206&width=628",
      },
    ],
  },
  {
    id: "5",
    title: "HyperX SoloCast",
    price: 135.0,
    comparePrice: null,
    image:
      "//ecomus-2-2.myshopify.com/cdn/shop/files/image24.png?v=1744880147&width=628",
    hoverImage:
      "//ecomus-2-2.myshopify.com/cdn/shop/files/image8.png?v=1744880147&width=628",
    isSoldOut: false,
    discountPercent: null,
    category: "Gaming",
    inStock: true,
    badges: [],
    variants: [
      {
        id: "white",
        color: "#FFFFFF",
        colorName: "White",
        image:
          "//ecomus-2-2.myshopify.com/cdn/shop/files/image7.png?v=1744880147&width=628",
      },
      {
        id: "black",
        color: "#000000",
        colorName: "Black",
        image:
          "//ecomus-2-2.myshopify.com/cdn/shop/files/image24.png?v=1744880147&width=628",
      },
    ],
  },
];

const sortOptions = [
  { value: "manual", label: "Featured" },
  { value: "best-selling", label: "Best selling" },
  { value: "title-ascending", label: "Alphabetically, A-Z" },
  { value: "title-descending", label: "Alphabetically, Z-A" },
  { value: "price-ascending", label: "Price, low to high" },
  { value: "price-descending", label: "Price, high to low" },
  { value: "created-ascending", label: "Date, old to new" },
  { value: "created-descending", label: "Date, new to old" },
];

// Layout options matching your HTML structure
const mobileLayouts = [
  { value: 0, label: "List View", icon: <ListLayoutIcon /> },
  { value: 1, label: "Grid 1", icon: <GridLayout1Icon /> },
  { value: 2, label: "Grid 2", icon: <GridLayout2Icon /> },
];

const tabletLayouts = [
  { value: 0, label: "List View", icon: <ListLayoutIcon /> },
  { value: 2, label: "Grid 2", icon: <GridLayout2Icon /> },
  { value: 3, label: "Grid 3", icon: <GridLayout3Icon /> },
  { value: 4, label: "Grid 4", icon: <GridLayout4Icon /> },
];

const desktopLayouts = [
  { value: 0, label: "List View", icon: <ListLayoutIcon /> },
  { value: 2, label: "Grid 2", icon: <GridLayout2Icon /> },
  { value: 3, label: "Grid 3", icon: <GridLayout3Icon /> },
  { value: 4, label: "Grid 4", icon: <GridLayout4Icon /> },
  { value: 5, label: "Grid 5", icon: <GridLayout5Icon /> },
  { value: 6, label: "Grid 6", icon: <GridLayout6Icon /> },
];

export default function CollectionSection() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState(5);
  const [sortBy, setSortBy] = useState("best-selling");
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filter and sort logic
  useEffect(() => {
    let filtered = [...products];

    // Apply filters here based on state
    // Price filter
    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Availability filter
    if (selectedAvailability.length > 0) {
      const inStockSelected = selectedAvailability.includes("in-stock");
      const outOfStockSelected = selectedAvailability.includes("out-of-stock");

      filtered = filtered.filter((product) => {
        if (inStockSelected && outOfStockSelected) return true;
        if (inStockSelected) return product.inStock;
        if (outOfStockSelected) return !product.inStock;
        return true;
      });
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
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

  const handleLayoutChange = (layout) => {
    setSelectedLayout(layout);
  };

  const getGridColumns = () => {
    const layoutMap = {
      0: "grid-cols-1",
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
    };
    return layoutMap[selectedLayout] || "grid-cols-5";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-[30px] pb-[70px]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Shop Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Left side - Filter */}
            <div>
              <button
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setIsFilterOpen(true)}
              >
                <Icon icon="mi:filter" className="w-5 h-5" />
                <span>Filter</span>
              </button>
            </div>

            {/* Center - Layout Switchers */}
            <div className="flex items-center gap-2">
              {/* Mobile Layout Switcher */}
              <div className="flex md:hidden gap-1">
                {mobileLayouts.map((layout) => (
                  <button
                    key={layout.value}
                    onClick={() => handleLayoutChange(layout.value)}
                    className={`p-2 rounded ${
                      selectedLayout === layout.value
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {layout.icon}
                  </button>
                ))}
              </div>

              {/* Tablet Layout Switcher */}
              <div className="hidden md:flex lg:hidden gap-1">
                {tabletLayouts.map((layout) => (
                  <button
                    key={layout.value}
                    onClick={() => handleLayoutChange(layout.value)}
                    className={`p-2 rounded ${
                      selectedLayout === layout.value
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {layout.icon}
                  </button>
                ))}
              </div>

              {/* Desktop Layout Switcher */}
              <div className="hidden lg:flex gap-1">
                {desktopLayouts.map((layout) => (
                  <button
                    key={layout.value}
                    onClick={() => handleLayoutChange(layout.value)}
                    className={`p-2 rounded ${
                      selectedLayout === layout.value
                        ? "bg-blue-100 text-blue-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {layout.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Right side - Sorting */}
            <div>
              <Dropdown
                menu={{
                  items: sortOptions.map((option) => ({
                    key: option.value,
                    label: option.label,
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

        {/* Products Grid */}
        <div>
          <div>
            <div className={`grid ${getGridColumns()} gap-6`}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filter Drawer */}
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

// Product Card Component
function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(
    product.variants?.[0]?.id || ""
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="hdt-card-product hdt-pr-style1 group bg-white rounded-lg overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      style={{ opacity: 1, transform: "translateY(0px)" }}
    >
      <div className="hdt-card-product__wrapper" data-reveal="slide-in">
        {/* Product Media */}
        <div className="hdt-card-product__media relative overflow-hidden aspect-square">
          <a
            href={`/products/${
              product.handle || product.title.toLowerCase().replace(/\s+/g, "-")
            }`}
            className="hdt-card-product__media-wrapp block relative w-full h-full"
          >
            <img
              src={product.image}
              alt={product.title}
              width="628"
              height="628"
              loading="lazy"
              className={`hdt-card-product__media--main absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                isHovered && product.hoverImage ? "opacity-0" : "opacity-100"
              }`}
            />
            {product.hoverImage && (
              <img
                src={product.hoverImage}
                alt={product.title}
                width="628"
                height="628"
                loading="lazy"
                className={`hdt-card-product__media--hover absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </a>

          {/* Badges */}
          <div className="hdt-badge__wrapp absolute top-2 left-2 z-10 flex flex-col gap-1 pointer-events-none">
            {product.badges.includes("sold_out") && (
              <span className="hdt-badge hdt-badge__sold_out bg-red-500 text-white px-2 py-1 text-xs rounded">
                Sold out
              </span>
            )}
            {product.badges.includes("on_sale") && product.discountPercent && (
              <span className="hdt-badge hdt-badge__on-sale bg-green-500 text-white px-2 py-1 text-xs rounded">
                -{product.discountPercent}%
              </span>
            )}
          </div>

          {/* Product Action Buttons */}
          <div className="hdt-product-btns absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="flex flex-col gap-2">
              {/* Quick Add Button */}
              <Tooltip title="Quick add" placement="top">
                <button
                  type="button"
                  aria-controls="hdt-quick-add-modal"
                  aria-expanded="false"
                  className="hdt-card-product__btn-ultra hdt-pr_btn bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                >
                  <Icon
                    icon="mdi:cart-outline"
                    className="w-4 h-4 text-gray-700"
                  />
                  <span className="sr-only">Quick add</span>
                </button>
              </Tooltip>

              {/* Wishlist Button */}
              <Tooltip title="Add to Wishlist" placement="top">
                <button
                  className="hdt-card-product__btn-wishlist hdt-pr_btn bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                  tabIndex={0}
                >
                  <Icon
                    icon="mdi:heart-outline"
                    className="w-4 h-4 text-gray-700"
                  />
                  <span className="sr-only">Add to Wishlist</span>
                </button>
              </Tooltip>

              {/* Compare Button */}
              <Tooltip title="Add to Compare" placement="top">
                <button
                  className="hdt-pr_btn hdt-card-product__btn-compare bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                  tabIndex={0}
                >
                  <Icon
                    icon="mdi:scale-balance"
                    className="w-4 h-4 text-gray-700"
                  />
                  <span className="sr-only">Add to Compare</span>
                </button>
              </Tooltip>

              {/* Quick View Button */}
              <Tooltip title="Quick view" placement="top">
                <button
                  type="button"
                  aria-controls="hdt-quick-view-modal"
                  aria-expanded="false"
                  className="hdt-card-product__btn-quick-view hdt-pr_btn bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                >
                  <Icon
                    icon="mdi:eye-outline"
                    className="w-4 h-4 text-gray-700"
                  />
                  <span className="sr-only">Quick view</span>
                </button>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="hdt-card-product__info p-4 text-center">
          <a
            href={`/products/${
              product.handle || product.title.toLowerCase().replace(/\s+/g, "-")
            }`}
            className="hdt-card-product__title block text-lg font-normal text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors"
          >
            {product.title}
          </a>

          <div className="hdt-price-wrapp text-base font-semibold">
            <div className="hdt-price__list">
              <div className="hdt-price">
                <span className="sr-only">Sale price</span>
                <span className="text-gray-900">${product.price}</span>
              </div>
            </div>
          </div>

          {/* Color Variants */}
          {product.variants && product.variants.length > 0 && (
            <div className="hdt-color-list mt-3">
              <Radio.Group
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="hdt-color-list hdt-color-list-style-1 flex justify-center gap-2"
              >
                {product.variants.map((variant) => (
                  <Tooltip
                    key={variant.id}
                    title={variant.colorName}
                    placement="top"
                  >
                    <Radio.Button
                      value={variant.id}
                      className="hdt-color-list-item"
                    >
                      <label
                        className={`hdt-color-list-color rounded-full w-6 h-6 border border-gray-300 cursor-pointer flex items-center justify-center ${
                          variant.colorName?.toLowerCase() === "white"
                            ? "bg-white"
                            : ""
                        }`}
                        style={{
                          backgroundColor:
                            variant.colorName?.toLowerCase() !== "white"
                              ? variant.color
                              : undefined,
                        }}
                      >
                        <span
                          className="hdt-color-bg rounded-full w-4 h-4 block"
                          style={{ backgroundColor: variant.color }}
                        />
                        <span className="sr-only">{variant.colorName}</span>
                      </label>
                    </Radio.Button>
                  </Tooltip>
                ))}
              </Radio.Group>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Filter Drawer Component

function FilterDrawer({
  isOpen,
  onClose,
  priceRange,
  onPriceRangeChange,
  selectedAvailability,
  onAvailabilityChange,
}) {
  return (
    <Drawer
      title={null} // We'll render header inside body for full control
      placement="left"
      onClose={onClose}
      open={isOpen}
      width={400}
      styles={{
        body: { padding: 0 },
        header: { display: "none" },
      }}
      className="!rounded-none"
    >
      {/* Drawer Header (matches your HTML) */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h6 className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900">
          <Icon icon="mdi:tune" className="w-5 h-5" />
          <span>Filter</span>
        </h6>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
          aria-label="Close"
        >
          <Icon icon="mdi:close" className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="h-[calc(100vh-64px)] overflow-y-auto">
        {/* Categories Accordion */}
        <Collapse
          defaultActiveKey={["1"]}
          bordered={false}
          className="!bg-transparent"
          expandIcon={({ isActive }) => (
            <Icon
              icon="mdi:chevron-down"
              className={`w-5 h-5 text-gray-600 transition-transform ${
                isActive ? "rotate-180" : ""
              }`}
            />
          )}
        >
          <Panel
            header={
              <span className="text-lg lg:text-xl font-normal text-gray-900">
                Product categories
              </span>
            }
            key="1"
            className="!border-b !border-gray-200 !p-0 !bg-transparent"
            showArrow={true}
          >
            <div className="max-h-60 overflow-y-auto pl-2 pr-4 pb-4">
              <div className="space-y-1">
                {categories.map((category) => (
                  <div key={category} className="relative">
                    <a
                      href={`/collections/${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="block py-2 px-3 text-base text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors"
                    >
                      {category}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Panel>
        </Collapse>

        {/* Availability Accordion */}
        <Collapse
          defaultActiveKey={["2"]}
          bordered={false}
          className="!bg-transparent"
          expandIcon={({ isActive }) => (
            <Icon
              icon="mdi:chevron-down"
              className={`w-5 h-5 text-gray-600 transition-transform ${
                isActive ? "rotate-180" : ""
              }`}
            />
          )}
        >
          <Panel
            header={
              <span className="text-lg lg:text-xl font-normal text-gray-900">
                Availability
              </span>
            }
            key="2"
            className="!border-b !border-gray-200 !p-0 !bg-transparent"
          >
            <div className="px-4 pb-4">
              <ul className="space-y-2">
                {["in-stock", "out-of-stock"].map((item) => (
                  <li key={item}>
                    <Checkbox
                      checked={selectedAvailability.includes(item)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          onAvailabilityChange([...selectedAvailability, item]);
                        } else {
                          onAvailabilityChange(
                            selectedAvailability.filter((i) => i !== item)
                          );
                        }
                      }}
                      className="!items-start"
                    >
                      <span className="text-base text-gray-700 ml-2">
                        {item === "in-stock" ? "In stock" : "Out of stock"}{" "}
                        <span className="text-gray-500">
                          ({item === "in-stock" ? 5 : 3})
                        </span>
                      </span>
                    </Checkbox>
                  </li>
                ))}
              </ul>
            </div>
          </Panel>
        </Collapse>

        {/* Price Accordion */}
        <Collapse
          defaultActiveKey={["3"]}
          bordered={false}
          className="!bg-transparent"
          expandIcon={({ isActive }) => (
            <Icon
              icon="mdi:chevron-down"
              className={`w-5 h-5 text-gray-600 transition-transform ${
                isActive ? "rotate-180" : ""
              }`}
            />
          )}
        >
          <Panel
            header={
              <span className="text-lg lg:text-xl font-normal text-gray-900">
                Price
              </span>
            }
            key="3"
            className="!border-b !border-gray-200 !p-0 !bg-transparent"
          >
            <div className="px-4 pb-4">
              <div className="mb-4">
                <Slider
                  range
                  min={0}
                  max={300}
                  value={priceRange}
                  onChange={onPriceRangeChange}
                  className="[&_.ant-slider-track]:!bg-blue-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Price:</span>
                <div className="flex items-center gap-1">
                  <span className="text-gray-700">$</span>
                  <InputNumber
                    min={0}
                    max={300}
                    value={priceRange[0]}
                    onChange={(val) =>
                      onPriceRangeChange([val || 0, priceRange[1]])
                    }
                    className="w-16 !text-sm"
                  />
                </div>
                <span className="text-gray-700">-</span>
                <div className="flex items-center gap-1">
                  <span className="text-gray-700">$</span>
                  <InputNumber
                    min={0}
                    max={300}
                    value={priceRange[1]}
                    onChange={(val) =>
                      onPriceRangeChange([priceRange[0], val || 300])
                    }
                    className="w-16 !text-sm"
                  />
                </div>
              </div>
            </div>
          </Panel>
        </Collapse>
      </div>
    </Drawer>
  );
}

// Layout Icons (keeping custom SVG for layout icons as they are specific)
function ListLayoutIcon() {
  return (
    <svg width="19" height="13" viewBox="0 0 19 13" fill="currentColor">
      <circle cx="2.4375" cy="2.4375" r="2.4375" />
      <circle cx="2.4375" cy="10.5625" r="2.4375" />
      <rect x="7" y="2" width="12" height="1" />
      <rect x="7" y="10" width="12" height="1" />
    </svg>
  );
}

function GridLayout1Icon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
      <circle cx="8.4375" cy="2.4375" r="2.4375" />
      <circle cx="8.4375" cy="10.5625" r="2.4375" />
    </svg>
  );
}

function GridLayout2Icon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
      <circle cx="2.4375" cy="2.4375" r="2.4375" />
      <circle cx="10.5625" cy="2.4375" r="2.4375" />
      <circle cx="2.4375" cy="10.5625" r="2.4375" />
      <circle cx="10.5625" cy="10.5625" r="2.4375" />
    </svg>
  );
}

function GridLayout3Icon() {
  return (
    <svg width="22" height="13" viewBox="0 0 22 13" fill="currentColor">
      <circle cx="2.4375" cy="2.4375" r="2.4375" />
      <circle cx="10.5625" cy="2.4375" r="2.4375" />
      <circle cx="18.6875" cy="2.4375" r="2.4375" />
      <circle cx="2.4375" cy="10.5625" r="2.4375" />
      <circle cx="10.5625" cy="10.5625" r="2.4375" />
      <circle cx="18.6875" cy="10.5625" r="2.4375" />
    </svg>
  );
}

function GridLayout4Icon() {
  return (
    <svg width="30" height="13" viewBox="0 0 30 13" fill="currentColor">
      <circle cx="2.4375" cy="2.4375" r="2.4375" />
      <circle cx="10.5625" cy="2.4375" r="2.4375" />
      <circle cx="18.6875" cy="2.4375" r="2.4375" />
      <circle cx="26.8125" cy="2.4375" r="2.4375" />
      <circle cx="2.4375" cy="10.5625" r="2.4375" />
      <circle cx="10.5625" cy="10.5625" r="2.4375" />
      <circle cx="18.6875" cy="10.5625" r="2.4375" />
      <circle cx="26.8125" cy="10.5625" r="2.4375" />
    </svg>
  );
}

function GridLayout5Icon() {
  return (
    <svg width="38" height="13" viewBox="0 0 38 13" fill="currentColor">
      <circle cx="2.4375" cy="2.4375" r="2.4375" />
      <circle cx="10.5625" cy="2.4375" r="2.4375" />
      <circle cx="18.6875" cy="2.4375" r="2.4375" />
      <circle cx="26.8125" cy="2.4375" r="2.4375" />
      <circle cx="35.4375" cy="2.4375" r="2.4375" />
      <circle cx="2.4375" cy="10.5625" r="2.4375" />
      <circle cx="10.5625" cy="10.5625" r="2.4375" />
      <circle cx="18.6875" cy="10.5625" r="2.4375" />
      <circle cx="26.8125" cy="10.5625" r="2.4375" />
      <circle cx="35.4375" cy="10.5625" r="2.4375" />
    </svg>
  );
}

function GridLayout6Icon() {
  return (
    <svg width="46" height="13" viewBox="0 0 46 13" fill="currentColor">
      <circle cx="2.4375" cy="2.4375" r="2.4375" />
      <circle cx="10.5625" cy="2.4375" r="2.4375" />
      <circle cx="18.6875" cy="2.4375" r="2.4375" />
      <circle cx="26.8125" cy="2.4375" r="2.4375" />
      <circle cx="35.4375" cy="2.4375" r="2.4375" />
      <circle cx="43.4375" cy="2.4375" r="2.4375" />
      <circle cx="2.4375" cy="10.5625" r="2.4375" />
      <circle cx="10.5625" cy="10.5625" r="2.4375" />
      <circle cx="18.6875" cy="10.5625" r="2.4375" />
      <circle cx="26.8125" cy="10.5625" r="2.4375" />
      <circle cx="35.4375" cy="10.5625" r="2.4375" />
      <circle cx="43.4375" cy="10.5625" r="2.4375" />
    </svg>
  );
}
