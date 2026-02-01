import { Icon } from "@iconify/react";

export default async function IconBoxHeader() {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 mb-6 animate-slide-up-delay-1">
        <Icon icon="mdi:shield-check" className="w-5 h-5 text-blue-600" />
        <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">
          Why Choose Us
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
        Premium Shopping Experience
      </h2>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        We're committed to providing you with the best shopping experience,
        from fast shipping to exceptional customer support.
      </p>
    </div>
  );
}

