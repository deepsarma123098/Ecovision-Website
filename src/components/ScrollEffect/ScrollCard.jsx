import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SolarImg from "../../assets/SolarImg.jpg";

import ParallaxSection from "../ParallaxEffect/ParallaxSection";
import panelImg from "../../assets/panelImg.jpg";
import SolarConnections from "../Solar/SolarConnections";
import Subsidy from "../Solar/Subsidy";

gsap.registerPlugin(ScrollTrigger);


export default function ScrollCard() {
  const scrollCardRef = useRef(null);
  const headingRef = useRef();
  const nextSectionRef = useRef(null);

  useEffect(() => {

    const scrollCard = scrollCardRef.current;
    const heading = headingRef.current;
    // const nextSection = nextSectionRef.current;

    gsap.timeline({
      
      scrollTrigger: {
        trigger: scrollCard,
        start: "bottom 100%",
        end: "bottom top", 
        scrub: 1.5,
       
        // markers: {
        //   fontSize: "2rem",
        //   startColor:"purple",
        //   endColor: "fuchsia",

        // }
        
      },
    })

      .to(scrollCard, {

          // overflow:"hidden",
          opacity: 0,
          scaleY: 1.5,
        // ease: "power1.out",
          },)


          gsap.to('.heading', {
               x:100,
               duration:3,
               delay:1,
          })
        // .from(heading, {
        //     scale: 0.8,
        //     opacity: 1,
        //     duration: 10,
        //     ease: "power3.out",
        //   })

      
  }, []);

  return (
    <>
      {/* ScrollCard (Section 1) */}
      <div
  ref={scrollCardRef}
  className="relative z-0 scrollCard overflow-hidden bg-cover bg-center h-screen w-full"
  style={{ backgroundImage: `url(${SolarImg})` }}
  >
  <div ref={headingRef} className="w-[70%] absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-[8vw] font-bold space-y-[-3.5vw]">
    <h1 className="heading relative right-[10vw] bg-linear-to-r from-[#63C504] to-[#DAD301] bg-clip-text text-transparent">SALE </h1>
    <h1 className="heading relative left-[4vw] bg-linear-to-r from-[#63C504] to-[#DAD301] bg-clip-text text-transparent">EARN</h1>
    <h1 className="heading relative left-[24vw] bg-linear-to-r from-[#FF5700] to-[#3057FF] bg-clip-text text-transparent"> ELECTRICITY </h1>
  </div>
</div>

      {/* <div className="card2 w-full h-screen bg-green-400 flex justify-center items-center text-2xl font-extrabold">I'm TWO</div>
       */}
      {/*Home Section (Section 2)*/}
      <div ref={nextSectionRef} className="home text-center p-6 -mt-[3vw]">
        {/* Smooth Scroll to Sections */}
        <ParallaxSection backgroundImage={panelImg} midgroundImage={panelImg} foregroundImage={panelImg}>
         
        </ParallaxSection>

       
      </div>
    </>
  );
}
