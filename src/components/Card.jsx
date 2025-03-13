import React, { useState } from "react";

function Card({ title, imageSrc, text }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / 10; // Adjust the divisor to control sensitivity
    const y = -(e.clientY - rect.top - rect.height / 2) / 10;

    setRotateX(y);
    setRotateY(x);
  };

  return (
    <div
      className="relative bg-gray-50 group dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border border-black/[0.1] w-72 p-4 rounded-xl transition-transform transform duration-300"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.08 : 1})`,
        transition: "transform 0.2s ease-out",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className="p-6">
        <h3 className="text-center text-xl font-bold text-black dark:text-white">
          {title}
        </h3>
        <img
          src={imageSrc}
          alt={title}
          className="h-60 w-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
        />
        <p className="mt-2 text-sm text-gray-700 dark:text-neutral-300">{text}</p>
      </div>
    </div>
  );
};

export default Card;











// import React from "react";

// function Card({ title, imageSrc, text }) {
//   return (
//     <div className="mt-[3rem] flex flex-col items-center">
//       <h1 className="text-center text-xl font-semibold">{title}</h1>
//       <img
//         src={imageSrc}
//         alt={title}
//         className="h-[18vw] w-auto object-contain mt-4 rounded-[2vw]"
//       />
//        <p className="mt-2 text-sm text-gray-700">{text}</p>
//     </div>
//   );
// }

// export default Card;