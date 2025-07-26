'use client';

import { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="font-code text-sm text-destructive font-bold bg-background/30 backdrop-blur-md rounded-full px-4 py-1 border border-transparent">
      {time ? formatTime(time) : '00:00'}
    </div>
  );
};

export default DigitalClock;
