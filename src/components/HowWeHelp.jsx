import React from "react";
import helpImg from "../assets/images/about-pic.png"; // screenshot second section illustration

const HowWeHelp = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img src={helpImg} alt="Help Section" className="w-full max-w-md" />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h3 className="text-orange-500 font-semibold text-lg">
            About Our Company
          </h3>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mt-2">
            How We Can Help You
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, 
            but the majority have suffered alteration in some form, by injected humour, 
            or randomised words which don't look even slightly believable. 
            If you are going to use a passage of Lorem Ipsum, you need to be sure there.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
          All the Lorem Ipsum generators on the Internet tend to repeat predefined 
          chunks as necessary anything embarrassing hidden in the.
          </p>


          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
            Learn More
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default HowWeHelp;
