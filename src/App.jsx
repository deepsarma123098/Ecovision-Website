import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
// import ScrollCard from "./components/ScrollEffect/ScrollCard";

export default function App() {
  return (
    <Router>
      <div
        className="mt-[2vw] w-full box-sizing: border-box bg-black text-white flex flex-col min-h-screen">
        {/* <Header /> */}
        {/* <BackgroundEffect/> */}
       
        <main className="p-4 flex-1 relative">
        
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            {/* <Route path="/solarscroll" element={<SolarScroll />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
