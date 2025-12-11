import React from "react";

// 🔹 Local image imports
import breadcrumb from "../assets/images/aboutsec.jpg";
import errorImg from "../assets/images/404.png";

const NotFound = () => {
  return (
    <div className="w-full bg-white">

      {/* 🔶 Top Banner Section */}
      <div
        className="relative w-full h-72 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${breadcrumb})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-4xl font-bold">404</h1>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-gray-200">Home</span>
            <span>/</span>
            <span className="text-orange-500 font-semibold">404</span>
          </div>
        </div>
      </div>

      {/* 🔶 Main 404 Image Section */}
      <div className="w-full flex justify-center py-16">
        <img
          src={errorImg}
          alt="404 Illustration"
          className="w-80 md:w-96"
        />
      </div>

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
        Oops! Page Not Found!
      </h2>

      {/* DESCRIPTION */}
      <p className="max-w-2xl mx-auto text-gray-500 leading-relaxed mb-8 text-center">
        We’re sorry but we can’t seem to find the page you requested.
        This might be because you have typed the web address incorrectly.
      </p>

      {/* BUTTON */}
      <div className="w-full flex justify-center pb-16">
        <a
          href="/"
          className="inline-block px-8 py-3 rounded-full font-semibold text-white
          bg-gradient-to-r from-orange-400 to-orange-600 shadow-md hover:opacity-90"
        >
          Back to home
        </a>
      </div>

    </div>
  );
};

export default NotFound;
