import React from 'react';
import { HiArrowLongDown } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className="relative flex flex-col p-10 justify-end h-[80vh] w-screen">
      {/* Text block */}
      <div>
        <span className="text-7xl font-extrabold uppercase text-black">The Music You</span><br />
        <span className="text-7xl font-extrabold uppercase text-white">Deserve.</span>
      </div>

      {/* Arrow pinned to bottom right */}
     <a href='#hero2' className=' cursor-pointer'><HiArrowLongDown className="absolute hover:bg-black/20 bottom-6 rounded-full right-6 text-white animate-bounce text-6xl" /></a> 
    </div>
  );
};

export default Hero;
