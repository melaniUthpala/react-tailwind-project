import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pink-50 text-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1 */}
          <div>
            <img
              src="/src/assets/images/logo.png"
              alt="Motonic Logo"
              className="h-8 mb-4"
            />

            <p className="text-gray-600 mb-6">
              Simply dummy text of the printing and typesetting industry.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-500">
                <i className="fab fa-google-plus-g text-xl"></i>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-orange-500">
              Recent post
            </h3>

            <div className="space-y-4">
              {/* Post 1 */}
              <div className="flex items-start space-x-3">
                <img
                  src="/src/assets/images/img-1 (2).jpg"
                  alt="Car Repair 1"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p className="font-medium">Most Important Issue For your car.</p>
                  <p className="text-orange-500 text-sm">18 Feb 2019</p>
                </div>
              </div>

              {/* Post 2 */}
              <div className="flex items-start space-x-3">
                <img
                  src="/src/assets/images/img-2 (2).jpg"
                  alt="Car Repair 2"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p className="font-medium">Most Important Issue For your car.</p>
                  <p className="text-orange-500 text-sm">18 Feb 2019</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-orange-500">
              Address
            </h3>

            <div className="space-y-3">
              <p className="font-medium">Head Office Address</p>
              <p className="text-gray-600">121 King Street, Melbourne West, Australia</p>

              <div className="pt-4">
                <p className="text-orange-500">
                  <span className="text-gray-800 font-medium">Phone:</span> 888 123-4587
                </p>

                <p className="text-orange-500">
                  <span className="text-gray-800 font-medium">Email:</span> info@example.com
                </p>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-orange-500">
              Services
            </h3>

            <ul className="space-y-2">
              {[
                "Engine Repair",
                "Tire Replacement",
                "Transmission",
                "Diagnostic",
                "Batteries",
                "Break Repair",
              ].map((service) => (
                <li key={service} className="flex items-center text-gray-600">
                  <span className="text-orange-500 mr-2">•</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 pt-8 text-center">
          <p className="text-gray-600">
            Privacy Policy | © 2019 Motonic All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
