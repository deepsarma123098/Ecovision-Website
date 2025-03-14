import React, { useState } from "react";
import gridTieImg from "../../assets/gridTieImg.jpg";
import offGridImg from "../../assets/offGridImg.jpg";
import hybridImg from "../../assets/hybridImg.jpg";
import Card from "../Card";
import GridCard from "../GridCard";
import RegisterButton from "../Button/RegisterButton";
import Table from "../Table";
import Subsidy from "./Subsidy";

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
      expandedText: " These systems are cost-effective. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium eveniet dicta cupiditate deleniti quidem molestiae numquam vitae voluptatum, perspiciatis modi, voluptate officiis similique, atque ducimus. Id ad quidem tempora corporis nisi delectus adipisci, praesentium tenetur. Rerum cupiditate, quisquam fugit itaque cum perspiciatis reiciendis, molestiae dolore sapiente culpa quasi, atque qui corporis. Quibusdam pariatur minima, dolorum magnam sit, ducimus corporis facere veritatis quasi deleniti magni. Amet hic, aut est quidem dolorum a ipsa adipisci natus laudantium ea voluptatem necessitatibus modi. Fugiat doloremque repellendus cumque molestias? Dolorem unde ipsam harum quaerat sint ullam amet cum atque molestias neque voluptate nesciunt minima, adipisci aliquam iusto animi ea ut corporis. Dicta est delectus eum, nisi sit accusamus repellat sed, eos ut deserunt, ducimus possimus necessitatibus voluptatem corrupti repudiandae! Nihil suscipit illum molestias porro enim, vel quibusdam quisquam! Dolorem vitae magni atque dolorum magnam ipsum alias autem ad quo quisquam voluptatem debitis ipsa voluptates incidunt, impedit aspernatur eius deleniti optio mollitia animi. Error quasi placeat sint aut, iste a recusandae illum earum consequuntur illo eveniet, totam doloribus fuga dignissimos? Officiis eligendi assumenda odio quisquam sint, blanditiis sapiente ipsa tempore dicta veniam dolores fugiat impedit voluptate sed maiores fugit laboriosam minima ratione saepe in fuga explicabo!",
    },
    {
      title: "Off Grid Solar System",
      description: "Off-grid solar systems function independently and require batteries...",
      expandedText: " These are ideal for remote locations. Laudantium eveniet dicta cupiditate deleniti quidem molestiae numquam vitae voluptatum, perspiciatis modi, voluptate officiis similique, atque ducimus. Id ad quidem tempora corporis nisi delectus adipisci, praesentium tenetur. Rerum cupiditate, quisquam fugit itaque cum perspiciatis reiciendis, molestiae dolore sapiente culpa quasi, atque qui corporis. Quibusdam pariatur minima, dolorum magnam sit, ducimus corporis facere veritatis quasi deleniti magni. Amet hic, aut est quidem dolorum a ipsa adipisci natus laudantium ea voluptatem necessitatibus modi. Fugiat doloremque repellendus cumque molestias? Dolorem unde ipsam harum quaerat sint ullam amet cum atque molestias neque voluptate nesciunt minima, adipisci aliquam iusto animi ea ut corporis. Dicta est delectus eum, nisi sit accusamus repellat sed, eos ut deserunt, ducimus possimus necessitatibus voluptatem corrupti repudiandae! Nihil suscipit illum molestias porro enim, vel quibusdam quisquam! Dolorem vitae magni atque dolorum magnam ipsum alias autem ad quo quisquam voluptatem debitis ipsa voluptates incidunt, impedit aspernatur eius deleniti optio mollitia animi. Error quasi placeat sint aut, iste a recusandae illum earum consequuntur illo eveniet, totam doloribus fuga dignissimos? Officiis eligendi assumenda odio quisquam sint, blanditiis sapiente ipsa tempore dicta veniam dolores fugiat impedit voluptate sed maiores fugit laboriosam minima ratione saepe in fuga explicabo!",
    },
    {
      title: "Hybrid Solar System",
      description: "Hybrid solar systems combine the benefits of both on-grid and off-grid systems...",
      expandedText: " These systems provide energy security. Laudantium eveniet dicta cupiditate deleniti quidem molestiae numquam vitae voluptatum, perspiciatis modi, voluptate officiis similique, atque ducimus. Id ad quidem tempora corporis nisi delectus adipisci, praesentium tenetur. Rerum cupiditate, quisquam fugit itaque cum perspiciatis reiciendis, molestiae dolore sapiente culpa quasi, atque qui corporis. Quibusdam pariatur minima, dolorum magnam sit, ducimus corporis facere veritatis quasi deleniti magni. Amet hic, aut est quidem dolorum a ipsa adipisci natus laudantium ea voluptatem necessitatibus modi. Fugiat doloremque repellendus cumque molestias? Dolorem unde ipsam harum quaerat sint ullam amet cum atque molestias neque voluptate nesciunt minima, adipisci aliquam iusto animi ea ut corporis. Dicta est delectus eum, nisi sit accusamus repellat sed, eos ut deserunt, ducimus possimus necessitatibus voluptatem corrupti repudiandae! Nihil suscipit illum molestias porro enim, vel quibusdam quisquam! Dolorem vitae magni atque dolorum magnam ipsum alias autem ad quo quisquam voluptatem debitis ipsa voluptates incidunt, impedit aspernatur eius deleniti optio mollitia animi. Error quasi placeat sint aut, iste a recusandae illum earum consequuntur illo eveniet, totam doloribus fuga dignissimos? Officiis eligendi assumenda odio quisquam sint, blanditiis sapiente ipsa tempore dicta veniam dolores fugiat impedit voluptate sed maiores fugit laboriosam minima ratione saepe in fuga explicabo!",
    },
  ];

  return (
    <>
      {/* First Row: Solar Connection Types (Uses Card) */}
      <div className="mt-12 flex flex-wrap justify-center gap-12">
        <Card title="On Grid Connection" imageSrc={gridTieImg} />
        <Card title="Off Grid Connection" imageSrc={offGridImg} />
        <Card title="Hybrid Connection" imageSrc={hybridImg} />
      </div>
           
      {/* Second Row: Solar System Details (Uses GridCard) */}
      <div className="flex justify-between mt-12 px-10">
        {solarSystems.map((system, index) => (
          <GridCard key={index} title={system.title} text={system.description + system.expandedText} />
        ))}
      </div>

      {/* Tables */}
      <div className="min-h-[53vh] mt-[8vw] flex items-center justify-center gap-4 p-6">
        <Table title="Subsidy Details" columns={subsidyColumns} data={subsidyData} />
        <Table title="Suitable Rooftop Solar Plant Capacity for Households" columns={capacityColumns} data={capacityData} />
      </div>

      {/* Register Button */}
      <div className="relative">
        <RegisterButton />
      </div>
      <Subsidy/>
    </>
  );
}

export default SolarConnections;
