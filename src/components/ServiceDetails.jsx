import React, { useState } from "react";
import bigImg from "../assets/images/aboutsec.jpg";
import discountImg from "../assets/images/about-pic-2.png";

/* ---------------------- ACCORDION COMPONENT ---------------------- */
const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl mb-6 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5"
      >
        <span className="w-8 h-8 flex items-center justify-center border border-orange-500 text-orange-500 rounded-full text-xl">
          {open ? "−" : "+"}
        </span>

        <span className="text-xl font-semibold text-orange-500">
          {title}
        </span>
      </button>

      {open && (
        <div className="px-16 pb-6 text-gray-600 leading-7">
          {children}
        </div>
      )}
    </div>
  );
};

/* ---------------------- MAIN PAGE ---------------------- */
const ServiceDetails = () => {
  return (
    <div className="w-full bg-white py-16">

      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
        <p className="mt-2 text-gray-500">Home / Services</p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT – CATEGORY LIST */}
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            Categories <span className="w-10 h-[2px] bg-red-500"></span>
          </h3>

          <ul className="space-y-4 text-gray-600">
            <li className="border-b pb-2 hover:text-red-500 cursor-pointer">Engine Repair</li>
            <li className="border-b pb-2 hover:text-red-500 cursor-pointer">Tires Replacement</li>
            <li className="border-b pb-2 hover:text-red-500 cursor-pointer">Transmission</li>
            <li className="border-b pb-2 hover:text-red-500 cursor-pointer">Diagnostic</li>
            <li className="border-b pb-2 hover:text-red-500 cursor-pointer">Batteries Replacement</li>
            <li className="hover:text-red-500 cursor-pointer">Break Repair</li>
          </ul>
        </div>

        {/* RIGHT – BIG IMAGE */}
        <div className="md:col-span-2 shadow-md rounded-xl overflow-hidden">
          <img src={bigImg} alt="Service" className="w-full rounded-xl" />
        </div>
      </div>

      {/* DISCOUNT + TEXT + ICONS */}
      <div className="max-w-6xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT DISCOUNT IMAGE */}
        <div>
          <img
            src={discountImg}
            alt="Discount"
            className="rounded-xl w-full shadow-sm"
          />
        </div>

        {/* RIGHT TEXT CONTENT */}
        <div className="col-span-2">
          <h2 className="text-3xl font-bold text-[#1b3358]">
            Why the right engine oil is important
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            An important thing to know about car maintenance reminder systems,
            especially those that track conditions, is that their accuracy depends
            on using engine oil that meets the automaker’s specifications.
          </p>

          <p className="text-gray-600 mt-4 leading-7">
            If you use a lesser product — conventional oil in an engine that
            requires full synthetic oil — the system cannot correctly measure wear.
          </p>

          {/* HOW WE WORK TITLE */}
          <h2 className="text-3xl font-bold mt-10 text-[#1b3358]">How We Work</h2>

          <p className="text-gray-600 mt-4 leading-7">
            We follow a professional workflow ensuring accuracy and quality for
            every vehicle we service.
          </p>

          {/* HOW WE WORK ICON BOXES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

            {/* BOX 1 */}
            <div className="border border-gray-200 p-8 rounded-xl shadow-sm bg-white text-center">
              <div className="bg-[#ff6b35] w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow">
                <i className="fas fa-tools text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mt-6">Choose Your Service</h3>
              <p className="text-gray-600 mt-2">
                Select the service your vehicle needs.
              </p>
            </div>

            {/* BOX 2 */}
            <div className="border border-gray-200 p-8 rounded-xl shadow-sm bg-white text-center">
              <div className="bg-[#00d0a0] w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow">
                <i className="fas fa-calendar-check text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mt-6">Make An Appointment</h3>
              <p className="text-gray-600 mt-2">
                Book a time that suits you.
              </p>
            </div>

            {/* BOX 3 */}
            <div className="border border-gray-200 p-8 rounded-xl shadow-sm bg-white text-center">
              <div className="bg-[#1b3358] w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow">
                <i className="fas fa-check-circle text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold mt-6">Confirm Your Request</h3>
              <p className="text-gray-600 mt-2">
                We verify your appointment and prepare everything.
              </p>
            </div>
          </div>

          {/* ACCORDIONS */}
          <div className="mt-12">

            {/* ACCORDION 1 */}
<Accordion title="Additional Information">
  <p>
    Follow the instructions in the owner’s manual or maintenance booklet
    to reset the car reminder system after every oil change.
  </p>

  <ul className="mt-4 space-y-2">
    <li className="flex gap-3 text-gray-700">
      <span className="text-orange-500 text-xl">✓</span>
      5-Star Safety Ratings & Top Safety Pick
    </li>
    <li className="flex gap-3 text-gray-700">
      <span className="text-orange-500 text-xl">✓</span>
      Diagnostic scans based on safety ratings
    </li>
  </ul>
</Accordion>

{/* ACCORDION 2 */}
<Accordion title="Car Safety Ratings">
  <p>
    Car safety ratings help identify crash protection levels and durability.
  </p>
</Accordion>


            {/* PREVIOUS / NEXT BUTTONS */}
            <div className="grid grid-cols-2 mt-10 text-center">
              <button className="py-4 border border-gray-300 hover:bg-gray-100">
                Previous
              </button>
              <button className="py-4 border border-gray-300 hover:bg-gray-100">
                Next
              </button>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default ServiceDetails;