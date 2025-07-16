import React from 'react';

const Partners = () => {
  return (
    <div className="w-full min-h-screen bg-white px-4 sm:px-8 md:px-10 py-12">
      <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold uppercase text-center mb-10">
        Our Partners
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-0 min-h-[70vh]">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="https://i.postimg.cc/G2ZFT9gr/image.png"
            alt="Agricultural Bank of China Logo"
            className="max-w-full max-h-[300px] sm:max-h-[400px] md:max-h-[500px] object-contain"
          />
        </div>

        {/* Right: Text and Button */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:pl-10">
          <h2 className="text-xl sm:text-2xl lg:text-3xl uppercase font-bold mb-4 text-green-800">
            Agricultural Bank of China
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
            The Agricultural Bank of China (ABC), one of the world's largest financial institutions, proudly partners with us to promote global cultural exchange through music and the arts.
            As a strategic sponsor, ABC supports our mission to bring world-class concerts to life with unmatched passion and professionalism.
          </p>
          <a
            href="https://www.abchina.com/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 font-semibold rounded-md hover:bg-gray-900 w-fit"
          >
            Visit Official Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
