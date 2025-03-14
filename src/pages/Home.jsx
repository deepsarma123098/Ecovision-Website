import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SolarInfo from "../components/Solar/SolarInfo";
import SolarConnections from "../components/Solar/SolarConnections";
import Subsidy from "../components/Solar/Subsidy";
import { TypewriterEffect } from "../components/Header/Typewriter";
import ParallaxSection from "../components/ParallaxEffect/ParallaxSection";
import panelImg from "../assets/panelImg.webp";

export default function Home() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="text-center p-6">
      {/* Smooth Scroll to Sections */}
      <ParallaxSection
        backgroundImage={panelImg}
        midgroundImage={panelImg}
        foregroundImage={panelImg}
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
          <SolarConnections />
        </motion.div>
      </ParallaxSection>
    </div>
  );
}
