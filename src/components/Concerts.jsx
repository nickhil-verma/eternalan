import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import Navbar from './Navbar';
import Footer from './Footer';
import Artist from './Artist';
import Calendar from './Calendar';
import Locations from './Locations';

const Concerts = () => {
  
  return (
    <div className=''>
      <BackgroundVideo url="https://assets.mixkit.co/videos/830/830-720.mp4" />
      <Navbar />

      {/* Bottom row: left text + right button */}
      <div className="h-[85vh] w-screen flex items-end justify-between px-10 pb-10">
        {/* Left: Heading + Subtitle */}
        <div>
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase">
            Get Your Tickets
          </h1>
          <p className="text-gray-100 w-[60%] text leading-tight text-md mt-2">
          We provide seamless ticket booking facility
Eternalan is your gateway to unforgettable live music experiences. Discover upcoming concerts, explore featured artists, and book your tickets instantly—all in one beautifully designed platform. With real-time availability, secure checkout, and exclusive early access for members, Eternalan makes securing your next concert seat effortless and exciting. Whether it’s a massive stadium tour or an intimate underground show, Eternalan brings the stage closer to you.
          </p>
        </div>

        {/* Right: Button */}
        <div>
         <a className='text-white underline flex'>Book Now</a>
        </div>
      </div>
      {/* <Artist/> */}
      <Locations/>
      <Calendar/>
      <Footer/>
    </div>
  );
};

export default Concerts;
