import React, { useState } from "react";
import ProfileCard from "../components/Cards/ProfileCard.jsx";
import ServiceCard from "../components/Cards/ServiceCard.jsx";
import Person1 from "../assets/Person1.jpg";
import Person2 from "../assets/Person2.jpg";
import ThreeDPinCard from "../components/PinCards/ThreeDPinCard.jsx";

const AboutUs = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      {/* About Us Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProfileCard
            name="Dipankar Sarma"
            title="Instrumentation Engineer, Assam Bio Refinery Pvt. Ltd."
            imageUrl={Person1}
          />
          <ProfileCard
            name="Brindaban Bikash Nath"
            title="Co-founder & Engineer"
            imageUrl={Person2}
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-16 max-w-6xl mx-auto">
        <ServiceCard title="How We Work">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>Free consultation</li>
              <li>Free site visit</li>
              <li>Layout planning</li>
              <li>Supply & delivery of components</li>
              <li>Installation and commissioning</li>
              <li>Post-installation support</li>
            </ul>
          </div>
        </ServiceCard>

        <ServiceCard title="Our Technicians">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <p className="text-gray-700">
              Our technicians are well-trained solar experts with over 9 years of experience. They have commissioned solar projects for government and private organizations, including railways, hospitals, and residential setups for on-grid, off-grid, and hybrid systems.
            </p>
          </div>
        </ServiceCard>

        <ServiceCard title="Our Brands">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <ul className="list-disc pl-5 space-y-2 text-gray-800">
              <li>High-quality solar panels</li>
              <li>Reliable inverters</li>
              <li>Durable batteries</li>
              <li>Certified installation components</li>
              <li>Top-tier brands for efficiency</li>
              <li>Trusted after-sales support</li>
            </ul>
          </div>
        </ServiceCard>
      </div>

      {/* Address Section */}
      <div className="mt-16 flex flex-col items-center">
        <h3 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Our Address:
        </h3>
        <ThreeDPinCard />
        {/* <PinContainer
          title="Visit Us"
          href="https://www.google.com/maps?q=26.102589,91.727576"
        >
          <p className="text-white">Click to view on Google Maps</p>
        </PinContainer> */}
      </div>
    </div>
  );
};

export default AboutUs;
