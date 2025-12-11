// 🔹 Local image imports
import breadcrumb from "../assets/images/aboutsec.jpg";
import aboutImg from "../assets/images/about-pic.png";

const AboutSection = () => {
  return (
    <div className="w-full bg-white">

      {/* 🔶 Top Banner Section */}
      <div
        className="relative w-full h-72 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${breadcrumb})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-4xl font-bold">About Us</h1>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-gray-200">Home</span>
            <span>/</span>
            <span className="text-orange-500 font-semibold">About Us</span>
          </div>
        </div>
      </div>

      {/* 🔶 About Content Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="About Car"
              className="w-full max-w-md"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Over 25 Years Of Experience & <br />
              Reputation
            </h2>

            {/* ORANGE LINE */}
            <div className="w-16 h-1 bg-orange-500 mt-4 mb-6"></div>

            <p className="text-gray-600 leading-7 mb-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly believable.
            </p>

            <p className="text-gray-600 leading-7">
              If you are going to use a passage of Lorem Ipsum, you need to be sure
              there isn't anything embarrassing hidden in the middle of text.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutSection;
