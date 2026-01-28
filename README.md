## Gaming Shop – Next.js E‑commerce UI

Gaming Shop is a **modern, responsive storefront UI** for a gaming / electronics shop, built with **Next.js App Router**.  
It focuses on **high‑quality frontend experience** (product listings, product detail page, marketing sections) using **mock data** and can be connected to a real backend later (Shopify, custom API, etc.).

---

### Project Highlights

- **Purpose**:  
  A demo / starter template for a gaming store with rich UI, animations, and best‑practice layout structure.

- **Key Features**:
  - **Home page hero & marketing sections** (banner, marquee, icon boxes, testimonials, brands grid).
  - **Collection / catalog page** with filters, layout switcher, and product cards.
  - **Product detail page** with gallery, lightbox, FAQs, comparison, testimonials, and CTAs.
  - **Store location section** with interactive map.
  - **Clean, feature‑based architecture** for easy extension and refactoring.

- **Status**:  
  Frontend‑only demo using static data; no real checkout or authentication is wired up yet.

---

### Tech Stack

- **Core**
  - **Next.js 16** (App Router, `src/app`)
  - **React 19**
  - **Node.js** (via your local environment)

- **Styling & UI**
  - **Tailwind CSS 4**
  - **shadcn‑ui** components
  - **Ant Design (antd)** (selected components)

- **UX & Interactions**
  - **framer‑motion / motion** – animations and transitions
  - **Embla Carousel** & **Swiper** – sliders / carousels

- **Data / Utilities**
  - **faker** – generating mock data (where needed)
  - Static data modules under `src/data`

- **Icons & Maps**
  - **lucide‑react**, **@iconify/react** – icons
  - **leaflet** – interactive store location map

- **Images / Assets**
  - Local assets in `public/images/**`
  - Remote images from Shopify domain `ecomus-2-2.myshopify.com` (configured in `next.config.mjs`)

---

### Application Architecture

The app uses a **feature‑oriented architecture** on top of the Next.js App Router.

- **App Router (`src/app`)**
  - **`layout.js`** – root layout; imports `Header`, `Navbar`, and `Footer`, defines base `<html>` and `<body>`, global styles, and site metadata.
  - **`page.js`** – home page; composes hero banner, marketing sections, discount collections, testimonials, and store location.
  - **`collections/page.js`** – product collection / category page using the `CollectionSection` feature.
  - **`products/[id]/page.js`** – dynamic product detail route that passes `productId` to the `ProductDetail` feature.

- **Features (`src/features`)**
  - **`navbar`** – main site navigation, including mobile menu and search.
  - **`footer`** – footer with brand section, payment icons, and bottom links.
  - **`collections`** – collection page UI: filters, layout switcher icons, collection product cards, and responsive grid/list views.
  - **`home`** – discount collection sections, countdowns, and carousels for promotions.
  - **`product`** – interactive product cards for use across the site.

- **Shared Components (`src/components`)**
  - **`layout`** – `Header` and layout primitives used in the root layout.
  - **`sections`** – high‑level sections used on the home page:
    - **`Banner`**, **`FreeExpressMarquee`**, **`IconBoxSection`**, **`CategorySlider`**,  
      **`TestimonialSlider`**, **`BrandsGrid`**, **`StoreLocationSection`**, **`StoreMap`**.
  - **`features/product/product-detail`** – detailed product page building blocks:
    - **`images`** – image gallery, thumbnails, and optional lightbox (`useLightbox` hook).
    - **`info`** – core product information, pricing, delivery info, and comparison section.
    - **`faq`** – frequently asked questions section.
    - **`testimonials`** – product‑specific testimonials, stats, and section header.
    - **`shared`** – shared animations / utilities for the detail page.

- **UI Primitives (`src/components/ui`)**
  - **`ProductCard`** – reusable product card component.
  - **`Modal`** – `AskQuestionModal`, `ShareModal`, and `QuestionForm`.
  - **`Carousel`** – wrapper components around Embla / Swiper (navigation, dots, counters).
  - **`Badge`, `Card`, `icons`** – smaller building blocks such as layout switcher, shipping icon, and payment security cards.

- **Data Layer (`src/data`)**
  - **`products`** – product list and detail data.
  - **`categories`** – collection categories and slider categories.
  - **`testimonials`** – testimonial items and statistics.
  - **`ui`** – brands, FAQs, feature highlights, image feature descriptions, marquee text, layout options.
  - **`config`** – sort options and UI configuration.

- **Lib (`src/lib/api.js`)**
  - Central place to fetch / transform data (currently used for static or mock data; can be swapped for real APIs later).

---

### Project Structure (High Level)

```text
src/
  app/
    layout.js             # Root layout (Header, Navbar, Footer, global styles)
    page.js               # Home page
    collections/page.js   # Collections / catalog page
    products/[id]/...     # Product detail route and component

  features/
    navbar/               # Navigation and mobile navigation
    footer/               # Footer layout and content
    collections/          # Collections page, filters, layout switcher, product cards
    home/                 # Discount collections and promotional features
    product/              # Interactive product cards

  components/
    layout/               # Header and layout helpers
    sections/             # Home-page sections and composed UIs
    features/product/...  # Product detail / FAQ / testimonials / gallery
    ui/                   # Reusable UI primitives, modals, carousels, icons, cards

  data/
    products/             # Product data
    categories/           # Category and slider data
    testimonials/         # Testimonials data
    ui/                   # Brands, FAQs, features, stats, layout options
    config/               # Sort options and config

  lib/
    api.js                # Data fetching / abstraction layer
```

---

### Getting Started

#### 1. **Prerequisites**

- **Node.js** (LTS recommended)  
- **npm**, **pnpm**, or **yarn**

#### 2. **Install Dependencies**

```bash
npm install
# or
pnpm install
# or
yarn install
```

#### 3. **Run the Development Server**

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

#### 4. **Build & Run Production**

```bash
npm run build
npm start
```

---

### Available Scripts

- **`npm run dev`**: Start the Next.js development server on `http://localhost:3000`.
- **`npm run build`**: Create an optimized production build.
- **`npm start`**: Run the production server using the built assets.

---

### Customization & Extension

- **Connect to a real backend**:
  - Replace or extend the static modules in `src/data` with real API calls from `src/lib/api.js`.
  - Optionally wire up Shopify, a custom headless CMS, or an internal product API.

- **Add new sections**:
  - Create new section components in `src/components/sections` and compose them in `src/app/page.js`.

- **Design system updates**:
  - Tweak Tailwind configuration and shadcn‑ui tokens to match your brand.
  - Centralize colors, typography, and spacing for a cohesive look.

---
