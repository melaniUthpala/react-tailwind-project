import React from "react";
import { FaCarCrash, FaToolbox, FaOilCan, FaClipboardCheck, FaCog } from "react-icons/fa";
import carImg from "../assets/images/img-1 (1).png";

const PricingSection = () => {
  return (
    <section className="w-full bg-[#fafafa] py-20">
      
      {/* Title Section */}
      <div className="text-center mb-14">
        <h3 className="text-orange-500 font-semibold text-lg">Best Pricing Plan</h3>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">Services Packages</h1>
        <div className="w-20 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Icons Row */}
      <div className="flex justify-center gap-14 mb-16">
        <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center shadow-sm">
          <FaCarCrash className="text-orange-400 text-4xl" />
        </div>

        <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center shadow-sm">
          <FaOilCan className="text-green-400 text-4xl" />
        </div>

        <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center shadow-sm">
          <FaToolbox className="text-purple-400 text-4xl" />
        </div>

        <div className="w-24 h-24 rounded-full bg-yellow-100 flex items-center justify-center shadow-sm">
          <FaClipboardCheck className="text-yellow-400 text-4xl" />
        </div>

        <div className="w-24 h-24 rounded-full bg-pink-100 flex items-center justify-center shadow-sm">
          <FaCog className="text-pink-400 text-4xl" />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto flex items-center justify-center gap-16">
        
        {/* Left Box */}
        <div className="bg-orange-100 p-10 rounded-xl shadow-md w-65">
          <h2 className="text-4xl font-bold text-orange-600">$25</h2>
          <h3 className="text-2xl font-semibold text-gray-800 mt-3">Engine Repair</h3>
          <p className="text-gray-600 mt-4">
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered.
          </p>
        </div>

        {/* Car Image + Pulse Dot */}
        <div className="relative">
          <img
            src={carImg}
            alt="Car"
            className="w-[850px] object-contain"
          />

          {/* Pulsing Dot */}
          <div className="absolute top-[90px] left-[180px]">
            <span className="relative flex h-6 w-6">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-6 w-6 bg-red-600"></span>
            </span>
          </div>
        </div>

      </div> {/* ← Missing closing div FIXED */}

    </section>
  );
};

export default PricingSection;