# Migration Plan: Static Data → JSON Server + Axios + Zustand

## Overview
Migrate from static JavaScript data files to a JSON server API with axios for HTTP requests and Zustand for state management.

## Architecture

```
┌─────────────────┐
│   Components    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Zustand Stores │ (State Management)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  API Services   │ (Axios HTTP Client)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  JSON Server    │ (Mock API - Port 3001)
└─────────────────┘
         │
         ▼
┌─────────────────┐
│   JSON Files    │ (Data Storage)
└─────────────────┘
```

## Step-by-Step Implementation

### Phase 1: Setup & Configuration
1. ✅ Install dependencies (json-server, axios, zustand)
2. ✅ Create JSON data files from existing static data
3. ✅ Configure json-server
4. ✅ Set up axios instance with interceptors

### Phase 2: State Management
5. ✅ Create Zustand stores:
   - Products Store
   - Categories Store
   - UI Data Store (brands, features, FAQ, etc.)
   - Config Store

### Phase 3: API Layer
6. ✅ Create API service functions
7. ✅ Add error handling & loading states
8. ✅ Implement caching strategies

### Phase 4: Component Updates
9. ✅ Update components to use Zustand stores
10. ✅ Add loading & error states
11. ✅ Implement data fetching on mount

## File Structure

```
project-root/
├── db/
│   └── db.json              # JSON Server database
├── src/
│   ├── lib/
│   │   ├── api/
│   │   │   ├── axios.js     # Axios instance
│   │   │   ├── products.js  # Product API calls
│   │   │   ├── categories.js
│   │   │   └── ui.js
│   │   └── stores/
│   │       ├── useProductsStore.js
│   │       ├── useCategoriesStore.js
│   │       └── useUIStore.js
│   └── ...
└── package.json
```

## API Endpoints (JSON Server)

- `GET /products` - Get all products
- `GET /products/:id` - Get single product
- `GET /categories` - Get all categories
- `GET /sliderCategories` - Get slider categories
- `GET /testimonials` - Get testimonials
- `GET /brands` - Get brands
- `GET /features` - Get features
- `GET /faq` - Get FAQ items
- `GET /sortOptions` - Get sort options

## Benefits

1. **Separation of Concerns**: Data layer separated from UI
2. **Real API Simulation**: Mimics real backend behavior
3. **State Management**: Centralized state with Zustand
4. **Caching**: Zustand provides built-in caching
5. **Error Handling**: Centralized error handling
6. **Loading States**: Better UX with loading indicators
7. **Easy Testing**: Mock API for testing
8. **Future-Ready**: Easy to swap JSON server for real API

