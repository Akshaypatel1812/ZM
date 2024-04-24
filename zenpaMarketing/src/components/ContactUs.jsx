import React from 'react';

const ContactUs = () => {
  const phoneNumber = '+91-9054823690' 
  const emailAddress = 'pak180301@gmail.com' // Your email address
  const linkedInProfile = 'https://www.linkedin.com/company/zenpa-marketing/'
  
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleLinkedIn = () => {
    window.open(linkedInProfile, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="mb-4">
        <p className="mb-2">Call us at: <a href={`tel:${phoneNumber}`} className="text-blue-500">{phoneNumber}</a></p>
        <button onClick={handleCall} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Call Now</button>
      </div>
      <div className="mb-4">
        <p className="mb-2">Email us at: <a href={`mailto:${emailAddress}`} className="text-blue-500">{emailAddress}</a></p>
        <button onClick={handleEmail} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Email Now</button>
      </div>
      <div>
        <p className="mb-2">Connect with us on LinkedIn: <a href={linkedInProfile} target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn Profile</a></p>
        <button onClick={handleLinkedIn} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">LinkedIn</button>
      </div>
    </div>
  );
};

export default ContactUs;
