import React, { useState } from "react";
import bulbImg from "../assets/bulbImg.jpg"; // Ensure the path is correct

function GridCard({ title, text }) {
  const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="relative w-[55%] md:w-[40%] lg:w-[50%] xl:w-[90%] 
      sm:w-[45%] xs:w-[90%] transition-transform duration-500 ease-in-out mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setExpanded(false); // Collapse when hover is removed
      }}
    >
      {/* Card Container */}
      <div
        className={`relative overflow-hidden rounded-lg shadow-lg p-6 transition-all duration-500 ease-in-out transform
        ${isHovered ? "scale-105 bg-gray-900 backdrop-brightness-110" : "scale-100 bg-white"}
        ${expanded ? "min-h-fit" : "min-h-[250px]"}`}
      >
        {/* Light Bulb Image */}
        <img
          src={bulbImg}
          alt="Light Bulb"
          className={`absolute top-6 left-6 w-32 h-32 opacity-0 transition-opacity duration-500 ease-in-out delay-150
          ${isHovered ? "opacity-100" : "opacity-0"}`}
        />

        {/* Title */}
        <h1
          className={`font-bold text-2xl relative z-10 text-center transition-[color] duration-[1ms]
          ${isHovered ? "text-white" : "text-gray-800"}`}
        >
          {title}
        </h1>

        {/* Description */}
        <div className="mt-6 text-lg text-justify w-full relative z-10 transition-all duration-500 ease-in-out">
          <p
            className={`overflow-hidden transition-[color] duration-[1ms] 
            ${isHovered ? "text-white" : "text-gray-800"}
            ${expanded ? "max-h-none" : "line-clamp-8"}`}
          >
            {text}
          </p>

          {/* Read More / Read Less Button */}
          <button
            className="mt-4 text-orange-500 font-semibold underline cursor-pointer transition-colors duration-[1ms]"
            onClick={(e) => {
              e.stopPropagation(); // Prevents hover reset on click
              if (!expanded) {
                setIsHovered(true); // Dark mode only on "Read More"
              } else {
                setIsHovered(false); // Light mode when collapsing
              }
              setExpanded(!expanded);
            }}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GridCard;
