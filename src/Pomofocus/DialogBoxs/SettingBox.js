import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import Switch from "@mui/material/Switch";
import TimerIcon from "@mui/icons-material/Timer";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LaunchIcon from "@mui/icons-material/Launch";

export default function SettingBox({
  open,
  scroll,
  handleClose,
  manualTiming,
  setManualTiming,
  getDetails,
  longBreakTiming,
  setLongBreakTiming,
  sound,
  setSound,
  range,
  setRange,
  repeatNumber,
  setRepeatNumber,
  setOpenSecond,
  color,
  setColor,
}) {
  useEffect(() => {
    if (color === false) {
      setColor("skyblue");
    }
  }, []);

  const getLocalData = localStorage.getItem("timeRunning");
  const changeColorHandler = (i, colorSwitch) => {
    if (colorSwitch === true) {
      setColor("black");
    } else {
      setColor("pink");
    }
    console.log(colorSwitch);
  };

  return (
    <div>
      <Dialog
        open={open}
        scroll={scroll}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ fontWeight: "bold", opacity: "0.7" }}>
          {"Settings"}
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          {/* timer container */}
          <label style={{ opacity: "0.5" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <TimerIcon />
            TIMER
          </label>{" "}
          <div className="row">
            <div className="col">
              <DialogContent>
                <label style={{ fontWeight: "bold" }}>SetTiming </label>
                <TextField
                  type="number"
                  value={manualTiming}
                  onChange={(e) => setManualTiming(e.target.value)}
                />
              </DialogContent>
            </div>
            <div className="col">
              <DialogContent>
                <label style={{ fontWeight: "bold" }}>
                  Long Break interval{" "}
                </label>
                <TextField
                  type="number"
                  value={longBreakTiming}
                  onChange={(e) => setLongBreakTiming(e.target.value)}
                />
              </DialogContent>
            </div>
          </div>
          <DialogContent>
            <div className="dialogSwitch">
              <label>Auto Start Breaks : </label>&nbsp;
              <Switch defaultChecked color="warning" onChange={getDetails} />
            </div>
            <div className="dialogSwitch">
              <label>Auto Start Pomodoros : </label>&nbsp;
              <Switch defaultChecked color="warning" onChange={getDetails} />
            </div>
          </DialogContent>
          <hr
            style={{ width: "85%", marginLeft: "auto", marginRight: "auto" }}
          ></hr>
          {/* task container */}
          <DialogContent>
            <label style={{ opacity: "0.5", margin: "5px" }}>
              <TaskAltIcon />
              TASK
            </label>
            <div className="dialogSwitch">
              <label>Auto Check Tasks : </label>&nbsp;
              <Switch defaultChecked onChange={getDetails} />
            </div>
            <div className="dialogSwitch">
              <label>Auto Switch Tasks : </label>&nbsp;
              <Switch defaultChecked onChange={getDetails} />
            </div>
          </DialogContent>
          <hr
            style={{ width: "85%", marginLeft: "auto", marginRight: "auto" }}
          ></hr>
          <DialogContent>
            {/* Sound Container */}
            <label style={{ opacity: "0.5", margin: "5px" }}>
              <VolumeUpIcon />
              SOUND
            </label>
            <div className="dialogContain">
              <label>Alarm Sound</label>
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sound}
                onChange={(e) => setSound(e.target.value)}
              >
                <MenuItem>Bird</MenuItem>
                <MenuItem>Bell</MenuItem>
                <MenuItem>Kitchen</MenuItem>
                <MenuItem>Wood</MenuItem>
                <MenuItem>Digital</MenuItem>
              </Select>
            </div>
            <div className="dialogContain">
              <span>{range}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="range"
                min={0}
                max={100}
                value={range}
                onChange={(e) => setRange(e.target.value)}
              />
            </div>
            <div className="dialogContain">
              <label>Repeat</label>&nbsp;&nbsp;&nbsp;&nbsp;
              <input
                type="number"
                value={repeatNumber}
                onChange={(e) => setRepeatNumber(e.target.value)}
              />
            </div>
          </DialogContent>
          <hr
            style={{ width: "85%", marginLeft: "auto", marginRight: "auto" }}
          ></hr>
          <DialogContent>
            {/* Theme Container */}
            <label style={{ opacity: "0.5", margin: "5px" }}>
              <DarkModeIcon />
              THEME
            </label>
            <div className="dialogContain">
              <span>Theme Color : </span>

              <div
                style={{
                  background: "pink",
                  width: "25px",
                  height: "25px",
                  borderRadius: "5px",
                }}
                onClick={() => setOpenSecond(true)}
              ></div>
            </div>
            <div className="dialogContain">
              <span>Hour Format : </span>
              <Select
                sx={{ width: "25vh" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              >
                <MenuItem>24 Hours</MenuItem>
                <MenuItem>12 hours</MenuItem>
              </Select>
            </div>
            <div className="dialogContain">
              <span>Dark Mode when running</span>
              <Switch
                color="success"
                
                onChange={changeColorHandler}
              >
                {" "}
              </Switch>
            </div>
            <div className="dialogContain">
              <span>Small Window : </span>
              <button className="btn btn-light">
                Open<LaunchIcon style={{ opacity: "0.6" }}></LaunchIcon>
              </button>
            </div>
          </DialogContent>
          <hr
            style={{ width: "85%", marginLeft: "auto", marginRight: "auto" }}
          ></hr>
          <DialogContent>
            {/* notifications container */}
            <label style={{ opacity: "0.5", margin: "5px" }}>
              <NotificationsActiveIcon />
              NOTIFICATIONS
            </label>
          </DialogContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
