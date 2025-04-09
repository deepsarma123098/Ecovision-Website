import React from 'react'

const ServiceCard = ({ title, children }) => {
    return (
      <div className="mb-8 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
        {children}
      </div>
    );
  };

export default ServiceCard; 


// New Code

// import React from 'react'

// const ServiceCard = ({ title, children }) => {
//     return (
//       <div className="mb-8 p-6 bg-gray-50 rounded-lg">
//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
//         {children}
//       </div>
//     );
//   };

// export default ServiceCard;


