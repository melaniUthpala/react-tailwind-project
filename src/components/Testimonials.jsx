import { useEffect, useState } from "react";

// ✅ Local Images Import
import t1 from "../assets/images/2.jpg";
import t2 from "../assets/images/2.jpg";
import t3 from "../assets/images/2.jpg";

const testimonials = [
  {
    text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum.",
    name: "Jimmy Alex",
    role: "SEO of Northy",
    image: t1,
  },
  {
    text:"If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum.",
    name: "Jimmy Alex",
    role: "SEO of Northy",
    image: t2,
  },
  {
    text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum.",
    name: "Jimmy Alex",
    role: "SEO of Northy",
    image: t3,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ ✅ ✅ AUTO SLIDE EFFECT (Video eka wage)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* ✅ QUOTE ICON */}
        <div className="text-orange-500 text-8xl mb-8">“</div>

        {/* ✅ TEXT */}
        <p
          key={activeIndex}
          className="text-gray-600 text-lg leading-8 mb-10 transition-opacity duration-500"
        >
          {testimonials[activeIndex].text}
        </p>

        {/* ✅ USER IMAGE */}
        <div className="flex justify-center mb-4">
          <img
            key={testimonials[activeIndex].image}
            src={testimonials[activeIndex].image}
            alt="testimonial"
            className="w-24 h-24 rounded-full object-cover shadow transition-all duration-500"
          />
        </div>

        {/* ✅ NAME */}
        <h3 className="text-xl font-bold text-gray-900">
          {testimonials[activeIndex].name}
        </h3>

        {/* ✅ ROLE */}
        <p className="text-orange-500 font-medium mt-1">
          {testimonials[activeIndex].role}
        </p>

        {/* ✅ ✅ ✅ MOTONIC STYLE ROUND DOTS */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-gray-700 scale-125"
                  : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;