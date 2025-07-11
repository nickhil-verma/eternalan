import React from 'react'; 
const Talent = () => {
  return (
    <div className="h-screen w-screen talent-gradient relative flex items-end justify-between px-10 pb-12">
      
      {/* Left headline */}
      <div className="text-6xl md:text-7xl uppercase font-extrabold text-white space-y-2">
        <span className="block">We Get</span>
        <span className="block">Best Artist</span>
        <span className="block">From the Globe</span>
      </div>

      {/* Right paragraph */}
      <div className="max-w-md text-right text-white text-sm md:text-base leading-relaxed">
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
