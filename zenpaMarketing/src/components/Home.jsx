import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faComments } from "@fortawesome/free-solid-svg-icons";

const phoneNumber = "+91-9054823690";
const emailAddress = "zenpamarketing@gmail.com";
const linkedInProfile = "https://www.linkedin.com/company/zenpa-marketing/";

const handleChatButtonClick = () => {
  const phoneNumber = "9054823690";
  const message =
    "Hello Zenpa Marketing Recently i visit your web site ! I have to know more about your services.";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Open the link in a new tab/window
  window.open(url, "_blank");
};

const handleCall = () => {
  window.location.href = `tel:${phoneNumber}`;
};

const handleEmail = () => {
  window.location.href = `mailto:${emailAddress}`;
};

const handleLinkedIn = () => {
  window.open(linkedInProfile, "_blank");
};

function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const contact = document.getElementById("Contact").value;
  const message = document.getElementById("message").value;

  const subject = "Message from Zenpa Marketing Contact Form";
  const body = `Hello Zenpa Marketing i am a ${name} \n Message:${message} \n Contact No: ${contact}`;

  const ownerEmail = "zenpamarketing@gmail.com";

  window.location.href = `mailto:${ownerEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

const products = [
  {
    id: 1,
    name: "Safety Helmet",
    description:
      "Our safety helmet offers durable head protection with adjustable straps for comfort. Ideal for construction and industrial environments.",
    image:
      "https://ohsonline.com/-/media/OHS/OHS/Images/2023/12/12,-d-,13,-d-,23safetyhelmets.jpg",
  },
  {
    id: 2,
    name: "Fire Extinguishers",
    description:
      "Be prepared for emergencies with our reliable fire extinguisher. Easy to use and effective, its a must-have for any workplace.",
    image:
      "https://britanniaalarms.co.uk/wp-content/uploads/iStock-1188013372.jpg",
  },
  {
    id: 3,
    name: "Fire Fighting Project Work",
    description:
      "Our expert team ensures seamless execution from start to finish, providing peace of mind and expertise for your workplace safety.",
    image:
      "https://static.wixstatic.com/media/dee124_c8e044aa786048f286e7066636afd0e5~mv2.png/v1/fill/w_560,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dee124_c8e044aa786048f286e7066636afd0e5~mv2.png",
  },
  {
    id: 4,
    name: "Eye Protection",
    description:
      "Protect your vision with our reliable eye gear. Comfortable and effective, it ensures safety in any work environment.",
    image:
      "https://images.pexels.com/photos/9242836/pexels-photo-9242836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 5,
    name: "Respiratory Protection",
    description:
      "Stay safe with our respiratory gear. Breathable and reliable, its essential for workplace protection.",
    image: "https://ohsonline.com/-/media/OHS/OHS/Images/2021/05/terpin.jpg",
  },
  {
    id: 6,
    name: "Hand Protection",
    description:
      "Keep your hands safe with our protective gear.its essential for workplace safety.",
    image:
      "https://assets-global.website-files.com/647888ca92d03e3fca3f1ea0/647888ca92d03e3fca3f2440_shutterstock_1547048333.jpg",
  },
  {
    id: 5,
    name: "Smoke Detector System",
    description:
      "Ensure safety with the Smoke Detector Systems advanced fire detection, real-time alerts, and easy installation.",
    image: "https://cdn.hswstatic.com/gif/smoke-detector.jpg",
  },
  {
    id: 7,
    name: "CCTV cameras",
    description:
      "offer robust surveillance solutions, providing monitoring and security for homes, businesses, and public spaces.",
    image:
      "https://media.licdn.com/dms/image/D5612AQE6LuFc86nQ8g/article-cover_image-shrink_720_1280/0/1713351470524?e=2147483647&v=beta&t=-XsqA9_CEymucOL1WODkyZ01dJarLR-8Y7_2b9CkSS0",
  },
  {
    id: 8,
    name: "breathing apparatus",
    description:
      "Provides essential respiratory protection in hazardous environments, ensuring safety and peace of mind for users.",
    image:
      "https://heightsafety.net/wp-content/uploads/training-course-breathing-apparatus-1.jpg.webp",
  },
];

const handleBuyNow = (product) => {
  const ownerEmail = "zenpamarketing@gmail.com"; // Replace with your owner's email
  const subject = `Interested in purchasing ${product.name}`;
  const body = `Hi,\n\nI am interested in purchasing ${product.name}.\n\nPlease provide me with more information.\n\nThanks.`;
  window.location.href = `mailto:${ownerEmail}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};

export default function Home() {
  return (
    <>
      {/* WhatsApp Chat Button */}
      <div className="fixed bottom-20 right-4 z-50">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-3 rounded-full flex items-center justify-center"
          onClick={handleChatButtonClick}
        >
          <FontAwesomeIcon icon={faComments} size="lg" />
        </button>
      </div>

      {/* Call Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-3 py-3 rounded-full flex items-center justify-center"
          onClick={handleCall}
        >
          <FontAwesomeIcon icon={faPhone} size="lg" />
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white"
      >
        {/* Header new  */}
        <header className="relative overflow-hidden" id="home">
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
            style={{
              backgroundImage:
                'url("https://i.makeagif.com/media/3-03-2017/TZKHB9.gif")',
            }}
          ></div>
          <div className="container mx-auto text-center relative z-10 py-24">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              Welcome to Zenpa Marketing
            </h1>
            <p className="text-lg md:text-xl text-white mb-8">
              One step solution of fire ,Safety and security equipment and
              services
            </p>
          </div>
        </header>
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
        <section
          id="temp"
          className="bg-white shadow-lg rounded-lg p-8 font-medium"
        >
          <h2 className="text-4xl lg:text-5xl text-center text-gray-800 mb-8 font-bold relative">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="flex items-center">
              <span className="text-green-500 text-2xl">&#10004;</span>
              <h3 className="text-xl lg:text-2xl text-gray-800 mb-0 ml-2 font-semibold">
                Specialists in Industrial Fire Safety Equipment
              </h3>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 text-2xl">&#10004;</span>
              <h3 className="text-xl lg:text-2xl text-gray-800 mb-0 ml-2 font-semibold">
                Expert Project Management for Fire Safety
              </h3>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 text-2xl">&#10004;</span>
              <h3 className="text-xl lg:text-2xl text-gray-800 mb-0 ml-2 font-semibold">
                Efficient Fire NOC & Documentation Services
              </h3>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 text-2xl">&#10004;</span>
              <h3 className="text-xl lg:text-2xl text-gray-800 mb-0 ml-2 font-semibold">
                Clear and Compliant Safety Signboards
              </h3>
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

        {/* section 2 aboutUs */}

        <div
          id="aboutUs"
          className="container mx-auto py-12 bg-gradient-to-b bg-white"
        >
          {/* Company Introduction */}
          <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-10 animate-fadeIn">
            <h2
              id="learn-more"
              className="text-4xl font-bold text-center mb-8 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500"
            >
              About Us
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              <strong>Zenpa Marketing</strong> is your trusted partner in
              workplace safety and security. Established in 2023, we specialize
              in providing top-notch fire fighting training services and fire
              extinguishers to ensure the safety and well-being of your
              organization. Our mission is to offer cutting-edge fire safety
              equipment and solutions, coupled with exceptional service, to
              businesses of all sizes. With a vision to lead the fire safety
              industry, we are committed to excellence and customer
              satisfaction.
            </p>
          </div>

          {/* GST Number */}
          <div className="max-w-5xl mx-auto mt-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-fadeIn">
              GST Number
            </h3>
            <p className="text-center text-4xl font-bold text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500 animate-fadeIn">
              24BWJPP6345P1ZS
            </p>
          </div>

          {/* Mission, Vision, and Values */}
          <div className="container mx-auto py-12">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 animate-slideInLeft">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">
                    Established in Year 2023
                  </h3>
                  <p className="text-gray-700">
                    Zenpa Marketing is a service provider and trader of fire
                    fighting training service and fire extinguishers, committed
                    to ensuring workplace safety and security.
                  </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 animate-slideInUp">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-700">
                    To offer top-quality fire safety equipment and solutions,
                    along with exceptional service, to businesses of all sizes.
                  </p>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 hover:scale-105 animate-slideInRight">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-700">
                    To be a leader in the fire safety industry, recognized for
                    our commitment to excellence and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CEO Section */}
          <div className="relative w-11/12 max-w-[1500px] mx-auto py-10">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/015/735/685/small_2x/design-halftone-white-grey-background-futuristic-grunge-pattern-dot-wave-modern-stylish-pop-art-texture-for-posters-sites-business-cards-covers-labels-mockup-vector.jpg"
              alt="dot"
              className="absolute w-[200px] top-[2rem] left-[0rem] z-10"
            />

            {/* Main part */}
            <div className="flex flex-col md:flex-row max-w-[960px] items-center mx-auto my-6 justify-evenly">
              <img
                src="data:image/jpeg;base64,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"
                alt="idk"
                width="320px"
                height="320px"
                className="rounded-xl z-20"
              />
              {/* Right text */}
              <div className="max-w-[400px] mt-6 md:mt-0 md:ml-6 text-center md:text-left">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/970/457/original/eps10-grey-quotation-mark-icon-isolated-on-white-background-double-quotes-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-ui-pictogram-and-mobile-application-vector.jpg"
                  alt="logo"
                  width="35px"
                  height="40px"
                  className="-mb-2 mr-3"
                />
                <p className="font-mullish text-2xl opacity-60 leading-[2.75rem] font-extralight">
                  One step solution of fire, Safety, <br /> security equipment
                  and services
                </p>

                <div className="flex flex-col items-center md:items-start">
                  <h3 className="font-mullish font-extrabold text-2xl">
                    Kiran Patel
                  </h3>
                </div>
                <p className="font-mullish font-medium mt-1">
                  Founder, Zenpa Marketing
                </p>
                <a
                  href="https://www.linkedin.com/in/kiran-patel-ehs-executive/"
                  className="text-grayText italic underline text-blue-500"
                >
                  Learn More
                </a>
                <p className="text-gray-700 mb-2 font-bold">
                  PDIS || PDIETM || Safety, Environment & Health Management ||
                  Ahmedabad
                </p>
                <img
                  src="https://st.depositphotos.com/1519283/4185/v/450/depositphotos_41852543-stock-illustration-safety-first-vector-sign.jpg"
                  alt=""
                  width="80px"
                  height="40px"
                  className="hidden md:block"
                />
              </div>
            </div>

            {/* Dot row */}
          </div>

          {/* Company Timeline */}
          <div className="max-w-5xl mx-auto mt-16 ml-2">
            <h3 className="text-3xl font-bold text-center mb-8 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 animate-fadeIn">
              Our Journey
            </h3>
            <div className="flex flex-col gap-6">
              <div className="relative pl-10 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b from-purple-500 to-pink-500 after:content-[''] after:absolute after:left-[-0.5rem] after:top-0 after:w-3 after:h-3 after:bg-white after:border-4 after:border-purple-500 after:rounded-full animate-fadeIn">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">2023</h4>
                  <p className="text-gray-700">
                    Zenpa Marketing was established with a vision to enhance
                    workplace safety and security.
                  </p>
                </div>
              </div>
              <div className="relative pl-10 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-gradient-to-b from-purple-500 to-pink-500 after:content-[''] after:absolute after:left-[-0.5rem] after:top-0 after:w-3 after:h-3 after:bg-white after:border-4 after:border-purple-500 after:rounded-full animate-fadeIn delay-300">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">2024</h4>
                  <p className="text-gray-700">
                    Expanded our services to include advanced fire fighting
                    training and state-of-the-art fire extinguishers.
                  </p>
                </div>
              </div>
              {/* Add more timeline items as needed */}
            </div>
          </div>

          {/* Testimonials */}
        </div>

        <div
          id="contactUs"
          className="bg-[url(https://static.vecteezy.com/system/resources/previews/029/318/220/non_2x/abstract-golden-wave-lines-png-transparent-free-vector.jpg)] bg-no-repeat bg-cover z-50 max-w-{size} relative bg-white min-h-screen py-12"
         
        >
          <div className="container mx-auto px-2 font-mullish">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {" "}
              
              {/* Contact Form */}
              <div className="w-full max-w-none bg-white shadow-lg p-8 animate-fadeIn">
                <h2 className="text-4xl font-bold text-center mb-8 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-black to bg-black">
                  Contact Us
                </h2>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg font-medium text-gray-800 mt-3"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-400"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Contact"
                      className="block text-lg font-medium text-gray-800 mt-3"
                    >
                      Contact no:
                    </label>
                    <input
                      id="Contact"
                      type="tel"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-400"
                      placeholder="+91 xxxxxxxxxx"
                      pattern="\d{5}\d{5}"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-lg font-medium text-gray-800 mt-3"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-400 h-32 resize-none"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r mt-4 from-yellow-500 to-yellow-600 text-white py-2 px-6 rounded-md hover:bg-gradient-to-r hover:from-yellow-600 hover:to-yellow-700 transition duration-300"
                  >
                    Send Message via Email
                  </button>
                </form>
              </div>
              {/* Contact Info and Map */}
              <div className="w-full max-w-none bg-white">
                {/* Map */}
                <div className="mb-6 bg-white">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.7733070046584!2d72.3345043738156!3d23.2876854063857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2298b5261e11%3A0xcd5944739c215411!2sTirth%20Arcade!5e0!3m2!1sen!2sin!4v1714312138646!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    style={{ border: 0, maxWidth: "100%" }} // Ensure the map scales properly
                    allowFullScreen=""
                  ></iframe>
                </div>
                {/* Contact Information */}
                <div className="bg-white p-2 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-gray-600 mb-3">
                    <strong>Address:</strong> F/12 Tirth Arcade,
                    Thol Road, Kadi, Dist. Mehsana, Gujarat, Pin Code: 382715
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Phone:</strong> +1 234 567 890
                  </p>
                  <p className="text-gray-600 mb-3">
                    <strong>Email:</strong> contact@yourcompany.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visit Us  */}

        <div
          id="location"
          className="max-w-screen mx-auto text-center p-12 bg-white rounded-lg shadow-xl py-12"
        >
          <h1 className="text-4xl mb-6 font-semibold text-from-purple-500">
            Discover Us Here
          </h1>

          {/* <div className="border-b-2 border-gray-300 mb-6"></div> */}

          <p className="text-lg mb-8 text-gray-700">
            <span className="font-semibold">Address:</span> F/12 Tirth Arcade,
            Thol Road, Kadi, Dist. Mehsana, Gujarat, Pin Code: 382715
          </p>

          <div className="w-full overflow-hidden rounded-lg border-4 border-blue-200 relative">
            <iframe
              title="location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.7733070046584!2d72.3345043738156!3d23.2876854063857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2298b5261e11%3A0xcd5944739c215411!2sTirth%20Arcade!5e0!3m2!1sen!2sin!4v1714312138646!5m2!1sen!2sin"
              width="600"
              height="450"
              className="w-full rounded-lg"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Any additional elements can be added here */}
            </div>
          </div>

          <div className="border-t-2 border-gray-300 mt-6"></div>
        </div>

        {/* Product section */}

        <div id="products" className="bg-white py-12">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
              Welcome to Our Safety Products Store
            </h1>
            <p className="text-lg text-gray-700 mt-2">
              Browse our collection of top-quality safety equipment
            </p>
          </header>
          <section className="bg-white pt-40 pb-12 -mt-[150px] -z-[100]">
            <div className="relative w-11/12 max-w-[1080px] mx-auto pt-2 flex flex-col lg:flex-row justify-between">
              {/* right (image) */}
              <div className="h-[300px] lg:h-[500px] w-full lg:w-[50%] relative overflow-hidden lg:order-2">
                <div
                  style={{
                    background: "linear-gradient(180deg,#f4f8ff,#fff0)",
                  }}
                  className="absolute h-[150px] w-full top-0 z-50"
                ></div>
                <img
                  src="https://images.squarespace-cdn.com/content/v1/533f39a2e4b0cc3170028bf6/1476983292969-8V7610OD1F6W6BAR90F4/image-asset.png"
                  alt=""
                  className="absolute object-cover h-full w-full animate-float"
                />
                <div
                  style={{ background: "linear-gradient(0deg,#f4f8ff,#fff0)" }}
                  className="absolute h-[150px] w-full bottom-0 z-50"
                ></div>
              </div>
              {/* left (text) */}
              <div className="bg-white flex flex-col justify-center mt-10 lg:max-w-[50%] lg:order-1">
                <div className="lg:pl-8">
                  <h2 className="font-mullish font-extrabold text-2xl text-deepBlue text-center lg:text-left">
                    Discover Safety Products from 100+ Leading Companies
                  </h2>
                  <div className="w-8 h-1 bg-lime-500 mb-10 mt-4 mx-auto lg:mx-0"></div>
                  <p className="font-mullish opacity-80 lg:text-left">
                    We offer a comprehensive range of safety products sourced
                    from over 100 reputable companies. Each product meets
                    stringent quality standards, ensuring reliability and safety
                    for your workplace. Whether you need personal protective
                    equipment (PPE), fire safety gear, or industrial safety
                    solutions, our products are designed to keep your employees
                    safe and your operations compliant.
                  </p>
                  <div className="mt-7 flex justify-center lg:justify-start">
                    <button className="relative flex items-center justify-start bg-lightBlue text-white py-[14px] px-[18px] rounded-md font-mullish hover:bg-lightBlue500 transition-all duration-200 w-[9rem] h-12">
                      Explore Products
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right ml-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                    onClick={() => handleBuyNow(product)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
