import React from "react";
import Promodoro from "./Promodoro";
import ShortBreak from "./ShortBreak";
import LongBreak from "./LongBreak";

export default function ClockContain({
  activePromodoro,
  activeShortBreak,
  activeLongBreak,
  promodoro,
  shortBreak,
  longBreak,
  manualTiming,
  longBreakTiming,
  setManualTiming,
}) {
  return (
    <div className="clockContainer container">
      <div className="timerComponent">
        <div className="inlintbtns">
          <button className="breakbtn" onClick={() => activePromodoro()}>
            Promodoro
          </button>
          <button className="breakbtn" onClick={() => activeShortBreak()}>
            ShortBreak
          </button>
          <button className="breakbtn" onClick={() => activeLongBreak()}>
            LongBreak
          </button>
        </div>
        <div className="timingComponentsHandler">
          {promodoro ? (
            <Promodoro
              manualTiming={manualTiming}
              setManualTiming={setManualTiming}
            />
          ) : null}
          {shortBreak ? <ShortBreak /> : null}
          {longBreak ? <LongBreak longBreakTiming={longBreakTiming} /> : null}
        </div>
      </div>
    </div>
  );
}
