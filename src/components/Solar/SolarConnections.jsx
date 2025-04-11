import React from "react";
import gridTieImg from "../../assets/gridTieImg.jpg";
import offGridImg from "../../assets/offGridImg.jpg";
import hybridImg from "../../assets/hybridImg.jpg";
import Card from "../Card";
import GridCard from "../GridCard";
import RegisterButton from "../Button/RegisterButton";
import Table from "../Table";
import Subsidy from "./Subsidy";
import lightImg2 from '../../assets/lightImg7.jpg';
import { Parallax } from "react-parallax";

function SolarConnections() {
  const subsidyColumns = ["kW", "Central Subsidy", "State Subsidy", "Total Subsidy"];
  const subsidyData = [
    ["1", "₹33,000", "₹15,000", "₹48,000"],
    ["2", "₹46,000", "₹30,000", "₹96,000"],
    ["3 to 10", "₹85,800", "₹45,000", "₹1,30,800"],
  ];

  const capacityColumns = [
    "Average Monthly Electricity Consumption (units)",
    "Suitable Rooftop Solar Plant Capacity",
  ];
  const capacityData = [
    ["0 - 150", "1 - 2 kW"],
    ["150 - 300", "2 - 3 kW"],
    ["> 300", "Above 3 kW"],
  ];

  const solarSystems = [
    {
      title: "On Grid Solar System",
      description: "On-grid solar systems are connected to the main power grid...",
      expandedText:
        " These systems are cost-effective. Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
    },
    {
      title: "Off Grid Solar System",
      description: "Off-grid solar systems function independently and require batteries...",
      expandedText:
        " These are ideal for remote locations. Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
    },
    {
      title: "Hybrid Solar System",
      description: "Hybrid solar systems combine the benefits of both on-grid and off-grid systems...",
      expandedText:
        " These systems provide energy security. Lorem ipsum dolor sit amet consectetur, adipisicing elit...",
    },
  ];

  return (
    <Parallax
      bgImage={lightImg2}
      bgImageAlt="Solar Img"
      strength={800}
      className="h-[70vw] w-full"
      renderLayer={percentage => (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: `${percentage * 600}px`,
            height: `${percentage * 600}px`,
            background: `rgba(255, 165, 0, ${percentage * 0.4})`,
            borderRadius: "50%",
            zIndex: 0,
          }}
        />
      )}
    >
      <div className="relative z-10">
        {/* First Row: Solar Connection Types */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 px-4">
          <Card title="On Grid Connection" imageSrc={gridTieImg} />
          <Card title="Off Grid Connection" imageSrc={offGridImg} />
          <Card title="Hybrid Connection" imageSrc={hybridImg} />
        </div>

        {/* Second Row: Solar System Details */}
        <div className="relative top-[4vw] left-[2vw] px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solarSystems.map((system, index) => (
            <GridCard key={index} title={system.title} text={system.description + system.expandedText} />
          ))}
        </div>

        {/* Tables Section */}
        <div className="min-h-[60vh] mt-[8vw] flex flex-col lg:flex-row items-center justify-center gap-6 p-4 lg:p-6">
          <Table title="Subsidy Details" columns={subsidyColumns} data={subsidyData} />
          <Table
            title="Suitable Rooftop Solar Plant Capacity for Households"
            columns={capacityColumns}
            data={capacityData}
          />
        </div>

        {/* Register Button */}
        <div className="flex justify-center my-8">
          <RegisterButton />
        </div>
      </div>
    </Parallax>
  );
}

export default SolarConnections;
