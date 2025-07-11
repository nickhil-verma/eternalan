import React from 'react';

const Sponsor = () => {
  const sponsors = [
    { name: 'SoundWave Studios', logo: 'https://images.squarespace-cdn.com/content/v1/534e2416e4b0094676cf82bd/1455153486338-COOWQ34ZISM8PDQ6SAWO/LOGO.jpg' },
    { name: 'EventFlow Tech', logo: 'https://framerusercontent.com/images/gqxsdn5DwHdR9dHb7QeftuCE.png' },
    { name: 'Harmony Drinks', logo: 'https://play-lh.googleusercontent.com/kt7E11BV5_fNGDuL6TwoE5zYWaDDKmiBwWQF0lj7pYW5whO9kqQH-tqcncy-m7VfSjM' },
    { name: 'Vibe Apparel', logo: 'https://i.pinimg.com/736x/29/ec/0d/29ec0d8dbdd014a41f6c6039350ae24c.jpg' },
    { name: 'Rhythm Foods', logo: 'https://cdn.pixabay.com/photo/2016/10/22/00/15/spotify-1759471_1280.jpg' },
    { name: 'StageLights Co.', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Jbl-logo.jpg' },
    { name: 'Echo Media', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgM-REpS8TOYoJ5xLUI4mwM1OMktbAvShoaQ&s' },
    { name: 'Festival Gear', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST49K6u8mnzn9xzsC809LBxffmALdDSh-2Yw&s' },
  ];

  return (
    <section className="w-full py-16 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white underline uppercase tracking-wider mb-12">
          Our Partners
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center   p-4 rounded-lg shadow    "
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} Logo`}
                className="h-24 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/150x150/000000/ffffff?text=Logo';
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 uppercase mb-4">
            BECOME A PARTNER
          </h3>
          <p className="text-base text-gray-300 mb-6 max-w-2xl mx-auto">
            Are you interested in showcasing your brand to thousands of music enthusiasts? Partner with Eternalan and amplify your reach.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">
            CONTACT US TO SPONSOR
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;