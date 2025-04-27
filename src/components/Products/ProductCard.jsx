import React from 'react';

const ProductCard = ({ image, title, description, isReversed }) => {
  return (
    <div className={`flex flex-col md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''} items-center my-10 gap-8`}>
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover rounded-2xl shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        <p className="text-gray-300 text-base md:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
