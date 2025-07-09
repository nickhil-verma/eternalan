import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, AnimatePresence } from "framer-motion";

const LoadingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Detect when all assets are loaded
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoaded(true), 1000); // small delay for effect
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="fixed top-0 left-0 w-screen h-screen bg-black flex items-center justify-center z-50"
        >
          <h1 className="text-white text-5xl font-extrabold tracking-widest uppercase">
            <Typewriter
              words={['eternalan']}
              cursor
              cursorStyle='_'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingPage;
