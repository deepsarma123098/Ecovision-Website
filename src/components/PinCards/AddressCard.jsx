import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function AddressCard() {
  const googleMapsUrl = "https://maps.google.com/?q=Your+Location+Coordinates"; // Replace with actual coordinates

  return (
    <motion.div
      className="relative bg-gray-900 text-white p-6 rounded-2xl shadow-lg border border-gray-700 w-80 md:w-96 cursor-pointer transition-transform transform hover:scale-95"
      whileHover={{ scale: 0.95 }}
      onClick={() => window.open(googleMapsUrl, "_blank")}
    >
      {/* 3D Pin Effect */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 p-3 rounded-full shadow-md">
        <MapPin className="text-white w-6 h-6" />
      </div>

      {/* Address Content */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold">Our Location</h3>
        <p className="text-gray-300 mt-2">
          123 Solar Street, Green Energy City, Earth
        </p>
      </div>
    </motion.div>
  );
}
