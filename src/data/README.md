# Data Directory Structure

This directory contains all static data used throughout the application, organized by functionality.

## Directory Structure

```
src/data/
├── products/          # Product-related data
│   └── products.js    # Main product catalog
├── categories/        # Category-related data
│   ├── collection-categories.js  # Categories for collections page
│   └── slider-categories.js      # Categories for homepage slider
├── ui/                # UI component data
│   ├── features.js          # IconBoxSection features
│   ├── brands.js            # Brand logos for BrandsGrid
│   ├── marquee.js           # FreeExpressMarquee data & config
│   ├── faq.js               # FAQ items
│   ├── stats.js             # Testimonials stats
│   ├── image-features.js    # ImageFeatures component data
│   └── layout-options.js    # LayoutSwitcher options
├── testimonials/      # Customer testimonials
│   └── testimonials.js      # Testimonial data
└── config/           # Configuration data
    └── sort-options.js      # Product sorting options
```

## Usage

Import data from the main index:

```javascript
// Import everything
import { products, testimonials, features } from '@/data';

// Or import from specific subdirectories
import { products } from '@/data/products';
import { testimonials } from '@/data/testimonials';
import { features, brands } from '@/data/ui';
```

## Adding New Data

1. Choose the appropriate subdirectory based on functionality
2. Create a new data file with descriptive naming
3. Export the data as a named export
4. Add the export to the appropriate index.js file
5. Update components to import from the new location

## Benefits

- **Centralized**: All static data in one location
- **Organized**: Grouped by functionality
- **Maintainable**: Easy to find and modify data
- **Reusable**: Data can be imported anywhere in the app
- **Type-Safe**: Better development experience with proper exports
