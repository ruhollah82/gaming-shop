"use client";
import { useEffect, useRef } from "react";

export default function StoreMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Dynamically import Leaflet to avoid SSR issues
    import("leaflet").then((L) => {
      import("leaflet/dist/leaflet.css");

      if (mapRef.current && !mapInstanceRef.current) {
        const map = L.map(mapRef.current).setView([51.505, -0.09], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);
        L.marker([51.505, -0.09]).addTo(map).bindPopup("Our Store").openPopup();
        mapInstanceRef.current = map;
      }
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} className="w-full h-64 rounded-lg" />;
}
