mkdir -p src/{app/{category,product/[id]},components,lib} && \

# --- app files ---
cat > src/app/globals.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #0e0e10;
  color: #f3f3f3;
  font-family: system-ui, sans-serif;
}
EOF

cat > src/app/layout.js <<'EOF'
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Gaming Shop Demo",
  description: "A small gaming store demo built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
EOF

cat > src/app/page.js <<'EOF'
import Slider from "../components/Slider";
import ProductList from "../components/ProductList";

export default function HomePage() {
  return (
    <div className="px-4 py-8">
      <section className="mb-10">
        <Slider />
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <ProductList />
      </section>
    </div>
  );
}
EOF

cat > src/app/category/page.js <<'EOF'
import ProductList from "../../components/ProductList";

export default function CategoryPage() {
  return (
    <div className="px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Gaming Category</h1>
      <ProductList />
    </div>
  );
}
EOF

mkdir -p src/app/product/[id] && cat > src/app/product/[id]/page.js <<'EOF'
import { getProductById } from "../../../lib/api";

export default async function ProductPage({ params }) {
  const product = await getProductById(params.id);

  return (
    <div className="px-4 py-8">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg p-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-contain mb-4"
        />
        <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
        <p className="text-gray-400 mb-4">${product.price}</p>
        <p className="text-gray-300">{product.description}</p>
      </div>
    </div>
  );
}
EOF

# --- components ---
cat > src/components/Navbar.js <<'EOF'
export default function Navbar() {
  return (
    <nav className="bg-gray-900 px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-white">🎮 Gaming Shop</h1>
      <div className="space-x-6 text-gray-300">
        <a href="/" className="hover:text-white">Home</a>
        <a href="/category" className="hover:text-white">Category</a>
      </div>
    </nav>
  );
}
EOF

cat > src/components/Footer.js <<'EOF'
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-center py-6 text-gray-400 mt-10">
      <p>© 2025 Gaming Shop Demo. All rights reserved.</p>
    </footer>
  );
}
EOF

cat > src/components/Slider.js <<'EOF'
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Slider() {
  const slides = [
    "/images/hero/slide1.jpg",
    "/images/hero/slide2.jpg",
    "/images/hero/slide3.jpg",
  ];

  return (
    <Swiper spaceBetween={20} slidesPerView={1} loop>
      {slides.map((src, i) => (
        <SwiperSlide key={i}>
          <img
            src={src}
            alt={"Slide " + (i + 1)}
            className="w-full h-64 object-cover rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
EOF

cat > src/components/ProductCard.js <<'EOF'
export default function ProductCard({ product }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-2"
      />
      <h3 className="text-sm font-medium">{product.title}</h3>
      <p className="text-gray-400">${product.price}</p>
    </div>
  );
}
EOF

cat > src/components/ProductList.js <<'EOF'
"use client";
import { useEffect, useState } from "react";
import { getProducts } from "../lib/api";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
EOF

cat > src/components/Map.js <<'EOF'
"use client";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  useEffect(() => {
    const map = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);
    L.marker([51.505, -0.09]).addTo(map).bindPopup("Our Store").openPopup();
  }, []);

  return <div id="map" className="w-full h-64 rounded-lg" />;
}
EOF

# --- lib ---
cat > src/lib/api.js <<'EOF'
export async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function getProductById(id) {
  const res = await fetch(\`https://fakestoreapi.com/products/\${id}\`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
EOF
