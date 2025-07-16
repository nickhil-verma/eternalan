import React from 'react';

const Talent = () => {
  return (
    <div className="w-screen talent-gradient relative flex flex-col-reverse md:flex-row items-center md:items-end justify-between px-6 sm:px-10 pb-10 sm:pb-12 gap-10 md:gap-0 
      h-[70vh] sm:h-[50vh] md:min-h-[60vh] lg:min-h-screen">
      
      {/* Left Headline */}
      <div className="text-white text-left space-y-2">
        <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase">We Get</span>
        <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase">Best Artist</span>
        <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase">From the Globe</span>
      </div>

      {/* Right Paragraph */}
      <div className="max-w-md text-white text-sm sm:text-base leading-relaxed text-left">
        <p>
          From the underground beats of Brooklyn to the soulful rhythms of Lagos,
          Eternalan scouts and empowers unheard voices. We don't follow the charts — 
          we break them. Join us in amplifying the sound of tomorrow.
        </p>
      </div>

    </div>
  );
};

export default Talent;
