import React from "react";

const ContactUs = () => {
  const phoneNumber = "+91-9054823690";
  const emailAddress = "pak180301@gmail.com"; // Your email address
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
    <div>
      <header
        className="bg-white shadow w-full relative"
        style={{
          backgroundImage: `url(${"https://admin.aankalan.app/img/gif/contact-us.gif"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
          
        }}
      >
        <div
          className="container items-center mx-auto justify-center z-20"
          style={{ display: "flex", flexDirection: "column", height: "70vh" }}
        >
          <h1 className="text-center text-6xl font-bold text-white z-20 ">
             Contact Us For Safety Services
          </h1>
          <p className="text-center text-2xl text-white mt-2 z-20">
            Your one-stop solution for fire safety equipment and services
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      </header>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Reach Out</h1>
        <div className="mb-4">
          <p className="mb-2">
            Call us at:{" "}
            <a href={`tel:${phoneNumber}`} className="text-blue-500">
              {phoneNumber}
            </a>
          </p>
          <button
            onClick={handleCall}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Call Now
          </button>
        </div>
        <div className="mb-4">
          <p className="mb-2">
            Email us at:{" "}
            <a href={`mailto:${emailAddress}`} className="text-blue-500">
              {emailAddress}
            </a>
          </p>
          <button
            onClick={handleEmail}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Email Now
          </button>
        </div>
        <div>
          <p className="mb-2">
            Connect with us on LinkedIn:{" "}
            <a
              href={linkedInProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              LinkedIn Profile
            </a>
          </p>
          <button
            onClick={handleLinkedIn}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
