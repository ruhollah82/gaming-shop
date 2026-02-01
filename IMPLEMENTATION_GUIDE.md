# Implementation Guide: JSON Server + Axios + Zustand

## Quick Start

### 1. Start JSON Server
```bash
npm run json-server
```
This starts the JSON server on `http://localhost:3001`

### 2. Start Next.js Dev Server
```bash
npm run dev
```

### 3. Or Run Both Together
```bash
npm run dev:all
```

## Architecture Overview

```
Components → Zustand Stores → API Services → Axios → JSON Server → db.json
```

## Usage Examples

### Using Products Store

```jsx
"use client";

import { useEffect } from "react";
import { useProductsStore } from "@/lib/stores";

export default function ProductsList() {
  const { products, loading, error, fetchProducts } = useProductsStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
}
```

### Using Categories Store

```jsx
"use client";

import { useEffect } from "react";
import { useCategoriesStore } from "@/lib/stores";

export default function CategorySlider() {
  const { sliderCategories, loading, fetchSliderCategories } = useCategoriesStore();

  useEffect(() => {
    fetchSliderCategories();
  }, [fetchSliderCategories]);

  // Use sliderCategories...
}
```

### Using UI Store

```jsx
"use client";

import { useEffect } from "react";
import { useUIStore } from "@/lib/stores";

export default function FeaturesSection() {
  const { features, loading, fetchFeatures } = useUIStore();

  useEffect(() => {
    fetchFeatures();
  }, [fetchFeatures]);

  // Use features...
}
```

### Direct API Calls (Server Components)

```jsx
import { productAPI } from "@/lib/api";

export default async function ProductPage({ params }) {
  const product = await productAPI.getById(params.id);
  
  return <div>{product.title}</div>;
}
```

## API Endpoints

All endpoints are available at `http://localhost:3001`:

- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID
- `GET /sliderCategories` - Get slider categories
- `GET /collectionCategories` - Get collection categories
- `GET /testimonials` - Get testimonials
- `GET /brands` - Get brands
- `GET /features` - Get features
- `GET /faq` - Get FAQ items
- `GET /marquee` - Get marquee data
- `GET /stats` - Get stats
- `GET /sortOptions` - Get sort options
- `GET /layoutOptions` - Get layout options

## Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Migration Checklist

- [ ] Update components to use Zustand stores
- [ ] Replace static imports with store hooks
- [ ] Add loading states
- [ ] Add error handling
- [ ] Test all data fetching
- [ ] Update server components to use direct API calls

