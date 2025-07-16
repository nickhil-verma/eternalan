import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import Navbar from './Navbar';
import Footer from './Footer';
import Artist from './Artist';
import Calendar from './Calendar';
import Locations from './Locations';

const Concerts = () => {
  return (
    <div className="relative">
      <BackgroundVideo url="https://assets.mixkit.co/videos/830/830-720.mp4" />
      <Navbar />

      {/* Hero Bottom Section */}
      <div className="min-h-[85vh] w-full flex flex-col-reverse sm:flex-row items-end sm:items-end justify-between px-4 sm:px-10 pb-10 gap-6 sm:gap-0 text-white relative z-10">
        {/* Left: Heading + Subtitle */}
        <div className="w-full sm:w-3/4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight">
            Get Your Tickets
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-100 mt-3 max-w-2xl leading-relaxed">
            We provide seamless ticket booking facility.
            Eternalan is your gateway to unforgettable live music experiences.
            Discover upcoming concerts, explore featured artists, and book your tickets instantly—all in one beautifully designed platform.
            With real-time availability, secure checkout, and exclusive early access for members, Eternalan makes securing your next concert seat effortless and exciting.
            Whether it’s a massive stadium tour or an intimate underground show, Eternalan brings the stage closer to you.
          </p>
        </div>

        {/* Right: Button */}
        <div className="w-full sm:w-auto flex justify-start sm:justify-end">
          <a
            href="#"
            className="text-white underline text-base sm:text-lg hover:text-gray-300 transition"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Additional Sections */}
      {/* <Artist /> */}
      <Locations />
      <Calendar />
      <Footer />
    </div>
  );
};

export default Concerts;
