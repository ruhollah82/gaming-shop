import { ProductCard } from "@/components/ui";

export default function CollectionGrid({ products, gridColumns }) {
  return (
    <div className={`grid ${gridColumns} gap-6`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} variant="collection" />
      ))}
    </div>
  );
}

