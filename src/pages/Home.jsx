import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import SolarInfo from "../components/Solar/SolarInfo";
import SolarConnections from "../components/Solar/SolarConnections";
// import { TypewriterEffect } from "../components/Header/Typewriter";
// import ParallaxSection from "../components/ParallaxEffect/ParallaxSection";
// import panelImg from "../assets/panelImg.jpg";
import ScrollCard from "../components/ScrollEffect/ScrollCard";
import Subsidy from "../components/Solar/Subsidy";

export default function Home() {
  // Scroll to top on page load
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  return (
    <>
      <ScrollCard />
      <SolarConnections />

      <Subsidy/>
    </>
  );
}
