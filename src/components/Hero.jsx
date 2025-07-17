import React from "react";
import { HiArrowLongDown } from "react-icons/hi2";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  const concertDate = new Date("2025-08-10T20:00:00");

  return (
    <div>
      {/* Hero Section */}
      <div className="relative flex mt-24 max-sm:mt-56 flex-col justify-end px-6 sm:px-10 h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[80vh] w-screen">
        {/* Headline Text */}
        <div>
          <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-white block">
            The Music You
          </span>
          <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-white block">
            Deserve.
          </span>
        </div>

        {/* Down Arrow */}
        <a href="#hero2" className="cursor-pointer">
          <HiArrowLongDown className="absolute bottom-6 right-6 text-white text-4xl sm:text-5xl md:text-6xl animate-bounce hover:bg-black/20 rounded-full transition duration-300" />
        </a>
      </div>

       
    </div>
  );
};

export default Hero;
