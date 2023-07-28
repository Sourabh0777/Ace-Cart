import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Timer = () => {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    // Retrieve start time from local storage
    const storedStartTime = localStorage.getItem('startTime');
    if (storedStartTime) {
      setStartTime(parseInt(storedStartTime, 10));
    } else {
      const currentTimestamp = Date.now();
      setStartTime(currentTimestamp);
      localStorage.setItem('startTime', currentTimestamp.toString());

      // Make API call to store start time on the server
      // You can use libraries like axios to make the API call
      // axios.post('/api/start-time', { startTime: currentTimestamp });
    }
  }, []);

  useEffect(() => {
    // Update elapsed time every second
    const timerInterval = setInterval(() => {
      const currentTimestamp = Date.now();
      const elapsed = currentTimestamp - startTime;
      setElapsedTime(elapsed);
      localStorage.setItem('startTime', startTime.toString());

      // Make API call to update start time on the server
      // axios.put('/api/start-time', { startTime });
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [startTime]);

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor(time / 1000 / 60 / 60);
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h1>Timer</h1>
      <p>Elapsed Time: {formatTime(elapsedTime)}</p>
    </div>
  );
};

export default Timer;
