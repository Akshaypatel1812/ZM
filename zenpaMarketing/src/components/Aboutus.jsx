// import React from "react";

// function AboutUs() {
//   return (
//     <div className="container mx-auto py-2">
//       <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
//         <div className="grid grid-cols-2 gap-4">
//           <img
//             src="https://images.pexels.com/photos/896568/pexels-photo-896568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//             alt="Safety Image 1"
//             className="rounded-lg"
//           />
//           <img
//             src="https://images.pexels.com/photos/2965260/pexels-photo-2965260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//             alt="Safety Image 2"
//             className="rounded-lg"
//           />
//         </div>
//       </div>

//       <div className="container mx-auto py-8">
//         <div className="max-w-5xl mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="bg-white shadow-md rounded-lg p-6 bg-[url(zenpaMarketing\images\instant-settlement-bg.png)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200
//                 hover:bg-[url(zenpaMarketing\images\instant-settlement-bghover.png)]">
//               <h3 className="text-white bg-orange-700 mb-4 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
//                 Established in Year 2023
//               </h3>
//               <p className="text-gray-700">
//                 "Zenpa Marketing" is a service provider and trader of fire
//                 fighting training service and fire extinguishers, committed to
//                 ensuring workplace safety and security.
//               </p>
//             </div>
//             <div className="bg-white shadow-md rounded-lg p-6 bg-[url(zenpaMarketing\images\instant-settlement-bg.png)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200
//                 hover:bg-[url(zenpaMarketing\images\instant-settlement-bghover.png)]">
//               <h3 className="text-white bg-orange-700 mb-4 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
//                 Our Mission
//               </h3>
//               <p className="text-gray-700">
//                 To offer top-quality fire safety equipment and solutions, along
//                 with exceptional service, to businesses of all sizes.
//               </p>
//             </div>
//             <div className="bg-white shadow-md rounded-lg p-6 bg-[url(zenpaMarketing\images\instant-settlement-bg.png)] w-full max-h-[300px] cursor-pointer bg-no-repeat hover:scale-105 transition-all duration-200
//                 hover:bg-[url(zenpaMarketing\images\instant-settlement-bghover.png)]">
//               <h3 className="text-white bg-orange-700 mb-4 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
//                 Our Vision
//               </h3>
//               <p className="text-gray-700">
//                 To be a leader in the fire safety industry, recognized for our
//                 commitment to excellence and customer satisfaction.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutUs;

import React from "react";

function AboutUs() {
  return (
    <div className="container mx-auto py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fadeInDown">Welcome to Zenpa Marketing</h1>
          <p className="text-xl mb-8 animate-fadeInUp">Empowering workplaces with top-tier fire safety solutions since 2023.</p>
          <a href="#learn-more" className="bg-white text-orange-700 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300 animate-bounce">
            Learn More
          </a>
        </div>
      </div>

      {/* Company Introduction */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8 mt-8">
        <h2 id="learn-more" className="text-3xl font-bold text-center mb-6 text-gradient">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          "Zenpa Marketing" is your trusted partner in workplace safety and security. Established in 2023, we specialize in providing top-notch fire fighting training services and fire extinguishers to ensure the safety and well-being of your organization. Our mission is to offer cutting-edge fire safety equipment and solutions, coupled with exceptional service, to businesses of all sizes. With a vision to lead the fire safety industry, we are committed to excellence and customer satisfaction.
        </p>
      </div>

      {/* Mission, Vision, and Values */}
      <div className="container mx-auto py-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-xl font-bold text-orange-700 mb-4">Established in Year 2023</h3>
              <p className="text-gray-700">
                "Zenpa Marketing" is a service provider and trader of fire fighting training service and fire extinguishers, committed to ensuring workplace safety and security.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-xl font-bold text-orange-700 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To offer top-quality fire safety equipment and solutions, along with exceptional service, to businesses of all sizes.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105">
              <h3 className="text-xl font-bold text-orange-700 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be a leader in the fire safety industry, recognized for our commitment to excellence and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CEO Section */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-col lg:flex-row items-center">
            {/* CEO Photo */}
            <img
              src="https://www.philips.com/c-dam/corporate/en_AA/about/about-us/executive-commitee/roy-jakobs-ceo-cardview.jpg"
              alt="CEO"
              className="rounded-full w-32 h-32 lg:w-48 lg:h-48 mb-4 lg:mb-0 lg:mr-8"
            />
            {/* CEO Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Kiran Patel (Founder)</h2>
              <p className="text-gray-700 mb-2 font-bold">PDIS || PDIETM || Safety, Environment & Health Management || Ahmedabad</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

