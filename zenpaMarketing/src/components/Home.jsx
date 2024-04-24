import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to Zenpa Marketing
          </h1>
          <p className="text-gray-600 mt-2">
            Your one-stop solution for fire safety equipment and services
          </p>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-white bg-orange-700 mb-4 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
              Our Services
            </h2>
            <ul className="list-disc list-inside">
              <li className="mb-4">
                <span className="block text-lg font-semibold">
                  Industrial fire safety equipment
                </span>
                <span className="block text-gray-600">
                  High-quality equipment to ensure workplace safety
                </span>
              </li>
              <li className="mb-4">
                <span className="block text-lg font-semibold">
                  Fire fighting project work
                </span>
                <span className="block text-gray-600">
                  Expert project management for fire safety implementations
                </span>
              </li>
              <li className="mb-4">
                <span className="block text-lg font-semibold">
                  Fire NOC & document work
                </span>
                <span className="block text-gray-600">
                  Streamlined documentation process for fire compliance
                </span>
              </li>
              <li className="mb-4">
                <span className="block text-lg font-semibold">
                  Safety signboard work
                </span>
                <span className="block text-gray-600">
                  Clear and compliant safety signboards for workplaces
                </span>
              </li>
              <li className="mb-4">
                <span className="block text-lg font-semibold">
                  All types of PPE's
                </span>
                <span className="block text-gray-600">
                  Personal Protective Equipment for various industries
                </span>
              </li>
              <li className="mb-4">
                <span className="block text-lg font-semibold">
                  Fire safety training work
                </span>
                <span className="block text-gray-600">
                  Comprehensive training programs for fire safety awareness
                </span>
              </li>
              <li className="mb-4">
                <span className="block text-lg font-semibold">
                  CCTV camera installation, AMC, and service
                </span>
                <span className="block text-gray-600">
                  Installation, maintenance, and servicing of CCTV systems
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-white bg-orange-700 mb-4 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
              Why Choose Us?
            </h2>
            <p className="text-gray-600">
              <span className="text-blue-500">
                Specialists in Industrial Fire Safety Equipment:
              </span>{" "}
              Zenpa Marketing specializes in providing top-of-the-line
              industrial fire safety equipment. Our products are meticulously
              selected to ensure the highest standards of safety in the
              workplace, offering peace of mind to both employers and employees.
            </p>

            <p className="text-gray-600">
              <span className="text-blue-500">
                Expert Project Management for Fire Safety Implementations:
              </span>{" "}
              With Zenpa Marketing, you don't just get equipment – you get
              comprehensive project management services. Our experienced team
              oversees every aspect of fire safety implementations, ensuring
              seamless execution from start to finish.
            </p>

            <p className="text-gray-600">
              <span className="text-blue-500">
                Streamlined Fire NOC & Documentation Services:
              </span>{" "}
              Navigating fire compliance regulations can be daunting, but with
              Zenpa Marketing, it's a breeze. Our streamlined documentation
              process simplifies obtaining Fire NOCs and ensures that your
              workplace meets all necessary regulatory requirements.
            </p>

            <p className="text-gray-600">
              <span className="text-blue-500">
                Clear and Compliant Safety Signboards:
              </span>{" "}
              Safety shouldn't be ambiguous. Zenpa Marketing offers clear and
              compliant safety signboards tailored to your workplace's needs.
              From emergency exit signs to hazard warnings, we ensure that your
              premises are equipped with the right signage for optimal safety.
            </p>

            <p className="text-gray-600">
              <span className="text-blue-500">
                Comprehensive Range of Personal Protective Equipment (PPE):
              </span>{" "}
              Protect your workforce with Zenpa Marketing's comprehensive range
              of PPE. From head to toe, we offer high-quality protective gear
              designed to meet the specific safety needs of various industries.
            </p>

            <p className="text-gray-600">
              At Zenpa Marketing, we are committed to ensuring the safety and
              security of your workplace. Choose us for unmatched expertise,
              top-quality products, and exceptional service that puts your
              safety first.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
