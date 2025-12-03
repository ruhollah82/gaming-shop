import Image from "next/image";
import Link from "next/link";
import CollectionProductCardActions from "./product-card/CollectionProductCardActions";
import CollectionProductVariantSelector from "./product-card/CollectionProductVariantSelector";

export default function ProductCard({ product }) {
  if (!product) return null;

  const {
    id,
    title,
    price,
    comparePrice,
    discountPercent,
    image,
    hoverImage,
    badges = [],
    variants = [],
  } = product;

  // Convert protocol-relative URLs to HTTPS
  const processedImage = image?.startsWith('//') ? `https:${image}` : image;
  const processedHoverImage = hoverImage?.startsWith('//') ? `https:${hoverImage}` : hoverImage;

  const isSoldOut = badges.includes("sold_out");
  const hasDiscount = Boolean(comparePrice && discountPercent);
  const savings =
    hasDiscount && Number.isFinite(comparePrice - price)
      ? (comparePrice - price).toFixed(2)
      : null;

  return (
    <article
      className={`group bg-white rounded-lg overflow-hidden relative border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        isSoldOut ? "opacity-75" : ""
      }`}
    >
      <div className="relative">
        <Link
          href={`/products/${id}`}
          className="block relative aspect-square overflow-hidden"
        >
          <Image
            src={processedImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className={`object-cover transition-opacity duration-300 ${
              processedHoverImage ? "opacity-100 group-hover:opacity-0" : ""
            }`}
            priority={false}
          />

          {processedHoverImage && (
            <Image
              src={processedHoverImage}
              alt={`${title} alternate`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              priority={false}
            />
          )}

          {isSoldOut && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-sm font-semibold uppercase tracking-wider text-white">
              Sold Out
            </div>
          )}

          <span className="sr-only">View {title}</span>
        </Link>

        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2 pointer-events-none">
          {hasDiscount && (
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-red-500 text-white text-xs font-semibold shadow">
              -{discountPercent}%
            </span>
          )}

          {isSoldOut && (
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-gray-700 text-white text-xs font-semibold shadow">
              Sold Out
            </span>
          )}
        </div>

        <CollectionProductCardActions productId={id} isSoldOut={isSoldOut} />
      </div>

      <div className="p-4 text-center space-y-3">
        <Link
          href={`/products/${id}`}
          className="block text-lg font-medium text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors"
        >
          {title}
        </Link>

        <div className="flex items-center justify-center gap-2 text-base font-semibold">
          {hasDiscount && (
            <span className="text-sm text-gray-500 line-through">
              ${comparePrice}
            </span>
          )}

          <span className={`text-lg ${hasDiscount ? "text-red-600" : ""}`}>
            ${price}
          </span>

          {savings && (
            <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-full">
              Save ${savings}
            </span>
          )}
        </div>

        <CollectionProductVariantSelector
          variants={variants}
          disabled={isSoldOut}
        />
      </div>
    </article>
  );
}
