import React, { useState } from "react";
// import PinEffect from "./PinEffect";
import PinContainer from "./PinContainer";

const ThreeDPinCard = ({ title, href, children, className }) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg) scale(1)"
  );

  const handleMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };

  const handleMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className="relative group/pin z-50 cursor-pointer min-h-screen"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => window.open(href, "_blank", "noopener,noreferrer")}
    >
      {/* Background Pin Effect */}
      {/* <PinEffect title={title} transform={transform} /> */}

      {/* 3D Rotating Card */}
      <PinContainer transform={transform} title={title}><spam className= 'text-white'>Ahomgaon, Garchuk, Guwahati Assam, 781035</spam></PinContainer>
    </div>
  );
};

export default ThreeDPinCard;
