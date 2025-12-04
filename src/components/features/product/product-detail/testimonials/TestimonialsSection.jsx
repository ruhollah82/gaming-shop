"use client";

// components/TestimonialsSection.jsx
import TestimonialsHeader from "./TestimonialsHeader";
import StatsSection from "./StatsSection";
import TestimonialsSlider from "./TestimonialsSlider";
import TestimonialsCTA from "./TestimonialsCTA";
import { testimonials } from "./testimonialsData";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-green-500/5 to-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <TestimonialsHeader />
        <StatsSection />
        <TestimonialsSlider testimonials={testimonials} />
        <TestimonialsCTA />
      </div>
    </section>
  );
}
