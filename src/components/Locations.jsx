import React, { useEffect, useRef, useState } from 'react';

const locationData = [
  {
    name: 'Xi’an Olympic Sports Center',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIAnxw7XdV1VXoXiI4BPFmSU0uTcOEawtkzA&s',
  },
  {
    name: 'Qujiang Convention Center',
    image: 'https://aipc.org/wp-content/uploads/2022/06/QICEG_picture-5-1024x683.png',
  },
  {
    name: 'Mao Livehouse / Aperture',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrFPSGbXT9UBjztO77v6tYqWWtzdlPFmB1A&s',
  },
];

const Locations = () => {
  const containerRef = useRef(null);
  const outerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  // Snap container into view when user scrolls near it
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
          outerRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      },
      {
        threshold: 0.6,
      }
    );

    if (outerRef.current) observer.observe(outerRef.current);

    return () => {
      if (outerRef.current) observer.unobserve(outerRef.current);
    };
  }, []);

  // Track which section is visible inside scroll container
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setActiveIndex(index);
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.7,
      }
    );

    const sections = sectionRefs.current;
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div ref={outerRef} className="w-full">
      <div
        ref={containerRef}
        className="w-screen h-[120vh] overflow-y-scroll snap-y snap-mandatory bg-black text-white no-scrollbar"
      >
        {locationData.map((location, idx) => (
          <section
            key={idx}
            ref={(el) => (sectionRefs.current[idx] = el)}
            data-index={idx}
            className="h-screen w-full flex items-center justify-between px-10 snap-start"
          >
            {/* Left: Tab Text */}
            <div className="w-1/2">
              <h1
                className={`text-4xl font-extrabold uppercase transition-opacity duration-500 ${
                  activeIndex === idx ? 'opacity-100' : 'opacity-20'
                }`}
              >
                {location.name}
              </h1>
            </div>

            {/* Right: Image */}
            <div className="w-1/2 flex justify-center">
              <img
                src={location.image}
                alt={location.name}
                // --- CHANGE IS HERE ---
                className={`w-full h-[70vh] object-cover rounded-lg transition-transform duration-700 ${
                  activeIndex === idx ? 'scale-100' : 'scale-75 opacity-100'
                }`}
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Locations;