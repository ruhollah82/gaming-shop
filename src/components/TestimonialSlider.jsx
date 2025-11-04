import { useState, useEffect } from "react";
import Image from "next/image";

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      title: "OUR CUSTOMER'S RAVE REVIEWS",
      text: "This four-button console is a perfect throwback! Simple design with classic games like Contra and Mario—great for reliving childhood memories.",
      author: "Robert Smith",
      product: {
        name: "Cooler Master Caliber R2",
        link: "/products/cooler-master-caliber-r2",
      },
      image: {
        src: "/images/testimonial/testimonial.webp",
        alt: "Robert Smith",
      },
    },
    {
      id: 2,
      title: "OUR CUSTOMER'S RAVE REVIEWS",
      text: "With stunning visuals and seamless motion tracking, this VR headset delivers an immersive experience that's perfect for gaming and virtual exploration.",
      author: "Jack Smith",
      product: {
        name: "HTC VIVE Pro Virtual Reality Headset",
        link: "/products/htc-vive-pro-virtual-reality-headset",
      },
      image: {
        src: "/images/testimonial/testimonial2_f3988b0f-61f1-48e2-a801-8ef2806ff05b.webp",
        alt: "Jack Smith",
      },
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative py-16 bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/testimonial/kooh.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Testimonial Content */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-2xl  p-8 lg:p-12 ">
              <div className="relative h-80 overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className="w-full flex-shrink-0 h-full flex flex-col justify-center"
                    >
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <svg
                          className="w-10 h-8 text-white/70"
                          viewBox="0 0 46 31"
                          fill="none"
                        >
                          <path
                            d="M32.4413 30.5L37.8204 19.9545L38.1913 19.2273H37.375H26.375V0.5H45.5V19.6071L39.9438 30.5H32.4413ZM6.56633 30.5L11.9454 19.9545L12.3163 19.2273H11.5H0.5V0.5H19.625V19.6071L14.0688 30.5H6.56633Z"
                            stroke="currentColor"
                          />
                        </svg>
                      </div>

                      {/* Title */}
                      <h3 className="text-sm font-semibold text-white mb-6 tracking-wide uppercase">
                        {testimonial.title}
                      </h3>

                      {/* Rating */}
                      <div className="flex gap-2 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400"
                            viewBox="0 0 14 13"
                            fill="currentColor"
                          >
                            <path d="M6.84211 10.4479L11.0705 13L9.94842 8.19L13.6842 4.95368L8.76474 4.53632L6.84211 0L4.91947 4.53632L0 4.95368L3.73579 8.19L2.61368 13L6.84211 10.4479Z" />
                          </svg>
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-lg lg:text-xl text-white mb-8 leading-relaxed">
                        {testimonial.text}
                      </blockquote>

                      {/* User Information */}
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="font-semibold text-white text-lg">
                            {testimonial.author}
                          </p>
                          <p className="text-white/80 text-sm">
                            Purchase item:{" "}
                            <a
                              href={testimonial.product.link}
                              className="font-semibold hover:text-white transition-colors "
                            >
                              {testimonial.product.name}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentSlide
                          ? "bg-white"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className={`p-2 rounded-full border border-white/50 hover:border-white transition-all ${
                      currentSlide === 0
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-white/10"
                    }`}
                    aria-label="Previous testimonial"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 7 11"
                      fill="none"
                    >
                      <path
                        d="M5.5 11L0 5.5L5.5 0L6.47625 0.97625L1.9525 5.5L6.47625 10.0238L5.5 11Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-full border border-white/50 hover:border-white hover:bg-white/10 transition-all"
                    aria-label="Next testimonial"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      viewBox="0 0 7 11"
                      fill="none"
                    >
                      <path
                        d="M1.5 11L7 5.5L1.5 0L0.52375 0.97625L5.0475 5.5L0.52375 10.0238L1.5 11Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Images */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="relative aspect-square max-w-2xl mx-auto">
                <div
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className="w-full flex-shrink-0 h-full"
                    >
                      <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                          src={testimonial.image.src}
                          alt={testimonial.author}
                          width={600}
                          height={600}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
