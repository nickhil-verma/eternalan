import React, { useRef, useState, useEffect } from 'react';
import { FaArrowRight,FaArrowLeft  } from "react-icons/fa";

// Images with optional links
const IMAGES = [
  { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4Fgiob3XmPgMznAtGtWMXZX-E_24CZHnbQ&s', link: '#' },
  { url: 'https://preview.redd.it/enough-time-has-passed-which-album-covers-are-goated-and-v0-0zt7b074l7kb1.jpg?width=980&format=pjpg&auto=webp&s=280cf2bf1e3bf0cb62761808bbb8f8c3023c630b', link: '#' },
  { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNyietJ99ccGM_0rs-6y4Z1i3nddIjknNraw&s', link: '#' },
  { url: 'https://i.redd.it/all-of-kendricks-album-covers-in-high-quality-v0-t5zqwjxvfmxd1.jpg?width=1426&format=pjpg&auto=webp&s=413c72bc0d5a266089b3fc766b9165c1b5dfe2a5', link: '#' },
  { url: 'https://a10.gaanacdn.com/gn_img/albums/DwPKOBbqVZ/wPKOmZ8YWq/size_m.jpg', link: '#' },
  { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIkfK-Pjn5lXCipeKIv1asFnOUBx1nrj0bMQ&s', link: '#' },
  { url: 'https://c.saavncdn.com/321/Rap-God-2013-500x500.jpg', link: '#' },
  { url: 'https://i.scdn.co/image/ab67616d0000b2739416ed64daf84936d89e671c', link: '#' },
  
  { url: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9d/Get_Rich_Or_Die_Tryin%27.JPG/250px-Get_Rich_Or_Die_Tryin%27.JPG', link: '#' },
  
  { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0YCgp-uAkJUWqcZJuF0n0xkjBDWPFaV7YQ&s', link: '#' },
  
  { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKIZrukUp3hSrRyVLhVX96H7V3g2lL0lGWg&s', link: '#' },
  
  { url: 'https://m.media-amazon.com/images/I/719GLC+OSJL._UF1000,1000_QL80_.jpg', link: '#' },
];

const CARD_WIDTH = 300; // image + gap

const Collection = () => {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const el = carouselRef.current;
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };
    const el = carouselRef.current;
    el.addEventListener('scroll', handleScroll);
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'right' ? CARD_WIDTH * 3 : -CARD_WIDTH * 3;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white p-10 h-screen w-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-20">
        <h1 className="uppercase text-3xl font-bold">Featured collections</h1>
        <h2 className="text-2xl flex justify-center underline gap-2 align-middle items-center font-semibold cursor-pointer">Show all <FaArrowRight /> </h2>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Scroll Buttons */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 -bottom-20 transform -translate-y-1/2 bg-black text-white p-3 rounded-full z-10 hover:bg-gray-800 transition"
          >
<FaArrowLeft />
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 -bottom-20 transform -translate-y-1/2 bg-black text-white p-3 rounded-full z-10 hover:bg-gray-800 transition"
          >
          <FaArrowRight />

          </button>
        )}

        {/* Image List */}
      <div
  ref={carouselRef}
  className="flex gap-5 overflow-x-auto scroll-smooth px-2 scrollbar-none"
  style={{
    scrollSnapType: 'x mandatory',
    scrollPadding: '0 10px',
    WebkitOverflowScrolling: 'touch',
    overflowY: 'hidden', // Ensure no accidental vertical scroll
  }}
>
  {IMAGES.map((item, index) => (
    <a
      key={index}
      href={item.link}
      className="scroll-snap-start min-w-[400px] h-[400px]     rounded-none overflow-hidden flex-shrink-0"
    >
      <img
        src={item.url}
        alt={`collection-${index}`}
        className="w-full h-full object-cover"
      />
    </a>
  ))}
</div>

      </div>
    </div>
  );
};

export default Collection;
