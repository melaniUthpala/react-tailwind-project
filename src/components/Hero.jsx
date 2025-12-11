import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-10 py-20 relative overflow-hidden bg-white">

{/* LEFT SIDE TEXT */}
<div className="w-full z-10 text-left pl-4 md:pl-0">
  <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-3 font-josefin">
    Best Car Repairing
  </h1>
  <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-3 font-josefin">
    Services
  </h2>
  <p className="text-base md:text-lg text-gray-600 mb-6 max-w-lg">
    There are many variations of passages of Lorem Ipsum available,
    but the majority have suffered alteration in some form.
  </p>

  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold text-base md:text-lg transition duration-300">
    Learn More
  </button>
</div>

      {/* RIGHT SIDE IMAGE */}
      <div className="md:w-1/2 flex justify-center relative mt-16 md:mt-0">
        <div className="relative">

          <img
            src="/src/assets/images/img-1 (3).jpg"
            alt="Car Repair"
            className="w-[380px] h-[380px] md:w-[430px] md:h-[430px] rounded-full object-cover shadow-2xl relative z-10"
          />

          {/* Decorative Circles */}
          <span className="absolute -top-6 -right-6 w-24 h-24 bg-orange-100 rounded-full z-0"></span>
          <span className="absolute bottom-0 -left-8 w-16 h-16 bg-green-100 rounded-full z-0"></span>
          <span className="absolute -bottom-10 right-10 w-12 h-12 bg-purple-100 rounded-full z-0"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;