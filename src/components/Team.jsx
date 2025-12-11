import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import img1 from "../assets/images/img-1.jpg";
import img2 from "../assets/images/img-2.jpg";
import img3 from "../assets/images/img-3.jpg";
import img4 from "../assets/images/img-4.jpg";

const teamMembers = [
  {
    name: "Riccardo Cavallo",
    role: "Founder",
    image: img1
  },
  {
    name: "Angelina Grey",
    role: "Manager",
    image: img2
  },
  {
    name: "William Henry",
    role: "Engineer",
    image: img3
  },
  {
    name: "Sophia Brown",
    role: "Designer",
    image: img4
  }
];
export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <p className="text-orange-500 font-medium mb-2">
          Meet Our Expertise
        </p>

        <h2 className="text-4xl font-bold mb-4">
          Our Awesome Team
        </h2>

        <div className="w-16 h-1 bg-orange-500 mx-auto mb-14"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-orange-50"
            >
              {/* IMAGE + OVERLAY */}
              <div className="relative group overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[340px] object-cover"
                />

                {/* ✅ ORANGE OVERLAY */}
                <div className="absolute inset-0 bg-orange-500/90 
                                opacity-0 
                                group-hover:opacity-100 
                                transition duration-500 
                                flex flex-col justify-center items-start px-6">

                  {/* ✅ ICONS */}
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="bg-white p-3 rounded hover:bg-black hover:text-white transition">
                      <FaFacebookF />
                    </div>

                    <div className="bg-white p-3 rounded hover:bg-black hover:text-white transition">
                      <FaTwitter />
                    </div>

                    <div className="bg-white p-3 rounded hover:bg-black hover:text-white transition">
                      <FaGooglePlusG />
                    </div>
                  </div>

                  {/* ✅ NAME UNDER ICONS ONLY */}
                  <div className="bg-white px-4 py-2">
                    <h3 className="font-semibold text-gray-800 text-sm">
                      {member.name}
                    </h3>
                  </div>

                </div>
              </div>

              {/* ✅ ❌ BOTTOM NAME REMOVED COMPLETELY */}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}