import React, { useRef, useState, useEffect } from "react";

const ServiceSlider = ({ services }) => {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleScroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector("a");
    if (!card) return;
    const gap = 16;
    const scrollAmount = isMobile
      ? card.offsetWidth + gap
      : (card.offsetWidth + gap) * 3;
    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Cards Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden scroll-smooth gap-4 snap-x snap-mandatory py-4"
      >
        {services.map((service, idx) => (
          <a
            key={idx}
            href={service.href || "#"}
            className="snap-start flex-shrink-0 w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.5rem)] 
                      bg-white rounded-none border border-gray-200 
                      hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={service.img}
              alt={service.title || "Artist"}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/400x300?text=Image`;
              }}
            />
          </a>
        ))}
      </div>

      {/* Controls */}
      <div className="flex justify-center mt-4 gap-4">
        <button
          onClick={() => handleScroll("left")}
          className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="p-2 bg-white border rounded-full shadow hover:bg-gray-100 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServiceSlider;
