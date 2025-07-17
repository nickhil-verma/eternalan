import React, { useEffect, useRef } from "react";

const BackgroundVideo = ({ url }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.warn("Autoplay was prevented:", error);
      });
    }
  }, [url]);

  return (
    <div className="fixed top-0 left-0 w-screen h-full z-[-10] overflow-hidden">
      <video
        ref={videoRef}
        src={url}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
    </div>
  );
};

export default BackgroundVideo;

        //  https://assets.mixkit.co/videos/51757/51757-720.mp4