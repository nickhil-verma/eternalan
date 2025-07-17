import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
 
const BackgroundVideo = ({ url }) => (
  <video
    src={url}
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
  />
);

 

const galleryImages = [
  'https://i.postimg.cc/fLtXsXjZ/image-1.png',
  'https://i.postimg.cc/Sxdcfmx0/image-2.png',
  'https://stadiumdb.com/pictures/stadiums/chn/xian_olympic_sports_center_stadium/xian_olympic_sports_center_stadium16.jpg',
  'https://www.fast-and-wide.com/images/stories/News/2021_q2/Xian.jpg',
  'https://aipc.org/wp-content/uploads/2022/06/QICEG_picture-5-1024x683.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyfWx0aJCkhXt71oLayjPsXd7sJ2b5aCtMA&s',
];

const ScrollIndicator = () => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
    <div className="flex flex-col items-center space-y-2 animate-bounce">
      <div className="w-0.5 h-8 bg-white"></div>
      <div className="w-2 h-2 bg-[#EF4444] rounded-full"></div>
    </div>
  </div>
);

const AnimatedCounter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      setCount(Math.floor(start));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, [end, duration]);
  
  return <span>{count}</span>;
};
const Footer = () => (
  <footer className="bg-black text-white py-20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-[#EF4444]/5 to-transparent"></div>
    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
      <div className="text-4xl font-black mb-12 tracking-widest">ETERNALAN</div>
      <div className="w-24 h-0.5 bg-[#EF4444] mx-auto mb-8"></div>
      <div className="text-sm tracking-widest opacity-60">
        © 2025 ETERNALAN. ALL RIGHTS RESERVED.
      </div>
    </div>
  </footer>
);

const About = () => {
  return (
    <div className="mt-20 text-white font-sans overflow-x-hidden bg-black">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <BackgroundVideo url="https://assets.mixkit.co/videos/19253/19253-720.mp4" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-10 md:px-16 lg:px-20 z-10">
          <div className="flex items-center space-x-6 mb-8">
            <div className="w-1 h-24 bg-[#EF4444] animate-pulse"></div>
            <div className="w-8 h-8 border-2 border-[#EF4444] rotate-45"></div>
          </div>
          <h1 className="text-5xl sm:text-8xl md:text-9xl lg:text-[7rem] font-black uppercase mb-8 tracking-tighter leading-none">
            ABOUT
 &nbsp;
            <span className="text-[#EF4444] relative">
              US
              <div className="absolute -bottom-4 left-0 w-full h-2 bg-[#EF4444]/20"></div>
            </span>
          </h1>
          <div className="max-w-3xl relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#EF4444] to-transparent"></div>
            <p className="text-xl sm:text-2xl leading-relaxed font-medium tracking-wide pl-8">
              ETERNALAN IS A FORWARD-THINKING ENTERTAINMENT COMPANY DEDICATED TO CURATING 
              AND HOSTING UNFORGETTABLE CONCERT EXPERIENCES.
            </p>
          </div>
        </div>
        <ScrollIndicator />
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-[#EF4444] to-red-600 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-black mb-2">
                <AnimatedCounter end={100} />+
              </div>
              <div className="text-sm tracking-widest font-bold">EVENTS HOSTED</div>
            </div>
            <div className="group">
              <div className="text-5xl font-black mb-2">
                <AnimatedCounter end={50} />+
              </div>
              <div className="text-sm tracking-widest font-bold">GLOBAL ARTISTS</div>
            </div>
            <div className="group">
              <div className="text-5xl font-black mb-2">
                <AnimatedCounter end={1000000} />+
              </div>
              <div className="text-sm tracking-widest font-bold">FANS REACHED</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-white text-black py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -left-8 top-0 w-2 h-full bg-gradient-to-b from-[#EF4444] to-transparent opacity-50"></div>
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-12 h-12 border-4 border-[#EF4444] rotate-45"></div>
                <div className="w-1 h-16 bg-[#EF4444]"></div>
              </div>
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black uppercase mb-8 tracking-tighter leading-none">
                OUR
                <br />
                <span className="text-[#EF4444] relative">
                  MISSION
                  <div className="absolute -bottom-2 left-0 w-3/4 h-1 bg-[#EF4444]/30"></div>
                </span>
              </h2>
            </div>
            <div className="space-y-8">
              <div className="relative p-8 bg-gradient-to-r from-gray-50 to-transparent border-l-4 border-[#EF4444]">
                <p className="text-2xl font-black tracking-wide mb-4">
                  BUILD CULTURAL BRIDGES THROUGH MUSIC AND POSITIVITY
                </p>
              </div>
              <p className="text-lg leading-relaxed tracking-wide">
                OUR MISSION IS TO CONNECT GLOBAL TALENT WITH LOCAL AUDIENCES, USING MUSIC AS A 
                UNIVERSAL LANGUAGE OF HOPE, ENERGY, AND UNITY. WE ARE DRIVEN BY A BELIEF IN HIGH 
                SPIRITS — THE POWER OF POSITIVE ENERGY TO INSPIRE CHANGE, UPLIFT COMMUNITIES, AND 
                BREAK BARRIERS.
              </p>
              <p className="text-lg leading-relaxed tracking-wide">
                WE STRIVE TO BE THE CULTURAL BRIDGE BETWEEN THE U.S. AND CHINA, CREATING EXPERIENCES 
                THAT ARE AUTHENTIC, JOYFUL, AND IMPACTFUL.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Legacy Section */}
      <div className="relative w-full bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          <div className="relative overflow-hidden group">
            <video
              src="https://assets.mixkit.co/videos/15855/15855-720.mp4"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
            <div className="absolute inset-0 bg-[#EF4444]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </div>
          <div className="flex items-center justify-center px-6 sm:px-10 lg:px-16 py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EF4444]/5 to-transparent"></div>
            <div className="max-w-lg relative z-10">
              <div className="flex items-center space-x-6 mb-8">
                <div className="w-8 h-8 bg-[#EF4444] rotate-45"></div>
                <div className="w-1 h-16 bg-[#EF4444]"></div>
              </div>
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black uppercase mb-8 tracking-tighter leading-none">
                OUR
                <br />
                <span className="text-[#EF4444] relative">
                  LEGACY
                  <div className="absolute -bottom-2 left-0 w-2/3 h-1 bg-[#EF4444]/50"></div>
                </span>
              </h2>
              <div className="relative p-6 border-l-4 border-[#EF4444] bg-white/5 backdrop-blur-sm">
                <p className="text-lg leading-relaxed tracking-wide">
                  YEARS OF ELECTRIFYING STAGES, LEGENDARY PERFORMANCES, AND BUILDING GLOBAL 
                  MUSICAL CULTURE. JOIN THE MOVEMENT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-white text-black py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
          <div className="text-center mb-20">
            <div className="flex justify-center items-center space-x-6 mb-8">
              <div className="w-12 h-12 border-4 border-[#EF4444] rotate-45"></div>
              <div className="w-1 h-16 bg-[#EF4444]"></div>
              <div className="w-8 h-8 bg-[#EF4444] rotate-45"></div>
            </div>
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
              WHAT DRIVES
              <br />
              <span className="text-[#EF4444] relative">
                ETERNALAN
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-[#EF4444]/30"></div>
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "MOTIVATION",
                description: "WE STAY INSPIRED AND PROACTIVE. OUR DRIVE PUSHES US TO CREATE UNFORGETTABLE MOMENTS AND MOVE CULTURE FORWARD — WITH PURPOSE AND ENERGY.",
                icon: "▲"
              },
              {
                title: "ATTENTIVENESS",
                description: "WE LISTEN CLOSELY, ADAPT QUICKLY, AND CARE DEEPLY. FROM ARTIST NEEDS TO AUDIENCE EXPERIENCES, WE PAY ATTENTION TO EVERY DETAIL THAT MAKES A DIFFERENCE.",
                icon: "●"
              },
              {
                title: "INTEGRITY",
                description: "WE LEAD WITH HONESTY AND STAND BY OUR WORD. WE PROTECT THE TRUST OF OUR PARTNERS, ARTISTS, AND AUDIENCES — ALWAYS.",
                icon: "■"
              },
              {
                title: "TEAMWORK",
                description: "COLLABORATION IS OUR RHYTHM. WE GROW THROUGH UNITY, BUILD ACROSS CULTURES, AND SUCCEED TOGETHER — NO EGOS, JUST EFFORT.",
                icon: "♦"
              }
            ].map((value, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#EF4444]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8 border-l-4 border-[#EF4444] group-hover:border-l-8 transition-all duration-500">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-3xl text-[#EF4444] font-black">{value.icon}</div>
                    <h3 className="text-2xl font-black tracking-widest group-hover:text-[#EF4444] transition-colors duration-500">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed tracking-wide">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-black py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#EF4444]/5 via-transparent to-[#EF4444]/5"></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
          <div className="text-center mb-20">
            <div className="flex justify-center items-center space-x-6 mb-8">
              <div className="w-16 h-16 border-4 border-[#EF4444] rotate-45"></div>
              <div className="w-1 h-20 bg-[#EF4444]"></div>
            </div>
            <h2 className="text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              <span className="text-[#EF4444] relative">
                GALLERY
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full h-1 bg-[#EF4444]/50"></div>
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden bg-white/5 aspect-video hover:scale-[1.02] transition-all duration-700 cursor-pointer"
              >
                <img
                  src={img}
                  alt={`GALLERY ${idx + 1}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[#EF4444]/0 group-hover:bg-[#EF4444]/20 transition-all duration-700"></div>
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-8 bg-[#EF4444]"></div>
                    <div className="w-8 h-8 border-2 border-[#EF4444] rotate-45"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#EF4444] via-red-600 to-[#EF4444] text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="w-12 h-12 bg-white/20 rotate-45"></div>
            <div className="w-1 h-16 bg-white"></div>
            <div className="w-8 h-8 bg-white/20 rotate-45"></div>
          </div>
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-black uppercase mb-8 tracking-tighter leading-none">
            JOIN THE
            <br />
            <span className="relative">
              MOVEMENT
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-white/30"></div>
            </span>
          </h2>
          <p className="text-xl leading-relaxed tracking-wide mb-16">
            EXPERIENCE THE FUTURE OF LIVE ENTERTAINMENT WITH ETERNALAN
          </p>
          <button className="group relative bg-white text-black px-16 py-6 text-lg font-black tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-500 border-4 border-white hover:border-white overflow-hidden">
            <span className="relative z-10">GET INVOLVED</span>
            <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;