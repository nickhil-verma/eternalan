import React, { useEffect, useRef } from 'react';

const slides = [
  {
    title: "Xi’an Olympic Sports Center",
    desc: "A world-class venue hosting large-scale international events in Xi’an.",
    image: "https://i.postimg.cc/65BRzw9f/image-3.png",
  },
  {
    title: 'Qujiang Convention Center',
    desc: 'A modern convention center surrounded by vibrant cityscapes.',
    image: 'https://aipc.org/wp-content/uploads/2022/06/QICEG_picture-5-1024x683.png',
  },
  {
    title: 'Mao Livehouse / Aperture',
    desc: 'A trendy venue for live music and youth culture in Xi’an.',
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
    }, 4500); // Change slide every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen p-10   overflow-hidden bg-black text-white">
        <h1 className='text-3xl uppercase font-extrabold underline my-5'>host location</h1>
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll m-6 no-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-screen relative snap-start"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            {/* Text Overlay */}
            <div className="absolute bottom-10 left-10 max-w-xl z-10">
              <h2 className="text-4xl uppercase font-bold mb-2">{slide.title}</h2>
              <p className="text-lg text-white/80">{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
