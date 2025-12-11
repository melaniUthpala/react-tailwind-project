import c1 from "../assets/images/2.png";
import c2 from "../assets/images/3.png";
import c3 from "../assets/images/4.png";
import c4 from "../assets/images/5.png";

export default function Clients() {
  const clients = [c1, c2, c3, c4];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto px-4">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center">

          {clients.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-60 hover:opacity-100 transition"
            >
              <img 
                src={logo} 
                alt="client logo" 
                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}