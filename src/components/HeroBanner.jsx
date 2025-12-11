import React from "react";
import heroImg from "../assets/images/hero-image-1.png";

const HeroBanner = () => {
  return (
    <section className="w-full bg-[#fff8f3]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            We Ensure Your Safe & <br /> Happy Journey
          </h1>

          <p className="text-gray-600 mt-4">
            We stand behind every repair and service we provide.
            Our mission is to make sure you reach your destination
            safely with peace of mind.
          </p>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
            Learn More
          </button>
        </div>

        <div className="flex justify-center">
          <img src={heroImg} alt="Hero Car" className="w-full max-w-lg" />
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;
