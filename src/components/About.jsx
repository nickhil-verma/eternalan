import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import Navbar from './Navbar';
import Footer from './Footer';

const galleryImages = [
  'https://media.istockphoto.com/id/1392016982/photo/mixed-group-of-business-people-sitting-around-a-table-and-talking.jpg?s=1024x1024&w=is&k=20&c=BJSTan1XQ50Bg3JpA0ZVOPiyniTybeuPDFATtZrD0E8=',
  'https://media.istockphoto.com/id/2148703154/photo/business-persons-on-meeting-in-the-office.jpg?s=1024x1024&w=is&k=20&c=PD5WCpkAzbJKe7aRfuP4dlZTfB43GPA2f7SQWUrNlsM=',
  'https://media.istockphoto.com/id/1438610677/photo/multicultural-co-workers-having-a-pleasant-meeting-in-the-conference-room.jpg?s=1024x1024&w=is&k=20&c=NEsaQ0S4fkHtUF_Y2k5hDqKAbA-RDpzox1Lz2J5OzDg=',
  'https://media.istockphoto.com/id/1200925784/photo/group-of-young-business-professionals-having-a-meeting-creative-office.jpg?s=1024x1024&w=is&k=20&c=KQr2I6s0wIkhF1v9WVwpIgHASUQGDvcNUkE0RpZLYoc=',
  'https://media.istockphoto.com/id/1770442584/photo/content-marketing-laptop-or-happy-business-people-in-meeting-planning-a-digital-startup.jpg?s=1024x1024&w=is&k=20&c=TVOez9ZoaT0LcoQmJb_hD8iqVp7WRtwX3wW2rVUohtY=',
  'https://media.istockphoto.com/id/1691351310/photo/business-people-successful-business-professionals-diverse-team-celebrating-business-success.jpg?s=1024x1024&w=is&k=20&c=ItvubBMTT8KBn7Tb0pX-tnfz_4Q4j5knSgRK80i58iY=',
];

const About = () => {
  return (
    <div className="  text-white font-sans overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <BackgroundVideo url="https://assets.mixkit.co/videos/4192/4192-720.mp4" />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start p-12 z-10">
          <h1 className="text-6xl md:text-8xl font-extrabold uppercase mb-4">About Us</h1>
          <p className="text-lg md:text-2xl max-w-2xl">
            We deliver the best concerts all around the world with unmatched energy and unforgettable experiences.
          </p>
        </div>
      </div>

      {/* Legacy Section */}
      <div className="relative h-screen w-full bg-black flex items-end">
        <div className="absolute top-0 left-0 w-full h-1/2 z-0">
          <video
            src="https://assets.mixkit.co/videos/15855/15855-720.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="relative z-10 w-full h-1/2 bg-black px-12 py-20">
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase mb-4">Our Legacy</h2>
          <p className="text-lg max-w-3xl">
            Years of electrifying stages, legendary performances, and building global musical culture. Join the movement.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="w-full min-h-screen bg-white text-black px-6 py-20">
        <h2 className="text-5xl md:text-7xl font-extrabold uppercase mb-12">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="w-full h-72   overflow-hidden shadow-lg hover:scale-105 transition-transform"
            >
              <img
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default About;