import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import transparentLogoImg from "../../assets/transparentLogoImg.png";
import Button from "../Button/Button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-black shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-3 text-black dark:text-white text-lg font-semibold">
          <img src={transparentLogoImg} alt="Ecovision Logo" className="h-20 w-auto object-contain" />
          <h1 className="tracking-wide">Ecovision Associates</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium text-neutral-700 dark:text-neutral-200">
          <Link to="/" className="hover:text-black dark:hover:text-white transition">Home</Link>
          <Link to="/about" className="hover:text-black dark:hover:text-white transition">About Us</Link>
          <Link to="/products" className="hover:text-black dark:hover:text-white transition">Products</Link>
          <Link to="/contact" className="hover:text-black dark:hover:text-white transition">Contact Us</Link>
        </nav>

        {/* Login Button */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            className="flex items-center rounded-full px-6 py-2 border border-neutral-400 text-neutral-700 dark:text-neutral-200 
                       hover:scale-105 transition-transform duration-200
                       hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white"
          >
            {/* <FaUser className="mr-2" />  */}
            Book Your Free Consultation
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black dark:text-white text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white dark:bg-black text-neutral-700 dark:text-neutral-200 py-4 px-6 space-y-4 shadow-lg"
        >
          <Link to="/" className="block text-lg" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className="block text-lg" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link to="/products" className="block text-lg" onClick={() => setMobileMenuOpen(false)}>Products</Link>
          <Link to="/contact" className="block text-lg" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
          <Button
            variant="outline"
            className="w-full text-center flex justify-center items-center py-2 border border-neutral-400 text-neutral-700 dark:text-neutral-200 
                       hover:bg-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white"
          >
            <FaUser className="mr-2" /> Login
          </Button>
        </motion.div>
      )}
    </header>
  );
}
