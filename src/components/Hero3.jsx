import React from 'react';
import { motion } from 'framer-motion';

const Hero3 = () => {
  return (
    <div
      className="flex flex-col justify-end items-center h-[60vh] max-md:h-[40vh] w-screen bg-transparent px-6 sm:px-10 pb-10 sm:pb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <span
          className="block text-white font-extrabold uppercase outlined-text text-center 
                     text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          Electronic Music
        </span>
      </motion.div>
    </div>
  );
};

export default Hero3;
