import { useEffect, useRef } from "react";

export default function MapSection() {
  const mapRef = useRef(null);

  // Initialize map or any interactions if needed
  useEffect(() => {
    // You can add any map initialization logic here
    // For example, if using Google Maps JavaScript API
  }, []);

  return (
    <section className="pt-16 bg-white">
      <div className="relative w-full">
        {/* Google Map */}
        <div className="h-96 md:h-[450px] lg:h-[500px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202844.8913472017!2d-122.04109805!3d37.40280355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sThung%20l%C5%A9ng%20Silicon%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1744859608872!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>

        {/* Contact Info Card */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="container mx-auto h-full px-4">
            <div className="h-full flex items-center justify-end">
              <div className="pointer-events-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 max-w-md w-full transform hover:scale-105 transition-transform duration-300">
                {/* Store Name */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 text-center md:text-left">
                    <strong>Ecomus Store</strong>
                  </h2>
                </div>

                {/* Address & Contact */}
                <div className="mb-6">
                  <div className="text-gray-700 text-base leading-relaxed text-center md:text-left">
                    <p>
                      301 Front St W Toronto, Canada
                      <br />
                      support@ecomus.com
                      <br />
                      (08) 8942 1299
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mb-8">
                  <div className="text-gray-700 text-base leading-relaxed text-center md:text-left">
                    <p>
                      Mon - Fri, 8:30am - 10:30pm
                      <br />
                      Saturday, 8:30am - 10:30pm
                      <br />
                      Sunday Closed
                    </p>
                  </div>
                </div>

                {/* Get Directions Button */}
                <div className="text-center md:text-left">
                  <a
                    href="https://ecomus-2.myshopify.com/pages/store-locations/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:gap-3"
                  >
                    Get Directions
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 64 64"
                    >
                      <path d="M6.89,64,0,57.11,47.26,9.85H4.92V0H64V59.08H54.15V16.74Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
