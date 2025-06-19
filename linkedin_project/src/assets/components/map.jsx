import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full p-4 flex justify-center">
      <div className="w-full max-w-5xl aspect-video">
        <iframe
          title="LinkedIn Education Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.8841262789373!2d83.46141677481442!3d27.69279222660343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399685e78d0cf9cf%3A0x29939b705c5ec933!2sLinkedIn%20Education%20Consultancy!5e0!3m2!1sen!2snp!4v1718043645393!5m2!1sen!2snp"
          className="w-full h-full border-0 rounded-xl shadow-md"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
