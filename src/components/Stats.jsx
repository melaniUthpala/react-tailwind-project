import { FaUserTie, FaUsers, FaTools, FaCar } from "react-icons/fa";

const stats = [
  {
    value: "300+",
    title: "Expert Technicians",
    icon: <FaUserTie />,
    bg: "bg-blue-100",
  },
  {
    value: "1,026",
    title: "Satisfied Client",
    icon: <FaUsers />,
    bg: "bg-orange-100",
  },
  {
    value: "25+",
    title: "Years Experience",
    icon: <FaTools />,
    bg: "bg-purple-100",
  },
  {
    value: "3,215",
    title: "Complete Project",
    icon: <FaCar />,
    bg: "bg-red-100",
  },
];

const Stats = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">

        {stats.map((item, index) => (
          <div
            key={index}
            className={`rounded-full w-64 h-64 mx-auto flex flex-col items-center justify-center ${item.bg}`}
          >
            <div className="text-4xl text-gray-700 mb-3">{item.icon}</div>

            <h3 className="text-4xl font-bold text-gray-900">
              {item.value}
            </h3>

            <div className="w-10 h-1 bg-orange-500 my-3"></div>

            <p className="font-semibold text-gray-700">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Stats;
