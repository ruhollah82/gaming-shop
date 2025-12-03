"use client";

import { useState, useMemo } from "react";
import { Tooltip } from "antd";
import { Icon } from "@iconify/react";

export default function CollectionProductVariantSelector({
  variants = [],
  disabled = false,
}) {
  const initialVariant = useMemo(
    () => variants[0]?.id ?? null,
    [variants]
  );
  const [selectedVariant, setSelectedVariant] = useState(initialVariant);

  if (!variants.length) {
    return null;
  }

  const handleSelect = (variantId) => {
    if (disabled) return;
    setSelectedVariant(variantId);
  };

  return (
    <div className="mt-3 flex justify-center gap-1">
      {variants.map((variant) => {
        const isActive = selectedVariant === variant.id;

        return (
          <Tooltip key={variant.id} title={variant.colorName} placement="top">
            <button
              type="button"
              onClick={() => handleSelect(variant.id)}
              disabled={disabled}
              className={`relative p-0.5 rounded-full border-2 transition-all duration-200 ${
                isActive ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-300 hover:border-gray-400"
              } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            >
              <span className="sr-only">{variant.colorName}</span>
              <span
                className="w-6 h-6 rounded-full border border-gray-200 shadow-sm block"
                style={{ backgroundColor: variant.color }}
              >
                {isActive && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <Icon icon="mdi:check" className="w-3 h-3 text-white drop-shadow" />
                  </span>
                )}
              </span>
            </button>
          </Tooltip>
        );
      })}
    </div>
  );
}

