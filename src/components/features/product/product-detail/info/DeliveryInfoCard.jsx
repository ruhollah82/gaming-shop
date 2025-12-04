// components/product-detail/DeliveryInfoCard.jsx
import { Icon } from "@iconify/react";

export default function DeliveryInfoCard() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-start gap-3">
          <Icon
            icon="mdi:truck-delivery-outline"
            className="w-6 h-6 text-blue-600 mt-1"
          />
          <div>
            <p className="font-semibold">Free Shipping</p>
            <p className="text-sm text-gray-600">
              Estimate delivery: <strong>3-6 days</strong> (US),{" "}
              <strong>12-26 days</strong> (International)
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Icon
            icon="mdi:refresh-circle-outline"
            className="w-6 h-6 text-green-600 mt-1"
          />
          <div>
            <p className="font-semibold">Easy Returns</p>
            <p className="text-sm text-gray-600">
              Return within <strong>30 days</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
