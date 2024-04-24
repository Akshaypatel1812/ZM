import React from "react";

function AboutUs() {
  return (
    <div className="container mx-auto py-2">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.pexels.com/photos/896568/pexels-photo-896568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Safety Image 1"
            className="rounded-lg"
          />
          <img
            src="https://images.pexels.com/photos/2965260/pexels-photo-2965260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Safety Image 2"
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="container mx-auto py-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-white bg-orange-700 mb-4 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                Established in Year 2023
              </h3>
              <p className="text-gray-700">
                "Zenpa Marketing" is a service provider and trader of fire
                fighting training service and fire extinguishers, committed to
                ensuring workplace safety and security.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-white bg-orange-700 mb-4 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To offer top-quality fire safety equipment and solutions, along
                with exceptional service, to businesses of all sizes.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-white bg-orange-700 mb-4 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be a leader in the fire safety industry, recognized for our
                commitment to excellence and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
