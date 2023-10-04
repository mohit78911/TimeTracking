import React, { useState, useEffect } from "react";
import "./Timer.css";
import TaskDialog from "./TaskDialog";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import ClockContain from "../TimingComponents/ClockContain";
import TaskNumberName from "./TaskNumberName";
 

function App() {
  const [promodoro, setPromodoro] = useState(true);
  const [shortBreak, setShortBreak] = useState(false);
  const [longBreak, setLongBreak] = useState(false);
  const [taskNumber, setTaskNumber] = useState(1);
  const [taskName, setTaskName] = React.useState("Time to focus");
  const [manualTiming, setManualTiming] = useState(25);
  const [longBreakTiming, setLongBreakTiming] = useState(15);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("black");

  const activePromodoro = () => {
    setTaskNumber(2);
    setPromodoro(true);
    setShortBreak(false);
    setLongBreak(false);
  };
  const activeShortBreak = () => {
    setTaskNumber(1);
    setShortBreak(true);
    setPromodoro(false);
    setLongBreak(false);
  };
  const activeLongBreak = () => {
    setTaskNumber(1);
    setLongBreak(true);
    setPromodoro(false);
    setShortBreak(false);
  };

  //dialog box open and close
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //routing location or navigate the page
  const location = useNavigate();
  const loginOpenHandler = () => {
    location("/login");
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
    <div className="App">
      {loading ? (
        <div className="loadinglogo">
          <img
            src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif"
            width={800}
          />
        </div>
      ) : (
        <div className="mainTimerClass" style={{ background: `${color}` }}>

          <div className="secondClass">
            <Header
              color={color}
              setColor={setColor}
              loginOpenHandler={loginOpenHandler}
              manualTiming={manualTiming}
              setManualTiming={setManualTiming}
              longBreakTiming={longBreakTiming}
              setLongBreakTiming={setLongBreakTiming}
            />
            <hr className="line"></hr>
            <ClockContain
            setManualTiming={setManualTiming}
              manualTiming={manualTiming}
              activePromodoro={activePromodoro}
              activeShortBreak={activeShortBreak}
              activeLongBreak={activeLongBreak}
              promodoro={promodoro}
              shortBreak={shortBreak}
              longBreak={longBreak}
              longBreakTiming={longBreakTiming}
              setLongBreakTiming={setLongBreakTiming}
            />
            <TaskNumberName taskNumber={taskNumber} taskName={taskName} />
            <div className="taskdialogContainer">
              <TaskDialog
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                open={open}
                taskName={taskName}
                setTaskName={setTaskName}
              />
            </div>
             
          </div>
        </div>
      )}
      <div></div>
      </div>
    </>
  );
}

export default App;

 
