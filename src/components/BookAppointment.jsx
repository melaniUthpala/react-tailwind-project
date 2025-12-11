import carImg from "../assets/images/img-1.png"; 
// ↑ මේ image එක ඔයා assets/images folder එකට දාන්න

export default function BookAppointment() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* ✅ LEFT SIDE - FORM */}
        <div>
          <h2 className="text-4xl font-bold mb-10">
            Book An Appointment
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="border bg-gray-100 px-4 py-3 outline-none"
            />

            {/* Phone */}
            <input
              type="text"
              placeholder="Phone"
              className="border bg-gray-100 px-4 py-3 outline-none"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="border bg-gray-100 px-4 py-3 outline-none"
            />

            {/* Service Select */}
            <select className="border bg-gray-100 px-4 py-3 outline-none text-gray-600">
              <option>Tires Replacement</option>
              <option>Engine Repair</option>
              <option>Car Wash</option>
              <option>Oil Change</option>
            </select>

            {/* Description */}
            <textarea
              placeholder="Description..."
              rows="5"
              className="border bg-gray-100 px-4 py-3 outline-none md:col-span-2"
            ></textarea>

            {/* Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 font-semibold hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </div>

          </form>
        </div>

        {/* ✅ RIGHT SIDE - IMAGE */}
        <div className="flex justify-center">
          <img
            src={carImg}
            alt="Appointment"
            className="max-w-full"
          />
        </div>

      </div>
    </section>
  );
}