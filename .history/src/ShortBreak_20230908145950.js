import React,{useEffect,useState} from "react";
import './Short'

export default function ShortBreak() {
  const [seconds, setSeconds] = useState(5 * 60);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let interval;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(25 * 60);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div>
      <div className="timer">{formatTime(seconds)}</div>
      <div className="buttons">
          {isRunning ? (
            <button className="startstopbtn" onClick={stopTimer}>
              PAUSE
            </button>
          ) : (
            <button className="startstopbtn" onClick={startTimer}>
              START
            </button>
          )}
          <button className="startstopbtn" onClick={resetTimer}>
            RESET
          </button>
        </div>
    </div>
  );
}
