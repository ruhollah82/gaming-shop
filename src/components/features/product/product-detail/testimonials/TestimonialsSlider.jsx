"use client";

import { Carousel } from "@/components/ui/Carousel";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSlider = ({ testimonials }) => {
  return (
    <Carousel
      options={{
        loop: true,
        align: "start",
        slidesToScroll: 1,
        dragFree: true,
      }}
      plugins={[]} // AutoHeight plugin can be added if needed
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
          index={index}
        />
      ))}
    </Carousel>
  );
};

export default TestimonialsSlider;
