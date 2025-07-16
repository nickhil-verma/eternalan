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
    <div className="text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[100vh] w-full overflow-hidden">
        <BackgroundVideo url="https://assets.mixkit.co/videos/4192/4192-720.mp4" />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start p-6 sm:p-10 md:p-16 lg:p-20 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase mb-4">About Us</h1>
          <p className="text-sm sm:text-base md:text-lg max-w-4xl leading-snug">
            Eternalan is a forward-thinking entertainment company dedicated to curating and hosting unforgettable concert experiences.
            Our mission is to enhance live entertainment by bridging global hip-hop culture with Chinese audiences.
            By bringing leading international hip-hop artists to China, we aim to foster cross-cultural exchange,
            elevate youth culture, and redefine the concert experience across borders.
            At Eternalan, we don’t just organize events — we create movements that celebrate rhythm, identity, and global connection.
          </p>
        </div>
      </div>

      {/* Legacy Section */}
      <div className="relative w-full bg-black flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-1/2 h-[50vh] md:h-[100vh] relative">
          <video
            src="https://assets.mixkit.co/videos/15855/15855-720.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="w-full md:w-1/2 h-[50vh] md:h-[100vh] flex items-center px-6 sm:px-10 lg:px-16 py-10 bg-black z-10">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase mb-4">Our Legacy</h2>
            <p className="text-base sm:text-lg max-w-2xl">
              Years of electrifying stages, legendary performances, and building global musical culture. Join the movement.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="w-full bg-white text-black px-4 sm:px-8 lg:px-16 py-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase mb-12 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="w-full aspect-video overflow-hidden shadow-lg rounded-lg hover:scale-[1.02] transition-transform duration-300"
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

      <Footer />
    </div>
  );
};

export default About;
