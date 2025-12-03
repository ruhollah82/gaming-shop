"use client";

import Link from "next/link";
import { Tooltip, message } from "antd";
import { Icon } from "@iconify/react";

export default function CollectionProductCardActions({
  productId,
  isSoldOut,
}) {
  const handleWishlist = () => {
    message.success("Added to wishlist");
  };

  const handleCompare = () => {
    message.success("Added to compare");
  };

  const handleQuickView = () => {
    message.info("Quick view opened");
  };

  return (
    <div className="absolute bottom-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
      <Tooltip title={isSoldOut ? "Out of stock" : "View product"} placement="left">
        <Link
          href={`/products/${productId}`}
          className={`bg-white p-3 rounded-full shadow-lg transition-all flex items-center justify-center ${
            isSoldOut
              ? "opacity-60 cursor-not-allowed grayscale"
              : "hover:bg-gray-50 hover:shadow-xl hover:scale-105"
          }`}
          aria-disabled={isSoldOut}
        >
          <Icon
            icon={isSoldOut ? "mdi:eye-outline" : "mdi:cart-outline"}
            className="w-4 h-4 text-gray-700"
          />
          <span className="sr-only">
            {isSoldOut ? "View product" : "Quick add"}
          </span>
        </Link>
      </Tooltip>

      <Tooltip title="Add to wishlist" placement="left">
        <button
          type="button"
          onClick={handleWishlist}
          disabled={isSoldOut}
          className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Icon icon="mdi:heart-outline" className="w-4 h-4 text-gray-700" />
          <span className="sr-only">Add to wishlist</span>
        </button>
      </Tooltip>

      <Tooltip title="Add to compare" placement="left">
        <button
          type="button"
          onClick={handleCompare}
          disabled={isSoldOut}
          className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Icon icon="mdi:scale-balance" className="w-4 h-4 text-gray-700" />
          <span className="sr-only">Add to compare</span>
        </button>
      </Tooltip>

      <Tooltip title="Quick view" placement="left">
        <button
          type="button"
          onClick={handleQuickView}
          disabled={isSoldOut}
          className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 hover:shadow-xl transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Icon icon="mdi:eye-outline" className="w-4 h-4 text-gray-700" />
          <span className="sr-only">Quick view</span>
        </button>
      </Tooltip>
    </div>
  );
}

