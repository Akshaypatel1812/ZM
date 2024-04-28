import React from "react";

const Location = () => {
  return (
    <div className="max-w-screen mx-auto text-center p-8">
      <h1 className="text-3xl mb-4">Discover Us Here</h1>
      <p className="text-lg mb-8">
        F/12 Tirth Arcade, Thol Road, Kadi, Dist. Mehsana, Gujarat, Pin Code: 382715
      </p>
      <div className="w-full overflow-hidden rounded-lg">
        <iframe
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.7733070046584!2d72.3345043738156!3d23.2876854063857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2298b5261e11%3A0xcd5944739c215411!2sTirth%20Arcade!5e0!3m2!1sen!2sin!4v1714312138646!5m2!1sen!2sin"
          width="600"
          height="450"
          className="w-full rounded-lg"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
