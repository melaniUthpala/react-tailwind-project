const services = [
  {
    title: "Engine Repair",
    desc: "There are many variations of passages of Lorem Ipsum available,but the majority have",
    color: "bg-orange-500",
  },
  {
    title: "Tires Replacement",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have",
    color: "bg-green-500",
  },
  {
    title: "Transmission",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have",
    color: "bg-purple-500",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white p-10 rounded-xl shadow-md text-center hover:shadow-xl transition"
          >
            {/* ICON CIRCLE */}
            <div
              className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-white text-2xl ${item.color}`}
            >
              ⚙
            </div>

            <h3 className="text-xl font-bold mb-4">{item.title}</h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
