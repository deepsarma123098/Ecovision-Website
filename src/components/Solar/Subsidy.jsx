import React from "react";
import { Parallax } from "react-parallax";
import bulbPlantImg from "../../assets/bulbPlantImg.jpg"; // Replace with your image

function Subsidy() {
  return (
    <Parallax
      bgImage={bulbPlantImg}
      bgImageAlt="PM Yojana Background"
      strength={300}
      className="w-full h-screen mt-[2vw]"
    >
      <div className="w-full relative right-[24vw] -top-[4vw] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 min-h-[80vh] text-white text-center">
        {/* Optional overlay for text readability */}
        {/* <div className="bg-black/40 p-6 rounded-lg"> */}
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed max-w-4xl mx-auto">
            "In order to further sustainable development and people's well-being, we are launching the PM Surya Ghar: Muft Bijli Yojana. This project, with an investment of over Rs. 75,000 crores, aims to light up 1 crore households by providing up to 300 units of free electricity every month."
          </h2>
          <h1 className="mt-6 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Shri Narendra Modi, Hon’ble Prime Minister of India
          </h1>
      
      </div>
    </Parallax>
  );
}

export default Subsidy;
