// components/Footer/PaymentIcon.js
import { Icon } from "@iconify/react";

export default function PaymentIcon({ name, iconName }) {
  return (
    <div
      key={name}
      className="w-12 h-8 flex items-center justify-center bg-white rounded-sm"
      title={name}
    >
      <Icon icon={iconName} className="w-8 h-6 object-contain" />
    </div>
  );
}
