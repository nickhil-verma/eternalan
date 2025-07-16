import React, { useEffect, useRef } from 'react';

const slides = [
  {
    title: "Xi’an Olympic Sports Center",
    desc: "Xi’an Olympic Sports Center (10,000–40,000 capacity)",
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!carouselRef.current) return;

      const container = carouselRef.current;
      const nextScroll =
        container.scrollLeft + container.clientWidth >= container.scrollWidth
          ? 0
          : container.scrollLeft + container.clientWidth;

      container.scrollTo({ left: nextScroll, behavior: 'smooth' });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-black text-white py-10 px-4 sm:px-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl uppercase font-extrabold underline mb-6">
        Host Locations
      </h1>
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll no-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full sm:h-[90vh] min-h-[80vh] relative snap-start"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />

            {/* Text Overlay */}
            <div className="absolute bottom-6 left-4 sm:bottom-10 sm:left-10 max-w-md sm:max-w-xl z-20">
              <h2 className="text-2xl sm:text-4xl uppercase font-bold mb-2">{slide.title}</h2>
              <p className="text-sm sm:text-lg text-white/80">{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
