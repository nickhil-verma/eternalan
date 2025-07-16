import React from 'react';
import { motion } from 'framer-motion';

const Hero2 = () => {
  return (
    <div
      id="hero2"
      className="flex flex-col justify-end items-center h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-screen w-screen bg-transparent px-6 sm:px-10 pb-10 sm:pb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <span
          className="block text-white font-extrabold uppercase 
                     text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center"
        >
          Hip Hop
        </span>
      </motion.div>
    </div>
  );
};

export default Hero2;
