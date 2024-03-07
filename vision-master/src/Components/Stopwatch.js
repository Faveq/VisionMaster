import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => {
          return prevElapsedTime + 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const startStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const resetTime = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  return { elapsedTime, isRunning, startStop, resetTime };
};

export default Stopwatch;
