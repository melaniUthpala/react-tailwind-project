import { FaCarCrash, FaTools, FaCarBattery, FaOilCan, FaCogs, FaCar } from "react-icons/fa";

const services = [
  {
    title: "Engine Repair",
    icon: <FaCogs />,
  },
  {
    title: "Tire Replacement",
    icon: <FaCar />,
  },
  {
    title: "Battery Repair",
    icon: <FaCarBattery />,
  },
  {
    title: "Oil Change",
    icon: <FaOilCan />,
  },
  {
    title: "Car Diagnostics",
    icon: <FaTools />,
  },
  {
    title: "Car Crash Repair",
    icon: <FaCarCrash />,
  },
];

const OurServices = () => {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold mb-2">What We Do</p>
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow text-center hover:shadow-xl transition"
            >
              {/* ICON with circle background & hover effect */}
              <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-5xl transition-transform duration-300 hover:scale-110">
                {service.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold mb-3">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600">
                There are many variations of passages of Lorem Ipsum available.
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default OurServices;
