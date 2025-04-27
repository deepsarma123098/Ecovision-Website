import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import SolarInfo from "../components/Solar/SolarInfo";
import SolarConnections from "../components/Solar/SolarConnections";
// import { TypewriterEffect } from "../components/Header/Typewriter";
// import ParallaxSection from "../components/ParallaxEffect/ParallaxSection";
// import panelImg from "../assets/panelImg.jpg";
import ScrollCard from "../components/ScrollEffect/ScrollCard";
import Subsidy from "../components/Solar/Subsidy";
import SolarCalculator from "../components/Solar/SolarCalculator";

export default function Home() {
  // Scroll to top on page load
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  return (
    <>
      <ScrollCard />
      <SolarConnections />
      <div className="bg-black text-white min-h-screen p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Solar Solutions</h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        Find out your solar requirements with our simple calculator.
      </p>
      <SolarCalculator/>
    </div>
      <Subsidy/>
    </>
  );
}
