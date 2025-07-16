import React from "react";
import { HiArrowLongDown } from "react-icons/hi2";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  const concertDate = new Date("2025-08-10T20:00:00");

  return (
    <div>
      {/* Hero Section */}
      <div className="relative flex flex-col justify-end px-6 sm:px-10 h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[80vh] w-screen">
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

      {/* Partner Info + CTA */}
      <div className="flex flex-col justify-center items-center px-4 sm:px-6">
        {/* Partner Block */}
        <div className="text-white bg-black/30 backdrop-blur-lg p-6 rounded-2xl shadow-lg max-w-3xl w-full text-center space-y-4">
          <p className="text-sm sm:text-base md:text-xl font-medium uppercase leading-relaxed">
            Partners: <span className="font-semibold">Tencent Music Entertainment Group</span>,{" "}
            <span className="font-semibold">iQIYI, Inc.</span>,<br />
            and <span className="font-semibold">Alibaba Digital Media & Entertainment Group</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          <button className="text-white bg-gradient-to-r from-red-600 to-pink-500 shadow-lg shadow-red-500/30 backdrop-blur-md px-6 py-2 rounded-full font-semibold text-sm sm:text-base transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
            Buy Tickets
          </button>

          <button className="text-red-600 bg-white border border-red-300 shadow-md px-6 py-2 rounded-full font-semibold text-sm sm:text-base transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-red-50">
            RSVP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
