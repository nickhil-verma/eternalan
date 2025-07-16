import React from 'react';

const Partners = () => {
  return (
    <div className='w-screen h-screen bg-white px-10 py-10'>
      <h1 className='text-3xl font-extrabold uppercase text-center mb-10'>
        Our Partners
      </h1>
      <div className='flex h-[80%]'>
        {/* Left: Image */}
        <div className='w-1/2 flex items-center justify-center'>
          <img
            src='https://i.postimg.cc/G2ZFT9gr/image.png'
            alt='Agricultural Bank of China Logo'
            className='max-w-full max-h-full object-contain'
          />
        </div>

        {/* Right: Text and Button */}
        <div className='w-1/2 flex flex-col justify-center pl-10'>
          <h2 className='text-2xl uppercase font-bold mb-4 text-green-800'>
            Agricultural Bank of China
          </h2>
          <p className='text-lg text-gray-700 mb-6'>
            The Agricultural Bank of China (ABC), one of the world's largest
            financial institutions, proudly partners with us to promote global
            cultural exchange through music and the arts. As a strategic sponsor,
            ABC supports our mission to bring world-class concerts to life with
            unmatched passion and professionalism.
          </p>
          <a
            href='https://www.abchina.com/en/'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-black text-white px-6 py-3 font-semibold rounded-md hover:bg-gray-900 w-fit'
          >
            Visit Official Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
