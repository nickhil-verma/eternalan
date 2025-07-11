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
          <span className="text-7xl font-extrabold uppercase text-black">
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
        <CountdownTimer className=" " targetDate={concertDate} />
        <span className="text-white justify-center text-center text-lg">Liyu Zhang (张丽玉),National Centre for the Performing Arts, <br></br>No.2 West Chang'an Avenue, Xicheng District, Beijing, China 100031</span>
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
