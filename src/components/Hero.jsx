import React from "react";
import { HiArrowLongDown } from "react-icons/hi2";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  const concertDate = new Date("2025-08-10T20:00:00");
  return (
    <div>
      <div className="relative flex flex-col p-10 justify-end h-[80vh] w-screen">
        {/* Text block */}
        <div>
          <span className="text-7xl font-extrabold uppercase text-white">
            The Music You
          </span>
          <br />
          <span className="text-7xl font-extrabold uppercase text-white">
            Deserve.
          </span>
        </div>

        {/* Arrow pinned to bottom right */}
        <a href="#hero2" className=" cursor-pointer">
          <HiArrowLongDown className="absolute hover:bg-black/20 bottom-6 rounded-full right-6 text-white animate-bounce text-6xl" />
        </a>
      </div>
      <div className="flex flex-col justify-center items-center ">
        
        <div className="  text-white p-6 rounded-2xl shadow-lg max-w-3xl mx-auto space-y-4 text-center">
  
  <p className="text-lg md:text-xl font-medium   uppercase leading-relaxed">
    Partners: <span className="font-semibold ">Tencent Music Entertainment Group</span>, <span className="font-semibold">iQIYI, Inc.</span>, <br />
    and <span className="font-semibold ">Alibaba Digital Media & Entertainment Group</span>
  </p>
</div>

        <div className="flex mt-10 gap-4 flex-wrap">
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
