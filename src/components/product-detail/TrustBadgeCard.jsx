// components/product-detail/TrustBadgeCard.jsx
import { Icon } from "@iconify/react";

export default function TrustBadgeCard() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <div className="flex items-center gap-3 mb-4">
        <Icon
          icon="mdi:shield-check-outline"
          className="w-6 h-6 text-green-600"
        />
        <span className="font-semibold">Guaranteed Safe Checkout</span>
      </div>
      <div className="flex flex-wrap gap-4">
        {["visa", "mastercard", "paypal", "amex"].map((p) => (
          <div
            key={p}
            className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center"
          >
            <Icon
              icon={`simple-icons:${p}`}
              className="w-6 h-6 text-gray-600"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
