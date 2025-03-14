"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import transparentLogoImg from "../../assets/transparentLogoImg.png"; 
import Button from "../Button/Button";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export default function Navbar() {
  const [active, setActive] = useState(null);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-black shadow-md z-50">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Left Side: Logo */}
        <div className="flex items-center space-x-3 text-black dark:text-white text-lg font-semibold">
          <img src={transparentLogoImg} alt="Ecovision Logo" className="h-12 w-auto object-contain"/>
          <h1 className="tracking-wide">Ecovision Associates</h1>
        </div>

        {/* Middle: Navigation Menu */}
        <nav
          onMouseLeave={() => setActive(null)}
          className="relative flex justify-center space-x-8 text-base font-medium text-neutral-700 dark:text-neutral-200"
        >
          <Link to="/" className="hover:text-black dark:hover:text-white transition text-xl">Home</Link>
          <Link to="/about" className="hover:text-black dark:hover:text-white transition text-xl">About Us</Link>
          {/* <Link to="/solareffect" className="hover:text-black dark:hover:text-white transition">Solar Effect</Link> */}
          
          {/* Products Dropdown */}
          <div className="relative" onMouseEnter={() => setActive("Products")} onMouseLeave={() => setActive(null)}>
            <motion.p
              transition={{ duration: 0.3 }}
              className="cursor-pointer hover:text-black dark:hover:text-white transition text-xl"
            >
              Products
            </motion.p>
            {active === "Products" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={transition}
                className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white dark:bg-black backdrop-blur-sm rounded-xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl w-48 mt-2"
              >
                <div className="flex flex-col p-4 text-black dark:text-white text-md">
                  <Link to="/solar-panels" className="hover:text-neutral-500">Solar Panels</Link>
                  <Link to="/batteries" className="hover:text-neutral-500">Batteries</Link>
                  <Link to="/inverters" className="hover:text-neutral-500">Inverters</Link>
                </div>
              </motion.div>
            )}
          </div>

          <Link to="/contact" className="hover:text-black dark:hover:text-white transition text-xl">Contact Us</Link>
        </nav>

        {/* Right Side: Login Button with Hover Effect */}
        <Button
          variant="outline"
          className="flex items-center rounded-full px-6 py-2 border border-neutral-400 text-neutral-700 dark:text-neutral-200 
                     hover:scale-105 transition-transform duration-200
                     hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white"
        >
          <FaUser className="mr-2" /> Login
        </Button>
      </div>
    </header>
  );
}
