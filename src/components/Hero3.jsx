import React from 'react';
import { motion } from 'framer-motion';

const Hero3 = () => {
  return (
    <div className="flex flex-col justify-end items-center h-[60vh] w-screen bg-transparent px-10 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <span className="text-9xl font-extrabold uppercase outlined-text block">
          Electronic music
        </span>
      </motion.div>
    </div>
  );
};

export default Hero3;
