import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <header
        className="bg-white shadow w-full relative"
        style={{
          backgroundImage: `url(${"https://img.freepik.com/free-photo/front-view-protective-glasses-with-hard-hat-headphones_23-2148773471.jpg?size=626&ext=jpg&ga=GA1.1.34264412.1713744000&semt=ais"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%", // Initial background size
          backgroundAttachment: "fixed",
          height: "75vh", // Initial height for desktop view
          // Media query for mobile view
          "@media (max-width: 768px)": {
            backgroundImage: `url(${"https://safestfire.in/images/fir3.jpg"})`, // Change to mobile image URL
            backgroundSize: "cover", // Adjusted background size for mobile view
            height: "25vh", // Adjusted height for mobile view
          },
        }}
      >
        <div
          className="container items-center mx-auto justify-center z-20"
          style={{ display: "flex", flexDirection: "column", height: "75vh" }}
        >
          <h1 className="text-center text-6xl font-bold text-white z-20 ">
            Welcome to Zenpa Marketing
          </h1>
          <p className="text-center text-2xl text-white mt-2 z-20">
            Your one-stop solution for fire safety equipment and services
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      </header> */}

      {/* Header new  */}
      <header className="relative overflow-hidden ">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0" style={{ backgroundImage: 'url("https://i.makeagif.com/media/5-27-2015/_AI68u.gif")' }}></div>
      <div className="container mx-auto text-center relative z-10 py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Welcome to Zenpa Marketing</h1>
        <p className="text-lg md:text-xl text-white mb-8">One step solution of fire ,Safety and security equipment and services</p>
      </div>
    </header>

      {/* Our Services-1 */}
      {/* <section className="bg-white shadow-md rounded-lg p-8 font-medium">
        <div className="w-full flex flex-col items-center mb-8">
          <h2 className="text-3xl lg:text-4xl text-center text-gray-800 mb-4 font-bold">
            <span className="text-purple-600">Our</span> Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-purple-100 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl lg:text-2xl text-purple-800 mb-4 font-semibold border-b-2 border-purple-600 pb-2">
              Industrial Fire Safety Equipment
            </h3>
            <p className="text-gray-700">
              High-quality equipment to ensure workplace safety
            </p>
          </div>
          <div className="bg-yellow-100 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl lg:text-2xl text-yellow-800 mb-4 font-semibold border-b-2 border-yellow-600 pb-2">
              Fire Fighting Project Work
            </h3>
            <p className="text-gray-700">
              Expert project management for fire safety implementations
            </p>
          </div>
          <div className="bg-blue-100 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl lg:text-2xl text-blue-800 mb-4 font-semibold border-b-2 border-blue-600 pb-2">
              Safety Signboard Work
            </h3>
            <p className="text-gray-700">
              Clear and compliant safety signboards for workplaces
            </p>
          </div>
          <div className="bg-green-100 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl lg:text-2xl text-green-800 mb-4 font-semibold border-b-2 border-green-600 pb-2">
              All Types of PPE's
            </h3>
            <p className="text-gray-700">
              Personal Protective Equipment for various industries
            </p>
          </div>
          <div className="bg-pink-100 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl lg:text-2xl text-pink-800 mb-4 font-semibold border-b-2 border-pink-600 pb-2">
              Fire Safety Training Work
            </h3>
            <p className="text-gray-700">
              Comprehensive training programs for fire safety awareness
            </p>
          </div>
          <div className="bg-indigo-100 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl lg:text-2xl text-indigo-800 mb-4 font-semibold border-b-2 border-indigo-600 pb-2">
              CCTV Camera Installation, AMC, & Service
            </h3>
            <p className="text-gray-700">
              Installation, maintenance, and servicing of CCTV systems
            </p>
          </div>
        </div>
      </section> */}
      {/* Our Services-2 */}
      <section className="bg-white shadow-md rounded-lg p-8 font-medium">
        <div className="w-full flex flex-col items-center mb-8">
          <h2 className="text-3xl lg:text-4xl text-center text-gray-800 mb-4 font-bold">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-400 to-pink-600 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl lg:text-2xl text-white mb-4 font-semibold border-b-2 border-white pb-2">
              Industrial Fire Safety Equipment
            </h3>
            <p className="text-gray-200">
              High-quality equipment to ensure workplace safety
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl lg:text-2xl text-white mb-4 font-semibold border-b-2 border-white pb-2">
              Fire Fighting Project Work
            </h3>
            <p className="text-gray-200">
              Expert project management for fire safety implementations
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-400 to-cyan-500 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl lg:text-2xl text-white mb-4 font-semibold border-b-2 border-white pb-2">
              Safety Signboard Work
            </h3>
            <p className="text-gray-200">
              Clear and compliant safety signboards for workplaces
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-400 to-teal-500 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl lg:text-2xl text-white mb-4 font-semibold border-b-2 border-white pb-2">
              All Types of PPE's
            </h3>
            <p className="text-gray-200">
              Personal Protective Equipment for various industries
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-400 to-red-500 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl lg:text-2xl text-white mb-4 font-semibold border-b-2 border-white pb-2">
              Fire Safety Training Work
            </h3>
            <p className="text-gray-200">
              Comprehensive training programs for fire safety awareness
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-400 to-purple-500 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105">
            <h3 className="text-xl lg:text-2xl text-white mb-4 font-semibold border-b-2 border-white pb-2">
              CCTV Camera Installation, AMC, & Service
            </h3>
            <p className="text-gray-200">
              Installation, maintenance, and servicing of CCTV systems
            </p>
          </div>
        </div>
      </section>
      {/* Why to Choose Us */}
      <section className="bg-white shadow-lg rounded-lg p-8 font-medium">
      <h2 className="text-4xl lg:text-5xl text-center text-gray-800 mb-8 font-bold relative">
        Why Choose Us?
       
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="flex items-center">
          <span className="text-green-500 text-2xl">&#10004;</span>
          <h3 className="text-xl lg:text-2xl text-gray-800 mb-0 ml-2 font-semibold">Specialists in Industrial Fire Safety Equipment</h3>
        </div>
        <div className="flex items-center">
          <span className="text-green-500 text-2xl">&#10004;</span>
          <h3 className="text-xl lg:text-2xl text-gray-800 mb-0 ml-2 font-semibold">Expert Project Management for Fire Safety</h3>
        </div>
        <div className="flex items-center">
          <span className="text-green-500 text-2xl">&#10004;</span>
          <h3 className="text-xl lg:text-2xl text-gray-800 mb-0 ml-2 font-semibold">Efficient Fire NOC & Documentation Services</h3>
        </div>
        <div className="flex items-center">
          <span className="text-green-500 text-2xl">&#10004;</span>
          <h3 className="text-xl lg:text-2xl text-gray-800 mb-0 ml-2 font-semibold">Clear and Compliant Safety Signboards</h3>
        </div>
      </div>
    </section>
      {/* At Zenpa Marketing */}
      <section className="bg-gradient-to-b from-purple-900 to-indigo-900 bg-cover w-full ctasection z-50 py-12">
        <div className="relative w-11/12 max-w-[1080px] mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-8 lg:space-y-0 lg:space-x-12 xl:space-x-24">
          {/* <!--left-part--> */}
          <div className="lg:w-1/2 space-y-6 lg:mr-8 flex flex-col justify-center text-white mx-8">
            <h2 className="font-mullish font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight">
              At Zenpa Marketing
            </h2>
            <div className="w-12 h-1 bg-lime-400"></div>
            <p className="font-mullish text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-snug lg:leading-normal xl:text-3xl xl:leading-relaxed border-l-4 border-lime-400 pl-6">
              We are committed to ensuring the safety and security of your
              workplace. Choose us for unmatched expertise, top-quality
              products, and exceptional service that puts your safety first.
            </p>
          </div>
          {/* <!--right-part (optional)--> */}
          <div className="hidden lg:flex lg:flex-col items-center justify-center relative">
            <div className="rounded-full bg-lime-400 w-32 h-32 opacity-50 animate-bounce mb-4"></div>
            <svg
              className="absolute -bottom-20 -right-20 text-lime-400"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="60"
                cy="60"
                r="60"
                fill="currentColor"
                opacity="0.1"
              />
            </svg>
            <p className="font-mullish text-lg text-center text-lime-400">
              Your Safety First
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
