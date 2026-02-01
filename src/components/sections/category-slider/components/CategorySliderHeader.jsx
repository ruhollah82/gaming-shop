import { Icon } from "@iconify/react";

const CategorySliderHeader = ({
  title = "Shop by Category",
  subtitle = "Explore our premium gaming gear collection. From controllers to monitors, find everything you need to elevate your gaming experience.",
  badgeText = "Product Categories",
  badgeIcon = "mdi:tag-multiple",
  className = "text-center bg-gradient-to-br from-gray-50 to-white py-16"
}) => {
  return (
    <div className={`${className} animate-fade-in`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 mb-6 animate-slide-up-delay-1">
          <Icon icon={badgeIcon} className="w-5 h-5 text-blue-600" />
          <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
            {badgeText}
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
          {title}
        </h2>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default CategorySliderHeader;
