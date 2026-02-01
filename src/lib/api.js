const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://your-api-domain.com"
    : "http://localhost:3001";

// Fallback data for build-time when JSON server might not be available
const fallbackData = {
  products: [
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
      handle: "sony-dualsense-wireless-controller",
    },
  ],
  sliderCategories: [
    {
      id: 1,
      title: "Controllers",
      count: 5,
      img: "https://ecomus-2-2.myshopify.com/cdn/shop/files/Group_1000001825_af736a90-cdb8-4284-9547-5a5a4f8acc82.webp?v=1750064375",
      link: "/collections/gaming",
      gradient: "from-blue-500 to-blue-600",
      icon: "mdi:gamepad-variant",
    },
  ],
  collectionCategories: [
    { id: 1, name: "Gaming" },
    { id: 2, name: "Controllers" },
    { id: 3, name: "Accessories" },
  ],
  features: [
    {
      id: 1,
      icon: "mdi:truck-fast",
      title: "Free Shipping",
      description: "Free express shipping worldwide on orders over $50",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1,
    },
    {
      id: 2,
      icon: "mdi:credit-card-multiple",
      title: "Flexible Payment",
      description: "Pay with multiple credit cards or installment plans",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.2,
    },
    {
      id: 3,
      icon: "mdi:refresh-circle",
      title: "Easy Returns",
      description: "30-day money back guarantee with free returns",
      gradient: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
    {
      id: 4,
      icon: "mdi:headset",
      title: "Premium Support",
      description: "24/7 customer support with expert assistance",
      gradient: "from-orange-500 to-red-500",
      delay: 0.4,
    },
  ],
  stats: [
    { id: 1, value: "10K+", label: "Happy Gamers", icon: "mdi:account-group" },
    { id: 2, value: "4.9/5", label: "Average Rating", icon: "mdi:star" },
    { id: 3, value: "98%", label: "Recommend", icon: "mdi:thumb-up" },
    { id: 4, value: "24/7", label: "Support", icon: "mdi:headset" },
  ],
  testimonials: [
    {
      id: 1,
      name: "Loretta",
      content:
        "Top-tier performance without the top-tier price. Elegant, durable, and built for serious play.",
      rating: 5,
      role: "Professional Gamer",
      avatar: "",
      verified: true,
      product: "Pro Gaming Mouse",
    },
    {
      id: 2,
      name: "Sandra",
      content:
        "Looks premium, feels premium — but your wallet won't even flinch. A hidden gem for any setup.",
      rating: 5,
      role: "Streamer",
      avatar: "",
      verified: true,
      product: "Mechanical Keyboard",
    },
  ],
  faq: [
    {
      id: 1,
      question: "Precision Meets Affordability",
      answer:
        "Experience pinpoint accuracy with a sensor that rivals top-tier brands — all at a price that doesn't break your budget.",
      icon: "mdi:target",
    },
    {
      id: 2,
      question: "Minimal Design, Maximum Impact",
      answer:
        "Crafted with a sleek, no-nonsense look, this gear delivers elite-level performance without flashy distractions.",
      icon: "mdi:palette-outline",
    },
  ],
  brands: [
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
  ],
  marquee: {
    items: ["Free express shipping worldwide"],
    config: {
      repeat: 10,
      backgroundColor: "rgb(153,20,242)",
    },
  },
  sortOptions: [
    { value: "manual", label: "Featured" },
    { value: "best-selling", label: "Best selling" },
    { value: "title-ascending", label: "Alphabetically, A-Z" },
    { value: "title-descending", label: "Alphabetically, Z-A" },
    { value: "price-ascending", label: "Price, low to high" },
    { value: "price-descending", label: "Price, high to low" },
    { value: "created-ascending", label: "Date, old to new" },
    { value: "created-descending", label: "Date, new to old" },
  ],
  imageFeatures: [
    {
      id: 1,
      icon: "mdi:rotate-360",
      title: "360° View",
      description: "Interactive product rotation",
    },
    {
      id: 2,
      icon: "mdi:zoom-in",
      title: "Zoom & Pan",
      description: "See every detail clearly",
    },
    {
      id: 3,
      icon: "mdi:video-outline",
      title: "Video Tour",
      description: "Watch product in action",
    },
  ],
  layoutOptions: {
    mobile: [
      { value: 0, label: "List View" },
      { value: 1, label: "Grid 1" },
      { value: 2, label: "Grid 2" },
    ],
    tablet: [
      { value: 0, label: "List View" },
      { value: 2, label: "Grid 2" },
      { value: 3, label: "Grid 3" },
      { value: 4, label: "Grid 4" },
    ],
    desktop: [
      { value: 0, label: "List View" },
      { value: 2, label: "Grid 2" },
      { value: 3, label: "Grid 3" },
      { value: 4, label: "Grid 4" },
      { value: 5, label: "Grid 5" },
      { value: 6, label: "Grid 6" },
    ],
  },
};

async function fetchWithFallback(endpoint, fallbackKey) {
  try {
    const res = await fetch(`${API_BASE_URL}/${endpoint}`, {
      // Add timeout for build scenarios
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      console.warn(
        `API endpoint ${endpoint} not available, using fallback data`,
      );
      return fallbackData[fallbackKey];
    }

    return res.json();
  } catch (error) {
    console.warn(
      `Failed to fetch ${endpoint}, using fallback data:`,
      error.message,
    );
    return fallbackData[fallbackKey];
  }
}

export async function getProducts() {
  return fetchWithFallback("products", "products");
}

export async function getProductById(id) {
  try {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      // Return first product from fallback if specific product not found
      return fallbackData.products[0];
    }

    return res.json();
  } catch (error) {
    console.warn(
      `Failed to fetch product ${id}, using fallback:`,
      error.message,
    );
    return fallbackData.products[0];
  }
}

export async function getSliderCategories() {
  return fetchWithFallback("sliderCategories", "sliderCategories");
}

export async function getCollectionCategories() {
  return fetchWithFallback("collectionCategories", "collectionCategories");
}

export async function getTestimonials() {
  return fetchWithFallback("testimonials", "testimonials");
}

export async function getBrands() {
  return fetchWithFallback("brands", "brands");
}

export async function getFeatures() {
  return fetchWithFallback("features", "features");
}

export async function getFAQ() {
  return fetchWithFallback("faq", "faq");
}

export async function getSortOptions() {
  return fetchWithFallback("sortOptions", "sortOptions");
}

export async function getMarquee() {
  return fetchWithFallback("marquee", "marquee");
}

export async function getStats() {
  return fetchWithFallback("stats", "stats");
}

export async function getImageFeatures() {
  return fetchWithFallback("imageFeatures", "imageFeatures");
}

export async function getLayoutOptions() {
  return fetchWithFallback("layoutOptions", "layoutOptions");
}
