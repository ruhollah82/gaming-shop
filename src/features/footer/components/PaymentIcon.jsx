// components/Footer/PaymentIcon.js
import { Icon } from "@iconify/react";

export default function PaymentIcon({ name, iconName }) {
  return (
    <div
      key={name}
      className="w-10 h-6 flex items-center justify-center"
      title={name}
    >
      <Icon icon={iconName} className="w-full h-auto" />
    </div>
  );
}
