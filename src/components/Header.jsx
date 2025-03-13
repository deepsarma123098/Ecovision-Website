import React from "react";
import { Link } from "react-router-dom";
import {FaUser } from "react-icons/fa";
import Button from "./Button/Button"; // 
import transparentLogoImg from "../assets/transparentLogoImg.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 shadow-md">
      <div className="text-2xl font-bold flex items-center text-[#A3C408] ml-[2vw]">
       <img src={transparentLogoImg} alt="Ecovision Logo" className="h-14 w-auto object-contain mr-3"/><h1>Ecovision Associates</h1>
      </div>
      <nav className="text-lg mr-[4.5vw]">
        <Link to="/" className="mx-4 hover:text-yellow-400">Home</Link>
        <Link to="/about" className="mx-4 hover:text-yellow-400">About Us</Link>
        <Link to="/contact" className="mx-4 hover:text-yellow-400">Contact Us</Link>
      </nav>
      <Button variant="outline" className="flex items-center rounded-10xl mr-[3vw] px-[2vw]">
        <FaUser className="mr-2" /> Login
      </Button>
    </header>
  );
}

