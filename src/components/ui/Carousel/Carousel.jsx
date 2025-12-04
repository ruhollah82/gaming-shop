"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoHeight from "embla-carousel-auto-height";
import { motion } from "framer-motion";
import { fadeInUp } from "@/components/features/product/product-detail/shared/animations";
import CarouselNavigation from "./CarouselNavigation";
import CarouselCounter from "./CarouselCounter";
import CarouselDots from "./CarouselDots";

const Carousel = ({
  children,
  options = {},
  plugins = [],
  showNavigation = true,
  showDots = true,
  showCounter = true,
  autoPlay = true,
  autoPlayDelay = 5000,
  className = "relative",
  containerClassName = "overflow-hidden",
  slidesClassName = "flex -ml-6",
  slideClassName = "flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6",
  dotsClassName = "flex justify-center mt-10 space-x-3",
  navigationClassName = "flex justify-between items-center mb-8"
}) => {
  const defaultOptions = {
    loop: true,
    align: "start",
    slidesToScroll: 1,
    dragFree: true,
    ...options
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(defaultOptions, plugins);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      };

      const onInit = () => {
        setTotalSlides(emblaApi.slideNodes().length);
        onSelect();
      };

      emblaApi.on("init", onInit);
      emblaApi.on("select", onSelect);
      onInit();

      // Auto-play
      let interval;
      if (autoPlay) {
        interval = setInterval(() => {
          if (emblaApi) {
            emblaApi.scrollNext();
          }
        }, autoPlayDelay);
      }

      return () => {
        emblaApi.off("init", onInit);
        emblaApi.off("select", onSelect);
        if (interval) clearInterval(interval);
      };
    }
  }, [emblaApi, autoPlay, autoPlayDelay]);

  const scrollTo = (index) => {
    emblaApi?.scrollTo(index);
  };

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {/* Navigation */}
      {showNavigation && (
        <CarouselNavigation
          onPrev={scrollPrev}
          onNext={scrollNext}
          className={navigationClassName}
        >
          {showCounter && (
            <CarouselCounter
              current={selectedIndex + 1}
              total={totalSlides}
            />
          )}
        </CarouselNavigation>
      )}

      {/* Carousel Container */}
      <div className={containerClassName} ref={emblaRef}>
        <div className={slidesClassName}>
          {children.map((child, index) => (
            <div key={index} className={slideClassName}>
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      {showDots && (
        <CarouselDots
          total={totalSlides}
          current={selectedIndex}
          onDotClick={scrollTo}
          className={dotsClassName}
        />
      )}
    </motion.div>
  );
};

export default Carousel;
