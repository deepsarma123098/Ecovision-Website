import React from "react";

const BackgroundEffect = () => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white relative flex items-center justify-center">
      {/* Grid Background - Forced Contrast */}
      <div className="absolute inset-0 bg-grid-small-gray-500/[0.3] dark:bg-grid-small-white/[0.15]"></div>

      {/* Radial Gradient Overlay */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Text Content */}
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p>
    </div>
  );
};

export default BackgroundEffect;
