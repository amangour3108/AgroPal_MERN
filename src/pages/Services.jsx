import React from "react";
import { FaSeedling, FaChartLine, FaTractor, FaHandsHelping, FaLeaf, FaChartBar } from "react-icons/fa";
import { MdWarehouse } from "react-icons/md";
import { GiPlantWatering } from "react-icons/gi";

const services = [
  {
    icon: <FaSeedling />,
    name: "Smart Irrigation",
    description: "Optimize water usage with precision irrigation recommendations.",
    link: "/predict",
    btn_label: "Predict Irrigation",
  },
  {
    icon: <MdWarehouse />,
    name: "Adaptive Inventory Control",
    description: "Track and manage inventory efficiently to optimize storage and stock.",
    //link: "/services/crop-monitoring",
    btn_label: "Coming Soon...",
  },
  {
    icon: <FaChartLine />,
    name: "Farm-to-Trade Network",
    description: "Provides a platform for farmers to market, sell, and distribute produce.",
    //link: "/services/market-advisory",
    btn_label: "Coming Soon...",
  },  
];

export default function Services() {
  return (
    <div className="p-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-green-900 text-center">Our Services</h1>
      <p className="mt-4 text-gray-700 text-center mb-10">
        Explore the services we offer to help you manage your crops efficiently.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-md bg-white/30 backdrop-blur-lg border border-white/40 hover:shadow-xl transition flex flex-col items-center text-center"
          >
            {/* Icon */}
            <div className="text-green-700 text-4xl mb-4">{service.icon}</div>

            {/* Title */}
            <h2 className="font-semibold text-xl text-green-900 mb-2">{service.name}</h2>

            {/* Description */}
            <p className="text-green-800 text-sm leading-relaxed">{service.description}</p>

            {/* Button */}
            <a
              href={service.link}
              className="mt-4 px-6 py-2 rounded-full font-semibold text-green-900 
                         bg-white/30 backdrop-blur-md border border-white/50 
                         hover:bg-white/40 transition shadow-lg"
            >
              {service.btn_label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
