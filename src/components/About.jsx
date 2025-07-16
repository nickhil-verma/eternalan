import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import Navbar from './Navbar';
import Footer from './Footer';

const galleryImages = [
  'https://i.postimg.cc/fLtXsXjZ/image-1.png',
  'https://i.postimg.cc/Sxdcfmx0/image-2.png',
  'https://stadiumdb.com/pictures/stadiums/chn/xian_olympic_sports_center_stadium/xian_olympic_sports_center_stadium16.jpg',
  'https://www.fast-and-wide.com/images/stories/News/2021_q2/Xian.jpg',
  'https://aipc.org/wp-content/uploads/2022/06/QICEG_picture-5-1024x683.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyfWx0aJCkhXt71oLayjPsXd7sJ2b5aCtMA&s',
];

const About = () => {
  return (
    <div className="  text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <BackgroundVideo url="https://assets.mixkit.co/videos/4192/4192-720.mp4" />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start p-12 z-10">
          <h1 className="text-6xl md:text-8xl font-extrabold uppercase mb-4">About Us</h1>
          <p className="text-lg md:text-2xl max-w-2xl">
            We deliver the best concerts all around the world with unmatched energy and unforgettable experiences.
          </p>
        </div>
      </div>

      {/* Legacy Section */}
      <div className="relative h-screen w-full bg-black flex items-end">
        <div className="absolute top-0 left-0 w-full h-1/2 z-0">
          <video
            src="https://assets.mixkit.co/videos/15855/15855-720.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="relative z-10 w-full h-1/2 bg-black px-12 py-20">
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase mb-4">Our Legacy</h2>
          <p className="text-lg max-w-3xl">
            Years of electrifying stages, legendary performances, and building global musical culture. Join the movement.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="w-full min-h-screen bg-white text-black px-6 py-20">
        <h2 className="text-5xl md:text-7xl font-extrabold uppercase mb-12">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="w-full h-72   overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;