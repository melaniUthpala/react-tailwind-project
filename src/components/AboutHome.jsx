const AboutHome = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative flex justify-center">
          <div className="relative w-[350px] h-[350px] rounded-full overflow-hidden">
            <img
              src="about.jpg"
              alt="About"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative circles */}
          <span className="absolute -top-6 -left-6 w-24 h-24 bg-orange-100 rounded-full"></span>
          <span className="absolute bottom-10 -right-6 w-24 h-24 bg-green-100 rounded-full"></span>
          <span className="absolute -bottom-6 left-20 w-16 h-16 bg-purple-100 rounded-full"></span>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-orange-500 font-semibold mb-3">
            About Our Company
          </p>

          <h2 className="text-4xl font-bold mb-4 leading-snug">
            How We Can Help you
          </h2>

          <div className="w-20 h-1 bg-orange-500 mb-6"></div>

          <p className="text-gray-600 mb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly believable.
          </p>

          <p className="text-gray-600 mb-8">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary anything embarrassing hidden in the.
          </p>

          <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
            Learn more
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutHome;