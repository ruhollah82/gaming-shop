"use client";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  useEffect(() => {
    const map = L.map("map").setView([51.505, -0.09], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);
    L.marker([51.505, -0.09]).addTo(map).bindPopup("Our Store").openPopup();
  }, []);

  return <div id="map" className="w-full h-64 rounded-lg" />;
}
