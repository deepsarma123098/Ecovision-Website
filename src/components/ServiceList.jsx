import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-2xl border-l-4 border-green-500"
    >
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 text-center">
        {title}
      </h3>
      <div className="text-gray-600 dark:text-gray-300 text-sm sm:text-md text-center mt-2">
        {children}
      </div>
    </motion.div>
  );
};

export default ServiceCard;







// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const ServiceCard = ({ title, children }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" }}
//       transition={{ duration: 0.3, ease: "easeInOut" }}
//       className="max-w-md mx-auto sm:w-3/4 md:w-1/2 lg:w-1/3 p-6 bg-gray-50 dark:bg-gray-800 shadow-md rounded-2xl"
//     >
//       <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 text-center">
//         {title}
//       </h3>
//       <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-md text-center mt-2">
//         {children}
//       </p>
//     </motion.div>
//   );
// };

// export default ServiceCard;
