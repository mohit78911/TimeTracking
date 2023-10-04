import React, { useEffect, useState } from "react";
import "../Pages/Timer.css";
// =======

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CircularProgress from "@mui/joy/CircularProgress";

export default function ShortBreak({ manualTiming, setManualTiming }) {
  const [seconds, setSeconds] = useState(manualTiming * 60);
  const [isRunning, setIsRunning] = useState(false);

  //other part for countdown
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
    setSeconds(manualTiming * 60);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const remainingTime = () => {
    const minutes = Math.floor(seconds % 60);
    // const second = seconds / 60;
    // let countDown = minutes * second;
    return minutes * seconds;
  };

  // const [percentage, setPercentage] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (percentage < seconds * 60) {
  //       setPercentage(percentage - 1);
  //     }
  //   }, 50);
  // }, [percentage]);

  return (
    <div>
      <div className="timer">{formatTime(seconds)}</div>
      <div className="buttons">
        {isRunning ? (
          <button
            className="startstopbtn"
            onClick={() => {
              stopTimer();
            }}
          >
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
