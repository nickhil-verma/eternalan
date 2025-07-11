import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="relative -mt-3 inline-block">

      {/* 🔥 Badge */}
      <div className="absolute -top-5 -right-4 sm:-right-6 sm:-top-6 z-10">
        <div className="bg-yellow-400 text-black text-xs sm:text-sm font-semibold px-3 py-1 rounded-full shadow-lg animate-pulse">
          🔥 Hurry! Few tickets left
        </div>
      </div>

      {/* ⏱ Countdown timer */}
      <div className="flex gap-4 sm:gap-6 text-base sm:text-xl font-mono text-white bg-white/10 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/20 shadow-inner shadow-red-300/10 animate-fadeIn">
        <div><span className="text-red-500 font-bold drop-shadow-sm">{timeLeft.days}</span> Days</div>
        <div><span className="text-red-500 font-bold drop-shadow-sm">{timeLeft.hours}</span> Hrs</div>
        <div><span className="text-red-500 font-bold drop-shadow-sm">{timeLeft.minutes}</span> Min</div>
        <div><span className="text-red-500 font-bold drop-shadow-sm">{timeLeft.seconds}</span> Sec</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
