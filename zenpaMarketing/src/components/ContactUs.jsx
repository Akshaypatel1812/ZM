import React from "react";

const ContactUs = () => {
  const phoneNumber = "+91-9054823690";
  const emailAddress = "pak180301@gmail.com";
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

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <header
        className="bg-white w-full py-8 md:py-16 relative"
        style={{
          backgroundImage: `url("https://admin.aankalan.app/img/gif/contact-us.gif")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-white">
            Your one-stop solution for fire safety equipment and services
          </p>
        </div>
      </header>
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Call Us
            </h2>
            <p className="text-lg mb-4 text-gray-700">{phoneNumber}</p>
            <button
              onClick={handleCall}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full transition duration-300"
            >
              Call Now
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Email Us
            </h2>
            <p className="text-lg mb-4 text-gray-700">{emailAddress}</p>
            <button
              onClick={handleEmail}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full transition duration-300"
            >
              Email Now
            </button>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Connect with Us
          </h2>
          <p className="text-lg mb-4 text-gray-700">Find us on LinkedIn:</p>
          <button
            onClick={handleLinkedIn}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            LinkedIn Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
