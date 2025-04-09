import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const AddressCard = ({ title, address, googleMapsUrl }) => {
  return (
    <motion.div
      className="relative bg-gray-900 text-white p-6 rounded-2xl shadow-lg border border-gray-700 w-full max-w-sm md:max-w-md lg:max-w-lg cursor-pointer transition-transform transform hover:scale-95"
      whileHover={{ scale: 0.95 }}
      onClick={() => window.open(googleMapsUrl, "_blank")}
    >
      {/* 3D Pin Effect */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-500 p-3 rounded-full shadow-md">
        <MapPin className="text-white w-6 h-6" />
      </div>

      {/* Address Content */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-300 mt-2">{address}</p>
      </div>
    </motion.div>
  );
};

export default AddressCard;