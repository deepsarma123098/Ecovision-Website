import React from "react";

const PinEffect = ({ title, href }) => {
    return (
      <div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
        <div className="w-full h-full -mt-7 flex-none inset-0">
          {/* Label Button */}
          <div className="absolute top-0 inset-x-0 flex justify-center">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative left-[-8.9vw] top-[-9vw] flex space-x-2 items-center z-10 rounded-full bg-red-900 py-0.5 px-4 ring-1 ring-white/10"
            >
              <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
                {title}
              </span>
            </a>
          </div>
  
          {/* Animated Pin Glows */}
          <div
            style={{
              perspective: "1000px",
              transform: "rotateX(70deg) translateZ(0)",
            }}
            className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
          >
            {[0, 2, 4].map((delay) => (
              <div
                key={delay}
                className="absolute left-[-11.6vw] bottom-[37vw] h-[6rem] w-[6rem] rounded-full 
                           bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] animate-pulse"
                style={{
                  animationDelay: `${delay}s`,
                }}
              ></div>
            ))}
          </div>
  
          {/* Pin Glow Lines */}
          <>
            <div className="absolute right-[18.3vw] bottom-[26.5vw] bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]" />
            <div className="absolute right-[18.3vw] bottom-[26.5vw] bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40" />
            <div className="absolute right-[18.3vw] translate-x-[1.5px] bottom-[26.5vw] bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
            <div className="absolute right-[18.3vw] translate-x-[0.5px] bottom-[26.5vw] bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
          </>
        </div>
      </div>
    );
  };

export default PinEffect;
