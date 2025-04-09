import React, {useState} from 'react'

const ProfileCard = ({ name, title, imageUrl }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full mx-auto relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105">
      <img src={imageUrl} alt={name} className="w-full h-48 sm:h-56 md:h-64 object-cover" />
      <div className="p-4 md:p-6 text-center">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 text-sm md:text-base">{title}</p>
        {expanded && <p className="text-gray-600 text-xs sm:text-sm mt-4">Detailed bio information...</p>}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-blue-600 hover:text-blue-800"
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default ProfileCard; 




//New Code

// import React, { useState } from "react";

// function ProfileCard({ name, image, title }) {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full mx-auto rounded-lg shadow-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-xl">
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-48 sm:h-56 md:h-64 object-cover"
//       />
//       <div className="p-4 md:p-6 text-center">
//         <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
//           {name}
//         </h3>
//         <p className="text-gray-600 text-sm md:text-base">{title}</p>
//         {expanded && (
//           <p className="text-gray-600 text-xs sm:text-sm mt-2">{description}</p>
//         )}
//         <button
//           onClick={() => setExpanded(!expanded)}
//           className="mt-3 text-blue-600 hover:text-blue-800 font-semibold focus:outline-none"
//         >
//           {expanded ? "Read Less" : "Read More"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;
