import aboutImg from "../assets/man.jpg"; // 

const About = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">
          <div className="relative z-10">
            <img
              src={aboutImg}
              alt="About"
              className="w-[420px] h-[420px] rounded-full object-cover"
            />
          </div>

          {/* Floating Circles */}
          <span className="absolute top-0 left-10 w-24 h-24 bg-orange-100 rounded-full"></span>
          <span className="absolute bottom-10 right-10 w-20 h-20 bg-green-100 rounded-full"></span>
          <span className="absolute bottom-0 left-1/3 w-12 h-12 bg-purple-100 rounded-full"></span>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-orange-500 font-semibold mb-3">
            About Our Company
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            How We Can Help you
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary anything embarrassing hidden in the.
          </p>

          <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-7 py-3 rounded-full font-semibold">
            Learn more
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;