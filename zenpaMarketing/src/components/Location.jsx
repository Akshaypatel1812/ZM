import React from "react";

const Location = () => {
  return (
    <div className="max-w-screen mx-auto text-center p-8 bg-gray-100 rounded-lg shadow-xl">
      <h1 className="text-4xl mb-6 font-semibold text-orange-700">Discover Us Here</h1>
      
      {/* <div className="border-b-2 border-gray-300 mb-6"></div> */}

      <p className="text-lg mb-8 text-gray-700">
        <span className="font-semibold">Address:</span> F/12 Tirth Arcade, Thol Road, Kadi, Dist. Mehsana, Gujarat, Pin Code: 382715
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
  );
};

export default Location;
