"use client";

import { useState } from "react";

export function useLightbox(imagesLength) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const navigateLightbox = (direction) => {
    if (direction === "next") {
      setLightboxIndex((prev) => (prev + 1) % imagesLength);
    } else {
      setLightboxIndex((prev) => (prev - 1 + imagesLength) % imagesLength);
    }
  };

  const setLightboxImage = (index) => {
    setLightboxIndex(index);
  };

  return {
    isLightboxOpen,
    lightboxIndex,
    openLightbox,
    closeLightbox,
    navigateLightbox,
    setLightboxImage,
  };
}
