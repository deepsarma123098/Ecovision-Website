import React from "react";
import PinEffect from "./PinEffect";

const PinContainer = ({ children, transform,href,title }) => {
  return (
    <div
      className="absolute left-[10vw] top-[25vw] -translate-x-1/2 -translate-y-1/2"
      style={{ perspective: "1000px" }}
    >
      <div
        style={{ transform }}
        className="px-[6vw] py-14 flex justify-center items-center rounded-2xl shadow-lg bg-sky-500/[0.08] 
                   border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700"
      >
        <div className="relative z-50 text-black text-center">{children}</div>
      </div>
     <PinEffect href='Ahomgaom, Garchuk, Assam, 781035'></PinEffect>
    </div>
  );
};

export default PinContainer;
