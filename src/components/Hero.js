import React from 'react';
import ReactPlayer from 'react-player/vimeo';

const Hero = () => {
  return (
    <div className="relative h-screen -z-[1]">
      {/* Vimeo video background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <ReactPlayer
          url="https://vimeo.com/116031103" // Replace with your Vimeo video URL
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
      
      {/* Overlay to darken the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      
      {/* Centered text */}
      <div className="absolute bottom-20 w-full text-center">
        <h1 className="text-white text-2xl md:text-5xl lg:text-4xl font-bold mb-10">MUSICIANS INC. MUSIC & ENTERTAINMENT AGENCY LONDON</h1>
        <button className="bg-[#633863] text-white px-4 py-2 rounded">View Gallery</button>
      </div>
    </div>
  );
};

export default Hero;
