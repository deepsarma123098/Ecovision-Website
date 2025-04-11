// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// const ParallaxSection = ({ backgroundImage, midgroundImage, foregroundImage, children }) => {
//     const ref = useRef(null);
//     const { scrollY } = useScroll(); // Get actual scroll position

//     // Adjust scroll-based movement for responsiveness
//     const backgroundY = useTransform(scrollY, [0, 700], [0, -200]); // Slowest movement
//     const midgroundY = useTransform(scrollY, [0, 700], [0, -350]); // Medium speed
//     const foregroundY = useTransform(scrollY, [0, 700], [0, -500]); // Fastest movement

//     return (
//         <div 
//             ref={ref} 
//             className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center"
//         >
//             {/* Background Layer */}
//             <motion.div
//                 className="absolute inset-0 bg-cover md:bg-contain bg-center"
//                 style={{
//                     backgroundImage: `url(${backgroundImage})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     y: backgroundY, // Apply parallax motion
//                 }}
//             />

//             {/* Midground Layer */}
//             {midgroundImage && (
//                 <motion.div
//                     className="absolute inset-0 bg-cover md:bg-contain bg-center opacity-70"
//                     style={{
//                         backgroundImage: `url(${midgroundImage})`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                         y: midgroundY,
//                     }}
//                 />
//             )}

//             {/* Foreground Layer */}
//             {foregroundImage && (
//                 <motion.div
//                     className="absolute inset-0 bg-cover md:bg-contain bg-center opacity-50"
//                     style={{
//                         backgroundImage: `url(${foregroundImage})`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                         y: foregroundY,
//                     }}
//                 />
//             )}

//             {/* Foreground Content */}
//             <div className="relative z-10 w-full flex flex-col items-center text-white text-center p-4 sm:p-8 lg:p-12">
//                 {children}
//             </div>
//         </div>
//     );
// };

// export default ParallaxSection;


import React from 'react';
import { Parallax } from 'react-parallax';
import panelImg from '../../assets/panelImg.jpg'
// import multipleSolarPanelsImg from '../../assets/multipleSolarPanels.jpg'
import { motion } from "framer-motion";
import SolarInfo from "../Solar/SolarInfo.jsx";
// import SolarConnections from "../Solar/SolarConnections.jsx";
import { TypewriterEffect } from "../Typewriter/Typewriter.jsx";

function ParallaxSection() {
  return (

    <div className="">
 <Parallax 
 bgImage={panelImg} 
 bgImageAlt="Solar Img" 
 strength={800}
 className="h-[80vw]"
 >
     {/* Typewriter Effect */}
     <TypewriterEffect words="Save big on your electricity bills up to 95% with Solar." />

{/* Animated Heading */}
<motion.h1
  className="text-3xl font-bold text-black mt-[1vw]"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  Powering a Sustainable Future with Solar Energy
</motion.h1>

{/* Animated Section for Solar Info */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false }}
>
  <SolarInfo />
</motion.div>

{/* Animated Section for Solar Connections */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false }}
>
 
</motion.div>
    </Parallax>
    </div>
   
  )
}

export default ParallaxSection;
