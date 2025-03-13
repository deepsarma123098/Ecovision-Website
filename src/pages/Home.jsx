import React from "react";
import { motion } from "framer-motion";
import SolarInfo from "../components/Solar/SolarInfo";
import SolarConnections from "../components/Solar/SolarConnections";
import Subsidy from "../components/Solar/Subsidy";
import { TypewriterEffect } from "../components/Header/Typewriter";
import ParallaxSection from "../components/ParallaxEffect/ParallaxSection";
import panelImg from "../assets/panelImg.webp";
export default function Home() {
  return (
    <div className="text-center p-6">
      <ParallaxSection
        backgroundImage={panelImg}
        midgroundImage={panelImg}
        foregroundImage={panelImg}
      >
        <TypewriterEffect words="Save big on your electicity bills upto 95% with Solar." />
        
        <motion.h1
          className="text-3xl font-bold text-black mt-[1vw]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Powering a Sustainable Future with Solar Energy
        </motion.h1>

        <SolarInfo />
        <SolarConnections />
      </ParallaxSection>
    </div>
  );
}
