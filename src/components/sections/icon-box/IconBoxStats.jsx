import { Icon } from "@iconify/react";

const stats = [
  {
    value: "50K+",
    label: "Happy Customers",
    icon: "mdi:account-group",
  },
  { value: "4.9/5", label: "Average Rating", icon: "mdi:star" },
  { value: "24/7", label: "Support", icon: "mdi:headset" },
  { value: "99%", label: "Satisfaction", icon: "mdi:heart" },
];

export default async function IconBoxStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="text-center animate-slide-up-delay-1"
          style={{ animationDelay: `${0.8 + index * 0.1}s` }}
        >
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-white/20">
            <Icon icon={stat.icon} className="w-8 h-8 text-white" />
          </div>
          <div className="text-3xl font-bold mb-2">{stat.value}</div>
          <div className="text-white/80 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

