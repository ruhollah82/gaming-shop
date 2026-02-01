// components/CompareSection.jsx
import Image from "next/image";

export default async function CompareSection() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden animate-fade-in">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/productDetail/Rectangle_1052_22e77580-b699-4420-8fcc-e20eca412f9f.webp"
          alt=""
          fill
          className="object-cover"
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-12 flex justify-center">
            <div className="text-center px-4 lg:px-24">
              {/* Heading */}
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 md:mb-6 lg:mb-8 animate-slide-up-delay-1">
                Compare with Others
              </h2>

              {/* Spacer */}
              <div className="h-4 md:h-12 lg:h-16" />

              {/* Image */}
              <div className="inline-block animate-slide-up-delay-2">
                <a href="#" className="block">
                  <Image
                    src="/images/productDetail/Group_904.webp"
                    alt="Comparison graphic"
                    width={1200}
                    height={528}
                    className="w-full max-w-6xl h-auto"
                    loading="eager"
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 100vw"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
