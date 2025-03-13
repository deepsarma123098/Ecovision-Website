import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
import Navbar from './components/Navbar/Navbar'
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";


export default function App() {
  return (
    <Router>
      <div className="mt-[2vw] bg-black text-white flex flex-col min-h-screen">
        {/* <Header /> */}
        {/* <BackgroundEffect/> */}
        <Navbar/>
        <main className="p-4 flex-1">
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
