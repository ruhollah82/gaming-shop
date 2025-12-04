// components/product-detail/ProductImages.jsx
"use client";

import { useState } from "react";
import ProductImageMain from "./ProductImageMain";
import ThumbnailGallery from "./ThumbnailGallery";
import ImageFeatures from "./ImageFeatures";
import LightboxModal from "./LightboxModal";
import { useLightbox } from "../hooks/useLightbox";

export default function ProductImages({
  images,
  selectedImage,
  setSelectedImage,
  product,
}) {
  const {
    isLightboxOpen,
    lightboxIndex,
    openLightbox,
    closeLightbox,
    navigateLightbox,
    setLightboxImage,
  } = useLightbox(images.length);

  const [isZoomed, setIsZoomed] = useState(false);

  const handleFullscreenClick = () => {
    openLightbox(selectedImage);
  };

  const handleFavoriteClick = () => {
    // Handle favorite functionality
    console.log("Favorite clicked");
  };

  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <div className="space-y-6">
      {/* Main Image Container */}
      <ProductImageMain
        image={images[selectedImage]}
        product={product}
        selectedImage={selectedImage}
        imagesLength={images.length}
        onFullscreenClick={handleFullscreenClick}
        onFavoriteClick={handleFavoriteClick}
      />

      {/* Thumbnail Gallery */}
      <ThumbnailGallery
        images={images}
        selectedImage={selectedImage}
        onThumbnailClick={handleThumbnailClick}
        productTitle={product.title}
      />

      {/* Image Features */}
      <ImageFeatures />

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        images={images}
        currentIndex={lightboxIndex}
        onNavigate={navigateLightbox}
        onSetImage={setLightboxImage}
        productTitle={product.title}
      />
    </div>
  );
}
