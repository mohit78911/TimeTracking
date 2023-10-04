import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BackgroundColor from "../DialogBoxs/BackgroundColor";
import SettingBox from "../DialogBoxs/SettingBox";

export default function Header({
  loginOpenHandler,
  manualTiming,
  setManualTiming,
  longBreakTiming,
  setLongBreakTiming,
  color,
  setColor,
}) {
  const [sound, setSound] = useState();
  const [range, setRange] = useState(50);
  const [repeatNumber, setRepeatNumber] = useState(1);

  //for mui dialog box
  const [open, setOpen] = React.useState(false);
  const [openSecond, setOpenSecond] = React.useState(false);
  const [scroll, setScroll] = useState("paper");
  const handleClickOpen = (scrollType) => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getDetails = (i, value) => {
    console.log(value);
  };

  return (
    <div>
      <div className="headerContaine container">
        <h1 className="container title">
          <CheckCircleIcon />Pomofocus 
        </h1>
        <div className="headerBtn">
          <button className="darkbtn m-1">
            <AssessmentIcon />
            <span className="btnname">Report</span>
          </button>
          <button
            className="darkbtn m-1"
            onClick={() => handleClickOpen("paper")}
          >
            <SettingsIcon />
            <span className="btnname">Setting</span>
          </button>
          <button className="darkbtn m-1" onClick={loginOpenHandler}>
            <AccountCircleIcon /> <span className="btnname">Login</span>
          </button>
        </div>
      </div>
      {/* ======================================================================= */}

      <div>
        {open ? (
          <SettingBox
            open={open}
            scroll={scroll}
            handleClose={handleClose}
            manualTiming={manualTiming}
            setManualTiming={setManualTiming}
            getDetails={getDetails}
            longBreakTiming={longBreakTiming}
            setLongBreakTiming={setLongBreakTiming}
            sound={sound}
            setSound={setSound}
            range={range}
            setRange={setRange}
            repeatNumber={repeatNumber}
            setRepeatNumber={setRepeatNumber}
            setOpenSecond={setOpenSecond}
            setColor={setColor}
            color={color}
          />
        ) : null}
      </div>
      <div>
        {openSecond ? (
          <BackgroundColor
            openSecond={openSecond}
            setOpenSecond={setOpenSecond}
            setColor={setColor}
          />
        ) : null}
      </div>
    </div>
  );
}
