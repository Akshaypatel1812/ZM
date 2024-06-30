import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const phoneNumber = "+91-9054823690";
const emailAddress = "zenpamarketing@gmail.com";
const linkedInProfile = "https://www.linkedin.com/company/zenpa-marketing/";

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
    <div className="bg-white">
      

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
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage:
              'url("https://i.makeagif.com/media/5-27-2015/_AI68u.gif")',
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

      {/* eiefhewidfhndf */}
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
            workplace safety and security. Established in 2023, we specialize in
            providing top-notch fire fighting training services and fire
            extinguishers to ensure the safety and well-being of your
            organization. Our mission is to offer cutting-edge fire safety
            equipment and solutions, coupled with exceptional service, to
            businesses of all sizes. With a vision to lead the fire safety
            industry, we are committed to excellence and customer satisfaction.
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
                  fighting training service and fire extinguishers, committed to
                  ensuring workplace safety and security.
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
                  To be a leader in the fire safety industry, recognized for our
                  commitment to excellence and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CEO Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-10 hover:shadow-2xl transition-shadow duration-300 animate-fadeIn">
            <div className="flex flex-col lg:flex-row items-center">
              {/* CEO Photo */}
              <img
                src="https://www.philips.com/c-dam/corporate/en_AA/about/about-us/executive-commitee/roy-jakobs-ceo-cardview.jpg"
                alt="CEO"
                className="rounded-full w-32 h-32 lg:w-48 lg:h-48 mb-4 lg:mb-0 lg:mr-8"
              />
              {/* CEO Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Kiran Patel (Founder)
                </h2>
                <p className="text-gray-700 mb-2 font-bold">
                  PDIS || PDIETM || Safety, Environment & Health Management ||
                  Ahmedabad
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Timeline */}
        <div className="max-w-5xl mx-auto mt-16">
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
        <div className="max-w-5xl mx-auto mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 animate-fadeIn">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 animate-fadeIn delay-500">
              <p className="text-gray-700">
                "Zenpa Marketing provided excellent training and high-quality
                fire extinguishers. Their commitment to safety is unparalleled."
              </p>
              <h4 className="text-xl font-bold text-gray-800 mt-4">
                - John Doe, CEO of XYZ Corp
              </h4>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 animate-fadeIn delay-700">
              <p className="text-gray-700">
                "The best fire safety equipment and services we've ever used.
                Highly recommend Zenpa Marketing!"
              </p>
              <h4 className="text-xl font-bold text-gray-800 mt-4">
                - Jane Smith, Safety Manager at ABC Ltd
              </h4>
            </div>
            {/* Add more testimonials as needed */}
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div id="contactUs" className="bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="container mx-auto py-12">
        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 animate-fadeIn">
          <h2 className="text-4xl font-bold text-center mb-8 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Contact Us
          </h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-800"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="Contact"
                className="block text-lg font-medium text-gray-800"
              >
                Contact no:
              </label>
              <input
                id="Contact"
                type="tel"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                placeholder="+91 xxxxxxxxxx"
                pattern="\d{5}\d{5}"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-800"
              >
                Message
              </label>
              <textarea
                id="message"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 h-32 resize-none"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r mt-3 from-purple-500 to-pink-500 text-white py-2 px-6 rounded-md hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition duration-300"
            >
              Send Message via Email
            </button>
          </form>
        </div>
      </div>

      {/* Call Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handleCall}
          className="bg-green-500 hover:bg-green-600 text-white font-bold p-4 rounded-full flex items-center justify-center "
        >
          <p className="wrap-content">Call Us Now
            
          </p>
        </button>
      </div>
    </div>

      {/* Visit Us  */}

      <div
        id="location"
        className="max-w-screen mx-auto text-center p-8 bg-white rounded-lg shadow-xl"
      >
        <h1 className="text-4xl mb-6 font-semibold text-from-purple-500 from-purple-500 to-pink-500">
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
      <div id="products" className="bg-gray-100 py-16">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
            Welcome to Our Safety Products Store
          </h1>
          <p className="text-lg text-gray-700 mt-2">
            Browse our collection of top-quality safety equipment
          </p>
        </header>
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
    </div>
  );
}
