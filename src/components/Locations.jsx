import React, { useEffect, useRef, useState } from 'react';

const slides = [
  {
    title: "Xi'an Olympic Sports Center",
    desc: "Xi'an Olympic Sports Center (10,000–40,000 capacity)",
    image: "https://i.postimg.cc/65BRzw9f/image-3.png",
  },
  {
    title: 'Qujiang Convention Center',
    desc: 'Qujiang Convention Center (3,000–5,000 capacity)',
    image: 'https://aipc.org/wp-content/uploads/2022/06/QICEG_picture-5-1024x683.png',
  },
  {
    title: 'Mao Livehouse / Aperture',
    desc: 'Mao Livehouse / Aperture (800–1,500 capacity)',
    image: 'https://i.postimg.cc/W4qJt1nT/image-4.png',
  },
];

const Locations = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (!carouselRef.current) return;

      const container = carouselRef.current;
      const nextIndex = (currentSlide + 1) % slides.length;
      const nextScroll = nextIndex * container.clientWidth;

      container.scrollTo({ left: nextScroll, behavior: 'smooth' });
      setCurrentSlide(nextIndex);
    }, 4500);

    return () => clearInterval(interval);
  }, [currentSlide, isHovered]);

  const handleDotClick = (index) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = index * container.clientWidth;
    container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    setCurrentSlide(index);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-56 left-10 w-32 h-32 bg-red-500 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-red-500 rounded-full opacity-3 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-40 bg-red-500 opacity-10 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-60 bg-red-500 opacity-10 rotate-12"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-16 px-6 sm:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-red-500"></div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-wider">
              Host
            </h1>
            <div className="w-12 h-0.5 bg-red-500"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light uppercase tracking-[0.3em] text-gray-300">
            Locations
          </h2>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={carouselRef}
            className="flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory rounded-2xl"
            style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full h-[70vh] sm:h-[80vh] relative snap-start group"
              >
                {/* Image with Modern Overlay */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Modern Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent opacity-80"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
                  
                  {/* Red Accent Elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-red-500 to-transparent opacity-60"></div>
                  
                  {/* Animated Corner Elements */}
                  <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-red-500 opacity-70 transition-all duration-500 group-hover:w-20 group-hover:h-20"></div>
                  <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-white opacity-40 transition-all duration-500 group-hover:w-20 group-hover:h-20"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 z-20">
                  <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                    {/* Title */}
                    <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase mb-4 leading-tight">
                      {slide.title.split(' ').map((word, i) => (
                        <span key={i} className="inline-block">
                          {word}
                          {i === 0 && <span className="text-red-500">.</span>}
                          {i < slide.title.split(' ').length - 1 && ' '}
                        </span>
                      ))}
                    </h3>
                    
                    {/* Description */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-0.5 bg-red-500"></div>
                      <p className="text-lg sm:text-xl text-gray-300 font-light tracking-wide">
                        {slide.desc}
                      </p>
                    </div>

                    {/* Slide Number */}
                    <div className="text-sm font-mono text-gray-500 tracking-widest">
                      {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`relative w-12 h-1 transition-all duration-500 ${
                  currentSlide === index
                    ? 'bg-red-500 scale-110'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              >
                {currentSlide === index && (
                  <div className="absolute inset-0 bg-red-500 animate-pulse opacity-50"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30"></div>
      </div>
    </div>
  );
};

export default Locations;